(function () {
    var backwardschar = (function () {
        var x = document.createElement('span');
        x.innerHTML = '&#8238;';
        return x.textContent || x.innerText;
    })();
    var apply = function (node) {
        var nodes = node.childNodes, i = nodes.length;
        while (i--) {
            if (nodes[i].nodeType === 3 && /\w/g.test(nodes[i].nodeValue)) {
                nodes[i].nodeValue = backwardschar + nodes[i].nodeValue;
            }
            if (nodes[i].childNodes.length > 0) {
                apply(nodes[i]);
            }
        };
    };
    window.onload = function () {
        apply(document.body);
    }
})();