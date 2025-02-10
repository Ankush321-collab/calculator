let sum=0;
let n=parseInt(prompt("Enter a number: "));
let arr=[];

for(let i=0;i<n;i++){
    arr[i]=parseInt(prompt("Enter a number: "));
  
}
for(let i=0;i<n;i++){
    sum+=arr[i];
}
console.log(sum);
