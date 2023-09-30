const   {
    getDioses,
    
} = require('../db/dummy.js');

async function getAllDioses() {
    return await getDioses();
}


module.exports ={
    getAllDioses
}