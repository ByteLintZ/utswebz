import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const FooterSection = () => {
  return (
    <footer className="footerSection bg-sky-950 dark:bg-black text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
            <div className="text-6xl font-extrabold text-white mb-8">
                    team<span className="text-blue-700 text-6xl ">.</span>
            </div>
          <p className="mb-2">Collaboration platform for modern teams.</p>
          <p className="text-sm text-gray-400">&copy; 2024 Team Inc.</p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-blue-800">Company</h4>
          <ul>
            <li className="mb-4"><a href="#" className="hover:text-blue-400">Product</a></li>
            <li className="mb-4"><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li className="mb-4"><a href="#" className="hover:text-blue-400">Support</a></li>
          </ul>
        </div>

        {/* Features Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-blue-800">Features</h4>
          <ul>
            <li className="mb-4"><a href="#" className="hover:text-blue-400">Screen Sharing</a></li>
            <li className="mb-4"><a href="#" className="hover:text-blue-400">iOS & Android Apps</a></li>
            <li className="mb-4"><a href="#" className="hover:text-blue-400">File Sharing</a></li>
            <li className="mb-4"><a href="#" className="hover:text-blue-400">User Management</a></li>
          </ul>
        </div>

        {/* Contact and Newsletter */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-blue-800">Contact Us</h4>
          <ul>
            <li className="flex items-center mb-6">
              <FiMail className="mr-2 text-blue-500" />
              <a href="mailto:info@teamapp.com" className="hover:text-blue-400">info@teamapp.com</a>
            </li>
            <li className="flex items-center mb-6">
              <FiPhone className="mr-2 text-blue-500" />
              <a href="tel:1800200300" className="hover:text-blue-400">1-800-200-300</a>
            </li>
            <li className="flex items-center">
              <FiMapPin className="mr-2 text-blue-500" />
              <span>1010 Sunset Blvd, Palo Alto, California</span>
            </li>
          </ul>
          <h4 className="text-lg font-semibold mt-6 mb-4">Stay up to date</h4>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="p-3 w-full text-gray-900 rounded-md mb-2"
            />
            <button className="py-3 px-4 bg-blue-600 text-white rounded-md w-full hover:bg-blue-700 transition">
              Subscribe to our newsletter
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
