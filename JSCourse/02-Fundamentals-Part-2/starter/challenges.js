/* 
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated(so one average score per team).

A team only wins if it has at least double the average score of the other team.Otherwise, no team wins!

Your tasks:
Create an arrow function calcAverage to calculate the average of 3 scores.This function should have three parameters and return a single number(the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them(you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above.Example: Koalas win(30 vs. 13)(use avgDolphins and avgKoalas instead of hard - coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
Ignore draws this time.Instead, log No team wins... to the console if there is no winner.

TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

/* 
//calc average score
const calcAverage = (param1, param2, param3) => {
    return (param1 + param2 + param3) / 3
}

//test data 1
const scoreDolphins1 = calcAverage(44, 23, 71);
//console.log(scoreDolphins1);
const scoreKoalas1 = calcAverage(65, 54, 49);
//console.log(scoreKoalas1);

//test data 2
const scoreDolphins2 = calcAverage(85, 54, 41);
//console.log(scoreDolphins2);
const scoreKoalas2 = calcAverage(23, 34, 27);
//console.log(scoreKoalas2);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log(`No team wins`)
    }
};

checkWinner(scoreDolphins1, scoreKoalas1);
//koalas win according to console;
checkWinner(scoreDolphins2, scoreKoalas2);
//dolphins win according to console;

//need to check if a team wins if it has double the points of the other team;

*/