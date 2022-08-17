const plantNeedsWater = day => {
    if (day === 'Wednesday') {
       return true;
     } else {
       return false;
     }
    }
    let day = 'Saturday';
    console.log(plantNeedsWater(day));