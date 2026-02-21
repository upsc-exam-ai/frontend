import Sidebar from '../../components/common/Sidebar/Sidebar'
import Header from '../../components/common/Header/Header'
import ChatWindow from './components/ChatWindow/ChatWindow'
import ActionBar from './components/ActionBar/ActionBar'
import ChatInput from './components/ChatInput/ChatInput'
import useChat from '../../hooks/useChat'
import useSidebar from '../../hooks/useSidebar'
import { sendMessage } from '../../services/ChatService/chatService'
import './ChatPage.css'

function ChatPage() {
  const { messages, addMessage, clearMessages, currentChatTitle } = useChat()
  const { isOpen, toggle } = useSidebar(true)

  async function handleSend(text) {
    addMessage('user', text)
    const reply = await sendMessage(text)
    addMessage('ai', reply)
  }

  function handleNewChat() {
    clearMessages()
  }

  function handlePasteNotes() {
    // TODO: open a paste-notes modal
  }

  function handleAddUrl() {
    // TODO: open an add-URL modal
  }

  return (
    <div className="chat-page">
      <Sidebar isOpen={isOpen} onNewChat={handleNewChat} />

      <div className="chat-page__main">
        <Header title={currentChatTitle} onToggleSidebar={toggle} />

        <div className="chat-page__body">
          <ChatWindow messages={messages} />
        </div>

        <div className="chat-page__bottom">
          <ActionBar onPasteNotes={handlePasteNotes} onAddUrl={handleAddUrl} />
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  )
}

export default ChatPage
