# 🎯 03-10. Input 컴포넌트 만들면서 복습하기

## 🌏 전체코드

```jsx
// ./src/03/Input.jsx
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChnage(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <label>
        {label}
        <input
          id={`input_${name}`}
          ref={this.setRef}
          onChange={this.handleChange}
          onFocus={onFocus}
          value={value}
          type={type}
        />
        {errorMessage && <span className="error">{errorMessage}</span>}
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChange: () => { },
  onFocus: () => { },
  autoFocus: false,
  type: 'text',
};
export default Input;
```



## 🌏 핵심 코드

### 👉 00. PureComponent

```jsx
class Input extends PureComponent {
    ...
```

클래스형 컴포넌트의 PureComponent로 작성



### 👉 01. autoFocus

```jsx
...
omponentDidMount() {
    if (this.props.autoFocus) {
        this.ref.focus();
    }
}
componentDidUpdate() {
    if (this.props.autoFocus) {
        this.ref.focus();
    }
}
...
```

autoFocus값이 true면 출력 후 input박스에 자동으로 커서를 배치.



### 👉 02. {label}

```jsx
...
 render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <label>
        {label}
	...
```

전달 받은 label값 출력



### 👉 03. onChange

```jsx
...
onChange={this.handleChange}
...
```

input값이 변경 될 때 onChange 콜백 함수 호출



### 👉 04. onFocus

```jsx
...
onFocus={onFocus}
...
```

프로퍼티로 전달받은 콜백 함수를 DOM 이벤트 프로퍼티에 연결하여 input에 마우스 커서가 포커스될 때 상위 컴포넌트의 콜백 함수를 호출



### 👉 05. errorMessage

```jsx
...
{errorMessage && <span className="error">{errorMessage}</span>}
...
```

errorMessage가 존재하는 경우 errorMessage출력



### 👉 06. PropTypes.oneOf

```jsx
...
Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
...
```

문자열형의 값은 text,number,price중 하나의 값만 가질 수 있음.



### 👉 07. default type

```jsx
...
Input.defaultProps = {
  onChange: () => { },
  onFocus: () => { },
  autoFocus: false,
  type: 'text',
};
```

type의 기본값은 text