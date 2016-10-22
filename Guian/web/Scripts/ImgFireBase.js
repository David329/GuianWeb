document.onreadystatechange = function () {
    var fire=Fire();
    var storageRef=fire.storage().ref();

    var imagesRef=storageRef.child('Web');

    imagesRef.child('SinglePage/circle.png').getDownloadURL().then(function(url){  
    document.getElementById("mycircle").src = url;
    });

    imagesRef.child('SinglePage/map.svg').getDownloadURL().then(function(url){      
    document.getElementById("mymap").src = url;
    });

    imagesRef.child('SinglePage/audio.png').getDownloadURL().then(function(url){      
    document.getElementById("myaudio").src = url;
    });

    imagesRef.child('SinglePage/machu.jpg').getDownloadURL().then(function(url){      
    document.getElementById("mymachu").src = url;
    });

    imagesRef.child('SinglePage/machu.jpg').getDownloadURL().then(function(url){      
    document.getElementById("mymachu2").src = url;
    });

    imagesRef.child('SinglePage/iphone.gif').getDownloadURL().then(function(url){      
    document.getElementById("myiphone").src = url;
    });

    imagesRef.child('SinglePage/share.ico').getDownloadURL().then(function(url){      
    document.getElementById("myshare").src = url;
    });

    imagesRef.child('SinglePage/offline.png').getDownloadURL().then(function(url){      
    document.getElementById("myoffline").src = url;
    });

    imagesRef.child('SinglePage/qr.jpg').getDownloadURL().then(function(url){      
    document.getElementById("myqr").src = url;
    });
    
    imagesRef.child('SinglePage/coliseo.jpg').getDownloadURL().then(function(url){      
    document.getElementById("mycoliseo").src = url;
    });
    
    imagesRef.child('SinglePage/pisa.jpg').getDownloadURL().then(function(url){      
    document.getElementById("mypisa").src = url;
    });
    
    imagesRef.child('SinglePage/1.png').getDownloadURL().then(function(url){      
    document.getElementById("myslide1").src = url;
    });
    
    imagesRef.child('SinglePage/2.png').getDownloadURL().then(function(url){      
    document.getElementById("myslide2").src = url;
    });
    
    imagesRef.child('SinglePage/3.png').getDownloadURL().then(function(url){      
    document.getElementById("myslide3").src = url;
    });
    
    imagesRef.child('SinglePage/4.png').getDownloadURL().then(function(url){      
    document.getElementById("myslide4").src = url;
    });
    
    imagesRef.child('SinglePage/5.png').getDownloadURL().then(function(url){      
    document.getElementById("myslide5").src = url;
    });
    
    imagesRef.child('SinglePage/6.png').getDownloadURL().then(function(url){      
    document.getElementById("myslide6").src = url;
    });
}
