/**
 * Media Timeline Pagination
 * Handles year-based pagination for the media library
 */

let currentYearIndex = 0;
let years = [];

/**
 * Initialize pagination system
 * Sets up year buttons and displays the most recent year
 */
function initializePagination() {
  const yearSections = document.querySelectorAll('.year-section');
  years = Array.from(yearSections).map(section => section.dataset.year);

  // Create year selector buttons
  const yearSelector = document.getElementById('yearSelector');
  years.forEach((year, index) => {
    const btn = document.createElement('button');
    btn.className = 'year-btn';
    btn.textContent = year;
    btn.onclick = () => showYear(index);
    yearSelector.appendChild(btn);
  });

  // Show the most recent year (first in the list)
  showYear(0);
}

/**
 * Display specific year section
 * @param {number} index - Index of year to display
 */
function showYear(index) {
  currentYearIndex = index;

  // Hide all sections
  document.querySelectorAll('.year-section').forEach(section => {
    section.classList.remove('active');
  });

  // Show selected section
  const sections = document.querySelectorAll('.year-section');
  if (sections[index]) {
    sections[index].classList.add('active');
  }

  // Update year buttons
  document.querySelectorAll('.year-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });

  // Update navigation buttons
  document.getElementById('prevBtn').disabled = (index === 0);
  document.getElementById('nextBtn').disabled = (index === years.length - 1);
}

/**
 * Navigate to previous/next year
 * @param {number} direction - -1 for previous, 1 for next
 */
function changeYear(direction) {
  const newIndex = currentYearIndex + direction;
  if (newIndex >= 0 && newIndex < years.length) {
    showYear(newIndex);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializePagination);
