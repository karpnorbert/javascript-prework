function playGame(){ 
  let playerInput
  console.log('Gracz wpisał: ' + playerInput);
  
  function clearMessages(){
  document.getElementById('messages').innerHTML = '';
}


function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2){
    return 'papier';
  } else if (argMoveId == 3){
    return 'nozyce';
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);



let playerMove = getMoveName(randomNumber);

printMessage('Twój ruch to: ' + playerMove); 


function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  console.log('moves:', argComputerMove, argPlayerMove);
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Ty Przegrywasz');
  } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
    printMessage('Remis');
  } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('remis');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz');
  } else if (argComputerMove ='kamień' && argPlayerMove == 'nieznany ruch');
}
}

document.getElementById('play-rocks').addEventListener('click', function(){
  printMessage('Zagrałeś kamień');
});
document.getElementById('play-paper').addEventListener('click', function(){
  printMessage('Zagrałeś papier');
});
document.getElementById('play-scissors').addEventListener('click', function(){
  printMessage('Zagrałeś nożyce');
});