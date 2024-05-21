import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";


function GithubButton() {

    const handleClick = () => {
         window.location.href = 'https://github.com/nmcev';
    }

    return (
        <button type="button" onClick={handleClick}>
            <FaGithub size={'24px'} />
        </button>
    );
}

function LinkedInButton() {

    const handleClick = () => {
            window.location.href = 'https://www.linkedin.com/in/muhammed-khalid-2058b5251/'
    }

    return (
        <button type="button" onClick={handleClick}>
            <RxLinkedinLogo size={'24px'} />
        </button>
    );
}

export default function Footer() {
    return (
        <footer className="footer p-5 flex justify-around items-center flex-wrap pt-24 max-sm:flex-col max-sm:gap-8 mt-auto">
        <div className="flex items-center">
                <div className="flex-1">
                    <p className=" text-[#3e3e3e] font-careem">
                        &copy; 2024 Blog from the future. All rights reserved.
                    </p>
                </div>
            </div>

        <nav>
          <h6 className="footer-title text-center font-careem">Social</h6> 
          <div className="grid grid-flow-col gap-4 pb-4">
            <GithubButton />
            <LinkedInButton />
          </div>
        </nav>
      </footer>
    )
}
