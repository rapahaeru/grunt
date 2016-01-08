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
		},
		uglify: {
			my_target:{
				files:{
					'js/minified.js' : ['js/src/jquery-1.8.2.js','js/src/script.js']

				}
			}
		}		
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['coffee','sass','uglify']);

}
