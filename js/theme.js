const _0x329b64=_0x5202;(function(_0x401138,_0x5a9f7c){const _0x2a88ea=_0x5202,_0x230c56=_0x401138();while(!![]){try{const _0x1d7501=parseInt(_0x2a88ea(0x1f1))/0x1*(parseInt(_0x2a88ea(0x205))/0x2)+-parseInt(_0x2a88ea(0x1f9))/0x3+parseInt(_0x2a88ea(0x1fa))/0x4+parseInt(_0x2a88ea(0x202))/0x5+parseInt(_0x2a88ea(0x201))/0x6*(parseInt(_0x2a88ea(0x1f5))/0x7)+-parseInt(_0x2a88ea(0x1ed))/0x8+-parseInt(_0x2a88ea(0x1fd))/0x9*(-parseInt(_0x2a88ea(0x203))/0xa);if(_0x1d7501===_0x5a9f7c)break;else _0x230c56['push'](_0x230c56['shift']());}catch(_0x384007){_0x230c56['push'](_0x230c56['shift']());}}}(_0x1c7a,0x196d3));function _0x5202(_0x403c19,_0xca8de7){const _0x1c7a8e=_0x1c7a();return _0x5202=function(_0x5202e2,_0x384db6){_0x5202e2=_0x5202e2-0x1e6;let _0x4477bb=_0x1c7a8e[_0x5202e2];return _0x4477bb;},_0x5202(_0x403c19,_0xca8de7);}const themeToggle=document[_0x329b64(0x1e6)](_0x329b64(0x1e7)),prefersDarkScheme=window[_0x329b64(0x1f4)](_0x329b64(0x200));function toggleTheme(_0x1b49c7){const _0x4c9da6=_0x329b64;_0x1b49c7[_0x4c9da6(0x206)]['checked']?(document['documentElement'][_0x4c9da6(0x1ec)](_0x4c9da6(0x1e8),_0x4c9da6(0x1fb)),localStorage[_0x4c9da6(0x207)](_0x4c9da6(0x1fc),_0x4c9da6(0x1fb))):(document[_0x4c9da6(0x1ea)]['setAttribute'](_0x4c9da6(0x1e8),_0x4c9da6(0x1eb)),localStorage[_0x4c9da6(0x207)](_0x4c9da6(0x1fc),'light'));}themeToggle['addEventListener']('change',toggleTheme);const currentTheme=localStorage[_0x329b64(0x1ef)](_0x329b64(0x1fc))||(prefersDarkScheme['matches']?_0x329b64(0x1fb):'light');function _0x1c7a(){const _0x4de7cd=['1348952ctjeUI','addListener','getItem','updateNotificationShown','5927XORSbC','click','addEventListener','matchMedia','35mDgcsz','add','classList','show','585330KMIsFU','534368WOSgYe','dark','theme','697887joVMAI','matches','close-notification','(prefers-color-scheme:\x20dark)','76332KGUnIa','343320NvYYqp','10rXRzBr','checked','42xHRnwz','target','setItem','getElementById','theme-toggle','data-theme','true','documentElement','light','setAttribute'];_0x1c7a=function(){return _0x4de7cd;};return _0x1c7a();}currentTheme===_0x329b64(0x1fb)?(themeToggle[_0x329b64(0x204)]=!![],document[_0x329b64(0x1ea)][_0x329b64(0x1ec)](_0x329b64(0x1e8),'dark')):(themeToggle[_0x329b64(0x204)]=![],document['documentElement'][_0x329b64(0x1ec)](_0x329b64(0x1e8),_0x329b64(0x1eb)));prefersDarkScheme[_0x329b64(0x1ee)](_0x1fe30f=>{const _0x1791fb=_0x329b64;!localStorage[_0x1791fb(0x1ef)](_0x1791fb(0x1fc))&&(themeToggle[_0x1791fb(0x204)]=_0x1fe30f[_0x1791fb(0x1fe)],document['documentElement']['setAttribute'](_0x1791fb(0x1e8),_0x1fe30f[_0x1791fb(0x1fe)]?'dark':_0x1791fb(0x1eb)));});function showUpdateNotification(){const _0x4aacce=_0x329b64,_0x39e751=document[_0x4aacce(0x1e6)]('update-notification'),_0x2ca6e4=document[_0x4aacce(0x1e6)](_0x4aacce(0x1ff));if(localStorage[_0x4aacce(0x1ef)](_0x4aacce(0x1f0)))return;_0x39e751['classList'][_0x4aacce(0x1f6)](_0x4aacce(0x1f8)),_0x2ca6e4['addEventListener'](_0x4aacce(0x1f2),()=>{const _0x32f104=_0x4aacce;_0x39e751[_0x32f104(0x1f7)]['remove'](_0x32f104(0x1f8)),localStorage['setItem'](_0x32f104(0x1f0),_0x32f104(0x1e9));});}document[_0x329b64(0x1f3)]('DOMContentLoaded',()=>{showUpdateNotification();});