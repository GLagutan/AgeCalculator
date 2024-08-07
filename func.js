// Calculate milliseconds in a year
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

let dt = document.getElementById("date")
let yr = document.getElementById("yr")
let current = new Date();
const c = current.getMonth();

// const formattedDate = currentDate.format('DD-MMMM-YYYY');
// let yrs = Math.round(Date.now()/year)

const dt1 = new Date('2024-27-07')
let dt2 = new Date('2000-24-12')

const print = () => {
    let vdt = dt.value
    let age = vdt - Date()

    yr.innerHTML=dt1.getDate()
}