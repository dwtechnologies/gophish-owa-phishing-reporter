export var isIE11 = function () {
    if (typeof window === 'undefined' || !window.navigator || !window.navigator.userAgent) {
        return false;
    }
    return window.navigator.userAgent.indexOf('rv:11.0') > -1;
};
//# sourceMappingURL=ie11Detector.js.map