import { createContext, useContext, useState, useCallback } from 'react'

const ChatContext = createContext(null)

let nextId = 1

function generateId() {
  return nextId++
}

const INITIAL_MESSAGE = {
  id: generateId(),
  role: 'ai',
  content:
    "Hello! I'm your UPSC Current Affairs AI assistant. Upload PDFs, share URLs, or paste notes to generate personalized mock tests. How can I help you prepare today?",
  timestamp: new Date(),
}

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [currentChatTitle, setCurrentChatTitle] = useState('Current Affairs Test Generator')

  const addMessage = useCallback((role, content) => {
    setMessages((prev) => [
      ...prev,
      {
        id: generateId(),
        role,
        content,
        timestamp: new Date(),
      },
    ])
  }, [])

  const clearMessages = useCallback(() => {
    nextId = 1
    setMessages([{ ...INITIAL_MESSAGE, id: generateId() }])
  }, [])

  return (
    <ChatContext.Provider value={{ messages, addMessage, clearMessages, currentChatTitle, setCurrentChatTitle }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const ctx = useContext(ChatContext)
  if (!ctx) throw new Error('useChat must be used inside ChatProvider')
  return ctx
}
