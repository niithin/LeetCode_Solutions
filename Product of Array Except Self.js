var productExceptSelf = function(nums) {
    
   var array1=[nums.length];
   var array2=[nums.length];
   var array3=[nums.length]; 
   
   array1[0]=1;
   array2[nums.length-1]=1;
    
   for(var i=1;i<nums.length;i++){
       array1[i]=array1[i-1]*nums[i-1];
   }
   
   for(var j=nums.length-2;j>=0;j--){
       array2[j]=array2[j+1]*nums[j+1];
   }
    
   for(var k=0;k<nums.length;k++){
       array3[k]=array1[k]*array2[k];
   } 
    
   return array3; 
   
};