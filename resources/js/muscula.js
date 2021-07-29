window.Muscula = {
    settings: {
        logId: 'xpobmbV4Iju',
        suppressErrors: false,
    },
};
(function () {
    var m = document.createElement('script');
    m.type = 'text/javascript';
    m.async = true;
    m.src = 'https://cdn.muscula.com/m2v1.min.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(m, s);
    window.Muscula.run = function () {
        var a;
        eval(arguments[0]);
        window.Muscula.run = function () {};
    };
    window.Muscula.errors = [];
    window.onerror = function () {
        window.Muscula.errors.push(arguments);
        return window.Muscula.settings.suppressErrors === undefined;
    };
})();