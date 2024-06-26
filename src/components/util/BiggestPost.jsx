import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';


export default function BiggestPost({ post }) {
    const postImageWidth = 800;
    const postImageHeight = 600;
    const navigate = useNavigate()
    return (
        <>
            <div className="col-span-1 max-sm:mx-4 " >
                <div className="flex flex-col cursor-pointer" onClick={() => navigate(`/posts/${post.slug}`)}>
                <img 
                    src={post.img} 
                    alt="myImage" 
                    className="w-full h-auto max-md:max-w-full"
                    width={postImageWidth}
                    height={postImageHeight}
/>                    <h4 className="text-lg font-boldPoppins text-neutral-800 mt-4">{post.title}</h4>
                    <p className="text-sm font-lightPoppins text-neutral-900">{post.description}</p>
                </div>
            </div>
        </>
    )
}

BiggestPost.propTypes = {
    post: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,

    }).isRequired
};