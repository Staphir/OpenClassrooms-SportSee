import axios from "axios";

function userAverageSessions(userId) {
    if(process.env.REACT_APP_DATA_TARGET === "mock") {
        console.log(userId);
    } else {
        axios.get("http://localhost:3000/user/"+userId+"/average-sessions")
        .then(function (response) {
            // handle success
            return response;
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

export default userAverageSessions;