import {HttpStatus, HttpStatusMessages} from './status';
import {HttpErrorPresets} from './presets';
import {
	HttpErrorSeverity,
	HttpErrorParams,
	HttpErrorPreset,
	HttpErrorDetail,
	HttpErrorJSON,
} from './types';

/**
 * Class representing an HTTP error.
 * @extends Error
 */
export class HttpError extends Error {
	statusCode: HttpStatus; // Renamed for clarity
	errorType: string; // Renamed for clarity
	errorCode: string; // Renamed for clarity
	severity: HttpErrorSeverity; // Renamed for clarity
	errorDetails: HttpErrorDetail[] = []; // Renamed for clarity
	originalError?: unknown; // Renamed for clarity
	originalErrorJSON?: string; // Renamed for clarity

	name = 'HttpError';

	/**
	 * Creates an instance of HttpError.
	 * @param preset - The preset error object.
	 * @param options - Additional optional details.
	 * @param options.message - Optional custom error message.
	 * @param options.severity - The severity level of the error.
	 * @param options.details[] - Additional details about the error.
	 * @param options.details.param - The specific parameter that caused the error.
	 * @param options.details.message - The error message associated with the parameter.
	 */
	constructor(preset: HttpErrorPreset, options: HttpErrorParams = {}) {
		super(options.message || preset.message);
		this.statusCode = preset.status;
		this.errorType = preset.type;
		this.errorCode = preset.code;
		this.severity = options.severity || preset.level;

		if (options?.details) {
			for (const detail of options.details) {
				this.addDetail(detail.param, detail.message);
			}
		}

		if (options?.error) {
			this.attachOriginalError(options.error);
		}

		// Capture the stack trace (excluding constructor)
		Error.captureStackTrace(this, this.constructor);
	}

	/**
	 * Adds a detail to the error.
	 * @param param - The specific parameter that caused the error.
	 * @param message - The error message associated with the parameter.
	 * @return The current instance of HttpError.
	 */
	addDetail(param: string, message: unknown): this {
		this.errorDetails.push({param, message});
		return this;
	}

	/**
	 * Adds multiple details to the error.
	 * @param details - An array of error details.
	 * @return The current instance of HttpError.
	 */
	addDetails(details: HttpErrorDetail[]): this {
		for (const detail of details) {
			this.addDetail(detail.param, detail.message);
		}
		return this;
	}

	/**
	 * Adds a custom message to the error.
	 * @param message - The custom message to be added.
	 * @return The current instance of HttpError.
	 */
	addMessage(message: string): this {
		this.message = message;
		return this;
	}

	/**
	 * Attaches the original error to the HttpError instance.
	 * @param error - The original error object to be attached.
	 * @return The current instance of HttpError.
	 */
	attachOriginalError(error: unknown): this {
		this.originalError = error;
		try {
			this.originalErrorJSON = JSON.stringify(error, null, 4);
		} catch (e) {
			this.originalErrorJSON = String(error);
		}
		return this;
	}

	/**
	 * Converts the error to a JSON object.
	 * @param includeDebugInfo - Flag to include debug information in the JSON output.
	 * @returns The JSON representation of the error.
	 */
	toJSON(includeDebugInfo = false): HttpErrorJSON {
		const json: HttpErrorJSON = {
			type: this.errorType,
			code: this.errorCode,
			message: this.message,
			details: this.errorDetails,
			level: this.severity,
			status: this.statusCode,
			trace: this.originalError,
			traceJSON: this.originalErrorJSON,
			stack: this.stack,
		};

		if (!includeDebugInfo) {
			delete json.stack;
			delete json.trace;
			delete json.traceJSON;
			delete json.status;
			delete json.level;
		}

		return json;
	}

	/**
	 * Utility method to create an HttpError instance from a preset.
	 * @param presetKey - The key of the error preset from HttpErrorPresets.
	 * @param options - Additional parameters for customization.
	 * @returns An instance of HttpError.
	 */
	static fromPreset(
		presetKey: keyof typeof HttpErrorPresets,
		options: HttpErrorParams = {},
	): HttpError {
		const preset = HttpErrorPresets[presetKey];
		return new HttpError(preset, options);
	}

	/**
	 * Utility method to create an HttpError instance from error details.
	 * @param errorType - The type of the error.
	 * @param errorCode - The code of the error.
	 * @param statusCode - The HTTP status code.
	 * @param message - The error message.
	 * @param options - Additional parameters for customization.
	 * @returns An instance of HttpError.
	 */
	static fromError(
		errorType: string,
		errorCode: string,
		statusCode: HttpStatus,
		options: HttpErrorParams = {},
	): HttpError {
		const preset = {
			type: errorType,
			code: errorCode,
			status: statusCode,
			message: options.message || HttpStatusMessages[statusCode],
			level: options.severity || 'ERROR',
		} as HttpErrorPreset;
		return new HttpError(preset, options);
	}

	/**
	 * Error presets for common HTTP errors.
	 *
	 * These presets define the structure of an HTTP error, including
	 * the type, code, status, level, and message.
	 *
	 * @example
	 * const error = HttpError.createFromPreset('INTERNAL_SERVER_ERROR');
	 * console.log(error.toJSON());
	 */
	static PRESETS = HttpErrorPresets;

	/**
	 * HTTP status codes for common HTTP errors.
	 *
	 * This object provides a mapping of HTTP status codes to their
	 * standard messages, allowing for easy reference and usage.
	 *
	 * @example
	 * const statusCode = HttpError.STATUS.NOT_FOUND;
	 * console.log(statusCode); // Output: 404
	 */
	static STATUS = HttpStatus;

	/**
	 * HTTP status messages for common HTTP errors.
	 *
	 * This object provides a mapping of HTTP status codes to their
	 * standard messages, allowing for easy reference and usage.
	 *
	 * @example
	 * const statusMessage = HttpError.STATUS_MESSAGES[HttpError.STATUS.NOT_FOUND];
	 * console.log(statusMessage); // Output: "Requested resource could not be found."
	 */

	static STATUS_MESSAGES = HttpStatusMessages;
}
