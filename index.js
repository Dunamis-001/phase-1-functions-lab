function distanceFromHqInBlocks(someValue) {
  const hqStreet = 42; 
  return Math.abs(someValue - hqStreet);
}


function distanceFromHqInFeet(someValue) {
  
  const blocks = distanceFromHqInBlocks(someValue);
  
  return blocks * 264;
}


function distanceTravelledInFeet(start, destination) {
  
  const blockDifference = Math.abs(start - destination);
 
  return blockDifference * 264;
}



function calculatesFarePrice(start, destination) {
 
  const distanceInFeet = distanceTravelledInFeet(start, destination);

 
  if (distanceInFeet > 2500) {
    return 'cannot travel that far';
  }

  let fare = 0;

  
  if (distanceInFeet <= 400) {
    fare = 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    
    const chargeableDistance = distanceInFeet - 400;
    fare = chargeableDistance * 0.02; 
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
   
    fare = 25;
  }

  
  return parseFloat(fare.toFixed(2));
}


module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};