
$(document).ready(function () {

// Page load fade in
// jQuery(function($){
//     $(document).ajaxSend(function() {
//         $(".loading").fadeIn(3000);　
//     });
        
//     $('body').ready(function(){
//         $.ajax({
//             type: 'GET',
//             success: function(data){
//                 console.log(data);
//             }
//         }).done(function() {
//             setTimeout(function(){
//                 $(".loading").fadeOut(300);
//             },500);
//         });
//     }); 
// });

$(document).ready(function(){
  var load = anime({
    targets:".loading",
    left: '-100vw',
    duration: '600ms',
    delay: 1000,
  })
  var intro = anime({
    targets:"#intro",
    top: '28px',
    duration: '60s',
    delay: 1000,
  })
})


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


  $('.source').mouseover(function(){
      var load = anime({
        targets:'#cursor',
        rotate: '45deg',
        width: 45,
        duration: 1000,
      })
    })


$('#intro').click(function(){
  var load = anime({
    targets:"#intro",
    height: '30px',
    duration: 1000,
  })
})

$('#intro').mouseover(function(){
  var expandIntro = anime({
    targets:"#intro",
    height: '305px'
  })
  var load = anime({
    targets:"#cursor",
    rotate: '45deg',
    duration: 1000,
  })
})

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

    $('#image19').mouseover('click touchstart', function() {
      var caption = anime({
            targets: '#de-kooning-1',
            opacity: 1,
            duration: 600,
          })
  });
  $('#image19').mouseleave('click touchstart', function() {
      var caption = anime({
            targets: '#de-kooning-1',
            opacity: 0,
            duration: 600,
          })
  });

  $('#image20').mouseover('click touchstart', function() {
    var caption = anime({
          targets: '#de-kooning-1',
          opacity: 1,
          duration: 600,
        })
});
$('#image20').mouseleave('click touchstart', function() {
    var caption = anime({
          targets: '#de-kooning-1',
          opacity: 0,
          duration: 600,
        })
});


$('#image21').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '#tavern-1',
        opacity: 1,
        duration: 600,
      })
});
$('#image21').mouseleave('click touchstart', function() {
  var caption = anime({
        targets: '#tavern-1',
        opacity: 0,
        duration: 600,
      })
});

$('#image22').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '#tavern-2',
        opacity: 1,
        duration: 600,
      })
});
$('#image22').mouseleave('click touchstart', function() {
  var caption = anime({
        targets: '#tavern-2',
        opacity: 0,
        duration: 600,
      })
});
$('#image23').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '#tavern-3',
        opacity: 1,
        duration: 600,
      })
});
$('#image23').mouseleave('click touchstart', function() {
  var caption = anime({
        targets: '#tavern-3',
        opacity: 0,
        duration: 600,
      })
});
$('#image24').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '#kline-1',
        opacity: 1,
        duration: 600,
      })
});
$('#image24').mouseleave('click touchstart', function() {
  var caption = anime({
        targets: '#kline-1',
        opacity: 0,
        duration: 600,
      })
});

$('#image25').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '#kline-2',
        opacity: 1,
        duration: 600,
      })
});
$('#image25').mouseleave('click touchstart', function() {
  var caption = anime({
        targets: '#kline-2',
        opacity: 0,
        duration: 600,
      })
});

$('#image26').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '#krasner-1',
        opacity: 1,
        duration: 600,
      })
});
$('#image26').mouseleave('click touchstart', function() {
  var caption = anime({
        targets: '#krasner-1',
        opacity: 0,
        duration: 600,
      })
});
$('#image27').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '#krasner-2',
        opacity: 1,
        duration: 600,
      })
});
$('#image27').mouseleave('click touchstart', function() {
  var caption = anime({
        targets: '#krasner-2',
        opacity: 0,
        duration: 600,
      })
});
$('#image28').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '#studio35-1',
        opacity: 1,
        duration: 600,
      })
});
$('#image28').mouseleave('click touchstart', function() {
  var caption = anime({
        targets: '#studio35-1',
        opacity: 0,
        duration: 600,
      })
});
$('#image29').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '#studio35-2',
        opacity: 1,
        duration: 600,
      })
});
$('#image29').mouseleave('click touchstart', function() {
  var caption = anime({
        targets: '#studio35-2',
        opacity: 0,
        duration: 600,
      })
});
$('#image30').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '#studio35-2',
        opacity: 1,
        duration: 600,
      })
});
$('#image30').mouseleave('click touchstart', function() {
  var caption = anime({
        targets: '#studio35-2',
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
      var caption = anime({
        targets: '#intro',
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
      var caption = anime({
        targets: '#intro',
        color: '#be4d4a',
        duration: 600,
      })
});

$('.midtown').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '.midtown',
        borderColor: '#be4d4a',
        duration: 600,
      })
      var caption = anime({
        targets: '.image-caption',
        color: '#cb774f',
        duration: 600,
      })
      var caption = anime({
        targets: '#intro',
        color: '#cb774f',
        duration: 600,
      })
});

$('.chelsea').mouseover('click touchstart', function() {
  var caption = anime({
        targets: '.chelsea',
        borderColor: '#129AA0',
        duration: 600,
      })
      var caption = anime({
        targets: '.image-caption',
        color: '#129AA0',
        duration: 600,
      })
      var caption = anime({
        targets: '#intro',
        color: '#129AA0',
        duration: 600,
      })
});


