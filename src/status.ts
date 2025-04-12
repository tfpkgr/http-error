/**
 * Enum representing HTTP status.
 */
export enum HttpStatus {
	/** Client should continue with the request. */
	CONTINUE = 100,

	/** Server is switching protocols as requested by the client. */
	SWITCHING_PROTOCOLS = 101,

	/** Server has received and is processing the request. */
	PROCESSING = 102,

	/** Request has succeeded. */
	OK = 200,

	/** Resource has been created successfully. */
	CREATED = 201,

	/** Request has been accepted but not yet processed. */
	ACCEPTED = 202,

	/** Response from another source; may not be authoritative. */
	NON_AUTHORITATIVE_INFORMATION = 203,

	/** Request succeeded, but no content to return. */
	NO_CONTENT = 204,

	/** Request succeeded, client should reset the document view. */
	RESET_CONTENT = 205,

	/** Partial resource returned (used for range requests). */
	PARTIAL_CONTENT = 206,

	/** Response contains multiple status codes (WebDAV). */
	MULTI_STATUS = 207,

	/** Resource already reported in previous response. */
	ALREADY_REPORTED = 208,

	/** The resource has been modified and used in a response. */
	IM_USED = 226,

	/** Multiple options available for requested resource. */
	MULTIPLE_CHOICES = 300,

	/** Resource has been permanently moved to another URL. */
	MOVED_PERMANENTLY = 301,

	/** Resource temporarily found at another URL. */
	FOUND = 302,

	/** Resource available at another URL; use GET to retrieve it. */
	SEE_OTHER = 303,

	/** Resource has not been modified since last request. */
	NOT_MODIFIED = 304,

	/** Requested resource must be accessed through a proxy. */
	USE_PROXY = 305,

	/** Resource is temporarily redirected to another URL. */
	TEMPORARY_REDIRECT = 307,

	/** Resource is permanently redirected to another URL. */
	PERMANENT_REDIRECT = 308,

	/** Request cannot be fulfilled due to client-side error. */
	BAD_REQUEST = 400,

	/** Authentication is required for this request. */
	UNAUTHORIZED = 401,

	/** Payment is required to access this resource. */
	PAYMENT_REQUIRED = 402,

	/** Client does not have permission to access this resource. */
	FORBIDDEN = 403,

	/** Requested resource could not be found. */
	NOT_FOUND = 404,

	/** HTTP method used is not allowed for this resource. */
	METHOD_NOT_ALLOWED = 405,

	/** Server cannot produce a response matching the request. */
	NOT_ACCEPTABLE = 406,

	/** Proxy authentication required before proceeding. */
	PROXY_AUTHENTICATION_REQUIRED = 407,

	/** Client took too long to send a request. */
	REQUEST_TIMEOUT = 408,

	/** Request could not be completed due to conflict with resource state. */
	CONFLICT = 409,

	/** Requested resource is no longer available. */
	GONE = 410,

	/** Length of the request body is required. */
	LENGTH_REQUIRED = 411,

	/** Precondition in the request failed. */
	PRECONDITION_FAILED = 412,

	/** Request payload is too large for the server to process. */
	PAYLOAD_TOO_LARGE = 413,

	/** Requested URI is too long for the server to process. */
	URI_TOO_LONG = 414,

	/** Server does not support the media type in the request. */
	UNSUPPORTED_MEDIA_TYPE = 415,

	/** Requested range is not satisfiable. */
	RANGE_NOT_SATISFIABLE = 416,

	/** Expectation in request header could not be met. */
	EXPECTATION_FAILED = 417,

	/** A joke status code indicating that the server is a teapot. */
	IM_A_TEAPOT = 418,

	/** Request is well-formed but cannot be processed semantically. */
	UNPROCESSABLE_ENTITY = 422,

	/** Resource is locked and cannot be accessed. */
	LOCKED = 423,

	/** Request failed due to a dependency failure. */
	FAILED_DEPENDENCY = 424,

	/** Client must upgrade to a newer protocol version. */
	UPGRADE_REQUIRED = 426,

	/** Request requires preconditions to be met. */
	PRECONDITION_REQUIRED = 428,

	/** Client has sent too many requests in a given time. */
	TOO_MANY_REQUESTS = 429,

	/** Request headers are too large for the server to process. */
	REQUEST_HEADER_FIELDS_TOO_LARGE = 431,

	/** An unexpected server error occurred. */
	INTERNAL_SERVER_ERROR = 500,

	/** Request method is not supported by the server. */
	NOT_IMPLEMENTED = 501,

	/** Server received an invalid response from an upstream server. */
	BAD_GATEWAY = 502,

	/** Server is currently unavailable due to maintenance or overload. */
	SERVICE_UNAVAILABLE = 503,

	/** Upstream server took too long to respond. */
	GATEWAY_TIMEOUT = 504,

	/** Server does not support the HTTP version used in the request. */
	HTTP_VERSION_NOT_SUPPORTED = 505,

	/** Server has detected an internal configuration error. */
	VARIANT_ALSO_NEGOTIATES = 506,

	/** Server does not have enough storage to complete the request. */
	INSUFFICIENT_STORAGE = 507,

	/** Infinite loop detected while processing request. */
	LOOP_DETECTED = 508,

	/** Further extensions to the request are required. */
	NOT_EXTENDED = 510,

	/** Client must authenticate to gain network access. */
	NETWORK_AUTHENTICATION_REQUIRED = 511,
}

/**
 * Enum representing HTTP status messages.
 */
