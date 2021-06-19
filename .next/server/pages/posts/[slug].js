(function() {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 1419:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "react-markdown"
var external_react_markdown_namespaceObject = require("react-markdown");;
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_namespaceObject);
;// CONCATENATED MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_namespaceObject = require("react-syntax-highlighter");;
;// CONCATENATED MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism"
var prism_namespaceObject = require("react-syntax-highlighter/dist/cjs/styles/prism");;
// EXTERNAL MODULE: ./components/posts/post-detail/PostContent.module.css
var PostContent_module = __webpack_require__(8360);
var PostContent_module_default = /*#__PURE__*/__webpack_require__.n(PostContent_module);
// EXTERNAL MODULE: ./components/posts/post-detail/PostHeader.module.css
var PostHeader_module = __webpack_require__(5461);
var PostHeader_module_default = /*#__PURE__*/__webpack_require__.n(PostHeader_module);
;// CONCATENATED MODULE: ./components/posts/post-detail/PostHeader.js





const PostHeader = props => {
  const {
    title,
    image
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: (PostHeader_module_default()).header,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: image,
      alt: title,
      width: 200,
      height: 150
    })]
  });
};

/* harmony default export */ var post_detail_PostHeader = (PostHeader);
;// CONCATENATED MODULE: ./components/posts/post-detail/PostContent.js









const PostContent = props => {
  const {
    slug,
    image,
    title,
    content
  } = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;
  const customRenderers = {
    p(paragraph) {
      const {
        node
      } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        console.log(`/images/posts/${slug}/${image.properties.src}`);
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (PostContent_module_default()).image,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: `/images/posts/${slug}/${image.properties.src}`,
            alt: image.alt,
            width: 600,
            height: 300
          })
        });
      }

      return /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: paragraph.children
      });
    },

    code(code) {
      const {
        className,
        children
      } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here

      return /*#__PURE__*/jsx_runtime_.jsx(external_react_syntax_highlighter_namespaceObject.Prism, {
        style: prism_namespaceObject.atomDark,
        language: language,
        children: children
      });
    }

  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
    className: (PostContent_module_default()).content,
    children: [/*#__PURE__*/jsx_runtime_.jsx(post_detail_PostHeader, {
      title: title,
      image: imagePath
    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
      components: customRenderers,
      children: content
    })]
  });
};

/* harmony default export */ var post_detail_PostContent = (PostContent);
// EXTERNAL MODULE: ./lib/posts-util.js
var posts_util = __webpack_require__(4192);
;// CONCATENATED MODULE: ./pages/posts/[slug].js







const PostDetailPage = props => {
  const {
    post
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: post.title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: post.excerpt
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(post_detail_PostContent, {
      post: post
    })]
  });
};

async function getStaticProps(context) {
  const {
    params
  } = context;
  const {
    slug
  } = params;
  const postData = (0,posts_util/* getPostData */.AU)(slug);
  return {
    props: {
      post: postData
    },
    revalidate: 1800
  };
}
async function getStaticPaths() {
  const postsFiles = (0,posts_util/* getPostsFiles */.uH)();
  const slugs = postsFiles.map(fileName => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map(slug => ({
      params: {
        slug: slug
      }
    })),
    fallback: false
  };
}
/* harmony default export */ var _slug_ = (PostDetailPage);

/***/ }),

/***/ 8360:
/***/ (function(module) {

// Exports
module.exports = {
	"content": "PostContent_content__3IAxW",
	"image": "PostContent_image__1NsVp"
};


/***/ }),

/***/ 5461:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "PostHeader_header__33teZ"
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [75,675,192], function() { return __webpack_exec__(1419); });
module.exports = __webpack_exports__;

})();