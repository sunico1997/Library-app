const openModal = document.getElementById("openModal")
const closeModal= document.getElementById("closeModal")
const moral = document.getElementById("moral")
const addBtn = document.getElementById("addBtn")
const title = document.getElementById("title")
const author =document.getElementById("author")
const pages = document.getElementById("pages")
const library = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}


function clearInput(){
    title.value ="";
    author.value ="";
    pages.value ="";
};

function closeModalbtn(){
    moral.style.display ="none"
}

function openModalbtn(){
    moral.style.display = "flex";
}

addBtn.addEventListener("click",function(){
    event.preventDefault();

    if (title.value ==="" || author.value ==="" ||  pages.value ==="") return;

    const book= new Book(title.value, author.value, pages.value);
    library.push(book)
    clearInput();
    closeModalbtn();


   
    console.log(book)
  

})

openModal.addEventListener("click",openModalbtn);

closeModal.addEventListener("click", closeModalbtn);


