const registerService = require('../services/registerService');

const register = async function(req, res) {
    try{
        const result = await registerService.register(req.body);
        return res.status(200).json({ "status": 200, "data": result });
    }
    catch (e){
        return res.status(400).json({ "status": 400, "data": e.message });
        console.log(e);
    }
}

const multiRegister = async function(req, res) {
    try{
        const result = await registerService.multiRegister(req.body);
        return res.status(200).json({ "status": 200, "data": result });
    }
    catch (e){
        return res.status(400).json({ "status": 400, "data": e.message });
        console.log(e);
    }
}

module.exports.register = register;
module.exports.multiRegister = multiRegister;