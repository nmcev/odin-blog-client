import { Spotlight } from '../components/util/Spotlight'
import { Home } from '../components/Home'
import RecentPosts from '../components/RecentPosts'
import { useContext } from 'react';
import { PostsContext } from '../context/PostsContext';
import Header from '../components/Header';

export default function HomePage() {
    const { loading } = useContext(PostsContext);

    if (loading) {
        return (
            <>
        <Header color='black' />
            <div className='flex  space-x-2 justify-center items-center bg-white h-[800px] '>
                    <span className='sr-only'>Loading...</span>
                    <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                    <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                    <div className='h-4 w-4 bg-black rounded-full animate-bounce'></div>
            </div>
            </>
        )
    }
    return (
        <>

            <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
            />
            <Home />
            <RecentPosts />
        </>
  )
}
