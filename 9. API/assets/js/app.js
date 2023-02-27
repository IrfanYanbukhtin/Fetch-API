function GetProducts() {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        let items = '';
        data.forEach(item => {
            items += `
            <div id=${item.id} class="col-lg-3">
            <div id=${item.rating.rate > 3 ? "green" : "red"} class="card">
              <img src=${item.image} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description.length > 20 ? item.description.slice(0,20) + "..." : item.description}</p>
                <p>Price: ${item.price} AZN</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
            `
        })
        document.getElementById('list').innerHTML = items

        let input = document.querySelector('#inp');
        input.onkeyup = function() {
            
        }

    })
    .catch(err => console.log(err))
}

GetProducts();


function GetCategories() {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => {
        let items = '';

        data.forEach(item => {
            items += `
            <div class="col-lg-3 text-center">
                <span class="cats">${item}</span>
            </div>
            `
        })

        document.getElementById('cat_list').innerHTML = items;

        let spans = document.querySelectorAll('.cats');

        for(let span of spans) {
            span.onclick = function() {
                let inner = this.innerHTML;

                fetch(`https://fakestoreapi.com/products/category/${inner}`)
                .then(res => res.json())
                .then(data => {
                    let items = '';
                    data.forEach(item => {
                        items += `
                        <div class="col-lg-3">
                        <div id=${item.rating.rate > 3 ? "green" : "red"} class="card">
                          <img src=${item.image} class="card-img-top" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.description.length > 20 ? item.description.slice(0,20) + "..." : item.description}</p>
                            <p>Price: ${item.price} AZN</p>
                            <a href="#" class="btn btn-primary">Add to cart</a>
                          </div>
                        </div>
                      </div>
                        `
                    })
                    document.getElementById('list').innerHTML = items
                })
                .catch(err => console.log(err))
            }
        }
    })
    .catch(err => console.log(err))
}

GetCategories()


// let spans = document.querySelectorAll('.cats')
// console.log(spans);