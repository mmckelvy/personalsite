module.exports = function (grunt) {
	grunt.initConfig ({
		pkg: grunt.file.readJSON('package.json'), // Read package.json

		/* Compile Stylus files */
		stylus: {
			css: {
				expand: true, // Enable dynamic file mapping.
				cwd: 'public/stylesheets/src', // Ensure that all source files are relative to this path.
				src: ['styles.styl'], // compile all stylus files in the src directory and any sub-directories of 'src'.
				dest: 'public/stylesheets/lib', // set destination directory.
				ext: '.css'
			}
		},

		/* Watch files for changes */
		watch: {
			css: {
				files: '**/*.styl',
				tasks: ['stylus']
			}
		},

		/* Run Nodemon and Stylus tasks concurrently */
		concurrent: {
			dev: {
				tasks: ['nodemon', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},

		/* Start a node server */
		nodemon: {
			dev: {
				script: 'app.js',
				options: {
					env: {
						PORT: '3000'	
					}
				}
			}
		}

	});

	/* Load grunt plugins */
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');

	/* Run grunt tasks */
	grunt.registerTask( 'default', ['stylus', 'concurrent:dev'] );

};