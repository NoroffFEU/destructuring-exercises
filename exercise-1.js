// Destructure the properties from the 'car'
// object below and then log all of them

const car = {
  manufacturer: 'Nissan',
  model: 'Skyline GT-R',
  country: 'Japan',
  coupe: true,
};

const { country, coupe, manufacturer, model } = car;

console.log(country, coupe, manufacturer, model);
// Logs:
// Japan true Nissan Skyline GT-R
