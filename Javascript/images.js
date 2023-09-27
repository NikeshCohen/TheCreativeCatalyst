const blurredImageDiv = document.querySelectorAll(".blurred-img");

blurredImageDiv.forEach((div) => {
  const img = div.querySelector("img");

  const loaded = () => {
    div.classList.add("loaded");
    div.classList.add("remove-filter");
    div.classList.add("hidden");
  };

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});
