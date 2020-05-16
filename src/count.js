let  test = document.querySelector('#count');


function makeCounter() {
    
    let currentCount = 1;
   
    return function() {
      return currentCount++;
      if(currentCount >= 5){console.log('>5')}
    };
  }

  let counter = makeCounter(); 
  console.log(counter());  console.log(counter());  console.log(counter());  console.log(counter());  console.log(counter());  console.log(counter());console.log(counter());
  function testFunction(){
      let i = counter();
      console.log(i)
  }

  test.addEventListener('click',testFunction);