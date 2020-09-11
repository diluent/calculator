import React, { Component } from 'react';
import { DashWrapper, Result } from '@/Dash/DashStyles';

interface IProps {
    acc: string;
    result: number;
    operation: string;
    error?: string;
  }

export default class Dash extends Component<IProps> {
  render() {
    const {acc, result, operation, error} = this.props;
    return (
      <DashWrapper>
        {error && <Result error={true}>{error}</Result>}
        {!error && (
          <>
            <Result>{result} {operation}</Result>
            <Result>{acc}</Result>
          </>
        )}
        
      </DashWrapper>
    );
  }
}

