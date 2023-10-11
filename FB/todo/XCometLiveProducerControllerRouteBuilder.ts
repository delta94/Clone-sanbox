__d("XCometLiveProducerControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/live/producer/{?videoID}/", Object.freeze({
        is_rehearsal: !1,
        show_work_tour: !1
    }), void 0);
    b = a;
    g["default"] = b
}
), 98);



import jsRouteBuilder from 'jsRouteBuilder';

const XCometLiveProducerControllerRouteBuilder = jsRouteBuilder(
    "/live/producer/{?videoID}/",
    {
        is_rehearsal: false,
        show_work_tour: false
    }
);

export default XCometLiveProducerControllerRouteBuilder;
