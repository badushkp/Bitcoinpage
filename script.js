var btc = document.getElementById('bitcoin');
var eth = document.getElementById('ethereum');
var doge = document.getElementById('dogecoin');

var settings ={
    "async":true,
    "scrossDomain":true,
    "url":"your URL here",
    "method":"GET",
    "headers":{}
}

// this prints the live price
// ajax sens the request to the url
$.ajax(settings).done(function (response) {

    // update the HTML elements with the current price
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
});