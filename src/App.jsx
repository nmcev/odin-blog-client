import { Outlet } from 'react-router-dom'
function App() {


  return (
    <div className=' w-full antialiased bg-grid-white/[0.02] relative overflow-hidden'>

      <Outlet />
    </div>
  )
}

export default App
