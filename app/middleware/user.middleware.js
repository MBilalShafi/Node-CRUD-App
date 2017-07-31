exports.validateUserRequest = function(req, res, next) {
    console.log(req.body);
    var user = req.body;
    var Exp = /^[A-Za-z]$/;
    var Age = /^[0-9]+$/;

    //var PhNo = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
    //var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // email pattern
    if (!user.name /*|| !user.name.match(Exp) */) {
        return res.json({ STATUS: false, MESSAGE: "Invalid Name" });
    }

    if (!user.age || !user.age.match(Age)) {
        return res.json({ STATUS: false, MESSAGE: "Invalid Age" });
    }

    if (!user.gender /*|| !user.gender.match(Exp)*/) {
        return res.json({ STATUS: false, MESSAGE: "Invalid Gender" });
    }

    if (!user.score || !user.score.match(Age)) {
        return res.json({ STATUS: false, MESSAGE: "Invalid Score" });
    }

    next();
}
