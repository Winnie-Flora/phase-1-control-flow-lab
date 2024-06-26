function scuberGreetingForFeet(ride){
  let showMessage;
if (ride <= 400) {
  showMessage = 'This one is on me!';
}
else if (ride > 400 && ride <= 2000){
  showMessage = 'That will be twenty bucks.';
}
else if (ride > 2000 && ride <= 2500){
  showMessage = 'I will gladly take your thirty bucks.';
}
else {
  showMessage = 'No can do.';
  }
  return showMessage;
}

function ternaryCheckCity(city){
  if (city === 'NYC'){
    return "Ok, sounds good.";
  }
  else if (city !== 'NYC'){
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  let message;
if (tip === 'generous'){
  message = 'Thank you so much.';
}
else if (tip === 'not as generous'){
  message = "Thank you.";
}
else {
  message = 'Bye.'
}
return message;
}