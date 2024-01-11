//Using Class
const bot = () => {
  const del = document.querySelectorAll('.teste')
  return del
}

const pickContent = () => {
  this.content = document.querySelector('.content')
  content.innerText = ''
}

class Book {
  #myLibrary = []
  constructor(title, author, year, read){
    this.#myLibrary.title = title
    this.#myLibrary.author = author
    this.#myLibrary.year = year
    this.#deleteItem()
    this.#selectItem()
  }
  

  show = () => {
    this.content = document.querySelector('.content')


    this.#myLibrary.title = document.querySelector('#titulo').value;
    return   this.#myLibrary.title

  }
  author = () => {
  
    this.#myLibrary.author = document.querySelector('#autor').value;
    return  this.#myLibrary.author
  }

  year = () => {
   
    this.#myLibrary.year =  document.querySelector('#ano').value;
    return this.#myLibrary.year
  }
 
  #selectItem = () => {
    console.log('oi')
   this.del = bot()
   this.edit = document.querySelector('.edit')

   this.del.forEach((item) => {
    item.addEventListener('click', e => {
      item.classList.toggle('delete')
      if(item.classList.contains('delete')){
        btn.classList.add('edit')
      } else{
        btn.classList.remove('edit')
      }
           this.edit.display = 'inline'
   })
  
   })
  }
  
  #deleteItem = () => {
    this.del1 = document.querySelector('.del')
 
    this.del1.addEventListener('click', e => {
      this.list = bot()
    
      this.list.forEach((item) => {
        for(let i = 0; i <= this.#myLibrary.length; i++){
          if(item.classList.contains('delete') && this.#myLibrary.title === item.firstChild.textContent){
            let arr = this.#myLibrary.splice(i, 1)
            console.log(arr)
            item.remove()
            this.#selectItem()
            btn.classList.remove('edit')
            pickContent()
          }
        }
      })
    })
  }
     
    }
 // }



const book = () => {
  this.content = document.querySelector('.content')
    
  


  
    this.btn = document.querySelector('.sub')
    btn.addEventListener('click', e => {
      this.teste = new Book()
      this.div = document.createElement('div')
      content.appendChild(this.div)
      div.classList.add('teste')
      this.h2 = document.createElement('h2')
      this.h2.innerText = ''
      this.div.appendChild(this.h2)
      this.h3 = document.createElement('h3')
      this.h4 = document.createElement('h4')
      h2.innerText = teste.show()
      div.appendChild(h3)
      h3.innerText = teste.author()
      div.appendChild(h4)
     h4.innerText = teste.year()
    })
    

}

book()

