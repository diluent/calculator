import React, { Component } from 'react';
import { ButtonElement } from '@/Button/ButtonStyles';

interface IProps {
    value: string;
    onClickHandler: (value: string) => void;
    horisontal?: number;
    vertical?: number;
}

export default class Button extends Component<IProps> {
  render() {
    const {onClickHandler, value, horisontal = 1, vertical = 1} = this.props;
    return (
      <ButtonElement horisontal={horisontal} vertical={vertical} onClick={() => onClickHandler(value)}>{value}</ButtonElement>
    );
  }
}

