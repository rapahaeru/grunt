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
					'css/site.css' : 'css/sass/site.scss'
				}
			}
		},
		uncss: {
			dist:{
				files: {
					'css/site-sass-prefixer.css': ['index.html']
				} 
			}
		},		
		autoprefixer: {
			options:{
				browsers: ['last 2 versions'],
			},	
			compile:{
					files : {'css/site-sass-prefixer.css' : 'css/site.css'}
				}
		},
	    watch: {
			css: {
				files: 'css/sass/site.scss',
				tasks: ['sass', 'autoprefixer']
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
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-uncss');

	grunt.registerTask('default', ['sass','autoprefixer','uncss','uglify']);
	grunt.registerTask('MyWatch',['watch:css']);


}
