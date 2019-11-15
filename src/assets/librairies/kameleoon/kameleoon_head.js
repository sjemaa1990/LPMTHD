 var kameleoonIframeURL = "https://medias.lapostemobile.fr/librairies/kameleoon/kameleoon-iframe.html";
    var kameleoonIframeOrigin = "https://medias.lapostemobile.fr";
    var kameleoonStartLoadTime = new Date().getTime();
    var kameleoonLoadingTimeout = 1000;
    var kameleoonLightIframe = false;
    var iframeNode, scriptNode = document.createElement("script");

    scriptNode.type = "text/javascript";
    scriptNode.async = true;
    scriptNode.src = "https://80h0a7bv7h.kameleoon.eu/kameleoon.js";

    if (location.href.indexOf(kameleoonIframeOrigin) == -1)
    {
        kameleoonLightIframe = true;
        var kameleoonProcessMessageEvent = function(event)
        {
            if (kameleoonIframeOrigin == event.origin)
            {
                window.removeEventListener("message", kameleoonProcessMessageEvent);
                window.kameleoonExternalIFrameLoaded = true;
                if (window.Kameleoon)
                {
                    eval(event.data);
                    Kameleoon.Analyst.load();
                }
                else
                {
                    window.kameleoonExternalIFrameLoadedData = event.data;
                }
            }
        };

        if (window.addEventListener)
        {
            window.addEventListener("message", kameleoonProcessMessageEvent, false);
        }

        iframeNode = document.createElement("iframe");
        iframeNode.src = kameleoonIframeURL;
        iframeNode.id = "kameleoonExternalIframe";
        iframeNode.style = "float: left !important; opacity: 0.0 !important; width: 0px !important; height: 0px !important;";
    }

    if (! document.getElementById("kameleoonLoadingStyleSheet") && ! window.kameleoonDisplayPageTimeOut)
    {
        var kameleoonS = document.getElementsByTagName("script")[0];
        var kameleoonCc = "*{visibility:hidden!important;background-image:none!important;}";
        var kameleoonStn = document.createElement("style");
        kameleoonStn.type = "text/css";
        kameleoonStn.id = "kameleoonLoadingStyleSheet";
        if (kameleoonStn.styleSheet)
        {
            kameleoonStn.styleSheet.cssText = kameleoonCc;
        }
        else
        {
            kameleoonStn.appendChild(document.createTextNode(kameleoonCc));
        }
        kameleoonS.parentNode.insertBefore(kameleoonStn, kameleoonS);
        window.kameleoonDisplayPage = function()
        {
            if (kameleoonStn.parentNode)
            {
                kameleoonStn.parentNode.removeChild(kameleoonStn);
            }
        };
        window.setTimeout(function(){}, 25);
        window.kameleoonDisplayPageTimeOut = window.setTimeout(window.kameleoonDisplayPage, kameleoonLoadingTimeout);
    }

    if (kameleoonLightIframe) {
        document.head.appendChild(iframeNode);
    }
    document.head.appendChild(scriptNode);