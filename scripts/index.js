 //var axios = require('axios')
let data;
axios.post("http://dashletter-backend.herokuapp.com/login"

, {
   email: 'satya',
   password: 'satya'
}
)
   .then((response) => {
      
    console.log(response)
    
    console.log(response.status)
    console.log("asdfghjklkjhgfdsasdfghjklkjhgfdsasdfghjkl")
   //document.write(JSON.stringify(response))
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