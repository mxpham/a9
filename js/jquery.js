//drag and drop widgets allows tiles to be dragged and dropped from holder
//to Scrabble board
$( function() {
  $( "#tile1" ).draggable({
    snap: ".dropzones",
    stop: function (event, ui) {
         var item = this;
         $('#dropzones li').each(function(){
             if($(item).position().left == $(this).position().left)
                 alert($(this).attr('id'));
         });
         $('.item').draggable("disable");
     }
  });
//allowing tiles to be snapped to individual blocks on Scrabble board
  $( "#tile2" ).draggable({
    revert:"invalid",
    snap: "#board1, #board2, #board3, #board4, #board5, #board6, #board7, #board8, #board9, #board10, #board11, #board12, #board13, #board14, #board15"});
  $( "#tile3" ).draggable({
    revert:"invalid",
    snap: "#board1, #board2, #board3, #board4, #board5, #board6, #board7, #board8, #board9, #board10, #board11, #board12, #board13, #board14, #board15"});
  $( "#tile4" ).draggable({
    revert:"invalid",
    snap: "#board1, #board2, #board3, #board4, #board5, #board6, #board7, #board8, #board9, #board10, #board11, #board12, #board13, #board14, #board15"});
  $( "#tile5" ).draggable({
    revert:"invalid",
    snap: "#board1, #board2, #board3, #board4, #board5, #board6, #board7, #board8, #board9, #board10, #board11, #board12, #board13, #board14, #board15"});
  $( "#tile6" ).draggable({
    revert:"invalid",
    snap: "#board1, #board2, #board3, #board4, #board5, #board6, #board7, #board8, #board9, #board10, #board11, #board12, #board13, #board14, #board15"});
  $( "#tile7" ).draggable({
    revert:"invalid",
    snap: "#board1, #board2, #board3, #board4, #board5, #board6, #board7, #board8, #board9, #board10, #board11, #board12, #board13, #board14, #board15"});

  //allowing Scrabble board to be a droppable field
  $( "#board1" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board2" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board3" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board4" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board5" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board6" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board7" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board8" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board9" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board10" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board11" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board12" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board13" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board14" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#board15" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
  $( "#holder" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      }
    });
} );

//pressing the button will generate random letters for the game
function play(){
  var myObj, boardValue = [], min, max;
  min = 0;
  max = 26;
  //data structure to hold all letters, values, and amount of letters available
  myObj = {"pieces": [
    	{"letter":"A", "value":1,  "amount":9, "src": "Scrabble_Tiles/Scrabble_Tile_A.jpg", "id": "A"},
    	{"letter":"B", "value":3,  "amount":2, "src": "Scrabble_Tiles/Scrabble_Tile_B.jpg", "id": "B"},
    	{"letter":"C", "value":3,  "amount":2, "src": "Scrabble_Tiles/Scrabble_Tile_C.jpg", "id": "C"},
    	{"letter":"D", "value":2,  "amount":4, "src": "Scrabble_Tiles/Scrabble_Tile_D.jpg", "id": "D"},
    	{"letter":"E", "value":1,  "amount":12, "src": "Scrabble_Tiles/Scrabble_Tile_E.jpg", "id": "E"},
    	{"letter":"F", "value":4,  "amount":2, "src": "Scrabble_Tiles/Scrabble_Tile_F.jpg", "id": "F"},
    	{"letter":"G", "value":2,  "amount":3, "src": "Scrabble_Tiles/Scrabble_Tile_G.jpg", "id": "G"},
    	{"letter":"H", "value":4,  "amount":2, "src": "Scrabble_Tiles/Scrabble_Tile_H.jpg", "id": "H"},
    	{"letter":"I", "value":1,  "amount":9, "src": "Scrabble_Tiles/Scrabble_Tile_I.jpg", "id": "I"},
    	{"letter":"J", "value":8,  "amount":1, "src": "Scrabble_Tiles/Scrabble_Tile_J.jpg", "id": "J"},
    	{"letter":"K", "value":5,  "amount":1, "src": "Scrabble_Tiles/Scrabble_Tile_K.jpg", "id": "K"},
    	{"letter":"L", "value":1,  "amount":4, "src": "Scrabble_Tiles/Scrabble_Tile_L.jpg", "id": "L"},
    	{"letter":"M", "value":3,  "amount":2, "src": "Scrabble_Tiles/Scrabble_Tile_M.jpg", "id": "M"},
    	{"letter":"N", "value":1,  "amount":6, "src": "Scrabble_Tiles/Scrabble_Tile_N.jpg", "id": "N"},
    	{"letter":"O", "value":1,  "amount":8, "src": "Scrabble_Tiles/Scrabble_Tile_O.jpg", "id": "O"},
    	{"letter":"P", "value":3,  "amount":2, "src": "Scrabble_Tiles/Scrabble_Tile_P.jpg", "id": "P"},
    	{"letter":"Q", "value":10, "amount":1, "src": "Scrabble_Tiles/Scrabble_Tile_Q.jpg", "id": "Q"},
    	{"letter":"R", "value":1,  "amount":6, "src": "Scrabble_Tiles/Scrabble_Tile_R.jpg", "id": "R"},
    	{"letter":"S", "value":1,  "amount":4, "src": "Scrabble_Tiles/Scrabble_Tile_S.jpg", "id": "S"},
    	{"letter":"T", "value":1,  "amount":6, "src": "Scrabble_Tiles/Scrabble_Tile_T.jpg", "id": "T"},
    	{"letter":"U", "value":1,  "amount":4, "src": "Scrabble_Tiles/Scrabble_Tile_U.jpg", "id": "U"},
    	{"letter":"V", "value":4,  "amount":2, "src": "Scrabble_Tiles/Scrabble_Tile_V.jpg", "id": "V"},
    	{"letter":"W", "value":4,  "amount":2, "src": "Scrabble_Tiles/Scrabble_Tile_W.jpg", "id": "W"},
    	{"letter":"X", "value":8,  "amount":1, "src": "Scrabble_Tiles/Scrabble_Tile_X.jpg", "id": "X"},
    	{"letter":"Y", "value":4,  "amount":2, "src": "Scrabble_Tiles/Scrabble_Tile_Y.jpg", "id": "Y"},
    	{"letter":"Z", "value":10, "amount":1, "src": "Scrabble_Tiles/Scrabble_Tile_Z.jpg", "id": "Z"},
    	{"letter":"_", "value":0,  "amount":2, "src": "Scrabble_Tiles/Scrabble_Tile_Blank.jpg", "id": "blank"}
    ]
  }

  //allows random selection of tiles
  var arr = [], x;

  for(var i = 0; i < 7; i++){
    var random = Math.floor(Math.random() * (+max - + min)) + min;
    x = myObj.pieces[random].src;
    arr[i] = x
  }
  //displays tiles on page
  document.getElementById("tile1").src = arr[0];
  document.getElementById("tile2").src = arr[1];
  document.getElementById("tile3").src = arr[2];
  document.getElementById("tile4").src = arr[3];
  document.getElementById("tile5").src = arr[4];
  document.getElementById("tile6").src = arr[5];
  document.getElementById("tile7").src = arr[6];


}

