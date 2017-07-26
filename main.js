class StickyNavigation {
  constructor () {
    $('.softscroll').on('click',function (e) {
    	    e.preventDefault();

    	    var target = this.hash,
    	    $target = $(target);

    	    $('html, body').stop().animate({
    	        'scrollTop': $target.offset().top
    	    }, 800, 'swing', function () {
    	        window.location.hash = target;
    	    });
    	});
      $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
          $('.main_nav').addClass('sticky');
        } else {
          $('.main_nav').removeClass('sticky');
        }
      });
  }
}
new StickyNavigation()

//Stars
var transition = 40
var dots = 12
var lgStars = 2
var smStars = 3

function nJoin(n, markup) {
  var fn = typeof markup == 'function' ?
        markup : e => markup
  return new Array(n)
    .join(' ')
    .split(' ')
    .map(fn)
    .join('')
}

// Transition layers
Array
  .from(document.querySelectorAll(
    '.sky-level'
  ))
  .slice(0, -1)
  .forEach(layer => {
    layer.innerHTML = nJoin(transition,
      '<div></div>'
    )
  })

// Stars and dots
var bigStars = nJoin(lgStars, `
  <span class="star star--lg">
    <span class="star__part"></span>
    <span class="star__part"></span>
  </span>
`)

var smallStars = nJoin(smStars, `
  <span class="star star--sm">
    <span class="star__part"></span>
    <span class="star__part"></span>
  </span>
`)

var dotStars = nJoin(dots, e => {
  var isBlinking = Math.random() < .33
  var className = 'dot'
  isBlinking && (
    className += ' dot--blinking'
  )
  return `
    <span class="${className}"></span>
  `
})

document
  .getElementById('stars')
  .innerHTML += (
    dotStars +
    smallStars +
    bigStars
  )
