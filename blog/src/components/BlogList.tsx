import graphql from 'babel-plugin-relay/macro'
import React from 'react'
import { useLazyLoadQuery } from 'react-relay'
const BlogList: React.VFC = () => {
  useLazyLoadQuery(
    graphql`
      query BlogListQuery {
        blogs {
          data {
            id
            attributes {
              Title
            }
          }
        }
      }
    `,
    {
      first: 10,
    }
  )
  return null
}
export default BlogList
