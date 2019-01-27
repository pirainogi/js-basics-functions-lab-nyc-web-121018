// Code your solution in this file!
function distanceFromHqInBlocks(street){
  const hq = 42;
  return Math.abs(hq-street);
};

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264
};

function distanceTravelledInFeet(start, destination){
  let distance = Math.abs(start-destination) * 264
  return distance
};

function calculatesFarePrice(start, destination){
  const length = distanceTravelledInFeet(start, destination);
  if (length <= 400){
    return 0;
  } else if (length > 400 && length <= 2000){
    return (length-400) * 0.02;
  } else if (length > 2000 && length < 2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }
};
