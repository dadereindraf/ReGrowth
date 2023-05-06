const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get("id");
const urlArticle = `https://64550855f803f34576385d7b.mockapi.io/detail-article/`+id;

fetch(urlArticle, {
  method: "GET",
})
  .then((response) => response.json())
  .then((value) => {
    const html = `
      <div class="sub-article-container">
        <a href="index.html">← Kembali</a>
        <div class="sub-article-img img-fluid">
          <img src="${value.gambarIsi}">
        </div>
        <div class="blog-article">
          <h2>${value.judulIsi}</h2>
          <div class="posted-date-sub-article">
            <p>${value.waktuIsi}</p>
          </div>
          <p>${value.isiIsi}</p>
        </div>
        </div>
        `;
    document.getElementById("sub-article").innerHTML += html;
    console.log(value);
  })
  .catch((error) => {
    console.error("Error fetching article data:", error);
  });