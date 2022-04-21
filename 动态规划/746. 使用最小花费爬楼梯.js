/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    // 动态规划
    let dp = [] , n = cost.length;
    // 思路：通过从下标0，下标1，进行向后遍历爬梯子，计算出爬上每个梯子所需要的最少费用，向楼梯顶层添加一个费用为0的层。当爬到此处时即为完成
    // 使用dp数组记录所需要爬到每层的最小费用,因为0层和1层,都为直接可以到达最少费用即为,此层所需要的费用,在登上每一层时都有两个选择,是从i-1层上来还是从i-2层上来,通过选择最小的前期费用后期费用才会少,所以应选择前两层中最小费用的层级跳跃.最后跳跃到附加层时的费用即为最小费用.
    cost.push(0);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for(let i = 2; i <=  n ; i++){
        dp[i] = Math.min(dp[i-1],dp[i-2]) + cost[i];
    }
    return dp[n];
};