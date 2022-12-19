function time() {
  for (let i = 0; i <= 5; i++) {
    easyboy(i);
  }
}

function easyboy(i){
  setTimeout(() =>{
    console.log(i)
  },2000)
}

time()


function time2(){var array = [1, 2, 3, 4, 5]
  for(var i = 0; i < array.length; i++) {
    delay(i)
  }
  function delay(i) {
    setTimeout(() => {
      console.log(array[i])
    }, 1000);
  }
}

  time2()

