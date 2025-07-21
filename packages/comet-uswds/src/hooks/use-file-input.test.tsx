import { act, renderHook } from '@testing-library/react';
import useFileInput from './use-file-input';

describe('useFileInput', () => {
  beforeEach(() => {
    // Clear any existing DOM elements before each test
    document.body.innerHTML = '';
  });

  test('should return clear function', () => {
    const { result } = renderHook(() => useFileInput());
    expect(result.current.clear).toBeInstanceOf(Function);
  });

  test('should handle when element is not found', async () => {
    const { result } = renderHook(() => useFileInput());

    await act(async () => {
      result.current.clear('non-existent-element');
    });

    // Should not throw an error when element doesn't exist
    expect(result.current.clear).toBeTruthy();
  });

  test('should handle when element has no parent', async () => {
    // Create an input element and add it to DOM so getElementById can find it
    const input = document.createElement('input');
    input.id = 'orphan-input';
    input.type = 'file';
    document.body.appendChild(input);

    // Mock parentElement to return null to hit the parent null check
    Object.defineProperty(input, 'parentElement', {
      get: () => null,
      configurable: true,
    });

    const { result } = renderHook(() => useFileInput());

    await act(async () => {
      result.current.clear('orphan-input');
    });

    // Should not throw an error when parent doesn't exist
    expect(result.current.clear).toBeTruthy();
  });

  test('should clear file input with all preview elements', async () => {
    // Create a complete USWDS file input structure
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.id = 'test-file-input';
    input.type = 'file';
    input.setAttribute('aria-label', 'test file selected');

    // Create preview elements
    const preview1 = document.createElement('div');
    preview1.className = 'usa-file-input__preview';
    const preview2 = document.createElement('div');
    preview2.className = 'usa-file-input__preview';

    // Create preview heading elements
    const previewHeading1 = document.createElement('div');
    previewHeading1.className = 'usa-file-input__preview-heading';
    const previewHeading2 = document.createElement('div');
    previewHeading2.className = 'usa-file-input__preview-heading';

    // Create sr-only element
    const srOnly = document.createElement('div');
    srOnly.className = 'usa-sr-only';
    srOnly.innerHTML = 'File selected: test-file.txt';

    // Create instructions element
    const instructions = document.createElement('div');
    instructions.className = 'usa-file-input__instructions';
    instructions.setAttribute('hidden', '');

    form.appendChild(input);
    form.appendChild(preview1);
    form.appendChild(preview2);
    form.appendChild(previewHeading1);
    form.appendChild(previewHeading2);
    form.appendChild(srOnly);
    form.appendChild(instructions);
    document.body.appendChild(form);

    const { result } = renderHook(() => useFileInput());

    await act(async () => {
      result.current.clear('test-file-input');
    });

    // Verify all elements were properly cleared/reset
    expect(input.value).toBe('');
    expect(input.getAttribute('aria-label')).toBe('');
    expect(form.querySelectorAll('.usa-file-input__preview')).toHaveLength(0);
    expect(form.querySelectorAll('.usa-file-input__preview-heading')).toHaveLength(0);
    expect(srOnly.innerHTML).toBe('No file selected.');
    expect(instructions.hasAttribute('hidden')).toBe(false);
  });

  test('should handle missing optional elements gracefully', async () => {
    // Create minimal structure without sr-only and instructions elements
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.id = 'minimal-file-input';
    input.type = 'file';
    input.setAttribute('aria-label', 'test file selected');

    form.appendChild(input);
    document.body.appendChild(form);

    const { result } = renderHook(() => useFileInput());

    await act(async () => {
      result.current.clear('minimal-file-input');
    });

    // Should still clear the input without throwing errors
    expect(input.value).toBe('');
    expect(input.getAttribute('aria-label')).toBe('');
  });

  test('should handle multiple preview elements', async () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.id = 'multi-preview-input';
    input.type = 'file';

    // Create multiple preview elements
    for (let i = 0; i < 5; i++) {
      const preview = document.createElement('div');
      preview.className = 'usa-file-input__preview';
      form.appendChild(preview);
    }

    // Create multiple preview heading elements
    for (let i = 0; i < 3; i++) {
      const previewHeading = document.createElement('div');
      previewHeading.className = 'usa-file-input__preview-heading';
      form.appendChild(previewHeading);
    }

    form.appendChild(input);
    document.body.appendChild(form);

    const { result } = renderHook(() => useFileInput());

    await act(async () => {
      result.current.clear('multi-preview-input');
    });

    // All preview elements should be removed
    expect(form.querySelectorAll('.usa-file-input__preview')).toHaveLength(0);
    expect(form.querySelectorAll('.usa-file-input__preview-heading')).toHaveLength(0);
  });

  test('should reset sr-only element when present', async () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.id = 'sr-only-test-input';

    const srOnly = document.createElement('div');
    srOnly.className = 'usa-sr-only';
    srOnly.innerHTML = 'Custom file message';

    form.appendChild(input);
    form.appendChild(srOnly);
    document.body.appendChild(form);

    const { result } = renderHook(() => useFileInput());

    await act(async () => {
      result.current.clear('sr-only-test-input');
    });

    expect(srOnly.innerHTML).toBe('No file selected.');
  });

  test('should show instructions when present', async () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.id = 'instructions-test-input';

    const instructions = document.createElement('div');
    instructions.className = 'usa-file-input__instructions';
    instructions.setAttribute('hidden', '');

    form.appendChild(input);
    form.appendChild(instructions);
    document.body.appendChild(form);

    const { result } = renderHook(() => useFileInput());

    await act(async () => {
      result.current.clear('instructions-test-input');
    });

    expect(instructions.hasAttribute('hidden')).toBe(false);
  });
});
