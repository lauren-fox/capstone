
$(document).ready(function () {
    // custom cursor
    var cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', function (e) {
        var x = e.pageX;
        var y = e.pageY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    });

    // homepage panning
    var scene = document.getElementById('container');
    var parallaxInstance = new Parallax(scene);

    $('#image1').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#castelli-1',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image1').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#castelli-1',
              opacity: 0,
              duration: 600,
            })
    });
    $('#image2').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#castelli-2',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image2').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#castelli-2',
              opacity: 0,
              duration: 600,
            })
    });
    $('#image3').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#castelli-3',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image3').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#castelli-3',
              opacity: 0,
              duration: 600,
            })
    });
    $('#image10').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#rothko-1',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image10').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#rothko-1',
              opacity: 0,
              duration: 600,
            })
    });
    $('#image11').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#rothko-2',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image11').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#rothko-2',
              opacity: 0,
              duration: 600,
            })
    });
    $('#image12').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#rothko-3',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image12').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#rothko-3',
              opacity: 0,
              duration: 600,
            })
    });


    $('#image5').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#art-of-this-century-1',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image5').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#art-of-this-century-1',
              opacity: 0,
              duration: 600,
            })
    });
    $('#image6').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#art-of-this-century-2',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image6').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#art-of-this-century-2',
              opacity: 0,
              duration: 600,
            })
    });





    $('#image7').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#sidney-janis-1',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image7').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#sidney-janis-1',
              opacity: 0,
              duration: 600,
            })
    });
    $('#image8').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#sidney-janis-2',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image8').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#sidney-janis-2',
              opacity: 0,
              duration: 600,
            })
    });
    $('#image9').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#sidney-janis-3',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image9').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#sidney-janis-3',
              opacity: 0,
              duration: 600,
            })
    });






    $('#image14').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#parsons-1',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image14').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#parsons-1',
              opacity: 0,
              duration: 600,
            })
    });
    $('#image15').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#parsons-2',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image15').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#parsons-2',
              opacity: 0,
              duration: 600,
            })
    });





    $('#image13').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#moma-1',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image13').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#moma-1',
              opacity: 0,
              duration: 600,
            })
    });
    $('#image16').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#moma-2',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image16').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#moma-2',
              opacity: 0,
              duration: 600,
            })
    });
    $('#image17').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#moma-3',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image17').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#moma-3',
              opacity: 0,
              duration: 600,
            })
    });
    $('#image18').mouseover('click touchstart', function() {
        var caption = anime({
              targets: '#moma-4',
              opacity: 1,
              duration: 600,
            })
    });
    $('#image18').mouseleave('click touchstart', function() {
        var caption = anime({
              targets: '#moma-4',
              opacity: 0,
              duration: 600,
            })
    });


   

  $('#x, .overlay').click('click touchstart', function() {
      var caption = anime({
            targets: '.intro, .overlay, #x',
            top: -3000,
            opacity:0,
            duration: 6000,
          })
  });


  $('.right').mouseover('click touchstart', function() {
    var caption = anime({
          targets: '#cursor',
          width: 500,
          duration: 600,
        })
});


$('.ues').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '.ues',
        borderColor: '#5482b4',
        duration: 600,
      })
      var caption = anime({
        targets: '.image-caption',
        color: '#5482b4',
        duration: 600,
      })
});


$('.uws').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '.uws',
        borderColor: '#be4d4a',
        duration: 600,
      })
      var caption = anime({
        targets: '.image-caption',
        color: '#be4d4a',
        duration: 600,
      })
});

$('.midtown').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '.midtown',
        borderColor: '#cb774f',
        duration: 600,
      })
      var caption = anime({
        targets: '.image-caption',
        color: '#cb774f',
        duration: 600,
      })
});


$(window).load(function() {
  var pageLoad = anime({
    targets: '.image',
    scale: 1,
    opacity: 1,
    duration: 6000,
  })
});

