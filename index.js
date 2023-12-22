var mySong=document.getElementById('mySong');
        var icon=document.getElementById('icon');
        var logo=document.getElementById('logo');
        var content=document.getElementById('content');
        var firstBackgroundContainer = document.getElementById('firstBackgroundContainer');
        var secondBackgroundContainer = document.getElementById('secondBackgroundContainer');
        icon.onclick=function(){
            if(mySong.paused){
                mySong.play();
                icon.src="media/pause.png";
                // 첫 번째 배경 이미지 숨기기
                firstBackgroundContainer.classList.add('hidden');
                // 두 번째 배경 이미지 표시
                secondBackgroundContainer.classList.remove('hidden');
                //숨기기
                content.style.display = 'none';
                logo.style.display = 'none';
            }
            else{
                mySong.pause();
                icon.src="media/play.png";
                // 첫 번째 배경 이미지 표시
                firstBackgroundContainer.classList.remove('hidden');
                // 두 번째 배경 이미지 숨기기
                secondBackgroundContainer.classList.add('hidden');
                // 다시 표시
                content.style.display = 'block';
                logo.style.display = 'block';
            }
        }