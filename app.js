const colorsArray = [ '#CD5C5C' , '#3CB371' ,'#808000' ,'#8B4513' ,'#808080' ,
'#2F4F4F' ,'#D3D3D3' ,'#0000CD' ,'#B0E0E6' ,'#DDA0DD' ,
'#4169E1' ,'#663399' ,'#FF00FF' ,'#D8BFD8' ,'#E6E6FA' ,
'#808080' ,'#0000FF' ,'#CD5C5C' ,'#483D8B' ,'#00FA9A' ,
'#F4A460' ,'#800000' ,'#008B8B' ,'#AFEEEE' ,'#4682B4' ,
'#A9A9A9' ,'#DA70D6' ,'#663399' ,'#F0E68C' ,'#FFFFE0' ];

let rand = (arr) => Math.floor(Math.random()*arr.length);

$('#a').css("background-color", colorsArray[rand(colorsArray)]);
$('#b').css("background-color", colorsArray[rand(colorsArray)]);
$('#c').css("background-color", colorsArray[rand(colorsArray)]);
$('#d').css("background-color", colorsArray[rand(colorsArray)]);
$('#e').css("background-color", colorsArray[rand(colorsArray)]);
$('#f').css("background-color", colorsArray[rand(colorsArray)]);
$('#g').css("background-color", colorsArray[rand(colorsArray)]);
$('#h').css("background-color", colorsArray[rand(colorsArray)]);
$('#i').css("background-color", colorsArray[rand(colorsArray)]);