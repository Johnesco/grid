var myArray = randomGrid(51,51);
var smallArray =[[0]];

function randomBit(){
  var num = Math.floor(Math.random()*4);
  if(num>1) {return 0} else {return 1}
}

function randomGrid(width,height){
final = [];
  for (var x = 0; x < height; x++){
    var temp = [];
    for (var y = 0; y < width; y++){
      var rand = randomBit().toString(); 
      temp.push(rand);
    }
    final.push(temp)
  }
  return final;
}

function toBinary(str){
  return parseInt(str, 2);
}

function shrink(grid){
  var length = grid.length;
  var width = grid[0].length;
  var final = [];
  
  for(var r = 0; r < length - 1; r++){
    temp = [];
    for(var c = 0; c < width - 1; c++){
      cell = (grid[r][c] + grid[r][c+1] + grid[r+1][c] + grid[r+1][c+1]);


      str = "c" + toBinary(cell);

      temp.push(str);
    }
    final.push(temp);
  }
  return final;
  
};

function keep(grid){
  var length = grid.length;
  var width = grid[0].length;
  var final = [];
  
  for(var r = 0; r < length ; r++){
    temp = [];
    for(var c = 0; c < width ; c++){
      cell = (grid[r][c]);


      str = "c" + toBinary(cell);

      temp.push(str);
    }
    final.push(temp);
  }
  return final;
  
};

  
function displayImgGrid(grid){
  var length = grid.length;
  var width = grid[0].length;
  var gridString = '';
  
  for(var r = 0; r < length; r++){
    for(var c = 0; c < width; c++){
      gridString += ("<div class=" + '"cell '+ grid[r][c] +'">' + "</div>");
    }
    //gridString += "<br>";
  }
  console.log(gridString)
  return gridString;
};


$('div#grid').html(displayImgGrid(keep(myArray)));
$('div#grid2').html(displayImgGrid(shrink(myArray)));

