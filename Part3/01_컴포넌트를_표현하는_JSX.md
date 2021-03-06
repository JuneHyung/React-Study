# ๐ฏ 03-01. ์ปดํฌ๋ํธ๋ฅผ ํํํ๋ JSX

JSX๋ JavaScriptXML์ ์ค์๋ง<br/>์๋ฐ์คํฌ๋ฆฝํธ์ XML์ ์ถ๊ฐํ ํ์ฅํ ๋ฌธ๋ฒ<br/>JSX๋ ํ๋์ ํ์ผ์ ์๋ฐ์คํฌ๋ฆฝํธ์ HTML์ ๋์์ ์์ฑํ  ์ ์์ด ํธ๋ฆฌํจ.

## ๐ JSX ์ฌ์ฉํด ๋ณด๊ธฐ

(๊ฒฐ๊ณผ๋ฅผ ๋ณผ ๋ JSXSample.jsx๋ด์ฉ์ App.js์ ๋ณต์ฌํด์ ํ์ธํด๋ณด๊ธฐ)<br/>(Test์ Class์ด๋ฆ๋ App์ผ๋ก ๋ฐ๊พธ๊ธฐ.)

```javascript
import React from 'react';

class JSXSample extends React.Component {
  render() {
    return (
      <div>
        <img src="http://www.easyspub.co.kr/images/logo_footer.png" alt="ํธํฐ๋ก๊ณ " />
        <div>์๋ํ์ธ์.</div>
      </div>
    );
  }
}

export default JSXSample;
```

์ฃผ์ํ  ๋ถ๋ถ์ **render()ํจ์์ ๋ฐํ ๊ฐ**.

JSX๋ HTML์ด ์๋๋ผ **XML๋งํฌ์ ๊ท์น์ ๋ฐ๋ฅด๊ธฐ** ๋๋ฌธ์ imgํ๊ทธ ๋ค์ />๊ฐ ๋ถ์.<br/>์์ผ๋ฉด ์ค๋ฅ๊ฐ ๋๋๋ฐ ์ค๋ฅ๋ ์น ๋ธ๋ผ์ฐ์ ์์ ๋ฐ๋ก ํ์ธํ  ์ ์๋ค.



## ๐ ๊ธฐ์กด ๊ฐ๋ฐ๊ณผ ์ฐจ์ด์ 

### ๐ App์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉํ์ง ์๊ณ  ํ๋ฉด ๊ตฌ์ฑํด๋ณด๊ธฐ

index.jsํ์ผ์ ๋ฆฌ์กํธ ์๋ฒ๋ฅด ๊ตฌ๋ํ์ ๋ ์ต์ด๋ก ์คํ๋ฉ๋๋ค.<br/>`<App/>`์ผ๋ก ํ์๋ ์ฝ๋๊ฐ ๋ฐ๋ก JSXSample.jsxํ์ผ์ App์ปดํฌ๋ํธ๋ฅผ ์๋ฏธํฉ๋๋ค.

```javascript
// ./src/index.js
// ํ์ ๋ฆฌ์กํธ ๊ตฌ๋ ๋ชจ๋๋ค
import React from 'react';
import ReactDOM from 'react-dom';

// ์ด๊ธฐ ํ๋ฉด์ ๊ตฌ์ฑํ๋ ์ฌ์ฉ์ ์ฝ๋
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ๋ฆฌ์กํธ ์ค์ง์ด ํ๋ฉด์ ์ถ๋ ฅํ๋ ์ฝ๋
// id๊ฐ root์ธ ์๋ฆฌ๋จผํธ์ ์ปดํฌ๋ํธ๋ฅผ ์ถ๋ ฅํจ
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ์๋ ๋ถ๋ถ์ ์๋น์ค์์ปค ๊ตฌ๋์ฝ๋๋ก ์คํ๋ผ์ธ ๋ชจ๋๋ก ์๋ํ๋๋ฐ ๋์์ด ๋๋ ๋ชจ๋.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```



### ๐ ๋ง์ฝ App์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉํ์ง ์๋๋ค๋ฉด ์์ 

```javascript
// ./src/index.js

var img = document.createElement('img');
img.setAttribute('src', 'http://www.easyspub.co.kr/images/logo_footer.png');
var divEl = document.createElement('div');
divEl.innerText = '์๋ํ์ธ์';
var welcomeEl = document.createElement('div');
welcomeEl.append(img);
welcomeEl.append(divEl);

var root = document.getElementById('root');
root.append(welcomeEl);
```

App์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉํ์ง ์์์ ์์ฒ๋ผ ๋ณต์กํ ์ฝ๋๋ฅผ ์ฌ์ฉํด์ผํ๋ค.

ํ์ง๋ง ๋นํจ์จ์ ์ด๋ฏ๋ก index.js๋ ์๋์ ์ํ๋๋ก ์ฌ์ฉ.



## ๐ JSX์ ์๋์๋ฆฌ ์์๋ณด๊ธฐ

๋ค์์ ๋ฆฌ์กํธ ์์ง์ด JSX๋ฅผ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ๋ณํํ ์ฝ๋ ์ผ๋ถ์ด๋ค.

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
            "์๋ํ์ธ์"
        )
    ))
);
```

๋ฆฌ์กํธ ์์ง์ JSX์ XML๊ตฌ์กฐ๋ฅผ ๋ถ์๊ฐ์ฌ ์์ ๊ฐ์ ์๋ฐ์คํฌ๋ฆฝํธ ํจ์ ์ฝ๋๋ก ๋ณํํจ.

๋ฆฌ์กํธ๋ฅผ ์ฌ์ฉํ๋ฉด ์์ ๊ณผ์ ์ ์ผ์ผ์ด ์ ํ์ ์์ด **JSX๋ก ํ๋ฉด์ ๋น ๋ฅด๊ฒ ๊ตฌ์ฑ**ํ๋ฉด ๋จ.

**๊ฐ๋ฐ์๋ JSX๋ง ์์ฑ**ํ๊ณ , **๋ฆฌ์กํธ ์์ง์** JSX๋ฅผ ๊ธฐ์กด **์๋ฐ์คํฌ๋ฆฝํธ๋ก ํด์**ํ๋ ์ญํ .

์ด๊ฒ์ '**์ ์ธํ ํ๋ฉด(Declarative View) ๊ธฐ์ **'์ด๋ผ ๋ถ๋ฆ.

