import { useEffect, useState } from 'react'

const INTERACTIVE = 'a, button, input, textarea, [data-cursor], .interactive'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const onOver = (e) => {
      if (e.target.closest(INTERACTIVE)) setHovering(true)
    }

    const onOut = (e) => {
      if (e.target.closest(INTERACTIVE)) setHovering(false)
    }

    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [visible])

  return (
    <div
      className={`custom-cursor${hovering ? ' custom-cursor--hover' : ''}${visible ? ' custom-cursor--visible' : ''}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      aria-hidden="true"
    />
  )
}
