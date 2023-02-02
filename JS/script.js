let txt = document.querySelector("h1").innerHTML;

txt = "";
console.log(txt);

// null
// 값이 없다는 것을 의도적으로 명시하고 싶을 때 사용
// 변수에 null 값을 할당하는 것은 변수가 이전에 참조하던 값을 더이상 참조하지 않겠다는 의미 가 됨

let name = "young-jae";

console.log(name);

name = null;

console.log(name);

// undefined
// 자바 스크립트에서 const를 제외한 var,let이라는 두개의 키워드로 선언한 변수는 값이 들어오기 전까지 undefined(초기화가 된다.)
// 변수 선언에 의해 확보된 메모리 공간에 값이 할당되기 전 까지 undefined 상태

let a;
console.log(a);

//number
//NaN (Not a Number)
//자바스크립트 는 대소문자를 구분

//String (문자 또는 문자열)
// 세가지 따옴표가있다
// 1. 큰따옴표 ""
// 2. 작은 따옴표 ''
// 3. 역 따옴표 ``(BACKTICK 백틱)

let text1 = "hello1";
let text2 = `ㅇㅇㅇ`;
let text3 = "hello3";

let num = "안녕하세요";

console.log(text1, text2, text3);

// 형변환
// Not A Number
console.log(Number("213"));
console.log(Number("d123123kssudgktpdy"));

console.log(Number(true));
// True 는 숫자1을 반환
console.log(Number(false));
//False는 숫자 0을 반환

// 1.정수 (integer)int: 자연수와 0,자연수에 마이너스를 붙인 숫자
// 2.실수 (real number)float이라고 명령어로 사용됨 Floating Point(부동 소숫점) :소수점이 있는 숫자

// 정수 변환: parseInt

console.log(parseInt(61.2));
// 소수점을 떨어트리고 정수만 나옴 결과 :61
console.log(parseInt("김영재"));
// NaN 숫자가 아니라는 얘기가 나옴
console.log(parseFloat(23.123));
//  소수점 그대로 나옴
