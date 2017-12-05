$(document).ready(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    var vowels = "aeiou".split('');
    var letters = $("#input1").val().split('');
    var result = [];
    console.log(vowels)

    for (i=0;i<letters.length;i++){
      char = letters[i];
      if (vowels.indexOf(char) !== -1){
        result.push("-")

      } else {

        result.push(char)
      }
    }

    $("#output").text(result.join(''));
    $("#formOne")[0].reset();
  });
});
