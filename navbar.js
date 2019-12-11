window.scroll(() => {
    if (window.scrollTop() > 1){  
      document.querySelector('#nav-bar').setAttribute('style', 'position: sticky;');
    }
    else {
        document.querySelector('#nav-bar').removeAttribute('style', 'position: sticky;');
    }
  });