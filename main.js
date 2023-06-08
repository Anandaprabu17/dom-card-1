var section = document.getElementById("banner");


var div1 = document.createElement("div");
section.appendChild(div1);
div1.classList.add("container");

var image = document.createElement("img");
div1.appendChild(image);
image.src = "team-1.jpg";

var heading = document.createElement("h2");
div1.appendChild(heading);
heading.innerHTML = "Walter White";

var para1 = document.createElement("p");
div1.appendChild(para1);
para1.classList.add("para1");
para1.innerHTML = "Chief Executive Officer";

var para2 = document.createElement("p");
div1.appendChild(para2);
para2.classList.add("para2");
para2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit";

var link = document.createElement("p");
div1.appendChild(link);
link.classList.add("link");
link.innerHTML = "Read More";
