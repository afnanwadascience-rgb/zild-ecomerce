
/* ============================================================================
   ZILD — ROKOMARI AFFILIATE CATALOG
   Books + Products | Fixed Images
   ============================================================================ */

const BOOKS = [
  {
    id: "book-01", number: "01",
    title: "Englishe Durbolder Jonno English Therapy",
    url: "https://rkmri.co/eoeTNpIeemRm/",
    image: "assets/products/book-01.jpg",
    coverStyle: "01", category: "BOOK"
  },
  {
    id: "book-02", number: "02",
    title: "Ghore Boshe Spoken English",
    url: "https://rkmri.co/NSyeoETN5mM5/",
    image: "assets/products/book-02.webp",
    coverStyle: "02", category: "BOOK"
  },
  {
    id: "book-03", number: "03",
    title: "Misir Ali Samagra 1",
    url: "https://rkmri.co/30eeeTReIeyR/",
    image: "assets/products/book-03.webp",
    coverStyle: "03", category: "BOOK"
  },
  {
    id: "book-04", number: "04",
    title: "Shunno",
    url: "https://rkmri.co/AM2MIeATIR00/",
    image: "assets/products/book-04.gif",
    coverStyle: "04", category: "BOOK"
  },
  {
    id: "book-05", number: "05",
    title: "Think and Grow Rich",
    url: "https://rkmri.co/R2M0EoyeSmAA/",
    image: "assets/products/book-05.webp",
    coverStyle: "05", category: "BOOK"
  },
  {
    id: "book-06", number: "06",
    title: "Student Hacks",
    url: "https://rkmri.co/5N2IpMp00Roe/",
    image: "assets/products/book-06.webp",
    coverStyle: "06", category: "BOOK"
  },
  {
    id: "book-07", number: "07",
    title: "Deyal - Humayun Ahmed",
    url: "https://rkmri.co/3TM0RoT3m025/",
    image: "assets/products/book-07.jpg",
    coverStyle: "07", category: "BOOK"
  },
  {
    id: "product-08", number: "08",
    title: "OnePlus Bullets 3.5mm Jack V2 Earphones - Black",
    url: "https://rkmri.co/R5NoEeEAmeRe/",
    image: "assets/products/product-08.jpg",
    coverStyle: "08", category: "PRODUCT"
  },
  {
    id: "book-09", number: "09",
    title: "Muhammad SM er Jiboni - Ar-Rahikul Makhtum",
    url: "https://rkmri.co/AMepN52ImeMo/",
    image: "assets/products/book-09.jpg",
    coverStyle: "09", category: "BOOK"
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

  function fallbackCover(book) {
    return '<div class="book-card__cover book-card__cover--' +
      escapeHtml(book.coverStyle || "01") +
      ' book-card__cover--missing">' +
      '<span class="book-cover__eyebrow">ZILD ' +
      escapeHtml(book.category || "BOOK") +
      '</span>' +
      '<span class="book-cover__number">' +
      escapeHtml(book.number) +
      '</span>' +
      '<span class="book-cover__fallback-title">' +
      escapeHtml(book.title) +
      '</span></div>';
  }

  function cardHtml(book) {
    const cover = book.image
      ? '<div class="book-card__cover">' +
          '<img src="/' + escapeHtml(book.image.replace(/^\/+/, "")) +
          '" alt="' + escapeHtml(book.title) +
          '" loading="lazy" decoding="async" ' +
          'onerror="this.onerror=null;this.style.display=\'none\';this.parentElement.classList.add(\'book-card__cover--missing\');">' +
        '</div>'
      : fallbackCover(book);

    return '<article class="book-card">' +
      cover +
      '<div class="book-card__body">' +
        '<p class="book-card__label">' +
          escapeHtml(book.category || "BOOK") + ' ' +
          escapeHtml(book.number) +
        '</p>' +
        '<h3 class="book-card__title">' +
          escapeHtml(book.title) +
        '</h3>' +
        '<p class="book-card__description">' +
          'View product details and current availability on Rokomari.' +
        '</p>' +
        '<div class="book-card__actions">' +
          '<a class="btn btn--dark btn--sm btn--block" href="' +
          escapeHtml(book.url) +
          '" target="_blank" rel="sponsored noopener noreferrer">' +
          'VIEW ON ROKOMARI</a>' +
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
    if (count) count.textContent = BOOKS.length + " books & products";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootBooks);
  } else {
    bootBooks();
  }
})();
