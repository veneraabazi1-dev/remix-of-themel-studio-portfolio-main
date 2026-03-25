import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const menuLinks = [
  { label: "KRYEFAQJA", to: "/" },
  { label: "PROJEKTET", to: "/#projektet" },
  { label: "RRETH NESH", to: "/rreth-nesh" },
  { label: "KONTAKTI", to: "/kontakti" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-foreground text-lg md:text-xl font-bold tracking-[0.25em] uppercase"
        >
          THEMEL
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="flex flex-col gap-[5px] group"
          aria-label="Open menu"
        >
          <span className="block w-7 h-[1.5px] bg-foreground transition-all group-hover:w-5" />
          <span className="block w-7 h-[1.5px] bg-foreground" />
          <span className="block w-7 h-[1.5px] bg-foreground transition-all group-hover:w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-surface-light flex items-center justify-center"
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 md:right-12 text-surface-light-fg text-2xl tracking-widest hover:opacity-60 transition-opacity"
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border border-border opacity-20" />
              <div className="absolute w-[400px] h-[400px] md:w-[580px] md:h-[580px] rounded-full border border-border opacity-10" />
              <div className="absolute w-[480px] h-[480px] md:w-[680px] md:h-[680px] rounded-full border border-border opacity-5" />
            </div>

            {/* Circle menu */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-background flex items-center justify-center shadow-[0_0_80px_rgba(0,0,0,0.3)]"
            >
              <div className="flex flex-col items-center gap-5 md:gap-7">
                {menuLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="text-foreground text-xs md:text-sm tracking-[0.3em] uppercase font-light hover:scale-110 transition-transform inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
