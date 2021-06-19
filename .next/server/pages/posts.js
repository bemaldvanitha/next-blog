(function() {
var exports = {};
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 5726:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ posts; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/posts/AllPosts.module.css
var AllPosts_module = __webpack_require__(3049);
var AllPosts_module_default = /*#__PURE__*/__webpack_require__.n(AllPosts_module);
// EXTERNAL MODULE: ./components/posts/PostsGrid.js + 1 modules
var PostsGrid = __webpack_require__(3711);
;// CONCATENATED MODULE: ./components/posts/AllPosts.js





const AllPosts = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: (AllPosts_module_default()).posts,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "All Posts"
    }), /*#__PURE__*/jsx_runtime_.jsx(PostsGrid/* default */.Z, {
      posts: props.posts
    })]
  });
};

/* harmony default export */ var posts_AllPosts = (AllPosts);
// EXTERNAL MODULE: ./lib/posts-util.js
var posts_util = __webpack_require__(4192);
;// CONCATENATED MODULE: ./pages/posts/index.js







const AllPostsPage = props => {
  const {
    posts
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "All Posts"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "A list of all programming-related tutorials and posts and other stuff!"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(posts_AllPosts, {
      posts: posts
    })]
  });
};

async function getStaticProps(context) {
  const allPosts = (0,posts_util/* getAllPosts */.Bd)();
  return {
    props: {
      posts: allPosts
    },
    revalidate: 3600
  };
}
/* harmony default export */ var posts = (AllPostsPage);

/***/ }),

/***/ 3049:
/***/ (function(module) {

// Exports
module.exports = {
	"posts": "AllPosts_posts__-GOkB"
};


/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 9064:
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [75,664,675,192,963], function() { return __webpack_exec__(5726); });
module.exports = __webpack_exports__;

})();