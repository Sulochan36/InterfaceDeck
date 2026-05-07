import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='w-full position-fixed bottom-0 pt-5'>
            <div className='border-t-2 border-neutral-200 flex flex-col justify-center items-center py-4'>
                <p className='text-md text-gray-600 font-semibold text-center '>
                    Designed & developed by <a href="https://sulochanmahajan.com/" target="_blank" className='text-blue-500 underline'>Sulochan Mahajan</a>
                </p>


                {/* Social Links */}
                <div className="flex justify-center gap-6 mb-4 text-neutral-500 mt-3">
                    <a
                        href="https://github.com/Sulochan36"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition hover:scale-110 duration-100"
                    >
                        <FaGithub size={22} />
                    </a>
                    <a
                        href="https://linkedin.com/in/sulochan-mahajan-81985b247"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition hover:scale-110 duration-100"
                    >
                        <FaLinkedin size={22} />
                    </a>
                    <a
                        href="https://www.instagram.com/sulochanmahajan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition hover:scale-110 duration-100"
                    >
                        <FaInstagram size={22} />
                    </a>
                    <a
                        href="https://x.com/MahajanSulochan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition hover:scale-110 duration-100"
                    >
                        <FaXTwitter size={22} />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Footer