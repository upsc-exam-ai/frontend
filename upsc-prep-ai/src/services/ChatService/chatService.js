const MOCK_REPLIES = [
  "Great! I'll generate a mock test based on that topic. Give me a moment to prepare the questions.",
  "I've noted your input. Would you like a 10-question or 25-question test on this subject?",
  "Understood. I'll focus on recent developments from the last 6 months for this topic.",
  "That's a high-priority area for UPSC prelims. Shall I include statement-based questions?",
  "I can see you're targeting Current Affairs. Want me to cross-reference this with the Economic Survey 2024?",
]

let replyIndex = 0

/**
 * Sends a message to the chatbot and returns a reply.
 * Replace this with a real API call when the backend is ready.
 */
export async function sendMessage(userMessage) {
  await new Promise((resolve) => setTimeout(resolve, 800))
  const reply = MOCK_REPLIES[replyIndex % MOCK_REPLIES.length]
  replyIndex++
  return reply
}
