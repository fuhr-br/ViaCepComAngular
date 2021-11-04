# Como Estartar o projeto #

Você precisará ter o _Node.js_ instalado no seu computador, bem como o framework _Angular_ e um _terminal_(BASH, CDM, PowerShell etc..) da sua preferência.
Inicialmente, o programa está dividido em duas pastas, do front e do back e você precisará estartar
dois servidores para ver a total funcionalidade do sistema.
 

## No Frontend ##

Entre na Pasta **_frontend_**, acesse o terminal e execute o seguinte comando:

**npm start**

Será iniciado um "servidor de frontend" na porta: **http://localhost:4200/**
que irá monitorar toda e qualquer alteração no projeto na parte de frontend e
você poderá visualizar e utilizar o site via browser.

## No backend ##

Entre na pasta **_backend_** e no terminal de o seguinte comando:

**npm start**

Será iniciado um "servidor de backend" na porta: **http://localhost:3001**
Agora você pode fazer **_requisições HTTP_** nas rotas:

 ### http://localhost:3001/products ####
 
OBS: Se quiser usar somente o backend, poderá fazer requisições via [POSTMAN](https://www.postman.com/downloads/)   
Para criar novas rotas, basta ir no arquivo **./backend/db.json** e inserir novas listas do tipo JSON, ao final do caminho 
http://localhost:3001, basta adicionar o nome da lista criada e todos os métodos HTTP estarão automaticamente definidos.  
O Node.js também aceita consulta por paginação  
Exemplo de consulta: **http://localhost:3001/products?_page=1&_limit=2**

### Versões dos softwares utilizadas neste projeto ###

**Visual Studio 1.61.2 com as extensões: Material Icon Theme da _steoates_ , Auto Import da _Philip Kief_**   
**Angular CLI: 12.2.12**  
**Node: 14.17.4**  
**Package Manager: npm 6.14.14**  
**OS: win32 x64**
