const setProps = () => {
  const kgToLbs = 2.20462;
  const kg = Math.ceil(Math.random() * 100);
  const lbs = kg * kgToLbs;
  return { kg, lbs };
};

const onFront = ({ kg }) => {
  return document.createTextNode(`What is ${kg} kg in lbs?`);
};

const onBack = ({ lbs }) => {
  return document.createTextNode(`${lbs} lbs`);
};

module.exports = {
  setProps: setProps.toString(),
  onFront: onFront.toString(),
  onBack: onBack.toString(),
};
