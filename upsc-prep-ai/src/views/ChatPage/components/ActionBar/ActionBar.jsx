import { useRef } from 'react'
import './ActionBar.css'

function ActionBar({ onPasteNotes, onAddUrl }) {
  const fileInputRef = useRef(null)

  function handleUploadClick() {
    fileInputRef.current?.click()
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0]
    if (file) {
      console.log('PDF selected:', file.name)
    }
    e.target.value = ''
  }

  return (
    <div className="action-bar">
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <button className="action-bar__btn" onClick={handleUploadClick}>
        <svg className="action-bar__btn-icon" viewBox="0 0 16 16">
          <path d="M8 11V3M5 6l3-3 3 3" />
          <path d="M2 13h12" />
        </svg>
        Upload PDF
      </button>

      <button className="action-bar__btn" onClick={onPasteNotes}>
        <svg className="action-bar__btn-icon" viewBox="0 0 16 16">
          <rect x="4" y="2" width="8" height="12" rx="1" />
          <path d="M6 2v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2" />
          <path d="M6 8h4M6 10h3" />
        </svg>
        Paste Notes
      </button>

      <button className="action-bar__btn" onClick={onAddUrl}>
        <svg className="action-bar__btn-icon" viewBox="0 0 16 16">
          <path d="M6.5 9.5a3.536 3.536 0 0 0 5 0l2-2a3.536 3.536 0 0 0-5-5L7.5 3.5" />
          <path d="M9.5 6.5a3.536 3.536 0 0 0-5 0l-2 2a3.536 3.536 0 0 0 5 5l1-1" />
        </svg>
        Add URL
      </button>
    </div>
  )
}

export default ActionBar
