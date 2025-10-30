export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Stowave</span> — All rights reserved.
      </p>
      <p className="text-xs mt-2">Made with ❤️ by Ali Zohaib</p>
    </footer>
  );
}
