$(document).ready(function () {
  const inputs = $(".otp-field > input");
  const button = $(".btn");

  inputs.first().focus();
  button.prop("disabled", true);

  inputs.on("paste", function (event) {
    event.preventDefault();

    const pastedValue = (event.originalEvent.clipboardData || window.clipboardData).getData("text");
    const otpLength = inputs.length;

    inputs.each(function (i) {
      if (i < pastedValue.length) {
        $(this).val(pastedValue[i]).removeAttr("disabled").focus();
      } else {
        $(this).val("").removeAttr("disabled").focus();
      }
    });
  });

  inputs.on("keyup", function (e) {
    const currentInput = $(this);
    const nextInput = currentInput.next();
    const prevInput = currentInput.prev();

    if (currentInput.val().length > 1) {
      currentInput.val("");
      return;
    }

    if (nextInput.length && nextInput.prop("disabled") && currentInput.val() !== "") {
      nextInput.removeAttr("disabled").focus();
    }

    if (e.key === "Backspace") {
      inputs.each(function (index) {
        if (index >= inputs.index(currentInput) && prevInput.length) {
          $(this).prop("disabled", true).val("");
          prevInput.focus();
        }
      });
    }

    button.removeClass("active").prop("disabled", true);

    const inputsNo = inputs.length;
    if (!inputs.last().prop("disabled") && inputs.last().val() !== "") {
      button.addClass("active").prop("disabled", false);
    }
  });
});