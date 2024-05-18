import { useContext } from 'react'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import PostsHeader from '../components/PostsHeader'
import { PostsContext } from '../context/PostsContext'
export default function PostsPage() {
    const { posts } = useContext(PostsContext)
    return (
        <>
        <Header color='black'/>
      <section className='container min-h-screen mx-auto'>
            <PostsHeader />
                <div className='flex divide-y-2 flex-col items-center w-full max-w-3xl mx-auto'>
                    {
                        posts.length > 0 ? (
                            posts.map((post) => (
                                <PostCard post= {post}  key={post._id}/>
                            ))
                        ) :
                        (
                            <div className='flex  space-x-2 justify-center items-center bg-white h-[600px] '>
                                <span className='sr-only'>Loading...</span>
                                <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                                <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                                <div className='h-4 w-4 bg-black rounded-full animate-bounce'></div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}
