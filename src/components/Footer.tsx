import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-100 dark:border-zinc-400 mt-2 pb-4">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-200">
          <FontAwesomeIcon icon={faCopyright} className="text-[10px]"/>
          <span className="text-xs uppercase tracking-widest font-medium">
            2026 Yeremia Sutanto
          </span>
        </div>
        <h2 className="text-xs text-zinc-400 dark:text-zinc-200 italic font-serif">
            Stay Classy!
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
