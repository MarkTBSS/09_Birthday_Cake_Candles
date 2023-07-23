function birthdayCakeCandles(candles) {
    var n = candles.length
    candles.sort((a, b) => b - a);
    for (var i = 0; i < n; i++) { 
        if (candles[0] === candles[i+1]) { 
            highestCounter = highestCounter + 1
        } else {
            break;
        }
    }
    return highestCounter
}

candles = [3, 2, 1, 3]
console.log(birthdayCakeCandles(candles))

/* var leftSortedCanddle = candlesCake[0] 
    console.log(candles) 
    var highestCounter = 0 */

function birthdayCakeCandlesB(candles) {
    candles.sort((a, b) => b - a); 
    var highestHeight = candles[0];
    var highestCounter = 0; 
    
    candles.forEach((candle) => {
        if (highestHeight === candle) {
        highestCounter++;
        }
    });
    
    return highestCounter;
}

candles = [3, 2, 1, 3]
console.log(birthdayCakeCandlesB(candles))