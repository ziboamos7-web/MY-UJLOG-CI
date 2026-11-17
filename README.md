# My UJLoG

Site statique, aucune étape de build.

## Comment ça marche
- `index.html` + `script.js` + `style.css` : écran d'accueil, inscription (code e-mail), connexion.
  Le brouillon d'inscription est conservé : si l'étudiant quitte la page pour aller chercher son code
  dans Gmail, il retrouve la même étape à son retour.
- `app.html` + `app.css` + `app.js` : l'application, lancée par `script.js` dans une iframe après la connexion.
- `uj-sync.js` : synchronisation temps réel du fil (publications, J'aime, commentaires, vues).
- `assets/` : images. `src/` : boutique et console, chargées seulement à l'ouverture.
- `_headers` : cache Cloudflare Pages (les fichiers sont versionnés par `?v=…`).

## Déploiement (Cloudflare Pages)
1. Mettre tout ce dossier à la racine d'un dépôt GitHub.
2. Cloudflare Pages > Créer un projet > Se connecter à Git. Commande de build : vide. Dossier de sortie : `/`.
3. Chaque `git push` met le site en ligne.

## Base de données (Supabase > SQL Editor), dans cet ordre
1. `ujlog_sql_manquant_boutique.sql`
2. `ujlog_sync_complet.sql`

## Important quand on modifie un fichier
Les fichiers sont servis en cache longue durée, avec un numéro de version dans l'URL (`?v=…`).
Si tu changes `app.js`, `app.css`, `app.html`, `script.js`, `style.css` ou `uj-sync.js`, change aussi le
`?v=` correspondant (dans `index.html`, `script.js` ou `app.html`), sinon les téléphones garderont l'ancienne version.
