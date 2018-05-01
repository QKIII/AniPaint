var data = { "v": "5.1.1", "fr": 60, "ip": 0, "op": 31, "w": 800, "h": 600, "nm": "Burst", "ddd": 0, "assets": [], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "Shape Layer 1", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [395, 295, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "d": 1, "ty": "el", "s": { "a": 1, "k": [{ "i": { "x": [0.34, 0.34], "y": [1, 1] }, "o": { "x": [0.05, 0.05], "y": [0.57, 0.57] }, "n": ["0p34_1_0p05_0p57", "0p34_1_0p05_0p57"], "t": 0, "s": [0, 0], "e": [322, 322] }, { "i": { "x": [0.839, 0.839], "y": [0.56, 0.56] }, "o": { "x": [0.611, 0.611], "y": [0, 0] }, "n": ["0p839_0p56_0p611_0", "0p839_0p56_0p611_0"], "t": 19, "s": [322, 322], "e": [241, 241] }, { "t": 29 }], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "nm": "Ellipse Path 1", "mn": "ADBE Vector Shape - Ellipse", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0, 0, 0, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 1, "k": [{ "i": { "x": [0.74], "y": [0.39] }, "o": { "x": [0.55], "y": [0] }, "n": ["0p74_0p39_0p55_0"], "t": 4, "s": [51], "e": [0] }, { "t": 30 }], "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [5, 5], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Ellipse 1", "np": 3, "cix": 2, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 31, "st": 0, "bm": 0 }], "markers": [] }


var counter = 1

$("#follower").click(function(e) {

  counter++

  $("#follower").append('<div class="bm" id="bm-' + counter + '"> </div>')
  var animation = lottie.loadAnimation({
      container: document.getElementById('bm-' + counter),
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: data

  })


  animation.goToAndPlay(0, 0)
  $('#bm-' + counter).css({
      left: e.pageX - 200,
      top: e.pageY - 200
  });
  if (counter >= 20) {

      $("#bm-" + (counter - 20)).remove();
      };



  });

        // // $(document).bind('mousemove', function(e){
        //     $('#follower').css({
        //        left:  e.pageX - 200,
        //        top:   e.pageY - 200
        //     });
        // // });


        // var speedChange =function(){

        //  animation.setSpeed($("#speedSlide").val());
        // }


        // var sizeChange =function(){

        //  $(p).attr("stroke-width", $("#sizeSlide").val());
        // }




        // $("#speedSlide").change(function(){

        //  animation.setSpeed(this.value);
        // })


        // var bigger = 1
        // $(".plus").click(function(){
        //  bigger++
        //   $(p).attr("stroke-width", bigger);
        // });



        // var count = 1
        // $(".plus").click(function(){
        //  count++
        //  animation.setSpeed(count)
        // });
        // $(".minus").click(function(){
        //  count-=.1
        //  animation.setSpeed(count)
        // });