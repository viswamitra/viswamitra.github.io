# Media Timeline Component

A paginated, year-based timeline for displaying media items (books, podcasts, movies, series, posts) with type icons.

## Structure

```
├── _includes/
│   └── media-timeline.html          # Main template
├── _data/
│   └── media/
│       ├── 2025.yml                 # Media items for 2025
│       ├── 2021.yml                 # Media items for 2021
│       ├── 2020.yml                 # Media items for 2020
│       └── 2019.yml                 # Media items for 2019
├── assets/
│   ├── css/
│   │   └── media-timeline.css       # Styles
│   └── js/
│       └── media-timeline.js        # Pagination logic
└── _pages/
    └── library.markdown             # Page that includes the component
```

## Adding New Media Items

### 1. Add to existing year file

Edit the appropriate year file in `_data/media/YYYY.yml`:

```yaml
- title: "Book/Podcast Title"
  type: book|podcast|movie|series|post
  url: https://example.com
  image_path: https://example.com/image.jpg
  year: 2025
  month: 11
```

### 2. Create new year file

If adding items for a new year, create `_data/media/YYYY.yml`:

```yaml
- title: "First Item"
  type: book
  url: https://example.com
  image_path: https://example.com/image.jpg
  year: 2026
  month: 1
```

The component will automatically detect and include the new year file.

## Media Types & Icons

Supported types with their icons:
- `book` → 📖 Open book icon
- `podcast` → 🎙️ Microphone icon
- `movie` → 🎬 Film reel icon
- `series` → 📺 TV monitor icon
- `post` → 📝 Document icon

## Customization

### Styles
Edit `assets/css/media-timeline.css` to customize:
- Colors
- Spacing
- Typography
- Hover effects
- Button styles

### Pagination Logic
Edit `assets/js/media-timeline.js` to customize:
- Initial year displayed
- Navigation behavior
- Button generation

### Icons
Edit the SVG paths in `_includes/media-timeline.html` to change icons for each media type.

## Features

- **Year-based pagination**: One year displayed at a time
- **Type icons**: Visual indicators for different media types
- **Responsive design**: Works on mobile and desktop
- **Clean styling**: Matches Geist font and minimal design
- **Automatic data loading**: Reads all year files automatically
- **Chronological sorting**: Newest items first within each year

## Browser Support

Modern browsers with support for:
- CSS Grid & Flexbox
- ES6 JavaScript
- SVG icons
