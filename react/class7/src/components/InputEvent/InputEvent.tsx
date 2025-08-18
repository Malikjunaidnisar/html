import { useState } from 'react'

export default function InputEvent() {
  const [text, setText] = useState('')

  return (
    <div>
      <input
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  )
}