const fs = require('fs');
const axios = require('axios');
const Path = require('path');
const express = require('express');


const {
    resolve
} = require('path');
const app = express()
const port = 3000


axios.get("https://jsonplaceholder.typicode.com/todos").then(
        response => {
            const a = response.data;
            //console.log(response);
            let json = JSON.stringify(a);
            console.log(typeof json);
            //console.log(json);
            fs.writeFile('code.json', json, function (err) {
                if (err) return console.log(err);
                console.log('json file has created');

            });

        }
    )
    .catch(function (error) {
        console.log(error);
    })

    
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);

    fs.readFile('code.json', 'utf8', function (error, data) {
       
        if (error) throw error;
    console.log(data);

    let todos = JSON.parse(data);
    //console.log(todos);
    console.log("success");
    console.log(todos.filter(el => el.id == id));

    res.send(todos.filter(el => el.id == id));
    })
       

    
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})