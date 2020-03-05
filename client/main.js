import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import Header from '../imports/components/header'
import LinkCreate from '../imports/components/link_create'
import Links from '../imports/collections/links'

const App = () => {
  return (
    <div>
      <Header />
      <LinkCreate />
    </div>
  )
}

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'))
})
