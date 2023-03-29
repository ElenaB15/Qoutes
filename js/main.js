fetch("https://dummyjson.com/quotes")
  .then((response) => response.json())
  .then((data) => addQoutes(data));

var list = "";
var popUp = document.getElementById("modal");
var btn = document.getElementById("btn");
btn.onclick = function () {
  popUp.style.display = "block";
};

function addQoutes(items) {
  console.log(items);
  for (var key in items) {
    console.log(key);
    for (var i = 0; i < items[key].length; i++) {
      console.log(i);
      console.log(items[key][i]);

      list = `<div class="qoute-con">
      <span class="close" onclick=popUp.style.display="none">&times;</span>
      <blockqoutes>
      <span class="q-span"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
    </svg>	</span>
      <p id="qoute">${items[key][i].quote}</p>
      <p id="author">${items[key][i].author}</p>
      </blockqoutes>
      </div>`;

      //  <button id="next">Next qoute</button> ;

      document.getElementById("modal").innerHTML = list;
    }
  }
}

// function randomQoute(items) {
//   var random = items[key][Math.floor(Math.random() * items.length)];
//   console.log(random);
//   document.getElementById("qoute").innerText = `${
//     items[key][Math.floor(Math.random() * items.length)].quote
//   }`;
//   document.getElementById("author").innerText = `${random.author}`;
// }
// randomQoute();
// document.getElementById("next").addEventListener("click", randomQoute);
