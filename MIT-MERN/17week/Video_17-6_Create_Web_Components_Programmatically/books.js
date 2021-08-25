class Book extends HTMLElement{
  constructor(){
    super();
  
  }

  set bookData(bookObject) {

    this.innerHTML = `
      <div class="card">
        <h5 class="card-header">${bookObject.title}</h5>
        <div class="card-body">
          <h5 class="card-title">${bookObject.subtitle}</h5>
          <p class="card-text">
            <table class="table">
              <tr>
                <td class="text-success font-weight-bold">Title:</td>
                <td>${bookObject.title}</td>
              </tr>
              <tr>
                <td class="text-success font-weight-bold">Subtitle:</td>
                <td>${bookObject.subtitle}</td>
              </tr>
              <tr>
                <td class="text-success font-weight-bold">Author:</td>
                <td>${bookObject.author}</td>
              </tr>
              <tr>
                <td class="text-success font-weight-bold">Publisher:</td>
                <td>${bookObject.publisher}</td>
              </tr>
              <tr>
                <td class="text-success font-weight-bold">Description:</td>
                <td>${bookObject.description}</td>
              </tr>
            </table>
          </p>
        </div>
      </div>  
    `;

  }
}

customElements.define('mit-book', Book);