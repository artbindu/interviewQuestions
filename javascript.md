<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>JavaScript Questions</h1>
</div>

### JS Terminal: [Playcode](https://playcode.io/empty_javascript)

### 0. Solve JS Issue
<my-el></my-el>
```js client
var a = 20;
console.log(a);
console.log(a++);
console.log(a);
console.log(++a);
console.log(a+10);
console.log(a);
```
<details>
    <summary><b>Answer</b></summary>
    <p>20<br>20<br>21<br>22<br>32<br>22</p>
</details>

```js
console.log([] == "");
```
<details>
    <summary><b>Answer</b></summary>
    <p>false</p>
</details>

```js
console.log(["abc"] == "abc");
```
<details>
    <summary><b>Answer</b></summary>
    <p>true</p>
</details>

```js
console.log([1,2] + [3, 4]);
console.log("2"+2-2, 12+12+"24"+12-12);
console.log("9">"11");
console.log([] == []); // as memory address are different
console.log(["abc", "ab"] == "abc ab".split(" "));
console.log(["abc", "ab"] == ["abc", "ab"]);
console.log("12"/2, "12"/"2");
```


// 1. Array map/filter/reduce 

```js
const arr = ['1', '2', '3', '4', '5']; 
console.log('1.a) Array Map - Convert to Number: ', arr.map(x => Number(x))); // [1, 2, 3, 4, 5]

console.log('1.b) Array Filter - Even Element: ', arr.filter(x => Number(x)%2 === 0)); // ["2", "4"]
console.log('1.b) Array Filter - Even Number: ', arr.filter(x => Number(x)%2 === 0).map(x => Number(x))); // [2, 4]
console.log('1.b) Array Filter - Even Number: ', arr.filter(x => Number(x)%2 === 0).map(Number)); // [2, 4]
console.log('1.b) Array Filter - Even Number: ', Array.from(arr.filter(x => Number(x)%2 === 0), x => Number(x))); // [2, 4]
console.log('1.b) Array Filter - Even Number: ', arr.reduce((acc, ele) => { ele = Number(ele); return ele%2===0 ? [...acc, ele] : acc}, [])); // [2, 4]
console.log('1.b) Array Filter - Even Number:*** ', arr.reduce((acc, ele) => Number(ele)%2===0 ? [...acc, Number(ele)] : acc, [])); // [2, 4]

console.log('1.c) Array Reduce - Sum: ', arr.reduce((acc, ele) => Number(acc) + Number(ele))); // 15
console.log('1.c) Array Reduce - Sum: ', arr.reduce((acc, ele) => { ele = Number(ele); return (acc + ele)}, 0)); // 15
console.log('1.c) Array Reduce - Sum: ', arr.reduce((acc, ele) => acc + Number(ele), 0)); // 15

// Print as: 12345
console.log('1.c) Array Reduce - Sum: ', arr.reduce((acc, ele) => acc + ele)); // 12345
// Print as: 012345
console.log('1.c) Array Reduce - Sum: ', arr.reduce((acc, ele) => acc + ele, 0)); // 012345
```

// 2. value vs. reference 
```js
const myObject = { 
  foo: 'foo', 
  bar: { 
    baz: 'baz', 
  }, 
};
const shalloCopy = { ...myObject };
console.log('shalloCopy: ', JSON.stringify(shalloCopy)); // Shallow Copy - অগভীর অনুলিপি
// Shallow Copy - Top Level properties are copies as it's like, foo: 'foo'. But, bar is copied as a reference to the same object {baz: 'baz'}
const deepCopy = JSON.parse(JSON.stringify(myObject));
console.log('deepCopy: ', JSON.stringify(deepCopy)); // Deep Copy - গভীর অনুলিপি
```
```js
const newObj = { ...myObject }; //  Shallow Copy - অগভীর অনুলিপি
newObj.foo = 'X';
console.log('2a. ', myObject.foo); // 'foo'
newObj.bar.baz = 'X';
console.log('2b. ', myObject.bar.baz); // 'X'
```
// Javascript Closer
#### Example-01
```js
function outer(x) {
  console.log(x);
  function inner() {
    console.log(x);
  }
  x = x*2;
  return inner;
}
```
```js
let y = outer(12);
let z = outer(13);
setTimeout(y, 1500);
setTimeout(z, 1000);
``` 
or
```js
var y = outer(12);
var z = outer(13);
setTimeout(() => {
  console.log('view Lexical scoping of y'); y();
 }, 1500);
setTimeout(() => {
  console.log('view Lexical scoping of z'); z();
 }, 1000);
```

