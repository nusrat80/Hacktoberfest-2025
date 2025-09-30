document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
  const grid = document.getElementById("snippets-grid");
  const searchInput = document.getElementById("search-input");
  const langFiltersContainer = document.getElementById("language-filters");
  const noResultsMsg = document.getElementById("no-results");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalCode = document.getElementById("modal-code");
  const modalCloseBtn = document.getElementById("modal-close");
  const copyCodeBtn = document.getElementById("copy-code-btn");

  let allSnippets = [];
  let currentLangFilter = "All";

  /**
   * Fetches snippets and initializes the application.
   */
  async function initialize() {
    try {
      const response = await fetch("info.json");
      if (!response.ok) throw new Error("info.json not found.");
      allSnippets = await response.json();

      if (Array.isArray(allSnippets)) {
        populateLanguageFilters();
        displaySnippets(allSnippets);
      } else {
        throw new Error("Invalid format: info.json is not an array.");
      }
    } catch (error) {
      console.error("Initialization error:", error);
      grid.innerHTML = `<p class="no-results-message" style="display:block;">Could not load snippets.</p>`;
    }
  }

  /**
   * Displays an array of snippet objects as cards in the grid.
   */
  function displaySnippets(snippets) {
    if (snippets.length === 0) {
      noResultsMsg.style.display = "block";
    } else {
      noResultsMsg.style.display = "none";
    }

    // Staggered animation
    snippets.forEach((snippet, index) => {
      const card = document.createElement("div");
      card.className = "snippet-card";
      card.style.animationDelay = `${index * 50}ms`; // Stagger effect
      card.dataset.snippet = JSON.stringify(snippet);

      card.innerHTML = `
                <div class="card-header">
                    <h3>${snippet.title}</h3>
                    <span class="lang-tag">${snippet.language}</span>
                </div>
                <div class="card-body">
                    <p>${snippet.description}</p>
                </div>
                <div class="card-footer">
                    <span class="author">by @${snippet.author}</span>
                    <button class="view-code-btn">View Code</button>
                </div>
            `;
      grid.appendChild(card);
    });
  }

  /**
   * Creates language filter buttons.
   */
  function populateLanguageFilters() {
    const languages = ["All", ...new Set(allSnippets.map((s) => s.language))];
    langFiltersContainer.innerHTML = languages
      .map(
        (lang) =>
          `<button class="lang-filter-btn ${
            lang === "All" ? "active" : ""
          }" data-lang="${lang}">${lang}</button>`
      )
      .join("");
  }

  /**
   * Handles the filtering logic with animations.
   */
  function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Add exiting animation to current cards
    Array.from(grid.children).forEach((child) =>
      child.classList.add("exiting")
    );

    // Wait for animation to finish before updating
    setTimeout(() => {
      grid.innerHTML = ""; // Clear the grid

      let filteredSnippets = allSnippets;

      if (currentLangFilter !== "All") {
        filteredSnippets = filteredSnippets.filter(
          (s) => s.language === currentLangFilter
        );
      }

      if (searchTerm) {
        filteredSnippets = filteredSnippets.filter(
          (s) =>
            s.title.toLowerCase().includes(searchTerm) ||
            s.description.toLowerCase().includes(searchTerm) ||
            (s.tags || []).join(" ").toLowerCase().includes(searchTerm)
        );
      }

      displaySnippets(filteredSnippets);
    }, 300); // Should match the fadeOut animation duration
  }

  // --- Modal Logic ---
  function openModal(snippet) {
    modalTitle.textContent = snippet.title;
    modalCode.textContent = snippet.code;
    modal.classList.add("visible");
  }

  function closeModal() {
    modal.classList.remove("visible");
  }

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(modalCode.textContent);

      copyCodeBtn.classList.add("copied");
      copyCodeBtn.querySelector("span").textContent = "Copied!";
      copyCodeBtn.querySelector("i").className = "ri-check-line";

      setTimeout(() => {
        copyCodeBtn.classList.remove("copied");
        copyCodeBtn.querySelector("span").textContent = "Copy Code";
        copyCodeBtn.querySelector("i").className = "ri-clipboard-line";
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  // --- Event Listeners ---
  searchInput.addEventListener("input", applyFilters);

  langFiltersContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      langFiltersContainer.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      currentLangFilter = e.target.dataset.lang;
      applyFilters();
    }
  });

  grid.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-code-btn")) {
      const card = e.target.closest(".snippet-card");
      const snippet = JSON.parse(card.dataset.snippet);
      openModal(snippet);
    }
  });

  modalCloseBtn.addEventListener("click", closeModal);
  copyCodeBtn.addEventListener("click", copyCode);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // --- Initial Load ---
  initialize();
});
