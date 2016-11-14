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
					tasks.cleanNg,
					tasks.copyToNg
				)(done);
			}
		);
};
