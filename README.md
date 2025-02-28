# Projet APIs de la NASA

Ce projet permet aux utilisateurs d'explorer divers aspects de l'univers en utilisant les API de la NASA. Le projet comprend plusieurs sections, notamment des images de l'espace, des caméras de la Terre, des informations sur les astéroïdes et des photos des rovers martiens.

## Description

Le projet consiste en plusieurs pages Web qui affichent les données provenant de diverses API de la NASA :

- **Astronomy Picture of the Day (APOD)** — image du jour avec une description.
- **Earth Polychromatic Imaging Camera (EPIC)** — images de la Terre capturées par la station spatiale.
- **Asteroids - NeoWs** — informations sur les astéroïdes proches de la Terre.
- **Mars Rover Photos** — photos prises par les rovers martiens.

Le projet utilise HTML et CSS pour afficher les données dans une interface soignée.

## Structure du projet

Le projet comprend les pages suivantes :

1. **Accueil (index.html)** — la page d'accueil avec des liens vers d'autres sections du projet.
2. **Espace (space.html)** — section avec des images de l'espace (APOD).
3. **Terre (terre.html)** — section avec des images de la Terre (EPIC).
4. **Astéroïdes (objets.html)** — section avec des informations sur les astéroïdes proches de la Terre (NeoWs).
5. **Mars (mars.html)** — section avec des photos des rovers martiens.


## Git Workflow
Le projet a été initialisé sur Git avec les commandes suivantes :

**Initialisation du dépôt Git**:

git init -cela crée un nouveau dépôt Git dans le répertoire local.

**Ajout des fichiers au suivi Git**:

git add . -cette commande ajoute tous les fichiers du répertoire au suivi Git.

**Commit des changements**:

git commit -m "Initial commit - Adding project files" -cela enregistre les modifications avec un message décrivant ce qui a été ajouté ou modifié.

**Création d'un dépôt distant sur GitHub**: 
Vous devez créer un dépôt sur GitHub, puis ajouter l'URL du dépôt distant avec la commande suivante :

git remote add origin https://github.com/yourusername/nasa-apis-project.git 

**Push des modifications sur GitHub**:

git push -u origin main -cela envoie les fichiers locaux sur GitHub, sur la branche principale.

## Disponibilité sur Docker Hub

**Créer et pousser l'image Docker**
Pour créer et charger l'image Docker sur Docker Hub, procédez comme suit :

**Créer un fichier Dockerfile à la racine du projet** :

FROM nginx:alpine
COPY . /usr/share/nginx/html
Construire l'image Docker :

docker build -t votre-username/nasa-test .

**Se connecter à Docker Hub** :

docker login

**Pousser l'image vers Docker Hub** :

docker push votre-username/nasa-test

**Télécharger et exécuter l'image depuis Docker Hub : Comme mentionné plus tôt, vous pouvez utiliser la commande suivante pour exécuter l'image** :

docker run -d -p 8080:80 votre-username/nasa-test

**Le conteneur Docker de ce projet est disponible sur Docker Hub. Pour le télécharger et l'exécuter, utilisez la commande suivante** :

docker run -d -p 8080:80 gabitovrv/nasa-test

**Cette commande télécharge l'image et lance le serveur web sur le port 8080. Vous pouvez ensuite accéder à l'application en ouvrant http://localhost:8080 dans votre navigateur.

## Comment démarrer le projet

1. Clonez le repository :
   ```bash
   git clone https://github.com/yourusername/nasa-apis-project.git
