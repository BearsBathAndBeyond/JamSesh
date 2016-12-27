'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props) {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

    _this.state = {
      username: '',
      email: '',
      password: ''
    };

    _this.inputUsername = _this.inputUsername.bind(_this);
    _this.inputEmail = _this.inputEmail.bind(_this);
    _this.inputPassword = _this.inputPassword.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Signup, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      // TODO: handle post request with this data
      console.log('submitting data: ', this.state);
      event.preventDefault();
    }
  }, {
    key: 'inputUsername',
    value: function inputUsername(event) {
      this.setState({ username: event.target.value });
    }
  }, {
    key: 'inputEmail',
    value: function inputEmail(event) {
      this.setState({ email: event.target.value });
    }
  }, {
    key: 'inputPassword',
    value: function inputPassword(event) {
      this.setState({ password: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          'Sign Up'
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement('input', { type: 'text', onChange: this.inputUsername, placeholder: 'Username' }),
          React.createElement('br', null),
          React.createElement('input', { type: 'text', onChange: this.inputEmail, placeholder: 'Email' }),
          ' ',
          React.createElement('br', null),
          React.createElement('input', { type: 'password', onChange: this.inputPassword, placeholder: 'Password' }),
          ' ',
          React.createElement('br', null),
          React.createElement(
            'button',
            { type: 'submit' },
            'Sign up'
          )
        ),
        React.createElement(
          'div',
          null,
          'Already a member? ',
          React.createElement(
            'a',
            { href: 'signin.html' },
            'Sign in!'
          )
        )
      );
    }
  }]);

  return Signup;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc2luZ3VwLmpzeCJdLCJuYW1lcyI6WyJTaWdudXAiLCJwcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5wdXRVc2VybmFtZSIsImJpbmQiLCJpbnB1dEVtYWlsIiwiaW5wdXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxFQURDO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxnQkFBVTtBQUhDLEtBQWI7O0FBTUEsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQixPQUFyQjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkQsSUFBaEIsT0FBbEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0csWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCSCxJQUFsQixPQUFwQjtBQVhpQjtBQVlsQjs7OztpQ0FFYUksSyxFQUFPO0FBQ25CO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQyxLQUFLWCxLQUF0QztBQUNBUyxZQUFNRyxjQUFOO0FBQ0Q7OztrQ0FFY0gsSyxFQUFPO0FBQ3BCLFdBQUtJLFFBQUwsQ0FBYyxFQUFDWixVQUFVUSxNQUFNSyxNQUFOLENBQWFDLEtBQXhCLEVBQWQ7QUFDRDs7OytCQUNXTixLLEVBQU87QUFDakIsV0FBS0ksUUFBTCxDQUFjLEVBQUNYLE9BQU9PLE1BQU1LLE1BQU4sQ0FBYUMsS0FBckIsRUFBZDtBQUNEOzs7a0NBQ2NOLEssRUFBTztBQUNwQixXQUFLSSxRQUFMLENBQWMsRUFBQ1YsVUFBVU0sTUFBTUssTUFBTixDQUFhQyxLQUF4QixFQUFkO0FBQ0Q7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBR0U7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLUCxZQUFyQjtBQUNFLHlDQUFPLE1BQUssTUFBWixFQUFtQixVQUFVLEtBQUtKLGFBQWxDLEVBQWlELGFBQVksVUFBN0QsR0FERjtBQUNrRix5Q0FEbEY7QUFFRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsVUFBVSxLQUFLRSxVQUFsQyxFQUE4QyxhQUFZLE9BQTFELEdBRkY7QUFBQTtBQUU2RSx5Q0FGN0U7QUFHRSx5Q0FBTyxNQUFLLFVBQVosRUFBdUIsVUFBVSxLQUFLQyxhQUF0QyxFQUFxRCxhQUFZLFVBQWpFLEdBSEY7QUFBQTtBQUd1Rix5Q0FIdkY7QUFJRTtBQUFBO0FBQUEsY0FBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBSkYsU0FIRjtBQVVFO0FBQUE7QUFBQTtBQUFBO0FBQ29CO0FBQUE7QUFBQSxjQUFHLE1BQUssYUFBUjtBQUFBO0FBQUE7QUFEcEI7QUFWRixPQURGO0FBaUJEOzs7O0VBakRrQlMsTUFBTUMsUyIsImZpbGUiOiJzaW5ndXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaWdudXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcblxuICAgIHRoaXMuaW5wdXRVc2VybmFtZSA9IHRoaXMuaW5wdXRVc2VybmFtZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5wdXRFbWFpbCA9IHRoaXMuaW5wdXRFbWFpbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5wdXRQYXNzd29yZCA9IHRoaXMuaW5wdXRQYXNzd29yZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcbiAgICAvLyBUT0RPOiBoYW5kbGUgcG9zdCByZXF1ZXN0IHdpdGggdGhpcyBkYXRhXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdHRpbmcgZGF0YTogJywgdGhpcy5zdGF0ZSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGlucHV0VXNlcm5hbWUgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIGlucHV0RW1haWwgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIGlucHV0UGFzc3dvcmQgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPlNpZ24gVXA8L2gzPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRVc2VybmFtZX0gcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiPjwvaW5wdXQ+PGJyIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRFbWFpbH0gcGxhY2Vob2xkZXI9XCJFbWFpbFwiPjwvaW5wdXQ+IDxiciAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dFBhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+PC9pbnB1dD4gPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBBbHJlYWR5IGEgbWVtYmVyPyA8YSBocmVmPVwic2lnbmluLmh0bWxcIj5TaWduIGluITwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==