#### Example-02 (Curring Function)
```js
function sum(n1) {
 return function (n2 = 0) {
    return n1 + n2;
 }
}
console.log('Closer-01', sum(12)(13));
console.log('Closer-02', sum(12)(0));
console.log('Closer-03', sum(144)());
```
```js
function sumAll(n1) {
  console.log(n1);
  return function (n2) {
    console.log(n2);
    return (n2!==undefined) ? sumAll(n1+n2) : n1;
  }
}

console.log('sum-01', setTimeout(sumAll(12)(13)(23)(), 100));
```
```js
function sumAll(n1) {
  console.log('first ' + n1);
  return function (n2) {
    console.log('second ' + n2);
    return (n2!==undefined) ? sumAll(n1+n2) : n1;
  }
}

// console.log('print', sumAll(12)(13)(23)());

// setTimeout(() => {
//   console.log('print -- 001');
//   console.log('sum =', sumAll(12)(13)(23)());
// } , 100);

console.log('print -- 001');
console.log('sum =', sumAll(12)());
console.log('print -- 002');
console.log('sum =', sumAll(12)(13)());
console.log('print -- 003');
console.log('sum =', sumAll(12)(13)(25)());
```

// 3. Event Loop
```sh
 - JavaScript is a Synchronous, Single Threaded Language
 - JavaScript code executed in 'Main Call Stack' through line by line
 - Any Programming Language have work type 
    - 1. CPU Intensive Work - Blocks: IF-ELSE, FOR LOOP, block the main execution block
    - 2. I/O Bounded Task - Database Call, File Handling, Network Calling
```
Example: - Basic Event Loop
- [Nested Event Loop](https://www.jsv9000.app/?code=ZnVuY3Rpb24gc2l4KCkgew0KICBjb25zb2xlLmxvZygic2l4Iik7DQp9DQoNCmZ1bmN0aW9uIGZpdmUoKSB7DQogIGZvcihsZXQgaT0wOyBpPDU7IGkrKykgew0KICAgIGNvbnNvbGUubG9nKCJmaXZlIik7DQogIH0NCn0NCg0KZnVuY3Rpb24gZm91cigpIHsNCiAgY29uc29sZS5sb2coImZvdXIiKTsNCn0NCg0KZnVuY3Rpb24gdGhyZWUoKSB7DQogIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgew0KICAgIGZvdXIoKTsNCiAgICBjb25zb2xlLmxvZygibGFzdCIpOw0KICB9LCAyKTsNCiAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgew0KICAgIGNvbnNvbGUubG9nKCJsYXN0LWJlZm9yZSIpOw0KICAgIHNpeCgpOw0KICB9LCAwKTsNCiAgY29uc29sZS5sb2coInRocmVlIik7DQogIGZpdmUoKTsNCn0NCg0KZnVuY3Rpb24gdHdvKCkgew0KICBjb25zb2xlLmxvZygidHdvIik7DQogIHRocmVlKCk7DQp9DQoNCmZ1bmN0aW9uIG9uZSgpIHsNCiAgIHR3bygpOw0KICBjb25zb2xlLmxvZygib25lIik7DQogDQp9DQoNCm9uZSgpOw%3D%3D)
- Explain Different Event Loop: [Event Loop-1](https://www.jsv9000.app/?code=DQogIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgew0KICAgIGNvbnNvbGUubG9nKCJvbmUiKTsNCiAgfSk7DQogIA0KICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsNCiAgICBjb25zb2xlLmxvZygidHdvIik7DQogIH0pOw0KICANCiAgZmV0Y2goJ2h0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycz9wYWdlPTEnKQ0KICAudGhlbihyZXNwb25zZSA9PiB7DQogICAgY29uc29sZS5sb2coImdldCByZXNwb25zZSIpOw0KICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7DQogIH0pDQogIC50aGVuKGRhdGEgPT4gew0KICAgIGNvbnNvbGUubG9nKGRhdGEpOw0KICB9KTsNCiAgDQogIChmdW5jdGlvbigpIHsNCiAgICBjb25zb2xlLmxvZygiSUlGRSBGdW5jdGlvbiIpOw0KICB9KSgpOw0KICBjb25zb2xlLmxvZygiY29uc29sZSBsb2ciKTsNCg0K) vs [Event Loop-2](https://www.jsv9000.app/?code=DQogIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgew0KICAgIGNvbnNvbGUubG9nKCJvbmUiKTsNCiAgfSwgMjAwMCk7DQogIA0KICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsNCiAgICBjb25zb2xlLmxvZygidHdvIik7DQogIH0sIDEwMDApOw0KICANCiAgZmV0Y2goJ2h0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycz9wYWdlPTEnKQ0KICAudGhlbihyZXNwb25zZSA9PiB7DQogICAgY29uc29sZS5sb2coImdldCByZXNwb25zZSIpOw0KICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7DQogIH0pDQogIC50aGVuKGRhdGEgPT4gew0KICAgIGNvbnNvbGUubG9nKGRhdGEpOw0KICB9KTsNCiAgDQogIChmdW5jdGlvbigpIHsNCiAgICBjb25zb2xlLmxvZygiSUlGRSBGdW5jdGlvbiIpOw0KICB9KSgpOw0KICBjb25zb2xlLmxvZygiY29uc29sZSBsb2ciKTsNCg0K) vs [Event Loop-3](https://www.jsv9000.app/?code=DQogIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgew0KICAgIGNvbnNvbGUubG9nKCJvbmUiKTsNCiAgfSwgMjAwMCk7DQogIA0KICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsNCiAgICBjb25zb2xlLmxvZygidHdvIik7DQogIH0sIDEwMDApOw0KICANCiAgZmV0Y2goJ2h0dHBzOi8vcmVxcmVzLmluL2FwaS91c2Vycz9wYWdlPTEnKQ0KICAudGhlbihyZXNwb25zZSA9PiB7DQogICAgY29uc29sZS5sb2coImdldCByZXNwb25zZSIpOw0KICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7DQogIH0pDQogIC50aGVuKGRhdGEgPT4gew0KICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgew0KICAgICAgY29uc29sZS5sb2coZGF0YSk7DQogICAgfSwgMTUwMCk7DQogIH0pOw0KICANCiAgKGZ1bmN0aW9uKCkgew0KICAgIGNvbnNvbGUubG9nKCJJSUZFIEZ1bmN0aW9uIik7DQogIH0pKCk7DQogIGNvbnNvbGUubG9nKCJjb25zb2xlIGxvZyIpOw0KDQo%3D)
- [Event loop - using for loop](https://www.jsv9000.app/?code=Ly8gT3V0cHV0IGlzIE5vdCBFeHBlY3RlZA0KZm9yKGk9MDsgaTwyOyBpKyspIHsNCiAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgDQogICAgY29uc29sZS5sb2coaSsnYScpOyANCiAgIH0sIDUwMCk7DQp9DQovLyBGaXhlZCAtIHVzaW5nIGFzc2lnbiBwYXJhbWV0ZXINCmZvcihsZXQgaj0wOyBqPDI7IGorKykgew0KICBzZXRUaW1lb3V0KCgpID0%2BIGNvbnNvbGUubG9nKGorJ2JiJyksIDUwMCkNCn0NCi8vIEZpeGVkIC0gdXNpbmcgQ2xvc2VyDQpmb3Ioaz0wOyBrPDI7IGsrKykgew0KICAoZnVuY3Rpb24oaykgew0KICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IA0KICAgIGNvbnNvbGUubG9nKGsrJ2NjYycpOyANCiAgIH0sIDUwMCkNCiAgfSkoayk7DQp9DQovLyBDbG9zZXIgd2l0aG91dCBTZXRUaW1lb3V0DQpmb3IobD0wOyBsPDI7IGwrKykgew0KICAoZnVuY3Rpb24oaykgew0KICAgIGNvbnNvbGUubG9nKGwrJ2RkZGQnKTsNCiAgfSkoayk7DQp9)
- [JS Scope Event Loop](https://www.jsv9000.app/?code=Ly8gSlMgU2NvcGUgLSBpbm5lci1vdXRlciBmdW5jdGlvbiBldmVudCBsb29wDQoNCmZ1bmN0aW9uIG91dGVyKHgpIHsNCiAgY29uc29sZS5sb2coeCk7DQogIGZ1bmN0aW9uIGlubmVyKCkgew0KICAgIGNvbnNvbGUubG9nKHgpOw0KICB9DQogIHggPSB4KjI7DQogIHJldHVybiBpbm5lcjsNCn0NCg0KdmFyIHkgPSBvdXRlcigxMik7DQp2YXIgeiA9IG91dGVyKDEzKTsNCnNldFRpbWVvdXQoeSwgMTAwMCk7DQpzZXRUaW1lb3V0KHosIDUwMCk7)

Example: - Promise Based function





3a.
```js
    const sleep = (ms, msg='hello') => setTimeout(() => console.log(msg), ms);
    // sleep function
    sleep(1000);
```
#### 3. (b)
```js
    // Not a correct way, because resolve never executed.
    // const sleep = (ms, msg='hello') => new Promise(resolve => setTimeout(resolve => console.log(msg), ms));
    // Correct way to do this
    const sleep = (ms, msg='hello') => new Promise(resolve => setTimeout(() => {console.log(msg); promise();}, ms));
    console.log('A');
    sleep(1000);
    console.log('B');
    // Output: A  B   hello
```
Another way to do this:
```js
    const sleep = (ms, msg='hello') => new Promise(resolve => setTimeout(resolve(console.log(msg)), ms));
    console.log('A');
    sleep(1000);
    console.log('B');
    // Output: A  hello  B
```

#### 3. (c)
```js
    const sleep = (ms, msg='hello') => new Promise(r => setTimeout(r(console.log(msg)), ms));
    async function demo(ms) {
        await sleep(ms);
    }
    console.log('A');
    demo(1000);
    console.log('B');
```
#### 3. (d)
```js
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    console.log('A');
    sleep(1000)
        .then(t => console.log('hello'));
    console.log('B');
```