/* ============================================================================
   BOOKS — ROKOMARI AFFILIATE CATALOG
   ---------------------------------------------------------------------------
   To add a book, copy one object and update id, title, url, and optionally image.
   Keep image as "" until you have a cover photo. Use a path such as
   "assets/books/book-04.jpg" when you add one. New entries appear automatically
   on both the Home page and books.html.
   ============================================================================ */

const BOOKS = [
  {
    id: "book-01",
    number: "01",
    title: "Englishe Durbolder Jonno English Therapy",
    url: "https://rkmri.co/eoeTNpIeemRm/",
    image: "",
    coverStyle: "01"
  },
  {
    id: "book-02",
    number: "02",
    title: "Ghore Boshe Spoken English",
    url: "https://rkmri.co/NSyeoETN5mM5/",
    image: "",
    coverStyle: "02"
  },
  {
    id: "book-03",
    number: "03",
    title: "Misir Ali Samagra 1",
    url: "https://rkmri.co/30eeeTReIeyR/",
    image: "",
    coverStyle: "03"
  }
];

(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeAsset(path) {
    return String(path || "").replace(/^\/+/, "");
  }

  function cardHtml(book) {
    const cover = book.image
      ? '<div class="book-card__cover"><img src="' + escapeHtml(normalizeAsset(book.image)) + '" alt="Cover of ' + escapeHtml(book.title) + '" loading="lazy" decoding="async"></div>'
      : '<div class="book-card__cover book-card__cover--' + escapeHtml(book.coverStyle || "01") + '" aria-label="Book cover image not added yet"><span class="book-cover__eyebrow">ROKOMARI BOOK</span><span class="book-cover__number">' + escapeHtml(book.number) + '</span><span class="book-cover__placeholder">Cover image<br>will be added</span></div>';

    return '<article class="book-card">' +
      cover +
      '<div class="book-card__body">' +
        '<p class="book-card__label">BOOK ' + escapeHtml(book.number) + '</p>' +
        '<h3 class="book-card__title">' + escapeHtml(book.title) + '</h3>' +
        '<p class="book-card__description">View the book details and current availability on Rokomari.</p>' +
        '<div class="book-card__actions"><a class="btn btn--dark btn--sm btn--block" href="' + escapeHtml(book.url) + '" target="_blank" rel="sponsored noopener noreferrer">VIEW ON ROKOMARI</a></div>' +
      '</div>' +
    '</article>';
  }

  function renderBooks(grid) {
    if (!grid) return;
    const section = grid.closest("[data-books-section]");
    if (!Array.isArray(BOOKS) || BOOKS.length === 0) {
      if (section) section.hidden = true;
      return;
    }
    grid.innerHTML = BOOKS.map(cardHtml).join("");
  }

  function bootBooks() {
    renderBooks(document.getElementById("home-books-grid"));
    renderBooks(document.getElementById("books-grid"));
    const count = document.getElementById("books-count");
    if (count) count.textContent = BOOKS.length + (BOOKS.length === 1 ? " book" : " books");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootBooks);
  } else {
    bootBooks();
  }
})();
