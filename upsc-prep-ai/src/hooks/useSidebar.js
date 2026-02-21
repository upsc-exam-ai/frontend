import { useState } from 'react'

function useSidebar(initialOpen = true) {
  const [isOpen, setIsOpen] = useState(initialOpen)

  function toggle() {
    setIsOpen((prev) => !prev)
  }

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return { isOpen, toggle, open, close }
}

export default useSidebar
