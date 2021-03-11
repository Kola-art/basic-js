const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let addition ='';
     if(str){
            str = String(str);
     }  
    if(options.hasOwnProperty('addition')){
        
         
              addition = options.addition;
          
    }    
  if(addition != null ){
  addition = String(addition);}
 
  let res ='';
    //  addition = options;
      let resAdd = '';
      let additionDivider ="|";
      let additionRepeat = 1;
      let divider = '+';
    
      if(options.additionSeparator){
        additionDivider = options.additionSeparator;
      }
      if(options.additionRepeatTimes){
        additionRepeat = options.additionRepeatTimes;
        let j =1;
        while( j <= additionRepeat){
          resAdd += addition+additionDivider;
          j++;
        }
      resAdd = resAdd.split('');
      
      resAdd.splice(resAdd.length - additionDivider.length, additionDivider.length);
      resAdd = resAdd.join('');
      }
      else resAdd = addition;
      
    
        if(options.separator){
          divider = options.separator;
        }
       
        if(options.repeatTimes){
          let times = options.repeatTimes;
          
          let i = 1;
          while (i <= times){
             res += str+resAdd+divider;
             i++;
          }
          res = res.split('');
          res.splice(res.length - divider.length, divider.length);
          res = res.join('');
        }
        else res = str + resAdd;
        
  

        return res;


};
  