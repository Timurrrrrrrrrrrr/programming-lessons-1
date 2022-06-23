const Path = require('path');
const express = require('express');
import urlExist from "url-exist"

const {
    resolve
} = require('path');
const app = express()
const port = 3000
const axios = require('axios').default;
const fs = require('fs');
for (let i = 100; i < 605; i++) {
    if (await urlExist('https://http.cat/' + i)==True){
    
    axios({
            method: 'get',
            url: 'https://http.cat/' + i + '.jpg',
            responseType: 'stream'
        }).then(function (response) {
            var x = Math.floor(i/100);
            response.data.pipe(fs.createWriteStream('c:\\Users\\DNS\\programming-lessons\\programming-lessons-1\\cats_file\\' + x +'\\'  + i + '.jpg'))
            
            i++;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

    
}
else{
    console.log("Ooouupssss.Something wrong")
}
}
app.get('/', (req, res) => {

    fs.readFile(i + '.jpg', function (error, data) {
        if (error) {
            console.error(error)
            console.log("ERRORrr")
            return
        }
        res.send();

    })
})