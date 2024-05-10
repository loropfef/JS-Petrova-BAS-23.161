function areArraysSame(arr1, arr2) {
if (arr1.length !== arr2.length) {
 return false;
}
for (let i = 0; i < arr1.length; i++) {
if (arr1[i] !== arr2[i]) {
 return false;
}
}
return true;
}
                          ПРОВЕРКА
console.log(areArraysSame([1, 2, 3], [4, 5, 6])); выДаст false
console.log(areArraysSame([1, 2, 3], [1, 2, 3])); выдаст true
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4])); выдаст false