const icons = {
  globe: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M2 12h20"></path>
      <path d="M12 2a15.3 15.3 0 0 1 0 20"></path>
      <path d="M12 2a15.3 15.3 0 0 0 0 20"></path>
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

const startTerminalTitle = () => {
  const terminalOutput = document.querySelector("[data-terminal-output]");

  if (!terminalOutput) {
    return;
  }

  const terminalSteps = [
    { text: "HELLO WORLD", hold: 1250 },
    { text: "KNORRS.NET", hold: 3000 }
  ];
  const speeds = {
    typing: 230,
    deleting: 150,
    betweenPhrases: 780
  };
  let stepIndex = 0;
  let characterIndex = 0;
  let currentStep = terminalSteps[stepIndex];
  let mode = "typing";

  const schedule = (delay) => {
    window.setTimeout(tick, delay);
  };

  const withDrift = (base, variance) => {
    const drift = Math.random() * variance - variance / 2;
    return Math.max(45, base + drift);
  };

  const render = () => {
    terminalOutput.textContent = currentStep.text.slice(0, characterIndex);
  };

  const tick = () => {
    if (mode === "typing") {
      characterIndex += 1;
      render();

      if (characterIndex >= currentStep.text.length) {
        mode = "holding";
        schedule(currentStep.hold);
        return;
      }

      schedule(withDrift(speeds.typing, 52));
      return;
    }

    if (mode === "holding") {
      mode = "deleting";
      schedule(withDrift(speeds.deleting, 30));
      return;
    }

    characterIndex -= 1;
    render();

    if (characterIndex <= 0) {
      characterIndex = 0;
      stepIndex = (stepIndex + 1) % terminalSteps.length;
      currentStep = terminalSteps[stepIndex];
      mode = "typing";
      schedule(speeds.betweenPhrases);
      return;
    }

    schedule(withDrift(speeds.deleting, 30));
  };

  terminalOutput.textContent = "";
  schedule(120);
};

const assetVersion = "20260511-2";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startTerminalTitle, { once: true });
} else {
  startTerminalTitle();
}

const backgrounds = [
  {
    name: "Sky",
    file: "sky-background.png",
    position: "center 38%",
    base: "#091b31",
    overlay: {
      radial: "rgba(26, 80, 151, 0.08)",
      top: "rgba(4, 22, 45, 0.2)",
      mid: "rgba(8, 33, 63, 0.08)",
      bottom: "rgba(7, 16, 27, 0.02)"
    },
    credit: "AI generated sky background"
  },
  {
    name: "Meadow",
    file: "meadow.jpg",
    credit: "Photo by Scott Webb on Unsplash",
    url: "https://unsplash.com/photos/landscape-of-grass-field-under-blue-sky-3LsocYqXWpM"
  },
  {
    name: "Horizon",
    file: "horizon.jpg",
    credit: "Photo by Davies Designs Studio on Unsplash",
    url: "https://unsplash.com/photos/G-6kwVnClsE"
  },
  {
    name: "Cloudscape",
    file: "cloudscape.jpg",
    credit: "Photo by Danist Soh on Unsplash",
    url: "https://unsplash.com/photos/aerial-photograph-of-clouds-5D47VsGV86c"
  },
  {
    name: "Atmosphere",
    file: "atmosphere.jpg",
    credit: "Photo by Clint Patterson on Unsplash",
    url: "https://unsplash.com/photos/blue-and-white-sky-close-up-photography-tPRFj3A1rxo"
  },
  {
    name: "Halo",
    file: "halo.jpg",
    credit: "Photo by Brady Bellini on Unsplash",
    url: "https://unsplash.com/photos/white-clouds-above-silhouette-of-clouds-at-day-_hpk_92Crhs"
  },
  {
    name: "Cumulus",
    file: "cumulus.jpg",
    credit: "Photo by Kaushik Panchal on Unsplash",
    url: "https://unsplash.com/photos/white-clouds-during-daytime-0juC5JIhPks"
  },
  {
    name: "Drift",
    file: "drift.jpg",
    credit: "Photo by engin akyurt on Unsplash",
    url: "https://unsplash.com/photos/EyDDczsWhmk"
  },
  {
    name: "Cirrus",
    file: "cirrus.jpg",
    credit: "Photo by Guillaume Galtier on Unsplash",
    url: "https://unsplash.com/photos/white-clouds-3YrppYQPoCI"
  }
];

const backgroundDefaults = {
  position: "center center",
  size: "cover",
  repeat: "no-repeat",
  base: "#102946",
  overlay: {
    radial: "rgba(26, 80, 151, 0.22)",
    top: "rgba(4, 22, 45, 0.82)",
    mid: "rgba(8, 33, 63, 0.44)",
    bottom: "rgba(7, 16, 27, 0.08)"
  }
};

const backgroundToggle = document.querySelector("[data-background-toggle]");
const backgroundLabel = document.querySelector("[data-background-label]");

if (backgroundToggle) {
  const getStoredValue = (key) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const savedName = getStoredValue("knorrsBackgroundName");
  const legacySavedIndex = Number.parseInt(getStoredValue("knorrsBackgroundIndex"), 10);
  let currentBackground = backgrounds.findIndex((background) => background.name === savedName);

  if (currentBackground < 0) {
    currentBackground = Number.isInteger(legacySavedIndex) && backgrounds[legacySavedIndex] ? legacySavedIndex : 0;
  }

  const setBackground = (index) => {
    const background = backgrounds[index];
    const imagePath = `./assets/${background.file}?v=${assetVersion}`;
    const image = `url("${imagePath}")`;
    const overlay = { ...backgroundDefaults.overlay, ...background.overlay };

    document.documentElement.style.setProperty("--page-background-image", image);
    document.documentElement.style.setProperty("--page-background-position", background.position || backgroundDefaults.position);
    document.documentElement.style.setProperty("--page-background-size", background.size || backgroundDefaults.size);
    document.documentElement.style.setProperty("--page-background-repeat", background.repeat || backgroundDefaults.repeat);
    document.documentElement.style.setProperty("--page-background-base", background.base || backgroundDefaults.base);
    document.documentElement.style.setProperty("--page-background-radial", overlay.radial);
    document.documentElement.style.setProperty("--page-background-top", overlay.top);
    document.documentElement.style.setProperty("--page-background-mid", overlay.mid);
    document.documentElement.style.setProperty("--page-background-bottom", overlay.bottom);

    if (backgroundLabel) {
      backgroundLabel.textContent = background.name;
    }
    backgroundToggle.title = background.credit;
    backgroundToggle.setAttribute("aria-label", `Change background image. Current: ${background.name}.`);

    try {
      localStorage.setItem("knorrsBackgroundName", background.name);
    } catch {
      // Background selection still works when local storage is unavailable.
    }
  };

  backgrounds.forEach((background) => {
    const image = new Image();
    image.src = `./assets/${background.file}?v=${assetVersion}`;
  });

  setBackground(currentBackground);

  backgroundToggle.addEventListener("click", () => {
    currentBackground = (currentBackground + 1) % backgrounds.length;
    setBackground(currentBackground);
  });
}
