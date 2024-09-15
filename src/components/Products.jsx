/* import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import {toast} from "react-hot-toast";


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-primary btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-primary btn-sm m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-primary btn-sm m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-primary btn-sm m-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-primary btn-sm m-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                         //  <li className="list-group-item">Dapibus ac facilisis in</li>
                         // <li className="list-group-item">Vestibulum at eros</li>   
                </ul>
                <div className="card-body">
                  <Link
                    to={"/product/" + product.id}
                    className="btn btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center"> <b> Latest Products </b> </h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;  


 */ 



import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Products = () => {
  const [filter, setFilter] = useState([]);
  const dispatch = useDispatch();

  // Custom product data
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

  useEffect(() => {
    setFilter(data); // Set the custom data
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-primary btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-primary btn-sm m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-primary btn-sm m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-primary btn-sm m-2"
            onClick={() => filterProduct("jewellery")}
          >
            Jewellery
          </button>
          <button
            className="btn btn-outline-primary btn-sm m-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100" style={{ backgroundColor: '#D5F3FE' }} key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt={product.title}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link
                    to={"/product/" + product.id}
                    className="btn btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">
            <b> Latest Products </b>
          </h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        <ShowProducts />
      </div>
    </div>
  );
};

export default Products;

