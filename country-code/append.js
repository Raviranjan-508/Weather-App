document.addEventListener('DOMContentLoaded', async () => {

    const selectDrop = document.querySelector('#countries');
    // const selectDrop = document.getElementById('countries');
  
  
    // fetch('https://restcountries.com/v3.1/all').then(res => {
    //   return res.json();
    // }).then(data => {
    //   let output = "";
    //   console.log(data);
    //   data.forEach(country => {
    //     output += `
        
    //     <option value="${country.name}">${country.name}</option>`;
    //   })
  
    //   selectDrop.innerHTML = output;
    // }).catch(err => {
    //   console.log(err);
    // })

    try {
        let res = await fetch(`https://restcountries.com/v3.1/all`);
        let data = await res.json();
        console.log(data);
        appendData(data[0]);
    } catch (error) {
        console.log("error");
    }
  
  
  });
  let country_code = document.querySelector("#value");
  const appendData = (data) =>{
    let div = document.createElement("div");
    div.append
}