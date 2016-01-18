function requireAll(requireContext, exclude) {
	return requireContext.keys().map(requireContext);
}
requireAll(require.context('.', true, /\.html$/));
requireAll(require.context('.', true, /([/][\w]+){2,}\.js$/)); //only subdirectories


angular.module('app', []);

angular.element(document).ready(function() {
	angular.bootstrap(document, ['app']);
});