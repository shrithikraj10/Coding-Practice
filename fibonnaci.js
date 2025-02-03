
 
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


fibonacci(10);