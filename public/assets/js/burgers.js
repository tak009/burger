$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#new_burger").val().trim(),
      devoured: 0
    };
    console.log(newBurger);
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = 1;

    var newDevourState = {
      devoured: newDevour
    };

    console.log(newDevourState);

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        location.reload();
      }
    );
  });


});
