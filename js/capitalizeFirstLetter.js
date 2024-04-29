const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (let day of days) {
    console.log(day.charAt(0).toUpperCase() + day.slice(1));   
}