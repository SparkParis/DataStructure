/*
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36
["Mozilla","AppleWebKit","Chrome","Safari"]
*/
function splitArr(agentStr) {
  var arr = agentStr.split('/');
  var agentJson = []
  arr.forEach(element => {
    eleArr = element.split(' ')
    agentJson.push(eleArr[eleArr.length - 1])
  });
  agentJson.pop();
  return agentJson;
}
var str = splitArr('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36');
console.log(str)