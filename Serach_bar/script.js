const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestions');

const suggestionsList = [
  'Nature wallpapers',
  'Nature photography',
  'Nature quotes',
  'Technology news',
  'Technology trends 2025',
  'Love poems',
  'Love songs',
  'Love quotes',
  'Music top charts',
  'Music instruments',
  'Space exploration',
  'Space wallpapers',
  'Space science facts'
];

searchInput.addEventListener('input', function() {
  const inputValue = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = '';

  if (inputValue.length > 0) {
    const filteredSuggestions = suggestionsList.filter(suggestion => 
      suggestion.toLowerCase().includes(inputValue)
    );

    filteredSuggestions.forEach(suggestion => {
      const div = document.createElement('div');
      div.classList.add('suggestion-item');
      div.textContent = suggestion;
      div.onclick = () => {
        searchInput.value = suggestion;
        suggestionsBox.style.display = 'none';
      };
      suggestionsBox.appendChild(div);
    });

    suggestionsBox.style.display = filteredSuggestions.length > 0 ? 'block' : 'none';
  } else {
    suggestionsBox.style.display = 'none';
  }
});

// Hide suggestions if clicked outside
document.addEventListener('click', function(e) {
  if (!document.getElementById('searchbar').contains(e.target)) {
    suggestionsBox.style.display = 'none';
  }
});

// Example Voice Search click
document.getElementById('voice-search').addEventListener('click', () => {
  alert('Voice search clicked!');
});
