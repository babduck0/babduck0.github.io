var mySong=document.getElementById('mySong');
        var icon=document.getElementById('icon');
        var logo=document.getElementById('logo');
        var text1=document.getElementById('text1');
        var text2=document.getElementById('text2');
        var container=document.querySelector('.container');
        icon.onclick=function(){
            if(mySong.paused){
                mySong.play();
                icon.src="media/pause.png";
                icon.style.width = "50px"; // 원하는 너비로 설정
                icon.style.height = "50px"; // 원하는 높이로 설정
                //숨기기
                text1.style.display = 'none';
                text2.style.display = 'none';
                logo.style.display = 'none';
                container.style.backgroundImage = "url('media/image.png')";
            }
            else{
                mySong.pause();
                icon.src="media/play.png";
                icon.style.width = ""; // 다시 기본 사이즈로 변경 
                icon.style.height = ""; // 다시 기본 사이즈로 변경 
                // 다시 표시
                text1.style.display = 'block';
                text2.style.display = 'block';
                logo.style.display = 'block';
                container.style.backgroundImage = "url('media/couple2.jpg')";
            }
        }