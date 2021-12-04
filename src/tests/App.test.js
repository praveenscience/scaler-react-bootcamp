import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the app", () => {
  render(<App />);
  const scalerElement = screen.getByText(/scaler/i);
  expect(scalerElement).toBeInTheDocument();
});
