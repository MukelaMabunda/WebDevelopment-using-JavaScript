const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.clear();
if (dolphinsAverage > koalasAverage) { console.log(`Dolphins win score: ${dolphinsAverage}`); }
else if (dolphinsAverage < koalasAverage) { console.log(`Koalas win score: ${koalasAverage}`); }
else { console.log(`Draw score: ${koalasAverage}`); }