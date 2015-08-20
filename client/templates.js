(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        if (typeof root === 'undefined' || root !== Object(root)) {
            throw new Error('templatizer: window does not exist or is not an object');
        }
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function n(n){return null!=n&&""!==n}function t(e){return(Array.isArray(e)?e.map(t):e&&"object"==typeof e?Object.keys(e).filter(function(n){return e[n]}):[e]).filter(n).join(" ")}function e(n){return i[n]||n}function r(n){var t=String(n).replace(o,e);return t===""+n?n:t}var a={};a.merge=function s(t,e){if(1===arguments.length){for(var r=t[0],a=1;a<t.length;a++)r=s(r,t[a]);return r}var i=t["class"],o=e["class"];(i||o)&&(i=i||[],o=o||[],Array.isArray(i)||(i=[i]),Array.isArray(o)||(o=[o]),t["class"]=i.concat(o).filter(n));for(var f in e)"class"!=f&&(t[f]=e[f]);return t},a.joinClasses=t,a.cls=function(n,e){for(var r=[],i=0;i<n.length;i++)e&&e[i]?r.push(a.escape(t([n[i]]))):r.push(t(n[i]));var o=t(r);return o.length?' class="'+o+'"':""},a.style=function(n){return n&&"object"==typeof n?Object.keys(n).map(function(t){return t+":"+n[t]}).join(";"):n},a.attr=function(n,t,e,r){return"style"===n&&(t=a.style(t)),"boolean"==typeof t||null==t?t?" "+(r?n:n+'="'+n+'"'):"":0==n.indexOf("data")&&"string"!=typeof t?(-1!==JSON.stringify(t).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),t&&"function"==typeof t.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+n+"='"+JSON.stringify(t).replace(/'/g,"&apos;")+"'"):e?(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+n+'="'+a.escape(t)+'"'):(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+n+'="'+t+'"')},a.attrs=function(n,e){var r=[],i=Object.keys(n);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],f=n[s];"class"==s?(f=t(f))&&r.push(" "+s+'="'+f+'"'):r.push(a.attr(s,f,!1,e))}return r.join("")};var i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},o=/[&<>"]/g;return a.escape=r,a.rethrow=function f(n,t,e,r){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&t||r))throw n.message+=" on line "+e,n;try{r=r||require("fs").readFileSync(t,"utf8")}catch(a){f(n,null,e)}var i=3,o=r.split("\n"),s=Math.max(e-i,0),l=Math.min(o.length,e+i),i=o.slice(s,l).map(function(n,t){var r=t+s+1;return(r==e?"  > ":"    ")+r+"| "+n}).join("\n");throw n.path=t,n.message=(t||"Jade")+":"+e+"\n"+i+"\n\n"+n.message,n},a.DebugItem=function(n,t){this.lineno=n,this.filename=t},a}(); 

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><div class="container"><h2 class="page-title">Tic Tac Toe</h2><main data-hook="page-container"></main></div></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>';
    };

    // includes/formInput.jade compiled template
    templatizer["includes"]["formInput"] = function tmpl_includes_formInput() {
        return '<div class="form-group"><label data-hook="label"></label><div data-hook="message-container"><div data-hook="message-text" class="alert alert-danger"></div></div><input class="form-control"/></div>';
    };

    // pages/play.jade compiled template
    templatizer["pages"]["play"] = function tmpl_pages_play(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(drawCount, gameField, player0, player1, undefined) {
            buf.push('<section class="page-play"><p><a href="/">< Back to Start</a></p><p data-hook="message" class="alert"></p><div class="clearfix"><div id="gameField" class="gameField pull-left">');
            (function() {
                var $obj = gameField;
                if ("number" == typeof $obj.length) {
                    for (var yPos = 0, $l = $obj.length; yPos < $l; yPos++) {
                        var row = $obj[yPos];
                        buf.push('<div class="gameRow clearfix">');
                        (function() {
                            var $obj = row;
                            if ("number" == typeof $obj.length) {
                                for (var xPos = 0, $l = $obj.length; xPos < $l; xPos++) {
                                    var field = $obj[xPos];
                                    buf.push("<div" + jade.attr("data-ypos", yPos, true, false) + jade.attr("data-xpos", xPos, true, false) + ' class="gameCell is-empty"></div>');
                                }
                            } else {
                                var $l = 0;
                                for (var xPos in $obj) {
                                    $l++;
                                    var field = $obj[xPos];
                                    buf.push("<div" + jade.attr("data-ypos", yPos, true, false) + jade.attr("data-xpos", xPos, true, false) + ' class="gameCell is-empty"></div>');
                                }
                            }
                        }).call(this);
                        buf.push("</div>");
                    }
                } else {
                    var $l = 0;
                    for (var yPos in $obj) {
                        $l++;
                        var row = $obj[yPos];
                        buf.push('<div class="gameRow clearfix">');
                        (function() {
                            var $obj = row;
                            if ("number" == typeof $obj.length) {
                                for (var xPos = 0, $l = $obj.length; xPos < $l; xPos++) {
                                    var field = $obj[xPos];
                                    buf.push("<div" + jade.attr("data-ypos", yPos, true, false) + jade.attr("data-xpos", xPos, true, false) + ' class="gameCell is-empty"></div>');
                                }
                            } else {
                                var $l = 0;
                                for (var xPos in $obj) {
                                    $l++;
                                    var field = $obj[xPos];
                                    buf.push("<div" + jade.attr("data-ypos", yPos, true, false) + jade.attr("data-xpos", xPos, true, false) + ' class="gameCell is-empty"></div>');
                                }
                            }
                        }).call(this);
                        buf.push("</div>");
                    }
                }
            }).call(this);
            buf.push('</div><table class="table table-bordered pull-right"><thead><tr><th' + jade.cls([ "sign-" + player0.mark + "" ], [ true ]) + "></th><th>" + jade.escape(null == (jade_interp = player0.name) ? "" : jade_interp) + "</th><th>Draws</th><th>" + jade.escape(null == (jade_interp = player1.name) ? "" : jade_interp) + "</th><th" + jade.cls([ "sign-" + player1.mark + "" ], [ true ]) + '></th></tr></thead><tbody><tr><td data-hook="score-player0" colspan="2">' + jade.escape(null == (jade_interp = player0.score) ? "" : jade_interp) + '</td><td data-hook="draw-count">' + jade.escape(null == (jade_interp = drawCount) ? "" : jade_interp) + '</td><td data-hook="score-player1" colspan="2">' + jade.escape(null == (jade_interp = player1.score) ? "" : jade_interp) + '</td></tr></tbody></table></div><p class="text-center"><button id="newGame" class="btn btn-primary">New Game</button></p></section>');
        }).call(this, "drawCount" in locals_for_with ? locals_for_with.drawCount : typeof drawCount !== "undefined" ? drawCount : undefined, "gameField" in locals_for_with ? locals_for_with.gameField : typeof gameField !== "undefined" ? gameField : undefined, "player0" in locals_for_with ? locals_for_with.player0 : typeof player0 !== "undefined" ? player0 : undefined, "player1" in locals_for_with ? locals_for_with.player1 : typeof player1 !== "undefined" ? player1 : undefined, "undefined" in locals_for_with ? locals_for_with.undefined : typeof undefined !== "undefined" ? undefined : undefined);
        return buf.join("");
    };

    // pages/start.jade compiled template
    templatizer["pages"]["start"] = function tmpl_pages_start() {
        return '<section class="page-start"><p>Hello to Tic Tac Toe</p><p>Please enter your names bellow to get the party started :)</p><form data-hook="names-form"><fieldset data-hook="field-container"></fieldset><button type="submit" class="btn btn-primary">Let\'s Go!</button></form></section>';
    };

    return templatizer;
}));
