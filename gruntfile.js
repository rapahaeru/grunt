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
	grunt.registerTask('default', ['coffee','sass']);

}
