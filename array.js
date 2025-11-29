// let arr = ["joy",1,null,undefined];


// arr.push("Roy");
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(567)
// console.log(arr);
// arr.shift(4);
// console.log(arr);
// let arr2 = ["joy",1,null,undefined];
// console.log(arr2.slice(1,3));
// arr2.splice(1,2);
// console.log(arr2);
// arr2.splice(2,0,10000);
// console.log(arr2);




let oldArr = [1,2,3,4,5];
// let newArr = oldArr.map(function(num){
//     return num*2;
// })
// console.log(newArr);
// console.log(oldArr);
oldArr.filter(function(num){
    return num%2===0;
});
console.log(oldArr);