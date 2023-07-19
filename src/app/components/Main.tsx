import React from 'react'
import Header from './Header'
import Tabs from './Tabs'

type Props = {}

const Main = (props: Props) => {
  return (
    <React.Fragment>
        <Header title="Main"/>
        <Tabs></Tabs>
    </React.Fragment>
  )
}

export default Main