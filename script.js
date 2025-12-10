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

  const logFutureMilestones = () => {
    const milestones = [
      "Ship progress sharing experiments",
      "Port dashboard to macOS/iPad",
      "Launch backend beta for highlights",
      "Expand ManagedSettings schedules",
      "Publish Screen Time entitlement guide",
    ];
    console.info("SocialScreen roadmap teasers:", milestones);
  };

  if (page === "timeline") {
    registerTimeline();
  } else {
    registerHome();
  }

  logFutureMilestones();
  console.log(`SocialScreen page shell (${page}) ready.`);
});
