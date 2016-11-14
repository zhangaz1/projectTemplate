'use strict';


module.exports = [{
	// 	regexp: /(return void\(0\);)/g,
	// 	replacement: `$1;;;;`,
	// }, {
	regexp: /(var ([^ ]+) = require\('[^']+'\);)/g,
	replacement: `// $1
var $2 = topoTools.$2;
`,
}, {
	regexp: /(module.exports = (.*);)/g,
	replacement: `// $1
topoTools.$2 = $2;
`,
}, {
	regexp: `var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();`,
	replacement: `// _createClass`,
}, {
	regexp: `function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }`,
	replacement: `// _classCallCheck`,
}, {
	regexp: `function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }`,
	replacement: `// _possibleConstructorReturn`,
}, {
	regexp: `function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }`,
	replacement: `// _inherits`,
}, {
	regexp: `function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }`,
	replacement: `// _toConsumableArray`,
}, {
	regexp: `var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };`,
	replacement: `// _get`,
}, {
	regexp: /([\S\s]+)/mg,
	replacement: `;(function(netBrain){

$1

})(NetBrain);`,
}, {
	regexp: /\{\s*('use strict';)/mg,
	replacement: `{
$1

var topoTools = netBrain.ns('TopoTools');
`,

	// }, {
	// 	regexp: ``,
	// 	replacement: ``,
	// }, {
	// 	regexp: ``,
	// 	replacement: ``,
}, ];
