import * as React from 'react'
import styled from 'styled-components'

/**
 * Main entry point. Page structure:
 *
 *    +--------------------+     +-------------------+
 *    | TODO               |     | TODO              |
 *    |                    |     |                   |
 *    |                    |     |                   |
 *    |                    |     |                   |
 *    |                    |     |                   |
 *    |                    |     |                   |
 *    |                    |     |                   |
 *    +--------------------+     +-------------------+
 *
 */
export default class App extends React.PureComponent {
  render() {
    return (
      <Page>
        <h1>hello world</h1>
      </Page>
    )
  }
}

const Page = styled.div`
  min-width: 1280px;
`
