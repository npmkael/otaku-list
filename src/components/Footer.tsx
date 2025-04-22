import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-red-500">OtakuList</h2>
            <p className="text-gray-400 mt-2">
              Your ultimate anime inventory and tracking tool.
            </p>
          </div>
          <div className="flex gap-8">
            <div>
              <h3 className="font-medium mb-2">Navigation</h3>
              <ul className="text-gray-400 space-y-1">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/discover" className="hover:text-white">
                    Discover
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Manga
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Characters
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Legal</h3>
              <ul className="text-gray-400 space-y-1">
                <li>
                  <Link to="#" className="hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} OtakuList. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
