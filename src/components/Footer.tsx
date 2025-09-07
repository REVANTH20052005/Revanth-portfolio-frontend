import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0065b3] py-12 border-t border-csk-yellow">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-csk-yellow mb-4">
            Revanth V
          </div>
          <p className="text-white mb-6 max-w-2xl mx-auto font-medium">
            Computer Science Student inspired by the champion spirit of Chennai Super Kings. 
            Building innovative AI solutions with the same passion and dedication.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-white">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>and CSK spirit</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-navy-700/30">
            <p className="text-white text-sm">
              © 2024 Revanth V. All rights reserved. | Whistle Podu! 💛
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;