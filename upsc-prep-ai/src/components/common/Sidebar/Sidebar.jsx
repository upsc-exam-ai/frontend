import { SquarePen } from 'lucide-react'
import './Sidebar.css'

const RECENT_CHATS = [
  { id: 1, name: 'Polity & Governance Test', time: '2 days ago' },
  { id: 2, name: 'Economic Survey 2024', time: '5 days ago' },
  { id: 3, name: 'Environment & Ecology', time: '1 week ago' },
  { id: 4, name: 'International Relations', time: '2 weeks ago' },
]

const PREVIOUS_TESTS = [
  { id: 1, name: 'Current Affairs - Dec 2024', date: 'Dec 18', score: 72 },
  { id: 2, name: 'Polity Mock Test', date: 'Dec 15', score: 68 },
  { id: 3, name: 'Economy Revision', date: 'Dec 12', score: 81 },
]

function getScoreClass(score) {
  if (score >= 75) return 'sidebar__test-item-score--high'
  if (score >= 60) return 'sidebar__test-item-score--mid'
  return 'sidebar__test-item-score--low'
}

function Sidebar({ isOpen, onNewChat }) {
  return (
    <aside className={`sidebar${isOpen ? '' : ' sidebar--collapsed'}`}>
      <div className="sidebar__brand">
        <span className="sidebar__brand-name">UPSC Prep AI</span>
      </div>

      <button className="sidebar__new-chat" onClick={onNewChat}>
        <SquarePen className="sidebar__new-chat-icon" size={16} />
        New Chat
      </button>

      <div className="sidebar__content">
        <div className="sidebar__section">
          <p className="sidebar__section-label">Recent Chats</p>
          {RECENT_CHATS.map((chat) => (
            <div key={chat.id} className="sidebar__chat-item">
              <p className="sidebar__chat-item-name">{chat.name}</p>
              <p className="sidebar__chat-item-time">{chat.time}</p>
            </div>
          ))}
        </div>

        <div className="sidebar__divider" />

        <div className="sidebar__section">
          <p className="sidebar__section-label">Previous Tests</p>
          {PREVIOUS_TESTS.map((test) => (
            <div key={test.id} className="sidebar__test-item">
              <div className="sidebar__test-item-info">
                <p className="sidebar__test-item-name">{test.name}</p>
                <p className="sidebar__test-item-date">{test.date}</p>
              </div>
              <span className={`sidebar__test-item-score ${getScoreClass(test.score)}`}>
                {test.score}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
