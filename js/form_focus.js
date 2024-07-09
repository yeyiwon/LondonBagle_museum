document.addEventListener("DOMContentLoaded", function () {
    // form wrap 다 잡아 
    const inputs = document.querySelectorAll(".form_wrap input");

    // 반복 
    inputs.forEach(function (input) {
        function checkValue() {
          // 값이 있는 지 확인
            if (input.value !== "") {
                input.classList.add("has_value");
            } else {
                input.classList.remove("has_value");
            }
        }

        input.addEventListener("input", checkValue);
        checkValue();
    });


});


