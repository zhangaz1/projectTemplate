'use strict';


var clean = require('gulp-clean');

module.exports = function(context, name) {
	var tasks = context.config.tasks;
	var gulp = context.gulp;

	var ngPath = context.config.ngPath;

	gulp.task(
		name,
		'clean task',
		function(done) {
			return gulp.src([
					`${ngPath}/**/*.js`,
					`!${ngPath}/const.js`,
					`!${ngPath}/module.js`,
					`!${ngPath}/path.js`,
					`!${ngPath}/layout/layoutHelper.js`,
				], {
					read: false
				})
				.pipe(clean({
					force: true
				}));
		}
	);
};
