import axios from 'axios';

function userInformations(userId) {
    if(process.env.REACT_APP_DATA_TARGET === "mock") {
        console.log(userId);
    } else {
        return axios.get("http://localhost:3000/user/"+userId)
        .then(function (response) {
            // handle success
            // console.log(response.data.data.userInfos.firstName);
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

export default userInformations;