/**
  Array.prototype.indexOf()
  -------------------------
  Description
  ===========

  indexOf() compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).

  The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

  Syntax
  ======

  arr.indexOf(searchElement[, fromIndex])
  
  Parameters
  ==========

  searchElement: 
    - Element to locate in the array.
  fromIndex: 
    - Optional
    - The index to start the search at. 
    - If the index is:
        - greater than or equal (>=) to the array's length, -1 is returned, which means the array will not be searched. 
        - 0, then the whole array will be searched. Default: 0 (entire array is searched).
        - a negative number, it is taken as the offset from the end of the array, the array is still searched from front to back.
                          
  Return value
  ============
    - The first index of the element in the array
    - -1 if not found.

  Polyfill
  ========
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */

//find all the occurrences of an element
//ES5
function occurrenceOfElementInArray(elem, arr){

  const occurOfElemInArr = document.getElementById('occurrence-of-element-in-array')
  let indices = [];
  let idx = arr.indexOf(elem);
  //if element is found
  while ( idx !== -1 ) {
    indices.push(idx);
    idx = arr.indexOf(elem, idx + 1)
  }
  
  let occured = indices.length;

  let output = 'Element "' + elem + '" Occurred ' + occured + ' time/s in these index/es ' + indices;
  
  occurOfElemInArr.innerText = output;
}

let outputArray = occurrenceOfElementInArray('a',['a', 'b', 'a', 'c', 'a', 'd']);



//find if an element exists in the array, if not add that element to the array
//ES5
function ExistOrAddElementToArray (elem, arr) {
  let outputMsg = '';
  const existAddElemArr = document.getElementById('exist-or-add-elem-arr');

  //if elements doesnt exist
  if (arr.indexOf(elem) === -1 ){
    arr.push(elem);
    outputMsg = elem + ' added to the list ' + arr;
    existAddElemArr.innerText = outputMsg;
  } else if ( arr.indexOf(elem) > -1 ){
    outputMsg = elem + ' already exist in ' + arr;
    existAddElemArr.innerText = outputMsg;
  }
} 

ExistOrAddElementToArray('spinach',['potato', 'tomato', 'chillies', 'green-pepper']);

/**
  String.prototype.indexOf()
  -------------------------
  Description
  ===========

  The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found

  Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character of a string called stringName is stringName.length - 1.

  Syntax
  ======

  str.indexOf(searchValue)
  str.indexOf(searchValue, fromIndex)
  
  Parameters
  ==========
  searchValue: 
    - A string representing the value to search for. 
    - If no string is explicitly provided, searchValue will be coerced to "undefined" and this value will be searched for in the current string. 
    So for example, 'undefined'.indexOf() will return 0, as undefined is found at position 0, but 'undefine'.indexOf() will return -1, as undefined is not found.
  fromIndex: 
    - Optional
    - An integer representing the index at which to start the search; the default value is 0. 
    - For fromIndex values lower than 0 or greater than str.length, the search starts at index 0 and str.length respectively. 
    - For example, 
      - 'hello world'.indexOf('o', -5) will return 4, as it starts at position 0, and o is found at position 4. 
      - 'hello world'.indexOf('o', 11) (and with any fromIndex value greater than 11) will return -1, as the search is started at position 11, the position after the end of the string or the position > 'hello world'.length

  Return value
  ============
  - The index of the first occurrence of searchValue
  - -1 if not found.
 */


function countStr (str, char) {
  const countCharInStr = document.getElementById('count-char-in-string');

  let count = 0;
  let position = str.indexOf(char);
  let outputMsg = '';
  let strLength = str.length;

  
  while (position !== -1 ){
    count++;
    position=str.indexOf(char,position + 1)
  } 
  
  outputMsg = char + ' occured ' + count + ' time/s ' + 'in "' + str + '" and the str has ' + strLength + 'charachters including spaces' ;
  countCharInStr.innerText = outputMsg; 
}

countStr('To be, or not to be, that is the question.','e')


//Compare args 

function compare(argA, argB) {
  const compareElements = document.getElementById('compare-elements');

  let outputMsg = '';
  
  if (argA < argB) {
    outputMsg = argA + ' smaller then ' + argB;
    compareElements.innerText = outputMsg;
  } else if (argA > argB) {
      outputMsg = argA + ' smaller then ' + argB 
      compareElements.innerText = outputMsg;
  } else
    // argA must be equal to b
    outputMsg = argA + ' equal to ' + argB 
    compareElements.innerText = outputMsg;

}

compare(8,8);


