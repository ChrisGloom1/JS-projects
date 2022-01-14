/*
Tutorial: https://youtu.be/JkeyKeK3V24
GitHub user: https://github.com/bradtraversy/
*/

const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textArea");

// Makes sure the cursor is in focus, and the user can start typing right away instead of clicking the textarea
textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if(e.key == "Enter"){
    setTimeout(() => {
      e.target.value="";
    }, 20);
    randomSelect();
  }
});

function createTags(input){
  const tags = input.split(",").filter(tag => tag.trim()!=="").map(tag => tag.trim());
  console.log(tags);

  tagsEl.innerHTML = "";

  tags.forEach(tag => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  })
}

function randomSelect(){
  const times = 25;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 90)
  }, 90)

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 90)
  }, times * 90)
}

function pickRandomTag(){
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag){
  tag.classList.add("highlight");
}
function unHighlightTag(tag){
  tag.classList.remove("highlight");
}