/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var rotateString = function(s, goal) {
    if(s === goal) return true;
    if(s.length !== goal.length) return false;
   
    for(let i = 0 ; i < goal.length; i++){
       
        s = s.slice(1) + s.slice(0,1);
        if(s === goal){
            return true;
        }
    }
    return false;
};