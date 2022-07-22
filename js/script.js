function playGame(playerInput){

clearMessages()

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nozyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);



console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);


printMessage('Twój ruch to: ' + playerMove);


if( computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
  } else if( computerMove == 'kamień' && playerMove == 'kamień'){
        printMessage('REMIS');
  } else if( computerMove == 'kamień' && playerMove == 'nozyce'){
        printMessage('Komputer Wygrywa');
  } else if(computerMove == 'nozyce' && playerMove == 'kamien'){
        printMessage('Ty wygrywasz !');
  } else if (computerMove == 'nozyce' && playerMove == 'papier'){
        printMessage('Komputer Wygrywa');
  } else if (computerMove == 'nozyce' && playerMove == 'nozyce'){
      printMessage('REMIS');
  } else if (computerMove == 'papier' && playerMove == 'kamien'){
      printMessage('Komputer zwycięza');
  } else if (computerMove == 'papier' && playerMove == 'papier'){
      printMessage('REMIS');
  } else if (computerMove == 'papier' && playerMove == 'nozyce'){
      printMessage (' ty wygrywasz!');
  } else if (computerMove == 'nozyce' && playerMove == 'kamien'){
      printMessage (' Ty wygrywasz');
  }
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
document.getElementById('play-scisorrs').addEventListener('click', function(){
    playGame(3);
});
