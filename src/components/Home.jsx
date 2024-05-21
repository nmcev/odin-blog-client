import { useNavigate } from "react-router";
import Header from "./Header";

 
export function Home() {
  const navigate = useNavigate()
  return (

      <div className=' w-full flex flex-col bg-[#153448] antialiased bg-grid-white/[0.02] relative overflow-hidden '>
        <Header color='white' />

      <div className=" p-4 max-w-7xl flex flex-col h-[100dvh]  justify-center items-center  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <div className="flex flex-col items-center justify-center mb-12 max-sm:mb-20">
          <h1 className="text-4xl md:text-7xl text-neutral-200 font-bold text-center  font-poppins uppercase">
            Welcome to the Blog
            <br /> from the future.
        </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center dark:text-white mx-auto font-lightPoppins">
            A blog about sharing my experiences and journey as a web developer and software engineer student.
          </p>
        </div>
        
        <a className="inline-flex cursor-pointer" onClick={() => navigate('/posts')}>
          <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-[#191919] hover:bg-gray-300  hover:text-black transition duration-500 ease-in-out text-white">explore all posts</span>
          <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-[#191919] hover:bg-gray-300 hover:text-black transition duration-500 ease-in-out">
        <svg className="h-3 w-3 svg-inline--fa fa-chevron-right fa-w-8 fa-9x" aria-hidden="true" focusable="false" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z" /></svg>
    </span>
</a>
      </div>
    </div>
  );
}
