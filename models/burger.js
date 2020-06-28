//require orm file
const orm = require("../config/orm.js");

const burger = {        //define burger.all/create/update
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    create: (name, cb) => {
        orm.create("burgers", ["name", "devoured"],
        [name, false], cb);
    },
    update: (id, cb) => {
        let condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};
//export
module.exports = burger