$('.castelli').click('click touchstart', function() {
  var sidebar = anime({
        targets: '#leo-castelli',
        marginLeft: '0vw',
        duration: 400,
        easing: 'easeInOutExpo',
      })
    var cursorScale = anime({
      targets: '#cursor',
      rotate: '45deg',
      scale: 2,
    })
  })

  $('.sidebar').click('click touchstart', function() {
    var sidebar = anime({
          targets: '.sidebar',
          marginLeft: '-55vw',
          duration: 400,
          easing: 'easeInOutExpo',
        })
      var cursorScale = anime({
        targets: '#cursor',
        rotate: '0deg',
        scale: 1,
      })
    })


    $('.rothko').click('click touchstart', function() {
      var sidebar = anime({
            targets: '#mark-rothko',
            marginLeft: '0vw',
            duration: 400,
            easing: 'easeInOutExpo',
          })
        var cursorScale = anime({
          targets: '#cursor',
          rotate: '45deg',
          scale: 2,
        })
      })
    
      $('.sidebar').click('click touchstart', function() {
        var sidebar = anime({
              targets: '.sidebar',
              marginLeft: '-55vw',
              duration: 400,
              easing: 'easeInOutExpo',
            })
          var cursorScale = anime({
            targets: '#cursor',
            rotate: '0deg',
            scale: 1,
          })
        })

        $('.parsons').click('click touchstart', function() {
          var sidebar = anime({
                targets: '#betty-parsons',
                marginLeft: '0vw',
                duration: 400,
                easing: 'easeInOutExpo',
              })
            var cursorScale = anime({
              targets: '#cursor',
              rotate: '45deg',
              scale: 2,
            })
          })
        
          $('.sidebar').click('click touchstart', function() {
            var sidebar = anime({
                  targets: '.sidebar',
                  marginLeft: '-55vw',
                  duration: 400,
                  easing: 'easeInOutExpo',
                })
              var cursorScale = anime({
                targets: '#cursor',
                rotate: '0deg',
                scale: 1,
              })
            })

            $('.century').click('click touchstart', function() {
              var sidebar = anime({
                    targets: '#century-gallery',
                    marginLeft: '0vw',
                    duration: 400,
                    easing: 'easeInOutExpo',
                  })
                var cursorScale = anime({
                  targets: '#cursor',
                  rotate: '45deg',
                  scale: 2,
                })
              })
            
              $('.sidebar').click('click touchstart', function() {
                var sidebar = anime({
                      targets: '.sidebar',
                      marginLeft: '-55vw',
                      duration: 400,
                      easing: 'easeInOutExpo',
                    })
                  var cursorScale = anime({
                    targets: '#cursor',
                    rotate: '0deg',
                    scale: 1,
                  })
                })

                $('.janis').click('click touchstart', function() {
                  var sidebar = anime({
                        targets: '#janis-gallery',
                        marginLeft: '0vw',
                        duration: 400,
                        easing: 'easeInOutExpo',
                      })
                    var cursorScale = anime({
                      targets: '#cursor',
                      rotate: '45deg',
                      scale: 2,
                    })
                  })
                
                  $('.sidebar').click('click touchstart', function() {
                    var sidebar = anime({
                          targets: '.sidebar',
                          marginLeft: '-55vw',
                          duration: 400,
                          easing: 'easeInOutExpo',
                        })
                      var cursorScale = anime({
                        targets: '#cursor',
                        rotate: '0deg',
                        scale: 1,
                      })
                    })


                    $('.moma').click('click touchstart', function() {
                      var sidebar = anime({
                            targets: '#moma',
                            marginLeft: '0vw',
                            duration: 400,
                            easing: 'easeInOutExpo',
                          })
                        var cursorScale = anime({
                          targets: '#cursor',
                          rotate: '45deg',
                          scale: 2,
                        })
                      })
                    
                      $('.sidebar').click('click touchstart', function() {
                        var sidebar = anime({
                              targets: '.sidebar',
                              marginLeft: '-55vw',
                              duration: 400,
                              easing: 'easeInOutExpo',
                            })
                          var cursorScale = anime({
                            targets: '#cursor',
                            rotate: '0deg',
                            scale: 1,
                          })
                        })


$('#info-button').click('click touchstart', function() {
   var sidebar = anime({
      targets: '.info-popup',
      translateX:'-50%',
       translateY:'-50%',
       opacity: 1,
       scale: 1,
       duration: 400,
       easing: 'easeInOutExpo',
      })
    var haze = anime({
      targets:'#haze',
      scale: 1,
      opacity: '0.85',
    })
    var cursorScale = anime({
      targets: '#cursor',
      rotate: '45deg',
      scale: 2,
      })
})

$('#haze').click('click touchstart', function() {
  var sidebar = anime({
     targets: '.info-popup',
     translateX:'-50%',
      translateY:'-50%',
      opacity: 0,
      scale: 0,
      duration: 400,
      easing: 'easeInOutExpo',
     })
   var haze = anime({
     targets:'#haze',
     scale: 0,
     opacity: '0',
   })
   var cursorScale = anime({
     targets: '#cursor',
     rotate: '0deg',
     scale: 1,
     })
})





$(function() {
  var letsdraw = false;

  var theCanvas = document.getElementById('paint');
  var ctx = theCanvas.getContext('2d');
  theCanvas.width = 420;
  theCanvas.height = 300;

  var canvasOffset = $('#paint').offset();

  $('#paint').mousemove(function(e) {
    if (letsdraw === true) {
      ctx.lineTo(e.pageX - canvasOffset.left, e.pageY - canvasOffset.top);
      ctx.stroke();
    }
  });

  $('#paint').mousedown(function() {
    letsdraw = true;
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(e.pageX - canvasOffset.left, e.pageY - canvasOffset.top);
  });

  $(window).mouseup(function() {
    letsdraw = false;
  });
});


// close document.ready
});