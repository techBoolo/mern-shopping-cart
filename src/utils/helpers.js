export const info = (items) => {
  const itemsQty = items.length
  const totalQty = items.reduce((acc, item) => acc + item.qty, 0)
  const totalPrice = items.reduce((acc, item) => acc + (item.qty * item.price), 0)

  return { itemsQty, totalQty, totalPrice }
}
