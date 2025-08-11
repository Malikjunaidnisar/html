import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/Outlet.tsx'
import Home from './pages/Home'
import AddNewSite from './pages/NewSite.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new-site" element={<AddNewSite />} />
      </Route>
    </Routes>
  )
}

export default App