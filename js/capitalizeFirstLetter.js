const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (let day of days) {
    let firstLetter = day.charAt(0).toUpperCase();
    console.log(`${firstLetter}${day.slice(1)}`);
}
