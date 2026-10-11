$(function () {
    WaitForFunction();
});
function WaitForFunction() {
    try {
        if (!videojs) {
            setTimeout(WaitForFunction, 100);
            return;
        }
        AutoAdvance();
        ButtonReveal();
    }
    catch(error) {
        setTimeout(WaitForFunction, 100);
        return;
    }
} 




function AutoAdvance() {
        var myPlayer = videojs("myPlayerId");
        console.log("MyPlayerID set");
        $.fn.scrollView = function () {
            return this.each(function () {
              $('html, body').animate({
                scrollTop: $(this).offset().top - 64
              }, 1000);
            });
        }
        
          myPlayer.ready(function(){
            myPlayer.on('ended',function() {
            $('.store-next-page').click();
            });
         /* myPlayer.on('play', function() {
            $('#exitpopup_bg').fadeIn();
            $('.vsl-container').scrollView();
        });
        myPlayer.on('pause', function() {
            $('#exitpopup_bg').fadeOut();
        }); */
    });
}

    function timeJumper(timestamp) {
        var myPlayer = videojs("myPlayerId");
        myPlayer.ready(function(){
        myPlayer.currentTime(timestamp);
        });
     }

    function ButtonReveal() {
        console.log("ButtonReveal active. Set for " + (buttonTime/1000)/60);
        var myPlayer = videojs("myPlayerId");
        myPlayer.ready(function(){
        setInterval(function(){
        if (myPlayer.currentTime() > (buttonTime/1000)) {
        $('.btn-hidden').css("display","inline");
        $('.textPop').css("display", "inline");
        console.log('button popped');
        }
        }, 1000);
    });
    }
