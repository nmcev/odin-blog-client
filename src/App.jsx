import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { PostsContextProvider } from './context/PostsContext'
function App() {


  return (
    <>
      <PostsContextProvider>
        <Outlet />
        <Footer />
    </PostsContextProvider>
    </>
  )
}

export default App
