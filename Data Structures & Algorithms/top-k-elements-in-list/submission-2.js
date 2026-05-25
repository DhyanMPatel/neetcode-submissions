class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const prevMap = new Map()
        const res = [];

        for(let i = 0; i<nums.length; i++) {
            if(prevMap.has(nums[i])) {
                prevMap.set(nums[i], prevMap.get(nums[i]) + 1)
            } else {
                prevMap.set(nums[i], 1)
            }
        }

        return [...prevMap.entries()].sort((a, b) => b[1] - a[1]).slice(0,k).map(item => item[0])

        // prevMap.forEach((value, index) => {
        //     if(value >= k) {
        //         res.push(index)
        //     }
        // })

        // return res

    }
}
