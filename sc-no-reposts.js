// ==UserScript==
// @name SoundCloud hide reposts
// @namespace http://abs.ezw.me
// @version 1.0
// @author ABS
// @description Only new songs by followed artists in your stream.
// @match *://soundcloud.com/stream
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==
(
    function(){
        function norepost(){
            $(".soundList__item:has('.sc-ministats-reposts')").remove();
        }
        window.addEventListener("DOMNodeInserted",norepost, false);
    }
)();