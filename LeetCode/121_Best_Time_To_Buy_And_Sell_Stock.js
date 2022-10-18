/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 반복문으로 풀어보았지만 역시나 timeout
  //     let max = 0;
  //     for(let buyIdx = 0; buyIdx < prices.length - 1; buyIdx++){
  //         for(let sellIdx = buyIdx + 1; sellIdx < prices.length; sellIdx++){
  //             let diff = prices[sellIdx] - prices[buyIdx];
  //             if(diff >= 0) max = Math.max(max, diff);
  //         }
  //     }
  //     return max;

  var min = Number.MAX_SAFE_INTEGER;
  var max = 0;
  for (var i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // prices[i] : i번째날의 주식 가격
  // 주식을 사고 팔 날짜를 골라서 이익을 최대화
  // 최대 이익을 리턴하라

  let profit = 0;
  let minVal = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (minVal > prices[i]) {
      minVal = prices[i];
    } else if (prices[i] - minVal > profit) {
      profit = prices[i] - minVal;
    }
  }

  return profit;
};
