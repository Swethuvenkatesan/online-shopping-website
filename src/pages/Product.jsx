/* import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setSimilarProducts(data2);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                    // <ul className="list-group list-group-flush">
                    // <li className="list-group-item lead">${product.price}</li>
                   //</ul> 
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addProduct(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
          <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product; */


import React, { useEffect, useState } from "react"; 
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";

// Custom product data (same as in components/Product.jsx)
const data = [
  {
    id: 1,
    title: "Men's Casual Shirt",
    description: "A stylish casual shirt for men.",
    price: 700.99,
    image: "https://5.imimg.com/data5/RB/CN/MY-39077357/mens-fashion-shirt.jpg",
    category: "men's clothing",
  },
  {
    id: 2,
    title: "Men's formal Shirt",
    description: "A stylish formal shirt for men.",
    price: 1000.99,
    image: "https://assets.ajio.com/medias/sys_master/root/20231205/G3z0/656ed440ddf7791519b1e6e2/-473Wx593H-461119105-blue-MODEL.jpg",
    category: "men's clothing",
  },
  {
    id: 3,
    title: "Women's T-Shirt",
    description: "Elegant dress for women.",
    price: 450.99,
    image: "https://www.jiomart.com/images/product/original/rvvncvagcs/diaz-stylish-crop-tops-for-women-half-sleeves-crop-top-cotton-crop-t-shirts-for-women-girls-women-crop-top-t-shirt-product-images-rvvncvagcs-6-202303231316.jpg?im=Resize=(500,630)",
    category: "women's clothing",
  },
  {
    id: 4,
    title: "Gold Necklace",
    description: "Beautiful gold necklace.",
    price: 5550.0,
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/c/q/8/na-na-1-cbniti-deora-jewellery-original-imah35phy7dqddhu.jpeg?q=90&crop=false",
    category: "jewellery",
  },
  {
    id: 5,
    title: "Smartphone",
    description: "Latest technology smartphone.",
    price: 30999.99,
    image: "https://cdn.thewirecutter.com/wp-content/media/2024/05/smartphone-2048px-1013.jpg?auto=webp&quality=75&width=1024",
    category: "electronics",
  },
  {
    id:6,
    title: "Men's Casual Shirt",
    description: "A stylish casual shirt for men.",
    price: 888.99,
    image: "https://assets.ajio.com/medias/sys_master/root/20240716/q251/6696aca91d763220fac86454/-473Wx593H-466747617-pink-MODEL6.jpg",
    category: "men's clothing",
  },
  {
    id: 7,
    title: "Men's stylish shirt",
    description: "A stylish shirt for men.",
    price: 1200.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe6PqAmQiKPfKe7_6TnL0eYYILGE72Lv2Iew&s",
    category: "men's clothing",
  },
  {
    id: 8,
    title: "Men's formal Shirt",
    description: "A stylish formal shirt for men.",
    price: 499.99,
    image: "https://levi.in/cdn/shop/files/329070354_01_Front_2d85dfe5-f0c0-44da-aefa-913f79f914c3.jpg?v=1699257062",
    category: "men's clothing",
  },
  {
    id: 9,
    title: "Women's maxi",
    description: "Elegant maxi dress for women.",
    price: 400.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8vtM-LzoiA0rhdThn-W-CVi1K3aneLDcHQ&s",
    category: "women's clothing",
  },
  {
    id: 10,
    title: "Women's Dress",
    description: "Elegant morden dress for women.",
    price: 300.99,
    image: "https://i.pinimg.com/564x/a0/a7/ab/a0a7ab4795087a0d03fa6805e47273a4.jpg",
    category: "women's clothing",
  },
  {
    id: 11,
    title: "Women's maxi Top",
    description: "Elegant maxi Top dress for women.",
    price: 800.99,
    image: "https://www.jiomart.com/images/product/500x630/rvavpevp1g/buynewtrend-light-blue-georgette-floral-print-smocked-women-midi-dress-product-images-rvavpevp1g-0-202303041931.jpg",
    category: "women's clothing",
  },
  {
    id: 12,
    title: "Women's Top",
    description: "Elegant dress for women.",
    price: 665.99,
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/n/6/5/5xl-kurti-western-dresses-for-women-girls-dress-womens-stylish-original-imagkphfjw9gaskh.jpeg?q=90&crop=false",
    category: "women's clothing",
  },
  {
    id: 13,
    title: "Women's Demin Jacket",
    description: "Elegant Jacket for women.",
    price: 350.99,
    image: "https://www.nextdirect.com/nxtcms/resource/blob/5759382/b3405e481895047bebf1e95d4c605c13/denim-data.jpg",
    category: "women's clothing",
  },
 
  {
    id: 14,
    title: "Diamand Necklace",
    description: "Beautiful Diamand necklace.",
    price: 65000.0,
    image: "https://www.orra.co.in/media/catalog/product/cache/f863675abff2fd3fa792fa24743dba0a/o/s/osn23050.jpg",
    category: "jewellery",
  },
  {
    id: 15,
    title: "SmartWatch",
    description: "Latest technology smartwatch.",
    price: 999.99,
    image: "https://images-cdn.ubuy.co.in/633b12488d2edc65997f4c20-smart-watch-bluetooth-smartwatch-touch.jpg",
    category: "electronics",
  },
  {
    id: 16,
    title: "Women's T-Shirt",
    description: "Elegant dress for women.",
    price: 200,
    image: "https://www.mydesignation.com/cdn/shop/files/peaceful-white-crop-top-for-women-plain-327245.jpg?v=1716279289&width=1500",
    category: "women's clothing",
  },
  {
    id: 17,
    title: "Gold chain",
    description: "Beautiful gold chain.",
    price: 80000.0,
    image: "https://res.cloudinary.com/blingvine1/image/fetch/w_1200,h_628,c_pad,b_auto/http://blingvine.com/cdn/shop/articles/25-nature-inspired-jewellery-designs-for-spring-2021-215773_84ec3628-a16c-40c2-8010-6d34d48b17a0.jpg?v=1636561610",
    category: "jewellery",
  },
  {
    id: 18,
    title: "Airpods",
    description: "Latest technology Airpods.",
    price: 1000.99,
    image: "https://www.imagineonline.store/cdn/shop/files/AirPods_Pro_2nd_Gen_with_USB-C_PDP_Image_Position-1__global.jpg?v=1694756304&width=823",
    category: "electronics",
  },
  {
    id: 19,
    title: "Diamand Earring",
    description: "Beautiful Diamand Earring .",
    price: 150.0,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/8/337072892/RP/OJ/HJ/161854552/whatsapp-image-2023-08-22-at-10-35-56-am-1-500x500.jpeg",
    category: "jewellery",
  },
  {
    id: 20,
    title: "SmartTV",
    description: "Latest technology smartTV.",
    price: 45999.99,
    image: "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_1100,f_auto,q_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/b41a7fde-dcc1-11ec-9f1b-2e0c91dc8f24.jpg",
    category: "electronics",
  },
  {
    id: 21,
    title: "SmartTablet",
    description: "Latest technology smartTablet.",
    price: 25999.99,
    image: "https://bnewmobiles.com/cdn/shop/products/LenovoTB-X606VSmartTabM10FHDPlus_4GBRAM_128GBStorage_IronGrey_2048x.png?v=1631265340",
    category: "electronics",
  },

  
];

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const dispatch = useDispatch();

  // Simulating a fetch from a static array
  useEffect(() => {
    const foundProduct = data.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);

    // Setting similar products based on category
    if (foundProduct) {
      const similar = data.filter(
        (item) => item.category === foundProduct.category && item.id !== foundProduct.id
      );
      setSimilarProducts(similar);
    }
  }, [id]);

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <h3 className="display-6 my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <div className="py-4 my-4">
        <div className="d-flex">
          {similarProducts.map((item) => {
            return (
              <div key={item.id} className="card mx-4 text-center">
                <img
                  className="card-img-top p-3"
                  src={item.image}
                  alt={item.title}
                  height={300}
                  width={300}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title.substring(0, 15)}...</h5>
                  <p className="lead">${item.price}</p>
                  <Link to={`/product/${item.id}`} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => addProduct(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{product ? <ShowProduct /> : <p>Loading...</p>}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2>You may also like</h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
              <ShowSimilarProduct />
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;