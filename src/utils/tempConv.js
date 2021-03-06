const tempConv = (temp) => {
  let fTemp = (temp - 273) * 1.8 + 32;
  let fTempFixed = fTemp.toFixed(0);
  let cTemp = temp - 273;
  let cTempFixed = cTemp.toFixed(0);

  return { celsius: cTempFixed, farenheit: fTempFixed };
};

export default tempConv;
