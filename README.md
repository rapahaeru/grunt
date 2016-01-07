# grunt
primeiro contato com grunt, um teste simulado para ver o funcionamento básico

---

<code>npm init</code>
- criar package.json ( ao baixar os pacotes com o <code>--save-dev</code>, ele já é atualizado )
- baixar os pacotes
procurar na lista de plugins do site gruntjs.com
ex : 
<code>npm install grunt-contrib-coffee --save-dev (coffee script, pre processador de js)</code>
<code>npm install grunt-contrib-sass --save-dev (pre processador de css)</code>

porém rodar antes <code>npm install grunt --save-dev</code> para rodar o grunt

criar o arquivo html:
ex :
<code>
	
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>titulo</title>
	<link rel="stylesheet" href="site.css">
</head>
<body>
	<h1>meu teste de grunt</h1>
	<p> lorem ipsum dollor  lorem ipsum dollor  lorem ipsum dollor  lorem ipsum dollor  lorem ipsum dollor  lorem ipsum dollor  lorem ipsum dollor </p>
	<button id="theButton">click</button>

	<script src="site.js"></script> 
</body>
</html>
</code>

criar as pastas e seus respectivos arquivos para ordenar os arquivos

ex :

coffee
... coffee/site.coffee
sass
.. sass/site.scss

criar o gruntfile.js

no ex criado, foi ordenado o grunt já compilar os arquivos e cria-los na raiz do site :
<code>
module.exports = function (grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		coffee: {
			compile:{
				files:{
					'site.js' : 'coffee/site.coffee'
				}
			}
		},
		sass: {
			compile:{
				files:{
					'site.css' : 'sass/site.scss'
				}
			}
		}		
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.registerTask('default', ['coffee','sass']); // ordem de execução

}
</code>

Depois de tudo criado, executar o grunt na raiz e observar se há erros depois da compilação, caso não haja, conferir o html criado.

obs : há um bug nos debians com relação ao nome da pasta criada no /usr/bin, por tanto caso ao executar o grunt, acuse um erro, execute este comando : 
<code>ln -s /usr/bin/nodejs /usr/bin/node</code>








