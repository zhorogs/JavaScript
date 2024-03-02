"use strict";

Promise.all([
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'),
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json'),
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aud.json'),
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad.json'),
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/chf.json'),
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nzd.json'),
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/bgn.json'),
    // get all currencies;
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'),
]).then(function (responses) {
    // get a JSON object from each of the responses;
    return Promise.all(responses.map(function (response) {
        return response.json();
    }));
}).then(function (data) {
    // splice the data so we can get data for all the needed currencies;
    const a = data;
    const USD = a.splice(0, 1);
    const EUR = a.splice(0, 1);
    const AUD = a.splice(0, 1);
    const CAD = a.splice(0, 1);
    const CHF = a.splice(0, 1);
    const NZD = a.splice(0, 1);
    const BGN = a.splice(0, 1);
    // checking if we have values from the obj/array;
    // console.log(AUD);

    // define a function that reset the displayed values if currencies are changed;
    const resetValues = function () {
        document.querySelector(".Show-Group-1").innerHTML = "";
        document.querySelector(".Show-Group-2").innerHTML = "";
        document.querySelector(".Show-Group-3").innerHTML = "";
    }

    // define a function to count how many paragraphs we have so we could get a number in the counter;
    const getCount = function () {
        // group 1;
        // select showing group;
        const parrentForGroup1 = document.querySelector(".Show-Group-1");
        // get length where length is equal to the generates p's for the group;
        const listChildrenForGroup1 = parrentForGroup1.children.length;
        // show length;
        document.querySelector(".Count-Group-1").textContent = `Count: ${listChildrenForGroup1}`;

        // group 2;
        const parrentForGroup2 = document.querySelector(".Show-Group-2");
        const listChildrenForGroup2 = parrentForGroup2.children.length;
        document.querySelector(".Count-Group-2").textContent = `Count: ${listChildrenForGroup2}`;

        //group 3;
        const parrentForGroup3 = document.querySelector(".Show-Group-3");
        const listChildrenForGroup3 = parrentForGroup3.children.length;
        document.querySelector(".Count-Group-3").textContent = `Count: ${listChildrenForGroup3}`;
    }

    // Init with USD Currency as default one;
    const initWithUsdCurrency = function () {
        // reset values;
        resetValues();

        const usdMap = new Map([
            ['USD/EUR: ', USD[0].usd.eur],
            ['USD/AUD: ', USD[0].usd.aud],
            ['USD/CAD: ', USD[0].usd.cad],
            ['USD/CHF: ', USD[0].usd.chf],
            ['USD/NZD: ', USD[0].usd.nzd],
            ['USD/BGN: ', USD[0].usd.bgn],
        ].sort((a, b) => b[1] - a[1]));

        for (const [conName, value] of usdMap) {

            if (value < 1) {
                document
                    .querySelector('.Show-Group-1')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            } else if (value >= 1 && value < 1.5) {
                document
                    .querySelector('.Show-Group-2')
                    .insertAdjacentHTML('afterbegin', `<p>${conName} ${value} </p>`);
            } else if (value >= 1.5) {
                document
                    .querySelector('.Show-Group-3')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            }
        }

        getCount();
    };

    // EUR function/section;
    const eurCurrency = function () {
        // reset values;
        resetValues();

        const eurMap = new Map([
            ['EUR/USD: ', EUR[0].eur.usd],
            ['EUR/AUD: ', EUR[0].eur.aud],
            ['EUR/CAD: ', EUR[0].eur.cad],
            ['EUR/CHF: ', EUR[0].eur.chf],
            ['EUR/NZD: ', EUR[0].eur.nzd],
            ['EUR/BGN: ', EUR[0].eur.bgn],
        ].sort((a, b) => b[1] - a[1]));

        for (const [conName, value] of eurMap) {

            if (value < 1) {
                document
                    .querySelector('.Show-Group-1')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            } else if (value >= 1 && value < 1.5) {
                document
                    .querySelector('.Show-Group-2')
                    .insertAdjacentHTML('afterbegin', `<p>${conName} ${value} </p>`);
            } else if (value >= 1.5) {
                document
                    .querySelector('.Show-Group-3')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            }
        }

        getCount();
    }

    // AUD function/section;
    const audCurrency = function () {
        // reset values;
        resetValues();

        const audMap = new Map([
            ['AUD/USD: ', AUD[0].aud.usd],
            ['AUD/EUR: ', AUD[0].aud.eur],
            ['AUD/CAD: ', AUD[0].aud.cad],
            ['AUD/CHF: ', AUD[0].aud.chf],
            ['AUD/NZD: ', AUD[0].aud.nzd],
            ['AUD/BGN: ', AUD[0].aud.bgn],
        ].sort((a, b) => b[1] - a[1]));

        for (const [conName, value] of audMap) {

            if (value < 1) {
                document
                    .querySelector('.Show-Group-1')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            } else if (value >= 1 && value < 1.5) {
                document
                    .querySelector('.Show-Group-2')
                    .insertAdjacentHTML('afterbegin', `<p>${conName} ${value} </p>`);
            } else if (value >= 1.5) {
                document
                    .querySelector('.Show-Group-3')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            }
        }

        getCount();
    }

    // CAD function/section;
    const cadCurrency = function () {
        // reset values;
        resetValues();

        const cadMap = new Map([
            ['CAD/USD: ', CAD[0].cad.usd],
            ['CAD/AUD: ', CAD[0].cad.aud],
            ['CAD/EUR: ', CAD[0].cad.eur],
            ['CAD/CHF: ', CAD[0].cad.chf],
            ['CAD/NZD: ', CAD[0].cad.nzd],
            ['CAD/BGN: ', CAD[0].cad.bgn],
        ].sort((a, b) => b[1] - a[1]));

        for (const [conName, value] of cadMap) {

            if (value < 1) {
                document
                    .querySelector('.Show-Group-1')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            } else if (value >= 1 && value < 1.5) {
                document
                    .querySelector('.Show-Group-2')
                    .insertAdjacentHTML('afterbegin', `<p>${conName} ${value} </p>`);
            } else if (value >= 1.5) {
                document
                    .querySelector('.Show-Group-3')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            }
        }

        getCount();
    }

    // CHF function/section;
    const chfCurrency = function () {
        // reset values;
        resetValues();

        const chfMap = new Map([
            ['CHF/USD: ', CHF[0].chf.usd],
            ['CHF/AUD: ', CHF[0].chf.aud],
            ['CHF/CAD: ', CHF[0].chf.cad],
            ['CHF/EUR: ', CHF[0].chf.eur],
            ['CHF/NZD: ', CHF[0].chf.nzd],
            ['CHF/BGN: ', CHF[0].chf.bgn],
        ].sort((a, b) => b[1] - a[1]));

        for (const [conName, value] of chfMap) {

            if (value < 1) {
                document
                    .querySelector('.Show-Group-1')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            } else if (value >= 1 && value < 1.5) {
                document
                    .querySelector('.Show-Group-2')
                    .insertAdjacentHTML('afterbegin', `<p>${conName} ${value} </p>`);
            } else if (value >= 1.5) {
                document
                    .querySelector('.Show-Group-3')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            }
        }

        getCount();
    }

    // NZD function/section;
    const nzdCurrency = function () {
        // reset values;
        resetValues();

        const nzdMap = new Map([
            ['NZD/USD: ', NZD[0].nzd.usd],
            ['NZD/AUD: ', NZD[0].nzd.aud],
            ['NZD/CAD: ', NZD[0].nzd.cad],
            ['NZD/CHF: ', NZD[0].nzd.chf],
            ['NZD/EUR: ', NZD[0].nzd.eur],
            ['NZD/BGN: ', NZD[0].nzd.bgn],
        ].sort((a, b) => b[1] - a[1]));

        for (const [conName, value] of nzdMap) {

            if (value < 1) {
                document
                    .querySelector('.Show-Group-1')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            } else if (value >= 1 && value < 1.5) {
                document
                    .querySelector('.Show-Group-2')
                    .insertAdjacentHTML('afterbegin', `<p>${conName} ${value} </p>`);
            } else if (value >= 1.5) {
                document
                    .querySelector('.Show-Group-3')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            }
        }

        getCount();
    }

    // BGN function/section;
    const bgnCurrency = function () {
        // reset values;
        resetValues();

        const bgnMap = new Map([
            ['BGN/USD: ', BGN[0].bgn.usd],
            ['BGN/AUD: ', BGN[0].bgn.aud],
            ['BGN/CAD: ', BGN[0].bgn.cad],
            ['BGN/CHF: ', BGN[0].bgn.chf],
            ['BGN/NZD: ', BGN[0].bgn.nzd],
            ['BGN/EUR: ', BGN[0].bgn.eur],
        ].sort((a, b) => b[1] - a[1]));

        for (const [conName, value] of bgnMap) {

            if (value < 1) {
                document
                    .querySelector('.Show-Group-1')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            } else if (value >= 1 && value < 1.5) {
                document
                    .querySelector('.Show-Group-2')
                    .insertAdjacentHTML('afterbegin', `<p>${conName} ${value} </p>`);
            } else if (value >= 1.5) {
                document
                    .querySelector('.Show-Group-3')
                    .insertAdjacentHTML('afterbegin', `<p> ${conName} ${value} </p>`);
            }
        }

        getCount();
    }

    // Change/switch currency function;
    window.changeCurrencies = function () {
        const x = document.getElementById("currencies").value;
        if (x === "USD") {
            initWithUsdCurrency();
        } else if (x === "EUR") {
            eurCurrency();
        } else if (x === "AUD") {
            audCurrency();
        } else if (x === "CAD") {
            cadCurrency();
        } else if (x === "CHF") {
            chfCurrency();
        } else if (x === "NZD") {
            nzdCurrency();
        } else if (x === "BGN") {
            bgnCurrency();
        } else {
            //cannot select currency outside of the dropdown/no else scenario;
        }

    }
    changeCurrencies();

}).catch(function (error) {
    // if there's an error, log it;
    console.log(error);
});