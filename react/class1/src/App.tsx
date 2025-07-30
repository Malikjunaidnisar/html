/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'

import Greet from './components/Greet'
import Profile from './components/Profile'
import Welcome from './components/Welcome'
import BlogCard from './components/BlogCard/BlogCard'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <ul>
        <li>home</li>
      </ul>
    </header>

     <h1 className='text-center'>Hello World</h1>
     <Greet name='junaid' time={Date.now()}/>
     <Profile />
     <Welcome />
     <BlogCard title="KEYS of Keyboard" image="https://plus.unsplash.com/premium_photo-1753093847143-379f076c1400?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" shortDesc='This is picture of keys from a keyboard'/>
    </>
  )
}

export default App
