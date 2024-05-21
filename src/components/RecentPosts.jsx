import TwoPostsSide from "./util/TwoPostsSide"
import BiggestPost from "./util/BiggestPost"
import { useContext, useEffect, useState } from "react"
import { PostsContext } from "../context/PostsContext"



export default function RecentPosts() {
    const { posts } = useContext(PostsContext);
    const [biggestPost, setBiggestPost] = useState(null);
    const [twoPosts, setTwoPosts] = useState([]);
  
    useEffect(() => {
      if (posts.length > 0) {
        setBiggestPost(posts[2]);
        setTwoPosts(posts.slice(0, 2));
      }
    }, [posts]);
  return (
      <>
<section className="text-black">

    <div className="container mx-auto py-12">
    <article className="flex flex-col items-center justify-center max-sm:mx-2">
        <h2 className=" text-4xl font-bold text-center text-neutral-800 font-poppins uppercase">
            Welcome to the Blog
            <br /> from the future.
        </h2>
        <p className="mt-4 font-normal text-base text-neutral-800  text-center mx-auto font-lightPoppins">
            I&apos;m a web developer and software engineer student. I&apos;m sharing my experiences and journey in this blog.
        </p>

        <div className='border-b-2 w-full border-neutral-300 my-4'></div>
    </article>

    <article className=' flex flex-col justify-center mt-4'>
        <div className='max-sm:ml-4'>
         <h3 className='text-2xl  font-boldPoppins text-neutral-800 '>
            Recent Posts
        </h3>
         <p className=' font-normal text-base text-neutral-900  font-lightPoppins'>
            Below some of my recent post
         </p>
        </div>

        <section className='container grid grid-cols-1 md:grid-cols-2 justify-items-center mt-10'>
        {biggestPost && <BiggestPost post={biggestPost} />}
            {twoPosts.length > 0 && (
              <TwoPostsSide post1={twoPosts[0]} post2={twoPosts[1]} />
            )}
        </section>
    </article>

    <div className="mt-10 text-center">
        <blockquote className="text-xl text-neutral-900 italic font-lightPoppins">
                &quot;He who can destroy oneself can live, then how can one commit suicide?&quot;
        </blockquote>
         <p className="text-sm text-neutral-600 mt-2">
            - Anonymous
        </p>
    </div>
</div>
</section>
      </>
    )
}
