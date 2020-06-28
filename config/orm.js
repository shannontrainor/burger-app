//require connection
const connection = require("./connection.js")

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
    create: 
    },
    update
}