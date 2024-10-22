document.addEventListener("DOMContentLoaded", () => {
  const passwordModal = document.getElementById("passwordModal");
  const protectedContent = document.getElementById("protectedContent");
  const submitPasswordBtn = document.getElementById("submitPassword");
  const passwordInput = document.getElementById("passwordInput");
  const errorMsg = document.getElementById("errorMsg");

  const EPW = "&4%2*0#2-@n#g$i^s%e(d$p!o*o#g";
  const RPW = EPW.split("").reverse().join("");
  const DPW = RPW.replace(/[^a-zA-Z0-9-]/g, "");

  const showPasswordModal = () => {
    passwordModal.style.display = "flex";
    passwordInput.focus();
    document.body.classList.add("modal-open");
  };

  const handlePasswordSubmission = () => {
    const userPassword = passwordInput.value;

    if (userPassword === DPW) {
      passwordModal.style.display = "none";
      protectedContent.style.filter = "none";
      document.body.classList.remove("modal-open");
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
