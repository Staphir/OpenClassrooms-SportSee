import axios from 'axios';

function userActivity(userId){
    if(process.env.REACT_APP_DATA_TARGET === "mock") {
        console.log(userId);
    } else {
        return axios.get("http://localhost:3000/user/"+userId+"/activity")
        .then(function (response) {
            // handle success
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error.request);
            return;
        })
        .finally(function () {
            // always executed
        });
    };
}

export default userActivity