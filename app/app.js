function requireAll(requireContext, exclude) {
	return requireContext.keys().map(requireContext);
}

//angular vendor
require('./vendor.js')();


//Bootstrap angular app
angular.module('app', []);

angular.element(document).ready(function() {
	angular.bootstrap(document, ['app']);
});

//Require all other dependencies
requireAll(require.context('.', true, /([/][\w]+){2,}\.html$/));
requireAll(require.context('.', true, /([/][\w]+){2,}\.js$/));