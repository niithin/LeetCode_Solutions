var isValid = function(s) {

  var stack=[];
  var map={
      '(':')',
      '[':']',
      '{':'}'
  }
  
  for(var i=0;i<s.length;i++){
      if(s[i]==='(' || s[i]==='[' || s[i]==='{'){
          stack.push(s[i]);
      }else{
          var next=stack.pop();
          if(s[i]!==map[next]){
              return false;
          }
      }
  }  
      if(stack.length!==0){
          return false
      }
      return true;  
  

    
};