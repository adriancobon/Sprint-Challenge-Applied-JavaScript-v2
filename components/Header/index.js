// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    var x = document.createElement("header");
    x.setAttribute("date", "SMARCH 28, 2019");
    document.body.appendChild(x);

    var y = document.createElement("H1");
    var t = document.createTextNode("Lambda Times");
    y.appendChild(t);

    var z = document.createElement("temp");
    var t = document.createTextNode("98°")
    z.appendChild(t);
}
