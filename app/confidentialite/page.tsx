import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Magikid",
  description:
    "Politique de confidentialité de Magikid : nous ne collectons aucune donnée des spectateurs.",
};

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" updated="Dernière mise à jour : 14 juin 2026">
      <div className="callout">
        <strong>En résumé :</strong> Magikid ne collecte aucune donnée personnelle de ses
        spectateurs. Nous n&apos;avons ni compte utilisateur, ni formulaire de suivi, ni traceur sur
        ce site.
      </div>

      <h2>1. Données collectées par Magikid</h2>
      <p>
        Magikid est un service automatisé de génération et de publication de contes.{" "}
        <strong>Nous ne collectons, ne stockons et ne traitons aucune donnée personnelle</strong>{" "}
        concernant les personnes qui visionnent nos contes ou consultent ce site.
      </p>
      <p>
        Aucune inscription, aucun compte, aucun traceur n&apos;est requis pour profiter de Magikid.
        Nous n&apos;utilisons pas de cookies, de pixels de suivi, ni d&apos;outils d&apos;analyse sur ce site.
        Si vous nous écrivez (par exemple pour une demande de démo), nous n&apos;utilisons votre adresse
        e-mail que pour vous répondre.
      </p>

      <h2>2. Données accédées via l&apos;API TikTok</h2>
      <p>
        Magikid utilise l&apos;API TikTok (Login Kit + Content Posting API) exclusivement pour
        authentifier et publier du contenu sur le compte officiel <strong>@magikid2</strong>. Les
        données accédées via cette API (open ID, nom d&apos;affichage, avatar du compte Magikid) servent
        uniquement à l&apos;authentification du compte propriétaire et ne sont jamais partagées,
        vendues ou utilisées pour profiler des utilisateurs tiers. Aucune donnée d&apos;autres comptes
        TikTok n&apos;est collectée.
      </p>

      <h2>3. Données collectées par les plateformes tierces</h2>
      <p>
        Nos contes sont diffusés via <strong>TikTok</strong> et <strong>YouTube</strong>. Lorsque
        vous regardez ces vidéos sur ces plateformes, ce sont elles qui collectent et traitent vos
        données selon leurs propres politiques :
      </p>
      <ul>
        <li>
          <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener">
            Politique de confidentialité de TikTok
          </a>
        </li>
        <li>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
            Politique de confidentialité de YouTube / Google
          </a>
        </li>
      </ul>
      <p>
        Magikid n&apos;a aucun accès à ces données et n&apos;en reçoit aucune transmission individuelle.
        Nous pouvons consulter les statistiques agrégées et anonymes fournies par ces plateformes
        (nombre de vues, durée moyenne de visionnage, etc.) à des fins d&apos;amélioration de notre
        contenu.
      </p>

      <h2>4. Enfants</h2>
      <p>
        Notre contenu est destiné aux enfants, mais nous ne collectons aucune donnée à leur sujet.
        Les plateformes TikTok et YouTube Kids appliquent leurs propres règles de protection des
        mineurs, et nous recommandons aux parents de superviser l&apos;utilisation de ces plateformes
        par leurs enfants.
      </p>

      <h2>5. Hébergement de ce site</h2>
      <p>
        Ce site est hébergé chez un prestataire d&apos;hébergement web standard, qui peut enregistrer
        des journaux techniques (adresses IP, type de navigateur) à des fins de sécurité et de bon
        fonctionnement du service. Ces journaux ne sont pas exploités par Magikid à des fins de
        profilage.
      </p>

      <h2>6. Vos droits</h2>
      <p>
        Étant donné que nous ne collectons pas de données vous concernant pour vous profiler, il
        n&apos;y a rien à consulter, modifier ou supprimer de notre côté hormis, le cas échéant, un
        e-mail que vous nous auriez envoyé — que nous supprimons sur simple demande. Pour toute
        demande relative aux données collectées par TikTok ou YouTube, adressez-vous directement à
        ces plateformes.
      </p>

      <h2>7. Modifications</h2>
      <p>
        Nous pouvons mettre à jour cette politique pour refléter des évolutions de notre service ou
        de la législation. Les changements prennent effet dès leur publication sur cette page.
      </p>

      <h2>8. Contact</h2>
      <p>
        Pour toute question concernant cette politique, écrivez-nous à{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
