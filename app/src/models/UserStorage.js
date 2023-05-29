"use strict";

const { use } = require("../routes/home");

class UserStorage {
    static #users = {
        id : ["ma", "ri", "marimoa"],
        psword : ["1234", "1234", "123456"],
        name : ["마", "리", "마리모아"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;