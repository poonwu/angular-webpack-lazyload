function requireAll(requireContext, exclude) {
	return requireContext.keys().map(requireContext);
}

//angular vendor
//require('./vendor.js')();

require('angular');

//Bootstrap angular app
angular.module('app', []);

//Require all other dependencies
requireAll(require.context('.', true, /([/][\w]+){2,}\.html$/));
requireAll(require.context('.', true, /([/][\w]+){2,}\.js$/));