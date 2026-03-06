'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

interface ConversationMessage {
  type: 'user' | 'ai'
  content: string
  timestamp: Date
}

interface CardData {
  id: string
  name: string
  description: string
  categories: string[]
}

interface QuestionData {
  id: string
  text: string
  category: string
  cardName: string
}

// initial placeholder until we load from API
const SAMPLE_CARDS: CardData[] = []

// Sample questions for demonstration
const SAMPLE_QUESTIONS: Record<string, QuestionData[]> = {
  'relationships-connection': [
    { id: 'q1', text: 'What does being a true friend mean to you?', category: 'Friendship & Community', cardName: 'Relationships & Connection' },
    { id: 'q2', text: 'How do you usually make new friends?', category: 'Friendship & Community', cardName: 'Relationships & Connection' },
    { id: 'q3', text: 'What do you value most in your friendships?', category: 'Friendship & Community', cardName: 'Relationships & Connection' }
  ],
  'purpose-dreams': [
    { id: 'pd1', text: 'What does "living on purpose" mean to you?', category: 'Discovering Purpose', cardName: 'Purpose & Dreams' },
    { id: 'pd2', text: 'When did you first start thinking about your purpose in life?', category: 'Discovering Purpose', cardName: 'Purpose & Dreams' },
    { id: 'pd3', text: "What's a dream you've had since childhood?", category: 'Pursuing Dreams', cardName: 'Purpose & Dreams' }
  ],
  'reflection-gratitude': [
    { id: 'rg1', text: "What's one lesson this year has taught you?", category: 'Self-Reflection', cardName: 'Reflection & Gratitude' },
    { id: 'rg2', text: 'When was the last time you truly felt at peace with yourself?', category: 'Self-Reflection', cardName: 'Reflection & Gratitude' },
    { id: 'rg3', text: "What are three things you're grateful for this week?", category: 'Gratitude in Everyday Life', cardName: 'Reflection & Gratitude' }
  ],
  'faith-values': [
    { id: 'fv1', text: 'How did your relationship with God begin?', category: 'Faith Journey', cardName: 'Faith & Values' },
    { id: 'fv2', text: 'What does "trusting God" mean to you in practical terms?', category: 'Faith Journey', cardName: 'Faith & Values' },
    { id: 'fv3', text: 'What value do you live by no matter what?', category: 'Values & Principles', cardName: 'Faith & Values' }
  ],
  'society-culture': [
    { id: 'sc1', text: 'What does "community" mean to you?', category: 'Community & Belonging', cardName: 'Society & Culture' },
    { id: 'sc2', text: "What's one thing that makes your community special?", category: 'Community & Belonging', cardName: 'Society & Culture' },
    { id: 'sc3', text: "What's one issue in society that really matters to you?", category: 'Social Awareness', cardName: 'Society & Culture' }
  ],
  'general-questions': [
    { id: 'gq1', text: "What's your biggest fear?", category: 'Getting to Know You', cardName: 'General Questions' },
    { id: 'gq2', text: "What's your favorite childhood memory?", category: 'Getting to Know You', cardName: 'General Questions' },
    { id: 'gq3', text: "What's an experience that has shaped who you are today?", category: 'Getting to Know You', cardName: 'General Questions' }
  ]
}

