import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-auburn-600 p-6">
        <hr className="my-6 border-stone-50 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-stone-50 sm:text-center">© 2025 <a href="https://www.linkedin.com/in/alice-silva-7596b92a3/" className="hover:underline">Alice Silva</a>.
            </span>
            <div className="text-lg flex mt-4 sm:justify-center sm:mt-0">
                <a href="https://www.linkedin.com/in/alice-silva-7596b92a3/" className="text-stone-50 hover:text-stone-300">
                    <FaLinkedin />
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="https://github.com/Alicelspires" className="text-stone-50 hover:text-stone-300 ms-5">
                    <FaGithub />
                    <span className="sr-only">Discord community</span>
                </a>
                <a href="alicelspires@gmail.com" className="text-stone-50 hover:text-stone-300 ms-5">
                    <FaEnvelope />
                    <span className="sr-only">Twitter page</span>
                </a>
            </div>
        </div>
      </footer>
    </>
  )
}
