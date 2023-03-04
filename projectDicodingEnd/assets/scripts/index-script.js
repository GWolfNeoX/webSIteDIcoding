const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropDown_menu");
const letsPlayButton = document.querySelector('.action_btn');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

letsPlayButton.addEventListener('click', function() {
    
    window.location.href = 'https://www.leagueoflegends.com/en-sg/';
});
