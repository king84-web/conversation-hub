import { NextRequest, NextResponse } from 'next/server'

interface AIRequest {
  userMessage: string
  question: string
  category: string
  conversationHistory: Array<{ type: string; content: string }>
}

// System prompt for Steph - the AI conversation partner
const SYSTEM_PROMPT = `You are Steph, a thoughtful and empathetic conversation partner created by Conversation Hub to help people explore deep, meaningful questions about life, relationships, purpose, faith, and personal growth.

Your role is to:
1. Acknowledge and validate what the person has shared, referencing previous parts of the conversation when relevant
2. Ask a thoughtful follow-up question that deepens the reflection and builds on what they've already shared
3. Provide wisdom, perspective, or encouragement when appropriate, drawing connections to earlier topics
4. Keep responses warm, genuine, and focused on understanding the person better
5. Avoid being judgmental or prescriptive
6. Help the person discover their own insights by connecting dots from their previous responses
7. Occasionally share that you're here to support their journey of self-discovery
8. Remember and reference key themes, emotions, or insights from earlier in the conversation

Keep responses concise (2-3 sentences) and conversational. End with a thought-provoking question to continue the dialogue. Make the conversation feel continuous and personal.`

export async function POST(request: NextRequest) {
  try {
    const body: AIRequest = await request.json()

    let aiResponse = ''
    const openaiKey = process.env.OPENAI_API_KEY || ''

    if (openaiKey) {
      // build chat messages array for OpenAI
      const messages: Array<{ role: string; content: string }> = []

      // system prompt first
      messages.push({ role: 'system', content: SYSTEM_PROMPT })

      // include history if any
      if (Array.isArray(body.conversationHistory)) {
        for (const msg of body.conversationHistory) {
          const role = msg.type === 'user' ? 'user' : 'assistant'
          messages.push({ role, content: msg.content })
        }
      }
      // add current user message last
      messages.push({ role: 'user', content: body.userMessage })

      try {
        const resp = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openaiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages,
            max_tokens: 200,
            temperature: 0.8
          })
        })

        const data = await resp.json()
        aiResponse = data?.choices?.[0]?.message?.content?.trim() || ''
      } catch (err) {
        console.error('OpenAI request failed', err)
      }
    }

    // fallback to built-in canned responses
    if (!aiResponse) {
      aiResponse = generateResponse(
        body.userMessage,
        body.question,
        body.category
      )
    }

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error('Steph AI Responder Error:', error)
    return NextResponse.json(
      { response: 'Thank you for sharing. Your perspective is valuable and your journey matters to me.' },
      { status: 200 }
    )
  }
}

function generateResponse(userMessage: string, question: string, category: string): string {
  // Sample intelligent responses based on category
  const responses: Record<string, string[]> = {
    'Friendship & Community': [
      "That shows genuine care for relationships. How do you think this reflects your broader approach to building meaningful connections?",
      "It sounds like you place importance on authentic bonds. What's the one quality you look for most in a friend?",
      "What a thoughtful perspective. How has your understanding of friendship evolved over the years?"
    ],
    'Connection in the Modern World': [
      "You've touched on something many struggle with—the balance between digital and real connection. How can we cultivate more of these real moments?",
      "That's an insightful observation about modern connection. What change would make the biggest difference for you personally?",
      "I appreciate that perspective. In what moments do you feel most genuinely connected to others?"
    ],
    'Family & Support Systems': [
      "Family dynamics can be complex and meaningful. How do you think these experiences have shaped who you are today?",
      "That reveals something important about what you value in relationships. How do you express these values with your loved ones?",
      "Some of our deepest lessons come from family. How are you passing these values on or living them out?"
    ],
    'Love & Understanding': [
      "The way you describe connection shows emotional depth. How do you ensure your important relationships receive what they deserve?",
      "Building trust is foundational. What's one trust-building habit you wish you could develop more intentionally?",
      "That perspective on love is beautiful. How does it influence the relationships you're intentional about nurturing?"
    ],
    'Discovering Purpose': [
      "Purpose is such a personal discovery. What's one thing that happens when you're fully aligned with what matters to you?",
      "Your sense of purpose seems to be evolving. What signs tell you when you're moving in the right direction?",
      "How would your daily life change if you pursued this sense of purpose more fully?"
    ],
    'Pursuing Dreams': [
      "Dreams matter because they reflect what we truly value. What's the smallest step you could take toward this dream right now?",
      "Your dream says something important about your heart. How does it connect to your desire to impact others?",
      "What would it mean for your life if you actually pursued this dream?"
    ],
    'Self-Reflection': [
      "That's a profound insight about yourself. How will this realization shape your choices moving forward?",
      "Self-awareness is the foundation for growth. What's one area where you've grown the most this season?",
      "How can you honor what you've learned and integrate it into your daily life?"
    ],
    'Gratitude in Everyday Life': [
      "Noticing these small blessings is transformative. How does this gratitude practice change your perspective on challenges?",
      "It's powerful that you recognize these gifts. How can you help others see the blessings in their own lives?",
      "What happens in your heart when you pause to notice what you're grateful for?"
    ],
    'Faith Journey': [
      "That's a meaningful experience with faith. How has this shaped your trust in God during uncertain seasons?",
      "Your faith journey is uniquely yours. How do you stay grounded when doubt or difficulty arises?",
      "What does this reveal about the kind of faith journey you want to continue developing?"
    ],
    'Values & Principles': [
      "Living by your values, especially when no one's watching, takes real integrity. Where do you feel this value most tested?",
      "That principle is foundational to who you are. How do you help others understand and respect what you value?",
      "How does this value guide the most important decisions you make?"
    ],
    'Community & Belonging': [
      "You've identified something communities need to thrive. How can you be a catalyst for that in your own circle?",
      "A sense of belonging is fundamental to wellbeing. How do you help others feel truly welcomed?",
      "What role could you play in building the kind of community you envision?"
    ],
    'Social Awareness': [
      "You're aware of issues that matter deeply. What's one way you're already making a difference?",
      "That issue clearly resonates with your values. How does your faith inform your perspective on it?",
      "What conversation needs to happen around this issue, and how could you help facilitate it?"
    ],
    'Identity & Expression': [
      "Your identity is a gift to the world. How do you feel most authentically yourself?",
      "That's beautiful—maintaining your authenticity while embracing growth. How do you navigate that balance?",
      "How can you celebrate what makes you unique while remaining open to learning from others?"
    ],
    'Building a Better Future': [
      "You've identified a way to create meaningful change. What support or resources would help you pursue this?",
      "That's a vision worth pursuing. How can you start living into this change today?",
      "If one person in your life embraced this with you, what becomes possible?"
    ],
    'Getting to Know You': [
      "That reveals something important about your character. How does this shape the kind of person you want to become?",
      "What a meaningful experience. How has it influenced the choices you're making now?",
      "That's insightful. How can you build on this awareness in your personal growth?"
    ]
  }

  const categoryResponses = responses[category] || responses['Getting to Know You']
  const randomResponse = categoryResponses[Math.floor(Math.random() * categoryResponses.length)]

  // Add empathetic validation
  const empathyStarters = [
    "I hear you, and I appreciate that you shared that.", 
    "That's meaningful, and thank you for being so open.",
    "I hear the depth in what you're saying.",
    "I see you, and I value your honesty.",
    "That matters deeply, and I can sense why."
  ]
  
  const starter = empathyStarters[Math.floor(Math.random() * empathyStarters.length)]

  return `${starter} ${randomResponse}`
}

