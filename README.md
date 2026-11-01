# Toulouse Construction — Site Vitrine Officiel

Site web vitrine responsive, moderne et optimisé pour le référencement naturel (SEO) à Toulouse et en Haute-Garonne. Inspiré de l'ergonomie et du raffinement architectural de référence, sans pages annexes superflues ni galeries encombrantes.

---

## 📁 1. Comment Remplacer ou Réordonner les Photos

Toutes les photos sont stockées dans le dossier `images/` et appelées dans [index.html](file:///Users/moussasb/Downloads/site%20web%20anti/index.html) :

| Section du site | Fichier actuel | Rôle & Conseils |
| :--- | :--- | :--- |
| **Bannière d'accueil (Hero)** | `images/toulouse image devanture -min.webp` | Façade ou grand angle intérieur lumineux |
| **Rénovation Complète** | `images/full remedoel.jpg` | Vue d'ensemble salon/séjour réaménagé |
| **Cuisines** | `images/kitchens.jpg` | Cuisine moderne ou îlot central |
| **Salles de Bain** | `images/bathroom.jpg` | Douche à l'italienne ou baignoire design |
| **Étape 1 : Consultation** | `images/free consult.png.webp` | Croquis, rendez-vous client ou plan |
| **Étape 2 : Conception** | `images/design.png.webp` | Choix d'échantillons ou modélisation 3D |
| **Étape 3 : Réalisation** | `images/construction.png.webp` | Chantier propre en cours de réalisation |
| **Étape 4 : Livraison** | `images/quality assurance.png` | Finition soignée et contrôle qualité |
| **Nos Engagements / Valeurs**| `images/our values .jpg.webp` | Réalisation d'envergure ou équipe |

> **Pour changer une photo :**
> - Déposez votre nouvelle image dans le dossier `images/`
> - Ouvrez `index.html` et remplacez simplement le chemin dans la balise `<img src="images/votre-nom-image.jpg">` correspondante.

---

## 🚀 2. Publication sur GitHub & Activation de GitHub Pages

### A. Initialiser et envoyer sur votre GitHub (`OlympusFR`) :
Ouvrez votre terminal dans ce dossier et exécutez les commandes :

```bash
git init
git config user.name "OlympusFR"
git config user.email "teenzs.ads@gmail.com"

git add .
git commit -m "Site vitrine Toulouse Construction initial"
git branch -M main

# Créez au préalable un dépôt public sur GitHub (ex: toulouse-construction)
git remote add origin https://github.com/OlympusFR/toulouse-construction.git
git push -u origin main
```

### B. Activer GitHub Pages en 2 clics :
1. Allez sur votre dépôt GitHub : `https://github.com/OlympusFR/toulouse-construction`
2. Cliquez sur l'onglet **Settings** (Paramètres).
3. Dans la colonne de gauche, cliquez sur **Pages**.
4. Sous **Build and deployment** > **Branch** :
   - Sélectionnez la branche `main`
   - Laissez le dossier sur `/ (root)`
   - Cliquez sur **Save**.
5. Votre site sera visible publiquement en quelques secondes sur :
   `https://olympusfr.github.io/toulouse-construction/`

---

## 🌐 3. Connecter Votre Propre Nom de Domaine

Dès que vous possédez votre domaine (ex. chez OVH, Hostinger, Gandi, Google/Squarespace) :

### Dans GitHub :
1. Dans **Settings** > **Pages** de votre dépôt GitHub.
2. Sous **Custom domain**, renseignez votre domaine (ex: `www.toulouse-constructions-renovations.fr`).
3. Cliquez sur **Save**. GitHub va créer automatiquement un fichier `CNAME` à la racine de votre projet.
4. Cochez impérativement la case **Enforce HTTPS** pour que le cadenas vert (SSL) soit actif.

### Chez votre fournisseur de domaine (zone DNS) :
- Ajoutez un enregistrement **CNAME** :
  - Nom : `www`
  - Cible / Valeur : `olympusfr.github.io.`
- *(Optionnel pour le domaine sans www)* Ajoutez les 4 adresses IP GitHub en enregistrements **A** :
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
