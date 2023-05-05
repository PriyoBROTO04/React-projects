let date=new Date().getDate();
if(date % 10 === 1){
    date=date+"st";
}else if(date % 10 === 2){
    date=date+"nd";
}else if(date % 10 === 3){
    date=date+"rd";
}else{
    date=date+"th";
}
const day=new Date().getDay();
const month=new Date().getMonth();

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames= ["January","February","March","April","May","June","July","August","September","October","November","December"];

const fullDate={
    date,
    day:`${dayNames[day]}`,
    month:`${monthNames[month]}`,
}

export default fullDate;
