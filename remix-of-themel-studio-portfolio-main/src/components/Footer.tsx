import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-foreground/10 mt-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left */}
          <div>
            <h3 className="text-foreground text-lg font-bold tracking-[0.25em] uppercase mb-3">
              THEMEL
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed tracking-wide">
              Renovim, Rindërtim dhe Projektim
            </p>
          </div>

          {/* Middle */}
          <div>
            <h4 className="text-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Faqet
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Kryefaqja", to: "/" },
                { label: "Rreth Nesh", to: "/rreth-nesh" },
                { label: "Kontakti", to: "/kontakti" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Kontakti
            </h4>
            <div className="flex flex-col gap-2 text-muted-foreground text-sm tracking-wide">
              <span>info@themel-studio.com</span>
              <span>+383 45 213 244</span>
              <span>Prishtinë, Kosovë</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-foreground/5 text-center">
          <p className="text-muted-foreground text-xs tracking-[0.15em]">
            © 2025 THEMEL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
