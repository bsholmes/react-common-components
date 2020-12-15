import React from 'react';
import styled from 'styled-components/macro';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var clamp = function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
};

var grey = '#DDDDDD';
var brightBlue = '#2170EF';

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: -10px;\n  left: -10px;\n\n  border: 10px solid ", ";\n  border-radius: 50%;\n\n  clip: rect(0px, 42px, 84px, 0px);\n  transform: rotate(", "deg) scaleX(-1);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: -10px;\n  left: -10px;\n\n  border: 10px solid ", ";\n  border-radius: 50%;\n\n  clip: rect(0, 42px, 84px, 0);\n  transform: rotate(", "deg);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  clip-path: inset(-20% 50% -20% -20%);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  clip-path: inset(-20% -20% -20% 50%);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 64px;\n  height: 64px;\n\n  border: 10px solid ", ";\n  border-radius: 50%;\n\n  margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ProgressCircle = function ProgressCircle(_ref) {
  var _ref$percent = _ref.percent,
      percent = _ref$percent === void 0 ? 0 : _ref$percent,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children;
  return /*#__PURE__*/React.createElement(StatusBorder, null, /*#__PURE__*/React.createElement(StatusBarRightClip, null, /*#__PURE__*/React.createElement(StatusBarRight, {
    percent: percent
  })), /*#__PURE__*/React.createElement(StatusBarLeftClip, null, /*#__PURE__*/React.createElement(StatusBarLeft, {
    percent: percent
  })), children);
};

var StatusBorder = styled.div(_templateObject(), grey);
var StatusBarRightClip = styled.div(_templateObject2());
var StatusBarLeftClip = styled.div(_templateObject3());
var StatusBarRight = styled.div(_templateObject4(), brightBlue, function (props) {
  return clamp(props.percent * 2, 0, 1) * 180;
});
var StatusBarLeft = styled.div(_templateObject5(), brightBlue, function (props) {
  return clamp((props.percent - 0.5) * 2, 0, 1) * 180;
});

export default ProgressCircle;
