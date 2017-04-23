/* global module, require, default, production, publish, __dirname */
module.exports                              = function (grunt) {
    
    var package                             = grunt.file.readJSON('package.json');
    
    // Project configuration.
    grunt.initConfig({
        
        pkg     : package,
        absRoot : __dirname,
        
        exec: {
            compile_typescripts: 'tsc -project tsconfig.json',
            
            // http://typedoc.org/
            compile_documentations: 'typedoc --out docs/ typescripts/'
        }
        
    });
    
    // Load the npm grunt tasks
    grunt.loadNpmTasks('grunt-exec');
    
    grunt.registerTask('default', ['exec:compile_typescripts']);
    grunt.registerTask('docs', ['exec:compile_typescripts', 'exec:compile_documentations']);
    
};