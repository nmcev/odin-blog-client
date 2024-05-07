import TwoPostsSide from "./util/TwoPostsSide"
import BiggestPost from "./util/BiggestPost"



export default function RecentPosts() {
  return (
      <>
<section className="bg-fuchsia-50 text-black">

    <div className="container mx-auto py-12">
    <article className="flex flex-col items-center justify-center max-sm:mx-2">
        <h2 className=" text-4xl font-bold text-center bg-clip-text text-transparent  animate-gradient bg-opacity-50 font-poppins uppercase bg-[linear-gradient(to_right,#333333,#191919,#a3a3a3,#262626,#333333,#c0c0c0)]">
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

        <section className='container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 mt-10'>
            <BiggestPost />
            <TwoPostsSide />
        </section>
    </article>
    
</div>
</section>
      </>
    )
}
