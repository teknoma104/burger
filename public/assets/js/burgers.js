// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        console.log("devoured = " + newDevoured);

        if (newDevoured === true) {
            $("#Bob").prop("src", "/assets/img/bob-serve.jpg");
        } else {
            $("#Bob").prop("src", "/assets/img/bob-angry.jpg");
        }

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // Form Validation
        function validateForm() {
            var isValid = true;

            // Checks for blank value in the two text input boxes
            if ($("#burgerName").val() === "") {
                isValid = false;
            }

            if ($("[name=devoured]:checked").val() === "undefined") {
                isValid = false;
            }

            return isValid;
        }

        if (validateForm) {

            var newBurger = {
                burger_name: $("#burgerName").val().trim(),
                devoured: $("[name=devoured]:checked").val().trim()
            };

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

        }

    });

});


$(document).ready(function () {
    console.log("ready!");
    $("#Bob").prop("src", "/assets/img/bob-idle.png");
});