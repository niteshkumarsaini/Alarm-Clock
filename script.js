const buttonIndia = document.getElementById('buttonIndia');
const buttonEngland = document.getElementById('buttonEngland');
const buttonUS = document.getElementById('buttonUS');
const buttonCanada = document.getElementById('buttonCanada');
const addAlarm = document.getElementById('addAlarm');
const alarmCont = document.getElementById('alarmCont');
const closebtn = document.getElementById('closebtn');
var addAudio = new Audio('sounds/add.mp3');
var alarmAudio = new Audio('sounds/alarm.mp3');


var elementsDetails =[



]

const elementCreation=(time,name,desc)=>{
    
    var alarmElement = `<div class="mx-2 elements" id="alarmElem">
    <div class="card" id="card">
      <div class="card-body" id="cardBody">
        <h5 class="card-title">Alarm Schedule</h5>
        <p class="card-text">${name} your alarm is scheduled at ${time}<br> Description- ${desc}</p>
        <button class="btn btn-outline-success" onclick="deleteFun()" value=${new Date().getTime()}>Delete</button>
      </div>
      </div>
    </div>`
          alarmCont.insertAdjacentHTML('beforeend', alarmElement);
    return alarmElement;
}
const domupdate=()=>{
    if(elementsDetails.length===0){
        console.log("No Data Found");
    }
    else{
    for (i=0; i<elementsDetails.length; i++){
        elementCreation(elementsDetails[i].time,elementsDetails[i].name,elementsDetails[i].desc)
    }
    }
}

var storageData=JSON.parse(localStorage.getItem('alarms'));
if(storageData!==null){
    elementsDetails=storageData;
    domupdate();
}



const updatingStorage=()=>{
localStorage.setItem('alarms',JSON.stringify(elementsDetails));

}

setInterval(() => {
    document.getElementById('next').click();
   
}, 5000)



const us = () => {
    let date = new Date()
    let mydate = date.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }).split(',')[1]
    document.getElementById('us').innerHTML = mydate;
}

const india = () => {
    let date = new Date()
    let mydate = date.toLocaleString().split(',')[1];
    document.getElementById('india').innerHTML = mydate;

}
const england = () => {
    let date = new Date()
    let mydate = date.toLocaleString('en-GB', { timeZone: 'Europe/London' }).split(',')[1]
    let additionPart = Number(mydate.split(':')[0]) > 12 ? 'PM' : 'AM';
    document.getElementById('england').innerHTML = `${mydate} ${additionPart}`
}
const canada = () => {
    let date = new Date()
    let mydate = date.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }).split(',')[1];
    document.getElementById('canada').innerHTML = mydate;
}
function callAll() {
    us()
    canada()
    india()
    england()
}
setInterval(callAll, 1000);

buttonIndia.addEventListener('click', () => {
    document.getElementById('modalTitle').innerHTML = "About India";
    document.getElementById('modalBody').innerHTML = `
    India has only one time zone. The country has officially observed India Standard Time (IST) since 1947. However, the UTC+5:30 offset has been used as the local standard time in India since 1906.
India is a large country that stretches almost 3000 kilometers (1864 miles) from west to east. It spans nearly 30 degrees longitude (68°7'E to 97°25'E). If the country were to base its time zones on mean solar time, it would have three time zones, but since it only has one, the Sun rises almost 90 minutes earlier in Dong in the far east than in Guar Mota in the west.
<br> <hr><b>Tea Garden Time</b> <br>
Tea Garden Time is an informal time zone used in India's northeastern state Assam. There the clocks are unofficially set one hour ahead of IST (UTC+6:30). In this part of the country, sunrise can come as early as 4:00 (4 am) IST in the morning and sunset at 16:00 (4 pm) IST in the afternoon.

Tea Garden Time, translated as “Chai Bagan Time,” was introduced by the British tea companies to increase daylight work hours and thus productivity and is still in use today.
`;
});

