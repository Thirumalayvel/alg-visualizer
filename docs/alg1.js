import { ReflectIteration } from "./visualize.js";
function binary_search(arr,target){
let head=0,tail=arr.length-1;
let mid=Math.floor((head+tail)/2);
while(tail>head){
    break;
}
}

function linear_search(arr,target){
    console.log("yes");
let allow=(i,arr)=>i<arr.length;
let loopCond=allow(0,arr);
for(let i=0;loopCond;i++){
    let cond=arr[i]==target;
 let states={i:i,loopCond:loopCond,cond:cond,arr:arr,target:target};
 ReflectIteration("linear",states);
 if(cond) return i;
 loopCond=allow(i+1,arr);
} 
let states={i:arr.length+1,loopCond:false,arr:arr,target:target};
 ReflectIteration("linear",states);
return -1;
}
window.linear_search = linear_search;
