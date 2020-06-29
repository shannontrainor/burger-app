$(document).ready(() => {

    $(".devour-form").on("submit", (event) => {
        event.preventDefault();

        const burgerId = $(this).children(".burgerId").val();
        console.log(burgerId);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burgerId
        }).then((data) => {
            location.reload();
        });
    });

});