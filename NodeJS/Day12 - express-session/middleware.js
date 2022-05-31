const checkAuth = (req, res, next) => {
    console.log(req.session);
    if(req.session.USERID && req.session.isLogged === true){
        next();
    }
   else {
       res.send("Not Authenticated");
   }
}
module.exports = {
    checkAuth
}