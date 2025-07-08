import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 flex justify-center lg:px-8">
        <div className="text-center">
          <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} AI News Weekly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 