import PropTypes from 'prop-types';

export default function Comment({comment}) {
    return (
         <div className="flex flex-row items-center w-full pb-2 border-b border-gray-400">
          <div className="w-10 h-10 rounded-full overflow-hidden flex self-start">
            <img
              src="https://odin-blog-bucket.s3.eu-north-1.amazonaws.com/3683ee82d45b76e04341886e87616e8c"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="pl-2 flex flex-col gap-2">
            <div>
              <h3 className="m-0 font-semibold">{comment.username}</h3>
                        <small className="m-0">{comment.formattedDate}</small>
            </div>
            <p className="text-base">
                {comment.text}
            </p>
          </div>
        </div>
  )
}


Comment.propTypes = {
    comment: PropTypes.object
}