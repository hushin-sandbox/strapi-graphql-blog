import graphql from 'babel-plugin-relay/macro'
import React from 'react'
import { useLazyLoadQuery } from 'react-relay'
import { BlogListItem } from './BlogListItem'
import { BlogListQuery } from './__generated__/BlogListQuery.graphql'

const BlogList: React.VFC = () => {
  const { blogs } = useLazyLoadQuery<BlogListQuery>(
    graphql`
      query BlogListQuery {
        blogs {
          data {
            id
            attributes {
              ...BlogListItem
            }
          }
        }
      }
    `,
    {
      first: 10,
    }
  )
  return (
    <ul>
      {blogs?.data.map((v) => (
        <li key={v.id}>
          {v.attributes && <BlogListItem blog={v.attributes} />}
        </li>
      ))}
    </ul>
  )
}
export default BlogList
