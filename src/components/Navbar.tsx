import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ isDark, setIsDark }: { isDark: boolean; setIsDark: any }) => {
  return (
    // Navigation Bar
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 dark:bg-zinc-950/80 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-lg font-bold tracking-tighter uppercase leading-none dark:text-zinc-100">
          YS.
        </h1>
        <div className="flex items-center gap-8">
          <NavLink label="Projects" />
          <NavLink label="About" />
          <button
            className="bg-zinc-900 text-white px-5 py-2 text-sm font-medium hover:bg-zinc-700 transition-all duration-300 leading-none
                                dark:bg-zinc-100 dark:text-black"
          >
            Contact
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </nav>
  );
};
// Reusable Nav Component (Tetap seperti kemarin)
const NavLink = ({ label }: { label: string }) => (
  <a
    href="#"
    className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-300
                dark:text-zinc-100"
  >
    {label}
  </a>
);

export default Navbar;
