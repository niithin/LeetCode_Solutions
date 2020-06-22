var containsDuplicate = function(nums) {

    nums.sort((a,b)=>a-b);
    var bool=true;
    var bool1=false;
    var map=new Map();
    var count=0;
    
    if(nums[0]===undefined){
        return bool1;
    }
    
    
    for(i=0;i<nums.length;i++){
        map.has(nums[i]) ? map.set(nums[i],map.get(nums[i])+1) : map.set(nums[i],1);
    }
    
    for(var key of map.keys()){
        if(map.get(key)>1){
           return bool; 
        }else{
            count++;
        }
    }
    
    if(count>0){
        return bool1
    }
    
    
    
};