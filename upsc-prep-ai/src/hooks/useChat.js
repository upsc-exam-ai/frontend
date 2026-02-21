import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

function useChat() {
  const ctx = useContext(ChatContext)
  if (!ctx) throw new Error('useChat must be used inside ChatProvider')
  return ctx
}

export default useChat
