/******************************

脚本功能：WPS 解锁超级会员 Pro
应用版本：11.37.7
应用下载：http://t.cn/A6ZD2hl3
脚本作者：Hausd0rff
更新时间：2023-06-04
脚本发布：https://t.me/yqc_123
使用声明：‼️脚本仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
# > WPS 解锁超级会员 Pro
^https?:\/\/(account|drive|vas|userinfo.docer)\.wps\.cn\/(.*api\/(v3\/(mine\/vips|spaces)|users\/\d+\/overview|v1\/list_purchase_info)|user\/v1\/vip_dl_times) url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSuperVIPuserCrack.js
^https?:\/\/(mobile|client|vas|download)(\.docer)?\.wps.cn\/(android\/mb\/buy_info|api\/v1\/mobile\/mb\/detail|query\/api\/v1\/list_privilege_info|download\/adapter\/v1\/mb) url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSuperVIPowerCrack.js
[mitm] 
hostname = *.wps.cn

*******************************/

var __encode ='t.me/yqc_123',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxfea05=["\x62\x6F\x64\x79","\x75\x72\x6C","\x70\x61\x72\x73\x65","\x2F\x6D\x69\x6E\x65\x2F\x76\x69\x70\x73","\x69\x6E\x64\x65\x78\x4F\x66","\x76\x69\x70\x73","\u8D85\u7EA7\u4F1A\u5458","\x57\x50\x53\u4F1A\u5458","\u7A3B\u58F3\u4F1A\u5458","\x2F\x73\x70\x61\x63\x65\x73","\x74\x6F\x74\x61\x6C","\x75\x73\x65\x64","\x2F\x6F\x76\x65\x72\x76\x69\x65\x77","\x70\x72\x69\x76\x69\x6C\x65\x67\x65","\x64\x61\x74\x61\x5F\x72\x65\x63\x6F\x76\x65\x72","\x6F\x63\x72","\x70\x64\x66\x32\x64\x6F\x63","\x70\x64\x66\x5F\x6D\x65\x72\x67\x65","\x70\x64\x66\x5F\x73\x69\x67\x6E","\x70\x64\x66\x5F\x73\x70\x6C\x69\x74","\x73\x70\x65\x65\x63\x68\x5F\x72\x65\x63\x6F\x72\x64","\x76\x69\x70","\x2F\x6C\x69\x73\x74\x5F\x70\x75\x72\x63\x68\x61\x73\x65\x5F\x69\x6E\x66\x6F","\x6D\x65\x72\x63\x68\x61\x6E\x64\x69\x73\x65\x73","\x64\x61\x74\x61","\x31\x32","\x32\x30","\x34\x30","\x76\x69\x70\x5F\x70\x72\x6F\x5F\x70\x6C\x75\x73","\x57\x50\x53\u8D85\u7EA7\u4F1A\u5458\x50\x72\x6F\u5957\u9910","\x2F\x76\x69\x70\x5F\x64\x6C\x5F\x74\x69\x6D\x65\x73","\x72\x65\x6D\x61\x69\x6E","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var body=$response[__Oxfea05[0x0]];var urlq=$request[__Oxfea05[0x1]];var objc=JSON[__Oxfea05[0x2]](body);if(urlq[__Oxfea05[0x4]](__Oxfea05[0x3])!=  -1){objc[__Oxfea05[0x5]]= [{"\x65\x6E\x61\x62\x6C\x65\x64":null,"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x6D\x65\x6D\x62\x65\x72\x69\x64":40,"\x68\x61\x73\x5F\x61\x64":0,"\x6E\x61\x6D\x65":__Oxfea05[0x6]},{"\x65\x6E\x61\x62\x6C\x65\x64":null,"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x6D\x65\x6D\x62\x65\x72\x69\x64":20,"\x68\x61\x73\x5F\x61\x64":0,"\x6E\x61\x6D\x65":__Oxfea05[0x7]},{"\x65\x6E\x61\x62\x6C\x65\x64":null,"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x6D\x65\x6D\x62\x65\x72\x69\x64":12,"\x68\x61\x73\x5F\x61\x64":0,"\x6E\x61\x6D\x65":__Oxfea05[0x8]}]};if(urlq[__Oxfea05[0x4]](__Oxfea05[0x9])!=  -1){objc[__Oxfea05[0xa]]= 1100585369600;objc[__Oxfea05[0xb]]= 176160768};if(urlq[__Oxfea05[0x4]](__Oxfea05[0xc])!=  -1){objc[__Oxfea05[0xd]]= [{"\x74\x69\x6D\x65\x73":541826,"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x73\x70\x69\x64":__Oxfea05[0xe]},{"\x74\x69\x6D\x65\x73":541826,"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x73\x70\x69\x64":__Oxfea05[0xf]},{"\x74\x69\x6D\x65\x73":541826,"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x73\x70\x69\x64":__Oxfea05[0x10]},{"\x74\x69\x6D\x65\x73":541826,"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x73\x70\x69\x64":__Oxfea05[0x11]},{"\x74\x69\x6D\x65\x73":541826,"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x73\x70\x69\x64":__Oxfea05[0x12]},{"\x74\x69\x6D\x65\x73":541826,"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x73\x70\x69\x64":__Oxfea05[0x13]},{"\x74\x69\x6D\x65\x73":541826,"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x73\x70\x69\x64":__Oxfea05[0x14]}];objc[__Oxfea05[0x15]]= {"\x6D\x65\x6D\x62\x65\x72\x69\x64":40,"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x6E\x61\x6D\x65":__Oxfea05[0x6],"\x68\x61\x73\x5F\x61\x64":0,"\x65\x6E\x61\x62\x6C\x65\x64":[{"\x6E\x61\x6D\x65":__Oxfea05[0x6],"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x6D\x65\x6D\x62\x65\x72\x69\x64":40},{"\x6E\x61\x6D\x65":__Oxfea05[0x7],"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x6D\x65\x6D\x62\x65\x72\x69\x64":20},{"\x6E\x61\x6D\x65":__Oxfea05[0x8],"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x6D\x65\x6D\x62\x65\x72\x69\x64":12}]}};if(urlq[__Oxfea05[0x4]](__Oxfea05[0x16])!=  -1){objc[__Oxfea05[0x18]][__Oxfea05[0x17]]= [{"\x73\x6B\x75\x5F\x6B\x65\x79":__Oxfea05[0x19],"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x65\x66\x66\x65\x63\x74\x5F\x74\x69\x6D\x65":1667308160,"\x6E\x61\x6D\x65":__Oxfea05[0x8],"\x74\x79\x70\x65":__Oxfea05[0x15]},{"\x73\x6B\x75\x5F\x6B\x65\x79":__Oxfea05[0x1a],"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x65\x66\x66\x65\x63\x74\x5F\x74\x69\x6D\x65":1667308160,"\x6E\x61\x6D\x65":__Oxfea05[0x7],"\x74\x79\x70\x65":__Oxfea05[0x15]},{"\x73\x6B\x75\x5F\x6B\x65\x79":__Oxfea05[0x1b],"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x65\x66\x66\x65\x63\x74\x5F\x74\x69\x6D\x65":1667308160,"\x6E\x61\x6D\x65":__Oxfea05[0x6],"\x74\x79\x70\x65":__Oxfea05[0x15]},{"\x73\x6B\x75\x5F\x6B\x65\x79":__Oxfea05[0x1c],"\x65\x78\x70\x69\x72\x65\x5F\x74\x69\x6D\x65":32495443200,"\x65\x66\x66\x65\x63\x74\x5F\x74\x69\x6D\x65":1685781180,"\x6E\x61\x6D\x65":__Oxfea05[0x1d],"\x74\x79\x70\x65":__Oxfea05[0x15]}]};if(urlq[__Oxfea05[0x4]](__Oxfea05[0x1e])!=  -1){objc[__Oxfea05[0x18]][__Oxfea05[0x1f]]= 300};$done({body:JSON[__Oxfea05[0x20]](objc)});;;(function(_0x34bax4,_0x34bax5,_0x34bax6,_0x34bax7,_0x34bax8,_0x34bax9){_0x34bax9= __Oxfea05[0x21];_0x34bax7= function(_0x34baxa){if( typeof alert!== _0x34bax9){alert(_0x34baxa)};if( typeof console!== _0x34bax9){console[__Oxfea05[0x22]](_0x34baxa)}};_0x34bax6= function(_0x34baxb,_0x34bax4){return _0x34baxb+ _0x34bax4};_0x34bax8= _0x34bax6(__Oxfea05[0x23],_0x34bax6(_0x34bax6(__Oxfea05[0x24],__Oxfea05[0x25]),__Oxfea05[0x26]));try{_0x34bax4= __encode;if(!( typeof _0x34bax4!== _0x34bax9&& _0x34bax4=== _0x34bax6(__Oxfea05[0x27],__Oxfea05[0x28]))){_0x34bax7(_0x34bax8)}}catch(e){_0x34bax7(_0x34bax8)}})({})