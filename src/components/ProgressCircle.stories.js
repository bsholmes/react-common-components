import React from "react";
import { default as ProgressCircleComponent } from "./ProgressCircle";

export default {
  title: 'ProgressCircle',
  component: ({ percent }) => <ProgressCircleComponent percent={percent} />,
};

export const ProgressCircle = ({ percent }) => <ProgressCircleComponent percent={percent} />;
ProgressCircle.args = {
  percent: 0.75,
};
ProgressCircle.argTypes = {
  percent: {
    control: { type: 'range', min: 0, max: 1, step: 0.01 },
    description: 'A number between 0 and 1 controlling the percent completion of the circle',
    table: { defaultValue: { summary: 0 } }
  },
  // assigns the argType to the Events category
  onClick: {
    table: {
      category: 'Events',
      subcategory: 'Button Events'
    }
  },
};