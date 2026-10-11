// JavaScript Document
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
        VideoLightbox();
    }
    catch(error) {
        setTimeout(WaitForFunction, 100);
        return;
    }
} 




function AutoAdvance() {
        var myPlayer = videojs("myPlayerId");
        console.log("MyPlayerID set");        
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
        $('.btn-hidden').css("display","inherit");
        $('.btn-hidden').css("display","block !important");
        $('.textPop').css("display", "block");
        console.log('button popped');
        jtag.send({saw_button_pop: "true"});
        }
        }, 1000);
    });
}

    
function VideoLightbox() {
			$.fn.scrollView = function () {
				 return this.each(function () {
				   $('html, body').animate({
					 scrollTop: $(this).offset().top - 64
				   }, 1000);
				 });
				}
				var myPlayer = videojs("myPlayerId");
				var originalWidth = $('.videoHolder').width();
				var mq = window.matchMedia( "(max-width: 600px)" );
					if (mq.matches) {  
						myPlayer.on('playing', () => {
							$('#exitpopup_bg').fadeIn();
							$('.videoHolder').animate({width:originalWidth},100);
							$('.videoHolder').scrollView();
							window.scrollTo();
						});
					}
					else {
						myPlayer.on('playing', () => {
							$('#exitpopup_bg').fadeIn();
							$('.videoHolder').animate({width:"70vw"},100);
							$('.videoHolder').scrollView();
							window.scrollTo();
						});
					}
					myPlayer.on('pause', () =>{
						$('#exitpopup_bg').fadeOut();
						$('.videoHolder').animate({width:originalWidth},100);
					});
			}
 