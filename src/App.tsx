import React, { Component } from 'react';
import Layout from '@/Layout/Layout';
import { sum, sub, mult, div } from '@/services/calcApi';

type TOperation = '+' | '-' | '*' | '/';

interface IState {
  acc: string;
  result?: number;
  op?: TOperation;
  error?: string;
}

export default class App extends Component<{}, IState> {
  state: IState = {
    acc: '',
    op: null,
    result: null,
    error: null,
  };

  componentDidMount() {
    globalThis.addEventListener('keydown', this.eventListener);
  }

  componentWillUnmount() {
    globalThis.removeEventListener('keydown', this.eventListener);
  }

  eventListener = (event: KeyboardEvent) => this.onChange(event.key);

  handleOp = async (operation: TOperation, naumber1: number, naumber2: number, newOp?: TOperation) => {
    let result;

    switch (operation) {
      case '+':
        result = await sum(naumber1, naumber2);
        break;
      case '-':
        result = await sub(naumber1, naumber2);
        break;
      case '*':
        result = await mult(naumber1, naumber2);
        break;
      case '/':
        result = await div(naumber1, naumber2);
    }

    if (result.error) {
      this.setState({error: result.error});
      return;
    }

    this.setState({result: result.result, acc: '', op: newOp, error: null});
  }

  onChange = (value: string) => {
    switch(true) {
      case !!this.state.error:
        this.setState(
          {result: null, acc: '', op: null, error: null},
          () => this.onChange(value)
        );
        break;

      case new RegExp(/^\d$/).test(value):
        const acc = this.state.acc + value;
        this.setState({acc});
        break;

      case ['=', 'Enter'].includes(value):
        if (this.state.op) {
          this.handleOp(this.state.op, this.state.result || 0, Number(this.state.acc || 0));
        }
        break;

      case new RegExp(/[\*\+/-]/).test(value):
        if (this.state.acc && this.state.op && this.state.result) {
          this.handleOp(this.state.op, this.state.result, Number(this.state.acc), value as TOperation);
        } else {
          this.setState({op: value as TOperation, result: this.state.result || Number(this.state.acc), acc: ''});
        }
        break;

      case value === 'AC':
        this.onClear();
        break;

      case value === 'Backspace':
        this.setState({acc: this.state.acc.slice(0, -1)});
    }
  }

  onClear = () => {
    this.setState({acc: '', result: null, op: null, error: null});
  }

  render() {
    return (
      <Layout
        onClearHandler={this.onClear}
        onClickHandler={this.onChange}
        result={this.state.result}
        acc={this.state.acc}
        operation={this.state.op}
        error={this.state.error}
      />
    );
  }
}

