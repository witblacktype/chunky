function chunk(arr, size){
  var innerArray = [];
  var outerArray = [];
  function arrayUpdate(){
    outerArray.push(innerArray);
    innerArray = [];
  }
  for(var i = 0; i < arr.length; i++){
    innerArray.push(arr[i]);
    if(innerArray.length === size){
      arrayUpdate();
    }
    else if(i + 1 === arr.length && innerArray !== []){
      arrayUpdate();
    }
  }
  return outerArray;
}
chunk(["a", "b", "c", "d"], 2);
