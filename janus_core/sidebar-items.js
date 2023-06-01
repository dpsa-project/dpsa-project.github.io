window.SIDEBAR_ITEMS = {"macro":[["vdaf_dispatch","Emits a match block dispatching on a [`VdafInstance`]. This must be called inside a method that returns a result, with an error type that [`prio::vdaf::VdafError`] can be converted into. Takes a `&VdafInstance` as the first argument, followed by a pseudo-pattern and body. The pseudo-pattern takes a variable name for the constructed VDAF, a type alias name that the block can use to explicitly specify the VDAF’s type, and the name of a const that will be set to the VDAF’s verify key length, also for explicitly specifying type parameters."],["vdaf_dispatch_impl","Internal implementation details of `vdaf_dispatch`."],["vdaf_dispatch_impl_base","Internal implementation details of `vdaf_dispatch`."],["vdaf_dispatch_impl_fpvec_bounded_l2","Internal implementation details of `vdaf_dispatch`."]],"mod":[["hpke","Encryption and decryption of messages using HPKE (RFC 9180)."],["http",""],["report_id","Extensions on report ID representations from `janus_messages`."],["retries","Provides a simple interface for retrying fallible HTTP requests."],["task",""],["time","Utilities for timestamps and durations."]],"struct":[["TokioRuntime","This type implements [`Runtime`] by directly calling [`tokio::task::spawn`]."]],"trait":[["Runtime","This trait provides a mockable facade for [`tokio::task::spawn`]."]]};