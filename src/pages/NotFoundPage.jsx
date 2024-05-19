import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen text-center  text-neutral-700 p-8'>
      <h1 className='text-3xl font-light'>
        404
      </h1>
      <h4 className='text-5xl'>
        Page Not Found
      </h4>
      <p className='pt-6'>
        Sorry, the page you are looking for does not exist.
      </p>
      <button className='bg-[#262626] p-2 px-3 mt-2 text-white rounded-[4px]' onClick={handleGoHome}>
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;
