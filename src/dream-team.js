const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  let arr = [];
  let k =0;
        if( members == undefined) return false;

    else{ for(let i=0; i< members.length; i++){
  
   
        if( typeof members[i] == 'string'){
          if(members[i][k] == " "){
            let x =0;
            do{
              k++
              x=k;
            }
            while(members[i][k] == ' ');
            arr.push(members[i][x]);
            if(members[i][k] != ' ') k=0;
            
          }
          arr.push(members[i][k]);
        }
        else continue;
    }
  }
  arr = arr.sort();
 let res = arr.join('');
 res = res.toUpperCase();
 res = res.replace(/\s/g, '');
 res = res.split('').sort().join('');
  return res;

};
