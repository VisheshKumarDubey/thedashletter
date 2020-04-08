 //var axios = require('axios')
let data;
axios.get("https://dashletter-backend.herokuapp.com/login"

, {
   email: 'satya',
   password: 'satya'
}
)
   .then((response) => {
      
    console.log(response.data)
    
    console.log(response.status)
    comnsole.log("asdfghjklkjhgfdsasdfghjklkjhgfdsasdfghjkl")
    //console.log(response.headers['set-cookie'][0])
   }

   )
   .catch((err) => console.log("Something went wrong!", err));


// // Store data
// var someTempData = 'hello osama';
// sessionStorage.setItem('myTempDataKey', someTempData);

// Get data
//var tempData = sessionStorage.getItem('myTempDataKey');
//console.log(tempData)
// Remove data
//sessionStorage.removeItem('myTempDatakey');



//console.log(data)