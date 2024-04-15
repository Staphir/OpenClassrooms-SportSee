import axios from "axios";
import data from '../datas/data.json';

/**
 * Get sessions informations (local or api depending on the environment variable)
 *
 * @async
 * @param {String} userId
 * @returns {Object} sessions informations
 */
async function userAverageSessions(userId) {
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
            "userId": allDataUser.id,
            "sessions": allDataUser.averageSessions
            }
        };
        return new Promise(function(resolve, reject) {
            resolve(response);
            reject("error");
        });
    } else {
        try {
            const response = await axios.get("http://localhost:3000/user/" + userId + "/average-sessions");
            return response.data;
        } catch (error) {
            // handle error
            console.log(error.request);
            return;
        }
    };
}

export default userAverageSessions;