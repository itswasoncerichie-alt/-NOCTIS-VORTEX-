const modeCards = document.querySelectorAll(".mode-card");
let selectedMode = "Picture to Movie";

modeCards.forEach((card) => {
  card.addEventListener("click", () => {
    modeCards.forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
    selectedMode = card.dataset.mode;
  });
});

const mediaInput = document.getElementById("mediaInput");
const mediaList = document.getElementById("mediaList");
mediaInput.addEventListener("change", () => {
  const files = Array.from(mediaInput.files || []);
  mediaList.textContent = files.length
    ? files.map(file => `• ${file.name} (${formatSize(file.size)})`).join("\n")
    : "No media selected yet.";
});

const referenceInput = document.getElementById("referenceInput");
const referenceName = document.getElementById("referenceName");
referenceInput.addEventListener("change", () => {
  const file = referenceInput.files?.[0];
  referenceName.textContent = file ? `• ${file.name} (${formatSize(file.size)})` : "No reference selected.";
});

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

document.getElementById("planButton").addEventListener("click", () => {
  const idea = document.getElementById("ideaInput").value.trim();
  const files = Array.from(mediaInput.files || []);
  const reference = referenceInput.files?.[0];
  const mood = document.getElementById("moodInput").value;
  const format = document.getElementById("formatInput").value;
  const output = document.getElementById("output");

  if (!idea) {
    output.querySelector(".output-placeholder, .output-content")?.remove();
    const message = document.createElement("p");
    message.className = "output-placeholder";
    message.textContent = "Add your creative idea first. Tell S.A.I what kind of story or edit you want to make.";
    output.appendChild(message);
    return;
  }

  const brief = [
    "PROJECT CONCEPT",
    idea,
    "",
    "CREATION MODE",
    selectedMode,
    "",
    "PRODUCTION NOTES",
    `• Media selected: ${files.length} file(s)`,
    `• Reference edit: ${reference ? reference.name : "Not supplied"}`,
    `• Visual mood: ${mood}`,
    `• Output format: ${format}`,
    "",
    "PROPOSED NEXT STEPS",
    "1. Review and organise the supplied footage.",
    "2. Identify key moments, subjects and story possibilities.",
    "3. Build a scene-by-scene outline with an opening, development and ending.",
    "4. If a reference edit is supplied, document its pacing, transitions and visual techniques.",
    "5. Review the plan before moving into editing and rendering."
  ].join("\n");

  output.querySelector(".output-placeholder, .output-content")?.remove();
  const result = document.createElement("div");
  result.className = "output-content";
  result.textContent = brief;
  output.appendChild(result);
  output.querySelector(".draft-label").textContent = "LOCAL DRAFT";
  output.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
