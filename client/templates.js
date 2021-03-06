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
        return '<body><div class="container"><h2 class="page-title relative clearfix"><div class="inner absolute"><span class="title-text">Tic Tac Toe</span></div></h2><main data-hook="page-container"></main></div></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>';
    };

    // includes/formInput.jade compiled template
    templatizer["includes"]["formInput"] = function tmpl_includes_formInput() {
        return '<div class="form-group"><div data-hook="message-container"><div data-hook="message-text" class="alert alert-danger"></div></div><input class="form-control"/></div>';
    };

    // includes/player.jade compiled template
    templatizer["includes"]["player"] = function tmpl_includes_player() {
        return '<li class="clearfix"><span data-hook="name" class="name pull-left"></span><span data-hook="score" class="score pull-right"></span></li>';
    };

    // pages/leaderboard.jade compiled template
    templatizer["pages"]["leaderboard"] = function tmpl_pages_leaderboard() {
        return '<h1>LeaderBoard<ul class="players-list"></ul></h1>';
    };

    // pages/play.jade compiled template
    templatizer["pages"]["play"] = function tmpl_pages_play(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(drawCount, gameField, moveCount, player0, player1, undefined) {
            buf.push('<section class="page-play"><p><a href="/" class="btn btn-primary">< Back to Start</a></p><span data-hook="message" class="alert"></span><div class="hold clearfix col-md-6"><div id="game-field" class="game-field pull-left">');
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
                                    buf.push("<div" + jade.attr("data-ypos", yPos, true, false) + jade.attr("data-xpos", xPos, true, false) + ' data-hook="cell" class="game-cell is-empty"></div>');
                                }
                            } else {
                                var $l = 0;
                                for (var xPos in $obj) {
                                    $l++;
                                    var field = $obj[xPos];
                                    buf.push("<div" + jade.attr("data-ypos", yPos, true, false) + jade.attr("data-xpos", xPos, true, false) + ' data-hook="cell" class="game-cell is-empty"></div>');
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
                                    buf.push("<div" + jade.attr("data-ypos", yPos, true, false) + jade.attr("data-xpos", xPos, true, false) + ' data-hook="cell" class="game-cell is-empty"></div>');
                                }
                            } else {
                                var $l = 0;
                                for (var xPos in $obj) {
                                    $l++;
                                    var field = $obj[xPos];
                                    buf.push("<div" + jade.attr("data-ypos", yPos, true, false) + jade.attr("data-xpos", xPos, true, false) + ' data-hook="cell" class="game-cell is-empty"></div>');
                                }
                            }
                        }).call(this);
                        buf.push("</div>");
                    }
                }
            }).call(this);
            buf.push('</div><div class="stats pull-left"><ul class="player-info"><li class="relative"><span' + jade.cls([ "absolute mk sign-" + player0.mark + "" ], [ true ]) + '></span><span class="player-name">' + jade.escape(null == (jade_interp = player0.name) ? "" : jade_interp) + '</span></li><li class="relative"><span' + jade.cls([ "absolute mk sign-" + player1.mark + "" ], [ true ]) + '></span><span class="player-name">' + jade.escape(null == (jade_interp = player1.name) ? "" : jade_interp) + '</span></li></ul><ul class="score"><li><span class="inline-block">' + jade.escape((jade_interp = player0.name) == null ? "" : jade_interp) + '\'s wins:</span><span data-hook="score-player0" class="inline-block">' + jade.escape(null == (jade_interp = player0.score) ? "" : jade_interp) + '</span></li><li><span class="inline-block">Draws</span><span data-hook="draw-count" class="inline-block">' + jade.escape(null == (jade_interp = drawCount) ? "" : jade_interp) + '</span></li><li><span class="inline-block">' + jade.escape((jade_interp = player1.name) == null ? "" : jade_interp) + '\'s wins:</span><span data-hook="score-player1" class="inline-block">' + jade.escape(null == (jade_interp = player1.score) ? "" : jade_interp) + '</span></li><li><span class="inline-block">Moves:</span><span data-hook="move-count" class="inline-block">' + jade.escape(null == (jade_interp = moveCount) ? "" : jade_interp) + '</span></li></ul><p class="text-center"><button id="newGame" data-hook="new-game" class="btn btn-primary">New Game</button></p></div></div></section>');
        }).call(this, "drawCount" in locals_for_with ? locals_for_with.drawCount : typeof drawCount !== "undefined" ? drawCount : undefined, "gameField" in locals_for_with ? locals_for_with.gameField : typeof gameField !== "undefined" ? gameField : undefined, "moveCount" in locals_for_with ? locals_for_with.moveCount : typeof moveCount !== "undefined" ? moveCount : undefined, "player0" in locals_for_with ? locals_for_with.player0 : typeof player0 !== "undefined" ? player0 : undefined, "player1" in locals_for_with ? locals_for_with.player1 : typeof player1 !== "undefined" ? player1 : undefined, "undefined" in locals_for_with ? locals_for_with.undefined : typeof undefined !== "undefined" ? undefined : undefined);
        return buf.join("");
    };

    // pages/start.jade compiled template
    templatizer["pages"]["start"] = function tmpl_pages_start() {
        return '<section class="page-start"><p class="text-center">Welcome to Tic Tac Toe</p><p class="text-center">Please enter your names bellow to get the party started :)</p><form id="form-names" data-hook="names-form"><fieldset data-hook="field-container"></fieldset><button type="submit" class="btn btn-success big">Let\'s Go!</button></form></section>';
    };

    return templatizer;
}));
