import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TagInput from '../src/index'

describe('TagInput', async () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<TagInput />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render the TagInput', () => {
    const { getByRole } = render(<TagInput />)
    expect(getByRole('textbox')).toBeInTheDocument()
  })

  it('should change input value', async () => {
    const { getByRole } = render(<TagInput />)
    const input = getByRole('textbox')
    expect(input).toBeInTheDocument()
    userEvent.type(input, 'test')
    expect(input).toHaveValue('test')
  })

  it('should reset value after clear', async () => {
    const { getByRole, getByLabelText } = render(<TagInput />)
    const input = getByRole('textbox')
    expect(input).toBeInTheDocument()
    userEvent.type(input, 'tag')
    const clear = getByLabelText('close-circle')
    userEvent.click(clear)
    expect(input).toHaveValue('')
  })
})
