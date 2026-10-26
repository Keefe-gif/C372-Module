const payments = [
    { petName: "Chester", amount: 50, status: "APPROVED" },
    { petName: "Mochi", amount: 80, status: "PENDING" },
    { petName: "Mira", amount: 40, status: "DECLINED" }
];

console.log("Mochi's payment status is: " + payments[1].status);

for(const payment of payments) {
    switch (payment.status) {
        case 'APPROVED':
            console.log(payment.petName + "'s payment is approved.");
            break;
        case 'PENDING':
            console.log(payment.petName + "'s payment is pending.");
            break;
        case 'DECLINED':
            console.log(payment.petName + "'s payment is declined.");
            break;
        default:
            console.log(payment.petName + "'s payment status is unknown.");
    }
}   