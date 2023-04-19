import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { fn } from 'vitest'
import TagInput from '../src/index'

describe('TagInput', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<TagInput value={[]} onChange={() => {}} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should display tags correctly', () => {
    const { getByText } = render(<TagInput value={['tag1', 'tag2']} onChange={() => {}} />)
    expect(getByText('tag1')).toBeInTheDocument()
    expect(getByText('tag2')).toBeInTheDocument()
  })

  it('should add tag when enter is pressed', async () => {
    const onChangeMock = fn()
    render(<TagInput value={[]} onChange={onChangeMock} />)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()

    await userEvent.type(input, 'tag1{enter}')
    expect(onChangeMock).toHaveBeenCalledWith(['tag1'])
  })

  it('should not add duplicate tags', async () => {
    const onChangeMock = fn()
    render(<TagInput value={['tag1']} onChange={onChangeMock} />)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()

    await userEvent.type(input, 'tag1{enter}')
    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should remove tag when click on close button', async () => {
    const onChangeMock = fn()
    render(<TagInput value={['tag1']} onChange={onChangeMock} />)

    const closeBtn = screen.getByLabelText('close')
    expect(closeBtn).toBeInTheDocument()

    await userEvent.click(closeBtn)
    expect(onChangeMock).toHaveBeenCalledWith([])
  })

  it('should clear all tags when click on clear button', async () => {
    const onChangeMock = fn()
    render(<TagInput value={['tag1', 'tag2']} onChange={onChangeMock} />)

    const clearBtn = screen.getByLabelText('close-circle')
    expect(clearBtn).toBeInTheDocument()

    await userEvent.click(clearBtn)
    expect(onChangeMock).toHaveBeenCalledWith([])
  })
})
