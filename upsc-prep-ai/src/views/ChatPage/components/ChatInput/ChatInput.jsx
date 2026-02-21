import { useState } from 'react'
import './ChatInput.css'

function ChatInput({ onSend }) {
  const [value, setValue] = useState('')

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submit()
    }
  }

  function submit() {
    const trimmed = value.trim()
    if (!trimmed) return
    onSend(trimmed)
    setValue('')
  }

  return (
    <div className="chat-input-row">
      <textarea
        className="chat-input"
        placeholder="Ask a question or request a test on specific topics..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
      />
      <button
        className="chat-input__send-btn"
        onClick={submit}
        disabled={!value.trim()}
        aria-label="Send message"
      >
        <svg className="chat-input__send-icon" viewBox="0 0 18 18">
          <path d="M15.5 9H2.5M9.5 3 15.5 9l-6 6" />
        </svg>
      </button>
      <button className="chat-input__help-btn" aria-label="Help">
        ?
      </button>
    </div>
  )
}

export default ChatInput
