'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateGroup = function (_React$Component) {
  _inherits(CreateGroup, _React$Component);

  function CreateGroup(props) {
    _classCallCheck(this, CreateGroup);

    var _this = _possibleConstructorReturn(this, (CreateGroup.__proto__ || Object.getPrototypeOf(CreateGroup)).call(this, props));

    _this.state = {
      name: '',
      genre: '',
      loc: '',
      avail: '',
      details: ''
    };

    _this.inputName = _this.inputName.bind(_this);
    _this.inputGenre = _this.inputGenre.bind(_this);
    _this.inputLoc = _this.inputLoc.bind(_this);
    _this.inputAvail = _this.inputAvail.bind(_this);
    _this.inputDetails = _this.inputDetails.bind(_this);
    return _this;
  }

  _createClass(CreateGroup, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      // TODO: handle post request with this data
      console.log('submitting data: ', this.state);
      event.preventDefault();
    }
  }, {
    key: 'inputName',
    value: function inputName(event) {
      this.setState({ name: event.target.value });
    }
  }, {
    key: 'inputGenre',
    value: function inputGenre(event) {
      this.setState({ genre: event.target.value });
    }
  }, {
    key: 'inputLoc',
    value: function inputLoc(event) {
      this.setState({ loc: event.target.value });
    }
  }, {
    key: 'inputAvail',
    value: function inputAvail(event) {
      this.setState({ avail: event.target.value });
    }
  }, {
    key: 'inputDetails',
    value: function inputDetails(event) {
      this.setState({ details: event.target.value });
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
          'Create Group'
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement('input', { type: 'text', onChange: this.inputName, placeholder: 'Group Name' }),
          React.createElement('br', null),
          React.createElement('input', { type: 'text', onChange: this.inputGenre, placeholder: 'Genre' }),
          React.createElement('br', null),
          React.createElement('input', { type: 'text', onChange: this.inputLoc, placeholder: 'Location' }),
          React.createElement('br', null),
          React.createElement('input', { type: 'text', onChange: this.inputAvail, placeholder: 'Availability' }),
          React.createElement('br', null),
          React.createElement('input', { type: 'text', onChange: this.inputDetails, placeholder: 'Details' }),
          React.createElement('br', null),
          React.createElement(
            'button',
            { type: 'submit' },
            'Create Group'
          )
        )
      );
    }
  }]);

  return CreateGroup;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY3JlYXRlR3JvdXAuanN4Il0sIm5hbWVzIjpbIkNyZWF0ZUdyb3VwIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJnZW5yZSIsImxvYyIsImF2YWlsIiwiZGV0YWlscyIsImlucHV0TmFtZSIsImJpbmQiLCJpbnB1dEdlbnJlIiwiaW5wdXRMb2MiLCJpbnB1dEF2YWlsIiwiaW5wdXREZXRhaWxzIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsVzs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFESztBQUVYQyxhQUFPLEVBRkk7QUFHWEMsV0FBSyxFQUhNO0FBSVhDLGFBQU8sRUFKSTtBQUtYQyxlQUFTO0FBTEUsS0FBYjs7QUFRQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUMsSUFBZixPQUFqQjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkQsSUFBaEIsT0FBbEI7QUFDQSxVQUFLRSxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0YsSUFBZCxPQUFoQjtBQUNBLFVBQUtHLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkgsSUFBaEIsT0FBbEI7QUFDQSxVQUFLSSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLE9BQXBCO0FBZGlCO0FBZWxCOzs7O2lDQUVhSyxLLEVBQU87QUFDbkI7QUFDQUMsY0FBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDLEtBQUtkLEtBQXRDO0FBQ0FZLFlBQU1HLGNBQU47QUFDRDs7OzhCQUVVSCxLLEVBQU87QUFDaEIsV0FBS0ksUUFBTCxDQUFjLEVBQUNmLE1BQU1XLE1BQU1LLE1BQU4sQ0FBYUMsS0FBcEIsRUFBZDtBQUNEOzs7K0JBQ1dOLEssRUFBTztBQUNqQixXQUFLSSxRQUFMLENBQWMsRUFBQ2QsT0FBT1UsTUFBTUssTUFBTixDQUFhQyxLQUFyQixFQUFkO0FBQ0Q7Ozs2QkFDU04sSyxFQUFPO0FBQ2YsV0FBS0ksUUFBTCxDQUFjLEVBQUNiLEtBQUtTLE1BQU1LLE1BQU4sQ0FBYUMsS0FBbkIsRUFBZDtBQUNEOzs7K0JBQ1dOLEssRUFBTztBQUNqQixXQUFLSSxRQUFMLENBQWMsRUFBQ1osT0FBT1EsTUFBTUssTUFBTixDQUFhQyxLQUFyQixFQUFkO0FBQ0Q7OztpQ0FDYU4sSyxFQUFPO0FBQ25CLFdBQUtJLFFBQUwsQ0FBYyxFQUFDWCxTQUFTTyxNQUFNSyxNQUFOLENBQWFDLEtBQXZCLEVBQWQ7QUFDRDs7OzZCQUdTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFHRTtBQUFBO0FBQUEsWUFBTSxVQUFVLEtBQUtDLFlBQXJCO0FBQ0UseUNBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsS0FBS2IsU0FBbEMsRUFBNkMsYUFBWSxZQUF6RCxHQURGO0FBQ2dGLHlDQURoRjtBQUVFLHlDQUFPLE1BQUssTUFBWixFQUFtQixVQUFVLEtBQUtFLFVBQWxDLEVBQThDLGFBQVksT0FBMUQsR0FGRjtBQUU0RSx5Q0FGNUU7QUFHRSx5Q0FBTyxNQUFLLE1BQVosRUFBbUIsVUFBVSxLQUFLQyxRQUFsQyxFQUE0QyxhQUFZLFVBQXhELEdBSEY7QUFHNkUseUNBSDdFO0FBSUUseUNBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsS0FBS0MsVUFBbEMsRUFBOEMsYUFBWSxjQUExRCxHQUpGO0FBSW1GLHlDQUpuRjtBQUtFLHlDQUFPLE1BQUssTUFBWixFQUFtQixVQUFVLEtBQUtDLFlBQWxDLEVBQWdELGFBQVksU0FBNUQsR0FMRjtBQUtnRix5Q0FMaEY7QUFPRTtBQUFBO0FBQUEsY0FBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBUEY7QUFIRixPQURGO0FBaUJEOzs7O0VBM0R1QlMsTUFBTUMsUyIsImZpbGUiOiJjcmVhdGVHcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENyZWF0ZUdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZ2VucmU6ICcnLFxuICAgICAgbG9jOiAnJyxcbiAgICAgIGF2YWlsOiAnJyxcbiAgICAgIGRldGFpbHM6ICcnXG4gICAgfTtcblxuICAgIHRoaXMuaW5wdXROYW1lID0gdGhpcy5pbnB1dE5hbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlucHV0R2VucmUgPSB0aGlzLmlucHV0R2VucmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlucHV0TG9jID0gdGhpcy5pbnB1dExvYy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5wdXRBdmFpbCA9IHRoaXMuaW5wdXRBdmFpbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5wdXREZXRhaWxzID0gdGhpcy5pbnB1dERldGFpbHMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcbiAgICAvLyBUT0RPOiBoYW5kbGUgcG9zdCByZXF1ZXN0IHdpdGggdGhpcyBkYXRhXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdHRpbmcgZGF0YTogJywgdGhpcy5zdGF0ZSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGlucHV0TmFtZSAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuICBpbnB1dEdlbnJlIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2dlbnJlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuICBpbnB1dExvYyAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2M6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIGlucHV0QXZhaWwgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YXZhaWw6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIGlucHV0RGV0YWlscyAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkZXRhaWxzOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPkNyZWF0ZSBHcm91cDwvaDM+XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dE5hbWV9IHBsYWNlaG9sZGVyPVwiR3JvdXAgTmFtZVwiPjwvaW5wdXQ+PGJyIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRHZW5yZX0gcGxhY2Vob2xkZXI9XCJHZW5yZVwiPjwvaW5wdXQ+PGJyIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaW5wdXRMb2N9IHBsYWNlaG9sZGVyPVwiTG9jYXRpb25cIj48L2lucHV0PjxiciAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmlucHV0QXZhaWx9IHBsYWNlaG9sZGVyPVwiQXZhaWxhYmlsaXR5XCI+PC9pbnB1dD48YnIgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5pbnB1dERldGFpbHN9IHBsYWNlaG9sZGVyPVwiRGV0YWlsc1wiPjwvaW5wdXQ+PGJyIC8+XG5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgR3JvdXA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==