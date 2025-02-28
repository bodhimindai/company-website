import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/assets/ai.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] 
        bg-cover bg-center opacity-20"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
          BodhiMindAI - The Future of AI-Powered 
          Decision Intelligence 
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up">
          Building AI Agents for Compliance, Coordination & 
          Smarter Decisions
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in">
          <Link
            to="/contact"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
