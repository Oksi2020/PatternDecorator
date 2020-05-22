let peopleArray;
let url = 'http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2';
let body = document.querySelector('body');
let hiredPeoples = [];

const getPeoples = (url) => {
  fetch(url)
  .then( responce => {
    return responce.json();
  })
    .then ( data => {
      peopleArray = data;
      return data;
    })
      .then(()=> {
        for(let i = 0;i< peopleArray.length;i++) {
          body.innerHTML+=`
          <div><img src = ${peopleArray[i].picture}>
            <h1>${peopleArray[i].name}</h1>
            <p>Type: ${peopleArray[i].type}</p>
          </div>
          <input type="button" class='hire' value='Hire this person' data-toggle = '${peopleArray[i].name}'>
          <hr>`
        }
      })
}
getPeoples(url);

class Peoples {
  constructor({name, picture, type, gender, _id}){
    this.name = name;
    this.picture = picture;
    this.type = type;
    this.gender = gender;
    this._id = _id;
  }
}

class Backend extends Peoples{}

class Frontend extends Peoples{}

class Project extends Peoples{}

class Design extends Peoples{}

const HeadHunt = (obj) => {
    let personClass = null;

    if(obj.type === 'backend') {
      personClass = Backend;
    } else if(obj.type==='frontend') {
      personClass = Frontend;
    } else if(obj.type === 'project') {
      personClass = Project;
    } else if(obj.type === 'design') {
      personClass = Design;
    } else { return false; }
    return new personClass( obj );
}

const hirePeople = e => {
  let target = e && e.target;
  
  if(target.tagName!="INPUT") {
    return;
  }

  let personNeme = target.dataset.toggle;

  for(let i = 0;i<peopleArray.length;i++) {
    if(personNeme == peopleArray[i].name) {
      let newObj = HeadHunt(peopleArray[i]);
      hiredPeoples.push(newObj);
      console.log(hiredPeoples);
    }
  }

}


export default hirePeople;