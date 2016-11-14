'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;
	var gulp = context.gulp;

	var ngPath = context.config.ngPath;

	gulp.task(
		name,
		'copy to ng task',
		function(done) {
			gulp.src([
					'release/**/*.js',
					'babel/**/*.js',
				])
				.pipe(gulp.dest(ngPath))
				.on('end', function(err) {
					done(err);
				});
		}
	);
};
