const registerService = require('../services/registerService');

const register = async function(req, res) {
    try{
        await registerService.register(req.body);
    }
    catch (e){
        console.log(e);
    }
}

module.exports.register = register;