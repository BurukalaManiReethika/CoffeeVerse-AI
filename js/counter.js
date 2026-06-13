const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target =
Number(counter.dataset.target);

const current =
Number(counter.innerText);

const increment =
target / 80;

if(current < target){

counter.innerText =
Math.ceil(current + increment);

setTimeout(
updateCounter,
30
);

}else{

counter.innerText =
target;

}

};

updateCounter();

});
