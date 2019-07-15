// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(topic) {
    const tab = document.createElement("div");
    tab.classList.add("tab");
    tab.textContent = topic;
  
    // Stretch, filtering comes in here:
    tab.addEventListener("click", event => {
      // 1. Find the relevant cards
      const articles = document.querySelectorAll(".card[data-category]");
      // 2. Hide any where topic doesn't match [data-category]
      articles.forEach(article => {
        const category = article.dataset.category;
        if (category === topic) {
          article.style.display = "flex";
          article.style.overflow = "hidden";
          article.style.height = "235px";
          article.style.opacity = 1;
          article.style.order = 1;
        } else {
          article.style.height = "0px";
          article.style.opacity = 0;
          article.style.order = 10;
        }
      });
    });
  
    return tab;
  }
  
  const topics = document.querySelector(".topics");
  
  axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
      response.data.topics.forEach(topic => {
        topics.appendChild(Tab(topic.replace("node.js", "node")));
      });
    })
    .catch(err => console.error(err));