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

// 연산자
// 1. 산술 연산자 : +,-,/,*,%

console.log(30 + 10);
console.log(30 - 10);
console.log(30 / 10);
console.log(30 * 10);
//나머지 연산자 :**
console.log(30 % 10);
//거듭제곱 연산자 :**

//2.대입 연산자 : =, +=, -=

let num1 = 123;
let num2 = 456;
let str1 = "hello";
let str2 = "world";

let num3, str3;

num3 = console.log(num1 + num2);
num3 = console.log(num1 - num2);

str3 = console.log(str1 + str2);
str3 = console.log(str1 - str2);

let num4 = num1 - num2;
let str4 = str1 - num2;

console.log(num4);
console.log(str4);

// <type>
// 	// 자바스크립트는 동적인이라 변수 선언시 타입 지정 X
// 	/// 값이 할당되는 순간 그 값에 따라 타입이 결정됨. ex) 문자를 넣어주면 문자 숫자를 넣어주면 숫자됨
// 	// 자바스크립트:장점
// 	// 자바스크립트가 타입스크립트에 비해 자유도와 유연성이 높다
// 	// 자바스크립트의 단점
// 	//  1.예상 못한 버그가 발생할 확률이 높다.
// 	//  2. 프로젝트 규모가 커질수록 유지보수 증가 ,안정성 저하
// 	// let num(변수이름 ='숫자')(자바스크립트)

// 	// 타입스크립트는 선언과 동시에 어떤 타입을 넘겨야하는지 명확하게 작성해야 함
// 	// 해당 타입이 아닌 데이터를 넘긴다면 바로 컴파일러 에러 발생 사전에 빠른 대응이 가능하다.
// 	// let num:number = '문자열';(타입스크립트)
// 	// 자신이 지정한 자료형하고 다른 값이 들어오면 에러 발생
// 	// 타입스크립트  마이크로소프트가 개발하고 유지하고 있는 오픈소스 프로그래밍 언어
// 	// 자바 스크립트에 타입을 부여한 언어 ---> 자바스크립트 상위 버전
// </type>

// 자바스크립트 대소문자 구분 0 소문자 a A
let aa = "문자열";
let b = 12345;
let c = aa + b;
let d = 20 - "10";
// 자바스크맅트의 장점이자 단점 어떻게든 결과는나오는데 등신같음
console.log(d);

//3. 복합 대입 연산자
let nom = 10;

result_1 = result_2 = result_3 = result_4 = result_5 = 10;
10;

console.log((result_1 = result_2 = result_3 = result_4 = result_5));

//복합 대입 연산자 +=
// result_1 = result_1 +nom

result_1 += nom;
console.log(result_1);

//복합 대입 연산자 -=
// result_2 = result_2 -nom
result_2 -= nom;
console.log(result_2);

result_3 *= nom;
console.log(result_3);

result_4 /= nom;
console.log(result_4);

result_5 %= nom;
console.log(result_5);

// 증가,감소 연산자 ++,--

let number, result;

number = 10;

console.log(number);

result = number++;
// result에 num값이 복사되고,num++는 그 다음값 부터 num에 증가
console.log(result);
10;
console.log(number);
11;

number = 10;
console.log(number);
result = ++number; // 이 행에서 ++가 반영되고,증감된 결과값이 result에 저장이됨
console.log(result);

number = 20;
console.log(number);
result = --number;
console.log(result);
console.log(number);
result = --number;
console.log(result);

// 비교 논리 연산자
//  1. 비교 연산자
// NUMBER

console.log(5 <= 10); // true

console.log("5" <= 10); // true

console.log(true == 1); // true

console.log(true == "1"); // true

// true는 자료형 : Boolean / 숫자 1은 자료형 : number

console.log(true === 1); //false
console.log(false != 0); //false
console.log(false !== 0); //true

// String
// 알파벳 순서대로 비교
console.log("A" < "F"); // true
//소문자 > 대문자
console.log("A" < "a"); // true

console.log("Hello" < "Hi");

let text = 123123;

console.log(typeof text);

let 문자 = "안녕하세요";
console.log(typeof 문자);

console.log(typeof true);
console.log(typeof false);
