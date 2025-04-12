import {HttpErrorPresetList} from './types';

/**
 * Enum representing structured HTTP error presets.
 *
 * Provides a way to access error details presets.
 */
export const HttpErrorPresets: HttpErrorPresetList = {
	UNAUTHORIZED: {
		type: 'AUTHORIZATION',
		code: 'UNAUTHORIZED',
		status: 401,
		message: 'Authentication is required to access this resource.',
		level: 'ERROR',
	},
	FORBIDDEN: {
		type: 'AUTHORIZATION',
		code: 'FORBIDDEN',
		status: 403,
		message: 'You do not have permission to access this resource.',
		level: 'ERROR',
	},
	NOT_FOUND: {
		type: 'RESOURCE',
		code: 'NOT_FOUND',
		status: 404,
		message: 'The requested resource could not be found.',
		level: 'ERROR',
	},
	INTERNAL_SERVER_ERROR: {
		type: 'SERVER',
		code: 'INTERNAL_SERVER_ERROR',
		status: 500,
		message: 'An unexpected error occurred on the server.',
		level: 'ERROR',
	},
	BAD_REQUEST: {
		type: 'CLIENT',
		code: 'BAD_REQUEST',
		status: 400,
		message:
			'The request could not be understood or was missing required parameters.',
		level: 'ERROR',
	},
	CONFLICT: {
		type: 'CLIENT',
		code: 'CONFLICT',
		status: 409,
		message:
			'The request could not be completed due to a conflict with the current state of the resource.',
		level: 'ERROR',
	},
	SERVICE_UNAVAILABLE: {
		type: 'SERVER',
		code: 'SERVICE_UNAVAILABLE',
		status: 503,
		message:
			'The service is temporarily unavailable. Please try again later.',
		level: 'ERROR',
	},
	GATEWAY_TIMEOUT: {
		type: 'SERVER',
		code: 'GATEWAY_TIMEOUT',
		status: 504,
		message:
			'The server did not receive a timely response from an upstream server.',
		level: 'ERROR',
	},
	UNPROCESSABLE_ENTITY: {
		type: 'CLIENT',
		code: 'UNPROCESSABLE_ENTITY',
		status: 422,
		message:
			'The request was well-formed but was unable to be followed due to semantic errors.',
		level: 'ERROR',
	},
	TOO_MANY_REQUESTS: {
		type: 'CLIENT',
		code: 'TOO_MANY_REQUESTS',
		status: 429,
		message: 'You have sent too many requests in a given amount of time.',
		level: 'ERROR',
	},
	PAYMENT_REQUIRED: {
		type: 'CLIENT',
		code: 'PAYMENT_REQUIRED',
		status: 402,
		message: 'Payment is required to access this resource.',
		level: 'ERROR',
	},
	METHOD_NOT_ALLOWED: {
		type: 'CLIENT',
		code: 'METHOD_NOT_ALLOWED',
		status: 405,
		message: 'The HTTP method used is not allowed for this resource.',
		level: 'ERROR',
	},
	NOT_ACCEPTABLE: {
		type: 'CLIENT',
		code: 'NOT_ACCEPTABLE',
		status: 406,
		message:
			'The requested resource is not available in a format acceptable to the client.',
		level: 'ERROR',
	},
	REQUEST_TIMEOUT: {
		type: 'CLIENT',
		code: 'REQUEST_TIMEOUT',
		status: 408,
		message: 'The server timed out waiting for the request.',
		level: 'ERROR',
	},
	LENGTH_REQUIRED: {
		type: 'CLIENT',
		code: 'LENGTH_REQUIRED',
		status: 411,
		message:
			'The request did not specify the length of its content, which is required by the resource.',
		level: 'ERROR',
	},
	PRECONDITION_FAILED: {
		type: 'CLIENT',
		code: 'PRECONDITION_FAILED',
		status: 412,
		message:
			'The server does not meet one of the preconditions specified by the client.',
		level: 'ERROR',
	},
	PAYLOAD_TOO_LARGE: {
		type: 'CLIENT',
		code: 'PAYLOAD_TOO_LARGE',
		status: 413,
		message:
			'The request is larger than the server is willing or able to process.',
		level: 'ERROR',
	},
	UNSUPPORTED_MEDIA_TYPE: {
		type: 'CLIENT',
		code: 'UNSUPPORTED_MEDIA_TYPE',
		status: 415,
		message:
			'The request entity has a media type which the server or resource does not support.',
		level: 'ERROR',
	},
	RANGE_NOT_SATISFIABLE: {
		type: 'CLIENT',
		code: 'RANGE_NOT_SATISFIABLE',
		status: 416,
		message:
			'The client has asked for a portion of the file, but the server cannot supply that portion.',
		level: 'ERROR',
	},
	EXPECTATION_FAILED: {
		type: 'CLIENT',
		code: 'EXPECTATION_FAILED',
		status: 417,
		message:
			'The server cannot meet the requirements of the Expect request-header field.',
		level: 'ERROR',
	},
	IM_A_TEAPOT: {
		type: 'CLIENT',
		code: 'IM_A_TEAPOT',
		status: 418,
		message: 'The server refuses to brew coffee because it is a teapot.',
		level: 'ERROR',
	},
	MISDIRECTED_REQUEST: {
		type: 'CLIENT',
		code: 'MISDIRECTED_REQUEST',
		status: 421,
		message:
			'The request was directed at a server that is not able to produce a response.',
		level: 'ERROR',
	},
	LOCKED: {
		type: 'CLIENT',
		code: 'LOCKED',
		status: 423,
		message: 'The resource that is being accessed is locked.',
		level: 'ERROR',
	},
	FAILED_DEPENDENCY: {
		type: 'CLIENT',
		code: 'FAILED_DEPENDENCY',
		status: 424,
		message: 'The request failed due to failure of a previous request.',
		level: 'ERROR',
	},
	UPGRADE_REQUIRED: {
		type: 'CLIENT',
		code: 'UPGRADE_REQUIRED',
		status: 426,
		message: 'The client should switch to a different protocol.',
		level: 'ERROR',
	},
	PRECONDITION_REQUIRED: {
		type: 'CLIENT',
		code: 'PRECONDITION_REQUIRED',
		status: 428,
		message: 'The origin server requires the request to be conditional.',
		level: 'ERROR',
	},
	REQUEST_HEADER_FIELDS_TOO_LARGE: {
		type: 'CLIENT',
		code: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
		status: 431,
		message:
			'The server is unwilling to process the request because its header fields are too large.',
		level: 'ERROR',
	},
	UNAVAILABLE_FOR_LEGAL_REASONS: {
		type: 'CLIENT',
		code: 'UNAVAILABLE_FOR_LEGAL_REASONS',
		status: 451,
		message: 'The resource is unavailable due to legal reasons.',
		level: 'ERROR',
	},
	NETWORK_AUTHENTICATION_REQUIRED: {
		type: 'SERVER',
		code: 'NETWORK_AUTHENTICATION_REQUIRED',
		status: 511,
		message: 'The client needs to authenticate to gain network access.',
		level: 'ERROR',
	},
} as const;
