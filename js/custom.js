import _ from 'lodash';

console.log(_.camelCase('Parcel Bundler Test!!'));

const imgEl = document.querySelector('img');
imgEl.setAttribute('src','./img/bg01.jpg')


// autoprefixer -  접두사를 자동으로 설정
// - npm i postcss autoprefixer -D


// rc파일 -> Runtime Configration 

// .babel
// 2015년 기준 버전이 es6 문법
// 하는 역활 - > 최신 문법으로 작성된 코드를 이전 문법에서도 동일하게 적용될 수 있도록 컴파일 하는 것
//  npm i -D @babel/core @babel/preset-env



async function test() {
  const promise = Promise.resolve(123);
  console.log(await promise);
};
test();

// 만약 ReperenceError Runtime 애러가 발생한다면?
// npm i -D @babel/plugin-transform-runtime


// cli -> Command Line Interface





































































































