const URL = 'https://dashletter-backend.herokuapp.com/'
const URL_CATEG = 'https://dashletter-backend.herokuapp.com/blog/?category='





const signup = (email, pasword) => {
    let result;
    const credentials = {
        email: email,
        password: pasword
    }
    axios.post(URL + "signup", credentials).then((response) => {

        console.log(response);
        console.log(response.status);
        result = response.status;
    }

    )
        .catch((err) => console.log("Something went wrong!", err));


    return result;
}

(async function(){
 const login = (email, pasword) => {
    let result;
    const credentials = {
        email: email,
        password: pasword
    }
     axios.post(URL + "login", credentials).then((response) => {

        console.log(response);
        console.log(response.status);
        result = response.status;
        return response.data;
    }

    )
        .catch((err) => console.log("Something went wrong!", err));


  

}
})()

const logout = () => {
    let result;
    axios.get(URL + "logout", credentials).then((response) => {

        console.log(response);
        console.log(response.status);
        result = response.status;
    })
        .catch((err) => console.log("Something went wrong!", err));


    return result;



}

const sessionStorage = (key, value, opt) => {
    // Store data
    switch (opt) {
        case 0:
            sessionStorage.setItem(key, value);
            break;
        case 1:
            sessionStorage.getItem(key);
            break;
        case 2:
            sessionStorage.removeItem(key);
            break;
        default:
            console.log('0 -> Set Data; 1 -> Get Data; 2 -> Remove Data')
    }
}

