(function() {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 4826:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ contact; }
});

;// CONCATENATED MODULE: external "mongodb"
var external_mongodb_namespaceObject = require("mongodb");;
;// CONCATENATED MODULE: ./pages/api/contact/index.js


const handler = async (req, res) => {
  if (req.method === 'POST') {
    const {
      email,
      name,
      message
    } = req.body;

    if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      return res.status(422).json({
        message: 'invalid input'
      });
    }

    const newMessage = {
      email: email,
      name: name,
      message: message
    };
    let client;
    const connectionString = `mongodb+srv://${"bemaldvanitha"}:${"Bemal123"}@${"devconnector"}.2jyrs.mongodb.net/${"nextblog"}?retryWrites=true&w=majority`;

    try {
      client = await external_mongodb_namespaceObject.MongoClient.connect(connectionString);
    } catch (err) {
      return res.status(500).json({
        message: 'could not connect to db'
      });
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      await client.close();
      return res.status(500).json({
        message: 'store message fail'
      });
    }

    client.close();
    return res.status(201).json({
      message: 'successfully added',
      data: newMessage
    });
  }
};

/* harmony default export */ var contact = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(4826));
module.exports = __webpack_exports__;

})();