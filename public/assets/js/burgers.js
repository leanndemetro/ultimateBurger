// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(".burgerButton").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newBurger = {
    name: $("#ca").val().trim(),
    devoured: 0
  };
  console.log(newBurger)

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

$(".devour-btn").on("click", function (event) {
  event.preventDefault();

  var id = $(this).data("id");
  var devouredState = {
    devoured: 1
  };

  // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: devouredState
  }).then(function () {
    console.log("Burger devoured");
    location.reload();
  });
});

  



$(".orderDelete").on("click", function (event) {
  //set a variable equal to the value of the name 
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/burgers/" + id, {
    type: "DELETE"
  }).then(
    function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

$(".devouredDelete").on("click", function (event) {
  //set a variable equal to the value of the name 
  var id = $(this).data("id");

  // Send the DELETE request.
  $.ajax("/api/burgers/" + id, {
    type: "DELETE"
  }).then(
    function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});



