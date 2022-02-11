/* Dropdown Menu */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myDropdown").classList.toggle("headerFullHeight");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.droplink')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
        if (openDropdown.classList.contains('headerFullHeight')) {
            openDropdown.classList.remove('headerFullHeight');
          }
      }
    }
  }