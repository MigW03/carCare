import React, {useState, useEffect} from 'react';
import {View, TextInput} from 'react-native';

import StepOne from './StepOne';
import StepTwo from './StepTwo';

export default function StepContainer(props) {
  if (props.page === 1) {
    return (
      <StepOne
        brand={props.brand}
        model={props.model}
        year={props.year}
        firstTouch={props.firstTouch}
      />
    );
  } else if (props.page === 2) {
    return (
      <StepTwo
        wheel={props.wheel}
        fuel={props.fuel}
        color={props.color}
        secondTouch={props.secondTouch}
      />
    );
  }
}
