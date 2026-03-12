import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6">
      <div className="text-center max-w-md">
        {/* 404 */}
        <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
        
        {/* Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Sorry, Not Built Yet
        </h2>
        
        <p className="text-gray-600 mb-8">
          Just a homepage demo for now
        </p>
        
        
      </div>
    </div>
  );
}