const axios = require('axios');

export const fetchCars = async () => {
    const headers = {
        'X-RapidAPI-Key': '85dcbc15fcmsh326160ae45fe8d3p1729d4jsnb9141c58ee5c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    };

    const response = await axios.get(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        {
            params: { model: 'corolla' },
            headers,
        },
    );

    return response.data;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};
