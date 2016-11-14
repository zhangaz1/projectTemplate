'use strict';


module.exports = function(context, name) {
	var tasks = context.config.tasks;
	var cacheManager = context.cacheManager;

	context.gulp
		.task(
			name,
			'release',
			function(done) {
				context.sequence(
					tasks.clean,
					tasks.babel,
					tasks.babelReplace,
					tasks.releaseToNg,
					tasks.clean
				)(done);
			}
		);
};
