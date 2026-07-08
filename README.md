Projet : Système de Gestion de Stock
partie 1; presententation génerale du projet

1. Présentation du projet
   Le Système de Gestion de Stock est une application web développée avec Angular 21 permettant de gérer les utilisateurs, les approvisionnements et les ventes d'une entreprise.

L'application permet de suivre les opérations de gestion de stock à travers une interface simple et intuitive. Les données sont sauvegardées localement grâce au LocalStorage.

2. Objectifs
   L'application permet de :
   Gérer l'authentification des utilisateurs ;
   Accéder à un tableau de bord ;
   Gérer les utilisateurs ;
   Gérer les approvisionnements ;
   Gérer les ventes ;
   Sauvegarder les données localement.

3. Technologies utilisées
   Angular 21
   TypeScript
   HTML5
   CSS3
   Node.js
   npm
   Git/GitHub
   LocalStorage

4. Fonctionnalités principales
   Gestion des utilisateurs
   Ajouter un utilisateur ;
   Modifier un utilisateur ;
   Supprimer un utilisateur ;
   Afficher la liste des utilisateurs.
   Gestion des approvisionnements
   Ajouter des entrées de stock ;
   Gérer les produits et fournisseurs ;
   Modifier et supprimer un approvisionnement.
   Gestion des ventes
   Enregistrer les ventes ;
   Gérer les clients ;
   Modifier et supprimer une vente.

5. Installation
   Installation des dépendances :

npm install

Lancement du projet :

ng serve

Accès à l'application :

http://localhost:4200

PARTIE 2 : DOCUMENTATION DU CODE

1. Structure du projet

Le projet Angular est organisé selon une architecture basée sur plusieurs dossiers permettant de séparer les différentes responsabilités.

Structure principale :

gestion-stock/

src/
│
└── app/
│
├── pages/
│ ├── home
│ ├── login
│ ├── dashboard
│ ├── users
│ ├── appro
│ └── ventes
│
├── services/
│
├── models/
│
├── app.routes.ts
│
└── app.config.ts 2. Les composants (Components)

Les composants Angular représentent les différentes interfaces de l'application.

Chaque composant est composé de trois fichiers principaux :

Fichier TypeScript (.ts) : contient la logique du composant ;
Fichier HTML (.html) : contient la structure de l'interface ;
Fichier CSS (.css) : contient la mise en forme graphique.

Exemple :
user-list/

├── user-list.ts
├── user-list.html
└── user-list.css

3. Le dossier Pages
   Le dossier pages contient les différentes pages accessibles dans l'application.

Home

Permet d'afficher la page d'accueil et d'accéder à la connexion.

Login

Gère l'authentification de l'utilisateur.

Dashboard

Affiche le tableau de bord avec les accès aux différents modules.

Users

Contient les fonctionnalités de gestion des utilisateurs :

affichage de la liste ;
ajout ;
modification ;
suppression.
Appro

Permet la gestion des approvisionnements :

ajout des produits ;
gestion des quantités ;
gestion des fournisseurs.
Ventes

Permet la gestion des ventes :

enregistrement des ventes ;
gestion des clients ;
suivi des produits vendus.

4. Les Models

Le dossier models contient les interfaces TypeScript qui définissent la structure des données utilisées dans l'application.

Exemple du modèle utilisateur :

export interface User {

id:number;
nom:string;
prenom:string;
email:string;
password:string;
role:string;

}

Les modèles permettent d'assurer une meilleure organisation et un meilleur contrôle des données.

5. Les Services

Le dossier services contient la logique de gestion des données.

Les services permettent de :

récupérer les données ;
ajouter des éléments ;
modifier des éléments ;
supprimer des éléments ;
communiquer entre les composants et le stockage local.

Exemple :

user.service.ts

Ce service permet de gérer les opérations liées aux utilisateurs.

6. Le Routage (Routing)

Le fichier :

app.routes.ts

permet de gérer la navigation entre les différentes pages de l'application.

Exemple :
{
path:'users',
component:UserListComponent
}

Cette route permet d'accéder à la page de gestion des utilisateurs.

Les principales routes sont :

/ → Page d'accueil ;
/login → Connexion ;
/dashboard → Tableau de bord ;
/users → Gestion des utilisateurs ;
/appro → Approvisionnements ;
/ventes → Ventes.

7. Configuration de l'application

Le fichier :

app.config.ts

contient la configuration globale de l'application.
Il permet notamment d'activer :
le système de routage ;
les services Angular nécessaires au fonctionnement de l'application.

Extrait du code:

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
providers: [
provideRouter(routes),
provideHttpClient()
]
};

provideRouter(routes) permet de gérer la navigation entre les différentes pages de l'application.
provideHttpClient() prépare l'application à communiquer avec des services HTTP (API ou serveur externe).
appConfig centralise les configurations nécessaires au démarrage de l'application.

8. Gestion des données avec LocalStorage

L'application utilise le LocalStorage du navigateur pour sauvegarder les données.
Les informations enregistrées restent disponibles même après le rafraîchissement de la page.

Exemple :

localStorage.setItem(
'users',
JSON.stringify(users)
);

Le LocalStorage permet de stocker :
les utilisateurs ;
les approvisionnements ;
les ventes.

9. Conclusion de la documentation du code

L'organisation du code respecte les principes d'Angular en séparant les interfaces, la logique métier et la gestion des données.

Cette structure facilite la maintenance, la compréhension et l'évolution future de l'application.

10. Dépôt GitHub

Le code source complet du projet est disponible sur GitHub afin de faciliter l'accès, la consultation et l'évaluation du projet.

Lien du dépôt GitHub :

https://github.com/jordiaibata2003-art/examen_frontend

Le dépôt contient :
le code source Angular ;
les composants de l'application ;
les services ;
les modèles ;
les fichiers de configuration du projet.
