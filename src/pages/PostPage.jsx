import Header from '../components/Header'
export default function PostPage() {
  return (
    <>
      <Header color='black' />
    <section className="container mx-auto py-12 min-h-screen">

      <article className="flex flex-col items-center justify-center max-sm:mx-2">
        <div className="mt-8 flex flex-col items-left ">
          <h1 className="text-3xl font-bold font-careem ">
            How to create a blog using React and Tailwind CSS
          </h1>
          <p className="text-sm text-neutral-600 mt-[4px]">2 May 2024</p>


        <div>
            <p className="text-sm text-neutral-500 font-lightPoppins">
              description of the post, Now I am building this app for learning how to build an API
          </p>
        </div>

        <div className="mt-8">
          <img className="" src="https://dummyimage.com/804x492" alt="blog" width={804} height={492} />
         </div>

          <div className="mt-8 max-w-5xl">
            <p className="text-lg text-neutral-900 font-careem li">
              How to create a blog using React and Tailwind CSS in 2024, with latest and now I am building this app for learning how to build an API

              this it the content of the post
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex praesentium rerum molestiae quos cum possimus numquam perferendis fugiat obcaecati commodi animi dolorum incidunt consequuntur, iste totam, necessitatibus vel consequatur veritatis?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, hic? Totam incidunt facilis laudantium recusandae delectus. Doloremque odit labore molestiae adipisci error? Tempore maxime voluptas, dolores omnis sed molestiae numquam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quasi perspiciatis rerum architecto, temporibus nostrum delectus quas et doloremque provident ea hic, suscipit veritatis quod exercitationem adipisci sed voluptatem porro.
              {/* fill this with random text */}

              random text: Lorem ipsum dolor sit amet consectetur adipisicing elit
              . Sunt, quod. Quo, laboriosam
              more random text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quod. Quo, laboriosam
              more random text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quod. Quo, laboriosam

            </p>
            </div>
        </div>
        </article>
    </section>
    </>

  )
}
