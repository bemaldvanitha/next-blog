exports.id = 963;
exports.ids = [963];
exports.modules = {

/***/ 3711:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ posts_PostsGrid; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/posts/PostsGrid.module.css
var PostsGrid_module = __webpack_require__(8520);
var PostsGrid_module_default = /*#__PURE__*/__webpack_require__.n(PostsGrid_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/posts/PostItem.module.css
var PostItem_module = __webpack_require__(8354);
var PostItem_module_default = /*#__PURE__*/__webpack_require__.n(PostItem_module);
;// CONCATENATED MODULE: ./components/posts/PostItem.js






const PostItem = props => {
  const {
    title,
    image,
    excerpt,
    date,
    slug
  } = props.post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: (PostItem_module_default()).post,
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/posts/${slug}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (PostItem_module_default()).image,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: imagePath,
            alt: title,
            width: 300,
            height: 200,
            layout: 'responsive'
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (PostItem_module_default()).content,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: title
          }), /*#__PURE__*/jsx_runtime_.jsx("time", {
            children: formattedDate
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: excerpt
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var posts_PostItem = (PostItem);
;// CONCATENATED MODULE: ./components/posts/PostsGrid.js




const PostsGrid = props => {
  const {
    posts
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: (PostsGrid_module_default()).grid,
    children: posts.map(post => {
      return /*#__PURE__*/jsx_runtime_.jsx(posts_PostItem, {
        post: post
      }, post.slug);
    })
  });
};

/* harmony default export */ var posts_PostsGrid = (PostsGrid);

/***/ }),

/***/ 8354:
/***/ (function(module) {

// Exports
module.exports = {
	"post": "PostItem_post__3sjY-",
	"image": "PostItem_image__21dIT",
	"content": "PostItem_content__3d9WE"
};


/***/ }),

/***/ 8520:
/***/ (function(module) {

// Exports
module.exports = {
	"grid": "PostsGrid_grid__1UgTZ"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;