var groupAnagrams = function(strs) {
   
  var obj={};
  for (var i=0;i<strs.length;i++){
       var ordVal=Array.from(strs[i]).sort().join('');
       
        if(obj[ordVal]){
            obj[ordVal].push(strs[i]);
        }else{
            obj[ordVal]=[strs[i]];
        }
  
  }
   return Object.values(obj); 
};