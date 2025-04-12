# @tfpkgr/http-error

## Overview

`@tfpkgr/http-error` is a utility package for creating and managing HTTP errors in server-side applications. It provides a structured and consistent way to handle errors with detailed information, including status codes, error types, severity levels, and more.

## Installation

```bash
npm install @tfpkgr/http-error
```

## Usage

### Importing the Package

```typescript
import HttpError from '@tfpkgr/http-error';
```

### Throwing an HTTP Error

You can throw an HTTP error using the `HttpError` class and its presets:

```typescript
import HttpError from '@tfpkgr/http-error';

throw new HttpError(HttpError.PRESETS.NOT_FOUND);
```

### Using Presets with Additional Details

You can add additional details to an error:

```typescript
import HttpError from '@tfpkgr/http-error';

const error = new HttpError(HttpError.PRESETS.BAD_REQUEST, {
	details: [
		{param: 'username', message: 'Username is required'},
		{param: 'password', message: 'Password must be at least 8 characters'},
	],
});

console.log(error.toJSON());
```

### Static Methods

#### `HttpError.fromPreset`

Creates an `HttpError` instance from a predefined preset.

```typescript
const error = HttpError.fromPreset('INTERNAL_SERVER_ERROR', {
	message: 'Custom error message',
});
throw error;
```

#### `HttpError.fromError`

Creates an `HttpError` instance from custom error details.

```typescript
const error = HttpError.fromError(
	'CUSTOM_TYPE',
	'CUSTOM_CODE',
	HttpError.STATUS.BAD_REQUEST,
	{message: 'Custom error message'},
);
throw error;
```

### Static Utilities

-   `HttpError.PRESETS`: Access predefined error presets.
-   `HttpError.STATUS`: Access HTTP status codes.
-   `HttpError.STATUS_MESSAGES`: Access HTTP status messages.

Example:

```typescript
console.log(HttpError.STATUS.NOT_FOUND); // 404
console.log(HttpError.STATUS_MESSAGES[HttpError.STATUS.NOT_FOUND]); // "The requested resource could not be found."
```

## License

This package is licensed under the MIT License.
