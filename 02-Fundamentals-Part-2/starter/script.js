'use sctrict';
console.clear();
//challenge 5

calcTip = totalBill => {totalBill >= 50 && totalBill <= 300 ? tipVal = (0.15*totalBill) : tipVal = (0.20*totalBill);
    return tipVal;
}

const bills = [125,555,44];
console.log(bills);

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);

const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(total);