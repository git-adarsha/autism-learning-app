function startApp() {
  const name = document.getElementById("username").value.trim();
  if (!name) return;

  localStorage.setItem("name", name);
  document.getElementById("displayName").innerText = name;
  document.getElementById("nameScreen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  updateProgress();
}

function updateProgress() {
  let points = Number(localStorage.getItem("points")) || 0;
  document.getElementById("points").innerText = points;

  const tree = document.getElementById("tree");
  if (points < 10) tree.innerText = "🌱";
  else if (points < 20) tree.innerText = "🌿";
  else if (points < 30) tree.innerText = "🌳";
}
