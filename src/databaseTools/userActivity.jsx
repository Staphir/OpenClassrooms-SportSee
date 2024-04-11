import axios from 'axios';
import data from '../datas/data.json';

async function userActivity(userId){
    let allDataUser = {};
    if(process.env.REACT_APP_DATA_TARGET === "mock") {
        allDataUser = data.users.find(t => t.id === userId);
        const response = {"data":
            {
            "userId": allDataUser.id,
            "sessions": allDataUser.activitiesSessions
            }
        };
        return new Promise(function(resolve, reject) {
            resolve(response);
            reject("error");
        });
    } else { 
        try {
            try {
                const response_1 = await axios.get("http://localhost:3000/user/" + userId + "/activity");
                return response_1.data;
            } catch (error) {
                // handle error
                console.log(error.request);
                return;
            }
        } finally { }
    };
}

export default userActivity