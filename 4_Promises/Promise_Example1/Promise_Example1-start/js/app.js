"use strict";

fetch("https://swapi.dev/api/" + "people/10/")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        return fetch(data.homeworld);
    })
    .then((hwdata) => hwdata.json())
    .then(hwobj => console.log(hwobj))
    .catch((err) => console.log(err));