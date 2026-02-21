import { useRef } from 'react'
import { Upload, ClipboardList, Link } from 'lucide-react'
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
        className="action-bar__file-input"
        onChange={handleFileChange}
      />

      <button className="action-bar__btn" onClick={handleUploadClick}>
        <Upload className="action-bar__btn-icon" size={15} />
        Upload PDF
      </button>

      <button className="action-bar__btn" onClick={onPasteNotes}>
        <ClipboardList className="action-bar__btn-icon" size={15} />
        Paste Notes
      </button>

      <button className="action-bar__btn" onClick={onAddUrl}>
        <Link className="action-bar__btn-icon" size={15} />
        Add URL
      </button>
    </div>
  )
}

export default ActionBar
