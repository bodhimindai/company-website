import { Linkedin, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="bg-[#eba569] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
          <Link to="/">
              <div className="flex items-center space-x-2">
                <img
                  className="h-8 w-8"
                  alt="company-logo"
                  src="/assets/logo.jpg"
                />
                <h3 className="text-lg font-semibold text-white">BodhiMindAI</h3>
              </div>
            </Link>
            <p className="text-white">
              The Future of AI-Powered
              Decision Intelligence
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-[#3399ff] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white hover:text-[#3399ff] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-white" />
                <a
                  href="mailto:info@bodhimindai.com"
                  className="text-white hover:text-[#3399ff] transition-colors"
                >
                  info@bodhimindai.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/bodhimindai/"
                className="text-white hover:text-[#3399ff] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#3B6790] text-center">
          <p className="text-white">
            © {new Date().getFullYear()} BodhiMindAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}