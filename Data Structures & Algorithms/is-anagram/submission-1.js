class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sMap = new Map()
        const tMap = new Map()
        let ans = true;

        /** Sudo Logic
         * If s.length == t.length then enter to deep other wise return false
         * Loop from 0 to s.length/t.length
         *      if s[i] is available in sMap then increase their value by 1 Same for t[i] in tMap.
         *      Other wise set in relative map
         * Loop to check same char & their frequency in both Map.
         *      If any Char is not available in other map then return false
         *          If any char frequency is not match with other map then return false
         * return true 
         */

        if(s.length == t.length) {
            for(let i = 0; i <s.length; i++) {
                if(sMap.has(s[i])) {
                    sMap.set(s[i],sMap.get(s[i]) + 1)
                } else {
                    sMap.set(s[i], 1)
                }
                if(tMap.has(t[i])) {
                    tMap.set(t[i],tMap.get(t[i]) + 1)
                } else {
                    tMap.set(t[i], 1)
                }
            }
            for(let [key, value] of sMap) {
                if(tMap.has(key)) {
                    if(sMap.get(key) != tMap.get(key)) {
                        ans = false
                    }
                } else {
                    ans = false
                }
            }
            return ans;
        } else {
            return false;
        }
    }
}
