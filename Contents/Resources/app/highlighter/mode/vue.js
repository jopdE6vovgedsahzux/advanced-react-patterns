self.webpackChunk(["mode/vue"],{15:function(e,t,s){!function(e){"use strict";var t,a;t=s(0),s(57),s(4),s(3),s(6),s(5),s(58),s(7),s(8),s(59),a={script:[["lang",/coffee(script)?/,"coffeescript"],["type",/^(?:text|application)\/(?:x-)?coffee(?:script)?$/,"coffeescript"],["lang",/^babel$/,"javascript"],["type",/^text\/babel$/,"javascript"],["type",/^text\/ecmascript-\d+$/,"javascript"]],style:[["lang",/^stylus$/i,"stylus"],["lang",/^sass$/i,"sass"],["lang",/^less$/i,"text/x-less"],["lang",/^scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?styl(us)?$/i,"stylus"],["type",/^text\/sass/i,"sass"],["type",/^(text\/)?(x-)?scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?less$/i,"text/x-less"]],template:[["lang",/^vue-template$/i,"vue"],["lang",/^pug$/i,"pug"],["lang",/^handlebars$/i,"handlebars"],["type",/^(text\/)?(x-)?pug$/i,"pug"],["type",/^text\/x-handlebars-template$/i,"handlebars"],[null,null,"vue-template"]]},t.defineMode("vue-template",(function(e,s){return t.overlayMode(t.getMode(e,s.backdrop||"text/html"),{token:function(e){if(e.match(/^\{\{.*?\}\}/))return"meta mustache";for(;e.next()&&!e.match("{{",!1););return null}})})),t.defineMode("vue",(function(e){return t.getMode(e,{name:"htmlmixed",tags:a})}),"htmlmixed","xml","javascript","coffeescript","css","sass","stylus","pug","handlebars"),t.defineMIME("script/x-vue","vue"),t.defineMIME("text/x-vue","vue")}()}});
//# sourceMappingURL=vue.js.map