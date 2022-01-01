/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      nickname
      email
      school
      major
      posts {
        items {
          id
          userID
          userNickname
          title
          topic
          content
          views
          bookmarks
          createdAt
          type
          updatedAt
          owner
        }
        nextToken
        count
      }
      comments {
        items {
          id
          userID
          postID
          likes
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
        count
      }
      points
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      nickname
      email
      school
      major
      posts {
        items {
          id
          userID
          userNickname
          title
          topic
          content
          views
          bookmarks
          createdAt
          type
          updatedAt
          owner
        }
        nextToken
        count
      }
      comments {
        items {
          id
          userID
          postID
          likes
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
        count
      }
      points
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      nickname
      email
      school
      major
      posts {
        items {
          id
          userID
          userNickname
          title
          topic
          content
          views
          bookmarks
          createdAt
          type
          updatedAt
          owner
        }
        nextToken
        count
      }
      comments {
        items {
          id
          userID
          postID
          likes
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
        count
      }
      points
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      userID
      userNickname
      title
      topic
      content
      views
      bookmarks
      comments {
        items {
          id
          userID
          postID
          likes
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
        count
      }
      createdAt
      type
      updatedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      userID
      userNickname
      title
      topic
      content
      views
      bookmarks
      comments {
        items {
          id
          userID
          postID
          likes
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
        count
      }
      createdAt
      type
      updatedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      userID
      userNickname
      title
      topic
      content
      views
      bookmarks
      comments {
        items {
          id
          userID
          postID
          likes
          content
          userNickname
          createdAt
          updatedAt
          owner
        }
        nextToken
        count
      }
      createdAt
      type
      updatedAt
      owner
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      id
      userID
      postID
      likes
      content
      userNickname
      post {
        id
        userID
        userNickname
        title
        topic
        content
        views
        bookmarks
        comments {
          nextToken
          count
        }
        createdAt
        type
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      userID
      postID
      likes
      content
      userNickname
      post {
        id
        userID
        userNickname
        title
        topic
        content
        views
        bookmarks
        comments {
          nextToken
          count
        }
        createdAt
        type
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      userID
      postID
      likes
      content
      userNickname
      post {
        id
        userID
        userNickname
        title
        topic
        content
        views
        bookmarks
        comments {
          nextToken
          count
        }
        createdAt
        type
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
