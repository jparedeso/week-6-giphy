$(document).ready(function(){
	var animals = ["dog", "cat"];

	function displayAnimals () {
		var animal = $(this).attr("data-animal");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10"; 

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response) {
          
          var results = response.data;          
          for (var i = 0; i < results.length; i++) {
           
            var animalDiv = $("<div>");

            var p1 = $("<p>").text("Rating: " + results[i].rating);
            animalDiv.append(p1);

            var p2 = $("<img>").attr("src", results[i].images.fixed_height.url);         
            animalDiv.append(p2);

            $("#image-display").append(animalDiv);
          }
        });
	}

	function  createButtons() {
		$("#button-display").empty();
		for (var i = 0; i < animals.length; i++) {
			var button = $("<button>");
			button.addClass("animal");
			button.attr("data-animal", animals[i]);
			button.text(animals[i]);
			$("#button-display").append(button);
		}	
	}

	$("#submit-button").on("click", function(event) {
		event.preventDefault();
		var animal = $("#animal-input").val().trim();
		animals.push(animal);
		createButtons();

	});

	$(document).on("click", ".animal", displayAnimals);
	createButtons();	

});







