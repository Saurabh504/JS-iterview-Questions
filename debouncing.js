let counter = 0;
getData = () => {
  console.log("fetching data", counter++);
}

function myDebounce(call, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, delay);
  }
}

const betterFunction = myDebounce(getData, 500);
