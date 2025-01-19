// components/Navbar.tsx
// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-grey-600 p-4 text-white border-b border-gray-400" >
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">My Chat App</div>
        <div>
          <ul className="flex space-x-4">
            {/* Using Link component for navigation */}
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

  