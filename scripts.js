<script>

  function countVisits() {
    // Check if 'visitCount' exists in localStorage
    let visitCount = localStorage.getItem('visitCount');

  if (visitCount === null) {
    // If not, initialize it to 1
    visitCount = 1;
    } else {
    // Increment the count
    visitCount = parseInt(visitCount) + 1;
    }

  // Update localStorage with the new count
  localStorage.setItem('visitCount', visitCount);

  // Display the count on the website
  const visitDisplay = document.getElementById('visit-count');
  if (visitDisplay) {
    visitDisplay.textContent = `Total Visits: ${visitCount}`;
    }
  }

  // Call the function when the page loads
  document.addEventListener('DOMContentLoaded', countVisits);
</script>