let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let runnerAge = 90;

if (early && runnerAge > 18){
    raceNumber += 1000;
}
if (runnerAge > 18 && early){
    console.log(`Your race will begin at 9:30 AM and your number is ${raceNumber}.`);
}
else if (!early && runnerAge > 18){
    console.log(`Your race will begin at 11:00 AM and your number is ${raceNumber}.`);
}
else {
    console.log(`Your race will begin at 12:30 PM and your number is ${raceNumber}.`);
}
