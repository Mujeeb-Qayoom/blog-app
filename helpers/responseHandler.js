module.exports = {

    successRes :(req, res,code,data ) => {
    res.json({
        code,
        data,
        success: true,
    })},

    errorRes : async(req,res,code) =>{
        res.status(code).json({
            code,
            success : false
        })

    }
}