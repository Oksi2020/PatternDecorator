// import hirePeople from '../classWork/task1';
// let body = document.querySelector('body');
// body.addEventListener('click', hirePeople);
// console.log(peopleArray);
//----------------------------------task2----------------------------------------------
document.addEventListener('DOMContentLoaded', ()=> {
    let lights = document.querySelectorAll('.trafficLight');
    let wrap = document.querySelector('.wrap');
    let butStartNight = document.querySelector('#Do');
    let check = true;

    let night = new CustomEvent('night');
    let start = new CustomEvent('start');
    let stop = new CustomEvent('stop');
    
    
    const absolutelyNight = () => {
        for(let i = 0;i<lights.length;i++) {
            if(lights[i].classList.contains('red')){lights[i].classList.remove('red')}
            if(lights[i].classList.contains('green')){lights[i].classList.remove('green')}
            if(!lights[i].classList.contains('interval')){lights[i].classList.add('interval')}
            if(check) {
                if(lights[i].classList.contains('interval')){
                setInterval(()=> lights[i].classList.toggle('yellow'), 1000);
                }
            }
        }
        check = false;
    }
    
    window.addEventListener('load', function(){
        absolutelyNight();
    })

    butStartNight.addEventListener('click', () => {
        absolutelyNight();
    })
    
    lights.forEach( item => {
        item.addEventListener('click', () => {
            console.log('click');
            if(item.classList.contains('interval')) {
                item.dispatchEvent(stop);
            } else if(item.classList.contains('red')) {
                item.dispatchEvent(start);
            } else if(item.classList.contains('green')) {
                item.dispatchEvent(night);
            }
        })
        item.addEventListener('start', () => {
            item.classList.add('green');
            item.classList.remove('red');
        })
        item.addEventListener('stop', () => {
            item.classList.add('red');
            item.classList.remove('interval');
        })
        item.addEventListener('night', () => {
            item.classList.add('interval');
            item.classList.remove('green');
        })
    })
    
})