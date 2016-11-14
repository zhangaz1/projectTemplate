'use strict';


var replace = require('gulp-replace');
var configs = require('./../babelReplaceConfig.js');

module.exports = function(context, name) {
	var tasks = context.config.tasks;
	var gulp = context.gulp;

	gulp.task(
		name,
		'babel replace task',
		function(done) {
			var trans = gulp.src(['dist/**/*.js']);

			for(let index in configs) {
				const config = configs[index];
				const replacer = replace(config.regexp, config.replacement);
				trans = trans.pipe(replacer);
			}

			trans.pipe(gulp.dest('release'))
				.on('end', function(err) {
					done(err);
				});
		}
	);
};
