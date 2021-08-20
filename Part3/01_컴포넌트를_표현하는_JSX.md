# 03-01. 컴포넌트를 표현하는 JSX

JSX는 JavaScriptXML의 줄임말<br/>자바스크립트에 XML을 추가한 확장형 문법<br/>JSX는 하나의 파일에 자바스크립트와 HTML을 동시에 작성할 수 있어 편리함.

## JSX 사용해 보기

(결과를 볼 때 JSXSample.jsx내용을 App.js에 복사해서 확인해보기)<br/>(Test시 Class이름도 App으로 바꾸기.)

```javascript
import React from 'react';

class JSXSample extends React.Component {
  render() {
    return (
      <div>
        <img src="http://www.easyspub.co.kr/images/logo_footer.png" alt="푸터로고" />
        <div>안녕하세요.</div>
      </div>
    );
  }
}

export default JSXSample;
```

주의할 부분은 **render()함수의 반환 값**.

JSX는 HTML이 아니라 **XML마크업 규칙을 따르기** 때문에 img태그 뒤에 />가 붙음.<br/>없으면 오류가 나는데 오류도 웹 브라우저에서 바로 확인할 수 있다.



## 기존 개발과 차이점

### App컴포넌트를 사용하지 않고 화면 구성해보기

index.js파일은 리액트 서벌르 구동했을 때 최초로 실행됩니다.<br/>`<App/>`으로 표시된 코드가 바로 JSXSample.jsx파일의 App컴포넌트를 의미합니다.

```javascript
// ./src/index.js
// 필수 리액트 구동 모듈들
import React from 'react';
import ReactDOM from 'react-dom';

// 초기 화면을 구성하는 사용자 코드
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 리액트 앤진이 화면을 출력하는 코드
// id가 root인 엘리먼트에 컴포넌트를 출력함
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 아래 부분은 서비스워커 구동코드로 오프라인 모드로 작동하는데 도움이 되는 모듈.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```



### 2. 만약 App컴포넌트를 사용하지 않는다면 수정

```javascript
// ./src/index.js

var img = document.createElement('img');
img.setAttribute('src', 'http://www.easyspub.co.kr/images/logo_footer.png');
var divEl = document.createElement('div');
divEl.innerText = '안녕하세요';
var welcomeEl = document.createElement('div');
welcomeEl.append(img);
welcomeEl.append(divEl);

var root = document.getElementById('root');
root.append(welcomeEl);
```

App컴포넌트를 사용하지 않을시 위처럼 복잡한 코드를 사용해야한다.

하지만 비효율적이므로 index.js는 원래의 상태대로 사용.



## JSX의 작동원리 알아보기

다음은 리액트 엔진이 JSX를 자바스크립트로 변환한 코드 일부이다.

```javascript
...
return(
	React.createElement(
        "div",
    	null,
        React.createElement( "img", {
         src: "http://www.easyspub.co.kr/images/logo_footer.png"   
        }),
        React.createElement(
            "div",
            null,
            "안녕하세요"
        )
    ))
);
```

리액트 엔진은 JSX의 XML구조를 분서갛여 위와 같은 자바스크립트 함수 코드로 변환함.

리액트를 사용하면 위의 과정을 일일이 알 필요 없이 **JSX로 화면을 빠르게 구성**하면 됨.

**개발자는 JSX만 작성**하고, **리액트 엔진은** JSX를 기존 **자바스크립트로 해석**하는 역할.

이것을 '**선언형 화면(Declarative View) 기술**'이라 부름.

