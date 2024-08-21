export const getPattern = (
  mask: string | undefined,
  pattern: string | undefined,
): string | undefined => {
  let newPattern = pattern ?? undefined;
  switch (mask) {
    case 'ssn':
      newPattern = '^(?!(000|666|9))d{3} (?!00)d{2} (?!0000)d{4}$';
      break;
    case 'phone_number':
      newPattern = '\\d{3}-\\d{3}-\\d{4}';
      break;
    case 'zip_5_digit':
      newPattern = '\\d{5}';
      break;
    case 'zip_9_digit':
      newPattern = '^[0-9]{5}(?:-[0-9]{4})?$';
      break;
  }

  return newPattern;
};

export const getPlaceholder = (
  mask: string | undefined,
  placeholder: string | undefined,
): string | undefined => {
  let newPlaceholder = placeholder ?? undefined;
  switch (mask) {
    case 'ssn':
      newPlaceholder = '___ __ ____';
      break;
    case 'phone_number':
      newPlaceholder = '___-___-____';
      break;
    case 'zip_5_digit':
      newPlaceholder = '_____';
      break;
    case 'zip_9_digit':
      newPlaceholder = '_____-____';
      break;
  }

  return newPlaceholder;
};

export const getType = (mask: string | undefined, type: string | undefined): string | undefined => {
  let newType = type ?? 'text';
  switch (mask) {
    case 'phone_number':
      newType = 'tel';
      break;
  }

  return newType;
};

export const getInputMode = (
  mask: string | undefined,
  inputMode:
    | 'tel'
    | 'text'
    | 'numeric'
    | 'email'
    | 'search'
    | 'url'
    | 'none'
    | 'decimal'
    | undefined,
): 'tel' | 'text' | 'numeric' | 'email' | 'search' | 'url' | 'none' | 'decimal' | undefined => {
  let newInputMode = inputMode ?? 'text';
  switch (mask) {
    case 'ssn':
    case 'phone_number':
    case 'zip_5_digit':
    case 'zip_9_digit':
      newInputMode = 'numeric';
      break;
  }

  return newInputMode;
};
