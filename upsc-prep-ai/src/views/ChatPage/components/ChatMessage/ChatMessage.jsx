import './ChatMessage.css'

function ChatMessage({ role, content }) {
  return (
    <div className={`chat-message chat-message--${role}`}>
      <div className="chat-message__bubble">
        {content}
      </div>
    </div>
  )
}

export default ChatMessage
