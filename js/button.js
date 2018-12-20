function picture(){
        var pic = "http://img.tesco.com/Groceries/pi/118/5000175411118/IDShot_90x90.jpg"
        document.getElementById('bigpic').src = pic.replace('90x90', '225x225');
        document.getElementById('bigpic').style.display='block';
        }
