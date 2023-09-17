// Modules 
const names=require('./4-names')
const sayHi=require('./5-utils')
const data=require('./6-alt-flavour')
// if there is invoked function in required modules the function will be executed while importing 
require('./7-mind-granade')   

// console.log(typeof names);
// console.log(names);
// console.log(data);

sayHi('Mahmud')
sayHi(names.john)
sayHi(names.peter)