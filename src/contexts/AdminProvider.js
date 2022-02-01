import React, { useReducer } from "react";
import axios from "axios";
import { API } from "../helpers/const";
import { toast } from "react-toastify";

export const AdminContext = React.createContext();
const INIT_STATE = {
  books: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_BOOKS":
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

const AdminProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getBooks = async () => {
    try {
      const response = await axios(API);
      let action = {
        type: "GET_BOOKS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  const addBook = async (newBook) => {
    try {
      await axios.post(API, { ...newBook, price: +newBook.price });
    } catch (error) {
      console.log(error);
    }
  };

  const saveEditedBook = async (book) => {
    try {
      await axios.patch(`${API}/${book.id}`, {
        ...book,
        price: +book.price,
      });
      getBooks();
      toast.success("Успешно изменено", {
        pauseOnHover: false,
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getBooks();
      toast.success("Успешно удалено", {
        pauseOnHover: false,
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        addBook: addBook,
        getBooks: getBooks,
        saveEditedBook: saveEditedBook,
        deleteBook: deleteBook,
        books: state.books,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
