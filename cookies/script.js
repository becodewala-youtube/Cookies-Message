const cookiesPopup = document.querySelector('.cookies-popup');
const acceptBtn = document.querySelector('.accept-btn');
const declineBtn = document.querySelector('.decline-btn');

acceptBtn.addEventListener('click', () => {
  cookiesPopup.style.display = 'none';
  // Set cookie to remember user's choice
});

declineBtn.addEventListener('click', () => {
  cookiesPopup.style.display = 'none';
  
  // Redirect user to a page explaining why cookies are necessary
});
