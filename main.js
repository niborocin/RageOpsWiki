var name;
var tempElement;

for(var i = 0; i < data.length; i++){
    name = data[i].name;
    tempElement = $('<p>'+name+'</p>');
}
