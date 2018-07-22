var SIZE = 4;
var gTable = [];
var gGameOn = false;
var gStartTime = 0;

resetNums();
creatTbl();
var gWantedNum = 1;
var gInterval = setInterval(createClock, 500);


function creatTbl() {
  var elTbl = document.querySelector('.tbl');
  var strHTML = '';
  for (var i = 0; i < SIZE; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < SIZE; j++) {
      var cell = gTable.pop();
      strHTML += '<td onclick = "cellclick(this)"> ' + cell + ' </td>'
    }
    strHTML += '</tr>'
  }
  elTbl.innerHTML = strHTML;
}

function cellclick(elCell, gwantedNum) {
  if (+elCell.innerHTML === gWantedNum) {
    elCell.classList.add('clicked');
    gWantedNum++;
  }
  if (elCell.innerHTML === 1) {
    gGameOn = true;
    gStartTime = Date.now();
  } if (elCell.innerHTML === gTable.length+1)
    gGameOn = false;
  clearInterval(gInterval);
}

function resetNums() {
  for (var i = 1; i <= 16; i++) {
    gTable.push(i);
  }
  shuffle(gTable);
}

function shuffle(items) {
  for (var i = items.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = items[i];
    items[i] = items[j];
    items[j] = temp;
  }
}

function createClock() {
  if (gGameOn) {
    var elClock = document.querySelector('.clock');
    elClock.innerText = (Date.now() - gStartTime) / 1000;
  }
}