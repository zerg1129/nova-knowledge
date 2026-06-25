(function () {
  const body = document.body;
  const langButtons = Array.from(document.querySelectorAll("[data-lang-button]"));
  const choiceButtons = Array.from(document.querySelectorAll("[data-choice]"));
  const feedback = document.querySelector(".choice-feedback");

  const feedbackCopy = {
    smoke: {
      zh: "你抓到的是這杯的輕柔煙燻。它應該是細緻地包在酒體裡，而不是重泥煤式地壓上來。",
      en: "You picked the gentle smoke. It should feel integrated with the spirit, not heavy or dominant."
    },
    sherry: {
      zh: "你抓到的是 Oloroso 桶帶來的莓果與雪莉甜感。再留意是否有乾燥水果與堅果跟著出現。",
      en: "You picked the Oloroso side: berries and soft sherry sweetness. Look for dried fruit and nuts next."
    },
    malt: {
      zh: "你抓到的是堅果麥芽感。這也是 Wonseok 原酒想呈現的烘烤、鹹香與麥芽骨架。",
      en: "You picked the nutty malt. That roasted, savory malt backbone is part of the house spirit character."
    },
    texture: {
      zh: "你抓到的是緻密質地。這杯的重量感與口感厚度，是酒廠年輕原酒正在發展的重點。",
      en: "You picked the dense texture. That weight and structure are key parts of the young spirit profile."
    }
  };

  function currentLang() {
    return body.dataset.lang === "en" ? "en" : "zh";
  }

  function setLanguage(lang) {
    body.dataset.lang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    langButtons.forEach((button) => {
      const active = button.dataset.langButton === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function setChoice(choice) {
    choiceButtons.forEach((button) => {
      const active = button.dataset.choice === choice;
      button.classList.toggle("is-selected", active);
    });

    const message = feedbackCopy[choice][currentLang()];
    feedback.textContent = message;
  }

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.langButton);
      const selected = document.querySelector(".choice-button.is-selected");
      if (selected) {
        setChoice(selected.dataset.choice);
      }
    });
  });

  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setChoice(button.dataset.choice);
    });
  });

  setLanguage("zh");
})();
