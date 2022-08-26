/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var buddyStrings = function(s, goal) {
    if(s.length !== goal.length || s.length == 0 || goal.length == 0) return false;
    s = s.split('')
    goal = goal.split('')

    let len = s.length;
    let arr = []
    for(let i = 0 ; i < len; i++){
        if(s[i] != goal[i]){
            arr.push(i)
        }
    }
    if(arr.length == 0){
        let set  = new Set()
        for(let i = 0 ; i < len; i++){
            if(set.has(s[i])){
                return true;
            }else{
                set.add(s[i])
            }
        }
        return false
    }
    if(arr.length > 2) return false;
    [s[arr[0]],s[arr[1]]] = [s[arr[1]],s[arr[0]]]
    s = s.join('')
    goal = goal.join('')
    if(s == goal) return true;
    return false
};