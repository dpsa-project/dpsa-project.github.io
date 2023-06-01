window.SIDEBAR_ITEMS = {"enum":[["Error","A serde-serializable error"],["Value","Represents any valid JSON value."]],"fn":[["api","constructs a new [`ApiFromConnHandler`] from the provided `async fn(&mut conn, FromConn) -> impl Handler`"]],"macro":[["json","Construct a `serde_json::Value` from a JSON literal."]],"struct":[["ApiHandler","This handler provides the capacity to extract various components of a conn such as deserializing a body, and supports returning handlers that will be called on the returned conn."],["Body","Body extractor"],["Halt","a struct that halts the Conn handler sequence. see [`Conn::halt`] for more."],["Json","A newtype wrapper struct for any [`serde::Serialize`] type. Note that this currently must own the serializable type. Body extractor"],["State","State extractor"]],"trait":[["ApiConnExt","Extension trait that adds api methods to [`trillium::Conn`]"],["FromConn","A trait to extract content from [`Conn`]s to be used as the second argument to an api handler. Implement this for your types."]]};