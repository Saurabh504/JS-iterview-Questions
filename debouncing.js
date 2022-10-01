let counter = 0;
function getData() {
  console.log("fetching data", counter++);
}
// debouncing is used to optimize the performce of the search bar
function myDebounce(call, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, delay);
  }
}

const betterFunction = myDebounce(getData, 400);
