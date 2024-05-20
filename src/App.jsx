import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { PostsContextProvider } from './context/PostsContext'
function App() {


  return (
    <>
      <PostsContextProvider>
        <div className='flex flex-col min-h-screen'>
        <Outlet />
          <Footer />
      </div>
    </PostsContextProvider>
    </>
  )
}

export default App
