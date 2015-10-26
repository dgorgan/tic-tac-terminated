var player1Name = "",
  player2Name = "",
  turn = "";
var grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
var hasWinner = 0,
  moveCount = 0;

function boardMsg(x) {
  return $('#board').text(x);
}

function setTurn() {
  var r = Math.floor((Math.random() * 2) + 1);
  if (r == 1) {
    turn = player1Name;
    boardMsg(player1Name + "'s turn now!");
  } else {
    turn = player2Name;
    boardMsg(player2Name + "'s turn now!")
  }
}

function init() {
  turn = "";
  grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  boardMsg("");
  $('.col').map(function() {
    $(this).text("");
  }).get();
  hasWinner = 0;
  moveCount = 0;
}

$('#playButton').click(function() {


   playSound('http://www.wavsource.com/snds_2015-10-18_3983753680792964/movie_stars/schwarzenegger/no_sh.wav')



  if (hasWinner == 1) {
    init();
  }

  player1Name = $('#player1-1-inp').val();
  player2Name = $('#player2-2-inp').val();

  if (player1Name == "" || player2Name == "") {
    alert('Please insert your name');
    return;
  }

  setTurn();

});

$('.col').click(function() {


  if (player1Name == "" || player2Name == "") {
    alert('Please insert your name');
    return;
  }

  var row = $(this).parent().index();
  var col = $(this).index();

  if (grid[row][col] !== 0) {
    alert("You can't do it! Cia has you pushing too many pencils??");
    return;
  }

  if (hasWinner == 1) {
    alert("Please click play. Do it now!");
    return;
  }

  if (turn == player1Name) {
    moveCount++;
    $(this).text("O");
    grid[row][col] = 1;
    var ifWon = winnerCheck(1, player1Name);
    if (!ifWon) {
      if (moveCount >= 9) {
        boardMsg('Match Drawn!');
        moveCount = 0;
        $('#playButton').text("Play again");
        hasWinner = 1;
        return;
      } else {
        turn = player2Name;
        boardMsg(player2Name + "'s turn now!");
      }
      return;
    } else {
      return;
    }
  } else if (turn == player2Name) {
    moveCount++;
    $(this).text('X');
    grid[row][col] = 2;
    var ifWon = winnerCheck(2, player2Name);
    if (!ifWon) {
      if (moveCount >= 9) {

        boardMsg('Match Drawn!');
        moveCount = 0;
        $('#playButton').text("Play again");
        hasWinner = 1;
        return;
      } else {
        turn = player1Name;
        boardMsg(player1Name + "'s turn!");
      }
      return;
    } else {
      return;
    }
  }


});

function winnerCheck(n, playerName) {
  if (

    (grid[0][0] == n && grid[0][1] == n && grid[0][2] == n) ||
    (grid[1][0] == n && grid[1][1] == n && grid[1][2] == n) ||
    (grid[2][0] == n && grid[2][1] == n && grid[2][2] == n) ||

    (grid[0][0] == n && grid[1][0] == n && grid[2][0] == n) ||
    (grid[0][1] == n && grid[1][1] == n && grid[2][1] == n) ||
    (grid[0][2] == n && grid[1][2] == n && grid[2][2] == n) ||

    (grid[0][0] == n && grid[1][1] == n && grid[2][2] == n) ||
    (grid[0][2] == n && grid[1][1] == n && grid[2][0] == n)


  ) {


    playSound('http://www.wavsource.com/snds_2015-10-18_3983753680792964/movies/terminator/t3_terminated.wav');


    boardMsg(playerName + " won the game!");
    $('h2').text(playerName + ' YOU ARE TERMINATED!!');

    hasWinner = 1;
    moveCount = 0;
    $("#playButton").text("Play again");
    return true;
  }
  return false;
}


function playSound( url ) {
  document.getElementById("soundPlayer").innerHTML="<embed src='"+url+"' hidden=true autostart=true loop=false>";
}


$('#one').on('mouseover', function() {
  playSound('http://www.wavsource.com/snds_2015-10-18_3983753680792964/movies/collateral_damage/collateral_damage_no.wav');
});
$('#two').on('mouseover', function() {
  playSound('https://www.wavsource.com/snds_2015-10-18_3983753680792964/movie_stars/schwarzenegger/no_sh.wav');
});
$('#three').on('mouseover', function() {
  playSound('http://www.wavsource.com/snds_2015-10-18_3983753680792964/movie_stars/schwarzenegger/sob.wav');
});
$('#four').on('mouseover', function() {
  playSound('http://www.wavsource.com/snds_2015-10-18_3983753680792964/movies/terminator/t1_be_back.wav');
});
$('#five').on('mouseover', function() {
  playSound('http://www.wavsource.com/snds_2015-10-18_3983753680792964/movies/kindergarten_cop/stop_whining_x.wav');
});
$('#six').on('mouseover', function() {
  playSound('http://www.wavsource.com/snds_2015-10-18_3983753680792964/movies/total_recall/bullsh_dont.wav');
});
$('#seven').on('mouseover', function() {
  playSound('http://www.wavsource.com/snds_2015-10-18_3983753680792964/movie_stars/schwarzenegger/erased.wav');
});
$('#eight').on('mouseover', function() {
  playSound('http://www.wavsource.com/snds_2015-10-18_3983753680792964/movies/terminator/t3_dont_do_dat.wav');
});
$('#nine').on('mouseover', function() {
  playSound('http://www.wavsource.com/snds_2015-10-18_3983753680792964/movie_stars/schwarzenegger/hello_cutie.wav');
});

$('h2').fadeIn(1000).delay(1000).fadeOut(1000).delay(1000).fadeIn(1000);
