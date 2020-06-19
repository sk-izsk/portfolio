import { render } from '@testing-library/react'
import React from 'react'
import { FaCamera } from 'react-icons/fa'
import { TestContextProvider } from '../../TestContextProvider'
import { AppBarItem } from './AppBarItem'

test('AppBarItem renders correctly', () => {
  const { asFragment } = render(
    <TestContextProvider>
      <AppBarItem icon={<FaCamera />}>Mock Title</AppBarItem>
    </TestContextProvider>,
  )
  expect(asFragment()).toMatchSnapshot()
})
