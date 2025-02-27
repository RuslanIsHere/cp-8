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


## Disponibilité sur Docker Hub

Le conteneur Docker de ce projet est disponible sur Docker Hub. Pour le télécharger et l'exécuter, utilisez la commande suivante :

docker run -d -p 8080:80 gabitovrv/nasa-test

Cette commande télécharge l'image et lance le serveur web sur le port 8080. Vous pouvez ensuite accéder à l'application en ouvrant http://localhost:8080 dans votre navigateur.

## Comment démarrer le projet

1. Clonez le repository :
   ```bash
   git clone https://github.com/yourusername/nasa-apis-project.git
