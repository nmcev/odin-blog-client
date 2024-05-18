import { useParams } from 'react-router'
import Header from '../components/Header';
import { useContext } from 'react';
import { PostsContext } from '../context/PostsContext';
export default function PostPage() {
  const { slug } = useParams();
  const { posts } = useContext(PostsContext);

  const post = posts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className='flex  space-x-2 justify-center items-center bg-white h-[600px] dark:invert'>
      <span className='sr-only'>Loading...</span>
      <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-4 w-4 bg-black rounded-full animate-bounce'></div>
  </div>
    )
  }
  return (
    <>
      <Header color='black' />
    <section className="container mx-auto py-12 min-h-screen">

      <article className="flex flex-col items-center justify-center max-sm:mx-2">
        <div className="mt-8 flex flex-col items-left ">
            <h1 className="text-3xl font-bold font-careem ">
              {post.title}
          </h1>
            <p className="text-sm text-neutral-600 mt-[4px]">{post.postedTime}</p>


        <div>
            <p className="text-sm text-neutral-500 font-lightPoppins">
              {post.description}
          </p>
        </div>

        <div className="mt-8">
          <img  src={post.img} alt="blog" style={{ maxWidth: '800px', height: 'auto' }} />
         </div>

          <div className="mt-8 max-w-5xl">
            <p className="text-lg text-neutral-900 font-careem li" dangerouslySetInnerHTML={{__html: post.content}}>
            </p>
            </div>
        </div>
        </article>
    </section>
    </>

  )
}
