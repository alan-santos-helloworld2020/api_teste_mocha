var validation = (req, res, next) => {
    var { username, password } = req.body
    if (username === "" || username === null || username === undefined || username.length <= 1) {
        res.json({ msg: "O campo username é obrigatório" })
    } else if (password === "" || password === null || password === undefined || password.length <= 1) {
        res.json({ msg: "O campo password é obrigatório" })
    }
    else {
        next()
    }
}

module.exports = validation