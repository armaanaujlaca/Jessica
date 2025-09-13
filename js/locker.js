const locker = document.getElementById('locker');
const modal = document.getElementById('lockerModal');
const closeBtn = document.querySelector('.modal .close');
const unlockBtn = document.getElementById('unlockBtn');
const passwordInput = document.getElementById('lockerPassword');
const errorMsg = document.getElementById('lockerError');

locker.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "flex";        // show modal
    passwordInput.value = "";             // clear input
    errorMsg.style.display = "none";     // hide error
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

unlockBtn.addEventListener('click', () => {
    const password = passwordInput.value;
    if(password === "barlovesbabygril"){        // <-- replace with your password
        modal.style.display = "none";
        window.location.href = "letter.html"; // go to locker page
    } else {
        errorMsg.style.display = "block";
    }
});

// close modal if user clicks outside content
window.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});
