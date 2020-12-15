import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import { clamp } from '../utils';

import { grey, brightBlue } from '../styles/colors';

// TODO: allow customization of size, color, etc.
// we can support styled-components but only one class

const ProgressCircle = ({ percent = 0, children = [] }) => {
  return (
    <StatusBorder>
      <StatusBarRightClip>
        <StatusBarRight percent={percent} />
      </StatusBarRightClip>
      <StatusBarLeftClip>
        <StatusBarLeft percent={percent} />
      </StatusBarLeftClip>
      {children}
    </StatusBorder>
  );
};

const StatusBorder = styled.div`
  position: relative;
  width: 64px;
  height: 64px;

  border: 10px solid ${grey};
  border-radius: 50%;

  margin: auto;
`;

const StatusBarRightClip = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  clip-path: inset(-20% -20% -20% 50%);
`;

const StatusBarLeftClip = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  clip-path: inset(-20% 50% -20% -20%);
`;

const StatusBarRight = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -10px;
  left: -10px;

  border: 10px solid ${brightBlue};
  border-radius: 50%;

  clip: rect(0, 42px, 84px, 0);
  transform: rotate(${props => clamp(props.percent * 2, 0, 1) * 180}deg);
`;

const StatusBarLeft = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -10px;
  left: -10px;

  border: 10px solid ${brightBlue};
  border-radius: 50%;

  clip: rect(0px, 42px, 84px, 0px);
  transform: rotate(${props => clamp((props.percent - 0.5) * 2, 0, 1) * 180}deg) scaleX(-1);
`;

ProgressCircle.propTypes = {
  /**
    a floating point number between 0 and 1
  */
  percent: PropTypes.number,
};
ProgressCircle.displayName = 'ProgressCircle';

export default ProgressCircle;
