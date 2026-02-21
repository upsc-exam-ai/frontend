import { useEffect, useRef } from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'
import './ChatWindow.css'

function ChatWindow({ messages }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (messages.length === 0) {
    return (
      <div className="chat-window">
        <p className="chat-window__empty">Start a conversation below.</p>
      </div>
    )
  }

  return (
    <div className="chat-window">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
      ))}
      <div ref={bottomRef} />
    </div>
  )
}

export default ChatWindow
