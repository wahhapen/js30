
const objects = document.querySelectorAll('.object');
objects.forEach(function(object) {
  const newsToggler = object.querySelector('.toggler')
    newsToggler.addEventListener('click', toggleNewspaper);
    function toggleNewspaper() {
      const newsBlock = object.querySelector('.news-block');
      newsBlock.classList.toggle('newspaper-visible');
    }
});