export const HttpStatusMessages = {
	/** Client should continue with the request. */
	100: 'Client should continue with the request.',

	/** Server is switching protocols as requested by the client. */
	101: 'Server is switching protocols as requested by the client.',

	/** Server has received and is processing the request. */
	102: 'Server has received and is processing the request.',

	/** Request has succeeded. */
	200: 'Request has succeeded.',

	/** Resource has been created successfully. */
	201: 'Resource has been created successfully.',

	/** Request has been accepted but not yet processed. */
	202: 'Request has been accepted but not yet processed.',

	/** Response from another source; may not be authoritative. */
	203: 'Response from another source; may not be authoritative.',

	/** Request succeeded, but no content to return. */
	204: 'Request succeeded, but no content to return.',

	/** Request succeeded, client should reset the document view. */
	205: 'Request succeeded, client should reset the document view.',

	/** Partial resource returned (used for range requests). */
	206: 'Partial resource returned (used for range requests).',

	/** Response contains multiple status codes (WebDAV). */
	207: 'Response contains multiple status codes (WebDAV).',

	/** Resource already reported in previous response. */
	208: 'Resource already reported in previous response.',

	/** The resource has been modified and used in a response. */
	226: 'The resource has been modified and used in a response.',

	/** Multiple options available for requested resource. */
	300: 'Multiple options available for requested resource.',

	/** Resource has been permanently moved to another URL. */
	301: 'Resource has been permanently moved to another URL.',

	/** Resource temporarily found at another URL. */
	302: 'Resource temporarily found at another URL.',

	/** Resource available at another URL; use GET to retrieve it. */
	303: 'Resource available at another URL; use GET to retrieve it.',

	/** Resource has not been modified since last request. */
	304: 'Resource has not been modified since last request.',

	/** Requested resource must be accessed through a proxy. */
	305: 'Requested resource must be accessed through a proxy.',

	/** Resource is temporarily redirected to another URL. */
	307: 'Resource is temporarily redirected to another URL.',

	/** Resource is permanently redirected to another URL. */
	308: 'Resource is permanently redirected to another URL.',

	/** Request cannot be fulfilled due to client-side error. */
	400: 'Request cannot be fulfilled due to client-side error.',

	/** Authentication is required for this request. */
	401: 'Authentication is required for this request.',

	/** Payment is required to access this resource. */
	402: 'Payment is required to access this resource.',

	/** Client does not have permission to access this resource. */
	403: 'Client does not have permission to access this resource.',

	/** Requested resource could not be found. */
	404: 'Requested resource could not be found.',

	/** HTTP method used is not allowed for this resource. */
	405: 'HTTP method used is not allowed for this resource.',

	/** Server cannot produce a response matching the request. */
	406: 'Server cannot produce a response matching the request.',

	/** Proxy authentication required before proceeding. */
	407: 'Proxy authentication required before proceeding.',

	/** Client took too long to send a request. */
	408: 'Client took too long to send a request.',

	/** Request could not be completed due to conflict with resource state. */
	409: 'Request could not be completed due to conflict with resource state.',

	/** Requested resource is no longer available. */
	410: 'Requested resource is no longer available.',

	/** Length of the request body is required. */
	411: 'Length of the request body is required.',

	/** Precondition in the request failed. */
	412: 'Precondition in the request failed.',

	/** Request payload is too large for the server to process. */
	413: 'Request payload is too large for the server to process.',

	/** Requested URI is too long for the server to process. */
	414: 'Requested URI is too long for the server to process.',

	/** Server does not support the media type in the request. */
	415: 'Server does not support the media type in the request.',

	/** Requested range is not satisfiable. */
	416: 'Requested range is not satisfiable.',

	/** Expectation in request header could not be met. */
	417: 'Expectation in request header could not be met.',

	/** A joke status code indicating that the server is a teapot. */
	418: 'A joke status code indicating that the server is a teapot.',

	/** Request is well-formed but cannot be processed semantically. */
	422: 'Request is well-formed but cannot be processed semantically.',

	/** Resource is locked and cannot be accessed. */
	423: 'Resource is locked and cannot be accessed.',

	/** Request failed due to a dependency failure. */
	424: 'Request failed due to a dependency failure.',

	/** Client must upgrade to a newer protocol version. */
	426: 'Client must upgrade to a newer protocol version.',

	/** Request requires preconditions to be met. */
	428: 'Request requires preconditions to be met.',

	/** Client has sent too many requests in a given time. */
	429: 'Client has sent too many requests in a given time.',

	/** Request headers are too large for the server to process. */
	431: 'Request headers are too large for the server to process.',

	/** An unexpected server error occurred. */
	500: 'An unexpected server error occurred.',

	/** Request method is not supported by the server. */
	501: 'Request method is not supported by the server.',

	/** Server received an invalid response from an upstream server. */
	502: 'Server received an invalid response from an upstream server.',

	/** Server is currently unavailable due to maintenance or overload. */
	503: 'Server is currently unavailable due to maintenance or overload.',

	/** Upstream server took too long to respond. */
	504: 'Upstream server took too long to respond.',

	/** Server does not support the HTTP version used in the request. */
	505: 'Server does not support the HTTP version used in the request.',

	/** Server has detected an internal configuration error. */
	506: 'Server has detected an internal configuration error.',

	/** Server does not have enough storage to complete the request. */
	507: 'Server does not have enough storage to complete the request.',

	/** Infinite loop detected while processing request. */
	508: 'Infinite loop detected while processing request.',

	/** Further extensions to the request are required. */
	510: 'Further extensions to the request are required.',

	/** Client must authenticate to gain network access. */
	511: 'Client must authenticate to gain network access.',
} as const;
