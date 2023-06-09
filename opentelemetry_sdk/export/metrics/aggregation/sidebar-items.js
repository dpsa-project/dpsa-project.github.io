window.SIDEBAR_ITEMS = {"enum":[["Temporality","Temporality indicates the temporal aggregation exported by an exporter. These bits may be OR-d together when multiple exporters are in use."]],"fn":[["constant_temporality_selector","Returns an [`TemporalitySelector`] that returns a constant [`Temporality`]."],["cumulative_temporality_selector","Returns an [`TemporalitySelector`] that always returns [`Temporality::Cumulative`]."],["delta_temporality_selector","Returns an [`TemporalitySelector`] that always returns [`Temporality::Delta`]."],["stateless_temporality_selector","Returns a [`TemporalitySelector`] that always returns the cumulative [`Temporality`] to avoid long-term memory requirements."]],"struct":[["AggregationKind","A short name for the `Aggregator` that produces an [`Aggregation`]."],["Buckets","Buckets represent histogram buckets boundaries and counts."]],"trait":[["Aggregation","An interface returned by an `Aggregator` containing an interval of metric data."],["Count","Count returns the number of values that were aggregated."],["Histogram","Histogram returns the count of events in pre-determined buckets."],["LastValue","LastValue returns the latest value that was aggregated."],["Max","Sum returns an aggregated max."],["Min","Sum returns an aggregated min."],["Sum","Sum returns an aggregated sum."],["TemporalitySelector","TemporalitySelector is a sub-interface of Exporter used to indicate whether the Processor should compute Delta or Cumulative Aggregations."]]};