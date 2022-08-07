import { gql } from 'graphql-request';

export const GET_NEWS = gql`
  query GetNews {
    news {
      id
      content
      created_at
    }
  }
`

export const CREATE_NEWS = gql`
  mutation CreateNews($content: String!) {
    insert_news_one(object: { content: $content }) {
      id
      content
      created_at
    }
  }
`

export const UPDATE_NEWS = gql`
  mutation UpdateNews($id: uuid!, $content: String!) {
    update_news_by_pk(pk_columns: { id: $id }, _set: { content: $content }) {
      id
      content
      created_at
    }
  }
`

export const DELETE_NEWS = gql`
  mutation DeleteNews($id: uuid!) {
    delete_news_by_pk(id: $id) {
      id
      content
    }
  }
`
export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      created_at
      user_id
    }
  }
`
export const CREATE_TASK = gql`
  mutation CreateTask($title: String!) {
    insert_tasks_one(object: { title: $title }) {
      id
      title
      created_at
      user_id
    }
  }
`
export const UPDATE_TASK = gql`
  mutation UpdateTask($id: uuid!, $title: String!) {
    update_tasks_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
      created_at
      user_id
    }
  }
`
export const DELETE_TASK = gql`
  mutation DeleteTask($id: uuid!) {
    delete_tasks_by_pk(id: $id) {
      id
      title
    }
  }
`

export const GET_SAKE = gql`
  query GetSake {
    sakes {
      acidity
      alcohol_degree
      brand
      comment
      evaluation
      id
      img_url
      kinds
      local
      polishing_degree
      rice_type
      sake_degree
      update_date
    }
  }
`
export const CREATE_SAKE = gql`
  mutation CreateSake($acidity: String!,
    $brand: String!,
    $comment: String!,
    $evaluation: Float!, 
    $img_url: String!, 
    $kinds: String!,
    $local: String!,
    $polishing_degree: String!,
    $rice_type: String!,
    $sake_degree: String!, 
    $alcohol_degree: String!,
    ) {
    insert_sakes(objects: {acidity: $brand, 
    brand: $brand, 
    comment: $comment, 
    evaluation: $evaluation, 
    img_url: $img_url, 
    kinds: $kinds, 
    local: $local, 
    polishing_degree: polishing_degree, 
    rice_type: $rice_type, 
    sake_degree: $sake_degree, 
    alcohol_degree: $alcohol_degree}) {
      returning {
        acidity
        alcohol_degree
        brand
        comment
        evaluation
        id
        img_url
        kinds
        local
        polishing_degree
        rice_type
        sake_degree
        update_date
      }
    }
  }
`
export const UPDATE_SAKE = gql`
  mutation UpdateSake(
    $id: uuid!, 
    $acidity: String!,
    $brand: String!,
    $comment: String!,
    $evaluation: Float!, 
    $img_url: String!, 
    $kinds: String!,
    $local: String!,
    $polishing_degree: String!,
    $rice_type: String!,
    $sake_degree: String!, 
    $alcohol_degree: String!,
    ) {
  update_sakes_by_pk(pk_columns: {id: $id}, 
    _set: 
    {
      acidity: $acidity, 
      alcohol_degree: $alcohol_degree, 
      brand: $brand, 
      comment: $comment, 
      evaluation: $evaluation, 
      img_url: $img_url, 
      kinds: $kinds, 
      local: $local, 
      polishing_degree: $polishing_degree, 
      rice_type: $rice_type, 
      sake_degree: $sake_degree,
    }) {
    acidity
    alcohol_degree
    brand
    comment
    evaluation
    id
    img_url
    kinds
    local
    polishing_degree
    rice_type
    sake_degree
    update_date
    }
  }
`
export const DELETE_SAKE = gql`
  mutation DeleteTask($id: uuid!) {
    delete_tasks_by_pk(id: $id) {
      acidity
      alcohol_degree
      brand
      comment
      evaluation
      id
      img_url
      kinds
      local
      polishing_degree
      rice_type
      sake_degree
      update_date
    }
  }
`