import { render, screen } from '@testing-library/react';
import VINForm from './VINForm';

test('renders VIN input field', () => {
  render(<VINForm onSearch={() => {}} />);
  const input = screen.getByPlaceholderText('Enter VIN (17 characters)');
  expect(input).toBeInTheDocument();
});
