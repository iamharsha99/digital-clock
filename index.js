function clock()
{
    let now=new Date();
    let hrs=now.getHours().toString().padStart(2,0);
    let mins=now.getMinutes().toString().padStart(2,0);
    let secs=now.getSeconds().toString().padStart(2,0);
    let time=hrs+':'+mins+':'+secs;
    console.log(time);
    document.getElementById('time').innerHTML=time;
}
setInterval(clock,1000);
