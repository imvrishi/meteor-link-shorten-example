import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import Header from '../imports/components/header'
import LinkCreate from '../imports/components/link_create'
import Links from '../imports/collections/links'
import LinkList from '../imports/components/link_list'

const App = () => {
  return (
    <div>
      <Header />
      <LinkCreate />
      <LinkList />
    </div>
  )
}

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'))
})
