import {HttpStatus} from './status';

/**
 * Type definition for HTTP error details.
 * This type is used to provide additional information about the error,
 * such as the specific parameter that caused the error and the error message.
 */
export type HttpErrorDetail = {
	param: string;
	message: unknown;
};

/**
 * Type definition for HTTP error levels.
 * These levels indicate the severity of the error and can be used
 * to determine how to handle the error in the application.
 */
export type HttpErrorSeverity =
	| 'INFO'
	| 'WARN'
	| 'ERROR'
	| 'CRITICAL'
	| 'DEBUG';

/**
 * Type definition for HTTP error parameters.
 * These parameters can be used to provide additional context
 * about the error, such as the specific parameter that caused
 * the error or any additional details.
 */
export type HttpErrorParams = {
	message?: string;
	error?: unknown;
	severity?: HttpErrorSeverity;
	details?: HttpErrorDetail[];
};

/**
 * Type definition for HTTP error presets.
 * These presets define the structure of an HTTP error, including
 * the type, code, status, level, and message.
 */
export type HttpErrorPreset = {
	type: string;
	code: string;
	status: number;
	level: HttpErrorSeverity;
	message: string;
};

/**
 * Type definition for HTTP error enums.
 * This type is used to define a mapping of error types to their
 * corresponding HTTP error presets.
 */
export type HttpErrorPresetList = {
	[key: string]: HttpErrorPreset;
};

/**
 * Type definition for HTTP error JSON response.
 *
 * This type is used to define the structure of the JSON response
 * that is sent back to the client when an HTTP error occurs.
 * It includes the type, code, message, level, status, error information,
 * and any additional details about the error.
 */
export type HttpErrorJSON = {
	type: string;
	code: string;
	message: string;
	details: HttpErrorDetail[];
	level?: HttpErrorSeverity;
	status?: HttpStatus;
	trace?: unknown;
	traceJSON?: string;
	stack?: unknown;
};