buttonEngland.addEventListener("click", () => {
    document.getElementById('modalTitle').innerHTML = "About England";
    document.getElementById('modalBody').innerHTML = ` <b> How Many Time Zones Are There in the UK?</b>
   <br><hr>
The United Kingdom has one standard time zone. The overseas territories and crown dependencies of the UK bring the total to 9 time zones. <br>
<br><b>History of Time Zones in the UK</b><hr>
The United Kingdom was one of the first countries to use a standard time for the whole country, instead of each place keeping its own local mean time.

The UK's capital, London, changed from London Time to Greenwich Mean Time in 1847.

GMT, or Railway Time, as it was known then, was first used by the UK's railway companies. Until 1972, GMT set the standard for standard for civil time worldwide. It referred to solar time at the prime meridian, which runs near the Royal Observatory in Greenwich. Today's world time standard, Coordinated Universal Time (UTC), is still located on the prime meridian (0°longitude).`

})
buttonCanada.addEventListener('click', () => {
    document.getElementById('modalTitle').innerHTML = "About Canada";
    document.getElementById('modalBody').innerHTML = `<b>How Many Time Zones Are There in Canada?</b><br>
    Canada has 6 standard time zones with 6 corresponding Daylight Saving Time (DST) time zones.<hr><b>Generalized Time Zones in Canada</b><br>Like in the US, Canada's time zones are often referred to by their generic name, without making a difference between standard time and Daylight Saving Time designations. For example, Central Time (CT) refers to Central Standard Time (CST) or Central Daylight Time (CDT), depending on which is currently in use.
    <br><hr> Note: Local time in these time zones changes when Daylight Saving Time begins and ends.`;

})
buttonUS.addEventListener('click', () => {
    document.getElementById('modalTitle').innerHTML = "About United States";
    document.getElementById('modalBody').innerHTML = `The United States uses nine standard time zones. From east to west they are Atlantic Standard Time (AST), Eastern Standard Time (EST), Central Standard Time (CST), Mountain Standard Time (MST), Pacific Standard Time (PST), Alaskan Standard Time (AKST), Hawaii-Aleutian Standard Time (HST), Samoa standard time (UTC-11) and Chamorro Standard Time (UTC+10). View the standard time zone boundaries.
    <br> <hr> Daylight Saving Time begins at 2:00 a.m. local time on the second Sunday in March. On the first Sunday in November areas on Daylight Saving Time return to Standard Time at 2:00 a.m. The names in each time zone change along with Daylight Saving Time. Eastern Standard Time (EST) becomes Eastern Daylight Time (EDT), and so forth. Arizona, Puerto Rico, Hawaii, U.S.`;


})

addAlarm.addEventListener('click', () => {
    var time = document.getElementById('inputTime').value;
    var name = document.getElementById('inputName').value;
    var desc = document.getElementById('inputDesc').value;
    if (time === '' || name === '' || desc === '') {

        document.getElementById('addAlarm').setAttribute("data-bs-toggle", "modal");
        document.getElementById('addAlarm').setAttribute("data-bs-target", "#dateTimeModal");
        document.getElementById('addAlarm').click()
        document.getElementById('addAlarm').removeAttribute('data-bs-toggle');
        document.getElementById('addAlarm').removeAttribute('data-bs-target');
    }
    else {
        let oldyear = Number(time.split('-')[0]);
        let oldmonth = Number(time.split('-')[1]);
        let olddate = Number(time.split('-')[2].split('T')[0]);
        let oldhour = Number(time.split('-')[2].split('T')[1].split(':')[0]);
        let oldmint = Number(time.split('-')[2].split('T')[1].split(':')[1]);
        let newYear=new Date().getFullYear();
        let newMonth=new Date().getMonth()+1;
        let newDate=new Date().getDate();
        let newHour=new Date().getHours();
        let newMint=new Date().getMinutes();
        if((oldyear<newYear) || (oldyear>=newYear && oldmonth<newMonth) || (oldyear>=newYear && oldmonth>=newMonth && olddate<newDate) || (oldyear>=newYear && oldmonth>=newMonth && olddate>=newDate && oldhour<newHour) || (oldyear>=newYear && oldmonth>=newMonth && olddate>=newDate && oldhour>=newHour && oldmint<newMint)){
            document.getElementById('addAlarm').setAttribute("data-bs-toggle", "modal");
            document.getElementById('addAlarm').setAttribute("data-bs-target", "#dateTimeModal");
            document.getElementById('addAlarm').click();
            document.getElementById('addAlarm').removeAttribute('data-bs-toggle');
            document.getElementById('addAlarm').removeAttribute('data-bs-target');
        }
        else{
            
        let alarmElement=elementCreation(time,name,desc);
        let id=alarmElement.split('value=')[1].split('>Delete')[0].trim();
        document.getElementById('addAlarm').classList.remove('btn-outline-success');
        addAudio.play()
        var myelement = {
    
            name: name,
            desc: desc,
            time: time,
            id:id
        }
        elementsDetails.push(myelement)
        updatingStorage();
        // console.log(elementsDetails)
        document.getElementById('addAlarm').innerHTML = "Added"
        document.getElementById('addAlarm').classList.add('btn-danger')
        document.getElementById('inputName').value = "";
        document.getElementById('inputDesc').value = "";
        document.getElementById('inputTime').value = "";
    }
}

});

