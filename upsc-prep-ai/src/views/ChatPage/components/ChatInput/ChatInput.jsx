import { useState, useRef, useEffect } from 'react'
import { ArrowRight, HelpCircle } from 'lucide-react'
import './ChatInput.css'

function ChatInput({ onSend }) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }, [value])

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
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  return (
    <div className="chat-input-row">
      <textarea
        ref={textareaRef}
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
        <ArrowRight size={18} />
      </button>
      <button className="chat-input__help-btn" aria-label="Help">
        <HelpCircle size={18} />
      </button>
    </div>
  )
}

export default ChatInput
