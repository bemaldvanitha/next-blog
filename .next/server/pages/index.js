(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6949:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/home-page/FeaturedPosts.module.css
var FeaturedPosts_module = __webpack_require__(8652);
var FeaturedPosts_module_default = /*#__PURE__*/__webpack_require__.n(FeaturedPosts_module);
// EXTERNAL MODULE: ./components/posts/PostsGrid.js + 1 modules
var PostsGrid = __webpack_require__(3711);
;// CONCATENATED MODULE: ./components/home-page/FeaturedPosts.js





const FeaturedPosts = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: (FeaturedPosts_module_default()).latest,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "Featured Posts"
    }), /*#__PURE__*/jsx_runtime_.jsx(PostsGrid/* default */.Z, {
      posts: props.posts
    })]
  });
};

/* harmony default export */ var home_page_FeaturedPosts = (FeaturedPosts);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/home-page/Hero.module.css
var Hero_module = __webpack_require__(4174);
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);
;// CONCATENATED MODULE: ./components/home-page/Hero.js





const Hero = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: (Hero_module_default()).hero,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Hero_module_default()).image,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: '/images/site/bemal.jpg',
        width: 400,
        height: 400,
        alt: 'bemal'
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Hi I'm bemal"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "I blog about web dev , mobile dev, game dev and machine learning"
    })]
  });
};

/* harmony default export */ var home_page_Hero = (Hero);
// EXTERNAL MODULE: ./lib/posts-util.js
var posts_util = __webpack_require__(4192);
;// CONCATENATED MODULE: ./pages/index.js








const HomePage = props => {
  const {
    posts
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "welcome to my blog"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "I post about programming and web development."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(home_page_Hero, {}), /*#__PURE__*/jsx_runtime_.jsx(home_page_FeaturedPosts, {
      posts: posts
    })]
  });
};

async function getStaticProps() {
  const featuredPosts = (0,posts_util/* getFeaturedPosts */.mH)();
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 3600
  };
}
/* harmony default export */ var pages = (HomePage);

/***/ }),

/***/ 8652:
/***/ (function(module) {

// Exports
module.exports = {
	"latest": "FeaturedPosts_latest__2ikVW"
};


/***/ }),

/***/ 4174:
/***/ (function(module) {

// Exports
module.exports = {
	"hero": "Hero_hero__2olfq",
	"image": "Hero_image__PyYYU"
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
var __webpack_exports__ = __webpack_require__.X(0, [75,664,675,192,963], function() { return __webpack_exec__(6949); });
module.exports = __webpack_exports__;

})();