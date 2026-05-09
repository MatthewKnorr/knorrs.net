const icons = {
  globe: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M2 12h20"></path>
      <path d="M12 2a15.3 15.3 0 0 1 0 20"></path>
      <path d="M12 2a15.3 15.3 0 0 0 0 20"></path>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path data-fill d="M12 .9a11.1 11.1 0 0 0-3.5 21.64c.55.1.75-.24.75-.53v-2.05c-3.05.66-3.69-1.3-3.69-1.3-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.14 1.68 1.14.98 1.67 2.56 1.19 3.18.91.1-.71.38-1.19.7-1.46-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.91 0 0 .92-.3 3.02 1.13a10.4 10.4 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.51.22 2.63.11 2.91.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1.01.74 2.04v3.03c0 .29.2.64.76.53A11.1 11.1 0 0 0 12 .9Z"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect data-fill x="3" y="3" width="18" height="18" rx="2"></rect>
      <path stroke="#122033" d="M8 10v7"></path>
      <path stroke="#122033" d="M8 7.2v.1"></path>
      <path stroke="#122033" d="M12 17v-4a2 2 0 0 1 4 0v4"></path>
      <path stroke="#122033" d="M12 10v7"></path>
    </svg>
  `,
  resume: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 2h8l4 4v16H6z"></path>
      <path d="M14 2v5h5"></path>
      <path d="M9 12h6"></path>
      <path d="M9 16h6"></path>
      <path d="M9 8h2"></path>
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5h18v14H3z"></path>
      <path d="m3 7 9 7 9-7"></path>
    </svg>
  `
};

document.querySelectorAll("[data-icon]").forEach((slot) => {
  slot.innerHTML = icons[slot.dataset.icon] || "";
});
