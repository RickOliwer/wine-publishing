import { gql } from '@apollo/client'

export const GET_PAGE = gql`
query MyQuery {
    pageBy(uri: "/") {
        isFrontPage
        materialSpecification {
            materialDatum
            materialEmail
            materialExcerpt
            materialLabel
            materialTable {
                product
                size
                format
                weight
            }
            materialTerms
        }
        readers {
            hemsidor {
              titel
              url
            }
            localSitesBelow {
                titel
                url
            }
            readersBild {
              mediaItemUrl
            }
            readersText
            readersTitel
          }
        intoduktion {
          introTitel
          introText
          introBild {
            mediaItemUrl
          }
        }
      }
  }
`


