 /**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
     // 双指针，滑动窗口
    let l = 0;
    let r = 0;
    // 创建字典用来记录目标字串中字符的种类和个数
    const map = new Map()
    for (let c of t){
        map.set(c, map.get(c) ? map.get(c) + 1 : 1)
    }
    // 用来标识此时滑动窗口中是否包含李全部的目标字符串
    let mapType = map.size;
    // 记录实时的包含目标字符串的滑动窗口
    let res = '';
    // r 指针 循环遍历 模板字符串
    while(r < s.length){
        // 记录此时的字符
        const c = s[r];
        // 判断此时字符在字典中是否存在
        if(map.has(c)){
            // 如果存在更新字典，使此时的字符个数在字典中减一
            map.set(c,map.get(c)-1)
            // 如果字典中此时的字符个数减到0，则将mapType减一，标志此字符在滑动窗口中已完全包含
            if(map.get(c) === 0) mapType -=1;
        }
        // 当滑动窗口中，完全包含目标字符串，进行移动左指针，缩小滑动空间的长度
        while(mapType === 0){
            // 通过字符串substring方法将滑动空间中的字符串片段赋值给newRes
            const newRes = s.substring(l,r + 1);
            // 要注意刚开始，res字符串长度为0，所以当res长度为0或者newRes长度小于res长度时更新res
            if(!res || newRes.length < res.length) res = newRes;
            // 记录此时左指针所指字符
            const c2 = s[l];
            //如果在字典中存在，则说明如果移动左指针就会使滑动空间中的字符串片段，不完全包含目标字符串
            if(map.has(c2)){
                // 所以更新字典记录缺少的字符个数
                map.set(c2,map.get(c2) + 1)
                // 当出现新的字符缺少时，mapType加一 记录
                if(map.get(c2) === 1) mapType +=1;
            }
            // 移动左指针
            l += 1;
        }
        // 移动右指针
        r += 1;
    }
    return res
};