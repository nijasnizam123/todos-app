webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n\r\nbody {\r\n  font-size: 18px;\r\n  line-height: 1.58;\r\n  background: #e8e8e8;\r\n  color: #333;\r\n}\r\n\r\nh1 {\r\n  font-size: 36px;\r\n}\r\n\r\n* {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\ni {\r\n  vertical-align: middle;\r\n  color: #626262;\r\n}\r\n\r\ninput {\r\n  border: 1px solid #E8E8E8;\r\n}\r\n\r\n.todo-content{\r\n  text-align: left;\r\n}\r\n\r\n.filter-list{\r\n  position: absolute;\r\n}\r\n\r\n.filter-list i{\r\n  font-weight: bold;\r\n  font-size: 25px;\r\n}\r\n\r\n.submit-btn{\r\n  position: absolute;\r\n  right: 10px;\r\n  margin-top: -40px;\r\n  cursor: pointer;\r\n}\r\n\r\n.filter-box{\r\n  position: relative;\r\n  right: 35px;\r\n  margin-top: -35px;\r\n  width: 45px;\r\n}\r\n\r\n.filter-box:hover .filter-items{\r\n  display: block;\r\n}\r\n\r\n.page-title {\r\n  text-align: center;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.filter-items {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    padding: 12px 6px;\r\n    z-index: 1;\r\n    left: -80px;\r\n    top: 35px;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.sub-title {\r\n  text-align: center;\r\n  margin-top: 0px;\r\n}\r\n\r\n.todo-content {\r\n  max-width: 1050px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  background-color: #fff;\r\n  padding: 15px;\r\n  -webkit-box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);\r\n          box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);\r\n}\r\n\r\n.todo-content:first-child{\r\n  padding: 1px;\r\n}\r\n\r\n.form-control {\r\n  font-size: 16px;\r\n  padding-left: 15px;\r\n  outline: none;\r\n  border: 1px solid #E8E8E8;\r\n}\r\n\r\n.form-control:focus {\r\n  border: 1px solid #626262;\r\n}\r\n\r\n.todo-content .form-control {\r\n  width: 100%;\r\n  height: 50px;\r\n}\r\n\r\n.todo-content .todo-create {\r\n  padding-bottom: 45px;\r\n  position: relative;\r\n}\r\n\r\n.todo-content .alert-danger {\r\n  padding-left: 15px;\r\n  font-size: 14px;\r\n  color: red;\r\n  padding-top: 5px;\r\n}\r\n\r\n.todo-content ul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  max-height: 450px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  margin-left: -15px;\r\n  margin-right: -15px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.todo-content ul li {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px solid #E8E8E8;\r\n}\r\n\r\n.todo-content ul li:first-child {\r\n    border-top: 1px solid #E8E8E8;\r\n}\r\n\r\n.todo-content ul li span {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\n.todo-content .todo-title {\r\n  width: calc(100% - 160px);\r\n  margin-left: 10px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.todo-content .todo-completed {\r\n  display: inline-block;\r\n  text-align: left;\r\n  width:35px;\r\n  height:35px;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-content .todo-completed i {\r\n  font-size: 20px;\r\n}\r\n\r\n.todo-content .todo-actions, .todo-content .edit-actions {\r\n    float: right;\r\n}\r\n\r\n.todo-content .todo-actions i, .todo-content .edit-actions i {\r\n    font-size: 17px;\r\n}\r\n\r\n.todo-content .todo-actions a, .todo-content .edit-actions a {\r\n  display: inline-block;\r\n  text-align: center;\r\n  width: 35px;\r\n  height: 35px;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-content .todo-actions a:hover, .todo-content .edit-actions a:hover {\r\n  background-color: #f4f4f4;\r\n}\r\n\r\n.todo-content .todo-edit input {\r\n  width: calc(100% - 80px);\r\n  height: 35px;\r\n}\r\n\r\n.todo-content .edit-actions {\r\n  text-align: right;\r\n}\r\n\r\n.no-todos {\r\n  text-align: center;\r\n}\r\n\r\n.toggle-completed-checkbox:before {\r\n  content: 'check_box_outline_blank';\r\n}\r\n\r\nli.completed .toggle-completed-checkbox:before {\r\n  content: 'check_box';\r\n}\r\n\r\nli.completed .todo-title {\r\n  text-decoration: line-through;\r\n  color: #757575;\r\n}\r\n\r\nli.completed i {\r\n  color: #757575;\r\n}\r\n\r\ndiv.activated .toggle-completed-checkbox:before {\r\n  content: 'check_box';\r\n}\r\n\r\nli.activated .todo-title {\r\n  color: #757575;\r\n}\r\n\r\nli.activated i {\r\n  color: #757575;\r\n}\r\n\r\ninput.shake {\r\n   border: 1px #d02424 solid;\r\n   -webkit-animation: shake .2s linear 0s 4;\r\n   animation: shake .2s linear 0s 4;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n   0% { -webkit-transform: translateX(-5px); transform: translateX(-5px); }\r\n   50% { -webkit-transform: translateX(5px); transform: translateX(5px); }\r\n}\r\n\r\n@keyframes shake {\r\n   0% { -webkit-transform: translateX(-5px); transform: translateX(-5px); }\r\n   50% { -webkit-transform: translateX(5px); transform: translateX(5px); }\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map