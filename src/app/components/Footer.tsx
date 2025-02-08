import Link from 'next/link';
import { FaFacebookSquare, FaInstagram , FaTwitter, FaPinterest} from "react-icons/fa";

import { AiFillLinkedin } from "react-icons/ai";


const Footer = () => {
  return (
    <>
     <footer className="bg-[#2A254B] text-white py-10">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Menu */}
      <div>
        <h3 className="font-bold text-lg mb-4">Menu</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/new-arrivals">
              New arrivals
            </Link>
          </li>
          <li>
            <Link href="/best-sellers">
        Best sellers
            </Link>
          </li>
          <li>
            <Link href="/recently-viewed">
              Recently viewed
            </Link>
          </li>
          <li>
            <Link href="/popular-this-week">
              Popular this week
            </Link>
          </li>
          <li>
            <Link href="/all-products">
            All products
            </Link>
          </li>
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-bold text-lg mb-4">Categories</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/crockery">
            Crockery
            </Link>
          </li>
          <li>
            <Link href="/furniture">
            Furniture
            </Link>
          </li>
          <li>
            <Link href="/homeware">
              Homeware
            </Link>
          </li>
          <li>
            <Link href="/plant-pots">
              Plant pots
            </Link>
          </li>
          <li>
            <Link href="/chairs">
        Chairs
            </Link>
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="font-bold text-lg mb-4">Our company</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/about-us">
            About us
            </Link>
          </li>
          <li>
            <Link href="/vacancies">
              Vacancies
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
    Contact us
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/returns-policy">
              Returns policy
            </Link>
          </li>
        </ul>
      </div>

      {/* Mailing List */}
      <div>
        <h3 className="font-bold text-lg mb-4">Join our mailing list</h3>
        <form>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full p-2 mb-4 rounded-md text-gray-800"
          />
          <button
            type="submit"
            className="w-full bg-blue-800 text-white p-2 rounded-md hover:bg-gray-700"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
{/* Bottom Section */}
<div className="border-t border-indigo-400 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; 2022 Avion LTD</p>
      <div className="flex space-x-4 mt-4 md:mt-0 mr-10">
        <Link href="#">
         <AiFillLinkedin />
         </Link>
        <Link href="#">
        <FaFacebookSquare />
          </Link>
          <Link href="#">
          <FaInstagram />
          </Link>

          <Link href="#">
        <FaTwitter />
          </Link>

          <Link href="#">
        <FaPinterest />
          </Link>

       
          </div></div>
          </footer>
          </>
  );
}

export default Footer