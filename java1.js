// // Ignore - testing setup
// var Mocha = require('mocha');
// var mocha = new Mocha();
// var expect = require('chai').expect;
// var it = require('chai').it;
// mocha.suite.emit('pre-require', this, 'solution', mocha);

// // Write our own implementation of `Array.prototype.reduce`
// //              [1, 2, 3, 4] (acc, item) => acc + item * 2
// function reduce(inputArray, callback, initialValue) {
//   // 1. Implement
//   let index = initialValue ? 0 : 1;
//   initialValue = initialValue ? initialValue : inputArray[0];
//   for(let i=index; i<inputArray.length; i++) {
//     console.log('loop: ', initialValue, inputArray[i]);
//     initialValue = callback(initialValue, inputArray[i]);
//   }
//   console.log('initialValue: ', initialValue);
//   return initialValue;
// }

// it('should sum the double of all integers in an array', () => {
//   const arr = [1, 2, 3, 4];
//   const cb = (acc, item) => acc + item * 2;
//   expect(reduce(arr, cb, 0)).toBe(20);
// });

// it('should skip the first element when acc is not provided', () => {
//   const arr = [1, 2, 3, 4];
//   const cb = (acc, item) => acc + item * 2;
//   expect(reduce(arr, cb)).toBe(19);
// });

// mocha.run();



// x.x.x


const versions = [
  '1.3.0.9',
  '11.3.0.11.0-hotfix.3',
  '0.2.0',
  '3.3.3.3',
  '0.2-beta',
  '3.3.3.3.3',
  '3.10',
  '0.2.0',
];


const sortVer = versions.sort((a,b) => {
        let arr1 = a.split('.');
        let arr2 = b.split('.');
        let minLen = Math.min(arr1.length, arr2.length);
        let isArr1LowerVersion = 1;
        let forLoopCount = 0;
        for(let i=0; i<minLen; i++) {
          forLoopCount ++;
          if(arr1[i] === arr2[i]) continue;
          if(parseInt(arr1[i]) == arr1[i] && parseInt(arr2[i]) == arr2[i]) {
              if(Number(arr1[i]) !== Number(arr2[i])) {
                 isArr1LowerVersion = (Number(arr1[i]) - Number(arr2[i]));
                break;
              }
          } else {
              isArr1LowerVersion = (arr1[i] - arr2[i]);
          }
          if(isArr1LowerVersion < 0) break;
        }
        console.log('sort: ', a, '  ||  ', b, '  result: ', isArr1LowerVersion, `(${forLoopCount})`);
        return isArr1LowerVersion;
  });
    
console.log(sortVer);



