/* ============================================================================
   ZILD — ROKOMARI AFFILIATE BOOK CATALOG
   ============================================================================ */

const BOOKS = [
  {
    id: "book-01",
    number: "01",
    title: "Englishe Durbolder Jonno English Therapy",
    url: "https://rkmri.co/eoeTNpIeemRm/",
    image: "assets/products/book-01.jpg",
    coverStyle: "01"
  },
  {
    id: "book-02",
    number: "02",
    title: "Ghore Boshe Spoken English",
    url: "https://rkmri.co/NSyeoETN5mM5/",
    image: "assets/products/book-02.webp",
    coverStyle: "02"
  },
  {
    id: "book-03",
    number: "03",
    title: "Misir Ali Samagra 1",
    url: "https://rkmri.co/30eeeTReIeyR/",
    image: "assets/products/book-03.webp",
    coverStyle: "03"
  },
  {
    id: "book-04",
    number: "04",
    title: "Shunno",
    url: "https://rkmri.co/AM2MIeATIR00/",
    image: "assets/products/book-04.gif",
    coverStyle: "04"
  },
  {
    id: "book-05",
    number: "05",
    title: "Think and Grow Rich",
    url: "https://rkmri.co/R2M0EoyeSmAA/",
    image: "assets/products/book-05.webp",
    coverStyle: "05"
  },
  {
    id: "book-06",
    number: "06",
    title: "Student Hacks",
    url: "https://rkmri.co/5N2IpMp00Roe/",
    image: "assets/products/book-06.webp",
    coverStyle: "06"
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

  function cardHtml(book) {
    const cover = book.image
      ? '<div class="book-card__cover">' +
          '<img src="' + escapeHtml(book.image) +
          '" alt="Cover of ' + escapeHtml(book.title) +
          '" loading="lazy" decoding="async" ' +
          'onerror="this.style.display=\'none\';this.parentElement.classList.add(\'book-card__cover--missing\');">' +
        '</div>'
      : '<div class="book-card__cover book-card__cover--' +
          escapeHtml(book.coverStyle || "01") +
          '">' +
          '<span class="book-cover__eyebrow">ROKOMARI BOOK</span>' +
          '<span class="book-cover__number">' + escapeHtml(book.number) + '</span>' +
        '</div>';

    return '<article class="book-card">' +
      cover +
      '<div class="book-card__body">' +
        '<p class="book-card__label">BOOK ' + escapeHtml(book.number) + '</p>' +
        '<h3 class="book-card__title">' + escapeHtml(book.title) + '</h3>' +
        '<p class="book-card__description">View the book details and current availability on Rokomari.</p>' +
        '<div class="book-card__actions">' +
          '<a class="btn btn--dark btn--sm btn--block" href="' +
          escapeHtml(book.url) +
          '" target="_blank" rel="sponsored noopener noreferrer">VIEW ON ROKOMARI</a>' +
        '</div>' +
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

    if (count) {
      count.textContent = BOOKS.length + " books";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootBooks);
  } else {
    bootBooks();
  }
})();
