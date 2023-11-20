const tabContainer = document.querySelector('.tab-container');
const tabs = document.querySelectorAll('.tab');
const views = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];

      if (tab === event.target) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    }

    const selectedView = event.target.getAttribute('data-view');

    for (let i = 0; i < views.length; i++) {
      const view = views[i];

      if (view.getAttribute('data-view') === selectedView) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    }
  }
});
