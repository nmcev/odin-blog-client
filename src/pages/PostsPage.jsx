import Header from '../components/Header'
import PostCard from '../components/PostCard'
import PostsHeader from '../components/PostsHeader'
export default function PostsPage() {
    return (
        <>
        <Header color='black'/>
      <section className='container min-h-screen mx-auto'>
            <PostsHeader />
             <div className='flex divide-y-2 flex-col items-center w-full max-w-3xl mx-auto'>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </section>
        </>
    )
}
