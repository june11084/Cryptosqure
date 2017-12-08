var toCryptosqure = function(str){
  var alphabetOnly = str.replace(/[^a-zA-Z0-9]/g, '');
  console.log(alphabetOnly)
  var square = Math.ceil(Math.sqrt(alphabetOnly.length));
  console.log(square)

  var groupString = alphabetOnly.match(/.{1,5}/g)
  var finalString = groupString.join(" ");
  return finalString;
};

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var string = $("input#stringInput").val();
    // var stringArray = string.split("");
    console.log(string)
    var result = toCryptosqure(string);
    $("#result").text(result);

  });
});
