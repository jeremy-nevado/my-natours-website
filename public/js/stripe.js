import axios from 'axios';
const stripe = String(
    'pk_test_51HQzTrHkBSIJU1rRcYXeMEV5O8zktzrxjE4ltnsJFdNvRgLewPzJN4jNfh84YLFx3N7G59cGUW1kLo9O7EYGjKlH00EorsDjJT',
);

export const bookTour = async (tourId) => {
    // 1) Get checkout session from API
    const sessiong = await axios(
        `http://localhost/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);
    // 2) Create checkout form + charge credit card
};
