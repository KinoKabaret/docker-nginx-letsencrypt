webpackJsonp([5],{30:function(r,e,t){"use strict";function o(r){t(56)}Object.defineProperty(e,"__esModule",{value:!0});var n=t(41),a=t(58),i=t(4),c=o,s=i(n.a,a.a,!1,c,null,null);e.default=s.exports},41:function(r,e,t){"use strict";var o=t(1);e.a={components:{QBtn:o.c,QIcon:o.g},data:function(){return{canGoBack:window.history.length>1}},methods:{goBack:function(){window.history.go(-1)}}}},56:function(r,e,t){var o=t(57);"string"==typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);t(26)("0426732a",o,!0,{})},57:function(r,e,t){e=r.exports=t(25)(!1),e.push([r.i,".error-page .error-code{height:50vh;width:100%;opacity:.5;padding-top:15vh;color:hsla(0,0%,100%,.2);overflow:hidden}@media (orientation:landscape){.error-page .error-code{font-size:30vw}}@media (orientation:portrait){.error-page .error-code{font-size:30vh}}.error-page .error-card{border-radius:2px;margin-top:-200px;width:80vw;max-width:600px;padding:25px}.error-page .error-card>i{font-size:5rem}",""])},58:function(r,e,t){"use strict";var o=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"error-page window-height bg-light column items-center no-wrap"},[t("div",{staticClass:"error-code bg-primary flex items-center content-center justify-center"},[r._v("\n    404\n  ")]),r._v(" "),t("div",[t("div",{staticClass:"error-card shadow-4 bg-white column items-center justify-center no-wrap"},[t("q-icon",{attrs:{name:"error_outline",color:"grey-5"}}),r._v(" "),t("p",{staticClass:"caption text-center"},[r._v("Oops. Nothing here...")]),r._v(" "),t("p",{staticClass:"text-center group"},[r.canGoBack?t("q-btn",{attrs:{color:"primary",push:"",icon:"keyboard_arrow_left"},on:{click:r.goBack}},[r._v("\n            Go back\n          ")]):r._e(),r._v(" "),t("q-btn",{attrs:{color:"primary",push:"","icon-right":"fa-tv"},on:{click:function(e){r.$router.replace("/Watch")}}},[r._v("\n            Go Kino\n          ")])],1)],1)])])},n=[],a={render:o,staticRenderFns:n};e.a=a}});