var axios = require('axios')

axios.get('http://dashletter-backend.herokuapp.com/blog/?category=fashion')
    .then((response) => {
        data = response.data;
        for(x in data)
        console.log(data[x].urlToImage)
    },
     (error) => {
    console.log(error);

});