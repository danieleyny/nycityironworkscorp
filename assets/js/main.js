var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}








$('#ask-a-question').on('click', () => {
    const contactDivPosition = document.getElementById('contact').offsetTop;
    window.scroll({
      top: contactDivPosition + 30,
      left: 0,
      behavior: 'smooth'
    });
  });

  $('#property-image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    prevArrow: '<a href="#" class="slick-arrow slick-prev"><span class="fa fa-chevron-left"></span></a>',
    nextArrow: '<a href="#" class="slick-arrow slick-next"><span class="fa fa-chevron-right"></span></a>'
  });

  $('#properties-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
    nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });