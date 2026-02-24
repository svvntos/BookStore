// Book detail page functionality

// Page loader
const pageLoader = document.getElementById('pageLoader');

// Hide loader after page loads
window.addEventListener('load', () => {
  setTimeout(() => {
    pageLoader.classList.add('hidden');
  }, 600);
});

// Get book data from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const bookTitle = urlParams.get('title') || 'Unknown Book';
const bookAuthor = urlParams.get('author') || 'Unknown Author';
const bookYear = urlParams.get('year') || 'Unknown';

// Populate book details
document.getElementById('bookTitle').textContent = bookTitle;
document.getElementById('bookAuthor').textContent = `by ${bookAuthor}`;
document.getElementById('bookYear').textContent = `Published: ${bookYear}`;

// Navigation search functionality
const navSearchInput = document.getElementById('navSearchInput');
const navSearchBtn = document.getElementById('navSearchBtn');

function handleNavSearch() {
  const query = navSearchInput?.value.trim();
  if (query) {
    // Show loader before navigating
    pageLoader.classList.remove('hidden');
    pageLoader.querySelector('.loader-text').textContent = 'Searching...';

    setTimeout(() => {
      window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }, 400);
  }
}

if (navSearchBtn) {
  navSearchBtn.addEventListener('click', handleNavSearch);
}

if (navSearchInput) {
  navSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleNavSearch();
    }
  });
}

// Action buttons
const addToCollectionBtn = document.querySelector('.primary-action');
const markAsReadBtn = document.querySelector('.secondary-action');

if (addToCollectionBtn) {
  addToCollectionBtn.addEventListener('click', () => {
    // Visual feedback
    addToCollectionBtn.textContent = '✓ Added!';
    addToCollectionBtn.style.background = 'linear-gradient(135deg, #4caf50, #2e7d32)';

    setTimeout(() => {
      addToCollectionBtn.textContent = 'Add to My Collection';
      addToCollectionBtn.style.background = '';
    }, 2000);
  });
}

if (markAsReadBtn) {
  markAsReadBtn.addEventListener('click', () => {
    // Visual feedback
    markAsReadBtn.textContent = '✓ Marked as Read';
    markAsReadBtn.style.background = 'rgba(76, 175, 80, 0.3)';

    setTimeout(() => {
      markAsReadBtn.textContent = 'Mark as Read';
      markAsReadBtn.style.background = '';
    }, 2000);
  });
}
