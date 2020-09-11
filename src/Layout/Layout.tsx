import React, { Component } from 'react';
import Button from '@/Button/Button';
import Dash from '@/Dash/Dash';

interface IProps {
    acc: string;
    result: number;
    operation?: string;
    onClickHandler: (value: string) => void;
    onClearHandler: () => void;
    error?: string;
}

export default class Layout extends Component<IProps> {
  render() {
    const {onClearHandler, onClickHandler, result, acc, operation, error} = this.props;

    return (
        <div className="text-center buttons">
          <div><Dash result={result} acc={acc} operation={operation} error={error}/></div>
          <div>
            <Button value='AC' horisontal={4} onClickHandler={onClearHandler} />
          </div>
          <div>
            <Button value='1' onClickHandler={onClickHandler} />
            <Button value='2' onClickHandler={onClickHandler} />
            <Button value='3' onClickHandler={onClickHandler} />
            <Button value='/' onClickHandler={onClickHandler} />
          </div>
          <div>
            <Button value='4' onClickHandler={onClickHandler} />
            <Button value='5' onClickHandler={onClickHandler} />
            <Button value='6' onClickHandler={onClickHandler} />
            <Button value='*' onClickHandler={onClickHandler} />
          </div>
          <div>
            <Button value='7' onClickHandler={onClickHandler} />
            <Button value='8' onClickHandler={onClickHandler} />
            <Button value='9' onClickHandler={onClickHandler} />
            <Button value='-' onClickHandler={onClickHandler} />
          </div>
          <div>
            <Button value='0' onClickHandler={onClickHandler} />
            <Button value='=' onClickHandler={onClickHandler} horisontal={2} />
            <Button value='+' onClickHandler={onClickHandler} />
          </div>
      </div>
    );
  }
}

