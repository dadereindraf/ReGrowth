let dataJson
let wrapperCard = document.querySelector("#wrapperCard")
async function logJSONData() {
    const response = await fetch("https://64550855f803f34576385d7b.mockapi.io/article");
    dataJson = await response.json();
    dataJson.forEach(element => {
        wrapperCard.innerHTML+= `
         <div class="article-cards">
                <div class="img-cards">
                <img src="${(element.image)}">
                </div>
                <div class="article">
                    <h4>${(element.judul)}</h4>
                <p>${(element.text)}</p>
                </div>
                <div class="article-view"> 
                    <a href="${window.location.hostname + 'detail-article.html?id=' + element.id}" id="btn" class="button">Read More</a>
                </div>
                <div class="posted-date">
                    <p>${(element.date)}</p>
                </div>
            </div> `
    });
   
  }

  
  logJSONData()