"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("h1", {
  id: "title"
}, /*#__PURE__*/_react["default"].createElement("span", null, "Ol\xE1 Mundo!")), document.getElementById('root'));

// const user = {};

// console.log(user.address.street);

// if (user && user.address) {
//   console.log(user.address.street);
// }

// Optional chaining
// console.log(user?.address?.street);