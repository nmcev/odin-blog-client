import myImage  from "../../assets/s.jpg"

export default function TwoPostsSide() {
    
    return (
        <>
            <div className="col-span-1 flex flex-col gap-3 max-sm:mx-8">
                 <div className="flex-1 mt-8 md:mt-0">
                 <img src={myImage} alt="myImage" className="w-full h-auto md:max-w-sm" style={{ maxWidth: '500px' }} />
                      <h4 className="text-lg font-boldPoppins text-neutral-800 mt-[4px]">Post Title</h4>
                      <p className="text-sm font-lightPoppins text-neutral-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas.</p>
                 </div>

                <div className="flex-1 mt-8 md:mt-0">
                <img src={myImage} alt="myImage" className="w-full h-auto md:max-w-sm" style={{ maxWidth: '500px' }} />
                    <h4 className="text-lg font-boldPoppins text-neutral-800 mt-[4px]">Post Title</h4>
                    <p className="text-sm font-lightPoppins text-neutral-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas.</p>
                </div>
             </div>
        </>
    )
}