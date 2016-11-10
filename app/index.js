const codes = {
  // General errors

  ERROR_NO_ERROR: 0,
  // No error has occurred.

  ERROR_FAILED: 1,
  // Will be raised when a general error occurred.

  ERROR_SYS_ERROR: 2,
  // Will be raised when operating system error occurred.

  ERROR_OUT_OF_MEMORY: 3,
  // Will be raised when there is a memory shortage.

  ERROR_INTERNAL: 4,
  // Will be raised when an internal error occurred.

  ERROR_ILLEGAL_NUMBER: 5,
  // Will be raised when an illegal representation of a number was given.

  ERROR_NUMERIC_OVERFLOW: 6,
  // Will be raised when a numeric overflow occurred.

  ERROR_ILLEGAL_OPTION: 7,
  // Will be raised when an unknown option was supplied by the user.

  ERROR_DEAD_PID: 8,
  // Will be raised when a PID without a living process was found.

  ERROR_NOT_IMPLEMENTED: 9,
  // Will be raised when hitting an unimplemented feature.

  ERROR_BAD_PARAMETER: 10,
  // Will be raised when the parameter does not fulfill the requirements.

  ERROR_FORBIDDEN: 11,
  // Will be raised when you are missing permission for the operation.

  ERROR_OUT_OF_MEMORY_MMAP: 12,
  // Will be raised when there is a memory shortage.

  ERROR_CORRUPTED_CSV: 13,
  // Will be raised when encountering a corrupt csv line.

  ERROR_FILE_NOT_FOUND: 14,
  // Will be raised when a file is not found.

  ERROR_CANNOT_WRITE_FILE: 15,
  // Will be raised when a file cannot be written.

  ERROR_CANNOT_OVERWRITE_FILE: 16,
  // Will be raised when an attempt is made to overwrite an existing file.

  ERROR_TYPE_ERROR: 17,
  // Will be raised when a type error is unencountered.

  ERROR_LOCK_TIMEOUT: 18,
  // Will be raised when there's a timeout waiting for a lock.

  ERROR_CANNOT_CREATE_DIRECTORY: 19,
  // Will be raised when an attempt to create a directory fails.

  ERROR_CANNOT_CREATE_TEMP_FILE: 20,
  // Will be raised when an attempt to create a temporary file fails.

  ERROR_REQUEST_CANCELED: 21,
  // Will be raised when a request is canceled by the user.

  ERROR_DEBUG: 22,
  // Will be raised intentionally during debugging.

  ERROR_IP_ADDRESS_INVALID: 25,
  // Will be raised when the structure of an IP address is invalid.

  ERROR_FILE_EXISTS: 27,
  // Will be raised when a file already exists.

  ERROR_LOCKED: 28,
  // Will be raised when a resource or an operation is locked.

  ERROR_DEADLOCK: 29,
  // Will be raised when a deadlock is detected when accessing collections.

  ERROR_SHUTTING_DOWN: 30,
  // Will be raised when a call cannot succeed because a server shutdown is already in progress.


  // HTTP error status codes

  ERROR_HTTP_BAD_PARAMETER: 400,
  // Will be raised when the HTTP request does not fulfill the requirements.

  ERROR_HTTP_UNAUTHORIZED: 401,
  // Will be raised when authorization is required but the user is not authorized.

  ERROR_HTTP_FORBIDDEN: 403,
  // Will be raised when the operation is forbidden.

  ERROR_HTTP_NOT_FOUND: 404,
  // Will be raised when an URI is unknown.

  ERROR_HTTP_METHOD_NOT_ALLOWED: 405,
  // Will be raised when an unsupported HTTP method is used for an operation.

  ERROR_HTTP_PRECONDITION_FAILED: 412,
  // Will be raised when a precondition for an HTTP request is not met.

  ERROR_HTTP_SERVER_ERROR: 500,
  // Will be raised when an internal server is encountered.


  // HTTP processing errors

  ERROR_HTTP_CORRUPTED_JSON: 600,
  // Will be raised when a string representation of a JSON object is corrupt.

  ERROR_HTTP_SUPERFLUOUS_SUFFICES: 601,
  // Will be raised when the URL contains superfluous suffices.


  // Internal ArangoDB storage errors

  // For errors that occur because of a programming error.

  ERROR_ARANGO_ILLEGAL_STATE: 1000,
  // Internal error that will be raised when the datafile is not in the required state.

  ERROR_ARANGO_DATAFILE_SEALED: 1002,
  // Internal error that will be raised when trying to write to a datafile.

  ERROR_ARANGO_UNKNOWN_COLLECTION_TYPE: 1003,
  // Internal error that will be raised when an unknown collection type is encountered.

  ERROR_ARANGO_READ_ONLY: 1004,
  // Internal error that will be raised when trying to write to a read-only datafile or collection.

  ERROR_ARANGO_DUPLICATE_IDENTIFIER: 1005,
  // Internal error that will be raised when a identifier duplicate is detected.

  ERROR_ARANGO_DATAFILE_UNREADABLE: 1006,
  // Internal error that will be raised when a datafile is unreadable.

  ERROR_ARANGO_DATAFILE_EMPTY: 1007,
  // Internal error that will be raised when a datafile is empty.

  ERROR_ARANGO_RECOVERY: 1008,
  // Will be raised when an error occurred during WAL log file recovery.


  // External ArangoDB storage errors

  // For errors that occur because of an outside event.

  ERROR_ARANGO_CORRUPTED_DATAFILE: 1100,
  // Will be raised when a corruption is detected in a datafile.

  ERROR_ARANGO_ILLEGAL_PARAMETER_FILE: 1101,
  // Will be raised if a parameter file is corrupted or cannot be read.

  ERROR_ARANGO_CORRUPTED_COLLECTION: 1102,
  // Will be raised when a collection contains one or more corrupted data files.

  ERROR_ARANGO_MMAP_FAILED: 1103,
  // Will be raised when the system call mmap failed.

  ERROR_ARANGO_FILESYSTEM_FULL: 1104,
  // Will be raised when the filesystem is full.

  ERROR_ARANGO_NO_JOURNAL: 1105,
  // Will be raised when a journal cannot be created.

  ERROR_ARANGO_DATAFILE_ALREADY_EXISTS: 1106,
  // Will be raised when the datafile cannot be created or renamed because a file of the same name already exists.

  ERROR_ARANGO_DATADIR_LOCKED: 1107,
  // Will be raised when the database directory is locked by a different process.

  ERROR_ARANGO_COLLECTION_DIRECTORY_ALREADY_EXISTS: 1108,
  // Will be raised when the collection cannot be created because a directory of the same name already exists.

  ERROR_ARANGO_MSYNC_FAILED: 1109,
  // Will be raised when the system call msync failed.

  ERROR_ARANGO_DATADIR_UNLOCKABLE: 1110,
  // Will be raised when the server cannot lock the database directory on startup.

  ERROR_ARANGO_SYNC_TIMEOUT: 1111,
  // Will be raised when the server waited too long for a datafile to be synced to disk.


  // General ArangoDB storage errors

  // For errors that occur when fulfilling a user request.

  ERROR_ARANGO_CONFLICT: 1200,
  // Will be raised when updating or deleting a document and a conflict has been detected.

  ERROR_ARANGO_DATADIR_INVALID: 1201,
  // Will be raised when a non-existing database directory was specified when starting the database.

  ERROR_ARANGO_DOCUMENT_NOT_FOUND: 1202,
  // Will be raised when a document with a given identifier or handle is unknown.

  ERROR_ARANGO_COLLECTION_NOT_FOUND: 1203,
  // Will be raised when a collection with a given identifier or name is unknown.

  ERROR_ARANGO_COLLECTION_PARAMETER_MISSING: 1204,
  // Will be raised when the collection parameter is missing.

  ERROR_ARANGO_DOCUMENT_HANDLE_BAD: 1205,
  // Will be raised when a document handle is corrupt.

  ERROR_ARANGO_MAXIMAL_SIZE_TOO_SMALL: 1206,
  // Will be raised when the maximal size of the journal is too small.

  ERROR_ARANGO_DUPLICATE_NAME: 1207,
  // Will be raised when a name duplicate is detected.

  ERROR_ARANGO_ILLEGAL_NAME: 1208,
  // Will be raised when an illegal name is detected.

  ERROR_ARANGO_NO_INDEX: 1209,
  // Will be raised when no suitable index for the query is known.

  ERROR_ARANGO_UNIQUE_CONSTRAINT_VIOLATED: 1210,
  // Will be raised when there is a unique constraint violation.

  ERROR_ARANGO_INDEX_NOT_FOUND: 1212,
  // Will be raised when an index with a given identifier is unknown.

  ERROR_ARANGO_CROSS_COLLECTION_REQUEST: 1213,
  // Will be raised when a cross-collection is requested.

  ERROR_ARANGO_INDEX_HANDLE_BAD: 1214,
  // Will be raised when a index handle is corrupt.

  ERROR_ARANGO_DOCUMENT_TOO_LARGE: 1216,
  // Will be raised when the document cannot fit into any datafile because of it is too large.

  ERROR_ARANGO_COLLECTION_NOT_UNLOADED: 1217,
  // Will be raised when a collection should be unloaded, but has a different status.

  ERROR_ARANGO_COLLECTION_TYPE_INVALID: 1218,
  // Will be raised when an invalid collection type is used in a request.

  ERROR_ARANGO_VALIDATION_FAILED: 1219,
  // Will be raised when the validation of an attribute of a structure failed.

  ERROR_ARANGO_ATTRIBUTE_PARSER_FAILED: 1220,
  // Will be raised when parsing an attribute name definition failed.

  ERROR_ARANGO_DOCUMENT_KEY_BAD: 1221,
  // Will be raised when a document key is corrupt.

  ERROR_ARANGO_DOCUMENT_KEY_UNEXPECTED: 1222,
  // Will be raised when a user-defined document key is supplied for collections with auto key generation.

  ERROR_ARANGO_DATADIR_NOT_WRITABLE: 1224,
  // Will be raised when the server's database directory is not writable for the current user.

  ERROR_ARANGO_OUT_OF_KEYS: 1225,
  // Will be raised when a key generator runs out of keys.

  ERROR_ARANGO_DOCUMENT_KEY_MISSING: 1226,
  // Will be raised when a document key is missing.

  ERROR_ARANGO_DOCUMENT_TYPE_INVALID: 1227,
  // Will be raised when there is an attempt to create a document with an invalid type.

  ERROR_ARANGO_DATABASE_NOT_FOUND: 1228,
  // Will be raised when a non-existing database is accessed.

  ERROR_ARANGO_DATABASE_NAME_INVALID: 1229,
  // Will be raised when an invalid database name is used.

  ERROR_ARANGO_USE_SYSTEM_DATABASE: 1230,
  // Will be raised when an operation is requested in a database other than the system database.

  ERROR_ARANGO_ENDPOINT_NOT_FOUND: 1231,
  // Will be raised when there is an attempt to delete a non-existing endpoint.

  ERROR_ARANGO_INVALID_KEY_GENERATOR: 1232,
  // Will be raised when an invalid key generator description is used.

  ERROR_ARANGO_INVALID_EDGE_ATTRIBUTE: 1233,
  // will be raised when the _from or _to values of an edge are undefined or contain an invalid value.

  ERROR_ARANGO_INDEX_DOCUMENT_ATTRIBUTE_MISSING: 1234,
  // Will be raised when an attempt to insert a document into an index is caused by in the document not having one or more attributes which the index is built on.

  ERROR_ARANGO_INDEX_CREATION_FAILED: 1235,
  // Will be raised when an attempt to create an index has failed.

  ERROR_ARANGO_WRITE_THROTTLE_TIMEOUT: 1236,
  // Will be raised when the server is write-throttled and a write operation has waited too long for the server to process queued operations.

  ERROR_ARANGO_COLLECTION_TYPE_MISMATCH: 1237,
  // Will be raised when a collection has a different type from what has been expected.

  ERROR_ARANGO_COLLECTION_NOT_LOADED: 1238,
  // Will be raised when a collection is accessed that is not yet loaded.

  ERROR_ARANGO_DOCUMENT_REV_BAD: 1239,
  // Will be raised when a document revision is corrupt or is missing where needed.


  // Checked ArangoDB storage errors

  // For errors that occur but are anticipated.

  ERROR_ARANGO_DATAFILE_FULL: 1300,
  // Will be raised when the datafile reaches its limit.

  ERROR_ARANGO_EMPTY_DATADIR: 1301,
  // Will be raised when encountering an empty server database directory.


  // ArangoDB replication errors

  ERROR_REPLICATION_NO_RESPONSE: 1400,
  // Will be raised when the replication applier does not receive any or an incomplete response from the master.

  ERROR_REPLICATION_INVALID_RESPONSE: 1401,
  // Will be raised when the replication applier receives an invalid response from the master.

  ERROR_REPLICATION_MASTER_ERROR: 1402,
  // Will be raised when the replication applier receives a server error from the master.

  ERROR_REPLICATION_MASTER_INCOMPATIBLE: 1403,
  // Will be raised when the replication applier connects to a master that has an incompatible version.

  ERROR_REPLICATION_MASTER_CHANGE: 1404,
  // Will be raised when the replication applier connects to a different master than before.

  ERROR_REPLICATION_LOOP: 1405,
  // Will be raised when the replication applier is asked to connect to itself for replication.

  ERROR_REPLICATION_UNEXPECTED_MARKER: 1406,
  // Will be raised when an unexpected marker is found in the replication log stream.

  ERROR_REPLICATION_INVALID_APPLIER_STATE: 1407,
  // Will be raised when an invalid replication applier state file is found.

  ERROR_REPLICATION_UNEXPECTED_TRANSACTION: 1408,
  // Will be raised when an unexpected transaction id is found.

  ERROR_REPLICATION_INVALID_APPLIER_CONFIGURATION: 1410,
  // Will be raised when the configuration for the replication applier is invalid.

  ERROR_REPLICATION_RUNNING: 1411,
  // Will be raised when there is an attempt to perform an operation while the replication applier is running.

  ERROR_REPLICATION_APPLIER_STOPPED: 1412,
  // Special error code used to indicate the replication applier was stopped by a user.

  ERROR_REPLICATION_NO_START_TICK: 1413,
  // Will be raised when the replication applier is started without a known start tick value.

  ERROR_REPLICATION_START_TICK_NOT_PRESENT: 1414,
  // Will be raised when the replication applier fetches data using a start tick, but that start tick is not present on the logger server anymore.


  // ArangoDB cluster errors

  ERROR_CLUSTER_NO_AGENCY: 1450,
  // Will be raised when none of the agency servers can be connected to.

  ERROR_CLUSTER_NO_COORDINATOR_HEADER: 1451,
  // Will be raised when a DB server in a cluster receives a HTTP request without a coordinator header.

  ERROR_CLUSTER_COULD_NOT_LOCK_PLAN: 1452,
  // Will be raised when a coordinator in a cluster cannot lock the Plan hierarchy in the agency.

  ERROR_CLUSTER_COLLECTION_ID_EXISTS: 1453,
  // Will be raised when a coordinator in a cluster tries to create a collection and the collection ID already exists.

  ERROR_CLUSTER_COULD_NOT_CREATE_COLLECTION_IN_PLAN: 1454,
  // Will be raised when a coordinator in a cluster cannot create an entry for a new collection in the Plan hierarchy in the agency.

  ERROR_CLUSTER_COULD_NOT_READ_CURRENT_VERSION: 1455,
  // Will be raised when a coordinator in a cluster cannot read the Version entry in the Current hierarchy in the agency.

  ERROR_CLUSTER_COULD_NOT_CREATE_COLLECTION: 1456,
  // Will be raised when a coordinator in a cluster notices that some DBServers report problems when creating shards for a new collection.

  ERROR_CLUSTER_TIMEOUT: 1457,
  // Will be raised when a coordinator in a cluster runs into a timeout for some cluster wide operation.

  ERROR_CLUSTER_COULD_NOT_REMOVE_COLLECTION_IN_PLAN: 1458,
  // Will be raised when a coordinator in a cluster cannot remove an entry for a collection in the Plan hierarchy in the agency.

  ERROR_CLUSTER_COULD_NOT_REMOVE_COLLECTION_IN_CURRENT: 1459,
  // Will be raised when a coordinator in a cluster cannot remove an entry for a collection in the Current hierarchy in the agency.

  ERROR_CLUSTER_COULD_NOT_CREATE_DATABASE_IN_PLAN: 1460,
  // Will be raised when a coordinator in a cluster cannot create an entry for a new database in the Plan hierarchy in the agency.

  ERROR_CLUSTER_COULD_NOT_CREATE_DATABASE: 1461,
  // Will be raised when a coordinator in a cluster notices that some DBServers report problems when creating databases for a new cluster wide database.

  ERROR_CLUSTER_COULD_NOT_REMOVE_DATABASE_IN_PLAN: 1462,
  // Will be raised when a coordinator in a cluster cannot remove an entry for a database in the Plan hierarchy in the agency.

  ERROR_CLUSTER_COULD_NOT_REMOVE_DATABASE_IN_CURRENT: 1463,
  // Will be raised when a coordinator in a cluster cannot remove an entry for a database in the Current hierarchy in the agency.

  ERROR_CLUSTER_SHARD_GONE: 1464,
  // Will be raised when a coordinator in a cluster cannot determine the shard that is responsible for a given document.

  ERROR_CLUSTER_CONNECTION_LOST: 1465,
  // Will be raised when a coordinator in a cluster loses an HTTP connection to a DBserver in the cluster whilst transferring data.

  ERROR_CLUSTER_MUST_NOT_SPECIFY_KEY: 1466,
  // Will be raised when a coordinator in a cluster finds that the _key attribute was specified in a sharded collection the uses not only _key as sharding attribute.

  ERROR_CLUSTER_GOT_CONTRADICTING_ANSWERS: 1467,
  // Will be raised if a coordinator in a cluster gets conflicting results from different shards, which should never happen.

  ERROR_CLUSTER_NOT_ALL_SHARDING_ATTRIBUTES_GIVEN: 1468,
  // Will be raised if a coordinator tries to find out which shard is responsible for a partial document, but cannot do this because not all sharding attributes are specified.

  ERROR_CLUSTER_MUST_NOT_CHANGE_SHARDING_ATTRIBUTES: 1469,
  // Will be raised if there is an attempt to update the value of a shard attribute.

  ERROR_CLUSTER_UNSUPPORTED: 1470,
  // Will be raised when there is an attempt to carry out an operation that is not supported in the context of a sharded collection.

  ERROR_CLUSTER_ONLY_ON_COORDINATOR: 1471,
  // Will be raised if there is an attempt to run a coordinator-only operation on a different type of node.

  ERROR_CLUSTER_READING_PLAN_AGENCY: 1472,
  // Will be raised if a coordinator or DBserver cannot read the Plan in the agency.

  ERROR_CLUSTER_COULD_NOT_TRUNCATE_COLLECTION: 1473,
  // Will be raised if a coordinator cannot truncate all shards of a cluster collection.

  ERROR_CLUSTER_AQL_COMMUNICATION: 1474,
  // Will be raised if the internal communication of the cluster for AQL produces an error.

  ERROR_ARANGO_DOCUMENT_NOT_FOUND_OR_SHARDING_ATTRIBUTES_CHANGED: 1475,
  // Will be raised when a document with a given identifier or handle is unknown, or if the sharding attributes have been changed in a REPLACE operation in the cluster.

  ERROR_CLUSTER_COULD_NOT_DETERMINE_ID: 1476,
  // Will be raised if a cluster server at startup could not determine its own ID from the local info provided.

  ERROR_CLUSTER_ONLY_ON_DBSERVER: 1477,
  // Will be raised if there is an attempt to run a DBserver-only operation on a different type of node.

  ERROR_CLUSTER_BACKEND_UNAVAILABLE: 1478,
  // Will be raised if a required db server can't be reached.

  ERROR_CLUSTER_UNKNOWN_CALLBACK_ENDPOINT: 1479,
  // An endpoint couldn't be found

  ERROR_CLUSTER_AGENCY_STRUCTURE_INVALID: 1480,
  // The structure in the agency is invalid


  // ArangoDB query errors

  ERROR_QUERY_KILLED: 1500,
  // Will be raised when a running query is killed by an explicit admin command.

  ERROR_QUERY_PARSE: 1501,
  // Will be raised when query is parsed and is found to be syntactically invalid.

  ERROR_QUERY_EMPTY: 1502,
  // Will be raised when an empty query is specified.

  ERROR_QUERY_SCRIPT: 1503,
  // Will be raised when a runtime error is caused by the query.

  ERROR_QUERY_NUMBER_OUT_OF_RANGE: 1504,
  // Will be raised when a number is outside the expected range.

  ERROR_QUERY_VARIABLE_NAME_INVALID: 1510,
  // Will be raised when an invalid variable name is used.

  ERROR_QUERY_VARIABLE_REDECLARED: 1511,
  // Will be raised when a variable gets re-assigned in a query.

  ERROR_QUERY_VARIABLE_NAME_UNKNOWN: 1512,
  // Will be raised when an unknown variable is used or the variable is undefined the context it is used.

  ERROR_QUERY_COLLECTION_LOCK_FAILED: 1521,
  // Will be raised when a read lock on the collection cannot be acquired.

  ERROR_QUERY_TOO_MANY_COLLECTIONS: 1522,
  // Will be raised when the number of collections in a query is beyond the allowed value.

  ERROR_QUERY_DOCUMENT_ATTRIBUTE_REDECLARED: 1530,
  // Will be raised when a document attribute is re-assigned.

  ERROR_QUERY_FUNCTION_NAME_UNKNOWN: 1540,
  // Will be raised when an undefined function is called.

  ERROR_QUERY_FUNCTION_ARGUMENT_NUMBER_MISMATCH: 1541,
  // Will be raised when the number of arguments used in a function call does not match the expected number of arguments for the function.

  ERROR_QUERY_FUNCTION_ARGUMENT_TYPE_MISMATCH: 1542,
  // Will be raised when the type of an argument used in a function call does not match the expected argument type.

  ERROR_QUERY_INVALID_REGEX: 1543,
  // Will be raised when an invalid regex argument value is used in a call to a function that expects a regex.

  ERROR_QUERY_BIND_PARAMETERS_INVALID: 1550,
  // Will be raised when the structure of bind parameters passed has an unexpected format.

  ERROR_QUERY_BIND_PARAMETER_MISSING: 1551,
  // Will be raised when a bind parameter was declared in the query but the query is being executed with no value for that parameter.

  ERROR_QUERY_BIND_PARAMETER_UNDECLARED: 1552,
  // Will be raised when a value gets specified for an undeclared bind parameter.

  ERROR_QUERY_BIND_PARAMETER_TYPE: 1553,
  // Will be raised when a bind parameter has an invalid value or type.

  ERROR_QUERY_INVALID_LOGICAL_VALUE: 1560,
  // Will be raised when a non-boolean value is used in a logical operation.

  ERROR_QUERY_INVALID_ARITHMETIC_VALUE: 1561,
  // Will be raised when a non-numeric value is used in an arithmetic operation.

  ERROR_QUERY_DIVISION_BY_ZERO: 1562,
  // Will be raised when there is an attempt to divide by zero.

  ERROR_QUERY_ARRAY_EXPECTED: 1563,
  // Will be raised when a non-array operand is used for an operation that expects an array argument operand.

  ERROR_QUERY_FAIL_CALLED: 1569,
  // Will be raised when the function FAIL() is called from inside a query.

  ERROR_QUERY_GEO_INDEX_MISSING: 1570,
  // Will be raised when a geo restriction was specified but no suitable geo index is found to resolve it.

  ERROR_QUERY_FULLTEXT_INDEX_MISSING: 1571,
  // Will be raised when a fulltext query is performed on a collection without a suitable fulltext index.

  ERROR_QUERY_INVALID_DATE_VALUE: 1572,
  // Will be raised when a value cannot be converted to a date.

  ERROR_QUERY_MULTI_MODIFY: 1573,
  // Will be raised when an AQL query contains more than one data-modifying operation.

  ERROR_QUERY_INVALID_AGGREGATE_EXPRESSION: 1574,
  // Will be raised when an AQL query contains an invalid aggregate expression.

  ERROR_QUERY_COMPILE_TIME_OPTIONS: 1575,
  // Will be raised when an AQL data-modification query contains options that cannot be figured out at query compile time.

  ERROR_QUERY_EXCEPTION_OPTIONS: 1576,
  // Will be raised when an AQL data-modification query contains an invalid options specification.

  ERROR_QUERY_COLLECTION_USED_IN_EXPRESSION: 1577,
  // Will be raised when a collection is used as an operand in an AQL expression.

  ERROR_QUERY_DISALLOWED_DYNAMIC_CALL: 1578,
  // Will be raised when a dynamic function call is made to a function that cannot be called dynamically.

  ERROR_QUERY_ACCESS_AFTER_MODIFICATION: 1579,
  // Will be raised when collection data are accessed after a data-modification operation.


  // AQL user function errors

  ERROR_QUERY_FUNCTION_INVALID_NAME: 1580,
  // Will be raised when a user function with an invalid name is registered.

  ERROR_QUERY_FUNCTION_INVALID_CODE: 1581,
  // Will be raised when a user function is registered with invalid code.

  ERROR_QUERY_FUNCTION_NOT_FOUND: 1582,
  // Will be raised when a user function is accessed but not found.

  ERROR_QUERY_FUNCTION_RUNTIME_ERROR: 1583,
  // Will be raised when a user function throws a runtime exception.


  // AQL query registry errors

  ERROR_QUERY_BAD_JSON_PLAN: 1590,
  // Will be raised when an HTTP API for a query got an invalid JSON object.

  ERROR_QUERY_NOT_FOUND: 1591,
  // Will be raised when an Id of a query is not found by the HTTP API.

  ERROR_QUERY_IN_USE: 1592,
  // Will be raised when an Id of a query is found by the HTTP API but the query is in use.


  // ArangoDB cursor errors

  ERROR_CURSOR_NOT_FOUND: 1600,
  // Will be raised when a cursor is requested via its id but a cursor with that id cannot be found.

  ERROR_CURSOR_BUSY: 1601,
  // Will be raised when a cursor is requested via its id but a concurrent request is still using the cursor.


  // ArangoDB transaction errors

  ERROR_TRANSACTION_INTERNAL: 1650,
  // Will be raised when a wrong usage of transactions is detected. this is an internal error and indicates a bug in ArangoDB.

  ERROR_TRANSACTION_NESTED: 1651,
  // Will be raised when transactions are nested.

  ERROR_TRANSACTION_UNREGISTERED_COLLECTION: 1652,
  // Will be raised when a collection is used in the middle of a transaction but was not registered at transaction start.

  ERROR_TRANSACTION_DISALLOWED_OPERATION: 1653,
  // Will be raised when a disallowed operation is carried out in a transaction.

  ERROR_TRANSACTION_ABORTED: 1654,
  // Will be raised when a transaction was aborted.


  // User management errors

  ERROR_USER_INVALID_NAME: 1700,
  // Will be raised when an invalid user name is used.

  ERROR_USER_INVALID_PASSWORD: 1701,
  // Will be raised when an invalid password is used.

  ERROR_USER_DUPLICATE: 1702,
  // Will be raised when a user name already exists.

  ERROR_USER_NOT_FOUND: 1703,
  // Will be raised when a user name is updated that does not exist.

  ERROR_USER_CHANGE_PASSWORD: 1704,
  // Will be raised when the user must change his password.


  // Service management errors

  ERROR_SERVICE_INVALID_NAME: 1750,
  // Will be raised when an invalid service name is specified.

  ERROR_SERVICE_INVALID_MOUNT: 1751,
  // Will be raised when an invalid mount is specified.

  ERROR_SERVICE_DOWNLOAD_FAILED: 1752,
  // Will be raised when a service download from the central repository failed.

  ERROR_SERVICE_UPLOAD_FAILED: 1753,
  // Will be raised when a service upload from the client to the ArangoDB server failed.


  // Key value access errors

  ERROR_KEYVALUE_INVALID_KEY: 1800,
  // Will be raised when an invalid key specification is passed to the server

  ERROR_KEYVALUE_KEY_EXISTS: 1801,
  // Will be raised when a key is to be created that already exists

  ERROR_KEYVALUE_KEY_NOT_FOUND: 1802,
  // Will be raised when the specified key is not found

  ERROR_KEYVALUE_KEY_NOT_UNIQUE: 1803,
  // Will be raised when the specified key is not unique

  ERROR_KEYVALUE_KEY_NOT_CHANGED: 1804,
  // Will be raised when updating the value for a key does not work

  ERROR_KEYVALUE_KEY_NOT_REMOVED: 1805,
  // Will be raised when deleting a key/value pair does not work

  ERROR_KEYVALUE_NO_VALUE: 1806,
  // Will be raised when the value is missing


  // Task errors

  ERROR_TASK_INVALID_ID: 1850,
  // Will be raised when a task is created with an invalid id.

  ERROR_TASK_DUPLICATE_ID: 1851,
  // Will be raised when a task id is created with a duplicate id.

  ERROR_TASK_NOT_FOUND: 1852,
  // Will be raised when a task with the specified id could not be found.


  // Graph / traversal errors

  ERROR_GRAPH_INVALID_GRAPH: 1901,
  // Will be raised when an invalid name is passed to the server.

  ERROR_GRAPH_COULD_NOT_CREATE_GRAPH: 1902,
  // Will be raised when an invalid name, vertices or edges is passed to the server.

  ERROR_GRAPH_INVALID_VERTEX: 1903,
  // Will be raised when an invalid vertex id is passed to the server.

  ERROR_GRAPH_COULD_NOT_CREATE_VERTEX: 1904,
  // Will be raised when the vertex could not be created.

  ERROR_GRAPH_COULD_NOT_CHANGE_VERTEX: 1905,
  // Will be raised when the vertex could not be changed.

  ERROR_GRAPH_INVALID_EDGE: 1906,
  // Will be raised when an invalid edge id is passed to the server.

  ERROR_GRAPH_COULD_NOT_CREATE_EDGE: 1907,
  // Will be raised when the edge could not be created.

  ERROR_GRAPH_COULD_NOT_CHANGE_EDGE: 1908,
  // Will be raised when the edge could not be changed.

  ERROR_GRAPH_TOO_MANY_ITERATIONS: 1909,
  // Will be raised when too many iterations are done in a graph traversal.

  ERROR_GRAPH_INVALID_FILTER_RESULT: 1910,
  // Will be raised when an invalid filter result is returned in a graph traversal.

  ERROR_GRAPH_COLLECTION_MULTI_USE: 1920,
  // an edge collection may only be used once in one edge definition of a graph.,

  ERROR_GRAPH_COLLECTION_USE_IN_MULTI_GRAPHS: 1921,
  // is already used by another graph in a different edge definition.,

  ERROR_GRAPH_CREATE_MISSING_NAME: 1922,
  // a graph name is required to create a graph.,

  ERROR_GRAPH_CREATE_MALFORMED_EDGE_DEFINITION: 1923,
  // the edge definition is malformed. It has to be an array of objects.,

  ERROR_GRAPH_NOT_FOUND: 1924,
  // a graph with this name could not be found.,

  ERROR_GRAPH_DUPLICATE: 1925,
  // a graph with this name already exists.,

  ERROR_GRAPH_VERTEX_COL_DOES_NOT_EXIST: 1926,
  // the specified vertex collection does not exist or is not part of the graph.,

  ERROR_GRAPH_WRONG_COLLECTION_TYPE_VERTEX: 1927,
  // the collection is not a vertex collection.,

  ERROR_GRAPH_NOT_IN_ORPHAN_COLLECTION: 1928,
  // Vertex collection not in orphan collection of the graph.,

  ERROR_GRAPH_COLLECTION_USED_IN_EDGE_DEF: 1929,
  // The collection is already used in an edge definition of the graph.,

  ERROR_GRAPH_EDGE_COLLECTION_NOT_USED: 1930,
  // The edge collection is not used in any edge definition of the graph.,

  ERROR_GRAPH_NOT_AN_ARANGO_COLLECTION: 1931,
  // The collection is not an ArangoCollection.,

  ERROR_GRAPH_NO_GRAPH_COLLECTION: 1932,
  // collection _graphs does not exist.,

  ERROR_GRAPH_INVALID_EXAMPLE_ARRAY_OBJECT_STRING: 1933,
  // Invalid example type. Has to be String, Array or Object.,

  ERROR_GRAPH_INVALID_EXAMPLE_ARRAY_OBJECT: 1934,
  // Invalid example type. Has to be Array or Object.,

  ERROR_GRAPH_INVALID_NUMBER_OF_ARGUMENTS: 1935,
  // Invalid number of arguments. Expected: ,

  ERROR_GRAPH_INVALID_PARAMETER: 1936,
  // Invalid parameter type.,

  ERROR_GRAPH_INVALID_ID: 1937,
  // Invalid id,

  ERROR_GRAPH_COLLECTION_USED_IN_ORPHANS: 1938,
  // The collection is already used in the orphans of the graph.,

  ERROR_GRAPH_EDGE_COL_DOES_NOT_EXIST: 1939,
  // the specified edge collection does not exist or is not part of the graph.,

  ERROR_GRAPH_EMPTY: 1940,
  // The requested graph has no edge collections.


  // Session errors

  ERROR_SESSION_UNKNOWN: 1950,
  // Will be raised when an invalid/unknown session id is passed to the server.

  ERROR_SESSION_EXPIRED: 1951,
  // Will be raised when a session is expired.

  // Simple Client errors

  SIMPLE_CLIENT_UNKNOWN_ERROR: 2000,
  // This error should not happen.

  SIMPLE_CLIENT_COULD_NOT_CONNECT: 2001,
  // Will be raised when the client could not connect to the server.

  SIMPLE_CLIENT_COULD_NOT_WRITE: 2002,
  // Will be raised when the client could not write data.

  SIMPLE_CLIENT_COULD_NOT_READ: 2003,
  // Will be raised when the client could not read data.


  // Foxx Manager errors

  ERROR_MALFORMED_MANIFEST_FILE: 3000,
  // The manifest file is malformed. It is not in a valid JSON format.

  ERROR_INVALID_SERVICE_MANIFEST: 3001,
  // The manifest file of this service is invalid.

  ERROR_INVALID_FOXX_OPTIONS: 3004,
  // The options used to configure the foxx are invalid.

  ERROR_INVALID_MOUNTPOINT: 3007,
  // mountpoint is invalid

  ERROR_SERVICE_NOT_FOUND: 3009,
  // No service found at this mountpoint

  ERROR_SERVICE_NEEDS_CONFIGURATION: 3010,
  // The service has to be configured before it can be used

  ERROR_SERVICE_MOUNTPOINT_CONFLICT: 3011,
  // A service has already been installed at this mountpoint

  // JavaScript module loader errors

  ERROR_MODULE_NOT_FOUND: 3100,
  // The module path could not be resolved.

  ERROR_MODULE_FAILURE: 3103,
  // Failed to invoke the module in its context.


  // Results

  // These are technically not errors.

  RESULT_ELEMENT_EXISTS: 10000,
  // Will be returned if the element was not insert because it already exists.

  RESULT_ELEMENT_NOT_FOUND: 10001,
  // Will be returned if the element was not found in the structure.


  // Dispatcher errors

  ERROR_QUEUE_ALREADY_EXISTS: 21000,
  // Will be returned if a queue with this name already exists.

  ERROR_DISPATCHER_IS_STOPPING: 21001,
  // Will be returned if a shutdown is in progress.

  ERROR_QUEUE_UNKNOWN: 21002,
  // Will be returned if a queue with this name does not exist.

  ERROR_QUEUE_FULL: 21003,
  // Will be returned if a queue with this name is full.
};

export default codes;
