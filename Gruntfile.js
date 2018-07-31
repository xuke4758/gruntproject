module.exports=function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            main:{
                expand: true,
                cwd: 'src',
                src: 'less/*.less',
                dest: 'dist/less/',
                ext: '.css'
            }
        },
        sass: {
            output: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/scss/style.css':'src/scss/*.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: 'src/**',
                tasks: ['less', 'sass'],
                options: {
                    interrupt: true,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('testless', ['less']);

    grunt.registerTask('testscss', ['sass']);

    grunt.registerTask('testwatch',['watch']);

    grunt.registerTask('default');
    // grunt.registerTask('default', ['cssmin','jshint', 'uglify', 'less', 'watch']);
}