let lights = document.getElementsByClassName('trafficLight');
let wrap = document.querySelector('.wrap');

let night = new CustomEvent('startNight');
let start = new CustomEvent('start');
let stop = new CustomEvent('stop');
const absolutelyNight = () => {
    for(let i = 0;i<lights.length;i++) {
        setInterval(()=> lights[i].classList.toggle('yellow'), 1000);
    }
}

const myEvents = () => {

    window.addEventListener('load', function(){
        absolutelyNight();
        wrap.dispatchEvent(night);
    })

    document.querySelector('body').addEventListener('click', e => {
        let target = e && e.target;
        if(target.classList.contains('trafficLight')||target.classList.contains('trafficLight__circle')) {
            target.dispatchEvent(start);
            target.addEventListener('start', () => {
                alert(hi);
            })
        }

    });


 


}

export default myEvents;