let balance = 0;
let verified = false;
let verificationAmount = 0;
let referrals = 0;
let referralLink = ''; // To store referral link

// Backend API endpoint for payments (Mock URL)
const paymentEndpoint = 'https://example.com/kcb-payment-api'; // Replace with actual backend endpoint

// Function to verify account (Simulating payment detection for now)
function verifyAccount(amount) {
    if ([500, 1000, 3000].includes(amount)) {
        // Simulate payment detection via KCB Paybill
        simulateKCBPayment(amount)
            .then((paymentStatus) => {
                if (paymentStatus) {
                    verified = true;
                    verificationAmount = amount;
                    document.getElementById('verificationStatus').innerText = 'Account Verified!';
                    document.getElementById('verificationSection').classList.add('hidden');
                    document.getElementById('balanceSection').classList.remove('hidden');
                    generateReferralLink();