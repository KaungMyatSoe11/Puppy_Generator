const img = $("#img");
const btn = $("#btnRandom");

const getRandomImg = async () => {
  if ($("#puppy-img") !== null) {
    console.log($("#puppy-img") !== null);
    $("#puppy-img").remove();
  }
  const response = await fetch("/random");
  const data = await response.json();
  img.append(
    `<img src="${data.message}"  id="puppy-img" class=""/>`
  );
};

btn.on("click", getRandomImg);
