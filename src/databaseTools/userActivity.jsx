import axios from 'axios';
import data from '../datas/data.json';


/**
 * Get user activities informations (local or api depending on the environment variable)
 *
 * @async
 * @param {String} userId
 * @returns {Object} activities informations
 */
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
            const response = await axios.get("http://localhost:3000/user/" + userId + "/activity");
            return response.data;
        } catch (error) {
            return error;
        }
    };
}

export default userActivity