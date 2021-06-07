let doc = document;

doc.querySelector("html").setAttribute("lang", "en");

let head = document.head;

let meta = doc.createElement("meta");
meta.setAttribute("charset", "UTF-8");

let title = doc.createElement("title");
title.textContent = "JS 8";

let author = doc.createElement("meta");
author.setAttribute("name","author");
author.setAttribute("content","N.Huryan");

//шрифты
let link = doc.createElement("link");
link.setAttribute("href","https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");
link.setAttribute("rel","stylesheet");
let style = doc.createElement("style");

let arrayHead = [meta, title, author, link, style];
for (let i=0; i<arrayHead.length; i++) {
    head.append(arrayHead[i]);
}


//body

let page = doc.createElement("div");
page.classList.add("page");

let script = doc.querySelector("script");

script.before(page);

let header = doc.createElement("header");
header.classList.add("header");
let containerHeader = doc.createElement("div");
containerHeader.classList.add("container");
let h1 = doc.createElement("h1");
h1.textContent = "Choose Your Option";
let pHeader = doc.createElement("p");
pHeader.textContent = "But I must explain to you how all this mistaken idea of denouncing"
;


containerHeader.append(h1);
containerHeader.append(pHeader);
header.append(containerHeader);
page.append(header);


let section = doc.createElement("section");
section.classList.add("creator");
let containerSection = containerHeader.cloneNode();

let sectionWrapper = doc.createElement("div");
sectionWrapper.classList.add("creator__wrapper");


let creatorBlock = doc.createElement("div");
creatorBlock.classList.add("creator__block");

let creatorName = doc.createElement("div");
creatorName.classList.add("creator_name");
creatorName.innerHTML = "<b>Freelancer</b>";

let h2 = doc.createElement("h2");
h2.innerHTML = "Initially designed to";

let pName = doc.createElement("p");
pName.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";

let button = doc.createElement("button");
button.classList.add("button");
button.innerHTML = "Start here";

creatorBlock.append(creatorName);
creatorBlock.append(h2);
creatorBlock.append(pName);
creatorBlock.append(button);

let creatorBlock2 = creatorBlock.cloneNode(true);
creatorBlock2.classList.add("creator__block_active");

creatorBlock2.querySelector(".creator_name").innerHTML = "Studio";

sectionWrapper.append(creatorBlock);
sectionWrapper.append(creatorBlock2);
containerSection.append(sectionWrapper)
section.append(containerSection);

header.after(section);

style.innerHTML = `
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    color: #9FA3A7;
}
h1, h2 {
    font-size: 36px;
    line-height: 48px;
    color: #212121;
} 
h1 {margin-bottom: 10px;}
h2 {margin-bottom: 25px;} 
button {
    background: none;
    border: 0;
}
.button {
    font-family: "Open Sans", sans-serif;
    border: 3px solid #FFC80A;
    padding: 17px 33px;
    font-weight: bold;
    color: #212121;
    text-transform: uppercase;
    border-radius: 50px;
}      
.page {
    min-width: 800px;
}
.container {
    width: 800px;
    margin: 0 auto;
    text-align: center;
}
.header {
    margin-top: 122px;
    margin-bottom: 55px;
}
.creator {
    margin-bottom: 122px;
}
.creator__wrapper {
    display: flex;
}
.creator__block {
    border: 1px solid #E8E9ED;
    padding: 81px;
}
.creator__block:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.creator__block:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.creator__block_active {
    border-color: #8F75BE;
    background: #8F75BE;
    color: #FFFFFF;
}
.creator_name {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 19px;
}
.creator__block_active .creator_name {
    color: #FFC80A;
}
.creator__block_active .button {
    color: #fff;
}
.creator__block p {
    margin-bottom: 58px;
}
`





// doc.body.appendChild(page);