let day=document.getElementById('day');
let hours=document.getElementById('hours');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
let endDate=new Date(2022, 4, 3, 00,00);
let endTime=endDate.getTime();

const countDown=()=>{
    let todayDate=new Date();
    let todayTime=todayDate.getTime();
    let remainingTime=endTime-todayTime;
    let oneMin=60*1000;
    let OneHours=60*oneMin;
    let oneDay=24*OneHours;

    let set=num=>(num<10?`0${num}`:num);
    if(endTime<todayTime){
        clearInterval(i);
        document.querySelector(
            ".countdown"
        ).innerHTML=`<h1>Countdown end</h1>`;
    }else{
        let dayLeft=Math.floor((remainingTime/oneDay)-30);
        let hoursLeft=Math.floor((remainingTime%oneDay)/OneHours);
        let minLeft=Math.floor((remainingTime%OneHours)/oneMin);
        let secLeft=Math.floor((remainingTime%oneMin)/1000);

        day.textContent=set(dayLeft);
        hours.textContent=set(hoursLeft);
        min.textContent=set(minLeft);
        sec.textContent=set(secLeft);
    }
}
let i=setInterval(countDown,1000);
countDown()
