import React, { Component } from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
  // 클래스형 컴포넌트의 this.props값과 동일.
  const { somePropValue } = props;
  // 클래스형 컴포넌트의 this.context값과 동일.
  const { someContextValue } = context;
  return <h1>hello,{somePropValue}</h1>;
}

SFC.propTypes = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: 'default value' };

export default SFC;