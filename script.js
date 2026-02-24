// Visual enhancements for Stephy's Library

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsDiv = document.getElementById('results');

// Search on button click
if (searchBtn) {
  searchBtn.addEventListener('click', performSearch);
}

// Search on Enter key
if (searchInput) {
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  // Add focus animation
  searchInput.addEventListener('focus', () => {
    searchInput.parentElement.parentElement.style.transform = 'scale(1.02)';
  });

  searchInput.addEventListener('blur', () => {
    searchInput.parentElement.parentElement.style.transform = 'scale(1)';
  });
}

function performSearch() {
  const query = searchInput?.value.trim();

  if (!query) {
    return;
  }

  // Show loading state
  if (resultsDiv) {
    resultsDiv.innerHTML = '<div class="loading-spinner"></div><p class="loading-text">Searching for books...</p>';
  }

  // Simulate API call (replace with actual book search API later)
  setTimeout(() => {
    displayResults(query);
  }, 800);
}

function displayResults(query) {
  if (!resultsDiv) return;

  // Mock results for now - will be replaced with actual API data
  // Using query for future API integration
  const mockResults = [
    { title: `${query} - Example Book 1`, author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
  ];

  resultsDiv.innerHTML = '';

  if (mockResults.length === 0) {
    resultsDiv.innerHTML = '<p class="no-results">No books found. Try a different search.</p>';
    return;
  }

  const resultsHTML = mockResults.map((book, index) => `
    <div class="book-card" style="animation-delay: ${index * 0.1}s"
         onclick="navigateToBook('${book.title.replace(/'/g, "\\'")}', '${book.author}', '${book.year}')">
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">by ${book.author}</p>
      <p class="book-year">${book.year}</p>
      <p class="click-hint">Click to view details →</p>
    </div>
  `).join('');

  resultsDiv.innerHTML = resultsHTML;
}

// Navigate to book detail page with page transition
function navigateToBook(title, author, year) {
  // Create and show loader
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.innerHTML = `
    <div class="loader-content">
      <div class="loader-spinner"></div>
      <p class="loader-text">Loading book...</p>
    </div>
  `;
  document.body.appendChild(loader);

  // Navigate after animation
  setTimeout(() => {
    window.location.href = `book.html?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&year=${encodeURIComponent(year)}`;
  }, 400);
}

// Add smooth transitions for field group
const fieldGroup = document.querySelector('.field.is-grouped');
if (fieldGroup) {
  fieldGroup.style.transition = 'transform 0.3s ease';
}
