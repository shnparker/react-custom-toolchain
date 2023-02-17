import { render, waitFor, screen } from '@testing-library/react'

import App from '@/App'

describe('<App/>', () => {
  it('renders without crashing', async () => {
    render(<App />)
    await waitFor(() => expect(screen.getByText('Custom React Toolchain')).toBeInTheDocument())
  })
})
