import myImage  from "../../assets/s.jpg"


export default function BiggestPost() {
    return (
        <>
            <div className="col-span-1 max-sm:mx-4">
                <div className="flex flex-col">
                <img src={myImage} alt="myImage" className="w-full h-auto max-md:max-w-full" />
                    <h4 className="text-lg font-boldPoppins text-neutral-800 mt-4">Post Title</h4>
                    <p className="text-sm font-lightPoppins text-neutral-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas.</p>
                </div>
            </div>
        </>
    )
}