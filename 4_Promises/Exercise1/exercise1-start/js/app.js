var MAINAPP = MAINAPP || {};

(function(nsp) {
    "use strict";

    let wordnikWord = "http://api.wordnik.com/v4/word.json/",
        apiKey = "?api_key=s6y8a8kihz6fvot3ai9eu0xajutwkmbttdax6cypgwsozo1nm",
        field = document.querySelector('#word'),
        btn = document.querySelector('#submitBtn'),
        results = document.querySelector('#results'),
        word,
        scrabbleVal = 0;

    const getValue = function(word) {
        //code this function so it will query the wordnik site. Send a word that is entered in the field. Retrieve the scrabble score from the site. Extract the score from the response and then display it in the results span tag.
        // https://api.wordnik.com/v4/word.json/apple/scrabbleScore?api_key=YOURAPIKEY
        console.log(word);
        const url = `${wordnikWord}${word}/scrabbleScore${apiKey}`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                results.innerText = res.value ? res.value : '';
            })
            .catch((err) => {
                console.log(err);
            })
    };

    btn.addEventListener('click', function(e) {
        word = field.value;
        getValue(word);
    });

    nsp.scrabbleVal = scrabbleVal;
})(MAINAPP);



