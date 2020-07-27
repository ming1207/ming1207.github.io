
    $(function () {
//        ------------------------

        var media = $('#media')[0];
        media.src="../audio/mp.mp3";
        var audioTimer = null;
//绑定播放暂停控制
        playAudio();
        $('.play').bind('click', function() {
            playAudio();
        });
//播放暂停切换
        function playAudio() {
            if(media.paused) {
                play();
            } else {
                pause();
            }
        }
//播放
        function play() {
            media.play();
//            $('#play').html('Pause');
            $('.v1').css('display','none');
            $('.v2').css('display','block');
        }
//暂停
        function pause() {
            media.pause();
//            $('#play').html('Play');
            $('.v2').css('display','none');
            $('.v1').css('display','block');
        }

        document.addEventListener("WeixinJSBridgeReady", function () {  
            play();  
        }, false);  
        document.addEventListener('YixinJSBridgeReady', function() {  
            play();  
        }, false);   
    });
    $(function () {
        $('#dowebok').fullpage({
//            'navigation': true,
            autoScrolling:true,
            scrollOverflow:true,
            css3: true,
            easing: 'ease',
            resize:true,
//            anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6', 'page7', 'page8', 'page9', 'page10', 'page11'],
            'afterLoad': function (anchorLink, index) {
                if (index == 1) {
                    $('#sy1,#sy2').addClass('animated fadeInUp');
                } else if (index == 2) {
                    $('.timer').text('10000');
                    $('#su2,#su3').addClass('animated fadeInUp');
                    $('.circle3').addClass('rotate2');
                    $('.p3').addClass('animated fadeInUp');/*2*/
                    $('.p31,.p32,.p33').addClass('animated bounceIn');/*4*/
                    $('.light').addClass('animated flash');

                } else if (index == 3) {
                   
                    $('#si1,.timer').addClass('animated fadeInUp');
                    $('#si3').addClass('animated bounceIn');
        
                    $('#si2').addClass('animated flash');
                    $('#si2').addClass('animated ct');


//数字滚动
 $.fn.countTo = function (options) {
        options = options || {};
        
        return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from:            $(this).data('from'),
                to:              $(this).data('to'),
                speed:           $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals:        $(this).data('decimals')
            }, options);
            
            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;
            
            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};
            
            $self.data('countTo', data);
            
            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);
            
            // initialize the element with the starting value
            render(value);
            
            function updateTimer() {
                value += increment;
                loopCount++;
                
                render(value);
                
                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }
                
                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;
                    
                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }
            
            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };
    
    $.fn.countTo.defaults = {
        from: 0,               // the number the element should start at
        to: 0,                 // the number the element should end at
        speed: 1000,           // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,           // the number of decimal places to show
        formatter: formatter,  // handler for formatting the value before rendering
        onUpdate: null,        // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
    };
    
    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }



  // custom formatting example
  $('#count-number').data('countToOptions', {
    formatter: function (value, options) {
      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    }
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
  }
                } else if (index == 4) {  
                    $('.timer').text('10000');
                    $('#so1,#so2,#so3').addClass('animated fadeInUp');
                    $('#jiantou').addClass('animated zoomIn');
                    $('#cloud').addClass('animated bounceIn');
                    $('#so4').addClass('animated bounceIn');
                } else if (index == 5) {
                    $('#sp1').addClass('animated fadeInUp');
                    $('#sp2').addClass('animated fadeInUp');
                    $('#sp3').addClass('animated bounceIn');
                    $('#line1').addClass('words');
                    $('#line2').addClass('words2');


                } else if (index == 6) {
                    $('#sa1,#sa2,#sa3').addClass('animated fadeInUp'); 
                    $('#zuo,#you,#middle').addClass('animated bounceIn');   
                    $('#map').addClass('animated slideInUp');  
                    // $('#map').addClass('ct');              /*4*/
                } else if (index == 7) {
                    $('#ss1,#ss2,#ss3,#ss4,#ss5,#ss6,#ss7,#ss8,#ss9').addClass('animated fadeInUp');                    /*4*/
                    // $('.map').addClass('rotate');
                } else if (index == 8) {
                    $('#sd1').addClass('animated fadeInUp');
                    $('#sd2').addClass('animated fadeInUp');
                    $('#sd3').addClass('animated fadeInUp');
                

                } 
            }
        });

       $.fn.fullpage.setAutoScrolling(true);

//		-------------









    });
$(function(){
    $('.share').on('click',function(){
        $('.go_img').toggle();
        $('.go_img').addClass('animated bounceIn ');
    })
})