closebtn.addEventListener('click', () => {
    document.getElementById('addAlarm').classList.add('btn-outline-success');
    document.getElementById('addAlarm').classList.remove('btn-danger')
    document.getElementById('addAlarm').innerHTML = "Add New";

});
const deleteFun = () => {

    let deletedValue = Number(event.target.value);
    let elementCollection = document.getElementsByClassName('elements');
    for (i = 0; i < elementCollection.length; i++) {
        var idd = Number(elementCollection[i].innerHTML.split('delete')[1].split('value=')[1].split('>')[0].split('"')[1]);

        const btn=document.createElement('button');
        btn.id="targetBtn";
        btn.setAttribute('data-bs-toggle','modal');
        btn.setAttribute('data-bs-target','#myalarmModal');
        btn.click();
        alarmCont.removeChild(elementCollection[i])
          elementsDetails.splice(i,1);
          updatingStorage();
        
    }
}
    
setInterval(()=>{
    let year=new Date().getFullYear();
    let month=new Date().getMonth()+1;
    let date=new Date().getDate();
    let hour=new Date().getHours();
    let mint=new Date().getMinutes();
    for(var i=0; i<elementsDetails.length; i++){
        let alarmyear=Number(elementsDetails[i].time.split('-')[0]);
        let alarmMonth=Number(elementsDetails[i].time.split('-')[1]);
        let alarmDate=Number(elementsDetails[i].time.split('-')[2].split('T')[0]);
        let alarmHour=Number(elementsDetails[i].time.split('-')[2].split('T')[1].split(':')[0]);
        let alarmMint=Number(elementsDetails[i].time.split('-')[2].split('T')[1].split(':')[1]);
        if(year===alarmyear && month===alarmMonth && date===alarmDate && hour===alarmHour && mint===alarmMint){
            document.getElementById("alarmTitle").innerHTML="Alarm Running ⏰";
            const tempElement=`<div class="card-body">
            <h5 class="card-title">${elementsDetails[i].name}</h5>
            <p class="card-text"><hr>Your alarm is running which was scheduled earlier for the purpose of ${elementsDetails[i].desc}</p>
            <p class="card-text"><small class="text-muted">Last updated 2 sec ago</small></p>
          </div>`;

            document.getElementById('myalarmbody').insertAdjacentHTML('afterbegin',tempElement)
            let Mybutton=document.createElement('button');
            Mybutton.id="displayBtn";
            Mybutton.setAttribute('data-bs-toggle','modal');
            Mybutton.setAttribute('data-bs-target','#myalarmModal');
            document.body.appendChild(Mybutton);
            document.getElementById("displayBtn").click();
            console.log("Clicked")
            alarmAudio.play().catch(console.log("Error While Playing Sound."));
            elementsDetails.splice(i,1);
            let elemen=document.getElementsByClassName('elements');
            alarmCont.removeChild(elemen[i])
            updatingStorage();
            domupdate();
        Mybutton.remove();
        }
    }

},1000)


const alarmCloser = () => {
    alarmAudio.pause();
    alarmAudio.currentTime=0;


}
