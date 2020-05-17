
//circuit count
function makeCounter() {
    let currentCount = 1;
    return function() {
      return currentCount++;
      if(currentCount >= 5){console.log('>5')}
    };
  }

  let i = 0;
  function minusCounter(sign){
    i--;
    if(i < 0){
      i = 15;
    }
    console.log(i)
  }
  function plusCounter(sign){
    i++;
    if(i > 15){
      i = 0;
    }
    console.log(i)
  }


  let counter = makeCounter(
  function testFunction(){
      let i = counter();
      console.log(i)
  })

