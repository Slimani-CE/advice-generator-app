async function fetchAdvice() {
  // Display the loading component instead of the button
  let loadingComp = document.getElementById("loading-comp");
  let btn = document.getElementById("pattern");
  loadingComp.classList.remove("hidden");
  btn.classList.add("hidden");

  let advice = await fetch(`https://api.adviceslip.com/advice`)
    .then((data) => data.json())
    .then((data) => data.slip);

  loadingComp.classList.add("hidden");
  btn.classList.remove("hidden");

  // Display button back
  let adviceId = document.getElementById("advice-id");
  let adviceContent = document.getElementById("advice-content");

  adviceId.innerHTML = advice.id;
  adviceContent.innerHTML = advice.advice;
}
