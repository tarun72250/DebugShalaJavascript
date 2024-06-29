function showTime() 
{
    let d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session = "AM";

    //3.if we want to add AM to PM logic 
    if(h >=12)
    {
        session="PM"
    }
    

     //2. if hours is greater than 12
     if (h > 12) 
     {
         h = h - 12;
         //13-12 -1;
     }

    //1. if h m s is less than 10 so concat 0
    h = h < 10 ? "0" + h : h;//ternary operator used 
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

   

    var time = h + " : " + m + " : " + s + " " + session;
    document.getElementsByTagName("h1")[0].innerHTML = time;
    setTimeout(showTime, 1000);
}
