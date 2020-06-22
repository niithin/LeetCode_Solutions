var isValidSudoku = function(board) {
  
    
  var isValidRow = function(){  
  var bool;
  for (var i=0;i<board.length;i++){
       var set=new Set();
      for(var j=0;j<board[i].length;j++){
           var num=board[i][j];
           if(num=="."){
               continue;
           }
          
           set.has(num) ? bool=false : set.add(num)
        }
  }
  if(bool!=false){
      return true;
  }else{
      bool;
  }
}
    
    var isValidColumn=function(){
    var bool;
    for(var j=0;j<board.length;j++){
        var set=new Set();
        for(var i=0;i<board.length;i++){
           var num=board[i][j];
            if(num=="."){
                continue;
            }
            
            set.has(num)? bool=false : set.add(num);
        }
    }
    if(bool!=false){
        return true;
    }else{
        bool;
    }
  }
    
    
    var isValidBox = function(){
    var bool;
    for(var i=0;i<board.length;i+=3){
        for(var j=0;j<board[0].length;j+=3){
            var set=new Set();
            for(var k = 0; k < 3; k++) {
                for(var n = 0; n < 3; n++) {
                    var num=board[i+k][j+n];
                    if(num=="."){
                        continue;
                    }
                    set.has(num)? bool=false : set.add(num);
                }
            }
        }
    }
    
    if(bool!=false){
        return true;
    }else{
        bool;
    }
  }   
    
   if(isValidRow(board)==true && isValidColumn(board)==true && isValidBox(board)==true){
       return true;
   }else{
       return false;
   }
      
};