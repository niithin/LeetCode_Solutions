var findShortestSubArray = function(nums) {
    
    var map=new Map();
    var degree=0;
    for(var i=0;i<nums.length;i++){
        map.has(nums[i]) ? map.set(nums[i],map.get(nums[i])+1) : map.set(nums[i],1);
    }
    
    for(var key of map.keys()){
        if(map.get(key)>degree){
            degree=map.get(key);
        }
        
    }
    
    var newLength=0;
    var res = nums.length;
    for(var i=0;i<nums.length;i++){
        var count=0;
        for(var j=i;j<nums.length;j++){
            if(nums[i]==nums[j]){
                count++;
            }
            if(count==degree){
                newLength=j-i+1;
                res = Math.min(res, newLength);
            }
        }
    }
    
    return res;
  
    
};