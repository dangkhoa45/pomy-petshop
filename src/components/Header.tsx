import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone, FaTiktok } from "react-icons/fa"; // Import React Icons

interface NavLink {
  name: string;
  href: string;
}

interface HeaderProps {
  navLinks: NavLink[];
}

export default function Header({ navLinks }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-4 md:p-5 flex-col md:flex-row items-center justify-between">
        <Link
          href="/"
          className="flex items-center text-2xl font-bold text-indigo-600"
        >
          🐾 POMY PETSHOP
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks?.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 transition duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex space-x-4 text-gray-600">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition duration-300"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition duration-300"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="tel:+123456789"
            className="hover:text-indigo-600 transition duration-300"
          >
            <FaPhone size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
