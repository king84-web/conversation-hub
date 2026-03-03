// src/lib/cardsData.ts
export interface Question {
  id: string;
  text: string;
  category: string;
  cardName: string;
}

export interface Card {
  id: string;
  name: string;
  description: string;
  categories: string[];
  questions: Question[];
}

export const cardsData: Card[] = [
  {
    id: 'relationships-connection',
    name: 'Relationships & Connection',
    description: 'Explore deep conversations about friendships, family, and human connections',
    categories: ['Friendship & Community', 'Connection in the Modern World', 'Family & Support Systems', 'Love & Understanding'],
    questions: [
      { id: 'q1', text: 'What does being a true friend mean to you?', category: 'Friendship & Community', cardName: 'Relationships & Connection' },
      { id: 'q2', text: 'How do you usually make new friends?', category: 'Friendship & Community', cardName: 'Relationships & Connection' },
      { id: 'q3', text: 'What do you value most in your friendships?', category: 'Friendship & Community', cardName: 'Relationships & Connection' },
      { id: 'q4', text: 'Who in your life makes you feel the most understood?', category: 'Friendship & Community', cardName: 'Relationships & Connection' },
      { id: 'q5', text: "What's one friendship lesson you've learned over time?", category: 'Friendship & Community', cardName: 'Relationships & Connection' },
      { id: 'q6', text: 'How do you show appreciation to your friends?', category: 'Friendship & Community', cardName: 'Relationships & Connection' },
      { id: 'q7', text: 'When was the last time you made someone feel valued?', category: 'Friendship & Community', cardName: 'Relationships & Connection' },
      { id: 'q8', text: "How do you rebuild trust when it's been broken?", category: 'Friendship & Community', cardName: 'Relationships & Connection' },
      { id: 'q9', text: 'How has social media affected how you connect with people?', category: 'Connection in the Modern World', cardName: 'Relationships & Connection' },
      { id: 'q10', text: 'Do you find it easy or hard to connect with people offline?', category: 'Connection in the Modern World', cardName: 'Relationships & Connection' },
      { id: 'q11', text: "What's one way we can build more real connections in today's world?", category: 'Connection in the Modern World', cardName: 'Relationships & Connection' },
      { id: 'q12', text: 'How do you balance online and face-to-face relationships?', category: 'Connection in the Modern World', cardName: 'Relationships & Connection' }
    ]
  }
];

export function getCardById(id: string): Card | undefined {
  return cardsData.find(card => card.id === id);
}
