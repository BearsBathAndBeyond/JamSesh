'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signin = function (_React$Component) {
  _inherits(Signin, _React$Component);

  function Signin(props) {
    _classCallCheck(this, Signin);

    var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));

    _this.state = {
      username: '',
      email: '',
      password: ''
    };

    _this.inputUsername = _this.inputUsername.bind(_this);
    _this.inputPassword = _this.inputPassword.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Signin, [{
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
          'Need an account? ',
          React.createElement(
            'a',
            { href: 'signup.html' },
            'Sign up!'
          )
        )
      );
    }
  }]);

  return Signin;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvc2luZ2luLmpzeCJdLCJuYW1lcyI6WyJTaWduaW4iLCJwcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5wdXRVc2VybmFtZSIsImJpbmQiLCJpbnB1dFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLEVBREM7QUFFWEMsYUFBTyxFQUZJO0FBR1hDLGdCQUFVO0FBSEMsS0FBYjs7QUFNQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUNBLFVBQUtFLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkYsSUFBbEIsT0FBcEI7QUFWaUI7QUFXbEI7Ozs7aUNBRWFHLEssRUFBTztBQUNuQjtBQUNBQyxjQUFRQyxHQUFSLENBQVksbUJBQVosRUFBaUMsS0FBS1YsS0FBdEM7QUFDQVEsWUFBTUcsY0FBTjtBQUNEOzs7a0NBRWNILEssRUFBTztBQUNwQixXQUFLSSxRQUFMLENBQWMsRUFBQ1gsVUFBVU8sTUFBTUssTUFBTixDQUFhQyxLQUF4QixFQUFkO0FBQ0Q7OztrQ0FFY04sSyxFQUFPO0FBQ3BCLFdBQUtJLFFBQUwsQ0FBYyxFQUFDVCxVQUFVSyxNQUFNSyxNQUFOLENBQWFDLEtBQXhCLEVBQWQ7QUFDRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFHRTtBQUFBO0FBQUEsWUFBTSxVQUFVLEtBQUtQLFlBQXJCO0FBQ0UseUNBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsS0FBS0gsYUFBbEMsRUFBaUQsYUFBWSxVQUE3RCxHQURGO0FBQ2tGLHlDQURsRjtBQUVFLHlDQUFPLE1BQUssVUFBWixFQUF1QixVQUFVLEtBQUtFLGFBQXRDLEVBQXFELGFBQVksVUFBakUsR0FGRjtBQUFBO0FBRXVGLHlDQUZ2RjtBQUdFO0FBQUE7QUFBQSxjQUFRLE1BQUssUUFBYjtBQUFBO0FBQUE7QUFIRixTQUhGO0FBU0U7QUFBQTtBQUFBO0FBQUE7QUFDbUI7QUFBQTtBQUFBLGNBQUcsTUFBSyxhQUFSO0FBQUE7QUFBQTtBQURuQjtBQVRGLE9BREY7QUFnQkQ7Ozs7RUE3Q2tCUyxNQUFNQyxTIiwiZmlsZSI6InNpbmdpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNpZ25pbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9O1xuXG4gICAgdGhpcy5pbnB1dFVzZXJuYW1lID0gdGhpcy5pbnB1dFVzZXJuYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbnB1dFBhc3N3b3JkID0gdGhpcy5pbnB1dFBhc3N3b3JkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0IChldmVudCkge1xuICAgIC8vIFRPRE86IGhhbmRsZSBwb3N0IHJlcXVlc3Qgd2l0aCB0aGlzIGRhdGFcbiAgICBjb25zb2xlLmxvZygnc3VibWl0dGluZyBkYXRhOiAnLCB0aGlzLnN0YXRlKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgaW5wdXRVc2VybmFtZSAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBpbnB1dFBhc3N3b3JkIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5TaWduIFVwPC9oMz5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0VXNlcm5hbWV9IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIj48L2lucHV0PjxiciAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dFBhc3N3b3JkfSBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+PC9pbnB1dD4gPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBOZWVkIGFuIGFjY291bnQ/IDxhIGhyZWY9XCJzaWdudXAuaHRtbFwiPlNpZ24gdXAhPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19