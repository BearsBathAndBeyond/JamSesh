'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'renderFromLocation',
    value: function renderFromLocation() {
      var loc = window.location.pathname;

      if (loc === '/' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/index.html') {
        return React.createElement(Landing, null);
      }
      if (loc === '/signin.html' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/signin.html') {
        return React.createElement(Signin, null);
      }
      if (loc === '/signup.html' || loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/signup.html') {
        return React.createElement(Signup, null);
      }
      if (loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/main.html') {
        return React.createElement(Main, null);
      }
      if (loc === '/Users/marinacerame/Documents/gitimmersion/opspark/JamSesh/public/createGroup.html') {
        return React.createElement(CreateGroup, null);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Nav, null),
        this.renderFromLocation()
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImxvYyIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZW5kZXJGcm9tTG9jYXRpb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUdBQ1hBLEtBRFc7QUFHbEI7Ozs7eUNBQ29CO0FBQ25CLFVBQUlDLE1BQU1DLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQTFCOztBQUVBLFVBQUlILFFBQVEsR0FBUixJQUFlQSxRQUFRLDhFQUEzQixFQUEyRztBQUN6RyxlQUFPLG9CQUFDLE9BQUQsT0FBUDtBQUNEO0FBQ0QsVUFBSUEsUUFBUSxjQUFSLElBQTBCQSxRQUFRLCtFQUF0QyxFQUF1SDtBQUNySCxlQUFPLG9CQUFDLE1BQUQsT0FBUDtBQUNEO0FBQ0QsVUFBSUEsUUFBUSxjQUFSLElBQTBCQSxRQUFRLCtFQUF0QyxFQUF1SDtBQUNySCxlQUFPLG9CQUFDLE1BQUQsT0FBUDtBQUNEO0FBQ0QsVUFBSUEsUUFBUSw2RUFBWixFQUEyRjtBQUN6RixlQUFPLG9CQUFDLElBQUQsT0FBUDtBQUNEO0FBQ0QsVUFBSUEsUUFBUSxvRkFBWixFQUFrRztBQUNoRyxlQUFPLG9CQUFDLFdBQUQsT0FBUDtBQUNEO0FBRUY7Ozs2QkFHUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsR0FBRCxPQURGO0FBRUcsYUFBS0ksa0JBQUw7QUFGSCxPQURGO0FBTUQ7Ozs7RUFsQ2VDLE1BQU1DLFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuICByZW5kZXJGcm9tTG9jYXRpb24oKSB7XG4gICAgbGV0IGxvYyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcblxuICAgIGlmIChsb2MgPT09ICcvJyB8fCBsb2MgPT09ICcvVXNlcnMvbWFyaW5hY2VyYW1lL0RvY3VtZW50cy9naXRpbW1lcnNpb24vb3BzcGFyay9KYW1TZXNoL3B1YmxpYy9pbmRleC5odG1sJykge1xuICAgICAgcmV0dXJuIDxMYW5kaW5nIC8+O1xuICAgIH1cbiAgICBpZiAobG9jID09PSAnL3NpZ25pbi5odG1sJyB8fCBsb2MgPT09ICcvVXNlcnMvbWFyaW5hY2VyYW1lL0RvY3VtZW50cy9naXRpbW1lcnNpb24vb3BzcGFyay9KYW1TZXNoL3B1YmxpYy9zaWduaW4uaHRtbCcpIHtcbiAgICAgIHJldHVybiA8U2lnbmluIC8+O1xuICAgIH1cbiAgICBpZiAobG9jID09PSAnL3NpZ251cC5odG1sJyB8fCBsb2MgPT09ICcvVXNlcnMvbWFyaW5hY2VyYW1lL0RvY3VtZW50cy9naXRpbW1lcnNpb24vb3BzcGFyay9KYW1TZXNoL3B1YmxpYy9zaWdudXAuaHRtbCcpIHtcbiAgICAgIHJldHVybiA8U2lnbnVwIC8+O1xuICAgIH1cbiAgICBpZiAobG9jID09PSAnL1VzZXJzL21hcmluYWNlcmFtZS9Eb2N1bWVudHMvZ2l0aW1tZXJzaW9uL29wc3BhcmsvSmFtU2VzaC9wdWJsaWMvbWFpbi5odG1sJykge1xuICAgICAgcmV0dXJuIDxNYWluIC8+O1xuICAgIH1cbiAgICBpZiAobG9jID09PSAnL1VzZXJzL21hcmluYWNlcmFtZS9Eb2N1bWVudHMvZ2l0aW1tZXJzaW9uL29wc3BhcmsvSmFtU2VzaC9wdWJsaWMvY3JlYXRlR3JvdXAuaHRtbCcpIHtcbiAgICAgIHJldHVybiA8Q3JlYXRlR3JvdXAgLz47XG4gICAgfVxuXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJGcm9tTG9jYXRpb24oKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==