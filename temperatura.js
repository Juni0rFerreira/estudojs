
function celsparafahr(cels) {
    return (cels * 9 / 5) + 32;
  }
  
  function fahrparacels(fahr) {
    return (fahr - 32) * 5 / 9;
  }
  
  const tempcels = 20;
  const tempfahr = 64;
  
  console.log(tempcels + "°C é equivalente a " + celsparafahr(tempcels) + "°F");
  console.log(tempfahr + "°F é equivalente a " + fahrparacels(tempfahr) + "°C");
  