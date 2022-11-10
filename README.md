# La nouvelle application des jeunes Rap4G

## But du jeu :

Improviser des punchlines avec ses copains avec des rîmes donées et BOIRE

## Techno :
Node

React

Typescript

Bootstrap-react


## Deploiement 

### Facile avec azure deja config

Création et configuration du serveur pour applicaiton web sur le site de azure

Ajouter le azure-webapps-node.yml a mon git hub et le configurer avec ce qui correspond a mon app

ajouter une action a github pour redéployer à chaque push

### Serveur azure nu

ssh Romsko@20.56.108.103

sudo apt update

sudo apt install nodejs

sudo apt install npm

sudo npm cache clean -f

sudo npm install -g n

sudo n stable

git clone https://github.com/Romskoo/rap4g.git

sudo npm install -g serve

sudo serve -s build &
