import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Exclusive */}
        <div>
          <h4 className="text-lg font-semibold">Exclusive</h4>
          <p className="mt-2">Subscribe</p>
          <p className="text-sm text-gray-400 mt-1">
            Get 10% off your first order
          </p>
          <div className="mt-4 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered bg-white text-black w-full rounded-l-lg"
            />
            <button className="btn btn-primary rounded-r-lg">→</button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold">Support</h4>
          <p className="mt-4 text-sm">
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>
          <p className="mt-2 text-sm">exclusive@gmail.com</p>
          <p className="mt-2 text-sm">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h4 className="text-lg font-semibold">Account</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h4 className="text-lg font-semibold">Quick Link</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h4 className="text-lg font-semibold">Download App</h4>
          <p className="mt-4 text-sm">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mt-4">
            <img
              src="https://via.placeholder.com/80x80.png?text=QR1"
              alt="QR Code 1"
              className="w-16 h-16"
            />
            <img
              src="https://via.placeholder.com/80x80.png?text=QR2"
              alt="QR Code 2"
              className="w-16 h-16"
            />
          </div>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
