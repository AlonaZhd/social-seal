document.getElementById("btn-send").addEventListener("click", function () {
    Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You have successfully ordered a call! Our manager will contact you shortly.",
    });
});
