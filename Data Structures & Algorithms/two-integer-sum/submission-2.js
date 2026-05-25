class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();

        for(let i = 0; i< nums.length; i++) {
            const diff = target - nums[i]
            if(prevMap.has(diff)) {
                return [prevMap.get(diff), i]
            }
            prevMap.set(nums[i], i)
        }
        return [];
    }

    /**
     * Her we can't use Set(). If want to use then conplexity will be O(n^2)
     * Here required index of arr element which is equal to target
     * Instead of that if we want "2 sum of element == target" is awailable then Set will become easy.
     */
}
