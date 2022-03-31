import {Blob} from 'buffer';
   const axios = require('axios');
   var FileDownload = require('js-file-download');

    axios.get('http://jsonplaceholder.typicode.com/todos')
       .then((response) => {
            FileDownload(response.data, 'filename.csv');
       });