$(window).load(function() {
  var pageLoad = anime({
    targets: '.image',
    scale: 1.05,
    opacity: 1,
    duration: 10000,
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
    var closeSidebar = anime({
      targets:'.close-sidebar',
      left:'50vw'
    })
  })

  
  $('.kline').click('click touchstart', function() {
    var sidebar = anime({
          targets: '#kline',
          marginLeft: '0vw',
          duration: 400,
          easing: 'easeInOutExpo',
        })
      var cursorScale = anime({
        targets: '#cursor',
        rotate: '45deg',
        scale: 2,
      })
      var closeSidebar = anime({
        targets:'.close-sidebar',
        left:'50vw'
      })
    })

    
    $('.krasner').click('click touchstart', function() {
      var sidebar = anime({
            targets: '#krasner',
            marginLeft: '0vw',
            duration: 400,
            easing: 'easeInOutExpo',
          })
        var cursorScale = anime({
          targets: '#cursor',
          rotate: '45deg',
          scale: 2,
        })
        var closeSidebar = anime({
          targets:'.close-sidebar',
          left:'50vw'
        })
      })

      $('.studio35').click('click touchstart', function() {
        var sidebar = anime({
              targets: '#studio35',
              marginLeft: '0vw',
              duration: 400,
              easing: 'easeInOutExpo',
            })
          var cursorScale = anime({
            targets: '#cursor',
            rotate: '45deg',
            scale: 2,
          })
          var closeSidebar = anime({
            targets:'.close-sidebar',
            left:'50vw'
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
        var closeSidebar = anime({
          targets:'.close-sidebar',
          scale: 1,
          easing: 'easeInOutQuad',
          duration:200,
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
            var closeSidebar = anime({
              targets:'.close-sidebar',
              scale: 1,
              opacity: 0.85,
              easing: 'easeInOutQuad',
              duration:200,
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
                var closeSidebar = anime({
                  targets:'.close-sidebar',
                  scale: 1,
                  opacity: 0.85,
                  easing: 'easeInOutQuad',
                  duration:200,
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
                    var closeSidebar = anime({
                      targets:'.close-sidebar',
                      scale: 1,
                      opacity: 0.85,
                      easing: 'easeInOutQuad',
                      duration:200,
                    })
                  })
                


                    $('.moma').click('click touchstart', function() {
                      var sidebar = anime({
                            targets: '#moma',
                            marginLeft: '0vw',
                            duration: 400,
                            easing: 'easeInOutExpo',
                          })
                          var closeSidebar = anime({
                            targets:'.close-sidebar',
                            scale: 1,
                            opacity: 0.85,
                            easing: 'easeInOutQuad',
                            duration:200,
                          })
                        var cursorScale = anime({
                          targets: '#cursor',
                          rotate: '45deg',
                          scale: 2,
                        })
                      })
                    
                      

                        $('.de-kooning').click('click touchstart', function() {
                          var sidebar = anime({
                                targets: '#de-kooning',
                                marginLeft: '0vw',
                                duration: 400,
                                easing: 'easeInOutExpo',
                              })
                              var closeSidebar = anime({
                                targets:'.close-sidebar',
                                scale: 1,
                                opacity: 0.85,
                                easing: 'easeInOutQuad',
                                duration:200,
                              })
                            var cursorScale = anime({
                              targets: '#cursor',
                              rotate: '45deg',
                              scale: 2,
                            })
                          })

                          $('.tavern').click('click touchstart', function() {
                            var sidebar = anime({
                                  targets: '#tavern',
                                  marginLeft: '0vw',
                                  duration: 400,
                                  easing: 'easeInOutExpo',
                                })
                              var closeSidebar = anime({
                                targets:'.close-sidebar',
                                scale: 1,
                                opacity: 0.85,
                                easing: 'easeInOutQuad',
                                duration:200,
                              })
                              var cursorScale = anime({
                                targets: '#cursor',
                                rotate: '45deg',
                                scale: 2,
                              })
                            })

                            $('.sidebar, .close-sidebar').click('click touchstart', function() {
                              var sidebar = anime({
                                    targets: '.sidebar',
                                    marginLeft: '-55vw',
                                    duration: 400,
                                    easing: 'easeInOutExpo',
                                  })
                                var sidebar = anime({
                                  targets:'.close-sidebar',
                                  scale: 0,
                                  opacity: 0,
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

$('.image').mouseover('click touchstart', function() {
  var sidebar = anime({
     targets: '#cursor',
      width: '45px',
      height: '45px',
      duration: 400,
      easing: 'easeInOutExpo',
     })
})

$body = $("body");


var translateX = 0,
    translateY = 0,
    translateZ = 0,
    stepZ = 3,
    initial_obj_X = 0,
    initial_obj_Y = 0,
    initial_mouse_X = 0,
    initial_mouse_Y = 0;

  function apply_coords() {
    $("#container").css("transform", 'perspective(100px) translate3d(' + translateX + 'px, ' + translateY + 'px, ' + translateZ + 'px)');
  }



  $("#container").on("mousewheel DOMMouseScroll", function(e) {

    e.preventDefault();
    var delta = e.delta || e.originalEvent.wheelDelta;
    var zoomOut;

    if (delta === undefined) {
      delta = e.originalEvent.detail;
      zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
      zoomOut = !zoomOut;
    } else {
      zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
    }
    if (zoomOut) {
      translateZ = translateZ - stepZ;
    } else {
      translateZ = translateZ + stepZ;
    }

    if (translateZ > 40){
      return
    }
    if (-translateZ > 90){
      return
    }
    console.log(translateZ)
    apply_coords();
  });




  // var myVar;

  // function myFunction() {
  //   myVar = setTimeout(showPage, 3000);
  // }
  
  // function showPage() {
  //   document.getElementById("loading").style.display = "none";
  //   // document.getElementById("body").style.display = "block";
  // }



// close document.ready
});
