const itemsEL = document.querySelectorAll(".item");
console.log(`Number of categories: "${itemsEL.length}"`);
console.log("");
itemsEL.forEach((item) => {
  console.log(`Category: "${item.firstElementChild.textContent}"`);
  const listEL = item.lastElementChild;
    console.log(`Elements: "${listEL.children.length}"`);
    console.log("");
});
  