function display_random(){

    //process image source path
    var source=document.getElementById('face').src;
    var currentImg=source.substring(source.length-9);

    var images = new Array();
     images[0]="face1.jpg"
     images[1]="face2.jpg"
     images[2]="face3.jpg"
     images[3]="face4.jpg"

     var size=images.length;
     var x=Math.floor(size*Math.random())
     while (currentImg==images[x])
     {
        var x=Math.floor(size*Math.random())
     }
    $('#face').attr('src', images[x])
}