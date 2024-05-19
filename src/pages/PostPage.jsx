import { useParams } from 'react-router'
import Header from '../components/Header';
import { useContext, useEffect, useState } from 'react';
import { PostsContext } from '../context/PostsContext';
import Comment from '../components/Comment';
export default function PostPage() {
  const [post, setPost] = useState({})
  const { slug } = useParams();
  const { posts} = useContext(PostsContext);
  const [commentData, setCommentData] = useState({
    username: '',
    text: ''
  });


  useEffect(() => {
    setPost(posts.find(post => post.slug === slug));

  },[posts, slug])

  const handlePostComment = async (e) => {

    e.preventDefault();

    const response = await fetch(`${import.meta.env.VITE_API_URL}/comments`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({...commentData, postId: post._id})
    })
    if (response.ok) {
      const newComment = await response.json();


      setPost((prevPost) => ({
        ...prevPost,
        comments: [...prevPost.comments, newComment],
      }))

      setCommentData({
        text: '',
        username: ''
      })
    }
  }


  const handleCommentChange = (e) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value
    })
  }
  if (!post) {
    return (
      <>
      <Header color='black' />
      <div className='flex  space-x-2 justify-center items-center bg-white h-[90vh]'>
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
      <Header color='black' />
    <section className="container mx-auto py-2 max-sm:ml-2 min-h-screen">

      <article className="flex flex-col items-center justify-center max-sm:mx-2 md:ml-20">
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
            <img src={post.img} alt="blog" className="max-w-full h-auto lg:max-w-[800px]" />
         </div>

          <div className="mt-8 max-w-4xl">
            <p className="text-md text-neutral-900 font-careem max-sm:text-base" dangerouslySetInnerHTML={{__html: post.content}}>
            </p>
          </div>
              <article className='w-full gap-4  mx-auto'>
                    <h2 className=' font-boldPoppins p-2  border-b-2'>Comments</h2>
                        <form  method='post'   >
                        <div className="w-72 m-4">
                          <div className="relative w-full min-w-[200px] h-10">
                            <input name='username' onChange={handleCommentChange}
                              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                              placeholder=" " /><label
                              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Username
                            </label>
                          </div>
                        </div>

                        <div className="w-72 m-4">
                          <div className="relative w-full min-w-[200px] h-10">
                            <input name='text' onChange={handleCommentChange}
                              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                              placeholder=" " /><label
                              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Comment
                            </label>
                          </div>
                         </div>

                              <button onClick={handlePostComment} type='submit' className='bg-[#191919] p-2 ml-4 rounded-none text-white font-careem'>
                                comment
                              </button>
                        </form>
                        <div className="flex flex-col gap-6 m-4 w-full max-sm:mt-10">
                          {
                            post.comments && post.comments.slice().reverse().map(comment => (
                              <Comment  key={comment._id} comment={comment}/>
                            ))
                          }
                        </div>
              </article>
          </div>
        </article>
    </section>
    </>

  )
}
