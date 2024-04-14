import axios from 'axios';
import data from '../datas/data.json';

/**
 * Get user performances informations (local or api depending on the environment variable)
 *
 * @async
 * @param {String} userId
 * @returns {Object} performances informations
 */
async function userPerformance(userId) {
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
            "kind": allDataUser.performance.kind,
            "data": allDataUser.performance.data
            }
        };
        return new Promise(function(resolve, reject) {
            resolve(response);
            reject("error");
        });
    } else { 
        try {
            try {
                const response_1 = await axios.get("http://localhost:3000/user/" + userId + "/performance");
                return response_1.data;
            } catch (error) {
                // handle error
                console.log(error.request);
                return;
            }
        } finally { }
    };
}

export default userPerformance;