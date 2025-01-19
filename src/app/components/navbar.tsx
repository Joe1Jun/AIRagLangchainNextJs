// components/Navbar.tsx
// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 h-full bg-gray-500 p-4 text-white w-64 border-r border-gray-400">
      <div className="text-lg font-bold mb-6">My Chat App</div>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}


  