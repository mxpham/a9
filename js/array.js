function play(){
  var myObj, min, max;
  min = 0;
  max = 26;
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

  var arr = [], x;

  for(var i = 0; i < 7; i++){
    var random = Math.floor(Math.random() * (+max - + min)) + min;
    x = myObj.pieces[random].src;
    arr[i] = x
  }

  console.log(myObj.pieces[0].src);

  document.getElementById("tile1").src = arr[0];
  document.getElementById("tile2").src = arr[1];
  document.getElementById("tile3").src = arr[2];
  document.getElementById("tile4").src = arr[3];
  document.getElementById("tile5").src = arr[4];
  document.getElementById("tile6").src = arr[5];
  document.getElementById("tile7").src = arr[6];

  
}

function show_image(src) {
  var img = document.createElement("img");
  img.src = src;

  // This next line will just add it to the <body> tag
  document.body.appendChild(img);
}
