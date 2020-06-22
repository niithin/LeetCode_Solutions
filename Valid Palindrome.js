var isPalindrome = function(s) {
   var bool=true;
   var bool1=false; 
   
   var a=s.replace(/[^0-9a-z]/gi, '').toLowerCase();

   var array=Array.from(a);
   
   var b=array.reverse().join('');
   
   
  if(a===b){
      return bool;
   }else{
      return bool1;
   }
};