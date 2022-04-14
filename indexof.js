const fs = require('fs');
const Path = require('path');  
const axios = require('axios');
const http = require('http');



axios.get('https://jsonplaceholder.typicode.com/todos') 
.then (res=> {
const json= JSON.stringify(res.data);
fs.writeFile('code.json',json,(err)=>{
        if (err) return reject(err);
        console.log('wrote');
        let arr = JSON.parse(json)
        console.log(typeof(arr));
        let mas = Object.fromEntries(
           Object.entries(arr).map(([key,value])=>[key,value])
        );
        console.log(typeof(mas));
        console.log(mas.title);
        //var counter = 0;
        //for (let key of Object.values(arr)){
//console.log(key);
        //}
        //console.log(key + arr[key]);
        //for (k = 0; k < arr.length; ++k){
            //console.log(k + arr[k])
        //}

        //console.log(json.search('delectus'))
    })
})
.catch(e => console.error(e))