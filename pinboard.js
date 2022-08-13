var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/shops');
xhr.responseType = 'json';

var pinbaord = "{}"

xhr.onload = function () {
    pinbaord = xhr.response;
    createTable(pinbaord);
};

xhr.send();

function createTable(pinbaord) {

    var body = document.getElementsByTagName("body")[0];

    // create elements <table> and a <tbody>
    var tbl = document.getElementById("pinboardTable");


    for (var i = 0; i < pinbaord.length; i++) {
        console.log(pinbaord[i]);

        const tr = tbl.insertRow();
        const td = tr.insertCell();

    }

}
