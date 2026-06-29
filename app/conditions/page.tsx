import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions d'utilisation — Magikid",
  description:
    "Conditions d'utilisation de Magikid, studio de production de contes pour enfants par IA.",
};

export default function Conditions() {
  return (
    <LegalLayout title="Conditions d'utilisation" updated="Dernière mise à jour : 25 mai 2026">
      <h2>1. Présentation</h2>
      <p>
        Magikid (« nous », « notre », « nos ») est un service automatisé qui génère des contes
        africains pour enfants à l&apos;aide de l&apos;intelligence artificielle et les publie sur des
        plateformes tierces telles que TikTok et YouTube. En accédant à notre contenu ou à ce
        site, vous acceptez les présentes Conditions d&apos;utilisation.
      </p>

      <h2>2. Nature du service</h2>
      <p>
        Magikid produit des contes (texte, image, voix off, vidéo) générés automatiquement par des
        modèles d&apos;intelligence artificielle. Les personnages, intrigues et illustrations sont des
        créations algorithmiques inspirées du patrimoine culturel africain. Le contenu est destiné
        à un usage de divertissement et d&apos;éveil culturel pour enfants.
      </p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        Les contes et vidéos publiés par Magikid restent la propriété de Magikid, sauf indication
        contraire. Toute reproduction, redistribution ou utilisation commerciale du contenu sans
        autorisation préalable est interdite. Le visionnage et le partage personnel via les
        fonctions natives de TikTok et YouTube sont autorisés.
      </p>

      <h2>4. Contenu généré par IA</h2>
      <p>
        Nos contes étant générés par IA, ils peuvent contenir des erreurs, des imprécisions
        historiques ou culturelles, ou des éléments involontaires. Nous nous efforçons d&apos;assurer
        une qualité et une bienveillance constantes, mais Magikid ne saurait être tenu responsable
        d&apos;éventuelles inexactitudes.
      </p>

      <h2>5. Public concerné</h2>
      <p>
        Le contenu est destiné aux enfants, mais le visionnage doit se faire sous la supervision
        d&apos;un adulte responsable. Magikid ne collecte aucune donnée auprès des spectateurs, mais les
        plateformes hôtes (TikTok, YouTube) appliquent leurs propres règles, notamment en matière
        de protection des mineurs.
      </p>

      <h2>6. Plateformes tierces</h2>
      <p>
        L&apos;accès à nos contes se fait via TikTok et YouTube, qui sont régis par leurs propres
        conditions d&apos;utilisation et politiques de confidentialité. Magikid n&apos;est pas responsable du
        comportement de ces plateformes, de leurs publicités, ni des contenus recommandés par
        leurs algorithmes.
      </p>

      <h2>7. Limitation de responsabilité</h2>
      <p>
        Magikid fournit son contenu « tel quel », sans garantie d&apos;aucune sorte. Nous déclinons
        toute responsabilité pour les dommages directs ou indirects résultant de l&apos;utilisation, de
        l&apos;interprétation ou de l&apos;indisponibilité de notre contenu.
      </p>

      <h2>8. Modifications</h2>
      <p>
        Nous pouvons modifier ces Conditions d&apos;utilisation à tout moment. Les changements prennent
        effet dès leur publication sur cette page. Il est recommandé de consulter ce document
        régulièrement.
      </p>

      <h2>9. Contact</h2>
      <p>
        Pour toute question concernant ces Conditions, contactez-nous à{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
