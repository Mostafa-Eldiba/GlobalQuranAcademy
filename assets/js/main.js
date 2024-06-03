// Create An Active Nav Link On Scroll
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          // let offsetTop = - 50;
          let id = sec.getAttribute('id');
          if(top >= offset && top < offset + height) {
              navLinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
              });
          };
      });
  };



// Transtion For Social Media
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});




// Accordion
var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

  

// Include File Html Header & Footer
let includes = document.getElementsByTagName('include');
for (var i = 0; i < includes.length; i++) {
    let include = includes[i];
    load_file(includes[i].attributes.src.value, function(text) {
    include.insertAdjacentHTML('afterend', text);
    include.remove();
    });
}
function load_file(filename, callback) {
    fetch(filename).then(response => response.text()).then(text => callback(text));
}