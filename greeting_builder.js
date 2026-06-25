
function formatName(firstName, lastName){
  if (typeof firstName === 'string' && typeof lastName ==='string')
  return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay){
  if(timeOfDay=='morning')
  {
    return 'Good Morning';
  }
  else if(timeOfDay==='afternoon')
  {
    return 'Good afternoon';
  }
  else{
    return 'Good evening';
  }
}

function createGreeting(firstName, lastName, timeOfDay){
  return (getGreeting(timeOfDay)) + ', ' + (formatName(firstName,lastName));
}

console.log(createGreeting('Zain', 'Alameen', 'morning'));


