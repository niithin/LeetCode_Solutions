var majorityElement = function(nums) {
    
    var len = Math.round(nums.length / 2);
    var map = new Map();
    for(var i=0;i<nums.length;i++){
        map.has(nums[i]) ? map.set(nums[i],map.get(nums[i])+1) :map.set(nums[i],1);
    }
    
    
    for(var key of map.keys()){
        if(map.get(key) >= len){
            return key;
        }
        
    }
    
       
};