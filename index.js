const content = document.querySelector('.content')
const input = document.querySelectorAll('input')
const btn = document.querySelector('.sub')
const del = document.querySelector('.del')
let lido = document.querySelector('#readYes')
let nLido = document.querySelector('#readNo')
const edit = document.querySelector('.edit')


const myLibrary = [];


function Book(title, author, year, read, id) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.year = year,
  this.read = read
 
          
  }








myLibrary.push(new Book('Grande Sertão: Veredas', 'Guimarães Rosa', 1956, true))
myLibrary.push(new Book('Dom Casmurro', 'Machado de Assis', 1899, true))
myLibrary.push(new Book('Memórias póstumas de Brás Cubas', 'Machado de Assis', 1881, true))
myLibrary.push(new Book('O cortiço', 'Aluísio Azevedo', 1890, false))
myLibrary.push(new Book('Os sertões', 'Euclides da Cunha', 1902, true))
myLibrary.push(new Book('Macunaíma', ' Mário de Andrade', 1928, true))
myLibrary.push(new Book('A Paixão Segundo G.H.', 'Clarice Lispector', 1964, false))
myLibrary.push(new Book('São Bernardo', 'Graciliano Ramos', 1934, false))
myLibrary.push(new Book('Vidas Secas', 'Graciliano Ramos', 1938, true))
myLibrary.push(new Book('Angústia', 'Graciliano Ramos', 1936, false))
 

function show() {
  content.innerText = ''
 
  for (let i = 0; i < myLibrary.length; i++){
  
  let div = document.createElement('div')
  div.classList.add('teste')
  let h2 = document.createElement('h2')
  let h3 = document.createElement('h3')
  let h4 = document.createElement('h4')

  content.appendChild(div)
  div.appendChild(h2)
    h2.innerText = `${myLibrary[i].title}`
  
    div.appendChild(h3)
    h3.innerText = `${myLibrary[i].author}`
    div.appendChild(h4)
    h4.innerText = `${myLibrary[i].year}`
   
    if(myLibrary[i].read === true){
      div.classList.add('test2')
      let p = document.createElement('p')
      h4.appendChild(p)
      p.innerText = 'Lido'
      p.style.color = 'black'
    }
    
  }
 deleteBook()
 
}

function alerta(){
  alert('Não pode haver espaço em branco')
}

function addBookToLibrary(){


btn.addEventListener('click', e => {

  let title = document.querySelector('#titulo').value;
  let author = document.querySelector('#autor').value;
  let year = document.querySelector('#ano').value;
  let read
  
  if(title === '' || author === '') {
    alerta()
    return show()
  } 
  

  let div = document.createElement('div')
  div.classList.add('teste')
  let h2 = document.createElement('h2')
  let h3 = document.createElement('h3')
  let h4 = document.createElement('h4')

  content.appendChild(div)
  div.appendChild(h2)

  
 
 
  h2.innerText = `${title}`
  


  if(h2.innerText)

  div.appendChild(h3)
  h3.innerText = `${author}`
  div.appendChild(h4)
  h4.innerText = `${year}`

 

  if(lido.checked){
    div.classList.add('test2')
    read = true
    let p = document.createElement('p')
    h4.appendChild(p)
    p.innerText = 'Lido'
    p.style.color = 'black'
  } else {
    read = false
  }
 

  myLibrary.push(new Book(title, author, year, read))
  show()
  
  })
  
} 



function deleteBook(){
  
 

  
  let teste3 = document.querySelectorAll('.teste')
  teste3.forEach((item) => {
  
  
   item.addEventListener('click', e => {
       item.classList.toggle('delete')
       if(item.classList.contains('delete')){
        btn.classList.add('edit')
       } else{
        btn.classList.remove('edit')
       }
        edit.style.display = 'inline'
       
    })
   
  })
 
}
function delBooks(){
del.addEventListener('click', e => {
    let teste3 = document.querySelectorAll('.teste')
    let num = 0
    teste3.forEach((items) => {
        
        for(let i = 0; i < myLibrary.length; i++){
          if(items.classList.contains('delete') && myLibrary[i].title === items.firstChild.textContent){
            let arr = myLibrary.splice(i, 1)
            console.log(myLibrary)
            items.remove()
            deleteBook()
            btn.classList.remove('edit')
            show()

        }
       
      }
    })
})
}

function editBooks(){
  edit.addEventListener('click', e => {
    let teste3 = document.querySelectorAll('.teste')
    btn.classList.toggle('edit')
    input.forEach((value) => {
      teste3.forEach((items) => {
        for(let i = 0; i < myLibrary.length; i++){
          if(items.classList.contains('delete') && myLibrary[i].title === items.firstChild.textContent){
            console.log(input[0])
            console.log(input[4])

           
            if(input[3].checked && input[0].value === '' && input[1].value === ''){
              myLibrary[i].read = true
              console.log(value.title)
              read = true
              show()
            } else if (input[4].checked) {
              myLibrary[i].read = false
              read = false
              show()
            }  

            
            if(input[0].value === '' || input[1].value === ''){
              return show()
             }
          
              myLibrary[i].title = input[0].value
              myLibrary[i].author = input[1].value
              myLibrary[i].year = input[2].value

              if(input[3].checked){
                myLibrary[i].read = true
                console.log(value.title)
                read = true
                show()
              } else if (input[4].checked) {
                myLibrary[i].read = false
                read = false
                show()
              }  
                   
          }
        }
      })
    })
  })
}


deleteBook()
addBookToLibrary()
show()
delBooks()
editBooks()





