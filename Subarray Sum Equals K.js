var subarraySum = function(nums, k) {
    
    var count=0;
    var totalSum;
    for(var i=0;i<nums.length;i++){
        var sum=0;
        for(var j=i;j<nums.length;j++){
            sum+=nums[j];
            if(sum==k){
                count++;
            }
        }
        
    }
    return count;
   
};