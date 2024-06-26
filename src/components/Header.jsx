import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdHome } from 'react-icons/md';

function AboutButton() {
    let history = useNavigate();
    const handleClick = () => {
        history('/about');
    }

    return (
      <button aria-label='navigate about page' type="button" onClick={handleClick}>
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
      <button aria-label='navigate posts page' type="button" onClick={handleClick}>
        Posts
      </button>
    );
}

function HomeButton() {
    let history = useNavigate();
    const handleClick = () => {
        history('/');
    }

    return (
        <button aria-label='home button'  type="button" onClick={handleClick}>
          <MdHome />
        </button>
      );

}
export default function Header({color = 'white'}) {

    const colorVariants = {
        'white': 'text-white',
        'black': 'text-neutral-800',
    };
    return (
        <header className="max-sm:pt-0 pt-8 md:ml-20  text-lg max-md:ml-12 max-sm:text-md max-sm:mt-8 font-careem ">
            <nav>
                <ul className="list-none flex  items-center gap-16">
                    <li className={`${colorVariants[color]}`}>
                        <HomeButton />
                    </li>
                    <li className={`${colorVariants[color]}`} >
                        <PostsButton />
                    </li>
                    <li className={`${colorVariants[color]}`} >
                        <AboutButton />
                    </li>
                </ul>
            </nav>
      </header>
  )
}

Header.propTypes = {
    color: PropTypes.string,
};