const paymentstatus = 'PENDING';

switch (paymentstatus) {
    case 'APPROVED':
        console.log('Payment approved');
        break;
    case 'REJECTED':
        console.log('Payment rejected');
        break;
    default:
        console.log('Unknown payment status');
}