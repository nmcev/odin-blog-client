import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'
export default function PostCard({ post }) {
    const navigate = useNavigate();

    return (
        <article className="flex w-full p-4 pb-6 cursor-pointer" onClick={() => navigate(`/posts/${post.slug}`)}>
            {/* information section */}
            <div className="p-4 w-full">
                <p className="text-sm text-neutral-500">{post.postedTime}</p>
                <h1 className="text-2xl  font-bold text-neutral-900 font-boldPoppins">{post.title}</h1>
                <p className='text-sm font-lightPoppins text-neutral-700'>
                    {post.description}
                </p>
            </div>
            {/*  image section */}
            <div className="flex items-center mx-auto">
                <img className="max-w-full h-auto min-w-48" src={post.img} alt="blog" width={328} height={328}/>
            </div>
        </article>
  )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
}