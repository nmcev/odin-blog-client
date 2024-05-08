
export default function PostCard() {
    return (
        <article className="flex w-full p-4 pb-6">
            {/* information section */}
            <div className="p-4 w-full">
                <p className="text-sm text-neutral-600">2 May 2024</p>
                <h1 className="text-2xl font-bold text-neutral-900">Post Title</h1>
                <p className="text-sm text-neutral-600 mt-[4px]">
                    How to create a blog using React and Tailwind CSS
                    in 2024, with latest and now I am building this app for learning how to build an API
                </p>
            </div>
            {/*  image section */}
            <img className="" src="https://dummyimage.com/128x128" alt="blog" width={128} height={128}/>
        </article>
  )
}
