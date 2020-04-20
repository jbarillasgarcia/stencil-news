import { Component, ComponentInterface, State, Method, h } from '@stencil/core';

@Component({
  tag: 'search-query',
  styleUrl: 'search-query.css'
})
export class SearchQuery implements ComponentInterface {

  @State() query: string;
  @State() data = [];

  handleSubmit(e) {
    e.preventDefault()
    // send data to our backend
    this.search(this.query);
  }

  @Method()
  async search(query) {
    const responseData = await fetch("https://gnews.io/api/v3/search?q=" + query + "&token=47892f9c82d2883469849664b4acf351&lang=es")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        return data;
      });

    this.data = responseData.articles;
  }

  handleChange(event) {
    this.query = event.target.value;
  }

  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-8 offset-md-2 mt-3 mb-3">
            <form onSubmit={(e) => this.handleSubmit(e)}>              
              <div class="input-group mb-3">
                <input type="text" value={this.query} onInput={(event) => this.handleChange(event)}  class="form-control" placeholder="¿qué desea buscar hoy?"></input>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="submit">Buscar</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="row">                 
          <div class="col-md-8 offset-md-2">   
            <div class="row">
              {this.data.map((value) =>
                <div class="col-md-4 mb-3">
                  <div class="card">                    
                    <img class="card-img-top" src={value.image} alt=""/>                    
                    <div class="card-body">
                      <h5 class="card-title">{value.title}</h5>
                      <p class="card-text">{value.description}</p>
                      <a href={value.url} class="btn btn-primary btn-sm" target="blank">more...</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

}
