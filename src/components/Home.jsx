import Header from "./Header";

 
export function Home() {
  return (

      <div className=' w-full flex flex-col max-md:mt-40    bg-gray-900 antialiased bg-grid-white/[0.02] relative overflow-hidden'>
        <Header />

      <div className=" p-4 max-w-7xl flex flex-col h-[100vh] justify-center items-center  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-poppins uppercase">
            Welcome to the Blog
            <br /> from the future.
        </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto font-lightPoppins">
            A blog about sharing my experiences and journey as a web developer and software engineer student.
        </p>
      </div>
    </div>
  );
}
