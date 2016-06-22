alert("welcome  slider");

var imagecount=1;
var total=4;

function slide(x)
{
    var imaged =document.getElementById('imgclass');
    imagecount=imagecount+x;
    if(imagecount>total)
        {
            imagecount=1;
        }
    if(imagecount<1)
        {
            imagecount=total;
        }
    imaged.src="Image/img" +imagecount+".jpg";
    
}