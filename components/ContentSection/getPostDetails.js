import { request, gql } from "graphql-request"

const graphqlAPI = "https://api-us-west-2.hygraph.com/v2/clcio2pk93aqi01ufglh15oxv/master"

  export const getRecentPosts = async () => {
      const query = gql`
        query Assets {
            posts(orderBy: publishedAt_ASC) {
            slug
            title
            coverImage {
                url
            }
            content {
                markdown
                text
            }
            }
        }
      `
      const result = await request(graphqlAPI, query);
    
      console.log(result);
  
      return result.posts;
    }
