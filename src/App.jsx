import { Outlet } from 'react-router-dom'
function App() {


  return (
    <div className=' w-full max-md:mt-40 antialiased bg-grid-white/[0.02] relative overflow-hidden'>

      <Outlet />
    </div>
  )
}

export default App
