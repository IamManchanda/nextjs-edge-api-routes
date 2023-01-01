export const getUserCollection = `
  query GetUserCollection($first: Int!) {
    userCollection(first: $first) {
      edges {
        node {
          email
          name
        }
      }
    }
  }
`;
