import { gql } from "@apollo/client"

const GETALLPOST  =gql`
query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
    }
    meta {
      totalCount
    }
  }
}
`
export default GETALLPOST