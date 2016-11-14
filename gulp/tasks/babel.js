'use strict';


var babel = require('gulp-babel');

module.exports = function(context, name) {
	var tasks = context.config.tasks;
	var gulp = context.gulp;

	gulp.task(
		name,
		'babel task',
		function(done) {
			gulp.src(['src/**/*.js'])
				.pipe(babel({
					presets: ['es2015']
				}))
				.pipe(gulp.dest('dist'))
				.on('end', function(err) {
					done(err);
				});
		}
	);
};
