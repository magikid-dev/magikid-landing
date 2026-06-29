import Image from "next/image";
import Link from "next/link";
import { Icon, BrandIcon } from "@/components/Icons";
import { MAILTO } from "@/lib/site";

const PIPELINE = [
  { icon: "heritage", step: "01", title: "Patrimoine", tool: "contes & valeurs" },
  { icon: "script", step: "02", title: "Scénario", tool: "IA · script" },
  { icon: "illustration", step: "03", title: "Illustration", tool: "personnages cohérents" },
  { icon: "voice", step: "04", title: "Voix", tool: "narration naturelle" },
  { icon: "montage", step: "05", title: "Montage", tool: "vidéo finie" },
  { icon: "publish", step: "06", title: "Publication", tool: "YouTube · TikTok" },
];

const AUDIENCE = [
  { icon: "globe", title: "ONG & fondations", text: "Diffusez vos valeurs et vos langues auprès des enfants, à grande échelle, sans monter un studio." },
  { icon: "book", title: "Éditeurs jeunesse", text: "Prolongez votre catalogue en vidéo et ouvrez une audience YouTube & TikTok déjà là." },
  { icon: "cap", title: "Edtech & écoles", text: "Du contenu pédagogique régulier, adapté à votre programme et à votre langue d'enseignement." },
  { icon: "broadcast", title: "Médias & chaînes", text: "Alimentez une rubrique enfants quotidienne sans mobiliser une équipe de production." },
  { icon: "building", title: "Institutions culturelles", text: "Faites vivre les traditions orales dans un format que les enfants regardent vraiment." },
  { icon: "handshake", title: "Marques engagées", text: "Un programme de contenu jeunesse à votre nom, cohérent et publié sans relâche." },
];

const VALUE = [
  { icon: "tag", title: "Votre marque, vos langues", text: "Personnages, identité visuelle, langue de narration — wolof, français, anglais ou la vôtre." },
  { icon: "growth", title: "Du volume, tous les jours", text: "Une cadence quotidienne tenue par la machine, pas par une équipe à recruter." },
  { icon: "coins", title: "Un coût par épisode imbattable", text: "L'automatisation divise le prix d'une vidéo par rapport à une production traditionnelle." },
  { icon: "shield", title: "Sûr pour les enfants", text: "Contenu calibré jeune public, conforme « Made for Kids » / COPPA dès la diffusion." },
  { icon: "key", title: "Clé en main", text: "De l'idée à la mise en ligne. Vous gardez la main éditoriale, on s'occupe du reste." },
  { icon: "copyright", title: "Le catalogue est à vous", text: "Vous restez propriétaire des contenus produits et des comptes de diffusion." },
];

