//best-time-to-buy-and-sell-stock

//JavsScript code 
function StockPrices(prices){
let max_profit = 0;
  let minimum_Price = prices[0];
  for(let i = 1; i <prices.length;i++){
    if(prices[i]-minimum_Price  > max_profit){
      max_profit = prices[i] - minimum_Price;
      
    }
    if(prices[i] < minimum_Price){
      minimum_Price = prices[i];
    }
  }

  return max_profit
}

let res = StockPrices([3,21,123,1,2,123,1,21])
console.log(res)


//Python code 

// #Best Time to sell Stock

// def BestTime(prices):
//   min  = prices[0]
//   max = 0;
//   for i in range(1,len(prices)):
//     if(prices[i]-min > max):
//       max = prices[i]-min;
//     if(prices[i] < min):
//       min = prices[i];
//   return max
  
// prices = [1,1,4,3]
// result = BestTime(prices)
// print(result)






