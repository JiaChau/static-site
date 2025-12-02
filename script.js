document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "home";

  const registerHome = () => {
    const resumeEmbed = document.querySelector("[data-hook=\"resume-embed\"] object");
    if (resumeEmbed) {
      resumeEmbed.addEventListener("load", () => {
        resumeEmbed.dataset.loaded = "true";
      });
    }
  };

  const registerTimeline = () => {
    const timelineScroll = document.querySelector("[data-hook=\"timeline-scroll\"]");
    if (timelineScroll) {
      timelineScroll.dataset.ready = "true";
    }
  };

  const logFutureIdeas = () => {
    const ideas = [
      "Smooth-scroll navigation",
      "Project filtering",
      "Editable timeline sourced from JSON",
      "Inline resume annotations",
      "Framer-motion style micro-interactions",
    ];
    console.info("Placeholder interaction ideas:", ideas);
  };

  if (page === "timeline") {
    registerTimeline();
  } else {
    registerHome();
  }

  logFutureIdeas();
  console.log(`Page shell (${page}) ready.`);
});
