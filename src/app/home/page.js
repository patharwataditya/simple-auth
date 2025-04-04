"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    console.log("Logging out");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600">MyApp</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to your dashboard</h1>
          <p className="mt-2 text-gray-600">
            You have successfully logged in to your account.
          </p>
          <div className="mt-6">
            <div className="p-4 border border-gray-200 rounded-md">
              <h2 className="text-lg font-medium text-gray-900">Getting Started</h2>
              <p className="mt-1 text-gray-600">
                This is your home page.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}