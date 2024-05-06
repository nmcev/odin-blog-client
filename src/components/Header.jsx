import { useNavigate } from 'react-router-dom';

function AboutButton() {
    let history = useNavigate();
    const handleClick = () => {
        history('/about');
    }

    return (
      <button type="button" onClick={handleClick}>
        About
      </button>
    );
}

function PostsButton() {
    let history = useNavigate();
    const handleClick = () => {
        history('/posts');
    }

    return (
      <button type="button" onClick={handleClick}>
        Posts
      </button>
    );
}
export default function Header() {


    return (
        <header className="mt-6 md:ml-20  text-lg max-md:ml-12 max-sm:text-md max-sm:mt-8 quicksand-font ">
            <nav>
                <ul className="list-none flex  gap-16">
                    <li className=" text-white ">
                        <PostsButton />
                    </li>
                    <li className="  text-white ">
                        <AboutButton />
                    </li>
                </ul>
            </nav>
      </header>
  )
}
