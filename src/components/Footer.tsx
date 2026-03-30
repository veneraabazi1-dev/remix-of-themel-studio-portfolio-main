import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <h3 className="mb-3 text-lg font-bold uppercase tracking-[0.25em] text-foreground">
              THEMEL
            </h3>
            <p className="text-sm tracking-wide text-muted-foreground">
              Projektim Renovim Rindertim
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
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
                  className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Kontakti
            </h4>
            <div className="flex flex-col gap-2 text-sm tracking-wide text-muted-foreground">
              <span>info@themel-studio.com</span>
              <span>+383 45 213 244</span>
              <span>Rr. Ulpiana nr. 32, Prishtinë, Kosovë</span>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-foreground/5 pt-6 text-center">
          <p className="text-xs tracking-[0.15em] text-muted-foreground">
            © 2025 THEMEL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
