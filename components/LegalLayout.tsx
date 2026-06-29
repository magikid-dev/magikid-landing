import Link from "next/link";
import Image from "next/image";
import { MAILTO } from "@/lib/site";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <Link className="brand" href="/">
            <Image src="/magikid_1024x1024.png" alt="" width={34} height={34} />
            Magikid
          </Link>
          <div className="nav-links">
            <Link href="/">Accueil</Link>
            <Link href="/conditions">Conditions</Link>
            <Link href="/confidentialite">Confidentialité</Link>
            <a className="nav-cta" href={MAILTO}>Demander une démo</a>
          </div>
        </div>
      </nav>

      <header className="legal-head">
        <div className="wrap">
          <h1>{title}</h1>
          <p className="updated">{updated}</p>
        </div>
      </header>

      <main className="legal-main">{children}</main>

      <footer>
        <div className="wrap">
          <div>
            <Link href="/">Accueil</Link>
            <Link href="/conditions">Conditions d&apos;utilisation</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
          <p style={{ margin: 0 }}>© 2026 Magikid · Studio de production jeunesse</p>
        </div>
      </footer>
    </>
  );
}
