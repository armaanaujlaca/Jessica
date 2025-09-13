const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('sideMenu');

    hamburger.addEventListener('click', function() {
      sideMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
    });

    function closeMenu(){
      sideMenu.classList.remove('open');
    }