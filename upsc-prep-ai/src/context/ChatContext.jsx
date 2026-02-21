import { createContext, useState, useCallback } from 'react'

const INITIAL_MESSAGE_CONTENT =
  "Hello! I'm your UPSC Current Affairs AI assistant. Upload PDFs, share URLs, or paste notes to generate personalized mock tests. How can I help you prepare today?"

function makeInitialMessage() {
  return {
    id: crypto.randomUUID(),
    role: 'ai',
    content: INITIAL_MESSAGE_CONTENT,
    timestamp: new Date(),
  }
}

export const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState(() => [makeInitialMessage()])
  const [currentChatTitle, setCurrentChatTitle] = useState('Current Affairs Test Generator')

  const addMessage = useCallback((role, content) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role,
        content,
        timestamp: new Date(),
      },
    ])
  }, [])

  const clearMessages = useCallback(() => {
    setMessages([makeInitialMessage()])
  }, [])

  return (
    <ChatContext.Provider value={{ messages, addMessage, clearMessages, currentChatTitle, setCurrentChatTitle }}>
      {children}
    </ChatContext.Provider>
  )
}
