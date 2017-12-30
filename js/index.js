





 
document.getElementById("search-query").addEventListener("click", query);


function query() {
   
  var value = document.getElementById("query").value;
  // ajax request
  $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search='+value, function (data) {
        if (data[1].length == 0) {
   
          alert("No result found for" + data[0]);
          
}
       var rawJson = JSON.stringify(data);
      var json = JSON.parse(rawJson);
      arrange(json); // update arange function
  
   });
}


function arrange(data) {

  document.getElementById("no-result").innerHTML="";
  document.getElementById("check").innerHTML ="";
  for(i=0; i<data[1].length; i++){
  document.getElementById("check").innerHTML +='<li>'+'<a href="'+data[3][i]+'"target=_blank >'+'<h2>'+data[1][i]+'</h2>'+'<p>' +data[2][i]+'</p>'+'</a>'+'</li>';
}
  
 }