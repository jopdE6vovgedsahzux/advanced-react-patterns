self.webpackChunk(["mode/soy"],{39:function(t,e,a){!function(t){"use strict";var e={noEndTag:!0,soyState:"param-def"},a={alias:{noEndTag:!0},delpackage:{noEndTag:!0},namespace:{noEndTag:!0,soyState:"namespace-def"},"@param":e,"@param?":e,"@inject":e,"@inject?":e,"@state":e,"@state?":e,template:{soyState:"templ-def",variableScope:!0},literal:{},msg:{},fallbackmsg:{noEndTag:!0,reduceIndent:!0},select:{},plural:{},let:{soyState:"var-def"},if:{},elseif:{noEndTag:!0,reduceIndent:!0},else:{noEndTag:!0,reduceIndent:!0},switch:{},case:{noEndTag:!0,reduceIndent:!0},default:{noEndTag:!0,reduceIndent:!0},foreach:{variableScope:!0,soyState:"var-def"},ifempty:{noEndTag:!0,reduceIndent:!0},for:{variableScope:!0,soyState:"var-def"},call:{soyState:"templ-ref"},param:{soyState:"param-ref"},print:{noEndTag:!0},deltemplate:{soyState:"templ-def",variableScope:!0},delcall:{soyState:"templ-ref"},log:{},element:{variableScope:!0}},n=Object.keys(a).filter((function(t){return!a[t].noEndTag||a[t].reduceIndent}));t.defineMode("soy",(function(e){var r=t.getMode(e,"text/plain"),s={html:t.getMode(e,{name:"text/html",multilineTagIndentFactor:2,multilineTagIndentPastTag:!1}),attributes:r,text:r,uri:r,trusted_resource_uri:r,css:t.getMode(e,"text/css"),js:t.getMode(e,{name:"text/javascript",statementIndent:2*e.indentUnit})};function o(t){return t[t.length-1]}function l(t,e,a){if(t.sol()){for(var n=0;n<e.indent&&t.eat(/\s/);n++);if(n)return null}var r=t.string,s=a.exec(r.substr(t.pos));s&&(t.string=r.substr(0,t.pos+s.index));var l=t.hideFirstChars(e.indent,(function(){var a=o(e.localStates);return a.mode.token(t,a.state)}));return t.string=r,l}function i(t,e){return{element:e,next:t}}function c(t){t.context&&(t.context.scope&&(t.variables=t.context.scope),t.context=t.context.previousContext)}function d(t,e,a){this.previousContext=t,this.tag=e,this.kind=null,this.scope=a}return{startState:function(){return{soyState:[],templates:null,variables:i(null,"ij"),scopes:null,indent:0,quoteKind:null,context:null,localStates:[{mode:s.html,state:t.startState(s.html)}]}},copyState:function(e){return{tag:e.tag,soyState:e.soyState.concat([]),templates:e.templates,variables:e.variables,context:e.context,indent:e.indent,quoteKind:e.quoteKind,localStates:e.localStates.map((function(e){return{mode:e.mode,state:t.copyState(e.mode,e.state)}}))}},token:function(r,u){var m,p,f;switch(o(u.soyState)){case"comment":if(r.match(/^.*?\*\//)?u.soyState.pop():r.skipToEnd(),!u.context||!u.context.scope)for(var g=/@param\??\s+(\S+)/g,S=r.current();y=g.exec(S);)u.variables=i(u.variables,y[1]);return"comment";case"string":var y;return(y=r.match(/^.*?(["']|\\[\s\S])/))?y[1]==u.quoteKind&&(u.quoteKind=null,u.soyState.pop()):r.skipToEnd(),"string"}if(!u.soyState.length||"literal"!=o(u.soyState)){if(r.match(/^\/\*/))return u.soyState.push("comment"),"comment";if(r.match(r.sol()?/^\s*\/\/.*/:/^\s+\/\/.*/))return"comment"}switch(o(u.soyState)){case"templ-def":return(y=r.match(/^\.?([\w]+(?!\.[\w]+)*)/))?(u.templates=i(u.templates,y[1]),u.soyState.pop(),"def"):(r.next(),null);case"templ-ref":return(y=r.match(/(\.?[a-zA-Z_][a-zA-Z_0-9]+)+/))?(u.soyState.pop(),"."==y[0][0]?"variable-2":"variable"):(r.next(),null);case"namespace-def":return(y=r.match(/^\.?([\w\.]+)/))?(u.soyState.pop(),"variable"):(r.next(),null);case"param-def":return(y=r.match(/^\w+/))?(u.variables=i(u.variables,y[0]),u.soyState.pop(),u.soyState.push("param-type"),"def"):(r.next(),null);case"param-ref":return(y=r.match(/^\w+/))?(u.soyState.pop(),"property"):(r.next(),null);case"param-type":return"}"==r.peek()?(u.soyState.pop(),null):r.eatWhile(/^([\w]+|[?])/)?"type":(r.next(),null);case"var-def":return(y=r.match(/^\$([\w]+)/))?(u.variables=i(u.variables,y[1]),u.soyState.pop(),"def"):(r.next(),null);case"tag":var h=(T="/"==u.tag[0])?u.tag.substring(1):u.tag,v=a[h];if(r.match(/^\/?}/)){var b="/}"==r.current();return b&&!T&&c(u),"/template"==u.tag||"/deltemplate"==u.tag?(u.variables=i(null,"ij"),u.indent=0):u.indent-=e.indentUnit*(b||-1==n.indexOf(u.tag)?2:1),u.soyState.pop(),"keyword"}if(r.match(/^([\w?]+)(?==)/)){if(u.context&&u.context.tag==h&&"kind"==r.current()&&(y=r.match(/^="([^"]+)/,!1))){var x=y[1];u.context.kind=x;var w=s[x]||s.html;(C=o(u.localStates)).mode.indent&&(u.indent+=C.mode.indent(C.state,"","")),u.localStates.push({mode:w,state:t.startState(w)})}return"attribute"}return(y=r.match(/([\w]+)(?=\()/))?"variable callee":(y=r.match(/^["']/))?(u.soyState.push("string"),u.quoteKind=y,"string"):r.match(/(null|true|false)(?!\w)/)||r.match(/0x([0-9a-fA-F]{2,})/)||r.match(/-?([0-9]*[.])?[0-9]+(e[0-9]*)?/)?"atom":r.match(/(\||[+\-*\/%]|[=!]=|\?:|[<>]=?)/)?"operator":(y=r.match(/^\$([\w]+)/))?(m=u.variables,p=y[1],function(t,e){for(;t;){if(t.element===e)return!0;t=t.next}return!1}(m,p)?"variable-2":f?"variable":"variable-2 error"):(y=r.match(/^\w+/))?/^(?:as|and|or|not|in)$/.test(y[0])?"keyword":null:(r.next(),null);case"literal":return r.match(/^(?=\{\/literal})/)?(u.indent-=e.indentUnit,u.soyState.pop(),this.token(r,u)):l(r,u,/\{\/literal}/)}if(r.match(/^\{literal}/))return u.indent+=e.indentUnit,u.soyState.push("literal"),u.context=new d(u.context,"literal",u.variables),"keyword";if(y=r.match(/^\{([/@\\]?\w+\??)(?=$|[\s}]|\/[/*])/)){var k=u.tag;u.tag=y[1];var T="/"==u.tag[0],E=!!a[u.tag];h=T?u.tag.substring(1):u.tag,v=a[h],"/switch"!=u.tag&&(u.indent+=((T||v&&v.reduceIndent)&&"switch"!=k?1:2)*e.indentUnit),u.soyState.push("tag");var I=!1;if(v)if(T||v.soyState&&u.soyState.push(v.soyState),v.noEndTag||!E&&T){if(T)if(u.context&&u.context.tag==h){if(u.context){var C;u.context.kind&&(u.localStates.pop(),(C=o(u.localStates)).mode.indent&&(u.indent-=C.mode.indent(C.state,"",""))),c(u)}}else I=!0}else u.context=new d(u.context,u.tag,v.variableScope?u.variables:null);else T&&(I=!0);return(I?"error ":"")+"keyword"}return r.eat("{")?(u.tag="print",u.indent+=2*e.indentUnit,u.soyState.push("tag"),"keyword"):l(r,u,/\{|\s+\/\/|\/\*/)},indent:function(a,n,r){var s=a.indent,l=o(a.soyState);if("comment"==l)return t.Pass;if("literal"==l)/^\{\/literal}/.test(n)&&(s-=e.indentUnit);else{if(/^\s*\{\/(template|deltemplate)\b/.test(n))return 0;/^\{(\/|(fallbackmsg|elseif|else|ifempty)\b)/.test(n)&&(s-=e.indentUnit),"switch"!=a.tag&&/^\{(case|default)\b/.test(n)&&(s-=e.indentUnit),/^\{\/switch\b/.test(n)&&(s-=e.indentUnit)}var i=o(a.localStates);return s&&i.mode.indent&&(s+=i.mode.indent(i.state,n,r)),s},innerMode:function(t){return t.soyState.length&&"literal"!=o(t.soyState)?null:o(t.localStates)},electricInput:/^\s*\{(\/|\/template|\/deltemplate|\/switch|fallbackmsg|elseif|else|case|default|ifempty|\/literal\})$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/",blockCommentContinue:" * ",useInnerComments:!1,fold:"indent"}}),"htmlmixed"),t.registerHelper("wordChars","soy",/[\w$]/),t.registerHelper("hintWords","soy",Object.keys(a).concat(["css","debugger"])),t.defineMIME("text/x-soy","soy")}(a(0),a(2))}});
//# sourceMappingURL=soy.js.map