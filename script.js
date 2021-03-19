
    const listItems = document.querySelectorAll('.timeline__item');

      const options = {
        threshold: 0.7,
      }
      const appeareOnScroll = new IntersectionObserver(observeItems, options)

      function observeItems(elements) {
        elements.forEach(element => {
          if(!element.isIntersecting) {
            return;
          } else {
            element.target.classList.add('active');
          }
        })
      }

      listItems.forEach(item =>{
        appeareOnScroll.observe(item)
      })