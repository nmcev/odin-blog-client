import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
function App() {


  return (
    <div className=' w-full antialiased bg-grid-white/[0.02] relative overflow-hidden'>

      <Outlet />
      <Footer />
    </div>
  )
}

export default App
