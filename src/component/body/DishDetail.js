import React from 'react'
import { CardText, CardBody, CardTitle, Card, CardImg } from 'reactstrap'
import CommentForm from './CommentForm'
import LoadComments from './LoadComments'
function DishDetail(props) {
  return (
    <div>
      <Card>
        <CardImg src={props.dish.image} alt={props.dish.name} />
        <CardBody style={{ textAlign: "left" }}>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>
            <CardText>{props.dish.description}</CardText>
            <CardText>Price {props.dish.price} BDT</CardText>
          </CardText>
          <hr />
          <LoadComments comments={props.comment} />
          <hr />
          <CommentForm
            dishId={props.dish.id}
            addComment={props.addComment}
          />
        </CardBody>
      </Card>
    </div>
  )
}

export default DishDetail
