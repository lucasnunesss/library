const content = document.querySelector('.content')
const input = document.querySelectorAll('input')
const btn = document.querySelector('.sub')
const del = document.querySelector('.del')


const myLibrary = [];

function Book(title, author, year, read, id) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.year = year,
  this.read = read
  this.id = id
          
  }








myLibrary.push(new Book('Grande Sertão: Veredas', 'Guimarães Rosa', 1956, true, 0))
myLibrary.push(new Book('Dom Casmurro', 'Machado de Assis', 1899, true, 1))
myLibrary.push(new Book('Memórias póstumas de Brás Cubas', 'Machado de Assis', 1881, true, 2))
myLibrary.push(new Book('O cortiço', 'Aluísio Azevedo', 1890, false, 3))
myLibrary.push(new Book('Os sertões', 'Euclides da Cunha', 1902, true, 4))
myLibrary.push(new Book('Macunaíma', ' Mário de Andrade', 1928, true, 5))
myLibrary.push(new Book('A Paixão Segundo G.H.', 'Clarice Lispector', 1964, false, 6))
myLibrary.push(new Book('São Bernardo', 'Graciliano Ramos', 1934, false, 7))
myLibrary.push(new Book('Vidas Secas', 'Graciliano Ramos', 1938, true, 8))
myLibrary.push(new Book('Angústia', 'Graciliano Ramos', 1936, false, 9))








function create(){
  
  for (let i = 0; i < myLibrary.length; i++){

    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let h3 = document.createElement('h3')
    let h4 = document.createElement('h4')
    div.classList.add('teste')
    content.appendChild(div)
    div.appendChild(h2)
    

    console.log('oi')
    console.log(myLibrary[i])
    h2.innerText = `${myLibrary[i].title}`
    console.log(h2)
    div.appendChild(h3)
    h3.innerText = `${myLibrary[i].author}`
    div.appendChild(h4)
    h4.innerText = `${myLibrary[i].year}`
    
    if(myLibrary[i].read === true){
      div.classList.add('test2')
    
    }

  }
    }


create()
