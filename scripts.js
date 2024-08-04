// Function to update current time, date, and hour
function updateDateTime() {
    const now = new Date();

    // Display current time
    document.getElementById('current-time').innerText = now.toLocaleTimeString();

    // Display solar date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('solar-date').innerText = `Solar Date: ${now.toLocaleDateString(undefined, options)}`;

    // Display lunar date and current hour
    // For simplicity, we'll use placeholder text as exact lunar date calculation requires more complex logic or an API
    document.getElementById('lunar-date').innerText = 'Lunar Date: Placeholder';
    document.getElementById('current-hour').innerText = `Current Hour: ${now.getHours()}`;
}

// Update date and time on page load
window.onload = updateDateTime;

// Optionally, update every minute
setInterval(updateDateTime, 60000);