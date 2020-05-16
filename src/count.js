function makeCounter() {
    if(currentCount > 5){currentCount = 1}
    var currentCount = 1;
    
    return function() {
      return currentCount++;
    };
  }
  
  var counter = makeCounter(); // [[Scope]] -> {currentCount: 1}
  
