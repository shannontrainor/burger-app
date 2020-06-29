//require orm file
const orm = require("../config/orm.js");

const burger = {        //define burger.all/create/update
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (name, cb) => {
        orm.insertOne("burgers", ["name", "devoured"],
        [name, false], cb);
    },
    updateOne: (id, cb) => {
        let condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, cb);
    }
};
//export
module.exports = burger