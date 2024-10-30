import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaGithub, FaTwitter,FaInstagram } from 'react-icons/fa';

const NavBar = () => {
    return (
        <>
            <nav className="mb-20 flex items-center justify-between py-6">
                <div className="flex flex-shrink-0 items-center">
                    <h1 className='mx-2 w-10 my-4 text-4xl'>Nr</h1>
                    {/* <img className="mx-2 w-10 my-4" src={logo} alt="Logo" /> */}
                </div>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href="https://www.linkedin.com/in/nishanth-r-b7223b265" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
                    <a href="https://github.com/Nishanthcr7" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