export default function CardsHub() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userName, setUserName] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [cards, setCards] = useState<CardData[]>(SAMPLE_CARDS)
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionData | null>(null)
  const [conversation, setConversation] = useState<ConversationMessage[]>([])
  const [userInput, setUserInput] = useState('')
  const [isAILoading, setIsAILoading] = useState(false)

  // Check authentication on mount
  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    const userId = localStorage.getItem('userId')
    const savedUserName = localStorage.getItem('userName')

    if (authToken && userId) {
      setIsAuthenticated(true)
      setUserName(savedUserName || 'Friend')
    } else {
      router.push('/auth/login')
    }
    setIsLoading(false)

    // load cards from API
    fetch('/api/admin?action=cards')
      .then(r => r.json())
      .then(d => setCards(d.data || []))
      .catch(console.error)
  }, [router])

  const handleCardSelect = (cardId: string) => {
    setSelectedCard(cardId)
    setSelectedQuestion(null)
    setConversation([])
  }

  const handleQuestionSelect = (question: QuestionData) => {
    setSelectedQuestion(question)
    setConversation([
      {
        type: 'ai',
        content: `Hi ${userName}! I'm Steph, your thoughtful conversation partner. Let's explore this question together: "${question.text}" - Take your time and share what comes to mind.`,
        timestamp: new Date()
      }
    ])
  }

  const handleSendMessage = async () => {
    if (!userInput.trim() || !selectedQuestion) return

    // Add user message
    const userMessage: ConversationMessage = {
      type: 'user',
      content: userInput,
      timestamp: new Date()
    }

    // update local conversation immediately and build history for API
    const updatedHistory = [...conversation, userMessage]
    setConversation(updatedHistory)
    setUserInput('')
    setIsAILoading(true)

    try {
      // Call AI responder API
      const response = await fetch('/api/ai-responder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage: userInput,
          question: selectedQuestion.text,
          category: selectedQuestion.category,
          conversationHistory: updatedHistory
        })
      })

      const data = await response.json()

      // Add AI response
      const aiMessage: ConversationMessage = {
        type: 'ai',
        content: data.response || "Thank you for sharing. That's a meaningful response.",
        timestamp: new Date()
      }

      setConversation(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: ConversationMessage = {
        type: 'ai',
        content: 'Thank you for sharing. Your response is thoughtful and valuable.',
        timestamp: new Date()
      }
      setConversation(prev => [...prev, errorMessage])
    } finally {
      setIsAILoading(false)
    }
  }

  const currentCard = cards.find(c => c.id === selectedCard)
  const currentQuestions = selectedCard ? (SAMPLE_QUESTIONS[selectedCard as keyof typeof SAMPLE_QUESTIONS] || []) : []

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userId')
    localStorage.removeItem('userName')
    router.push('/auth/login')
  }

  if (isLoading) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block text-4xl mb-4">⏳</div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome, {userName}! 👋</h1>
              <p className="text-xl text-gray-600">Chat with Steph - your thoughtful conversation partner</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {/* Card Selection Panel */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20 max-h-96 md:max-h-screen overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6">Card Decks</h2>
                <div className="space-y-3">
                  {cards.map(card => (
                    <button
                      key={card.id}
                      onClick={() => handleCardSelect(card.id)}
                      className={`w-full text-left p-4 rounded-lg font-semibold transition ${
                        selectedCard === card.id
                          ? 'bg-accent text-primary'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {card.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-3">
              {!selectedCard ? (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <div className="inline-block text-6xl mb-6">📚</div>
                  <h3 className="text-2xl font-bold mb-4">Welcome to the Cards Hub</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Select a card deck from the left to explore meaningful questions. Answer each question and engage with intelligent AI responses tailored to your thoughts.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Card Info */}
                  <div className="bg-gradient-to-r from-primary to-gray-800 text-white p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-2">{currentCard?.name}</h2>
                    <p className="text-gray-200">{currentCard?.description}</p>
                  </div>

                  {/* Questions and Chat Area */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-max lg:auto-rows-auto">
                    {/* Questions List */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-4">Sample Questions</h3>
                      <div className="space-y-2 overflow-y-auto flex-1">
                        {currentQuestions.map(question => (
                          <button
                            key={question.id}
                            onClick={() => handleQuestionSelect(question)}
                            className={`w-full text-left p-3 rounded-lg transition font-semibold ${
                              selectedQuestion?.id === question.id
                                ? 'bg-accent text-primary'
                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                          >
                            <span className="text-xs uppercase text-gray-500 block mb-1">
                              {question.category}
                            </span>
                            {question.text}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Chat Area */}
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full min-h-96">
                      {selectedQuestion ? (
                        <>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold">Chat with Steph</h3>
                            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-accent">
                              <Image
                                src="/images/Steph.jpg"
                                alt="Steph"
                                width={32}
                                height={32}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          
                          {/* Messages */}
                          <div className="flex-1 overflow-y-auto mb-4 space-y-4 bg-gray-50 p-4 rounded-lg">
                            {conversation.map((msg, idx) => (
                              <div key={idx} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.type === 'ai' && (
                                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent">
                                    <Image
                                      src="/images/Steph.jpg"
                                      alt="Steph"
                                      width={32}
                                      height={32}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                )}
                                <div
                                  className={`max-w-xs px-4 py-2 rounded-lg ${
                                    msg.type === 'user'
                                      ? 'bg-accent text-primary'
                                      : 'bg-gray-200 text-gray-800'
                                  }`}
                                >
                                  <p className="text-sm">{msg.content}</p>
                                </div>
                              </div>
                            ))}
                            {isAILoading && (
                              <div className="flex gap-3 justify-start">
                                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent">
                                  <Image
                                    src="/images/Steph.jpg"
                                    alt="Steph"
                                    width={32}
                                    height={32}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                                  <p className="text-sm">Steph is thinking...</p>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Input */}
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={userInput}
                              onChange={(e) => setUserInput(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                              placeholder="Share your thoughts..."
                              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                              disabled={isAILoading}
                            />
                            <button
                              onClick={handleSendMessage}
                              disabled={isAILoading}
                              className="bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
                            >
                              Send
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center justify-center h-full text-center">
                          <div>
                            <div className="text-4xl mb-4">💬</div>
                            <p className="text-gray-600">Select a question to start chatting with Steph</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
