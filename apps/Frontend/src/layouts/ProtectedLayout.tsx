import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { PermissionLink } from '@/components/PermissionLink';

/**
 * ProtectedLayout - 用於需要認證和權限的頁面
 * 特點：包含 navbar，需要登入才能訪問
 */
const ProtectedLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="flex gap-4 justify-center items-center py-4 bg-gray-950 shadow-xl px-4">
        <PermissionLink
          to="/"
          subject="A01"
          className="px-6 py-2 rounded-full bg-gray-800 text-blue-300 hover:bg-gray-700 hover:text-blue-200 font-semibold transition duration-150 w-32 text-center cursor-pointer"
        >
          Main
        </PermissionLink>
        <PermissionLink
          to="/about"
          subject="B01"
          className="px-6 py-2 rounded-full bg-gray-800 text-purple-300 hover:bg-gray-700 hover:text-purple-200 font-semibold transition duration-150 w-32 text-center cursor-pointer"
        >
          About
        </PermissionLink>
        <Link
          to="/form"
          className="px-6 py-2 rounded-full bg-gray-800 text-cyan-300 hover:bg-gray-700 hover:text-cyan-200 font-semibold transition duration-150 w-32 text-center cursor-pointer"
        >
          Form
        </Link>
        <PermissionLink
          to="/gemini"
          subject="C01"
          className="px-6 py-2 rounded-full bg-gray-800 text-green-300 hover:bg-gray-700 hover:text-green-200 font-semibold transition duration-150 w-32 text-center cursor-pointer"
        >
          Gemini
        </PermissionLink>
        <PermissionLink
          to="/chatroom"
          subject="C01"
          className="px-6 py-2 rounded-full bg-gray-800 text-amber-300 hover:bg-gray-700 hover:text-amber-200 font-semibold transition duration-150 w-32 text-center cursor-pointer"
        >
          聊天室
        </PermissionLink>
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;