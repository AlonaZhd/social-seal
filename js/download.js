document.getElementById("download").addEventListener("click", function () {
    // Отримання значення введеного email
    let emailInput = document.querySelector(".form__input");
    let email = emailInput.value.trim();

    // Перевірка, чи введено email
    if (email !== "") {
        // Показуємо Sweet Alert з успішним повідомленням
        Swal.fire({
            icon: "success",
            title: "Success!",
            text: "PDF will be downloaded shortly to " + email,
        });
    } else {
        // Показуємо Sweet Alert з повідомленням про помилку
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Please enter your email address",
        });
    }
});
