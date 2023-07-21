/*COUNTER */
let nCount = function(selector){
  
}





















const counters = document.querySelectorAll('.rect');
const speed = 200;

counters.forEach(counter =>{
const updateCount =() =>{
    const target = +counter.getAttribute('h1');
    const count = +counter.innerText;

    const inc = target / speed;

    if(count < target){
  counter.innerText = count + inc;
  setTimeout(updateCount, 1)
    }
    else{
        count.innerText = target;
    }
}
updateCount();
});



