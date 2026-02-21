import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChatProvider } from './context/ChatContext'
import ChatPage from './views/ChatPage/ChatPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <Routes>
          <Route path="/" element={<ChatPage />} />
        </Routes>
      </ChatProvider>
    </BrowserRouter>
  )
}

export default App
