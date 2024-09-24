import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 flex items-center space-x-4">
      <li>
        <Link href="/" className="text-lg font-medium text-black">
          Home
        </Link>
      </li>
      <li>
        <Link href="/posts" className="text-lg font-medium text-black">
          Posts
        </Link>
      </li>
      <li>
        <Link href="/about" className="text-lg font-medium text-black">
          About Us
        </Link>
      </li>
      <li>
        <Link
          href="/blog/hello-world"
          className="text-lg font-medium text-black"
        >
          Blog Post
        </Link>
      </li>
    </ul>
  );
}
