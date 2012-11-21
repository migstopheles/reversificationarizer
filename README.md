‮‮reversificationarizer
=====================

‮The Incredible Reversificationarizer!

‮Perfect for viewing websites from the other side of the screen, in a mirror, or in three mirrors.

‮Bookmarklet
--------------------

‮To add The Incredible Reversificationarizer to any site, just add this link to your bookmarks!

javascript:(function(){var b=(function(){var c=document.createElement("span");c.innerHTML="&#8238;";return c.textContent||c.innerText})();var a=function(e){var c=e.childNodes,d=c.length;while(d--){if(c[d].nodeType===3&&/\w/g.test(c[d].nodeValue)){c[d].nodeValue=b+c[d].nodeValue}if(c[d].childNodes.length>0){a(c[d])}}};a(document.body)})();