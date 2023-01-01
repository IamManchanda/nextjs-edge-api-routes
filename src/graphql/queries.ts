export const getUserCollection = `
  query GetUserCollection($first: Int!) {
    userCollection(first: $first) {
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
      edges {
        node {
          email
          name
          id
          updatedAt
          createdAt
        }
        cursor
      }
    }
  }
`;
