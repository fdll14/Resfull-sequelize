const jwt = require("jsonwebtoken");
module.exports = {
    checklogin: (req, res, next) => {
        const bearer = req.header("x-access-token");
        if (!bearer) {
            res.status(401).send({
                msg: "Cant Access",
                status: 401,
                error: "You Must Be Logged In",
            })
        } else {
            const token = bearer.split(" ")[1]
            try {
                const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
                req.decodedToken = decodedToken;
                next();
            } catch (error) {
                res.status(401).send({
                    msg: "Cant Access",
                    status: 401,
                    error: "Invalid Token",
                });
            }

        }
    }
}