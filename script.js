// ++++++++++++++++++++++++ VARIABLES ++++++++++++++++++++++++++++++++
let currentStatus = "btnAll";

// Count elements
const total = document.getElementById("total");
const interviewTotal = document.getElementById("totalInterview");
const rejectTotal = document.getElementById("totalRejection");
const availableJobsCount = document.getElementById("availableJobsCount");

// Filter buttons
const allBtn = document.getElementById("btnAll");
const interviewBtn = document.getElementById("btnInterview");
const rejectBtn = document.getElementById("btnReject");

// Main container
const mainContainer = document.querySelector("main");

// Sections
const allCardSection = document.getElementById("allCards");
const interviewSection = document.getElementById("interviewSection");
const rejectSection = document.getElementById("rejectSection");
const emptyMessage = document.getElementById("emptyMessage");

// ==================== COUNT FUNCTION ====================>>>>>>>
function calculateCount() {
  const allCount = allCardSection.children.length;
  const interviewCount = interviewSection.children.length;
  const rejectCount = rejectSection.children.length;

  // Update main counts
  total.innerText = allCount;
  interviewTotal.innerText = interviewCount;
  rejectTotal.innerText = rejectCount;

  // Update available jobs based on current tab
  if (currentStatus === "btnAll")
    availableJobsCount.innerText = `${allCount} jobs`;
  if (currentStatus === "btnInterview")
    availableJobsCount.innerText = `${interviewCount} jobs`;
  if (currentStatus === "btnReject")
    availableJobsCount.innerText = `${rejectCount} jobs`;

  // Show empty message if current section is empty
  if (
    (currentStatus === "btnAll" && allCount === 0) ||
    (currentStatus === "btnInterview" && interviewCount === 0) ||
    (currentStatus === "btnReject" && rejectCount === 0)
  ) {
    emptyMessage.classList.remove("hidden");
  } else {
    emptyMessage.classList.add("hidden");
  }
}

// ====================>>> TOGGLE FUNCTION ======================>
function toggle(id) {
  currentStatus = id;

  // Hide all sections
  allCardSection.classList.add("hidden");
  interviewSection.classList.add("hidden");
  rejectSection.classList.add("hidden");

  // Remove active from all buttons
  allBtn.classList.remove("btn-primary");
  interviewBtn.classList.remove("btn-primary");
  rejectBtn.classList.remove("btn-primary");

  // Show current section & set button active
  if (id === "btnAll") {
    allCardSection.classList.remove("hidden");
    allBtn.classList.add("btn-primary");
  }
  if (id === "btnInterview") {
    interviewSection.classList.remove("hidden");
    interviewBtn.classList.add("btn-primary");
  }
  if (id === "btnReject") {
    rejectSection.classList.remove("hidden");
    rejectBtn.classList.add("btn-primary");
  }

  calculateCount();
}

// <------------------> Main Click Event <------------------>
mainContainer.addEventListener("click", function (event) {
  const card = event.target.closest(".job-card");
  if (!card) return;

  // ***************** Delete Button *********************
  if (event.target.closest(".delete-btn")) {
    card.remove();
    calculateCount();
    return;
  }

  // **************** Interview Button *******************
  if (event.target.classList.contains("interview-btn")) {
    card.querySelector(".badge").innerText = "Interview";
    interviewSection.appendChild(card);
    calculateCount();
    return;
  }

  // *************** REJECT BUTTON *****************
  if (event.target.classList.contains("reject-btn")) {
    card.querySelector(".badge").innerText = "Rejected";
    rejectSection.appendChild(card);
    calculateCount();
    return;
  }
});

// **************** default show All tab **********************
toggle("btnAll");
