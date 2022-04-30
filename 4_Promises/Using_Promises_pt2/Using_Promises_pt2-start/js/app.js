"use strict";

let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=2efe06dd56a60633b30010e4d970da03b55279db9896d7127",
    wordObj;

fetch(wordnikWords + "randomWord" + apiKey)
    .then(function (response) {
        wordObj = response;
        return response.json();
    })
    .then(function (data) {
        console.log(data.word);
        return fetch(wordnikWord + data.word + "/definitions" + apiKey);
    })
    .then(function (def) {
        return def.json();
    })
    .then(function (def) {
        console.log(def[0]);
    })
    .catch(function (err) {
        console.log(err);
    });
