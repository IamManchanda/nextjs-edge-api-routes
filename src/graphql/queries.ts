export const getUserCollection = `
  query GetUserCollection($last: Int!) {
    userCollection(last: $last) {
      edges {
        node {
          email
          name
        }
      }
    }
  }
`;
