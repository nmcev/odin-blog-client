import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

export default function TwoPostsSide({post1, post2}) {
    const navigate = useNavigate()
    return (
        <>
            <div className="col-span-1 flex flex-col gap-3 max-sm:mx-8" >
                <div className="flex-1 mt-8 md:mt-0 cursor-pointer" onClick={() => navigate(`/posts/${post1.slug}`)}>
                 <img src={post1.img} alt="myImage" className="w-full h-auto md:max-w-sm" style={{ maxWidth: '500px' }} />
                      <h4 className="text-lg font-boldPoppins text-neutral-800 mt-[4px]">{post1.title}</h4>
                    <p className="text-sm font-lightPoppins text-neutral-900">{post1.description}</p>
                 </div>

                <div className="flex-1 mt-8 md:mt-0 cursor-pointer" onClick={() => navigate(`/posts/${post2.slug}`)}>
                <img src={post2.img} alt="myImage" className="w-full h-auto md:max-w-sm" style={{ maxWidth: '500px' }} />
                    <h4 className="text-lg font-boldPoppins text-neutral-800 mt-[4px]">{post2.title}</h4>
                    <p className="text-sm font-lightPoppins text-neutral-900">{[post2.description]}</p>
                </div>
             </div>
        </>
    )
}

TwoPostsSide.propTypes = {
    post1: PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
    post2: PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  };