(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.react);
    global.index = mod.exports;
  }
})(this, function (module, React) {
  'use strict';

  var BiDirectional = React.createClass({
    displayName: 'BiDirectional',
    render: function render() {
      var _this = this;

      var _props = this.props;
      var html = _props.todos.map(function (item, i) {
        //pass item as parameter in the click method passing item.text doesnt work, it returns undefined
        return React.createElement(
          'li',
          { key: i, onClick: function onClick(event) {
              _props.callReact(item);
            } },
          item.text
        );
      });
      return React.createElement(
        'div',
        null,
        React.createElement(
          'ul',
          null,
          html
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              _this.props.alertCallFromReact('message from React Component to Angular Directive');
            } },
          'Call from Component to Directive'
        )
      );
    }
  });

  module.exports = BiDirectional;
});