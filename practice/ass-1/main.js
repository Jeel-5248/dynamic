const cardarray=[
  {
    id:"1",
    name:"handbag",
    price:750,
    imageurl:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61dSlNvfYQL._UL1429_.jpg ",
    alturl:"this is image"
  },
  {
    id:"2",
    name:"laptop",
    price:45000,
    imageurl:"https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3319&hei=2405&qlt=100,1&resMode=sharp2&size=3319,2405&chrss=full&imwidth=5000 width:100px height:250px" ,
    alturl:"this is image"
  },
  {
    id:"3",
    name:"iphone",
    price:85000,
    imageurl:"https://i.pcmag.com/imagery/roundups/07ml3nh3QrzTLZ9UycfQQB2-49..v1668971764.jpg ",
    alturl:"this is image"
  }
];

let products=``;
cardarray.forEach(function(data){

  products=products+
  `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data.imageurl}"alt="${data.alturl}">
  <div class="card-body">
    <h5 class="card-title">name:${data.name}</h5>
    <p class="card-text">price:${data.price}</p>
    <a href="#" class="btn btn-primary">add to cart</a>
  </div>
</div>
  `;
});

  

const cart=document.querySelector(".cards");
cart.innerHTML=products;

