import App from "@/App";
import {render} from "@testing-library/react";

describe('App', () => {
  it('renders hello world', () => {
    const { getByText } = render(<App />)
    expect(getByText('Hello World')).toBeInTheDocument()
  });
})