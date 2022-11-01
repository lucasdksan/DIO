const fs = require("fs");
const { join } = require("path");
const filePath = join(__dirname, "users.json");

const getUsers = ()=>{
    const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : [];

    try {
        return JSON.parse(data);
    } catch(err){
        return [];
    }
}

const saveUser = (users) =>  {
    console.log(users)
    fs.writeFileSync(filePath, JSON.stringify(users, null, "\t"))
};

const userRoute = (app)=>{
    app.route("/users/:id?")
        .get((req, res)=>{
            const users = getUsers();

            return res.send({ users });
        })
        .post((req, res) => {
            const users = getUsers();

            console.log(req.body)

            users.push(req.body);
            saveUser(users);

            return res.send("Ok")
        })
        .put((req, res) => {
            const users = getUsers();

            saveUser(users.map(user => {
                if(user.id === req.params.id){
                    return {
                        ...user,
                        ...req.body
                    } 
                }

                return user;
            }));

            return res.send("ok DJROFGERINHO")
        })
        .delete((req, res) => {
            const users = getUsers();

            saveUser(users.filter(user => user.id !== req.params.id));

            return res.send("E chega de mimimi, com a manjuba tinindunannn");
        });
}

module.exports = userRoute;