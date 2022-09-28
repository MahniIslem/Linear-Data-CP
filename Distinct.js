//Pronlem 01 >> Solution 01

let arr1 = [3,1,7,9];
let arr2 = [2,4,1,9,3];
let arr = arr1.concat(arr2);

function distinctelementssum (arr){
  let sum =0;
  for(let i = 0; i< arr.length; i++){
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
      continue;
    };
    sum += arr[i];
  };
  return sum
}
console.log(distinctelementssum(arr))

//Problem 01 >> Solution 02
let A = [3,5,4,9,7];
let B = [2,4,1,9,3];
let n = A.length;

function findSum (A, B, n) {
  let hash = new Map ();
  for (let i = 0; i< n; i++) {
    if (hash.has(A[i])){
      hash.set(A[i], 1 + hash.get (A[i]));
    }  
    else{
      hash.set(A[i], 1);
    } 
    if (hash.has(B[i])){
      hash.set(B[i], 1 + hash.get(B[i]));
    } 
    else{
      hash.set(B[i], 1);
    } 
  }
  let sum = 0;
  for (let entry of hash) {
    if (parseInt((entry[1]).toString()) == 1){
      sum += parseInt((entry[0]).toString());
    }   
  }
  return sum;
}
console.log(findSum(A, B, n));

//Problem 02 >> Solution 01

let arr3 = [10,48,4,56,2];
let arr4 = [5,10,8,48,4,3];
let arrx = arr3.concat(arr4);

function communelementssum (arrx){
  let sum =0;
  for(let i = 0; i< arrx.length; i++){
    if(arrx.indexOf(arrx[i]) == arrx.lastIndexOf(arrx[i])){
      continue;
    };
    sum += arrx[i];
  };
  return sum
}
console.log(communelementssum(arrx))

//Problem 02 >> Solution 02
let C = [12, 13, 6, 10];
let D = [13, 10, 16, 15];
let y = C.length;

function findSum(C, D, y) {
	let hash = new Map();
	for(let i = 0; i < y; i++) {
		if (!hash.has(C[i])) {
			hash.set(C[i], 1);
		}
		else {
			hash.set(C[i], hash.get(C[i]) + 1);
		}
	}
	for(let i = 0; i < y; i++) {
		if (!hash.has(D[i])) {
			hash.set(D[i], 1);
		}
		else {
			hash.set(D[i], hash.get(D[i]) + 1);
		}
	}	
	let sum = 0;
	for(let [key, value] of hash.entries()) {
		if(value == 2) {
			sum += key * 2;
		}
	}
	return sum;
}
console.log(findSum(C, D, y));