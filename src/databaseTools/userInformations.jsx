import axios from 'axios';
import data from '../datas/data.json';

/**
 * Get user informations (local or api depending on the environment variable)
 *
 * @async
 * @param {String} userId
 * @returns {Object} user informations
 */
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
            const response = await axios.get("http://localhost:3000/user/" + userId);
            return response.data;
        } catch (error) {
            return error;
        }
    };
}

export default userInformations;