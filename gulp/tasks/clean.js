'use strict';


var clean = require('gulp-clean');

module.exports = function(context, name) {
	var tasks = context.config.tasks;
	var gulp = context.gulp;

	gulp.task(
		name,
		'clean task',
		function(done) {
			return gulp.src(['dist', 'release'], {
					read: false
				})
				.pipe(clean({
					force: true
				}));
		}
	);
};
