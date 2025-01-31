let BillEuro = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
let BillDollar = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];

function GetBills(BillValue, Rest, Devise) {
    if (Rest > BillValue) {
        let BillNumber = 0;
        BillNumber = Math.floor(Rest / BillValue);
        Rest = (Rest - ( BillValue * BillNumber)).toFixed(2);
        return [Rest ,`\n ${BillNumber} x ${BillValue}${Devise} `];
    } else {
        return [Rest , ''];
    }
}

export function LauchDAB(Withdraw, Devise) {
    let tabBill = []
    let Rest = 0;
    let Response = []
    let Answer = `Your Withdrawal of ${Withdraw} ${Devise} comport : `;

    if (Number(Withdraw) === NaN) {
        return "Not a number";
    }

    switch (Devise) {
        case '$':
            tabBill = BillDollar;
            break;
        case '€':
            tabBill = BillEuro
            break;
        default:
            return "Currency not Found";
    }

    Rest = Withdraw;
    tabBill.forEach((bill) => {
        Response = GetBills(bill, Rest, Devise);
        Rest = Response[0]
        Answer = Answer.concat(" ", Response[1]);
    })
   return Answer;
}

