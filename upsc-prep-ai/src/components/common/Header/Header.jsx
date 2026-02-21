import { Menu } from 'lucide-react'
import './Header.css'

function Header({ title, onToggleSidebar }) {
  return (
    <header className="header">
      <button className="header__hamburger" onClick={onToggleSidebar} aria-label="Toggle sidebar">
        <Menu size={20} />
      </button>
      <h1 className="header__title">{title}</h1>
    </header>
  )
}

export default Header
