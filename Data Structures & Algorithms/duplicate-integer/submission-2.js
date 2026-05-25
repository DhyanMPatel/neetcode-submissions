class Solution {
    hasDuplicate(nums) {
        const res = false;
        const viewed = new Set();

        for(let num of nums) {
            if(viewed.has(num)){
                return true
            } else {
                viewed.add(num)
            }
        }
        return res;
    }
}
