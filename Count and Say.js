var countAndSay = function(n) {
    
     switch(n){
         case 1:
             return "1";
         case 2:
             return "11";
         case 3:
             return "21";
         case 4:
             return "1211";
         case 5:
             return "111221";
     }
     var array=[];
     var array1=countAndSay(n-1).split("");
     var l=array1[0];
     var count=1;
    
     for (i=1;i<array1.length;i++){
         if(array1[i]===l){
             count++;
         }else{
             array.push(count,l);
             l=array1[i];
             count=1;
         }
     }
     
     array.push(count,l);
     return array.join("");
    
};