//require connection
const connection = require("./connection.js")

//create array of ? and turn to string, help write to query
function printQuestionMarks(num) {
    let arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

//turns obj key to mysqlsyntax
function objToSql(ob) {
    let arr = [];
    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

//object to access all, create, and update burgers
const orm = {
    all: (tableInput, cb) => {
        let queryString = "SELECT * FROM" + tableInput;
        connection.query(queryString, (err,result) => {
            if (err) {
                throw error;
            }
            cb(result);
        });
    },
    create: (table, cols, vals, cb) => {            //taken from activity 17
        let queryString = "INSERT INTO" + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err,result) => {
            if (err) {
                throw error;
            }
            cb(result);
        });
    },
    update
}