const OFFER = [
  "Direction artistique & personnages à votre identité",
  "Adaptation linguistique (dont langues africaines)",
  "Mise en place de la chaîne de production complète",
  "Publication automatique sur vos comptes",
  "Cadence de production sur abonnement mensuel",
  "Accompagnement éditorial et suivi",
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <a className="brand" href="#top">
            <Image src="/magikid_1024x1024.png" alt="" width={34} height={34} />
            Magikid
          </a>
          <div className="nav-links">
            <a href="#procede">Le procédé</a>
            <a href="#pour-qui">Pour qui</a>
            <a href="#preuve">En direct</a>
            <a href="#offre">Offre</a>
            <a className="nav-cta" href={MAILTO}>Demander une démo</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero" id="top">
        <div className="wrap">
          <p className="eyebrow on-dark">Studio de production jeunesse · automatisé par IA</p>
          <h1>
            Des contes pour enfants, finis et publiés <span className="accent">chaque jour</span> — à votre marque.
          </h1>
          <p className="sub">
            Magikid transforme le patrimoine africain en vidéos prêtes à diffuser : écrites,
            illustrées, narrées, montées et mises en ligne automatiquement. Votre catalogue,
            vos langues, vos couleurs — à une fraction du coût d&apos;un studio classique.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={MAILTO}>Demander une démo</a>
            <a className="btn btn-ghost" href="https://www.youtube.com/@magikid-k3j" target="_blank" rel="noopener">
              Voir la production en direct →
            </a>
          </div>
          <div className="proof">
            <span><i className="dot" /> En production continue depuis juin 2026</span>
            <span><i className="dot" /> 2 nouveaux contes par jour</span>
            <span><i className="dot" /> YouTube + TikTok</span>
            <span><i className="dot" /> 100 % conforme « Made for Kids » / COPPA</span>
          </div>
        </div>
      </header>

      {/* Signature : la chaîne de production */}
      <section className="line-sec" id="procede">
        <div className="wrap">
          <p className="eyebrow on-dark">Le procédé</p>
          <h2>Une chaîne de production, pas un outil de plus.</h2>
          <p className="desc">
            Du patrimoine à la vidéo en ligne, chaque étape s&apos;enchaîne sans intervention manuelle.
            Vous fournissez la direction éditoriale ; la chaîne tourne toute seule, tous les jours.
          </p>
          <div className="pipeline">
            <div className="pipeline-track">
              <div className="pipeline-rail" />
              {PIPELINE.map((s) => (
                <div className="stage" key={s.step}>
                  <div className="node"><Icon name={s.icon} /></div>
                  <span className="step">{s.step}</span>
                  <h3>{s.title}</h3>
                  <span className="tool">{s.tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="sec who" id="pour-qui">
        <div className="wrap">
          <p className="eyebrow">Pour qui</p>
          <h2>Conçu pour ceux qui ont un message et pas le temps de tout produire.</h2>
          <div className="grid grid-3">
            {AUDIENCE.map((c) => (
              <div className="card" key={c.title}>
                <span className="ic"><Icon name={c.icon} /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que vous obtenez */}
      <section className="sec" id="valeur">
        <div className="wrap">
          <p className="eyebrow">Ce que vous obtenez</p>
          <h2>Un studio entier, sans en porter les coûts.</h2>
          <div className="grid grid-3">
            {VALUE.map((c) => (
              <div className="card" key={c.title}>
                <span className="ic"><Icon name={c.icon} /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preuve en direct */}
      <section className="sec" id="preuve">
        <div className="wrap">
          <p className="eyebrow">La preuve tourne déjà</p>
          <h2>Notre propre chaîne est la démo.</h2>
          <p className="lead">
            Magikid fait tourner son propre studio en production réelle, en public, tous les jours.
            Regardez le résultat avant de nous parler.
          </p>
          <div className="live-grid">
            <a className="live yt" href="https://www.youtube.com/@magikid-k3j" target="_blank" rel="noopener">
              <span className="badge"><BrandIcon name="youtube" /></span>
              <span className="t"><strong>YouTube</strong><span>@magikid-k3j</span></span>
              <span className="go" aria-hidden="true">→</span>
            </a>
            <a className="live tt" href="https://www.tiktok.com/@magikid2" target="_blank" rel="noopener">
              <span className="badge"><BrandIcon name="tiktok" /></span>
              <span className="t"><strong>TikTok</strong><span>@magikid2</span></span>
              <span className="go" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Offre */}
      <section className="sec" id="offre">
        <div className="wrap">
          <div className="offer">
            <p className="eyebrow on-dark">L&apos;offre</p>
            <h2>Votre studio en marque blanche.</h2>
            <p className="lead">On installe la chaîne à vos couleurs, puis elle produit pour vous, en continu.</p>
            <ul className="offer-list">
              {OFFER.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <p className="price">
              Tarif sur devis — adapté à vos langues, votre volume et votre budget · mise en place puis abonnement de production mensuel.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="final">
        <div className="wrap">
          <p className="eyebrow">Parlons-en</p>
          <h2>
            Et si votre catalogue jeunesse se <span className="accent">produisait tout seul</span> ?
          </h2>
          <p>Dites-nous votre audience, vos langues et le volume visé. On vous montre une démo sur votre univers.</p>
          <a className="btn btn-primary" href={MAILTO}>Demander une démo</a>
        </div>
      </section>

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
