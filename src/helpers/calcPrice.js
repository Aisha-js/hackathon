export const calcSubPrice = (cartBook) => {
  return cartBook.count * cartBook.book.price;
};

export const calcTotalPrice = (books) => {
  let totalPrice = 0;
  books.forEach((item) => {
    totalPrice += item.subPrice;
  });
  return totalPrice;
};
