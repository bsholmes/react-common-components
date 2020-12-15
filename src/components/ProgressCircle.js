import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import { clamp } from '../utils';

import { grey, brightBlue } from '../styles/colors';

const DEFAULT_SIZE = '64px';
const DEFAULT_BAR_WIDTH = '10px';

const DEFAULT_BAR_COLOR = brightBlue;
const DEFAULT_BAR_BG_COLOR = grey;

const ProgressCircle = ({
  percent = 0,
  size = DEFAULT_SIZE,
  barWidth = DEFAULT_BAR_WIDTH,
  barColor = DEFAULT_BAR_COLOR,
  barBGColor = DEFAULT_BAR_BG_COLOR,
  onClick = () => {},
  children = []
}) => {
  return (
    <StatusBorder
      size={size}
      barWidth={barWidth}
      barBGColor={barBGColor}
      //TODO: compute the percent clicked based on polar coordinates and return as part of the event
      onClick={onClick}
    >
      <StatusBarRightClip barWidth={barWidth}>
        <StatusBarRight
          percent={percent}
          barColor={barColor}
          size={size}
          barWidth={barWidth}
        />
      </StatusBarRightClip>
      <StatusBarLeftClip barWidth={barWidth}>
        <StatusBarLeft
          percent={percent}
          barColor={barColor}
          size={size}
          barWidth={barWidth}
        />
      </StatusBarLeftClip>
      {children}
    </StatusBorder>
  );
};

const StatusBorder = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};

  border: ${props => props.barWidth} solid ${props => props.barBGColor};
  border-radius: 50%;

  margin: auto;
`;

const StatusBarRightClip = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  clip-path: inset(-${props => props.barWidth} -${props => props.barWidth} -${props => props.barWidth} 50%);
`;

const StatusBarLeftClip = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  clip-path: inset(-${props => props.barWidth} 50% -${props => props.barWidth} -${props => props.barWidth});
`;

const StatusBarRight = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -${props => props.barWidth};
  left: -${props => props.barWidth};

  border: ${props => props.barWidth} solid ${props => props.barColor};
  border-radius: 50%;

  -webkit-clip-path: polygon(0 0, 50% 0, 50% calc(${props => props.size} + ${props => props.barWidth} * 2), 0 calc(${props => props.size} + ${props => props.barWidth} * 2));
  transform: rotate(${props => clamp(props.percent * 2, 0, 1) * 180}deg);
`;

const StatusBarLeft = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -${props => props.barWidth};
  left: -${props => props.barWidth};

  border: ${props => props.barWidth} solid ${props => props.barColor};
  border-radius: 50%;

  -webkit-clip-path: polygon(0 0, 50% 0, 50% calc(${props => props.size} + ${props => props.barWidth} * 2), 0 calc(${props => props.size} + ${props => props.barWidth} * 2));
  transform: rotate(${props => clamp((props.percent - 0.5) * 2, 0, 1) * 180}deg) scaleX(-1);
`;

ProgressCircle.propTypes = {
  /**
    a floating point number between 0 and 1
  */
  percent: PropTypes.number,

  /**
    overall width and height string including CSS units.
    This solution only works with a square aspect
  */
  size: PropTypes.string,

  /**
    bar width string including CSS units
  */
  barWidth: PropTypes.string,

  /**
    bar color as a hex string
  */
  barColor: PropTypes.string,

  /**
    Background bar color as a hex string
  */
  barBGColor: PropTypes.string,
};
ProgressCircle.displayName = 'ProgressCircle';

export default ProgressCircle;
