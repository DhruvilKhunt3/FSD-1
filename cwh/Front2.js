// Grab the strip elements (hour, minute, second strips)
const strips = [...document.querySelectorAll(".strip")];
const numberSize = 7; // The size for each number, adjustable as needed

// Function to move the numbers on the strip
function stripSlider(strip, number) {
    let tens = Math.floor(number / 10);  // Tens digit
    let ones = number % 10;              // Ones digit

    // Slide the tens and ones digits to their correct position
    strips[strip].style.transform = `translateY(${tens * -numberSize}vmin)`;
    strips[strip + 1].style.transform = `translateY(${ones * -numberSize}vmin)`;
}

// Function to fetch the current time in India (IST)
function getIndiaTime() {
    const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    const time = new Date();
    const timeInIndia = new Intl.DateTimeFormat('en-GB', options).format(time);

    // Split the formatted time into hours, minutes, and seconds
    const [hours, minutes, seconds] = timeInIndia.split(':').map(num => parseInt(num, 10));

    return { hours, minutes, seconds };
}

// Function to update the clock every second
function updateClock() {
    const { hours, minutes, seconds } = getIndiaTime();

    // Update the hour
    stripSlider(0, Math.floor(hours / 10)); // Tens digit of hours
    stripSlider(1, hours % 10);             // Ones digit of hours

    // Update the minute
    stripSlider(2, Math.floor(minutes / 10));  // Tens digit of minutes
    stripSlider(3, minutes % 10);              // Ones digit of minutes

    // Update the second
    stripSlider(4, Math.floor(seconds / 10));  // Tens digit of seconds
    stripSlider(5, seconds % 10);              // Ones digit of seconds
}

// Call the updateClock function every 1000ms (1 second)
setInterval(updateClock, 1000);

// Initial call to set the time immediately
updateClock();
