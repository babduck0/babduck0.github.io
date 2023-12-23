var mySong=document.getElementById('mySong');
var icon=document.getElementById('icon');
var logo=document.getElementById('logo');
var text1=document.getElementById('text1');
var text2=document.getElementById('text2');
var container=document.querySelector('.container');

if (mySong && icon && logo && text1 && text2 && container) {
    icon.onclick=function(){
        if(mySong.paused){
            mySong.play();
            icon.src="media/pause.png";
            icon.style.width = "50px";
            icon.style.height = "50px";
            text1.style.display = 'none';
            text2.style.display = 'none';
            logo.style.display = 'none';
            container.style.backgroundImage = "url('media/myletter_3m.jpg')";
            container.style.backgroundSize = "contain"
            container.style.paddingTop = "30px"
            container.style.paddingBottom = "30px"
        }
        else{
            mySong.pause();
            icon.src="media/play.png";
            icon.style.width = "";
            icon.style.height = "";
            text1.style.display = 'block';
            text2.style.display = 'block';
            logo.style.display = 'block';
            container.style.backgroundImage = "url('media/couple2.jpg')";
            container.style.backgroundSize = "cover"
            container.style.paddingTop = ""
            container.style.paddingBottom = ""
        }
    }
} else {
    console.log("하나 이상의 요소가 존재하지 않습니다.");
}
