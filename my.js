function textObj(){
    const url = "https://script.google.com/macros/s/AKfycbxTNUzhvyxenkuSWQvEchbdTlGk76NgiFD2OGMfqogYqYaeV5U/exec";
fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent =  d[0].status;
    });
}

document.getElementById("btn").addEventListener("click",textObj);

function addObj(){
    const url = "https://script.google.com/macros/s/AKfycbxTNUzhvyxenkuSWQvEchbdTlGk76NgiFD2OGMfqogYqYaeV5U/exec";
fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({"first":"Ili","last":"Safuraa","phone":0192466751}) // body data type must match "Content-Type" header
  });
}

document.getElementById("btn2").addEventListener("click",addObj);
