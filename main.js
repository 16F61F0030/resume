function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
    })
  })
}
var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
})

var child1=document.querySelector("#child1");
function career(car){
  var heading=document.createElement("h2");
  heading.textContent="career objective";
  child1.appendChild(heading);
var p=document.createElement("p");
p.textContent=car.info;
child1.appendChild(p);

}
