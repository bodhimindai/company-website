import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
      >
        <video autoPlay muted loop>
          <source src="/assets/flare.mp4" type="video/mp4" />
          Your browser does not support the video.
        </video>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl text-gray-200 font-bold mb-6 animate-fade-in-down">
          The Future of AI-Powered 
          Decision Intelligence 
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 mb-8 max-w-3xl mx-auto animate-fade-in-up">
          Let AI agents help you make smarter decisions and streamline your workflow.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in">
          <Link
            to="/contact"
            className="bg-white text-black px-4 py-2 font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center"
          >
            <p className="text-xl md:text-2xl text-gray-900 animate-fade-in-up">
              Contact us
            </p>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
