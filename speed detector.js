function calculatespeedpoints(speed) {
let point = 0;
if (speed <= 70) {
    return 'ok';
}else ( points = math.floor((speed -70)/5));
if (points > 12) {
    return'license suspended';
}else {
    return 'points: ${points}';
}
}
 const userspeed = process.argv[2];
 const parsedspeed = Number(userspeed);

 if(!userspeed || userspeed.trim() === '' || parsedspeed < 0 || !Number.isFinite(parsedspeed)) {
    console.log ("invalid speed entered .please enter e valid positive number.");
 }else{
    const result =claculatespeedpoints(parsedspeed);
    console.log(result);
 }