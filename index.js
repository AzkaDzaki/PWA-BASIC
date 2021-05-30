
//FUNCTION FETCHMAP API
function fetchMap(jsonURL) {

    return fetch(jsonURL).then(res => res.json());
  
  }

  async function loadJSON() {  
    let lala = await fetchMap('https://admin.alianbutterflypark.com/api/architectures_entity');
    lala.data.forEach(element => {
      console.log(element);
        const ss = document.createElement('p');
        ss.innerHTML = element.architecture_id + element.created_at;
        console.log(ss);
        document.getElementById("TESTJSON").appendChild(ss);
    });  
    let x = await fetchMap('https://admin.alianbutterflypark.com/api/architectures');
    x.data.forEach(element => {
        const test = document.createElement('p');
        test.innerHTML = element.id + element.geometry;
        console.log(test);
        document.getElementById("TESTJSON").appendChild(test);
    });      
}

loadJSON();
