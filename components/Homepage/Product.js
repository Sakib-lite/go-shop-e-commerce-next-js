import Image from "next/image";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
// import { sendCartData } from "../store/thunk";

export default function Product({ id, description, title, image, price }) {
  const dispatch = useDispatch();

  // const product={
  //   id,title,price
  // }

  // async function sendItemHandler(item) {
  //   const response = await fetch("/api/cart-item", {
  //     method: "POST",
  //     body: JSON.stringify(item),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemtoCart({
        id,
        title,
        price,
        image,
        description,
      })
    );
    // sendItemHandler(product)
  };

  //  const cart = useSelector((state) => state.cart);
  return (
    <Fragment>
      <section className=" sm:py-10 bg-green-100 text-center transform duration-500 hover:-translate-y-2 cursor-pointer lg:w-10/12 rounded-lg mr-6 md:px-20 hover:shadow-xl sm:px-10 ml-3.5 mt-4">
        <div className="w-10/12 mx-auto mt-2 ">
          <Image
            src={image}
            alt="iphone"
            width={8}
            height={10}
            layout="responsive"
          />
        </div>
        <div className="space-x-1 flex justify-center md:mt-10 sm:mt-5 mt-2">
          <svg
            className="w-4 h-4 mx-px fill-current text-orange-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-orange-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-orange-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-orange-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
          </svg>
        </div>
        <h1 className="lg:text-3xl sm:text-lg text-sm font-medium   sm:font-semibold sm:my-5 my-3  sm:line-clamp-2 line-clamp-2 ">
          {title}
        </h1>
        <p className="mb-5 sm:text-lg text-sm line-clamp-3">{description}</p>
        <h2 className="font-semibold mb-5">${price}</h2>
        <button
          onClick={addToCartHandler}
          className="sm:p-2 sm:px-2 bg-green-500 text-white rounded-md hover:bg-green-600 sm:text-lg  text-lg px-3 py-1 mb-4"
        >
          Add To Cart
        </button>
      </section>
    </Fragment>
  );
}
