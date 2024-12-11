import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4">
        <div className="flex justify-center items-center space-x-2">
          <span className="text-gray-600">Made with</span>
          <Heart className="h-4 w-4 text-red-500 fill-current" />
        </div>
      </div>
    </footer>
  );
}