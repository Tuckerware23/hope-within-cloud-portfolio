# Hope Within Book Catalog

This directory contains an interactive catalog of books set in the Hope Within Universe. Each entry stores metadata such as the book title, genre, series, author, and a short summary. The goal of this project is to provide a searchable, extensible catalog that can be integrated into the website or used to generate new content.

## Data Format

Books are stored in JSON format in `books.json`. Each book object has the following fields:

- `title` – The full title of the book.
- `genre` – The primary genre (e.g. fantasy, sci‑fi, romance).
- `series` – The series or sub‑series the book belongs to.
- `author` – Typically **Stephan R. Tucker**, author of the Hope Within Universe.
- `summary` – A one or two sentence description of the book’s plot or themes.

Example `books.json` content:

```json
[
  {
    "title": "Call of the Phoenix",
    "genre": "Fantasy",
    "series": "Hope Within Universe",
    "author": "Stephan R. Tucker",
    "summary": "An epic adventure following three heroes who uncover ancient magic and fight a rising darkness."
  },
  {
    "title": "Shadows of the Crystal City",
    "genre": "Fantasy",
    "series": "Caller of Light Within",
    "author": "Stephan R. Tucker",
    "summary": "In a city powered by crystals, a young guardian struggles to control her abilities while confronting a secret cult."
  }
]
```

## Usage

To add new books to the catalog, edit `books.json` and append another object with the same structure. If you plan to integrate the catalog into your website:

- **React**: Import the JSON file and map over it to render a list of books. Add search or filter functionality to improve usability.
- **Node / Express**: Serve the JSON via an API endpoint (`/api/books`) and fetch it from the frontend.

## Future Enhancements

- Build a fully featured React component to display the catalog with search, sorting, and filtering.
- Generate static pages for each book using data from `books.json`.
- Automate validation of book entries (e.g. via a script) to catch missing fields or formatting issues.
