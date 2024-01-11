

function btnGlobal() {
  const btn = document.querySelector('.sub')

  return btn
}

function divGlobal() {
  const div = document.querySelectorAll('.teste')
  return div
}

const content = document.querySelector('.content')

class Book {
  // the constructor...
  static #myLibrary = []
  constructor (title, author, year, read, id){
  this.title = title,
  this.author = author,
  this.year = year,
  this.read = read

    
  }
  
  
  static internalAddBooks = () => {
  
    this.#myLibrary.push(new Book('Grande Sertão: Veredas', 'Guimarães Rosa', 1956, true))
    this.#myLibrary.push(new Book('Dom Casmurro', 'Machado de Assis', 1899, true))
    this.#myLibrary.push(new Book('Memórias póstumas de Brás Cubas', 'Machado de Assis', 1881, true))
    this.#myLibrary.push(new Book('O cortiço', 'Aluísio Azevedo', 1890, false))
    this.#myLibrary.push(new Book('Os sertões', 'Euclides da Cunha', 1902, true))
    this.#myLibrary.push(new Book('Macunaíma', ' Mário de Andrade', 1928, true))
    this.#myLibrary.push(new Book('A Paixão Segundo G.H.', 'Clarice Lispector', 1964, false))
    this.#myLibrary.push(new Book('São Bernardo', 'Graciliano Ramos', 1934, false))
    this.#myLibrary.push(new Book('Vidas Secas', 'Graciliano Ramos', 1938, true))
    this.#myLibrary.push(new Book('Angústia', 'Graciliano Ramos', 1936, false))
  
  }

  show = () => {
 
    this.content = document.querySelector('.content')
    this.content.innerHTML = ''
    
  
      for (let i = 0; i < Book.#myLibrary.length; i++){
       

      this.div = document.createElement('div')
      this.div.classList.add('teste')
      this.h2 = document.createElement('h2')
      this.h3 = document.createElement('h3')
      this.h4 = document.createElement('h4')
        this.content.appendChild(this.div)
        this.div.appendChild(this.h2)
      this.h2.innerText = `${Book.#myLibrary[i].title}`
      
        this.div.appendChild(this.h3)
        this.h3.innerText = `${Book.#myLibrary[i].author}`
        this.div.appendChild(this.h4)
        this.h4.innerText = `${Book.#myLibrary[i].year}`
       
        if(Book.#myLibrary[i].read === true){
        this.div.classList.add('test2')
          this.p = document.createElement('p')
          this.h4.appendChild(this.p)
          this.p.innerText = 'Lido'
          this.p.style.color = 'black'
        }
      
        
      }
     pickBook()
      this.#deleteBook()
    
      this.#editBook()
    
  }

  #addBooktoLibrary = () => {
   
    this.lido = document.querySelector('#readYes')
    this.btn = btnGlobal()
      this.btn.addEventListener('click', e => {
      
        this.title = document.querySelector('#titulo').value;
        this.author = document.querySelector('#autor').value;
        this.year = document.querySelector('#ano').value;
        this.read
        
        if(this.title === '' || this.author === '') {
          alert('Preencha os campos de titulo e autor')
          return this.show()
        }  
        
      
        this.div = document.createElement('div')
        this.div.classList.add('teste')
        this.h2 = document.createElement('h2')
        this.h3 = document.createElement('h3')
        this.h4 = document.createElement('h4')
        this.content = document.querySelector('.content')

        this.content.appendChild(this.div)
        this.div.appendChild(this.h2)
      
        
       
       
        this.h2.innerText = `${this.title}`
        
      
      
     
      
        this.div.appendChild(this.h3)
        this.h3.innerText = `${this.author}`
        this.div.appendChild(this.h4)
        this.h4.innerText = `${this.year}`
      
       
      
        if(this.lido.checked){
          this.div.classList.add('test2')
          this.read = true
          this.p = document.createElement('p')
          this.h4.appendChild(this.p)
          this.p.innerText = 'Lido'
         this.p.style.color = 'black'
        } else {
          this.read = false
        }
       
      
        Book.#myLibrary.push(new Book(this.title, this.author, this.year, this.read))
        console.log(Book.#myLibrary)
        this.content.innerHTML = '';
        this.show()
        })
       
  }   
  
  #deleteBook = () => {
    this.del = document.querySelector('.del')
    this.pickDiv = divGlobal()
  
    this.del.addEventListener('click', e => {
      this.pickDiv.forEach((item) => {
        for(let i = 0; i < Book.#myLibrary.length; i++){
  
          if(item.classList.contains('delete') && Book.#myLibrary[i].title === item.firstChild.textContent){
            console.log('oi')
            let arr = Book.#myLibrary.splice(i, 1)
            
            item.remove()
            pickBook()
            this.btn.classList.remove('a')
            this.show()
          }
        }
      })
    })

  }
  
  #editBook = () => {
    this.edit = document.querySelector('.edit')
  
   
    this.edit.addEventListener('click', e => {
      this.input = document.querySelectorAll('input')
      this.btn.classList.toggle('a')
      this.input.forEach((value) => {
        this.pickDiv.forEach((items) => {
          for(let i = 0; i < Book.#myLibrary.length; i++){
            if(items.classList.contains('delete') && Book.#myLibrary[i].title === items.firstChild.textContent){
            
              console.log(items)
             
              if(this.input[3].checked && this.input[0].value === '' && this.input[1].value === ''){
         
                Book.#myLibrary[i].read = true
                console.log(value.title)
                this.read = true
               
              } else if (this.input[4].checked) {
                Book.#myLibrary[i].read = false
                this.read = false
                
              }  
  
              
              if(this.input[0].value === '' || this.input[1].value === ''){
                return this.show()
               }
           
                Book.#myLibrary[i].title = this.input[0].value
                Book.#myLibrary[i].author = this.input[1].value
                Book.#myLibrary[i].year = this.input[2].value
                console.log(this.input[0].value)
  
                if(this.input[3].checked){
                  Book.#myLibrary[i].read = true
                  console.log(value.title)
                  this.read = true
                  this.show()
                } else if (this.input[4].checked) {
                  Book.#myLibrary[i].read = false
                  this.read = false
                  this.show()
                }  
                     
            }
          }
        })
    })
  })
  }

  addBook = () => {
    this.#addBooktoLibrary()
  }
  
}
        


const pickBook = () => {

  const edit = document.querySelector('.edit')
  let pickDiv = divGlobal()
  let btn = btnGlobal()
  pickDiv.forEach((item) => {

   item.addEventListener('click', e => {
       item.classList.toggle('delete')
       if(item.classList.contains('delete')){
      
        btn.classList.add('a')
       } else {
         
        btn.classList.remove('a')
       }

  
      edit.style.display = 'inline'

    })
   
  })

 
 
}


const pick = (function (){
  const teste = new Book()
  Book.internalAddBooks()
  teste.addBook()
  return teste.show()
})()
