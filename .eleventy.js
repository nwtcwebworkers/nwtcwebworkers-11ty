
const CleanCSS = require('clean-css');
const { DateTime } = require('luxon');

module.exports = function( eleventyConfig ){

    // Copy the /img directory
    eleventyConfig.addPassthroughCopy("src/img");

    // Filter source file names using a glob
    eleventyConfig.addCollection("meetup", function(collection) {
        return collection.getFilteredByGlob("./src/meetup/*.md");
    });

    // Inline Minified CSS
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addFilter("getMeetupDate", function(code){
        
        console.log("##### Code", code);
        
        let date = DateTime.fromISO (code);
        let month = date.toFormat('MMMM d, yyyy');
        let concertDate = month;
  
        return concertDate;
    });

    return {
        dir: { input: 'src', output: 'dist', includes: '_includes' }
    };

}