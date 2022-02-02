import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";
import { API } from "../helpers/const";

export const ClientContext = createContext();

let cart = JSON.parse(localStorage.getItem("cart"));
let favorite = JSON.parse(localStorage.getItem("favorite"));

const INIT_STATE = {
  books: null,
  detail: null,
  booksCount: cart ? cart?.books?.length : 0,
  favoriteCount: favorite ? favorite?.books?.length : 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_BOOKS":
      return { ...state, books: action.payload };
    case "GET_BOOK_DETAIL":
      return { ...state, detail: action.payload };

    case "ADD_AND_DELETE_BOOK_IN_CART":
      return { ...state, booksCount: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "ADD_AND_DELETE_BOOK_IN_FAVORITE":
      return { ...state };
    case "GET_FAVORITE":
      return { ...state, favorite: action.payload };

    default:
      return state;
  }
};

const ClientProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getBooks = async () => {
    try {
      const response = await axios(`${API}${window.location.search}`);
      let action = {
        type: "GET_BOOKS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const getBookDetail = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_BOOK_DETAIL",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  // // ! CART (Корзина)

  function addAndDeleteBookInCart(book) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        books: [],
        totalPrice: 0,
      };
    }

    let cartBook = {
      book: book,
      count: 1,
      subPrice: 0,
    };
    cartBook.subPrice = calcSubPrice(cartBook);

    let check = cart.books.find((item) => {
      return item.book.id === book.id;
    });
    //   // console.log(check, "CHECK-----");

    if (!check) {
      cart.books.push(cartBook);
    } else {
      cart.books = cart.books.filter((item) => {
        return item.book.id !== book.id;
      });
    }

    cart.totalPrice = calcTotalPrice(cart.books);
    localStorage.setItem("cart", JSON.stringify(cart));
    let action = {
      type: "ADD_AND_DELETE_BOOK_IN_CART",
      payload: cart.books.length,
    };
    dispatch(action);
  }

  function checkBookInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        books: [],
      };
    }
    let check = cart.books.find((item) => {
      return item.book.id === id;
    });

    if (!check) {
      return false;
    } else {
      return true;
    }
  }

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        totalPrice: 0,
        books: [],
      };
    }
    let action = {
      type: "GET_CART",
      payload: cart,
    };
    dispatch(action);
  }

  function changeCountCartBook(value, id) {
    // console.log(value, id);
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.books = cart.books.map((item) => {
      if (item.book.id === id) {
        item.count = value;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    cart.totalPrice = calcTotalPrice(cart.books);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function deleteBookInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.books = cart.books.filter((item) => {
      return item.book.id !== id;
    });
    cart.totalPrice = calcTotalPrice(cart.books);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
    let action = {
      type: "ADD_AND_DELETE_BOOK_IN_CART",
      payload: cart.books.length,
    };
    dispatch(action);
  }

  // Favorite

  function addAndDeleteBookInFavorite(book) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        books: [],
      };
    }

    let favoriteBook = {
      book: book,
      // count: 1,
    };

    let check = favorite.books.find((item) => {
      return item.book.id === book.id;
    });
    //   // console.log(check, "CHECK-----");

    if (!check) {
      favorite.books.push(favoriteBook);
    } else {
      favorite.books = favorite.books.filter((item) => {
        return item.book.id !== book.id;
      });
    }

    localStorage.setItem("favorite", JSON.stringify(favorite));
    let action = {
      type: "ADD_AND_DELETE_BOOK_IN_FAVORITE",
      payload: favorite.books.length,
    };
    dispatch(action);
  }

  function checkBookInFavorite(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        books: [],
      };
    }
    let check = favorite.books.find((item) => {
      return item.book.id === id;
    });

    if (!check) {
      return false;
    } else {
      return true;
    }
  }

  function getFavorite() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        books: [],
      };
    }
    let action = {
      type: "GET_FAVORITE",
      payload: favorite,
    };
    dispatch(action);
  }

  // function changeCountCartFavorite(value, id) {
  //   // console.log(value, id);
  //   let favorite = JSON.parse(localStorage.getItem("favorite"));
  //   favorite.books = favorite.books.map((item) => {
  //     if (item.book.id === id) {
  //       item.count = value;
  //     }
  //     return item;
  //   });
  //   localStorage.setItem("favorite", JSON.stringify(favorite));
  //   getFavorite();
  // }

  // function deleteBookInFavorite(id) {
  //   let favorite = JSON.parse(localStorage.getItem("favorite"));
  //   favorite.books = favorite.books.filter((item) => {
  //     return item.book.id !== id;
  //   });
  //   localStorage.setItem("favorite", JSON.stringify(favorite));
  //   getFavorite();
  //   let action = {
  //     type: "ADD_AND_DELETE_BOOK_IN_FAVORITE",
  //     payload: favorite.books.length,
  //   };
  //   dispatch(action);
  // }

  //! Pagination

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 3;

  useEffect(() => {
    if (state.books) {
      setPosts(state.books);
    }
  }, [state.books]);

  const indexOfLastPost = postPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalBooksCount = posts.length;

  return (
    <ClientContext.Provider
      value={{
        getBooks: getBooks,
        getBookDetail: getBookDetail,
        addAndDeleteBookInCart: addAndDeleteBookInCart,
        checkBookInCart: checkBookInCart,
        getCart: getCart,
        changeCountCartBook: changeCountCartBook,
        deleteBookInCart: deleteBookInCart,
        setCurrentPage: setCurrentPage,
        addAndDeleteBookInFavorite: addAndDeleteBookInFavorite,
        checkBookInFavorite: checkBookInFavorite,
        getFavorite: getFavorite,
        // changeCountCartFavorite: changeCountCartFavorite,
        // deleteBookInFavorite: deleteBookInFavorite,

        detail: state.detail,
        favorite: state.favorite,
        favoriteCount: state.favoriteCount,
        booksCount: state.booksCount,
        cart: state.cart,
        // books: state.books,
        books: currentPosts,
        postPerPage: postPerPage,
        totalBooksCount: totalBooksCount,
        currentPage: currentPage,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
