
function fibonacci(n){
   let array1 = [];
   for(let i=0; i<=n; i++){
      if(i===0){
       array1[0] = 0;
      }else if(i===1 || i===2){
        array1[i] = 1;
      }else{
        array1[i] = array1[i-1] + array1[i-2]
      }
      
   }
   console.log(array1);
}

function fibwhileloop(n){
   let arr2 = [];
   let i = 0;
   while(i<=n){
      if(i===0){
        arr2[i] = 0;
      }
      else if(i===1 || i===2){
         arr2[i] = 1;
      }
      else{
        arr2[i] = arr2[i-1] + arr2[i-2];
      }
      i += 1;
   }
   console.log(arr2);

}

fibwhileloop(10);

// fibonacci(1);

// this problem was to get upto speed with array, loops etc by solving an easy problem.