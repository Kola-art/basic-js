const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  if (Array.isArray(arr)){
    let res =[];
    for(let i=0; i <arr.length; i++){
        if(arr[i] == '--discard-next'){
          if( i !== arr.length - 1) i++;
          else continue;
        }
        else if (arr[i] == '--discard-prev'){
           if (arr[i-2] == "--discard-next") continue;   
            else if ( i !==0) res.pop();
            else continue;
        }
        else if (arr[i] == '--double-next'){
          if( i !== arr.length -1){
            res.push(arr[i+1]);
            res.push(arr[i+1]);
            i++;           
          }
          else continue;
        }
        else if (arr[i] == '--double-prev'){
          if( arr[i-2] == "--discard-next") continue;
          else if (i !== 0){
            res.push(res[res.length-1]);
          }
          else continue;
        }
        
      else res.push(arr[i]);
    } 
    return res;
  } 

  else  throw new Error('Error');
};