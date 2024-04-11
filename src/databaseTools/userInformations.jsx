import axios from 'axios';
import data from '../datas/data.json';

async function userInformations(userId) {
        let allDataUser = {};
        if(process.env.REACT_APP_DATA_TARGET === "mock") {
            for(let i=0; i<data.users.length; i++) {
                if(data.users[i].id.toString() === userId) {
                    allDataUser = data.users[i];
                    break;
                }
            }
            const response = {"data":
                {
                "id": allDataUser.id,
                "userInfos": allDataUser.userInfos,
                "todayScore": allDataUser.todayScore,
                "keyData": allDataUser.keyData
                }
            };
    return new Promise(function(resolve, reject) {
        resolve(response);
        reject("error");
    });
    } else {
        try {
                try {
                    const response_1 = await axios.get("http://localhost:3000/user/" + userId);
                    return response_1.data;
                } catch (error) {
                    // handle error
                    console.log(error.request);
                    return;
                }
            } finally { }
    };
}

export default userInformations;