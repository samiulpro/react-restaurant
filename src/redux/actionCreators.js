import { ADD_COMMENT } from "./actionTypes"

export const addComment = (dishId, author, rating, comment) => ({
  type: ADD_COMMENT,
 payload: {
  dishId: dishId,
  author: author,
  rating: rating,
  comment: comment
 }
 })