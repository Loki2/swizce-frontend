import { gql } from "@apollo/client";


export const CREATE_SCREAM = gql`
  mutation CREATE_SCREAM(
      $description: String!, 
      $imageUrl: String!, 
      $videoUrl: String! 
      $likes: Number! 
      $shares: Number
    ){
    createScream(
      description:  $description
      imageUrl: $imageUrl
      videoUrl: $videoUrl
      likes: $likes
      shares: $shares
    ){
      id
      videoUrl
      imageUrl
      description
      likes
      shares
    }
  }
`;


export const QUERY_SCREAMS = gql`
  query {
    screams{
      id
      videoUrl
      imageUrl
      description
      likes
      shares
      createdAt
      user{
        id
        username
        profile {
          profileUrl
        }
      }
    }
  }
`;