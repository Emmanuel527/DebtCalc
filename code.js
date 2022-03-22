const getSleepHours = day => {

 switch(day) {
   case 'monday':
   return 8
   break;
   case 'tuesday':
   return 8
   break;
   case 'wednesday':
   return 7
   break;
   case 'thursday':
   return 6
   break;
   case 'friday':
   return 5
   break;
   default:
   return 'Error!'
 }
};

const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday');

const getIdealSleepHours = () => {
let idealHours=8;
return idealHours*7;
};


const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if(actualSleepHours ===  idealSleepHours) {
  console.log('You got the perfect amount of sleep');
} else if(actualSleepHours > idealSleepHours) {
  console.log(`You got more sleep than you needed by ${actualSleepHours-idealSleepHours} hours`);
} else if (actualSleepHours < idealSleepHours) {
  console.log(`You got less sleep than needed by ${idealSleepHours - actualSleepHours} hours`);
}
};

calculateSleepDebt();
