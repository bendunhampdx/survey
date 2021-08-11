$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#person1").val();
    const foodInput = $("input:radio[name=food]:checked").val();
    const musicInput = $("#music").val();
    const colorInput = $("#color").val();

    $(".person1").text(nameInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".color").text(colorInput);





    
    $("#output").show();
    console.log("Are we even working?")
  })
})