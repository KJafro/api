const shop = [
    {
        id:1,
        title:"Nike Green Baggy Jumper",
        price:49.99,
        description:"Trendy green jumper, perfect for a cold day.",
        category:"womens",
        image:"https://i.pinimg.com/originals/3b/dc/c8/3bdcc8e517b48c8d8fa606b4cca26306.png",
        rating:{"rate":3.9,"count":120}
    },
    {
        id:2,
        title:"Adidas Grey T-Shirt",
        price:29.99,
        description:"Lightweight grey t-shirt, perfect for hot weather.",
        category:"mens",
        image:"https://sguru.org/wp-content/uploads/2018/02/greyback_61269BC583CD3.png",
        rating:{"rate":4.5,"count":88}
    },
    {
        id:3,
        title:"Adidas Sport Woven Jacket",
        price:69.99,
        description:"Waterproof grey jacket, perfect for rainy weather.",
        category:"womens",
        image:"https://images.eastbay.com/pi/BR3382/zoom/adidas-athletics-sport-id-woven-jacket-mens",
        rating:{"rate":4.6,"count":133}
    },
    {
        id:4,
        title:"Puma Black Jumper",
        price:39.99,
        description:"Black crewneck jumper, perfect for cold weather.",
        category:"mens",
        image:"https://www.stadium.se/INTERSHOP/static/WFS/Stadium-SwedenB2C-Site/-/Stadium/sv_SE/Detail/307566_101_PUMA_W%20HALF%20ZIP%20CREW.png",
        rating:{"rate":4.1,"count":55}
    },
    {
        id:5,
        title:"North Face DryVent Jacket",
        price:99.99,
        description:"Black waterproof jacket, perfect for rainy weather.",
        category:"mens",
        image:"https://th.bing.com/th/id/R.59f8b84b463e126eccc4162d1c86518b?rik=O4E5hJ3ibrPy2w&pid=ImgRaw&r=0",
        rating:{"rate":4.3,"count":102}
    },
    {
        id:6,
        title:"North Face Nuptse Jacket",
        price:249.99,
        description:"Black padded jacket, perfect for cold weather.",
        category:"unisex",
        image:"https://www.pricerunner.dk/product/1200x630/3000921990/The-North-Face-Youth-1996-Retro-Nuptse-Jacket-TNF-Black.jpg",
        rating:{"rate":4.8,"count":152}
    },
    {
        id:7,
        title:"Adidas White T-Shirt",
        price:34.99,
        description:"White t-shirt, perfect for sports and the gym.",
        category:"womens",
        image:"https://th.bing.com/th/id/OIP.5PFwieE9hld81k8WL4uRywHaHa?pid=ImgDet&rs=1",
        rating:{"rate":3.8,"count":62}
    },
    {
        id:8,
        title:"Nike White Hoodie",
        price:59.99,
        description:"White hoodie, perfect for cold weather.",
        category:"unisex",
        image:"https://i.pinimg.com/originals/fa/1e/5b/fa1e5b783e1154361ff45d80b1b36ef0.png",
        rating:{"rate":4.5,"count":73}
    },
    {
        id:9,
        title:"Puma Grey Hoodie",
        price:39.99,
        description:"Grey hoodie, perfect for cold weather.",
        category:"unisex",
        image:"https://images.eastbay.com/pi/85174341/zoom/puma-essentials-big-logo-hoodie-mens",
        rating:{"rate":4.0,"count":58}
    },
    {
        id:10,
        title:"Nike Grey Joggers",
        price:49.99,
        description:"Grey joggers, perfect for everyday weather.",
        category:"unisex",
        image:"https://www.pricerunner.dk/product/320x320/3000251873/Nike-Club-Joggingbukser-Maend-Graa.jpg",
        rating:{"rate":4.1,"count":83}
    },
    {
        id:11,
        title:"Puma Grey Joggers",
        price:39.99,
        description:"Grey joggers, perfect for everyday weather.",
        category:"unisex",
        image:"https://images.eastbay.com/pi/85203304/zoom/puma-modern-sport-jogger-womens",
        rating:{"rate":3.7,"count":62}
    },
    {
        id:12,
        title:"Adidas Navy Shorts",
        price:29.99,
        description:"Navy shorts, perfect for sports and the gym.",
        category:"unisex",
        image:"https://th.bing.com/th/id/R.e8fbd1991690336e98a8c32e046a5e8a?rik=HV011nPcukoI0Q&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fshorts-transparent-background%2fshorts-transparent-background-24.png&ehk=qAjlmLaOBXf4k2yWChG2lpkqPueYXnOtwxYc3jg2NTI%3d&risl=&pid=ImgRaw&r=0",
        rating:{"rate":3.8,"count":58}
    },
    {
        id:13,
        title:"Puma Navy Shorts",
        price:24.99,
        description:"Navy shorts, perfect for sports and the gym.",
        category:"womens",
        image:"https://vejasp.abril.com.br/wp-content/uploads/2019/01/puma-shorts.png",
        rating:{"rate":3.2,"count":55}
    },
    {
        id:14,
        title:"Nike Navy Joggers",
        price:69.99,
        description:"Navy joggers, perfect for everyday weather.",
        category:"unisex",
        image:"https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw7e16abd8/images/58729701/Rebel_58729701_black_hi-res.png?sw=1000&sh=1000&sm=fit",
        rating:{"rate":3.8,"count":72}
    },
    {
        id:15,
        title:"Nike Tech Fleece Joggers",
        price:69.99,
        description:"Black and white joggers, perfect for everyday weather.",
        category:"mens",
        image:"https://images.garmentory.com/images/3084036/original/Tech-Fleece-Jogger-20191003072016.png?1570087218",
        rating:{"rate":4.4,"count":122}
    },
    {
        id:16,
        title:"Nike Tech Fleece Hoodie",
        price:89.99,
        description:"Grey hoodie, perfect for cold weather.",
        category:"mens",
        image:"https://th.bing.com/th/id/OIP.AmZLrX_G5-RSELQwmWrvhgHaI4?pid=ImgDet&rs=1",
        rating:{"rate":4.5,"count":138}
    },
    {
        id:17,
        title:"Nike Air Force 1 Shoes",
        price:109.99,
        description:"White trainers, perfect for everyday weather.",
        category:"unisex",
        image:"https://i.pinimg.com/originals/e8/d0/51/e8d051e582500d0bf8474f36e56983da.png",
        rating:{"rate":4.8,"count":202}
    },
    {
        id:100,
        title:"Adidas Samba Shoes",
        price:64.99,
        description:"Black classic trainers, perfect for any types of weather.",
        category:"mens",
        image:"https://www.pngplay.com/wp-content/uploads/6/Samba-Black-Adidas-Shoes-PNG.png",
        rating:{"rate":3.7,"count":49}
    }
]