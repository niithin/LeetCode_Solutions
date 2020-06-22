var findUnsortedSubarray = function(nums) {
   
  
   var array=nums.slice(0).sort((a, b) => a - b);
   var array1=[];
   var firstIndex;
   var lastIndex; 
   for(var k=0;k<nums.length;k++){
        if(array[k]!=nums[k]){
            firstIndex=k;
            break;
        }
    }
    
    for(var l=nums.length;l>0;l--){
        if(array[l]!=nums[l]){
            lastIndex=l;
            break;
        }
    }
    
    for(var m=firstIndex;m<=lastIndex;m++){
        array1.push(nums[m]);
    }
    
    return array1.length;
};