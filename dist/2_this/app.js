"use strict";
// this - ссылка на объект в котором он находится
const user = {
    name: 'Nik',
    age: 23,
    getName() {
        return this.name;
    },
    getAllInfo: function () {
        console.log(`Имя: ${this.name}, возраст: ${this.age}`);
    }
};
console.log(user.getName());
user.getAllInfo();
