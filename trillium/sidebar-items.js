window.SIDEBAR_ITEMS = {"attr":[["async_trait",""]],"enum":[["Error","Concrete errors that occur within trillium’s http implementation"],["KnownHeaderName","A short nonehaustive enum of headers that trillium can represent as a u8. Use a `KnownHeaderName` variant instead of a &’static str anywhere possible, as it allows trillium to skip parsing the header entirely."],["Method","HTTP request methods."],["Status","HTTP response status codes."],["Version","The version of the HTTP protocol in use."]],"fn":[["init","alias for [`Init::new`]"],["state","Constructs a new [`State`] handler from any Clone + Send + Sync + ’static. Alias for [`State::new`]"]],"macro":[["conn_try","Unwraps an `Result::Ok` or returns the `Conn` with a 500 status."],["conn_unwrap","Unwraps an `Option::Some` or returns the `Conn`."],["delegate_handler","Macro for implementing Handler for simple newtypes that contain another handler."],["log_error","A convenience macro for logging the contents of error variants."]],"struct":[["Body","The trillium representation of a http body. This can contain either `&'static [u8]` content, `Vec<u8>` content, or a boxed `AsyncRead` type."],["Conn","A Trillium HTTP connection."],["HeaderName","The name of a http header. This can be either a [`KnownHeaderName`] or a string representation of an unknown header."],["HeaderValue","A `HeaderValue` represents the right hand side of a single `name: value` pair."],["HeaderValues","A header value is a collection of one or more [`HeaderValue`]. It has been optimized for the “one [`HeaderValue`]” case, but can accomodate more than one value."],["Headers","Trillium’s header map type"],["Info","This struct represents information about the currently connected server."],["Init","Provides support for asynchronous initialization of a handler after the server is started."],["State","A handler for sharing state across an application."],["StateSet","Store and retrieve values by `TypeId`. This allows storing arbitrary data that implements `Sync + Send + 'static`."]],"trait":[["Handler","The building block for Trillium applications."]],"type":[["Upgrade","A HTTP protocol upgrade"]]};