document.addEventListener("DOMContentLoaded", () => {
  const passwordModal = document.getElementById("passwordModal");
  const protectedContent = document.getElementById("protectedContent");
  const submitPasswordBtn = document.getElementById("submitPassword");
  const passwordInput = document.getElementById("passwordInput");
  const errorMsg = document.getElementById("errorMsg");

  const EPW = "n!g&i^s%e$D-#H@R!S";
  const RPW = EPW.split("").reverse().join("");
  const DPW = RPW.replace(/[^a-zA-Z0-9-]/g, "");

  const showPasswordModal = () => {
    passwordModal.style.display = "flex";
    passwordInput.focus();
    document.body.classList.add("modal-open");
    protectedContent.style.filter = "blur(32px)";
  };

  const handlePasswordSubmission = () => {
    const userPassword = passwordInput.value;

    if (userPassword === DPW) {
      passwordModal.classList.add("hide");
      protectedContent.classList.add("unblur");
      setTimeout(() => {
        passwordModal.style.display = "none";
      }, 250);
      setTimeout(() => {
        protectedContent.style.filter = "none";
        document.body.classList.remove("modal-open");
      }, 600);
    } else {
      errorMsg.style.display = "block";
    }
  };

  submitPasswordBtn.addEventListener("click", (event) => {
    event.preventDefault();
    handlePasswordSubmission();
  });

  passwordInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handlePasswordSubmission();
    }
  });

  passwordInput.addEventListener("input", (event) => {
    if (event.target.value.length > 0) {
      submitPasswordBtn.classList.add("active");
    } else {
      submitPasswordBtn.classList.remove("active");
    }
  });

  window.addEventListener("pageshow", (event) => {
    if (
      event.persisted ||
      (performance.navigation && performance.navigation.type === 2)
    ) {
      showPasswordModal();
    }
  });

  showPasswordModal();
});
