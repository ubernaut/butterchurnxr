(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();{let e=(e,t)=>{Object.defineProperty(Math,e,{configurable:typeof t==`function`,enumerable:typeof t==`function`,writable:typeof t==`function`,value:t})};e(`DEG_PER_RAD`,Math.PI/180),e(`RAD_PER_DEG`,180/Math.PI);let t=new Float32Array(1);e(`scale`,function(e,t,n,r,i){return arguments.length===0||Number.isNaN(e)||Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(r)||Number.isNaN(i)?NaN:e===1/0||e===-1/0?e:(e-t)*(i-r)/(n-t)+r}),e(`fscale`,function(e,n,r,i,a){return t[0]=Math.scale(e,n,r,i,a),t[0]}),e(`clamp`,function(e,t,n){return Math.min(n,Math.max(t,e))}),e(`radians`,function(e){return e*Math.DEG_PER_RAD}),e(`degrees`,function(e){return e*Math.RAD_PER_DEG})}var e=1e-5;window.sqr=function(e){return e*e},window.sqrt=function(e){return Math.sqrt(Math.abs(e))},window.log10=function(e){return Math.log(e)*Math.LOG10E},window.sign=function(e){return e>0?1:e<0?-1:0},window.rand=function(e){var t=Math.floor(e);return t<1?Math.random():Math.random()*t},window.randint=function(e){return Math.floor(rand(e))},window.bnot=function(t){return+(Math.abs(t)<e)};function t(e){return isFinite(e)&&!isNaN(e)}window.pow=function(e,n){var r=e**+n;return t(r)?r:0},window.div=function(e,t){return t===0?0:e/t},window.mod=function(e,t){return t===0?0:Math.floor(e)%Math.floor(t)},window.bitor=function(e,t){return Math.floor(e)|Math.floor(t)},window.bitand=function(e,t){return Math.floor(e)&Math.floor(t)},window.sigmoid=function(t,n){var r=1+Math.exp(-t*n);return Math.abs(r)>e?1/r:0},window.bor=function(t,n){return+(Math.abs(t)>e||Math.abs(n)>e)},window.band=function(t,n){return+(Math.abs(t)>e&&Math.abs(n)>e)},window.equal=function(t,n){return+(Math.abs(t-n)<e)},window.above=function(e,t){return+(e>t)},window.below=function(e,t){return+(e<t)},window.ifcond=function(t,n,r){return Math.abs(t)>e?n:r},window.memcpy=function(e,t,n,r){let i=t,a=n,o=r;return a<0&&(o+=a,i-=a,a=0),i<0&&(o+=i,a-=i,i=0),o>0&&e.copyWithin(i,a,o),t};function n(e,t){let n={destCol:1,srcCol:1,srcLine:1};e.forEach(e=>{e.destCol>t||(n=e)});let r=t-n.destCol;return{column:n.srcCol+r,line:n.srcLine}}var r=function(){var e=function(e,t,n,r){for(n||={},r=e.length;r--;n[e[r]]=t);return n},t=[1,18],n=[1,7],r=[1,19],i=[1,20],a=[1,14],o=[1,15],s=[1,16],c=[1,33],l=[1,31],u=[1,23],d=[1,22],f=[1,24],p=[1,25],m=[1,26],h=[1,27],g=[1,28],v=[1,29],y=[1,30],b=[5,8,15,18,20,28,29,32,33,34,35,36,37,38],x=[5,15,18],S=[5,12,15,17,18,24,25,28,29,30],C=[1,57],w=[5,8,12,15,17,18,24,25,28,29,30],T=[15,18],E=[5,8,15,18,28,29,38],D=[5,8,15,18,28,29,32,33,38],O=[5,8,15,18,28,29,32,33,34,37,38],k=[5,8,15,18,28,29,32,33,34,35,36,37,38],A=[5,8,15,18],j=[5,8,15,18,20,22,28,29,32,33,34,35,36,37,38],M={trace:function(){},yy:{},symbols_:{error:2,SCRIPT:3,expression:4,EOF:5,expressionsOptionalTrailingSemi:6,separator:7,";":8,expressions:9,EXPRESSION_BLOCK:10,IDENTIFIER:11,IDENTIFIER_TOKEN:12,argument:13,arguments:14,",":15,FUNCTION_CALL:16,"(":17,")":18,LOGICAL_EXPRESSION:19,LOGICAL_OPERATOR_TOKEN:20,ASSIGNMENT:21,ASSIGNMENT_OPERATOR_TOKEN:22,number:23,DIGITS_TOKEN:24,".":25,NUMBER_LITERAL:26,UNARY_EXPRESSION:27,"-":28,"+":29,"!":30,BINARY_EXPRESSION:31,"*":32,"/":33,"%":34,"&":35,"|":36,"^":37,COMPARISON_TOKEN:38,$accept:0,$end:1},terminals_:{2:`error`,5:`EOF`,8:`;`,12:`IDENTIFIER_TOKEN`,15:`,`,17:`(`,18:`)`,20:`LOGICAL_OPERATOR_TOKEN`,22:`ASSIGNMENT_OPERATOR_TOKEN`,24:`DIGITS_TOKEN`,25:`.`,28:`-`,29:`+`,30:`!`,32:`*`,33:`/`,34:`%`,35:`&`,36:`|`,37:`^`,38:`COMPARISON_TOKEN`},productions_:[0,[3,2],[3,2],[3,1],[7,1],[7,2],[9,2],[9,3],[6,1],[6,2],[10,1],[11,1],[13,1],[13,1],[14,1],[14,3],[16,3],[16,4],[19,3],[21,3],[21,3],[23,1],[23,2],[23,3],[23,2],[23,1],[26,1],[27,2],[27,2],[27,2],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[31,3],[4,1],[4,1],[4,3],[4,1],[4,1],[4,1],[4,1],[4,1],[4,3]],performAction:function(e,t,n,r,i,a,o){var s=a.length-1;switch(i){case 1:return{type:`SCRIPT`,body:[a[s-1]],loc:this._$};case 2:return{type:`SCRIPT`,body:a[s-1],loc:this._$};case 3:return{type:`SCRIPT`,body:[],loc:this._$};case 6:this.$=[a[s-1]];break;case 7:this.$=a[s-2].concat([a[s-1]]);break;case 8:this.$=a[s];break;case 9:this.$=a[s-1].concat([a[s]]);break;case 10:this.$={type:`EXPRESSION_BLOCK`,body:a[s],loc:this._$};break;case 11:this.$={type:`IDENTIFIER`,value:a[s].toLowerCase(),loc:this._$};break;case 14:this.$=[a[s]];break;case 15:this.$=a[s-2].concat([a[s]]);break;case 16:this.$={type:`CALL_EXPRESSION`,callee:a[s-2],arguments:[],loc:this._$};break;case 17:this.$={type:`CALL_EXPRESSION`,callee:a[s-3],arguments:a[s-1],loc:this._$};break;case 18:this.$={type:`LOGICAL_EXPRESSION`,left:a[s-2],right:a[s],operator:a[s-1],loc:this._$};break;case 19:case 20:this.$={type:`ASSIGNMENT_EXPRESSION`,left:a[s-2],operator:a[s-1],right:a[s],loc:this._$};break;case 21:this.$=Number(a[s]);break;case 22:this.$=Number(a[s-1]);break;case 23:this.$=Number(a[s-2]+a[s-1]+a[s]);break;case 24:this.$=Number(`0`+a[s-1]+a[s]);break;case 25:this.$=0;break;case 26:this.$={type:`NUMBER_LITERAL`,value:a[s],loc:this._$};break;case 27:case 28:case 29:this.$={type:`UNARY_EXPRESSION`,value:a[s],operator:a[s-1],loc:this._$};break;case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:this.$={type:`BINARY_EXPRESSION`,left:a[s-2],right:a[s],operator:a[s-1],loc:this._$};break;case 41:case 47:this.$=a[s-1]}},table:[{3:1,4:2,5:[1,4],6:3,9:13,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{1:[3]},{5:[1,21],7:32,8:c,20:l,28:u,29:d,32:f,33:p,34:m,35:h,36:g,37:v,38:y},{5:[1,34]},{1:[2,3]},e(b,[2,39]),e(b,[2,40]),{4:35,6:37,9:13,10:36,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},e(b,[2,42]),e(b,[2,43]),e(b,[2,44],{22:[1,38]}),e(b,[2,45],{17:[1,40],22:[1,39]}),e(b,[2,46]),e(x,[2,8],{31:5,27:6,26:8,21:9,16:10,11:11,19:12,23:17,4:41,12:t,17:n,24:r,25:i,28:a,29:o,30:s}),{4:42,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:43,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:44,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},e(b,[2,26]),e([5,8,15,17,18,20,22,28,29,32,33,34,35,36,37,38],[2,11]),e(b,[2,21],{25:[1,45]}),e(b,[2,25],{24:[1,46]}),{1:[2,1]},{4:47,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:48,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:49,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:50,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:51,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:52,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:53,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:54,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:55,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:56,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},e(S,[2,6],{8:C}),e(w,[2,4]),{1:[2,2]},{7:32,8:c,18:[1,58],20:l,28:u,29:d,32:f,33:p,34:m,35:h,36:g,37:v,38:y},{18:[1,59]},e(T,[2,10]),{4:60,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:61,11:11,12:t,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},{4:65,6:37,9:13,10:66,11:11,12:t,13:64,14:63,16:10,17:n,18:[1,62],19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},e(x,[2,9],{7:67,8:c,20:l,28:u,29:d,32:f,33:p,34:m,35:h,36:g,37:v,38:y}),e(E,[2,27],{20:l,32:f,33:p,34:m,35:h,36:g,37:v}),e(E,[2,28],{20:l,32:f,33:p,34:m,35:h,36:g,37:v}),e(E,[2,29],{20:l,32:f,33:p,34:m,35:h,36:g,37:v}),e(b,[2,22],{24:[1,68]}),e(b,[2,24]),e(E,[2,30],{20:l,32:f,33:p,34:m,35:h,36:g,37:v}),e(E,[2,31],{20:l,32:f,33:p,34:m,35:h,36:g,37:v}),e(D,[2,32],{20:l,34:m,35:h,36:g,37:v}),e(D,[2,33],{20:l,34:m,35:h,36:g,37:v}),e(O,[2,34],{20:l,35:h,36:g}),e(k,[2,35],{20:l}),e(k,[2,36],{20:l}),e(O,[2,37],{20:l,35:h,36:g}),e(A,[2,38],{20:l,28:u,29:d,32:f,33:p,34:m,35:h,36:g,37:v,38:y}),e(b,[2,18]),e(w,[2,5]),e(b,[2,41]),e(b,[2,47]),e(A,[2,20],{20:l,28:u,29:d,32:f,33:p,34:m,35:h,36:g,37:v,38:y}),e(A,[2,19],{20:l,28:u,29:d,32:f,33:p,34:m,35:h,36:g,37:v,38:y}),e(j,[2,16]),{15:[1,70],18:[1,69]},e(T,[2,14]),e(T,[2,12],{7:32,8:c,20:l,28:u,29:d,32:f,33:p,34:m,35:h,36:g,37:v,38:y}),e(T,[2,13]),e(S,[2,7],{8:C}),e(b,[2,23]),e(j,[2,17]),{4:65,6:37,9:13,10:66,11:11,12:t,13:71,16:10,17:n,19:12,21:9,23:17,24:r,25:i,26:8,27:6,28:a,29:o,30:s,31:5},e(T,[2,15])],defaultActions:{4:[2,3],21:[2,1],34:[2,2]},parseError:function(e,t){if(!t.recoverable){var n=Error(e);throw n.hash=t,n}this.trace(e)},parse:function(e){var t=this,n=[0],r=[null],i=[],a=this.table,o=``,s=0,c=0,l=i.slice.call(arguments,1),u=Object.create(this.lexer),d={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(d.yy[f]=this.yy[f]);u.setInput(e,d.yy),d.yy.lexer=u,d.yy.parser=this,u.yylloc===void 0&&(u.yylloc={});var p=u.yylloc;i.push(p);var m=u.options&&u.options.ranges;typeof d.yy.parseError==`function`?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var h,g,v,y,b,x,S,C,w=function(){var e;return typeof(e=u.lex()||1)!=`number`&&(e=t.symbols_[e]||e),e},T={};;){if(g=n[n.length-1],this.defaultActions[g]?v=this.defaultActions[g]:(h??=w(),v=a[g]&&a[g][h]),v===void 0||!v.length||!v[0]){var E=``;for(b in C=[],a[g])this.terminals_[b]&&b>2&&C.push(`'`+this.terminals_[b]+`'`);E=u.showPosition?`Parse error on line `+(s+1)+`:
`+u.showPosition()+`
Expecting `+C.join(`, `)+`, got '`+(this.terminals_[h]||h)+`'`:`Parse error on line `+(s+1)+`: Unexpected `+(h==1?`end of input`:`'`+(this.terminals_[h]||h)+`'`),this.parseError(E,{text:u.match,token:this.terminals_[h]||h,line:u.yylineno,loc:p,expected:C})}if(v[0]instanceof Array&&v.length>1)throw Error(`Parse Error: multiple actions possible at state: `+g+`, token: `+h);switch(v[0]){case 1:n.push(h),r.push(u.yytext),i.push(u.yylloc),n.push(v[1]),h=null,c=u.yyleng,o=u.yytext,s=u.yylineno,p=u.yylloc;break;case 2:if(x=this.productions_[v[1]][1],T.$=r[r.length-x],T._$={first_line:i[i.length-(x||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(x||1)].first_column,last_column:i[i.length-1].last_column},m&&(T._$.range=[i[i.length-(x||1)].range[0],i[i.length-1].range[1]]),(y=this.performAction.apply(T,[o,c,s,d.yy,v[1],r,i].concat(l)))!==void 0)return y;x&&(n=n.slice(0,-1*x*2),r=r.slice(0,-1*x),i=i.slice(0,-1*x)),n.push(this.productions_[v[1]][0]),r.push(T.$),i.push(T._$),S=a[n[n.length-2]][n[n.length-1]],n.push(S);break;case 3:return!0}}return!0}},ee={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw Error(e);this.yy.parser.parseError(e,t)},setInput:function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=``,this.conditionStack=[`INITIAL`],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError(`Lexical error on line `+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:``,token:null,line:this.yylineno})},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?`...`:``)+e.substr(-20).replace(/\n/g,``)},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?`...`:``)).replace(/\n/g,``)},showPosition:function(){var e=this.pastInput(),t=Array(e.length+1).join(`-`);return e+this.upcomingInput()+`
`+t+`^`},test_match:function(e,t){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),(r=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in i)this[a]=i[a];return!1}return!1},next:function(){if(this.done)return this.EOF;var e,t,n,r;this._input||(this.done=!0),this._more||(this.yytext=``,this.match=``);for(var i=this._currentRules(),a=0;a<i.length;a++)if((n=this._input.match(this.rules[i[a]]))&&(!t||n[0].length>t[0].length)){if(t=n,r=a,this.options.backtrack_lexer){if(!1!==(e=this.test_match(n,i[a])))return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,i[r]))&&e:this._input===``?this.EOF:this.parseError(`Lexical error on line `+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:``,token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:`INITIAL`},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(e,t,n,r){switch(n){case 0:break;case 1:return 24;case 2:return 38;case 3:return 22;case 4:return 20;case 5:return 12;case 6:return 5;case 7:return t.yytext[0]}},rules:[/^(?:\s+)/,/^(?:[0-9]+)/,/^(?:(==|!=|<=|>=|<|>))/,/^(?:[+\-*/%]?=)/,/^(?:(\&\&)|\|\|)/,/^(?:[a-zA-Z_][a-zA-Z0-9._]*)/,/^(?:$)/,/^(?:.)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};function N(){this.yy={}}return M.lexer=ee,N.prototype=M,M.Parser=N,new N}(),i={ASSIGNMENT_EXPRESSION:[{type:`NODE`,key:`right`}],SCRIPT:[{type:`ARRAY`,key:`body`}],EXPRESSION_BLOCK:[{type:`ARRAY`,key:`body`}],UNARY_EXPRESSION:[{type:`NODE`,key:`value`}],NUMBER_LITERAL:[],IDENTIFIER:[],CALL_EXPRESSION:[{type:`ARRAY`,key:`arguments`},{type:`NODE`,key:`callee`}],BINARY_EXPRESSION:[{type:`NODE`,key:`left`},{type:`NODE`,key:`right`}],LOGICAL_EXPRESSION:[{type:`NODE`,key:`left`},{type:`NODE`,key:`right`}]};function a(e,t){let n=i[e.type],r=e;if(n==null)throw Error(`Unknown children definition for ${e.type}`);return n.forEach(n=>{if(n.type===`NODE`){let i=e[n.key],o=a(i,t);o!==i&&(r={...r,[n.key]:o})}else if(n.type===`ARRAY`){let i=e[n.key],o=i.map(e=>a(e,t));i.some((e,t)=>e!==o[t])&&(r={...r,[n.key]:o})}}),t(r)}function o(e){return[].concat.apply([],e)}function s(e,t){return Array(e).fill(t).join(``)}var c=class{constructor(){this._map=new Map}get(e,t){let n=e==null?t:`${e}::${t}`;return this._map.has(n)||this._map.set(n,this._map.size),this._map.get(n)}size(){return this._map.size}},l=class extends Error{constructor(e,t,n){super(e),this.sourceContext=function(e,t,n=1){let r=Math.max(e.first_line-1-n,0),i=e.last_line+n,a=t.split(`
`).slice(r,i).map((t,n)=>{let i=n+r+1;return`${i>=e.first_line&&i<=e.last_line?`>`:` `} ${i} | ${t}`});if(e.first_line===e.last_line){let t=s(e.first_column,` `),n=s(e.last_column-e.first_column,`^`),i=e.first_line-r;a.splice(i,0,`    | ${t}${n}`)}return a.join(`
`)}(t,n),this.loc=t}},u=class extends l{};function d(e,t,n){return new u(e,t,n)}function f(e,t,n){return new l(e,t,n)}function p(e,t){let r=n(t,e.first_column),i=n(t,e.last_column);return{first_column:r.column,last_column:i.column,first_line:r.line,last_line:i.line}}function m(e){let[t,n]=function(e){let t=[],n=1,r=``,i=0,a=!1,o=!1,s=!1;for(let c=0;c<e.length;c++){let l=e[c];if(s){let e=r.length+1,a=c-i+1;t.push({destCol:e,srcCol:a,srcLine:n}),s=!1}l===`
`?(a=!1,n++,i=c+1,s=!0):l===`\r`&&e[c+1]===`
`?(c++,a=!1,n++,i=c+1,s=!0):o&&l===`*`&&e[c+1]===`/`?(o=!1,c++,s=!0):l===`\\`&&e[c+1]===`\\`||l===`/`&&e[c+1]===`/`?(a=!0,c++):l===`/`&&e[c+1]===`*`?(o=!0,c++):a||o||(r+=l)}return[r,t]}(e);try{return a(function(){return r.parse.apply(r,arguments)}(t),t=>{if(t.loc.first_line!==1||t.loc.last_line!=1)throw f(`Unexpected multiline`,t.loc,e);return Object.assign(Object.assign({},t),{loc:p(t.loc,n)})})}catch(t){throw t.hash==null?t:d(`Parse Error: ${t.message.split(`
`)[3]}`,p(t.hash.loc,n),e)}}var h=[0,97,115,109],g=[1,0,0,0],v=1e-5,y=1,b=2,x=3,S=5,C=6,w=7,T=10,E=0,D=e=>[2,e],O=e=>[3,e],k=e=>[4,e],A=5,j=11,M=e=>[13,...We(e)],ee=e=>[16,...We(e)],N=26,P=27,F=e=>[32,...We(e)],I=e=>[33,...We(e)],te=e=>[34,...We(e)],ne=e=>[35,...We(e)],re=e=>[36,...We(e)],ie=(e,t)=>[43,...We(e),...We(t)],ae=(e,t)=>[57,...We(e),...We(t)],L=e=>[65,...Ge(e)],R=e=>[68,...He(e)],oe=71,se=72,ce=73,le=74,ue=76,de=98,fe=99,pe=100,me=101,he=102,ge=106,_e=107,ve=108,ye=111,z=113,be=114,xe=131,Se=132,B=153,Ce=154,V=155,H=156,we=159,Te=160,Ee=161,De=162,Oe=163,ke=164,Ae=165,je=170,Me=176,Ne=185,Pe=183,Fe=127,Ie=124,Le=1,Re=64,ze=124,Be=[B,...R(v),fe],Ve=[B,...R(v),pe];function He(e){let t=new Uint8Array(8);return function(e,t){let n=new ArrayBuffer(8);new DataView(n).setFloat64(0,t);let r=new Uint8Array(n).reverse();e.set(r,0)}(t,e),t}var Ue=e=>[e.length].concat(e.split(``).map(e=>e.charCodeAt(0)));function We(e){let t=[];do{let n=127&e;(e>>>=7)!=0&&(n|=128),t.push(n)}while(e!==0);return t}function Ge(e){let t=[],n=0,r=Math.ceil(Math.log2(Math.abs(e))),i=e<0,a=!0;for(;a;)n=127&e,e>>=7,i&&(e|=-(1<<r-7)),(e!=0||64&n)&&(e!=-1||64&~n)?n|=128:a=!1,t.push(n);return t}var Ke=e=>We(e.length).concat(e),qe=e=>We(e.length).concat(o(e));function Je(e,t){if(t.length===0)return[];let n=Ke(qe(t));return n.unshift(e),n}var Ye={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,atan2:Math.atan2,rand:e=>Math.random()*e,pow:Math.pow,log:Math.log,log10:Math.log10,exp:Math.exp,sigmoid:function(e,t){let n=1+Math.exp(-e*t);return Math.abs(n)>1e-5?1/n:0}},Xe=1048576,Ze=2048,Qe={sqr:{args:[Ie],returns:[Ie],binary:[...F(0),...F(0),De]},bor:{args:[Ie,Ie],returns:[Ie],binary:[...F(0),...Ve,...F(1),...Ve,be,...L(0),oe,Pe]},band:{args:[Ie,Ie],returns:[Ie],binary:[...F(0),...Ve,...F(1),...Ve,z,...L(0),oe,Pe]},sign:{args:[Ie],returns:[Ie],binary:[...R(0),...F(0),fe,...F(0),...R(0),fe,_e,Pe]},mod:{args:[Ie,Ie],returns:[Ie],localVariables:[Fe],binary:[...F(1),je,...te(2),...L(0),oe,...k(ze),...F(0),je,...F(2),ye,Pe,A,...R(0),j]},bitwiseOr:{args:[Ie,Ie],returns:[Ie],binary:[...F(0),Me,...F(1),Me,Se,Ne]},bitwiseAnd:{args:[Ie,Ie],returns:[Ie],binary:[...F(0),Me,...F(1),Me,xe,Ne]},div:{args:[Ie,Ie],returns:[Ie],localVariables:[Fe],binary:[...F(1),...R(0),de,...k(ze),...F(0),...F(1),Oe,A,...R(0),j]},_getBufferIndex:{args:[Ie],returns:[Fe],localVariables:[Ie,Fe],binary:[...R(v),...F(0),Te,...te(1),je,...I(2),...L(-1),...F(2),...L(8),ve,...F(2),...L(0),se,...F(2),...L(8388607),le,be,P]}};function $e(e,t){switch(e.type){case`SCRIPT`:return o(e.body.map((e,n)=>[...$e(e,t),N]));case`EXPRESSION_BLOCK`:return et(e.body,t);case`BINARY_EXPRESSION`:{let n=$e(e.left,t),r=$e(e.right,t),i={"+":[Te],"-":[Ee],"*":[De],"/":t.resolveFunc(`div`),"%":t.resolveFunc(`mod`),"|":t.resolveFunc(`bitwiseOr`),"&":t.resolveFunc(`bitwiseAnd`),"^":t.resolveFunc(`pow`),"==":[Ee,...Be,Pe],"!=":[Ee,...Ve,Pe],"<":[fe,Pe],">":[pe,Pe],"<=":[me,Pe],">=":[he,Pe]}[e.operator];if(i==null)throw f(`Unknown binary expression operator ${e.operator}`,e.loc,t.rawSource);return[...n,...r,...i]}case`CALL_EXPRESSION`:{let n=e.callee.value,r=e.arguments,i=i=>{if(r.length<i)throw d(`Too few arguments passed to \`${n}()\`. Expected ${i} but only got ${r.length}.`,e.loc,t.rawSource);if(r.length>i)throw d(`Too many arguments passed to \`${n}()\`. Expected ${i} but got ${r.length}.`,r[i].loc,t.rawSource)};switch(n){case`exec2`:return i(2),et(e.arguments,t);case`exec3`:return i(3),et(e.arguments,t);case`if`:i(3);let[r,a,o]=e.arguments;return function(e,t,n,r){return[...$e(e,r),...Ve,...k(ze),...$e(t,r),A,...$e(n,r),j]}(r,a,o,t);case`while`:return i(1),function(e,t){let n=$e(e,t),r=t.resolveLocal(Fe);return[...L(0),...I(r),...O(Re),...F(r),...L(1),ge,...te(r),...L(Xe),ce,...n,...Ve,z,...M(0),j,...R(0)]}(e.arguments[0],t);case`loop`:return i(2),function(e,t,n){let r=$e(t,n),i=n.resolveLocal(Fe);return[...D(Re),...$e(e,n),je,...te(i),...L(0),ue,...M(1),...O(Re),...r,N,...F(i),...L(1),_e,...te(i),...L(0),oe,...M(0),j,j,...R(0)]}(e.arguments[0],e.arguments[1],t);case`megabuf`:case`gmegabuf`:i(1);let s=t.resolveLocal(Fe);return[...$e(e.arguments[0],t),...t.resolveFunc(`_getBufferIndex`)??[],...te(s),...L(-1),oe,...k(ze),...F(s),...ie(3,tt(n)),A,...R(0),j];case`assign`:i(2);let c=e.arguments[0];if(c.type!=`IDENTIFIER`)throw d("Expected the first argument of `assign()` to be an identifier.",c.loc,t.rawSource);let l=t.resolveVar(c.value);return[...$e(e.arguments[1],t),...re(l),...ne(l)]}let a=o(e.arguments.map(e=>$e(e,t)));switch(n){case`abs`:return i(1),[...a,B];case`sqrt`:return i(1),[...a,B,we];case`int`:case`floor`:return i(1),[...a,H];case`min`:return i(2),[...a,ke];case`max`:return i(2),[...a,Ae];case`above`:return i(2),[...a,pe,Pe];case`below`:return i(2),[...a,fe,Pe];case`equal`:return i(2),[...a,Ee,...Be,Pe];case`bnot`:return i(1),[...a,...Be,Pe];case`ceil`:return i(1),[...a,V]}let s=t.resolveFunc(n);if(s==null||n.startsWith(`_`))throw d(`"${n}" is not defined.`,e.callee.loc,t.rawSource);if(Ye[n]!=null)i(Ye[n].length);else{if(Qe[n]==null)throw f(`Missing arity information for the function \`${n}()\``,e.callee.loc,t.rawSource);i(Qe[n].args.length)}return[...a,...s]}case`ASSIGNMENT_EXPRESSION`:{let{left:n}=e,r=$e(e.right,t),i=function(e,t){let n={"+=":[Te],"-=":[Ee],"*=":[De],"/=":[Oe],"%=":t.resolveFunc(`mod`),"=":null}[e.operator];if(n===void 0)throw f(`Unknown assignment operator "${e.operator}"`,e.loc,t.rawSource);return n}(e,t);if(n.type===`IDENTIFIER`){let e=t.resolveVar(n.value),a=ne(e),o=re(e);return i===null?[...r,...o,...a]:[...a,...r,...i,...o,...a]}if(n.type!==`CALL_EXPRESSION`)throw f(`Unexpected left hand side type for assignment: ${n.type}`,e.loc,t.rawSource);let a=t.resolveLocal(Fe);if(n.arguments.length!==1)throw d(`Expected 1 argument when assigning to a buffer but got ${n.arguments.length}.`,n.arguments.length===0?n.loc:n.arguments[1].loc,t.rawSource);let o=n.callee.value;if(o!==`gmegabuf`&&o!==`megabuf`)throw d("The only function calls which may be assigned to are `gmegabuf()` and `megabuf()`.",n.callee.loc,t.rawSource);let s=tt(o);if(i===null){let e=t.resolveLocal(Fe),i=t.resolveLocal(Ie);return[...r,...I(i),...$e(n.arguments[0],t),...t.resolveFunc(`_getBufferIndex`)??[],...te(e),...L(0),se,...k(ze),...R(0),A,...F(e),...te(a),...F(i),...ae(3,s),...F(i),j]}let c=t.resolveLocal(Fe),l=t.resolveLocal(Fe),u=t.resolveLocal(Ie),p=t.resolveLocal(Ie);return[...r,...I(u),...$e(n.arguments[0],t),...t.resolveFunc(`_getBufferIndex`)??[],...te(c),...L(-1),oe,...te(l),...k(ze),...F(c),...ie(3,s),A,...R(0),j,...F(u),...i,...te(p),...F(l),...k(Re),...F(c),...F(p),...ae(3,s),j]}case`LOGICAL_EXPRESSION`:{let n=$e(e.left,t),r=$e(e.right,t),i={"&&":{comparison:Be,shortCircuitValue:0},"||":{comparison:Ve,shortCircuitValue:1}}[e.operator];if(i==null)throw f(`Unknown logical expression operator ${e.operator}`,e.loc,t.rawSource);let{comparison:a,shortCircuitValue:o}=i;return[...n,...a,...k(ze),...R(o),A,...r,...Ve,Pe,j]}case`UNARY_EXPRESSION`:{let n=$e(e.value,t),r={"-":[Ce],"+":[],"!":[...Be,Pe]}[e.operator];if(r==null)throw f(`Unknown logical unary operator ${e.operator}`,e.loc,t.rawSource);return[...n,...r]}case`IDENTIFIER`:let n=e.value;return ne(t.resolveVar(n));case`NUMBER_LITERAL`:return R(e.value);default:throw f(`Unknown AST node type ${e.type}`,e.loc,t.rawSource)}}function et(e,t){return o(function(e,t){let n=[];for(let r=0;r<e.length;r++)n.push(e[r]),r===e.length-1||n.push(t);return n}(e.map((e,n)=>$e(e,t)),[N]))}function tt(e){switch(e){case`gmegabuf`:return 67108864;case`megabuf`:return 0}}function nt({pools:e,functions:t,eelVersion:n=2,preParsed:r=!1}){if(Object.keys(e).includes(`shims`))throw Error(`You may not name a pool "shims". "shims" is reserved for injected JavaScript functions.`);let i=[];Object.entries(e).forEach(([e,t])=>{t.forEach(t=>{i.push([e,t])})});let a=new c;i.forEach(([e,t])=>{a.get(e,t)});let o=Object.entries(Ye).map(([e,t])=>({args:Array(t.length).fill(null).map(e=>Ie),returns:[Ie],name:e})),s=[],l=[];Object.entries(t).forEach(([t,{pool:i,code:c}])=>{if(e[i]==null){let n=Object.keys(e);throw n.length===0?Error(`The function "${t}" was declared as using a variable pool named "${i}" but no pools were defined.`):Error(`The function "${t}" was declared as using a variable pool named "${i}" which is not among the variable pools defined. The defined variable pools are: ${function(e){if(e.length===0)throw Error(`Cannot format an empty list`);if(e.length===1)return e[0];let t=e.map(e=>`"${e}"`),n=t.pop();return t.join(`, `)+` and ${n}`}(n)}.`)}let u=r?c:m(c);if(typeof u==`string`)throw Error(`Got passed unparsed code without setting the preParsed flag`);if(u.type!==`SCRIPT`)throw Error(`Invalid AST`);if(u.body.length===0)return;let d=[],f=$e(u,{resolveVar:e=>/^reg\d\d$/.test(e)?a.get(null,e):a.get(i,e),resolveLocal:e=>(d.push(e),d.length-1),resolveFunc:e=>{let t=o.findIndex(t=>t.name===e);if(t!==-1){let r=ee(t);return e===`rand`&&n===1?[...r,H]:r}if(Qe[e]==null)return null;let r=s.indexOf(e);return r===-1&&(s.push(e),r=s.length-1),ee(r+o.length)},rawSource:c});l.push({binary:f,exportName:t,args:[],returns:[],localVariables:d})});let u=s.map(e=>{let t=Qe[e];if(t==null)throw Error(`Undefined local function "${e}"`);return t}),d=e=>[...e.args,`|`,...e.returns].join(`-`),f=[],p=new Map;function v(e){let t=d(e),n=p.get(t);if(n==null)throw Error(`Failed to get a type index for key ${t}`);return n}[...o,...u,...l].forEach(e=>{let t=d(e);p.has(t)||(f.push([96,...Ke(e.args),...Ke(e.returns)]),p.set(t,f.length-1))});let D=[...i.map(([e,t])=>[...Ue(e),...Ue(t),3,Ie,Le]),...o.map((e,t)=>{let n=v(e);return[...Ue(`shims`),...Ue(e.name),0,...We(n)]})],O=[...u,...l].map(e=>We(v(e))),k=[[1,...We(Ze),...We(Ze)]],A=a.size()-i.length,M=(N=()=>[Ie,Le,...R(0),j],Array(A).fill(null).map((e,t)=>N(t)));var N;let P=[...l].map((e,t)=>{let n=t+o.length+u.length;return[...Ue(e.exportName),E,...We(n)]}),F=[...u,...l].map(e=>Ke([...qe((e.localVariables??[]).map(e=>[...We(1),e])),...e.binary,j]));return new Uint8Array([...h,...g,...Je(y,f),...Je(b,D),...Je(x,O),...Je(S,k),...Je(C,M),...Je(w,P),...Je(T,F)])}async function rt({pools:e,functions:t,eelVersion:n=2}){let r={};Object.entries(e).forEach(([e,t])=>{r[e]=new Set(Object.keys(t))});let i=nt({pools:r,functions:t,eelVersion:n}),a=await WebAssembly.compile(i);var o=Object.assign(Object.assign({},e),{shims:Ye});return await WebAssembly.instantiate(a,o)}var it=-8,at=-4,ot=0,st=1,ct=2,lt=4,ut=6,dt=2048,ft=4096,pt=16384,mt=0,ht=4,gt=8,_t=12,vt=12,yt=16,bt=typeof BigUint64Array<`u`,xt=Symbol(),St=32,Ct=new TextDecoder(`utf-16le`);function wt(e,t){let n=new Uint32Array(e)[t+at>>>2]>>>1,r=new Uint16Array(e,t,n);return n<=St?String.fromCharCode.apply(String,r):Ct.decode(r)}function Tt(e){let t={};function n(e,t){return e?wt(e.buffer,t):`<yet unknown>`}let r=e.env=e.env||{};return r.abort=r.abort||function(e,i,a,o){let s=t.memory||r.memory;throw Error(`abort: ${n(s,e)} at ${n(s,i)}:${a}:${o}`)},r.trace=r.trace||function(e,i,...a){let o=t.memory||r.memory;console.log(`trace: ${n(o,e)}${i?` `:``}${a.slice(0,i).join(`, `)}`)},r.seed=r.seed||Date.now,e.Math=e.Math||Math,e.Date=e.Date||Date,t}function Et(e,t){let n=t.exports,r=n.memory,i=n.table,a=n.__new,o=n.__retain,s=n.__rtti_base||-1;function c(e){let t=new Uint32Array(r.buffer),n=t[s>>>2];if((e>>>=0)>=n)throw Error(`invalid id: ${e}`);return t[(s+4>>>2)+e*2]}function l(e){let t=c(e);if(!(t&7))throw Error(`not an array: ${e}, flags=${t}`);return t}function u(e){let t=new Uint32Array(r.buffer),n=t[s>>>2];if((e>>>=0)>=n)throw Error(`invalid id: ${e}`);return t[(s+4>>>2)+e*2+1]}function d(e){return 31-Math.clz32(e>>>ut&31)}function f(e){if(e==null)return 0;let t=e.length,n=a(t<<1,st),i=new Uint16Array(r.buffer);for(var o=0,s=n>>>1;o<t;++o)i[s+o]=e.charCodeAt(o);return n}e.__newString=f;function p(e){if(!e)return null;let t=r.buffer;if(new Uint32Array(t)[e+it>>>2]!==st)throw Error(`not a string: ${e}`);return wt(t,e)}e.__getString=p;function m(e,t,n){let i=r.buffer;if(n)switch(e){case 2:return new Float32Array(i);case 3:return new Float64Array(i)}else switch(e){case 0:return new(t?Int8Array:Uint8Array)(i);case 1:return new(t?Int16Array:Uint16Array)(i);case 2:return new(t?Int32Array:Uint32Array)(i);case 3:return new(t?BigInt64Array:BigUint64Array)(i)}throw Error(`unsupported align: ${e}`)}function h(e,t){let n=l(e),i=d(n),s=t.length,c=a(s<<i,n&lt?e:ot),u;if(n&lt)u=c;else{let t=a(n&ct?yt:_t,e),l=new Uint32Array(r.buffer);l[t+mt>>>2]=o(c),l[t+ht>>>2]=c,l[t+gt>>>2]=s<<i,n&ct&&(l[t+vt>>>2]=s),u=t}let f=m(i,n&dt,n&ft);if(n&pt)for(let e=0;e<s;++e)f[(c>>>i)+e]=o(t[e]);else f.set(t,c>>>i);return u}e.__newArray=h;function g(e){let t=new Uint32Array(r.buffer),n=t[e+it>>>2],i=l(n),a=d(i),o=i&lt?e:t[e+ht>>>2],s=i&ct?t[e+vt>>>2]:t[o+at>>>2]>>>a;return m(a,i&dt,i&ft).subarray(o>>>=a,o+s)}e.__getArrayView=g;function v(e){let t=g(e),n=t.length,r=Array(n);for(let e=0;e<n;e++)r[e]=t[e];return r}e.__getArray=v;function y(e){let t=r.buffer,n=new Uint32Array(t)[e+at>>>2];return t.slice(e,e+n)}e.__getArrayBuffer=y;function b(e,t,n){return new e(x(e,t,n))}function x(e,t,n){let i=r.buffer,a=new Uint32Array(i),o=a[n+ht>>>2];return new e(i,o,a[o+at>>>2]>>>t)}function S(t,n,r){e[`__get${n}`]=b.bind(null,t,r),e[`__get${n}View`]=x.bind(null,t,r)}[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach(e=>{S(e,e.name,31-Math.clz32(e.BYTES_PER_ELEMENT))}),bt&&[BigUint64Array,BigInt64Array].forEach(e=>{S(e,e.name.slice(3),3)});function C(e,t){let n=new Uint32Array(r.buffer),i=n[e+it>>>2];if(i<=n[s>>>2])do{if(i==t)return!0;i=u(i)}while(i);return!1}return e.__instanceof=C,e.memory=e.memory||r,e.table=e.table||i,Mt(n,e)}function Dt(e){return typeof Response<`u`&&e instanceof Response}function Ot(e){return e instanceof WebAssembly.Module}async function kt(e,t={}){if(Dt(e=await e))return jt(e,t);let n=Ot(e)?e:await WebAssembly.compile(e),r=Tt(t),i=await WebAssembly.instantiate(n,t);return{module:n,instance:i,exports:Et(r,i)}}function At(e,t={}){let n=Ot(e)?e:new WebAssembly.Module(e),r=Tt(t),i=new WebAssembly.Instance(n,t);return{module:n,instance:i,exports:Et(r,i)}}async function jt(e,t={}){if(!WebAssembly.instantiateStreaming)return kt(Dt(e=await e)?e.arrayBuffer():e,t);let n=Tt(t),r=await WebAssembly.instantiateStreaming(e,t),i=Et(n,r.instance);return{...r,exports:i}}function Mt(e,t={}){let n=e.__argumentsLength?t=>{e.__argumentsLength.value=t}:e.__setArgumentsLength||e.__setargc||(()=>{});for(let r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;let i=e[r],a=r.split(`.`),o=t;for(;a.length>1;){let e=a.shift();Object.prototype.hasOwnProperty.call(o,e)||(o[e]={}),o=o[e]}let s=a[0],c=s.indexOf(`#`);if(c>=0){let t=s.substring(0,c),a=o[t];if(a===void 0||!a.prototype){let e=function(...t){return e.wrap(e.prototype.constructor(0,...t))};e.prototype={valueOf(){return this[xt]}},e.wrap=function(t){return Object.create(e.prototype,{[xt]:{value:t,writable:!1}})},a&&Object.getOwnPropertyNames(a).forEach(t=>Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))),o[t]=e}if(s=s.substring(c+1),o=o[t].prototype,/^(get|set):/.test(s)){if(!Object.prototype.hasOwnProperty.call(o,s=s.substring(4))){let t=e[r.replace(`set:`,`get:`)],n=e[r.replace(`get:`,`set:`)];Object.defineProperty(o,s,{get(){return t(this[xt])},set(e){n(this[xt],e)},enumerable:!0})}}else s===`constructor`?(o[s]=(...e)=>(n(e.length),i(...e))).original=i:(o[s]=function(...e){return n(e.length),i(this[xt],...e)}).original=i}else/^(get|set):/.test(s)?Object.prototype.hasOwnProperty.call(o,s=s.substring(4))||Object.defineProperty(o,s,{get:e[r.replace(`set:`,`get:`)],set:e[r.replace(`get:`,`set:`)],enumerable:!0}):typeof i==`function`&&i!==n?(o[s]=(...e)=>(n(e.length),i(...e))).original=i:o[s]=i}return t}var Nt={instantiate:kt,instantiateSync:At,instantiateStreaming:jt,demangle:Mt},Pt=class{constructor(e,t,n=!1){this.samplesIn=e,this.samplesOut=t,this.equalize=n,this.NFREQ=t*2,this.equalize&&this.initEqualizeTable(),this.initBitRevTable(),this.initCosSinTable()}initEqualizeTable(){this.equalizeArr=new Float32Array(this.samplesOut);let e=1/this.samplesOut;for(let t=0;t<this.samplesOut;t++)this.equalizeArr[t]=-.02*Math.log((this.samplesOut-t)*e)}initBitRevTable(){this.bitrevtable=new Uint16Array(this.NFREQ);for(let e=0;e<this.NFREQ;e++)this.bitrevtable[e]=e;let e=0;for(let t=0;t<this.NFREQ;t++){if(e>t){let n=this.bitrevtable[t];this.bitrevtable[t]=this.bitrevtable[e],this.bitrevtable[e]=n}let n=this.NFREQ>>1;for(;n>=1&&e>=n;)e-=n,n>>=1;e+=n}}initCosSinTable(){let e=2,t=0;for(;e<=this.NFREQ;)t+=1,e<<=1;this.cossintable=[new Float32Array(t),new Float32Array(t)],e=2;let n=0;for(;e<=this.NFREQ;){let t=-2*Math.PI/e;this.cossintable[0][n]=Math.cos(t),this.cossintable[1][n]=Math.sin(t),n+=1,e<<=1}}timeToFrequencyDomain(e){let t=new Float32Array(this.NFREQ),n=new Float32Array(this.NFREQ);for(let r=0;r<this.NFREQ;r++){let i=this.bitrevtable[r];i<this.samplesIn?t[r]=e[i]:t[r]=0,n[r]=0}let r=2,i=0;for(;r<=this.NFREQ;){let e=this.cossintable[0][i],a=this.cossintable[1][i],o=1,s=0,c=r>>1;for(let i=0;i<c;i++){for(let e=i;e<this.NFREQ;e+=r){let r=e+c,i=o*t[r]-s*n[r],a=o*n[r]+s*t[r];t[r]=t[e]-i,n[r]=n[e]-a,t[e]+=i,n[e]+=a}let l=o;o=l*e-s*a,s=s*e+l*a}r<<=1,i+=1}let a=new Float32Array(this.samplesOut);if(this.equalize)for(let e=0;e<this.samplesOut;e++)a[e]=this.equalizeArr[e]*Math.sqrt(t[e]*t[e]+n[e]*n[e]);else for(let e=0;e<this.samplesOut;e++)a[e]=Math.sqrt(t[e]*t[e]+n[e]*n[e]);return a}},Ft=class{constructor(e){this.numSamps=512,this.fftSize=this.numSamps*2,this.fft=new Pt(this.fftSize,512,!0),e&&(this.audioContext=e,this.audible=e.createDelay(),this.analyser=e.createAnalyser(),this.analyser.smoothingTimeConstant=0,this.analyser.fftSize=this.fftSize,this.audible.connect(this.analyser),this.analyserL=e.createAnalyser(),this.analyserL.smoothingTimeConstant=0,this.analyserL.fftSize=this.fftSize,this.analyserR=e.createAnalyser(),this.analyserR.smoothingTimeConstant=0,this.analyserR.fftSize=this.fftSize,this.splitter=e.createChannelSplitter(2),this.audible.connect(this.splitter),this.splitter.connect(this.analyserL,0),this.splitter.connect(this.analyserR,1)),this.timeByteArray=new Uint8Array(this.fftSize),this.timeByteArrayL=new Uint8Array(this.fftSize),this.timeByteArrayR=new Uint8Array(this.fftSize),this.timeArray=new Int8Array(this.fftSize),this.timeByteArraySignedL=new Int8Array(this.fftSize),this.timeByteArraySignedR=new Int8Array(this.fftSize),this.tempTimeArrayL=new Int8Array(this.fftSize),this.tempTimeArrayR=new Int8Array(this.fftSize),this.timeArrayL=new Int8Array(this.numSamps),this.timeArrayR=new Int8Array(this.numSamps)}sampleAudio(){this.analyser.getByteTimeDomainData(this.timeByteArray),this.analyserL.getByteTimeDomainData(this.timeByteArrayL),this.analyserR.getByteTimeDomainData(this.timeByteArrayR),this.processAudio()}updateAudio(e,t,n){this.timeByteArray.set(e),this.timeByteArrayL.set(t),this.timeByteArrayR.set(n),this.processAudio()}processAudio(){for(let e=0,t=0,n=0;e<this.fftSize;e++)this.timeArray[e]=this.timeByteArray[e]-128,this.timeByteArraySignedL[e]=this.timeByteArrayL[e]-128,this.timeByteArraySignedR[e]=this.timeByteArrayR[e]-128,this.tempTimeArrayL[e]=.5*(this.timeByteArraySignedL[e]+this.timeByteArraySignedL[n]),this.tempTimeArrayR[e]=.5*(this.timeByteArraySignedR[e]+this.timeByteArraySignedR[n]),e%2==0&&(this.timeArrayL[t]=this.tempTimeArrayL[e],this.timeArrayR[t]=this.tempTimeArrayR[e],t+=1),n=e;this.freqArray=this.fft.timeToFrequencyDomain(this.timeArray),this.freqArrayL=this.fft.timeToFrequencyDomain(this.timeByteArraySignedL),this.freqArrayR=this.fft.timeToFrequencyDomain(this.timeByteArraySignedR)}connectAudio(e){e.connect(this.audible)}disconnectAudio(e){e.disconnect(this.audible)}},It=class e{constructor(e){this.audio=e;let t;t=this.audio.audioContext?this.audio.audioContext.sampleRate:44100;let n=t/this.audio.fftSize,r=Math.clamp(Math.round(20/n)-1,0,this.audio.numSamps-1),i=Math.clamp(Math.round(320/n)-1,0,this.audio.numSamps-1),a=Math.clamp(Math.round(2800/n)-1,0,this.audio.numSamps-1),o=Math.clamp(Math.round(11025/n)-1,0,this.audio.numSamps-1);this.starts=[r,i,a],this.stops=[i,a,o],this.val=new Float32Array(3),this.imm=new Float32Array(3),this.att=new Float32Array(3),this.avg=new Float32Array(3),this.longAvg=new Float32Array(3),this.att.fill(1),this.avg.fill(1),this.longAvg.fill(1)}get bass(){return this.val[0]}get bass_att(){return this.att[0]}get mid(){return this.val[1]}get mid_att(){return this.att[1]}get treb(){return this.val[2]}get treb_att(){return this.att[2]}static isFiniteNumber(e){return Number.isFinite(e)&&!Number.isNaN(e)}static adjustRateToFPS(e,t,n){return e**(t/n)}updateAudioLevels(t,n){if(this.audio.freqArray.length>0){let r=t;!e.isFiniteNumber(r)||r<15?r=15:r>144&&(r=144),this.imm.fill(0);for(let e=0;e<3;e++)for(let t=this.starts[e];t<this.stops[e];t++)this.imm[e]+=this.audio.freqArray[t];for(let t=0;t<3;t++){let i;i=this.imm[t]>this.avg[t]?.2:.5,i=e.adjustRateToFPS(i,30,r),this.avg[t]=this.avg[t]*i+this.imm[t]*(1-i),i=n<50?.9:.992,i=e.adjustRateToFPS(i,30,r),this.longAvg[t]=this.longAvg[t]*i+this.imm[t]*(1-i),this.longAvg[t]<.001?(this.val[t]=1,this.att[t]=1):(this.val[t]=this.imm[t]/this.longAvg[t],this.att[t]=this.avg[t]/this.longAvg[t])}}}},Lt={baseVals:{gammaadj:1.25,wave_g:.5,mv_x:12,warpscale:1,brighten:0,mv_y:9,wave_scale:1,echo_alpha:0,additivewave:0,sx:1,sy:1,warp:.01,red_blue:0,wave_mode:0,wave_brighten:0,wrap:0,zoomexp:1,fshader:0,wave_r:.5,echo_zoom:1,wave_smoothing:.75,warpanimspeed:1,wave_dots:0,wave_x:.5,wave_y:.5,zoom:1,solarize:0,modwavealphabyvolume:0,dx:0,cx:.5,dy:0,darken_center:0,cy:.5,invert:0,bmotionvectorson:0,rot:0,modwavealphaend:.95,wave_mystery:-.2,decay:.9,wave_a:1,wave_b:.5,rating:5,modwavealphastart:.75,darken:0,echo_orient:0,ib_r:.5,ib_g:.5,ib_b:.5,ib_a:0,ib_size:0,ob_r:.5,ob_g:.5,ob_b:.5,ob_a:0,ob_size:0,mv_dx:0,mv_dy:0,mv_a:0,mv_r:.5,mv_g:.5,mv_b:.5,mv_l:0},init_eqs:function(){return{}},frame_eqs:function(e){return e.rkeys=[`warp`],e.zoom=1.01+.02*e.treb_att,e.warp=.15+.25*e.bass_att,e},pixel_eqs:function(e){return e.warp+=e.rad*.15,e},waves:[{baseVals:{a:1,enabled:0,b:1,g:1,scaling:1,samples:512,additive:0,usedots:0,spectrum:0,r:1,smoothing:.5,thick:0,sep:0},init_eqs:function(e){return e.rkeys=[],e},frame_eqs:function(e){return e},point_eqs:``},{baseVals:{a:1,enabled:0,b:1,g:1,scaling:1,samples:512,additive:0,usedots:0,spectrum:0,r:1,smoothing:.5,thick:0,sep:0},init_eqs:function(e){return e.rkeys=[],e},frame_eqs:function(e){return e},point_eqs:``},{baseVals:{a:1,enabled:0,b:1,g:1,scaling:1,samples:512,additive:0,usedots:0,spectrum:0,r:1,smoothing:.5,thick:0,sep:0},init_eqs:function(e){return e.rkeys=[],e},frame_eqs:function(e){return e},point_eqs:``},{baseVals:{a:1,enabled:0,b:1,g:1,scaling:1,samples:512,additive:0,usedots:0,spectrum:0,r:1,smoothing:.5,thick:0,sep:0},init_eqs:function(e){return e.rkeys=[],e},frame_eqs:function(e){return e},point_eqs:``}],shapes:[{baseVals:{r2:0,a:1,enabled:0,b:0,tex_ang:0,thickoutline:0,g:0,textured:0,g2:1,tex_zoom:1,additive:0,border_a:.1,border_b:1,b2:0,a2:0,r:1,border_g:1,rad:.1,x:.5,y:.5,ang:0,sides:4,border_r:1},init_eqs:function(e){return e.rkeys=[],e},frame_eqs:function(e){return e}},{baseVals:{r2:0,a:1,enabled:0,b:0,tex_ang:0,thickoutline:0,g:0,textured:0,g2:1,tex_zoom:1,additive:0,border_a:.1,border_b:1,b2:0,a2:0,r:1,border_g:1,rad:.1,x:.5,y:.5,ang:0,sides:4,border_r:1},init_eqs:function(e){return e.rkeys=[],e},frame_eqs:function(e){return e}},{baseVals:{r2:0,a:1,enabled:0,b:0,tex_ang:0,thickoutline:0,g:0,textured:0,g2:1,tex_zoom:1,additive:0,border_a:.1,border_b:1,b2:0,a2:0,r:1,border_g:1,rad:.1,x:.5,y:.5,ang:0,sides:4,border_r:1},init_eqs:function(e){return e.rkeys=[],e},frame_eqs:function(e){return e}},{baseVals:{r2:0,a:1,enabled:0,b:0,tex_ang:0,thickoutline:0,g:0,textured:0,g2:1,tex_zoom:1,additive:0,border_a:.1,border_b:1,b2:0,a2:0,r:1,border_g:1,rad:.1,x:.5,y:.5,ang:0,sides:4,border_r:1},init_eqs:function(e){return e.rkeys=[],e},frame_eqs:function(e){return e}}],warp:`shader_body {
ret = texture2D(sampler_main, uv).rgb;
ret -= 0.004;
}
`,comp:`shader_body {
ret = texture2D(sampler_main, uv).rgb;
ret *= hue_shader;
}
`},U=class{static atan2(e,t){let n=Math.atan2(e,t);return n<0&&(n+=2*Math.PI),n}static cloneVars(e){return Object.assign({},e)}static range(e,t){return t===void 0?[...Array(e).keys()]:Array.from({length:t-e},(t,n)=>n+e)}static pick(e,t){let n={};for(let r=0;r<t.length;r++){let i=t[r];n[i]=e[i]||0}return n}static omit(e,t){let n=Object.assign({},e);for(let e=0;e<t.length;e++){let r=t[e];delete n[r]}return n}static setWasm(e,t,n){for(let r=0;r<n.length;r++){let i=n[r];e[i].value=t[i]}}static pickWasm(e,t){let n={};for(let r=0;r<t.length;r++){let i=t[r];n[i]=e[i].value}return n}},Rt=class e{constructor(t=1){this.state=new Uint32Array(4),e.initializeState(this.state,t),this.warmUp()}static initializeState(e,t){e[0]=t,e[1]=t^2654435769,e[2]=t^1779033703,e[3]=t^3144134277}warmUp(){for(let e=0;e<10;e++)this.next()}next(){let e=this.state[3],t=this.state[0];return this.state[3]=this.state[2],this.state[2]=this.state[1],this.state[1]=t,e^=e<<11,e^=e>>>8,this.state[0]=e^t^t>>>19,(this.state[0]>>>0)/4294967296}nextInt(e){return Math.floor(this.next()*e)}rand(e){return e<1?this.next():Math.floor(this.next()*Math.floor(e))}reset(t){e.initializeState(this.state,t),this.warmUp()}};function zt(e=1){let t=new Rt(e);return{random:()=>t.next(),rand:e=>t.rand(e),randint:e=>Math.floor(t.rand(e)+1),getRNG:()=>t,reset:n=>{n===void 0?t.reset(e):t.reset(n)}}}function Bt(){return{random:Math.random,rand:e=>e<1?Math.random():Math.random()*Math.floor(e),randint:e=>Math.floor((e<1?Math.random():Math.random()*Math.floor(e))+1),getRNG:()=>null,reset:()=>{}}}var Vt=null;function Ht(e={}){return Vt=e.deterministic||e.testMode?zt(e.seed||12345):Bt(),(e.deterministic||e.testMode)&&(window.rand=e=>Vt.rand(e),window.randint=e=>Vt.randint(e),Math.random=()=>Vt.random()),Vt}function Ut(){return Vt||=Bt(),Vt}var Wt=class{constructor(e,t,n){this.rng=Ut(),this.preset=e,this.texsizeX=n.texsizeX,this.texsizeY=n.texsizeY,this.mesh_width=n.mesh_width,this.mesh_height=n.mesh_height,this.aspectx=n.aspectx,this.aspecty=n.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.qs=U.range(1,33).map(e=>`q${e}`),this.ts=U.range(1,9).map(e=>`t${e}`),this.regs=U.range(100).map(e=>e<10?`reg0${e}`:`reg${e}`),this.initializeEquations(t)}initializeEquations(e){this.runVertEQs=this.preset.pixel_eqs!==``,this.mdVSQInit=null,this.mdVSRegs=null,this.mdVSFrame=null,this.mdVSUserKeys=null,this.mdVSFrameMap=null,this.mdVSShapes=null,this.mdVSUserKeysShapes=null,this.mdVSFrameMapShapes=null,this.mdVSWaves=null,this.mdVSUserKeysWaves=null,this.mdVSFrameMapWaves=null,this.mdVSQAfterFrame=null,this.gmegabuf=Array(1048576).fill(0);let t={frame:e.frame,time:e.time,fps:e.fps,bass:e.bass,bass_att:e.bass_att,mid:e.mid,mid_att:e.mid_att,treb:e.treb,treb_att:e.treb_att,meshx:this.mesh_width,meshy:this.mesh_height,aspectx:this.invAspectx,aspecty:this.invAspecty,pixelsx:this.texsizeX,pixelsy:this.texsizeY,gmegabuf:this.gmegabuf};this.mdVS=Object.assign({},this.preset.baseVals,t),this.mdVS.megabuf=Array(1048576).fill(0),this.mdVS.rand_start=new Float32Array([this.rng.random(),this.rng.random(),this.rng.random(),this.rng.random()]),this.mdVS.rand_preset=new Float32Array([this.rng.random(),this.rng.random(),this.rng.random(),this.rng.random()]);let n=this.qs.concat(this.regs,Object.keys(this.mdVS)),r=this.preset.init_eqs(U.cloneVars(this.mdVS));this.mdVSQInit=U.pick(r,this.qs),this.mdVSRegs=U.pick(r,this.regs);let i=U.pick(r,Object.keys(U.omit(r,n)));if(i.megabuf=r.megabuf,i.gmegabuf=r.gmegabuf,this.mdVSFrame=this.preset.frame_eqs(Object.assign({},this.mdVS,this.mdVSQInit,this.mdVSRegs,i)),this.mdVSUserKeys=Object.keys(U.omit(this.mdVSFrame,n)),this.mdVSFrameMap=U.pick(this.mdVSFrame,this.mdVSUserKeys),this.mdVSQAfterFrame=U.pick(this.mdVSFrame,this.qs),this.mdVSRegs=U.pick(this.mdVSFrame,this.regs),this.mdVSWaves=[],this.mdVSTWaveInits=[],this.mdVSUserKeysWaves=[],this.mdVSFrameMapWaves=[],this.preset.waves&&this.preset.waves.length>0)for(let e=0;e<this.preset.waves.length;e++){let n=this.preset.waves[e],r=n.baseVals;if(r.enabled!==0){let i=Object.assign({},r,t),a=this.qs.concat(this.ts,this.regs,Object.keys(i));Object.assign(i,this.mdVSQAfterFrame,this.mdVSRegs),i.megabuf=Array(1048576).fill(0),n.init_eqs&&(i=n.init_eqs(i),this.mdVSRegs=U.pick(i,this.regs),Object.assign(i,r)),this.mdVSWaves.push(i),this.mdVSTWaveInits.push(U.pick(i,this.ts)),this.mdVSUserKeysWaves.push(Object.keys(U.omit(i,a))),this.mdVSFrameMapWaves.push(U.pick(i,this.mdVSUserKeysWaves[e]))}else this.mdVSWaves.push({}),this.mdVSTWaveInits.push({}),this.mdVSUserKeysWaves.push([]),this.mdVSFrameMapWaves.push({})}if(this.mdVSShapes=[],this.mdVSTShapeInits=[],this.mdVSUserKeysShapes=[],this.mdVSFrameMapShapes=[],this.preset.shapes&&this.preset.shapes.length>0)for(let e=0;e<this.preset.shapes.length;e++){let n=this.preset.shapes[e],r=n.baseVals;if(r.enabled!==0){let i=Object.assign({},r,t),a=this.qs.concat(this.ts,this.regs,Object.keys(i));Object.assign(i,this.mdVSQAfterFrame,this.mdVSRegs),i.megabuf=Array(1048576).fill(0),n.init_eqs&&(i=n.init_eqs(i),this.mdVSRegs=U.pick(i,this.regs),Object.assign(i,r)),this.mdVSShapes.push(i),this.mdVSTShapeInits.push(U.pick(i,this.ts)),this.mdVSUserKeysShapes.push(Object.keys(U.omit(i,a))),this.mdVSFrameMapShapes.push(U.pick(i,this.mdVSUserKeysShapes[e]))}else this.mdVSShapes.push({}),this.mdVSTShapeInits.push({}),this.mdVSUserKeysShapes.push([]),this.mdVSFrameMapShapes.push({})}}updatePreset(e,t){this.preset=e,this.initializeEquations(t)}updateGlobals(e){this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.mesh_width=e.mesh_width,this.mesh_height=e.mesh_height,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty}runFrameEquations(e){return this.mdVSFrame=Object.assign({},this.mdVS,this.mdVSQInit,this.mdVSFrameMap,e),this.mdVSFrame=this.preset.frame_eqs(this.mdVSFrame),this.mdVSFrameMap=U.pick(this.mdVSFrame,this.mdVSUserKeys),this.mdVSQAfterFrame=U.pick(this.mdVSFrame,this.qs),this.mdVSFrame}runPixelEquations(e){return this.preset.pixel_eqs(e)}runShapeFrameEquations(e,t){return this.preset.shapes[e].frame_eqs(t)}runWaveFrameEquations(e,t){return this.preset.waves[e].frame_eqs(t)}runWavePointEquations(e,t){return this.preset.waves[e].point_eqs(t)}},Gt=class{constructor(e,t,n){this.rng=Ut(),this.preset=e,this.texsizeX=n.texsizeX,this.texsizeY=n.texsizeY,this.mesh_width=n.mesh_width,this.mesh_height=n.mesh_height,this.aspectx=n.aspectx,this.aspecty=n.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.qs=U.range(1,33).map(e=>`q${e}`),this.ts=U.range(1,9).map(e=>`t${e}`),this.regs=U.range(100).map(e=>e<10?`reg0${e}`:`reg${e}`),this.globalKeys=[`frame`,`time`,`fps`,`bass`,`bass_att`,`mid`,`mid_att`,`treb`,`treb_att`,`meshx`,`meshy`,`aspectx`,`aspecty`,`pixelsx`,`pixelsy`],this.frameKeys=`decay.wave_a.wave_r.wave_g.wave_b.wave_x.wave_y.wave_scale.wave_smoothing.wave_mode.old_wave_mode.wave_mystery.ob_size.ob_r.ob_g.ob_b.ob_a.ib_size.ib_r.ib_g.ib_b.ib_a.mv_x.mv_y.mv_dx.mv_dy.mv_l.mv_r.mv_g.mv_b.mv_a.echo_zoom.echo_alpha.echo_orient.wave_dots.wave_thick.additivewave.wave_brighten.modwavealphabyvolume.modwavealphastart.modwavealphaend.darken_center.gammaadj.warp.warpanimspeed.warpscale.zoom.zoomexp.rot.cx.cy.dx.dy.sx.sy.fshader.wrap.invert.brighten.darken.solarize.bmotionvectorson.b1n.b2n.b3n.b1x.b2x.b3x.b1ed`.split(`.`),this.waveFrameKeys=[`samples`,`sep`,`scaling`,`spectrum`,`smoothing`,`r`,`g`,`b`,`a`],this.waveFrameInputKeys=[`samples`,`r`,`g`,`b`,`a`],this.initializeEquations(t)}getQVars(e){return U.pickWasm(this.preset.globalPools[e],this.qs)}getTVars(e){return U.pickWasm(this.preset.globalPools[e],this.ts)}initializeEquations(e){this.runVertEQs=!!this.preset.pixel_eqs,this.mdVSQInit=null,this.mdVSQAfterFrame=null;let t={frame:e.frame,time:e.time,fps:e.fps,bass:e.bass,bass_att:e.bass_att,mid:e.mid,mid_att:e.mid_att,treb:e.treb,treb_att:e.treb_att,meshx:this.mesh_width,meshy:this.mesh_height,aspectx:this.invAspectx,aspecty:this.invAspecty,pixelsx:this.texsizeX,pixelsy:this.texsizeY};if(this.mdVS=Object.assign({},this.preset.baseVals,t),U.setWasm(this.preset.globalPools.perFrame,this.mdVS,Object.keys(this.mdVS)),this.rand_start=new Float32Array([this.rng.random(),this.rng.random(),this.rng.random(),this.rng.random()]),this.rand_preset=new Float32Array([this.rng.random(),this.rng.random(),this.rng.random(),this.rng.random()]),this.preset.init_eqs(),this.mdVSQInit=this.getQVars(`perFrame`),this.preset.frame_eqs(),this.mdVSQAfterFrame=this.getQVars(`perFrame`),this.mdVSTWaveInits=[],this.preset.waves&&this.preset.waves.length>0)for(let e=0;e<this.preset.waves.length;e++){let t=this.preset.waves[e],n=t.baseVals;n.enabled===0?this.mdVSTWaveInits.push({}):(U.setWasm(this.preset.globalPools[`wavePerFrame${e}`],n,Object.keys(n)),t.init_eqs&&(t.init_eqs(),U.setWasm(this.preset.globalPools[`wavePerFrame${e}`],n,Object.keys(n))),this.mdVSTWaveInits.push(this.getTVars(`wavePerFrame${e}`)))}if(this.mdVSTShapeInits=[],this.preset.shapes&&this.preset.shapes.length>0)for(let e=0;e<this.preset.shapes.length;e++){let t=this.preset.shapes[e],n=t.baseVals;n.enabled===0?this.mdVSTShapeInits.push({}):(U.setWasm(this.preset.globalPools[`shapePerFrame${e}`],n,Object.keys(n)),t.init_eqs&&(t.init_eqs(),U.setWasm(this.preset.globalPools[`shapePerFrame${e}`],n,Object.keys(n))),this.mdVSTShapeInits.push(this.getTVars(`shapePerFrame${e}`)))}}updatePreset(e,t){this.preset=e,this.initializeEquations(t)}updateGlobals(e){this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.mesh_width=e.mesh_width,this.mesh_height=e.mesh_height,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty}runFrameEquations(e){U.setWasm(this.preset.globalPools.perFrame,this.mdVS,this.frameKeys),U.setWasm(this.preset.globalPools.perFrame,this.mdVSQInit,this.qs),U.setWasm(this.preset.globalPools.perFrame,e,this.globalKeys),this.preset.frame_eqs(),this.preset.save_qs(),this.mdVSQAfterFrame=this.getQVars(`perFrame`);let t=U.pickWasm(this.preset.globalPools.perFrame,[...this.frameKeys,...this.globalKeys]);return t.rand_preset=this.rand_preset,t.rand_start=this.rand_start,t}runWaveFrameEquations(e,t){let n=this.preset.waves[e].baseVals;return U.setWasm(this.preset.globalPools[`wavePerFrame${e}`],n,this.waveFrameInputKeys),U.setWasm(this.preset.globalPools[`wavePerFrame${e}`],this.mdVSQAfterFrame,this.qs),U.setWasm(this.preset.globalPools[`wavePerFrame${e}`],this.mdVSTWaveInits[e],this.ts),U.setWasm(this.preset.globalPools[`wavePerFrame${e}`],t,this.globalKeys),this.preset.waves[e].frame_eqs(),U.pickWasm(this.preset.globalPools[`wavePerFrame${e}`],this.waveFrameKeys)}},Kt=/uniform sampler2D sampler_(?:.+?);/g,qt=/uniform sampler2D sampler_(.+?);/,Jt=class{static getShaderParts(e){let t=e.indexOf(`shader_body`);if(e&&t>-1){let n=e.substring(0,t),r=e.substring(t),i=r.indexOf(`{`),a=r.lastIndexOf(`}`);return[n,r.substring(i+1,a)]}return[``,e]}static getFragmentFloatPrecision(e){return e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0?`highp`:e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}static getUserSamplers(e){let t=[],n=e.match(Kt);if(n&&n.length>0)for(let e=0;e<n.length;e++){let r=n[e].match(qt);if(r&&r.length>0){let e=r[1];t.push({sampler:e})}}return t}},Yt=class{static smoothWave(e,t,n,r=!1){let i=-.15,a=1.15,o=1.15,s=-.15,c=1/2,l=0,u=0,d,f=1;for(let p=0;p<n-1;p++){d=f,f=Math.min(n-1,p+2);for(let n=0;n<3;n++)t[l*3+n]=e[p*3+n];if(r)for(let n=0;n<3;n++)t[(l+1)*3+n]=(i*e[u*3+n]+a*e[p*3+n]+o*e[d*3+n]+s*e[f*3+n])*c;else{for(let n=0;n<2;n++)t[(l+1)*3+n]=(i*e[u*3+n]+a*e[p*3+n]+o*e[d*3+n]+s*e[f*3+n])*c;t[(l+1)*3+2]=0}u=p,l+=2}for(let r=0;r<3;r++)t[l*3+r]=e[(n-1)*3+r]}static smoothWaveAndColor(e,t,n,r,i,a=!1){let o=-.15,s=1.15,c=1.15,l=-.15,u=1/2,d=0,f=0,p,m=1;for(let h=0;h<i-1;h++){p=m,m=Math.min(i-1,h+2);for(let t=0;t<3;t++)n[d*3+t]=e[h*3+t];if(a)for(let t=0;t<3;t++)n[(d+1)*3+t]=(o*e[f*3+t]+s*e[h*3+t]+c*e[p*3+t]+l*e[m*3+t])*u;else{for(let t=0;t<2;t++)n[(d+1)*3+t]=(o*e[f*3+t]+s*e[h*3+t]+c*e[p*3+t]+l*e[m*3+t])*u;n[(d+1)*3+2]=0}for(let e=0;e<4;e++)r[d*4+e]=t[h*4+e],r[(d+1)*4+e]=t[h*4+e];f=h,d+=2}for(let t=0;t<3;t++)n[d*3+t]=e[(i-1)*3+t];for(let e=0;e<4;e++)r[d*4+e]=t[(i-1)*4+e]}},Xt=class e{constructor(e,t={}){this.gl=e,this.positions=new Float32Array(512*3),this.positions2=new Float32Array(512*3),this.oldPositions=new Float32Array(512*3),this.oldPositions2=new Float32Array(512*3),this.smoothedPositions=new Float32Array((512*2-1)*3),this.smoothedPositions2=new Float32Array((512*2-1)*3),this.color=[0,0,0,1],this.texsizeX=t.texsizeX,this.texsizeY=t.texsizeY,this.aspectx=t.aspectx,this.aspecty=t.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.createShader(),this.vertexBuf=this.gl.createBuffer()}updateGlobals(e){this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty}createShader(){this.shaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
      in vec3 aPos;
      uniform vec2 thickOffset;
      void main(void) {
        gl_Position = vec4(aPos + vec3(thickOffset, 0.0), 1.0);
      }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      out vec4 fragColor;
      uniform vec4 u_color;
      void main(void) {
        fragColor = u_color;
      }
      `.trim()),this.gl.compileShader(t),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,t),this.gl.linkProgram(this.shaderProgram),this.aPosLoc=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.colorLoc=this.gl.getUniformLocation(this.shaderProgram,`u_color`),this.thickOffsetLoc=this.gl.getUniformLocation(this.shaderProgram,`thickOffset`)}static processWaveform(e,t){let n=[],r=t.wave_scale/128,i=t.wave_smoothing,a=r*(1-i);n.push(e[0]*r);for(let t=1;t<e.length;t++)n.push(e[t]*a+n[t-1]*i);return n}generateWaveform(t,n,r,i,a){let o=a.wave_a,s=(a.bass+a.mid+a.treb)/3;if(s>-.01&&o>.001&&r.length>0){let c=e.processWaveform(r,a),l=e.processWaveform(i,a),u=Math.floor(a.wave_mode)%8,d=Math.floor(a.old_wave_mode)%8,f=a.wave_x*2-1,p=a.wave_y*2-1;this.numVert=0,this.oldNumVert=0;let m=t&&u!==d?2:1;for(let e=0;e<m;e++){let t=e===0?u:d,n=a.wave_mystery;(t===0||t===1||t===4)&&(n<-1||n>1)&&(n=n*.5+.5,n-=Math.floor(n),n=Math.abs(n),n=n*2-1);let r,i,m;if(e===0?(i=this.positions,m=this.positions2):(i=this.oldPositions,m=this.oldPositions2),o=a.wave_a,t===0){if(a.modwavealphabyvolume>0){let e=a.modwavealphaend-a.modwavealphastart;o*=(s-a.modwavealphastart)/e}o=Math.clamp(o,0,1),r=Math.floor(c.length/2)+1;let e=1/(r-1),t=Math.floor((c.length-r)/2);for(let o=0;o<r-1;o++){let s=.5+.4*l[o+t]+n,c=o*e*2*Math.PI+a.time*.2;if(o<r/10){let e=o/(r*.1);e=.5-.5*Math.cos(e*Math.PI);let i=.5+.4*l[o+r+t]+n;s=(1-e)*i+s*e}i[o*3+0]=s*Math.cos(c)*this.aspecty+f,i[o*3+1]=s*Math.sin(c)*this.aspectx+p,i[o*3+2]=0}i[(r-1)*3+0]=i[0],i[(r-1)*3+1]=i[1],i[(r-1)*3+2]=0}else if(t===1){if(o*=1.25,a.modwavealphabyvolume>0){let e=a.modwavealphaend-a.modwavealphastart;o*=(s-a.modwavealphastart)/e}o=Math.clamp(o,0,1),r=Math.floor(c.length/2);for(let e=0;e<r;e++){let t=.53+.43*l[e]+n,r=c[e+32]*.5*Math.PI+a.time*2.3;i[e*3+0]=t*Math.cos(r)*this.aspecty+f,i[e*3+1]=t*Math.sin(r)*this.aspectx+p,i[e*3+2]=0}}else if(t===2){if(this.texsizeX<1024?o*=.09:this.texsizeX>=1024&&this.texsizeX<2048?o*=.11:o*=.13,a.modwavealphabyvolume>0){let e=a.modwavealphaend-a.modwavealphastart;o*=(s-a.modwavealphastart)/e}o=Math.clamp(o,0,1),r=c.length;for(let e=0;e<c.length;e++)i[e*3+0]=l[e]*this.aspecty+f,i[e*3+1]=c[(e+32)%c.length]*this.aspectx+p,i[e*3+2]=0}else if(t===3){if(this.texsizeX<1024?o*=.15:this.texsizeX>=1024&&this.texsizeX<2048?o*=.22:o*=.33,o*=1.3,o*=a.treb*a.treb,a.modwavealphabyvolume>0){let e=a.modwavealphaend-a.modwavealphastart;o*=(s-a.modwavealphastart)/e}o=Math.clamp(o,0,1),r=c.length;for(let e=0;e<c.length;e++)i[e*3+0]=l[e]*this.aspecty+f,i[e*3+1]=c[(e+32)%c.length]*this.aspectx+p,i[e*3+2]=0}else if(t===4){if(a.modwavealphabyvolume>0){let e=a.modwavealphaend-a.modwavealphastart;o*=(s-a.modwavealphastart)/e}o=Math.clamp(o,0,1),r=c.length,r>this.texsizeX/3&&(r=Math.floor(this.texsizeX/3));let e=1/r,t=Math.floor((c.length-r)/2),u=.45+.5*(n*.5+.5),d=1-u;for(let n=0;n<r;n++){let r=2*n*e+(f-1)+l[(n+25+t)%c.length]*.44,a=c[n+t]*.47+p;n>1&&(r=r*d+u*(i[(n-1)*3+0]*2-i[(n-2)*3+0]),a=a*d+u*(i[(n-1)*3+1]*2-i[(n-2)*3+1])),i[n*3+0]=r,i[n*3+1]=a,i[n*3+2]=0}}else if(t===5){if(this.texsizeX<1024?o*=.09:this.texsizeX>=1024&&this.texsizeX<2048?o*=.11:o*=.13,a.modwavealphabyvolume>0){let e=a.modwavealphaend-a.modwavealphastart;o*=(s-a.modwavealphastart)/e}o=Math.clamp(o,0,1);let e=Math.cos(a.time*.3),t=Math.sin(a.time*.3);r=c.length;for(let n=0;n<c.length;n++){let r=(n+32)%c.length,a=l[n]*c[r]+c[n]*l[r],o=l[n]*l[n]-c[r]*c[r];i[n*3+0]=(a*e-o*t)*(this.aspecty+f),i[n*3+1]=(a*t+o*e)*(this.aspectx+p),i[n*3+2]=0}}else if(t===6||t===7){if(a.modwavealphabyvolume>0){let e=a.modwavealphaend-a.modwavealphastart;o*=(s-a.modwavealphastart)/e}o=Math.clamp(o,0,1),r=Math.floor(c.length/2),r>this.texsizeX/3&&(r=Math.floor(this.texsizeX/3));let e=Math.floor((c.length-r)/2),u=Math.PI*.5*n,d=Math.cos(u),h=Math.sin(u),g=[f*Math.cos(u+Math.PI*.5)-d*3,f*Math.cos(u+Math.PI*.5)+d*3],v=[f*Math.sin(u+Math.PI*.5)-h*3,f*Math.sin(u+Math.PI*.5)+h*3];for(let e=0;e<2;e++)for(let t=0;t<4;t++){let n,r=!1;switch(t){case 0:g[e]>1.1&&(n=(1.1-g[1-e])/(g[e]-g[1-e]),r=!0);break;case 1:g[e]<-1.1&&(n=(-1.1-g[1-e])/(g[e]-g[1-e]),r=!0);break;case 2:v[e]>1.1&&(n=(1.1-v[1-e])/(v[e]-v[1-e]),r=!0);break;case 3:v[e]<-1.1&&(n=(-1.1-v[1-e])/(v[e]-v[1-e]),r=!0);break}if(r){let t=g[e]-g[1-e],r=v[e]-v[1-e];g[e]=g[1-e]+t*n,v[e]=v[1-e]+r*n}}d=(g[1]-g[0])/r,h=(v[1]-v[0])/r;let y=Math.atan2(h,d),b=Math.cos(y+Math.PI*.5),x=Math.sin(y+Math.PI*.5);if(t===6)for(let t=0;t<r;t++){let n=c[t+e];i[t*3+0]=g[0]+d*t+b*.25*n,i[t*3+1]=v[0]+h*t+x*.25*n,i[t*3+2]=0}else if(t===7){let t=(p*.5+.5)**2;for(let n=0;n<r;n++){let r=c[n+e];i[n*3+0]=g[0]+d*n+b*(.25*r+t),i[n*3+1]=v[0]+h*n+x*(.25*r+t),i[n*3+2]=0}for(let n=0;n<r;n++){let r=l[n+e];m[n*3+0]=g[0]+d*n+b*(.25*r-t),m[n*3+1]=v[0]+h*n+x*(.25*r-t),m[n*3+2]=0}}}e===0?(this.positions=i,this.positions2=m,this.numVert=r,this.alpha=o):(this.oldPositions=i,this.oldPositions2=m,this.oldNumVert=r,this.oldAlpha=o)}let h=.5-.5*Math.cos(n*Math.PI),g=1-h;this.oldNumVert>0&&(o=h*this.alpha+g*this.oldAlpha);let v=Math.clamp(a.wave_r,0,1),y=Math.clamp(a.wave_g,0,1),b=Math.clamp(a.wave_b,0,1);if(a.wave_brighten!==0){let e=Math.max(v,y,b);e>.01&&(v/=e,y/=e,b/=e)}if(this.color=[v,y,b,o],this.oldNumVert>0)if(u===7){let e=(this.oldNumVert-1)/(this.numVert*2);for(let t=0;t<this.numVert;t++){let n=t*e,r=Math.floor(n),i=n-r,a=this.oldPositions[r*3+0]*(1-i)+this.oldPositions[(r+1)*3+0]*i,o=this.oldPositions[r*3+1]*(1-i)+this.oldPositions[(r+1)*3+1]*i;this.positions[t*3+0]=this.positions[t*3+0]*h+a*g,this.positions[t*3+1]=this.positions[t*3+1]*h+o*g,this.positions[t*3+2]=0}for(let t=0;t<this.numVert;t++){let n=(t+this.numVert)*e,r=Math.floor(n),i=n-r,a=this.oldPositions[r*3+0]*(1-i)+this.oldPositions[(r+1)*3+0]*i,o=this.oldPositions[r*3+1]*(1-i)+this.oldPositions[(r+1)*3+1]*i;this.positions2[t*3+0]=this.positions2[t*3+0]*h+a*g,this.positions2[t*3+1]=this.positions2[t*3+1]*h+o*g,this.positions2[t*3+2]=0}}else if(d===7){let e=this.numVert/2,t=(this.oldNumVert-1)/e;for(let n=0;n<e;n++){let e=n*t,r=Math.floor(e),i=e-r,a=this.oldPositions[r*3+0]*(1-i)+this.oldPositions[(r+1)*3+0]*i,o=this.oldPositions[r*3+1]*(1-i)+this.oldPositions[(r+1)*3+1]*i;this.positions[n*3+0]=this.positions[n*3+0]*h+a*g,this.positions[n*3+1]=this.positions[n*3+1]*h+o*g,this.positions[n*3+2]=0}for(let n=0;n<e;n++){let r=n*t,i=Math.floor(r),a=r-i,o=this.oldPositions2[i*3+0]*(1-a)+this.oldPositions2[(i+1)*3+0]*a,s=this.oldPositions2[i*3+1]*(1-a)+this.oldPositions2[(i+1)*3+1]*a;this.positions2[n*3+0]=this.positions[(n+e)*3+0]*h+o*g,this.positions2[n*3+1]=this.positions[(n+e)*3+1]*h+s*g,this.positions2[n*3+2]=0}}else{let e=(this.oldNumVert-1)/this.numVert;for(let t=0;t<this.numVert;t++){let n=t*e,r=Math.floor(n),i=n-r,a=this.oldPositions[r*3+0]*(1-i)+this.oldPositions[(r+1)*3+0]*i,o=this.oldPositions[r*3+1]*(1-i)+this.oldPositions[(r+1)*3+1]*i;this.positions[t*3+0]=this.positions[t*3+0]*h+a*g,this.positions[t*3+1]=this.positions[t*3+1]*h+o*g,this.positions[t*3+2]=0}}for(let e=0;e<this.numVert;e++)this.positions[e*3+1]=-this.positions[e*3+1];if(this.smoothedNumVert=this.numVert*2-1,Yt.smoothWave(this.positions,this.smoothedPositions,this.numVert),u===7||d===7){for(let e=0;e<this.numVert;e++)this.positions2[e*3+1]=-this.positions2[e*3+1];Yt.smoothWave(this.positions2,this.smoothedPositions2,this.numVert)}return!0}return!1}drawBasicWaveform(e,t,n,r,i){if(this.generateWaveform(e,t,n,r,i)){this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.smoothedPositions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aPosLoc,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLoc),this.gl.uniform4fv(this.colorLoc,this.color);let e=1;(i.wave_thick!==0||i.wave_dots!==0)&&(e=4),i.additivewave===0?this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA):this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE);let t=i.wave_dots===0?this.gl.LINE_STRIP:this.gl.POINTS;for(let n=0;n<e;n++)n===0?this.gl.uniform2fv(this.thickOffsetLoc,[0,0]):n===1?this.gl.uniform2fv(this.thickOffsetLoc,[2/this.texsizeX,0]):n===2?this.gl.uniform2fv(this.thickOffsetLoc,[0,2/this.texsizeY]):n===3&&this.gl.uniform2fv(this.thickOffsetLoc,[2/this.texsizeX,2/this.texsizeY]),this.gl.drawArrays(t,0,this.smoothedNumVert);if(Math.floor(i.wave_mode)%8==7){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.smoothedPositions2,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aPosLoc,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLoc);for(let n=0;n<e;n++)n===0?this.gl.uniform2fv(this.thickOffsetLoc,[0,0]):n===1?this.gl.uniform2fv(this.thickOffsetLoc,[2/this.texsizeX,0]):n===2?this.gl.uniform2fv(this.thickOffsetLoc,[0,2/this.texsizeY]):n===3&&this.gl.uniform2fv(this.thickOffsetLoc,[2/this.texsizeX,2/this.texsizeY]),this.gl.drawArrays(t,0,this.smoothedNumVert)}}}},Zt=class{constructor(e,t,n){this.index=e,this.gl=t,this.pointsData=[new Float32Array(512),new Float32Array(512)],this.positions=new Float32Array(512*3),this.colors=new Float32Array(512*4),this.smoothedPositions=new Float32Array((512*2-1)*3),this.smoothedColors=new Float32Array((512*2-1)*4),this.texsizeX=n.texsizeX,this.texsizeY=n.texsizeY,this.mesh_width=n.mesh_width,this.mesh_height=n.mesh_height,this.aspectx=n.aspectx,this.aspecty=n.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.positionVertexBuf=this.gl.createBuffer(),this.colorVertexBuf=this.gl.createBuffer(),this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.createShader()}updateGlobals(e){this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.mesh_width=e.mesh_width,this.mesh_height=e.mesh_height,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty}createShader(){this.shaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
      uniform float uSize;
      uniform vec2 thickOffset;
      in vec3 aPos;
      in vec4 aColor;
      out vec4 vColor;
      void main(void) {
        vColor = aColor;
        gl_PointSize = uSize;
        gl_Position = vec4(aPos + vec3(thickOffset, 0.0), 1.0);
      }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      in vec4 vColor;
      out vec4 fragColor;
      void main(void) {
        fragColor = vColor;
      }
      `.trim()),this.gl.compileShader(t),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,t),this.gl.linkProgram(this.shaderProgram),this.aPosLocation=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.aColorLocation=this.gl.getAttribLocation(this.shaderProgram,`aColor`),this.sizeLoc=this.gl.getUniformLocation(this.shaderProgram,`uSize`),this.thickOffsetLoc=this.gl.getUniformLocation(this.shaderProgram,`thickOffset`)}generateWaveform(e,t,n,r,i,a,o,s){if(o.baseVals.enabled!==0&&e.length>0){let c;if(a.preset.useWASM)c=a.runWaveFrameEquations(this.index,i);else{let e=Object.assign({},a.mdVSWaves[this.index],a.mdVSFrameMapWaves[this.index],a.mdVSQAfterFrame,a.mdVSTWaveInits[this.index],i);c=a.runWaveFrameEquations(this.index,e)}Object.prototype.hasOwnProperty.call(c,`samples`)?this.samples=c.samples:this.samples=512,this.samples>512&&(this.samples=512),this.samples=Math.floor(this.samples);let l=a.preset.waves[this.index].baseVals,u=Math.floor(c.sep),d=c.scaling,f=c.spectrum,p=c.smoothing,m=l.usedots,h=c.r,g=c.g,v=c.b,y=c.a,b=a.preset.baseVals.wave_scale;if(this.samples-=u,this.samples>=2||m!==0&&this.samples>=1){let i=f!==0,x=(i?.15:.004)*d*b,S=i?n:e,C=i?r:t,w=i?0:Math.floor((512-this.samples)/2-u/2),T=i?0:Math.floor((512-this.samples)/2+u/2),E=i?(512-u)/this.samples:1,D=(p*.98)**.5,O=1-D;this.pointsData[0][0]=S[w],this.pointsData[1][0]=C[T];for(let e=1;e<this.samples;e++){let t=S[Math.floor(e*E+w)],n=C[Math.floor(e*E+T)];this.pointsData[0][e]=t*O+this.pointsData[0][e-1]*D,this.pointsData[1][e]=n*O+this.pointsData[1][e-1]*D}for(let e=this.samples-2;e>=0;e--)this.pointsData[0][e]=this.pointsData[0][e]*O+this.pointsData[0][e+1]*D,this.pointsData[1][e]=this.pointsData[1][e]*O+this.pointsData[1][e+1]*D;for(let e=0;e<this.samples;e++)this.pointsData[0][e]*=x,this.pointsData[1][e]*=x;if(a.preset.useWASM){let e=a.preset.globalPools[`wavePerFrame${this.index}`];for(let t=0;t<this.samples;t++){let n=this.pointsData[0][t],r=this.pointsData[1][t];e.sample.value=t/(this.samples-1),e.value1.value=n,e.value2.value=r,e.x.value=.5+n,e.y.value=.5+r,e.r.value=h,e.g.value=g,e.b.value=v,e.a.value=y,o.point_eqs&&a.preset.waves[this.index].point_eqs();let i=(e.x.value*2-1)*this.invAspectx,c=(e.y.value*-2+1)*this.invAspecty,l=e.r.value,u=e.g.value,d=e.b.value,f=e.a.value;this.positions[t*3+0]=i,this.positions[t*3+1]=c,this.positions[t*3+2]=0,this.colors[t*4+0]=l,this.colors[t*4+1]=u,this.colors[t*4+2]=d,this.colors[t*4+3]=f*s}}else for(let e=0;e<this.samples;e++){let t=this.pointsData[0][e],n=this.pointsData[1][e];c.sample=e/(this.samples-1),c.value1=t,c.value2=n,c.x=.5+t,c.y=.5+n,c.r=h,c.g=g,c.b=v,c.a=y,o.point_eqs!==``&&(c=a.runWavePointEquations(this.index,c));let r=(c.x*2-1)*this.invAspectx,i=(c.y*-2+1)*this.invAspecty,l=c.r,u=c.g,d=c.b,f=c.a;this.positions[e*3+0]=r,this.positions[e*3+1]=i,this.positions[e*3+2]=0,this.colors[e*4+0]=l,this.colors[e*4+1]=u,this.colors[e*4+2]=d,this.colors[e*4+3]=f*s}if(a.preset.useWASM)c.usedots=m,c.thick=l.thick,c.additive=l.additive;else{let e=a.mdVSUserKeysWaves[this.index],t=U.pick(c,e);a.mdVSFrameMapWaves[this.index]=t}return this.mdVSWaveFrame=c,m===0&&Yt.smoothWaveAndColor(this.positions,this.colors,this.smoothedPositions,this.smoothedColors,this.samples),!0}}return!1}drawCustomWaveform(e,t,n,r,i,a,o,s){if(s&&this.generateWaveform(t,n,r,i,a,o,s,e)){this.gl.useProgram(this.shaderProgram);let e=this.mdVSWaveFrame.usedots!==0,t=this.mdVSWaveFrame.thick!==0,n=this.mdVSWaveFrame.additive!==0,r,i,a;e?(r=this.positions,i=this.colors,a=this.samples):(r=this.smoothedPositions,i=this.smoothedColors,a=this.samples*2-1),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,r,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aPosLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,i,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aColorLocation,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aColorLocation);let o=1;e?t?this.gl.uniform1f(this.sizeLoc,2+ +(this.texsizeX>=1024)):this.gl.uniform1f(this.sizeLoc,1+ +(this.texsizeX>=1024)):(this.gl.uniform1f(this.sizeLoc,1),t&&(o=4)),n?this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE):this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);let s=e?this.gl.POINTS:this.gl.LINE_STRIP;for(let e=0;e<o;e++)e===0?this.gl.uniform2fv(this.thickOffsetLoc,[0,0]):e===1?this.gl.uniform2fv(this.thickOffsetLoc,[2/this.texsizeX,0]):e===2?this.gl.uniform2fv(this.thickOffsetLoc,[0,2/this.texsizeY]):e===3&&this.gl.uniform2fv(this.thickOffsetLoc,[2/this.texsizeX,2/this.texsizeY]),this.gl.drawArrays(s,0,a)}}},Qt=class{constructor(e,t,n){this.index=e,this.gl=t,this.positions=new Float32Array(309),this.colors=new Float32Array(412),this.uvs=new Float32Array(206),this.borderPositions=new Float32Array(306),this.texsizeX=n.texsizeX,this.texsizeY=n.texsizeY,this.mesh_width=n.mesh_width,this.mesh_height=n.mesh_height,this.aspectx=n.aspectx,this.aspecty=n.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.positionVertexBuf=this.gl.createBuffer(),this.colorVertexBuf=this.gl.createBuffer(),this.uvVertexBuf=this.gl.createBuffer(),this.borderPositionVertexBuf=this.gl.createBuffer(),this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.createShader(),this.createBorderShader(),this.mainSampler=this.gl.createSampler(),t.samplerParameteri(this.mainSampler,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.samplerParameteri(this.mainSampler,t.TEXTURE_MAG_FILTER,t.LINEAR),t.samplerParameteri(this.mainSampler,t.TEXTURE_WRAP_S,t.REPEAT),t.samplerParameteri(this.mainSampler,t.TEXTURE_WRAP_T,t.REPEAT)}updateGlobals(e){this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.mesh_width=e.mesh_width,this.mesh_height=e.mesh_height,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty}createShader(){this.shaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
      in vec3 aPos;
      in vec4 aColor;
      in vec2 aUv;
      out vec4 vColor;
      out vec2 vUv;
      void main(void) {
        vColor = aColor;
        vUv = aUv;
        gl_Position = vec4(aPos, 1.0);
      }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      uniform sampler2D uTexture;
      uniform float uTextured;
      in vec4 vColor;
      in vec2 vUv;
      out vec4 fragColor;
      void main(void) {
        if (uTextured != 0.0) {
          fragColor = texture(uTexture, vUv) * vColor;
        } else {
          fragColor = vColor;
        }
      }
      `.trim()),this.gl.compileShader(t),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,t),this.gl.linkProgram(this.shaderProgram),this.aPosLocation=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.aColorLocation=this.gl.getAttribLocation(this.shaderProgram,`aColor`),this.aUvLocation=this.gl.getAttribLocation(this.shaderProgram,`aUv`),this.texturedLoc=this.gl.getUniformLocation(this.shaderProgram,`uTextured`),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,`uTexture`)}createBorderShader(){this.borderShaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
      in vec3 aBorderPos;
      uniform vec2 thickOffset;
      void main(void) {
        gl_Position = vec4(aBorderPos +
                            vec3(thickOffset, 0.0), 1.0);
      }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      out vec4 fragColor;
      uniform vec4 uBorderColor;
      void main(void) {
        fragColor = uBorderColor;
      }
      `.trim()),this.gl.compileShader(t),this.gl.attachShader(this.borderShaderProgram,e),this.gl.attachShader(this.borderShaderProgram,t),this.gl.linkProgram(this.borderShaderProgram),this.aBorderPosLoc=this.gl.getAttribLocation(this.borderShaderProgram,`aBorderPos`),this.uBorderColorLoc=this.gl.getUniformLocation(this.borderShaderProgram,`uBorderColor`),this.thickOffsetLoc=this.gl.getUniformLocation(this.shaderProgram,`thickOffset`)}drawCustomShape(e,t,n,r,i){if(r.baseVals.enabled!==0)if(n.preset.useWASM){this.setupShapeBuffers(n.preset.globalPools.perFrame.wrap.value);let r=n.preset.shapes[this.index].baseVals,a=n.preset.globalPools[`shapePerFrame${this.index}`];U.setWasm(a,t,n.globalKeys),n.preset.shapes[this.index].frame_eqs||n.preset.restore_qs(),U.setWasm(a,n.mdVSTShapeInits[this.index],n.ts),n.preset.save_ts(),a.x.value=r.x,a.y.value=r.y,a.rad.value=r.rad,a.ang.value=r.ang,a.r.value=r.r,a.g.value=r.g,a.b.value=r.b,a.a.value=r.a,a.r2.value=r.r2,a.g2.value=r.g2,a.b2.value=r.b2,a.a2.value=r.a2,a.border_r.value=r.border_r,a.border_g.value=r.border_g,a.border_b.value=r.border_b,a.border_a.value=r.border_a,a.thickoutline.value=r.thickoutline,a.textured.value=r.textured,a.tex_zoom.value=r.tex_zoom,a.tex_ang.value=r.tex_ang,a.additive.value=r.additive,n.preset.shapes[this.index].frame_eqs_save();let o=Math.clamp(r.num_inst,1,1024);for(let t=0;t<o;t++){a.instance.value=t,n.preset.shapes[this.index].frame_eqs&&(n.preset.shapes[this.index].frame_eqs_restore(),n.preset.restore_qs(),n.preset.restore_ts(),n.preset.shapes[this.index].frame_eqs());let r=a.sides.value;r=Math.clamp(r,3,100),r=Math.floor(r);let o=a.rad.value,s=a.ang.value,c=a.x.value*2-1,l=a.y.value*-2+1,u=a.r.value,d=a.g.value,f=a.b.value,p=a.a.value,m=a.r2.value,h=a.g2.value,g=a.b2.value,v=a.a2.value,y=a.border_r.value,b=a.border_g.value,x=a.border_b.value,S=a.border_a.value;this.borderColor=[y,b,x,S*e];let C=a.thickoutline.value,w=a.textured.value,T=a.tex_zoom.value,E=a.tex_ang.value,D=a.additive.value,O=this.borderColor[3]>0,k=Math.abs(w)>=1,A=Math.abs(C)>=1,j=Math.abs(D)>=1;this.positions[0]=c,this.positions[1]=l,this.positions[2]=0,this.colors[0]=u,this.colors[1]=d,this.colors[2]=f,this.colors[3]=p*e,k&&(this.uvs[0]=.5,this.uvs[1]=.5);let M=Math.PI*.25;for(let t=1;t<=r+1;t++){let n=(t-1)/r*2*Math.PI,i=n+s+M;if(this.positions[t*3+0]=c+o*Math.cos(i)*this.aspecty,this.positions[t*3+1]=l+o*Math.sin(i),this.positions[t*3+2]=0,this.colors[t*4+0]=m,this.colors[t*4+1]=h,this.colors[t*4+2]=g,this.colors[t*4+3]=v*e,k){let e=n+E+M;this.uvs[t*2+0]=.5+.5*Math.cos(e)/T*this.aspecty,this.uvs[t*2+1]=.5+.5*Math.sin(e)/T}O&&(this.borderPositions[(t-1)*3+0]=this.positions[t*3+0],this.borderPositions[(t-1)*3+1]=this.positions[t*3+1],this.borderPositions[(t-1)*3+2]=this.positions[t*3+2])}this.drawCustomShapeInstance(i,r,k,O,A,j)}}else{this.setupShapeBuffers(n.mdVSFrame.wrap);let r=Object.assign({},n.mdVSShapes[this.index],n.mdVSFrameMapShapes[this.index],t);n.preset.shapes[this.index].frame_eqs_str===``&&(r=Object.assign(r,n.mdVSQAfterFrame,n.mdVSTShapeInits[this.index]));let a=n.preset.shapes[this.index].baseVals,o=Math.clamp(a.num_inst,1,1024);for(let t=0;t<o;t++){r.instance=t,r.x=a.x,r.y=a.y,r.rad=a.rad,r.ang=a.ang,r.r=a.r,r.g=a.g,r.b=a.b,r.a=a.a,r.r2=a.r2,r.g2=a.g2,r.b2=a.b2,r.a2=a.a2,r.border_r=a.border_r,r.border_g=a.border_g,r.border_b=a.border_b,r.border_a=a.border_a,r.thickoutline=a.thickoutline,r.textured=a.textured,r.tex_zoom=a.tex_zoom,r.tex_ang=a.tex_ang,r.additive=a.additive;let o;n.preset.shapes[this.index].frame_eqs_str===``?o=r:(r=Object.assign(r,n.mdVSQAfterFrame,n.mdVSTShapeInits[this.index]),o=n.runShapeFrameEquations(this.index,r));let s=o.sides;s=Math.clamp(s,3,100),s=Math.floor(s);let c=o.rad,l=o.ang,u=o.x*2-1,d=o.y*-2+1,f=o.r,p=o.g,m=o.b,h=o.a,g=o.r2,v=o.g2,y=o.b2,b=o.a2,x=o.border_r,S=o.border_g,C=o.border_b,w=o.border_a;this.borderColor=[x,S,C,w*e];let T=o.thickoutline,E=o.textured,D=o.tex_zoom,O=o.tex_ang,k=o.additive,A=this.borderColor[3]>0,j=Math.abs(E)>=1,M=Math.abs(T)>=1,ee=Math.abs(k)>=1;this.positions[0]=u,this.positions[1]=d,this.positions[2]=0,this.colors[0]=f,this.colors[1]=p,this.colors[2]=m,this.colors[3]=h*e,j&&(this.uvs[0]=.5,this.uvs[1]=.5);let N=Math.PI*.25;for(let t=1;t<=s+1;t++){let n=(t-1)/s*2*Math.PI,r=n+l+N;if(this.positions[t*3+0]=u+c*Math.cos(r)*this.aspecty,this.positions[t*3+1]=d+c*Math.sin(r),this.positions[t*3+2]=0,this.colors[t*4+0]=g,this.colors[t*4+1]=v,this.colors[t*4+2]=y,this.colors[t*4+3]=b*e,j){let e=n+O+N;this.uvs[t*2+0]=.5+.5*Math.cos(e)/D*this.aspecty,this.uvs[t*2+1]=.5+.5*Math.sin(e)/D}A&&(this.borderPositions[(t-1)*3+0]=this.positions[t*3+0],this.borderPositions[(t-1)*3+1]=this.positions[t*3+1],this.borderPositions[(t-1)*3+2]=this.positions[t*3+2])}this.mdVSShapeFrame=o,this.drawCustomShapeInstance(i,s,j,A,M,ee)}let s=n.mdVSUserKeysShapes[this.index],c=U.pick(this.mdVSShapeFrame,s);n.mdVSFrameMapShapes[this.index]=c}}setupShapeBuffers(e){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.DYNAMIC_DRAW),this.gl.vertexAttribPointer(this.aPosLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.colors,this.gl.DYNAMIC_DRAW),this.gl.vertexAttribPointer(this.aColorLocation,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aColorLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.uvVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.uvs,this.gl.DYNAMIC_DRAW),this.gl.vertexAttribPointer(this.aUvLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aUvLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.borderPositionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.borderPositions,this.gl.DYNAMIC_DRAW),this.gl.vertexAttribPointer(this.aBorderPosLoc,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aBorderPosLoc);let t=e===0?this.gl.CLAMP_TO_EDGE:this.gl.REPEAT;this.gl.samplerParameteri(this.mainSampler,this.gl.TEXTURE_WRAP_S,t),this.gl.samplerParameteri(this.mainSampler,this.gl.TEXTURE_WRAP_T,t)}drawCustomShapeInstance(e,t,n,r,i,a){if(this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.positions,0,(t+2)*3),this.gl.vertexAttribPointer(this.aPosLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorVertexBuf),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.colors,0,(t+2)*4),this.gl.vertexAttribPointer(this.aColorLocation,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aColorLocation),n&&(this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.uvVertexBuf),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.uvs,0,(t+2)*2),this.gl.vertexAttribPointer(this.aUvLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aUvLocation)),this.gl.uniform1f(this.texturedLoc,+!!n),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.bindSampler(0,this.mainSampler),this.gl.uniform1i(this.textureLoc,0),a?this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE):this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLE_FAN,0,t+2),r){this.gl.useProgram(this.borderShaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.borderPositionVertexBuf),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.borderPositions,0,(t+1)*3),this.gl.vertexAttribPointer(this.aBorderPosLoc,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aBorderPosLoc),this.gl.uniform4fv(this.uBorderColorLoc,this.borderColor);let e=i?4:1;for(let n=0;n<e;n++)n===0?this.gl.uniform2fv(this.thickOffsetLoc,[0,0]):n===1?this.gl.uniform2fv(this.thickOffsetLoc,[2/this.texsizeX,0]):n===2?this.gl.uniform2fv(this.thickOffsetLoc,[0,2/this.texsizeY]):n===3&&this.gl.uniform2fv(this.thickOffsetLoc,[2/this.texsizeX,2/this.texsizeY]),this.gl.drawArrays(this.gl.LINE_STRIP,0,t+1)}}},$t=class{constructor(e,t={}){this.gl=e,this.positions=new Float32Array(72),this.aspectx=t.aspectx,this.aspecty=t.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.createShader(),this.vertexBuf=this.gl.createBuffer()}updateGlobals(e){this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty}createShader(){this.shaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
      in vec3 aPos;
      void main(void) {
        gl_Position = vec4(aPos, 1.0);
      }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      out vec4 fragColor;
      uniform vec4 u_color;
      void main(void) {
        fragColor = u_color;
      }
      `.trim()),this.gl.compileShader(t),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,t),this.gl.linkProgram(this.shaderProgram),this.aPosLoc=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.colorLoc=this.gl.getUniformLocation(this.shaderProgram,`u_color`)}addTriangle(e,t,n,r){this.positions[e+0]=t[0],this.positions[e+1]=t[1],this.positions[e+2]=t[2],this.positions[e+3]=n[0],this.positions[e+4]=n[1],this.positions[e+5]=n[2],this.positions[e+6]=r[0],this.positions[e+7]=r[1],this.positions[e+8]=r[2]}generateBorder(e,t,n){if(t>0&&e[3]>0){let e=n/2,r=t/2+e,i=e*2,a=e*2,o=r*2,s=r*2,c=[-1+i,-1+s,0],l=[-1+i,1-s,0],u=[-1+o,1-s,0],d=[-1+o,-1+s,0];return this.addTriangle(0,d,l,c),this.addTriangle(9,d,u,l),c=[1-i,-1+s,0],l=[1-i,1-s,0],u=[1-o,1-s,0],d=[1-o,-1+s,0],this.addTriangle(18,c,l,d),this.addTriangle(27,l,u,d),c=[-1+i,-1+a,0],l=[-1+i,s-1,0],u=[1-i,s-1,0],d=[1-i,-1+a,0],this.addTriangle(36,d,l,c),this.addTriangle(45,d,u,l),c=[-1+i,1-a,0],l=[-1+i,1-s,0],u=[1-i,1-s,0],d=[1-i,1-a,0],this.addTriangle(54,c,l,d),this.addTriangle(63,l,u,d),!0}return!1}drawBorder(e,t,n){this.generateBorder(e,t,n)&&(this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aPosLoc,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLoc),this.gl.uniform4fv(this.colorLoc,e),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLES,0,this.positions.length/3))}},en=class{constructor(e,t){this.gl=e,this.aspectx=t.aspectx,this.aspecty=t.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.generatePositions(),this.colors=new Float32Array([0,0,0,3/32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),this.positionVertexBuf=this.gl.createBuffer(),this.colorVertexBuf=this.gl.createBuffer(),this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.createShader()}updateGlobals(e){this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.generatePositions()}generatePositions(){let e=.05;this.positions=new Float32Array([0,0,0,-.05*this.aspecty,0,0,0,-.05,0,e*this.aspecty,0,0,0,e,0,-.05*this.aspecty,0,0])}createShader(){this.shaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
      in vec3 aPos;
      in vec4 aColor;
      out vec4 vColor;
      void main(void) {
        vColor = aColor;
        gl_Position = vec4(aPos, 1.0);
      }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      in vec4 vColor;
      out vec4 fragColor;
      void main(void) {
        fragColor = vColor;
      }
      `.trim()),this.gl.compileShader(t),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,t),this.gl.linkProgram(this.shaderProgram),this.aPosLocation=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.aColorLocation=this.gl.getAttribLocation(this.shaderProgram,`aColor`)}drawDarkenCenter(e){e.darken_center!==0&&(this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aPosLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.colorVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.colors,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aColorLocation,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aColorLocation),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLE_FAN,0,this.positions.length/3))}},tn=class{constructor(e,t){this.gl=e,this.maxX=64,this.maxY=48,this.positions=new Float32Array(this.maxX*this.maxY*2*3),this.texsizeX=t.texsizeX,this.texsizeY=t.texsizeY,this.mesh_width=t.mesh_width,this.mesh_height=t.mesh_height,this.positionVertexBuf=this.gl.createBuffer(),this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.createShader()}updateGlobals(e){this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.mesh_width=e.mesh_width,this.mesh_height=e.mesh_height}createShader(){this.shaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
      in vec3 aPos;
      void main(void) {
        gl_Position = vec4(aPos, 1.0);
      }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      out vec4 fragColor;
      uniform vec4 u_color;
      void main(void) {
        fragColor = u_color;
      }
      `.trim()),this.gl.compileShader(t),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,t),this.gl.linkProgram(this.shaderProgram),this.aPosLoc=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.colorLoc=this.gl.getUniformLocation(this.shaderProgram,`u_color`)}getMotionDir(e,t,n){let r=Math.floor(n*this.mesh_height),i=n*this.mesh_height-r,a=Math.floor(t*this.mesh_width),o=t*this.mesh_width-a,s=a+1,c=r+1,l=this.mesh_width+1,u,d;return u=e[(r*l+a)*2+0]*(1-o)*(1-i),d=e[(r*l+a)*2+1]*(1-o)*(1-i),u+=e[(r*l+s)*2+0]*o*(1-i),d+=e[(r*l+s)*2+1]*o*(1-i),u+=e[(c*l+a)*2+0]*(1-o)*i,d+=e[(c*l+a)*2+1]*(1-o)*i,u+=e[(c*l+s)*2+0]*o*i,d+=e[(c*l+s)*2+1]*o*i,[u,1-d]}generateMotionVectors(e,t){let n=e.bmotionvectorson===0?0:e.mv_a,r=Math.floor(e.mv_x),i=Math.floor(e.mv_y);if(n>.001&&r>0&&i>0){let a=e.mv_x-r,o=e.mv_y-i;r>this.maxX&&(r=this.maxX,a=0),i>this.maxY&&(i=this.maxY,o=0);let s=e.mv_dx,c=e.mv_dy,l=e.mv_l,u=1/this.texsizeX;this.numVecVerts=0;for(let e=0;e<i;e++){let n=(e+.25)/(i+o+.25-1);if(n-=c,n>1e-4&&n<.9999)for(let e=0;e<r;e++){let i=(e+.25)/(r+a+.25-1);if(i+=s,i>1e-4&&i<.9999){let e=this.getMotionDir(t,i,n),r=e[0],a=e[1],o=r-i,s=a-n;o*=l,s*=l;let c=Math.sqrt(o*o+s*s);c<u&&c>1e-8?(c=u/c,o*=c,s*=c):(o=u,o=u),r=i+o,a=n+s;let d=2*i-1,f=2*n-1,p=2*r-1,m=2*a-1;this.positions[this.numVecVerts*3+0]=d,this.positions[this.numVecVerts*3+1]=f,this.positions[this.numVecVerts*3+2]=0,this.positions[(this.numVecVerts+1)*3+0]=p,this.positions[(this.numVecVerts+1)*3+1]=m,this.positions[(this.numVecVerts+1)*3+2]=0,this.numVecVerts+=2}}}if(this.numVecVerts>0)return this.color=[e.mv_r,e.mv_g,e.mv_b,n],!0}return!1}drawMotionVectors(e,t){this.generateMotionVectors(e,t)&&(this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.aPosLoc,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.aPosLoc),this.gl.uniform4fv(this.colorLoc,this.color),this.gl.lineWidth(1),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.LINES,0,this.numVecVerts))}},nn=class{constructor(e,t,n,r={}){this.gl=e,this.noise=t,this.image=n,this.rng=Ut(),this.texsizeX=r.texsizeX,this.texsizeY=r.texsizeY,this.mesh_width=r.mesh_width,this.mesh_height=r.mesh_height,this.aspectx=r.aspectx,this.aspecty=r.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.buildPositions(),this.indexBuf=e.createBuffer(),this.positionVertexBuf=this.gl.createBuffer(),this.warpUvVertexBuf=this.gl.createBuffer(),this.warpColorVertexBuf=this.gl.createBuffer(),this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.createShader(),this.mainSampler=this.gl.createSampler(),this.mainSamplerFW=this.gl.createSampler(),this.mainSamplerFC=this.gl.createSampler(),this.mainSamplerPW=this.gl.createSampler(),this.mainSamplerPC=this.gl.createSampler(),e.samplerParameteri(this.mainSampler,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.samplerParameteri(this.mainSampler,e.TEXTURE_MAG_FILTER,e.LINEAR),e.samplerParameteri(this.mainSampler,e.TEXTURE_WRAP_S,e.REPEAT),e.samplerParameteri(this.mainSampler,e.TEXTURE_WRAP_T,e.REPEAT),e.samplerParameteri(this.mainSamplerFW,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.samplerParameteri(this.mainSamplerFW,e.TEXTURE_MAG_FILTER,e.LINEAR),e.samplerParameteri(this.mainSamplerFW,e.TEXTURE_WRAP_S,e.REPEAT),e.samplerParameteri(this.mainSamplerFW,e.TEXTURE_WRAP_T,e.REPEAT),e.samplerParameteri(this.mainSamplerFC,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.samplerParameteri(this.mainSamplerFC,e.TEXTURE_MAG_FILTER,e.LINEAR),e.samplerParameteri(this.mainSamplerFC,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.samplerParameteri(this.mainSamplerFC,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.samplerParameteri(this.mainSamplerPW,e.TEXTURE_MIN_FILTER,e.NEAREST_MIPMAP_NEAREST),e.samplerParameteri(this.mainSamplerPW,e.TEXTURE_MAG_FILTER,e.NEAREST),e.samplerParameteri(this.mainSamplerPW,e.TEXTURE_WRAP_S,e.REPEAT),e.samplerParameteri(this.mainSamplerPW,e.TEXTURE_WRAP_T,e.REPEAT),e.samplerParameteri(this.mainSamplerPC,e.TEXTURE_MIN_FILTER,e.NEAREST_MIPMAP_NEAREST),e.samplerParameteri(this.mainSamplerPC,e.TEXTURE_MAG_FILTER,e.NEAREST),e.samplerParameteri(this.mainSamplerPC,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.samplerParameteri(this.mainSamplerPC,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}buildPositions(){let e=this.mesh_width,t=this.mesh_height,n=e+1,r=t+1,i=2/e,a=2/t,o=[];for(let e=0;e<r;e++){let t=e*a-1;for(let e=0;e<n;e++){let n=e*i-1;o.push(n,-t,0)}}let s=[];for(let r=0;r<t;r++)for(let t=0;t<e;t++){let e=t+n*r,i=t+n*(r+1),a=t+1+n*(r+1),o=t+1+n*r;s.push(e,i,o),s.push(i,a,o)}this.vertices=new Float32Array(o),this.indices=new Uint16Array(s)}updateGlobals(e){this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.mesh_width=e.mesh_width,this.mesh_height=e.mesh_height,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.buildPositions()}createShader(e=``){let t,n;if(e.length===0)t=`ret = texture(sampler_main, uv).rgb * decay;`,n=``;else{let r=Jt.getShaderParts(e);n=r[0],t=r[1]}t=t.replace(/texture2D/g,`texture`),t=t.replace(/texture3D/g,`texture`),this.userTextures=Jt.getUserSamplers(n),this.shaderProgram=this.gl.createProgram();let r=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(r,`
      #version 300 es
      precision ${this.floatPrecision} float;
      const vec2 halfmad = vec2(0.5);
      in vec2 aPos;
      in vec2 aWarpUv;
      in vec4 aWarpColor;
      out vec2 uv;
      out vec2 uv_orig;
      out vec4 vColor;
      void main(void) {
        gl_Position = vec4(aPos, 0.0, 1.0);
        uv_orig = aPos * halfmad + halfmad;
        uv = aWarpUv;
        vColor = aWarpColor;
      }
      `.trim()),this.gl.compileShader(r);let i=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(i,`
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      precision mediump sampler3D;

      in vec2 uv;
      in vec2 uv_orig;
      in vec4 vColor;
      out vec4 fragColor;
      uniform sampler2D sampler_main;
      uniform sampler2D sampler_fw_main;
      uniform sampler2D sampler_fc_main;
      uniform sampler2D sampler_pw_main;
      uniform sampler2D sampler_pc_main;
      uniform sampler2D sampler_blur1;
      uniform sampler2D sampler_blur2;
      uniform sampler2D sampler_blur3;
      uniform sampler2D sampler_noise_lq;
      uniform sampler2D sampler_noise_lq_lite;
      uniform sampler2D sampler_noise_mq;
      uniform sampler2D sampler_noise_hq;
      uniform sampler2D sampler_pw_noise_lq;
      uniform sampler3D sampler_noisevol_lq;
      uniform sampler3D sampler_noisevol_hq;
      uniform float time;
      uniform float decay;
      uniform vec2 resolution;
      uniform vec4 aspect;
      uniform vec4 texsize;
      uniform vec4 texsize_noise_lq;
      uniform vec4 texsize_noise_mq;
      uniform vec4 texsize_noise_hq;
      uniform vec4 texsize_noise_lq_lite;
      uniform vec4 texsize_noisevol_lq;
      uniform vec4 texsize_noisevol_hq;

      uniform float bass;
      uniform float mid;
      uniform float treb;
      uniform float vol;
      uniform float bass_att;
      uniform float mid_att;
      uniform float treb_att;
      uniform float vol_att;

      uniform float frame;
      uniform float fps;

      uniform vec4 _qa;
      uniform vec4 _qb;
      uniform vec4 _qc;
      uniform vec4 _qd;
      uniform vec4 _qe;
      uniform vec4 _qf;
      uniform vec4 _qg;
      uniform vec4 _qh;

      #define q1 _qa.x
      #define q2 _qa.y
      #define q3 _qa.z
      #define q4 _qa.w
      #define q5 _qb.x
      #define q6 _qb.y
      #define q7 _qb.z
      #define q8 _qb.w
      #define q9 _qc.x
      #define q10 _qc.y
      #define q11 _qc.z
      #define q12 _qc.w
      #define q13 _qd.x
      #define q14 _qd.y
      #define q15 _qd.z
      #define q16 _qd.w
      #define q17 _qe.x
      #define q18 _qe.y
      #define q19 _qe.z
      #define q20 _qe.w
      #define q21 _qf.x
      #define q22 _qf.y
      #define q23 _qf.z
      #define q24 _qf.w
      #define q25 _qg.x
      #define q26 _qg.y
      #define q27 _qg.z
      #define q28 _qg.w
      #define q29 _qh.x
      #define q30 _qh.y
      #define q31 _qh.z
      #define q32 _qh.w

      uniform vec4 slow_roam_cos;
      uniform vec4 roam_cos;
      uniform vec4 slow_roam_sin;
      uniform vec4 roam_sin;

      uniform float blur1_min;
      uniform float blur1_max;
      uniform float blur2_min;
      uniform float blur2_max;
      uniform float blur3_min;
      uniform float blur3_max;

      uniform float scale1;
      uniform float scale2;
      uniform float scale3;
      uniform float bias1;
      uniform float bias2;
      uniform float bias3;

      uniform vec4 rand_frame;
      uniform vec4 rand_preset;

      float PI = ${Math.PI};

      ${n}

      void main(void) {
        vec3 ret;
        float rad = length(uv_orig - 0.5);
        float ang = atan(uv_orig.x - 0.5, uv_orig.y - 0.5);

        ${t}

        fragColor = vec4(ret, 1.0) * vColor;
      }
      `.trim()),this.gl.compileShader(i),this.gl.attachShader(this.shaderProgram,r),this.gl.attachShader(this.shaderProgram,i),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.warpUvLocation=this.gl.getAttribLocation(this.shaderProgram,`aWarpUv`),this.warpColorLocation=this.gl.getAttribLocation(this.shaderProgram,`aWarpColor`),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_main`),this.textureFWLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_fw_main`),this.textureFCLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_fc_main`),this.texturePWLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_pw_main`),this.texturePCLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_pc_main`),this.blurTexture1Loc=this.gl.getUniformLocation(this.shaderProgram,`sampler_blur1`),this.blurTexture2Loc=this.gl.getUniformLocation(this.shaderProgram,`sampler_blur2`),this.blurTexture3Loc=this.gl.getUniformLocation(this.shaderProgram,`sampler_blur3`),this.noiseLQLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_noise_lq`),this.noiseMQLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_noise_mq`),this.noiseHQLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_noise_hq`),this.noiseLQLiteLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_noise_lq_lite`),this.noisePointLQLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_pw_noise_lq`),this.noiseVolLQLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_noisevol_lq`),this.noiseVolHQLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_noisevol_hq`),this.decayLoc=this.gl.getUniformLocation(this.shaderProgram,`decay`),this.texsizeLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize`),this.texsizeNoiseLQLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize_noise_lq`),this.texsizeNoiseMQLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize_noise_mq`),this.texsizeNoiseHQLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize_noise_hq`),this.texsizeNoiseLQLiteLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize_noise_lq_lite`),this.texsizeNoiseVolLQLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize_noisevol_lq`),this.texsizeNoiseVolHQLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize_noisevol_hq`),this.resolutionLoc=this.gl.getUniformLocation(this.shaderProgram,`resolution`),this.aspectLoc=this.gl.getUniformLocation(this.shaderProgram,`aspect`),this.bassLoc=this.gl.getUniformLocation(this.shaderProgram,`bass`),this.midLoc=this.gl.getUniformLocation(this.shaderProgram,`mid`),this.trebLoc=this.gl.getUniformLocation(this.shaderProgram,`treb`),this.volLoc=this.gl.getUniformLocation(this.shaderProgram,`vol`),this.bassAttLoc=this.gl.getUniformLocation(this.shaderProgram,`bass_att`),this.midAttLoc=this.gl.getUniformLocation(this.shaderProgram,`mid_att`),this.trebAttLoc=this.gl.getUniformLocation(this.shaderProgram,`treb_att`),this.volAttLoc=this.gl.getUniformLocation(this.shaderProgram,`vol_att`),this.timeLoc=this.gl.getUniformLocation(this.shaderProgram,`time`),this.frameLoc=this.gl.getUniformLocation(this.shaderProgram,`frame`),this.fpsLoc=this.gl.getUniformLocation(this.shaderProgram,`fps`),this.blur1MinLoc=this.gl.getUniformLocation(this.shaderProgram,`blur1_min`),this.blur1MaxLoc=this.gl.getUniformLocation(this.shaderProgram,`blur1_max`),this.blur2MinLoc=this.gl.getUniformLocation(this.shaderProgram,`blur2_min`),this.blur2MaxLoc=this.gl.getUniformLocation(this.shaderProgram,`blur2_max`),this.blur3MinLoc=this.gl.getUniformLocation(this.shaderProgram,`blur3_min`),this.blur3MaxLoc=this.gl.getUniformLocation(this.shaderProgram,`blur3_max`),this.scale1Loc=this.gl.getUniformLocation(this.shaderProgram,`scale1`),this.scale2Loc=this.gl.getUniformLocation(this.shaderProgram,`scale2`),this.scale3Loc=this.gl.getUniformLocation(this.shaderProgram,`scale3`),this.bias1Loc=this.gl.getUniformLocation(this.shaderProgram,`bias1`),this.bias2Loc=this.gl.getUniformLocation(this.shaderProgram,`bias2`),this.bias3Loc=this.gl.getUniformLocation(this.shaderProgram,`bias3`),this.randPresetLoc=this.gl.getUniformLocation(this.shaderProgram,`rand_preset`),this.randFrameLoc=this.gl.getUniformLocation(this.shaderProgram,`rand_frame`),this.qaLoc=this.gl.getUniformLocation(this.shaderProgram,`_qa`),this.qbLoc=this.gl.getUniformLocation(this.shaderProgram,`_qb`),this.qcLoc=this.gl.getUniformLocation(this.shaderProgram,`_qc`),this.qdLoc=this.gl.getUniformLocation(this.shaderProgram,`_qd`),this.qeLoc=this.gl.getUniformLocation(this.shaderProgram,`_qe`),this.qfLoc=this.gl.getUniformLocation(this.shaderProgram,`_qf`),this.qgLoc=this.gl.getUniformLocation(this.shaderProgram,`_qg`),this.qhLoc=this.gl.getUniformLocation(this.shaderProgram,`_qh`),this.slowRoamCosLoc=this.gl.getUniformLocation(this.shaderProgram,`slow_roam_cos`),this.roamCosLoc=this.gl.getUniformLocation(this.shaderProgram,`roam_cos`),this.slowRoamSinLoc=this.gl.getUniformLocation(this.shaderProgram,`slow_roam_sin`),this.roamSinLoc=this.gl.getUniformLocation(this.shaderProgram,`roam_sin`);for(let e=0;e<this.userTextures.length;e++){let t=this.userTextures[e];t.textureLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_${t.sampler}`)}}updateShader(e){this.createShader(e)}bindBlurVals(e,t){let n=e[0],r=e[1],i=e[2],a=t[0],o=t[1],s=t[2],c=a-n,l=n,u=o-r,d=r,f=s-i,p=i;this.gl.uniform1f(this.blur1MinLoc,n),this.gl.uniform1f(this.blur1MaxLoc,a),this.gl.uniform1f(this.blur2MinLoc,r),this.gl.uniform1f(this.blur2MaxLoc,o),this.gl.uniform1f(this.blur3MinLoc,i),this.gl.uniform1f(this.blur3MaxLoc,s),this.gl.uniform1f(this.scale1Loc,c),this.gl.uniform1f(this.scale2Loc,u),this.gl.uniform1f(this.scale3Loc,f),this.gl.uniform1f(this.bias1Loc,l),this.gl.uniform1f(this.bias2Loc,d),this.gl.uniform1f(this.bias3Loc,p)}renderQuadTexture(e,t,n,r,i,a,o,s,c,l,u){this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuf),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,this.indices,this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.vertices,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.warpUvVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,l,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.warpUvLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.warpUvLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.warpColorVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,u,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.warpColorLocation,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.warpColorLocation);let d=s.wrap===0?this.gl.CLAMP_TO_EDGE:this.gl.REPEAT;this.gl.samplerParameteri(this.mainSampler,this.gl.TEXTURE_WRAP_S,d),this.gl.samplerParameteri(this.mainSampler,this.gl.TEXTURE_WRAP_T,d),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.bindSampler(0,this.mainSampler),this.gl.uniform1i(this.textureLoc,0),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.bindSampler(1,this.mainSamplerFW),this.gl.uniform1i(this.textureFWLoc,1),this.gl.activeTexture(this.gl.TEXTURE2),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.bindSampler(2,this.mainSamplerFC),this.gl.uniform1i(this.textureFCLoc,2),this.gl.activeTexture(this.gl.TEXTURE3),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.bindSampler(3,this.mainSamplerPW),this.gl.uniform1i(this.texturePWLoc,3),this.gl.activeTexture(this.gl.TEXTURE4),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.bindSampler(4,this.mainSamplerPC),this.gl.uniform1i(this.texturePCLoc,4),this.gl.activeTexture(this.gl.TEXTURE5),this.gl.bindTexture(this.gl.TEXTURE_2D,n),this.gl.uniform1i(this.blurTexture1Loc,5),this.gl.activeTexture(this.gl.TEXTURE6),this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.uniform1i(this.blurTexture2Loc,6),this.gl.activeTexture(this.gl.TEXTURE7),this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.uniform1i(this.blurTexture3Loc,7),this.gl.activeTexture(this.gl.TEXTURE8),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexLQ),this.gl.uniform1i(this.noiseLQLoc,8),this.gl.activeTexture(this.gl.TEXTURE9),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexMQ),this.gl.uniform1i(this.noiseMQLoc,9),this.gl.activeTexture(this.gl.TEXTURE10),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexHQ),this.gl.uniform1i(this.noiseHQLoc,10),this.gl.activeTexture(this.gl.TEXTURE11),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexLQLite),this.gl.uniform1i(this.noiseLQLiteLoc,11),this.gl.activeTexture(this.gl.TEXTURE12),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexLQ),this.gl.bindSampler(12,this.noise.noiseTexPointLQ),this.gl.uniform1i(this.noisePointLQLoc,12),this.gl.activeTexture(this.gl.TEXTURE13),this.gl.bindTexture(this.gl.TEXTURE_3D,this.noise.noiseTexVolLQ),this.gl.uniform1i(this.noiseVolLQLoc,13),this.gl.activeTexture(this.gl.TEXTURE14),this.gl.bindTexture(this.gl.TEXTURE_3D,this.noise.noiseTexVolHQ),this.gl.uniform1i(this.noiseVolHQLoc,14);for(let e=0;e<this.userTextures.length;e++){let t=this.userTextures[e];this.gl.activeTexture(this.gl.TEXTURE15+e),this.gl.bindTexture(this.gl.TEXTURE_2D,this.image.getTexture(t.sampler)),this.gl.uniform1i(t.textureLoc,15+e)}this.gl.uniform1f(this.decayLoc,s.decay),this.gl.uniform2fv(this.resolutionLoc,[this.texsizeX,this.texsizeY]),this.gl.uniform4fv(this.aspectLoc,[this.aspectx,this.aspecty,this.invAspectx,this.invAspecty]),this.gl.uniform4fv(this.texsizeLoc,[this.texsizeX,this.texsizeY,1/this.texsizeX,1/this.texsizeY]),this.gl.uniform4fv(this.texsizeNoiseLQLoc,[256,256,1/256,1/256]),this.gl.uniform4fv(this.texsizeNoiseMQLoc,[256,256,1/256,1/256]),this.gl.uniform4fv(this.texsizeNoiseHQLoc,[256,256,1/256,1/256]),this.gl.uniform4fv(this.texsizeNoiseLQLiteLoc,[32,32,1/32,1/32]),this.gl.uniform4fv(this.texsizeNoiseVolLQLoc,[32,32,1/32,1/32]),this.gl.uniform4fv(this.texsizeNoiseVolHQLoc,[32,32,1/32,1/32]),this.gl.uniform1f(this.bassLoc,s.bass),this.gl.uniform1f(this.midLoc,s.mid),this.gl.uniform1f(this.trebLoc,s.treb),this.gl.uniform1f(this.volLoc,(s.bass+s.mid+s.treb)/3),this.gl.uniform1f(this.bassAttLoc,s.bass_att),this.gl.uniform1f(this.midAttLoc,s.mid_att),this.gl.uniform1f(this.trebAttLoc,s.treb_att),this.gl.uniform1f(this.volAttLoc,(s.bass_att+s.mid_att+s.treb_att)/3),this.gl.uniform1f(this.timeLoc,s.time),this.gl.uniform1f(this.frameLoc,s.frame),this.gl.uniform1f(this.fpsLoc,s.fps),this.gl.uniform4fv(this.randPresetLoc,s.rand_preset),this.gl.uniform4fv(this.randFrameLoc,new Float32Array([this.rng.random(),this.rng.random(),this.rng.random(),this.rng.random()])),this.gl.uniform4fv(this.qaLoc,new Float32Array([c.q1||0,c.q2||0,c.q3||0,c.q4||0])),this.gl.uniform4fv(this.qbLoc,new Float32Array([c.q5||0,c.q6||0,c.q7||0,c.q8||0])),this.gl.uniform4fv(this.qcLoc,new Float32Array([c.q9||0,c.q10||0,c.q11||0,c.q12||0])),this.gl.uniform4fv(this.qdLoc,new Float32Array([c.q13||0,c.q14||0,c.q15||0,c.q16||0])),this.gl.uniform4fv(this.qeLoc,new Float32Array([c.q17||0,c.q18||0,c.q19||0,c.q20||0])),this.gl.uniform4fv(this.qfLoc,new Float32Array([c.q21||0,c.q22||0,c.q23||0,c.q24||0])),this.gl.uniform4fv(this.qgLoc,new Float32Array([c.q25||0,c.q26||0,c.q27||0,c.q28||0])),this.gl.uniform4fv(this.qhLoc,new Float32Array([c.q29||0,c.q30||0,c.q31||0,c.q32||0])),this.gl.uniform4fv(this.slowRoamCosLoc,[.5+.5*Math.cos(s.time*.005),.5+.5*Math.cos(s.time*.008),.5+.5*Math.cos(s.time*.013),.5+.5*Math.cos(s.time*.022)]),this.gl.uniform4fv(this.roamCosLoc,[.5+.5*Math.cos(s.time*.3),.5+.5*Math.cos(s.time*1.3),.5+.5*Math.cos(s.time*5),.5+.5*Math.cos(s.time*20)]),this.gl.uniform4fv(this.slowRoamSinLoc,[.5+.5*Math.sin(s.time*.005),.5+.5*Math.sin(s.time*.008),.5+.5*Math.sin(s.time*.013),.5+.5*Math.sin(s.time*.022)]),this.gl.uniform4fv(this.roamSinLoc,[.5+.5*Math.sin(s.time*.3),.5+.5*Math.sin(s.time*1.3),.5+.5*Math.sin(s.time*5),.5+.5*Math.sin(s.time*20)]),this.bindBlurVals(a,o),e?this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA):this.gl.disable(this.gl.BLEND),this.gl.drawElements(this.gl.TRIANGLES,this.indices.length,this.gl.UNSIGNED_SHORT,0),e||this.gl.enable(this.gl.BLEND)}},rn=class e{constructor(e,t,n,r={}){this.gl=e,this.noise=t,this.image=n,this.rng=Ut(),this.mesh_width=r.mesh_width,this.mesh_height=r.mesh_height,this.texsizeX=r.texsizeX,this.texsizeY=r.texsizeY,this.aspectx=r.aspectx,this.aspecty=r.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.compWidth=32,this.compHeight=24,this.buildPositions(),this.indexBuf=e.createBuffer(),this.positionVertexBuf=this.gl.createBuffer(),this.compColorVertexBuf=this.gl.createBuffer(),this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.createShader(),this.mainSampler=this.gl.createSampler(),this.mainSamplerFW=this.gl.createSampler(),this.mainSamplerFC=this.gl.createSampler(),this.mainSamplerPW=this.gl.createSampler(),this.mainSamplerPC=this.gl.createSampler(),e.samplerParameteri(this.mainSampler,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.samplerParameteri(this.mainSampler,e.TEXTURE_MAG_FILTER,e.LINEAR),e.samplerParameteri(this.mainSampler,e.TEXTURE_WRAP_S,e.REPEAT),e.samplerParameteri(this.mainSampler,e.TEXTURE_WRAP_T,e.REPEAT),e.samplerParameteri(this.mainSamplerFW,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.samplerParameteri(this.mainSamplerFW,e.TEXTURE_MAG_FILTER,e.LINEAR),e.samplerParameteri(this.mainSamplerFW,e.TEXTURE_WRAP_S,e.REPEAT),e.samplerParameteri(this.mainSamplerFW,e.TEXTURE_WRAP_T,e.REPEAT),e.samplerParameteri(this.mainSamplerFC,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.samplerParameteri(this.mainSamplerFC,e.TEXTURE_MAG_FILTER,e.LINEAR),e.samplerParameteri(this.mainSamplerFC,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.samplerParameteri(this.mainSamplerFC,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.samplerParameteri(this.mainSamplerPW,e.TEXTURE_MIN_FILTER,e.NEAREST_MIPMAP_NEAREST),e.samplerParameteri(this.mainSamplerPW,e.TEXTURE_MAG_FILTER,e.NEAREST),e.samplerParameteri(this.mainSamplerPW,e.TEXTURE_WRAP_S,e.REPEAT),e.samplerParameteri(this.mainSamplerPW,e.TEXTURE_WRAP_T,e.REPEAT),e.samplerParameteri(this.mainSamplerPC,e.TEXTURE_MIN_FILTER,e.NEAREST_MIPMAP_NEAREST),e.samplerParameteri(this.mainSamplerPC,e.TEXTURE_MAG_FILTER,e.NEAREST),e.samplerParameteri(this.mainSamplerPC,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.samplerParameteri(this.mainSamplerPC,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}buildPositions(){let e=this.compWidth,t=this.compHeight,n=e+1,r=t+1,i=2/e,a=2/t,o=[];for(let e=0;e<r;e++){let t=e*a-1;for(let e=0;e<n;e++){let n=e*i-1;o.push(n,-t,0)}}let s=[];for(let r=0;r<t;r++)for(let t=0;t<e;t++){let e=t+n*r,i=t+n*(r+1),a=t+1+n*(r+1),o=t+1+n*r;s.push(e,i,o),s.push(i,a,o)}this.vertices=new Float32Array(o),this.indices=new Uint16Array(s)}updateGlobals(e){this.mesh_width=e.mesh_width,this.mesh_height=e.mesh_height,this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.buildPositions()}createShader(e=``){let t,n;if(e.length===0)t=`float orient_horiz = mod(echo_orientation, 2.0);
                        float orient_x = (orient_horiz != 0.0) ? -1.0 : 1.0;
                        float orient_y = (echo_orientation >= 2.0) ? -1.0 : 1.0;
                        vec2 uv_echo = ((uv - 0.5) *
                                        (1.0 / echo_zoom) *
                                        vec2(orient_x, orient_y)) + 0.5;

                        ret = mix(texture(sampler_main, uv).rgb,
                                  texture(sampler_main, uv_echo).rgb,
                                  echo_alpha);

                        ret *= gammaAdj;

                        if(fShader >= 1.0) {
                          ret *= hue_shader;
                        } else if(fShader > 0.001) {
                          ret *= (1.0 - fShader) + (fShader * hue_shader);
                        }

                        if(brighten != 0) ret = sqrt(ret);
                        if(darken != 0) ret = ret*ret;
                        if(solarize != 0) ret = ret * (1.0 - ret) * 4.0;
                        if(invert != 0) ret = 1.0 - ret;`,n=``;else{let r=Jt.getShaderParts(e);n=r[0],t=r[1]}t=t.replace(/texture2D/g,`texture`),t=t.replace(/texture3D/g,`texture`),this.userTextures=Jt.getUserSamplers(n),this.shaderProgram=this.gl.createProgram();let r=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(r,`#version 300 es
      const vec2 halfmad = vec2(0.5);
      in vec2 aPos;
      in vec4 aCompColor;
      out vec2 vUv;
      out vec4 vColor;
      void main(void) {
        gl_Position = vec4(aPos, 0.0, 1.0);
        vUv = aPos * halfmad + halfmad;
        vColor = aCompColor;
      }`),this.gl.compileShader(r);let i=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(i,`
      #version 300 es
      precision ${this.floatPrecision} float;
      precision highp int;
      precision mediump sampler2D;
      precision mediump sampler3D;

      vec3 lum(vec3 v){
          return vec3(dot(v, vec3(0.32,0.49,0.29)));
      }

      in vec2 vUv;
      in vec4 vColor;
      out vec4 fragColor;
      uniform sampler2D sampler_main;
      uniform sampler2D sampler_fw_main;
      uniform sampler2D sampler_fc_main;
      uniform sampler2D sampler_pw_main;
      uniform sampler2D sampler_pc_main;
      uniform sampler2D sampler_blur1;
      uniform sampler2D sampler_blur2;
      uniform sampler2D sampler_blur3;
      uniform sampler2D sampler_noise_lq;
      uniform sampler2D sampler_noise_lq_lite;
      uniform sampler2D sampler_noise_mq;
      uniform sampler2D sampler_noise_hq;
      uniform sampler2D sampler_pw_noise_lq;
      uniform sampler3D sampler_noisevol_lq;
      uniform sampler3D sampler_noisevol_hq;

      uniform float time;
      uniform float gammaAdj;
      uniform float echo_zoom;
      uniform float echo_alpha;
      uniform float echo_orientation;
      uniform int invert;
      uniform int brighten;
      uniform int darken;
      uniform int solarize;
      uniform vec2 resolution;
      uniform vec4 aspect;
      uniform vec4 texsize;
      uniform vec4 texsize_noise_lq;
      uniform vec4 texsize_noise_mq;
      uniform vec4 texsize_noise_hq;
      uniform vec4 texsize_noise_lq_lite;
      uniform vec4 texsize_noisevol_lq;
      uniform vec4 texsize_noisevol_hq;

      uniform float bass;
      uniform float mid;
      uniform float treb;
      uniform float vol;
      uniform float bass_att;
      uniform float mid_att;
      uniform float treb_att;
      uniform float vol_att;

      uniform float frame;
      uniform float fps;

      uniform vec4 _qa;
      uniform vec4 _qb;
      uniform vec4 _qc;
      uniform vec4 _qd;
      uniform vec4 _qe;
      uniform vec4 _qf;
      uniform vec4 _qg;
      uniform vec4 _qh;

      #define q1 _qa.x
      #define q2 _qa.y
      #define q3 _qa.z
      #define q4 _qa.w
      #define q5 _qb.x
      #define q6 _qb.y
      #define q7 _qb.z
      #define q8 _qb.w
      #define q9 _qc.x
      #define q10 _qc.y
      #define q11 _qc.z
      #define q12 _qc.w
      #define q13 _qd.x
      #define q14 _qd.y
      #define q15 _qd.z
      #define q16 _qd.w
      #define q17 _qe.x
      #define q18 _qe.y
      #define q19 _qe.z
      #define q20 _qe.w
      #define q21 _qf.x
      #define q22 _qf.y
      #define q23 _qf.z
      #define q24 _qf.w
      #define q25 _qg.x
      #define q26 _qg.y
      #define q27 _qg.z
      #define q28 _qg.w
      #define q29 _qh.x
      #define q30 _qh.y
      #define q31 _qh.z
      #define q32 _qh.w

      uniform vec4 slow_roam_cos;
      uniform vec4 roam_cos;
      uniform vec4 slow_roam_sin;
      uniform vec4 roam_sin;

      uniform float blur1_min;
      uniform float blur1_max;
      uniform float blur2_min;
      uniform float blur2_max;
      uniform float blur3_min;
      uniform float blur3_max;

      uniform float scale1;
      uniform float scale2;
      uniform float scale3;
      uniform float bias1;
      uniform float bias2;
      uniform float bias3;

      uniform vec4 rand_frame;
      uniform vec4 rand_preset;

      uniform float fShader;

      float PI = ${Math.PI};

      ${n}

      void main(void) {
        vec3 ret;
        vec2 uv = vUv;
        vec2 uv_orig = vUv;
        uv.y = 1.0 - uv.y;
        uv_orig.y = 1.0 - uv_orig.y;
        float rad = length(uv - 0.5);
        float ang = atan(uv.x - 0.5, uv.y - 0.5);
        vec3 hue_shader = vColor.rgb;

        ${t}

        fragColor = vec4(ret, vColor.a);
      }
      `.trim()),this.gl.compileShader(i),this.gl.attachShader(this.shaderProgram,r),this.gl.attachShader(this.shaderProgram,i),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.compColorLocation=this.gl.getAttribLocation(this.shaderProgram,`aCompColor`),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_main`),this.textureFWLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_fw_main`),this.textureFCLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_fc_main`),this.texturePWLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_pw_main`),this.texturePCLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_pc_main`),this.blurTexture1Loc=this.gl.getUniformLocation(this.shaderProgram,`sampler_blur1`),this.blurTexture2Loc=this.gl.getUniformLocation(this.shaderProgram,`sampler_blur2`),this.blurTexture3Loc=this.gl.getUniformLocation(this.shaderProgram,`sampler_blur3`),this.noiseLQLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_noise_lq`),this.noiseMQLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_noise_mq`),this.noiseHQLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_noise_hq`),this.noiseLQLiteLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_noise_lq_lite`),this.noisePointLQLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_pw_noise_lq`),this.noiseVolLQLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_noisevol_lq`),this.noiseVolHQLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_noisevol_hq`),this.timeLoc=this.gl.getUniformLocation(this.shaderProgram,`time`),this.gammaAdjLoc=this.gl.getUniformLocation(this.shaderProgram,`gammaAdj`),this.echoZoomLoc=this.gl.getUniformLocation(this.shaderProgram,`echo_zoom`),this.echoAlphaLoc=this.gl.getUniformLocation(this.shaderProgram,`echo_alpha`),this.echoOrientationLoc=this.gl.getUniformLocation(this.shaderProgram,`echo_orientation`),this.invertLoc=this.gl.getUniformLocation(this.shaderProgram,`invert`),this.brightenLoc=this.gl.getUniformLocation(this.shaderProgram,`brighten`),this.darkenLoc=this.gl.getUniformLocation(this.shaderProgram,`darken`),this.solarizeLoc=this.gl.getUniformLocation(this.shaderProgram,`solarize`),this.texsizeLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize`),this.texsizeNoiseLQLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize_noise_lq`),this.texsizeNoiseMQLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize_noise_mq`),this.texsizeNoiseHQLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize_noise_hq`),this.texsizeNoiseLQLiteLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize_noise_lq_lite`),this.texsizeNoiseVolLQLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize_noisevol_lq`),this.texsizeNoiseVolHQLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize_noisevol_hq`),this.resolutionLoc=this.gl.getUniformLocation(this.shaderProgram,`resolution`),this.aspectLoc=this.gl.getUniformLocation(this.shaderProgram,`aspect`),this.bassLoc=this.gl.getUniformLocation(this.shaderProgram,`bass`),this.midLoc=this.gl.getUniformLocation(this.shaderProgram,`mid`),this.trebLoc=this.gl.getUniformLocation(this.shaderProgram,`treb`),this.volLoc=this.gl.getUniformLocation(this.shaderProgram,`vol`),this.bassAttLoc=this.gl.getUniformLocation(this.shaderProgram,`bass_att`),this.midAttLoc=this.gl.getUniformLocation(this.shaderProgram,`mid_att`),this.trebAttLoc=this.gl.getUniformLocation(this.shaderProgram,`treb_att`),this.volAttLoc=this.gl.getUniformLocation(this.shaderProgram,`vol_att`),this.frameLoc=this.gl.getUniformLocation(this.shaderProgram,`frame`),this.fpsLoc=this.gl.getUniformLocation(this.shaderProgram,`fps`),this.blur1MinLoc=this.gl.getUniformLocation(this.shaderProgram,`blur1_min`),this.blur1MaxLoc=this.gl.getUniformLocation(this.shaderProgram,`blur1_max`),this.blur2MinLoc=this.gl.getUniformLocation(this.shaderProgram,`blur2_min`),this.blur2MaxLoc=this.gl.getUniformLocation(this.shaderProgram,`blur2_max`),this.blur3MinLoc=this.gl.getUniformLocation(this.shaderProgram,`blur3_min`),this.blur3MaxLoc=this.gl.getUniformLocation(this.shaderProgram,`blur3_max`),this.scale1Loc=this.gl.getUniformLocation(this.shaderProgram,`scale1`),this.scale2Loc=this.gl.getUniformLocation(this.shaderProgram,`scale2`),this.scale3Loc=this.gl.getUniformLocation(this.shaderProgram,`scale3`),this.bias1Loc=this.gl.getUniformLocation(this.shaderProgram,`bias1`),this.bias2Loc=this.gl.getUniformLocation(this.shaderProgram,`bias2`),this.bias3Loc=this.gl.getUniformLocation(this.shaderProgram,`bias3`),this.randPresetLoc=this.gl.getUniformLocation(this.shaderProgram,`rand_preset`),this.randFrameLoc=this.gl.getUniformLocation(this.shaderProgram,`rand_frame`),this.fShaderLoc=this.gl.getUniformLocation(this.shaderProgram,`fShader`),this.qaLoc=this.gl.getUniformLocation(this.shaderProgram,`_qa`),this.qbLoc=this.gl.getUniformLocation(this.shaderProgram,`_qb`),this.qcLoc=this.gl.getUniformLocation(this.shaderProgram,`_qc`),this.qdLoc=this.gl.getUniformLocation(this.shaderProgram,`_qd`),this.qeLoc=this.gl.getUniformLocation(this.shaderProgram,`_qe`),this.qfLoc=this.gl.getUniformLocation(this.shaderProgram,`_qf`),this.qgLoc=this.gl.getUniformLocation(this.shaderProgram,`_qg`),this.qhLoc=this.gl.getUniformLocation(this.shaderProgram,`_qh`),this.slowRoamCosLoc=this.gl.getUniformLocation(this.shaderProgram,`slow_roam_cos`),this.roamCosLoc=this.gl.getUniformLocation(this.shaderProgram,`roam_cos`),this.slowRoamSinLoc=this.gl.getUniformLocation(this.shaderProgram,`slow_roam_sin`),this.roamSinLoc=this.gl.getUniformLocation(this.shaderProgram,`roam_sin`);for(let e=0;e<this.userTextures.length;e++){let t=this.userTextures[e];t.textureLoc=this.gl.getUniformLocation(this.shaderProgram,`sampler_${t.sampler}`)}}updateShader(e){this.createShader(e)}bindBlurVals(e,t){let n=e[0],r=e[1],i=e[2],a=t[0],o=t[1],s=t[2],c=a-n,l=n,u=o-r,d=r,f=s-i,p=i;this.gl.uniform1f(this.blur1MinLoc,n),this.gl.uniform1f(this.blur1MaxLoc,a),this.gl.uniform1f(this.blur2MinLoc,r),this.gl.uniform1f(this.blur2MaxLoc,o),this.gl.uniform1f(this.blur3MinLoc,i),this.gl.uniform1f(this.blur3MaxLoc,s),this.gl.uniform1f(this.scale1Loc,c),this.gl.uniform1f(this.scale2Loc,u),this.gl.uniform1f(this.scale3Loc,f),this.gl.uniform1f(this.bias1Loc,l),this.gl.uniform1f(this.bias2Loc,d),this.gl.uniform1f(this.bias3Loc,p)}static generateHueBase(e){let t=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1]);for(let n=0;n<4;n++){t[n*3+0]=.6+.3*Math.sin(e.time*30*.0143+3+n*21+e.rand_start[3]),t[n*3+1]=.6+.3*Math.sin(e.time*30*.0107+1+n*13+e.rand_start[1]),t[n*3+2]=.6+.3*Math.sin(e.time*30*.0129+6+n*9+e.rand_start[2]);let r=Math.max(t[n*3],t[n*3+1],t[n*3+2]);for(let e=0;e<3;e++)t[n*3+e]=t[n*3+e]/r,t[n*3+e]=.5+.5*t[n*3+e]}return t}generateCompColors(t,n,r){let i=e.generateHueBase(n),a=this.compWidth+1,o=this.compHeight+1,s=new Float32Array(a*o*4),c=0;for(let e=0;e<o;e++)for(let n=0;n<a;n++){let a=n/this.compWidth,o=e/this.compHeight,l=[1,1,1];for(let e=0;e<3;e++)l[e]=i[0+e]*a*o+i[3+e]*(1-a)*o+i[6+e]*a*(1-o)+i[9+e]*(1-a)*(1-o);let u=1;if(t){a*=this.mesh_width+1,o*=this.mesh_height+1,a=Math.clamp(a,0,this.mesh_width-1),o=Math.clamp(o,0,this.mesh_height-1);let e=Math.floor(a),t=Math.floor(o),n=a-e,i=o-t,s=r[(t*(this.mesh_width+1)+e)*4+3],c=r[(t*(this.mesh_width+1)+(e+1))*4+3],l=r[((t+1)*(this.mesh_width+1)+e)*4+3],d=r[((t+1)*(this.mesh_width+1)+(e+1))*4+3];u=s*(1-n)*(1-i)+c*n*(1-i)+l*(1-n)*i+d*n*i}s[c+0]=l[0],s[c+1]=l[1],s[c+2]=l[2],s[c+3]=u,c+=4}return s}renderQuadTexture(e,t,n,r,i,a,o,s,c,l){let u=this.generateCompColors(e,s,l);this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuf),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,this.indices,this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.vertices,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.compColorVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,u,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.compColorLocation,4,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.compColorLocation);let d=s.wrap===0?this.gl.CLAMP_TO_EDGE:this.gl.REPEAT;this.gl.samplerParameteri(this.mainSampler,this.gl.TEXTURE_WRAP_S,d),this.gl.samplerParameteri(this.mainSampler,this.gl.TEXTURE_WRAP_T,d),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.bindSampler(0,this.mainSampler),this.gl.uniform1i(this.textureLoc,0),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.bindSampler(1,this.mainSamplerFW),this.gl.uniform1i(this.textureFWLoc,1),this.gl.activeTexture(this.gl.TEXTURE2),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.bindSampler(2,this.mainSamplerFC),this.gl.uniform1i(this.textureFCLoc,2),this.gl.activeTexture(this.gl.TEXTURE3),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.bindSampler(3,this.mainSamplerPW),this.gl.uniform1i(this.texturePWLoc,3),this.gl.activeTexture(this.gl.TEXTURE4),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.bindSampler(4,this.mainSamplerPC),this.gl.uniform1i(this.texturePCLoc,4),this.gl.activeTexture(this.gl.TEXTURE5),this.gl.bindTexture(this.gl.TEXTURE_2D,n),this.gl.uniform1i(this.blurTexture1Loc,5),this.gl.activeTexture(this.gl.TEXTURE6),this.gl.bindTexture(this.gl.TEXTURE_2D,r),this.gl.uniform1i(this.blurTexture2Loc,6),this.gl.activeTexture(this.gl.TEXTURE7),this.gl.bindTexture(this.gl.TEXTURE_2D,i),this.gl.uniform1i(this.blurTexture3Loc,7),this.gl.activeTexture(this.gl.TEXTURE8),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexLQ),this.gl.uniform1i(this.noiseLQLoc,8),this.gl.activeTexture(this.gl.TEXTURE9),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexMQ),this.gl.uniform1i(this.noiseMQLoc,9),this.gl.activeTexture(this.gl.TEXTURE10),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexHQ),this.gl.uniform1i(this.noiseHQLoc,10),this.gl.activeTexture(this.gl.TEXTURE11),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexLQLite),this.gl.uniform1i(this.noiseLQLiteLoc,11),this.gl.activeTexture(this.gl.TEXTURE12),this.gl.bindTexture(this.gl.TEXTURE_2D,this.noise.noiseTexLQ),this.gl.bindSampler(12,this.noise.noiseTexPointLQ),this.gl.uniform1i(this.noisePointLQLoc,12),this.gl.activeTexture(this.gl.TEXTURE13),this.gl.bindTexture(this.gl.TEXTURE_3D,this.noise.noiseTexVolLQ),this.gl.uniform1i(this.noiseVolLQLoc,13),this.gl.activeTexture(this.gl.TEXTURE14),this.gl.bindTexture(this.gl.TEXTURE_3D,this.noise.noiseTexVolHQ),this.gl.uniform1i(this.noiseVolHQLoc,14);for(let e=0;e<this.userTextures.length;e++){let t=this.userTextures[e];this.gl.activeTexture(this.gl.TEXTURE15+e),this.gl.bindTexture(this.gl.TEXTURE_2D,this.image.getTexture(t.sampler)),this.gl.uniform1i(t.textureLoc,15+e)}this.gl.uniform1f(this.timeLoc,s.time),this.gl.uniform1f(this.gammaAdjLoc,s.gammaadj),this.gl.uniform1f(this.echoZoomLoc,s.echo_zoom),this.gl.uniform1f(this.echoAlphaLoc,s.echo_alpha),this.gl.uniform1f(this.echoOrientationLoc,s.echo_orient),this.gl.uniform1i(this.invertLoc,s.invert),this.gl.uniform1i(this.brightenLoc,s.brighten),this.gl.uniform1i(this.darkenLoc,s.darken),this.gl.uniform1i(this.solarizeLoc,s.solarize),this.gl.uniform2fv(this.resolutionLoc,[this.texsizeX,this.texsizeY]),this.gl.uniform4fv(this.aspectLoc,[this.aspectx,this.aspecty,this.invAspectx,this.invAspecty]),this.gl.uniform4fv(this.texsizeLoc,new Float32Array([this.texsizeX,this.texsizeY,1/this.texsizeX,1/this.texsizeY])),this.gl.uniform4fv(this.texsizeNoiseLQLoc,[256,256,1/256,1/256]),this.gl.uniform4fv(this.texsizeNoiseMQLoc,[256,256,1/256,1/256]),this.gl.uniform4fv(this.texsizeNoiseHQLoc,[256,256,1/256,1/256]),this.gl.uniform4fv(this.texsizeNoiseLQLiteLoc,[32,32,1/32,1/32]),this.gl.uniform4fv(this.texsizeNoiseVolLQLoc,[32,32,1/32,1/32]),this.gl.uniform4fv(this.texsizeNoiseVolHQLoc,[32,32,1/32,1/32]),this.gl.uniform1f(this.bassLoc,s.bass),this.gl.uniform1f(this.midLoc,s.mid),this.gl.uniform1f(this.trebLoc,s.treb),this.gl.uniform1f(this.volLoc,(s.bass+s.mid+s.treb)/3),this.gl.uniform1f(this.bassAttLoc,s.bass_att),this.gl.uniform1f(this.midAttLoc,s.mid_att),this.gl.uniform1f(this.trebAttLoc,s.treb_att),this.gl.uniform1f(this.volAttLoc,(s.bass_att+s.mid_att+s.treb_att)/3),this.gl.uniform1f(this.frameLoc,s.frame),this.gl.uniform1f(this.fpsLoc,s.fps),this.gl.uniform4fv(this.randPresetLoc,s.rand_preset),this.gl.uniform4fv(this.randFrameLoc,new Float32Array([this.rng.random(),this.rng.random(),this.rng.random(),this.rng.random()])),this.gl.uniform1f(this.fShaderLoc,s.fshader),this.gl.uniform4fv(this.qaLoc,new Float32Array([c.q1||0,c.q2||0,c.q3||0,c.q4||0])),this.gl.uniform4fv(this.qbLoc,new Float32Array([c.q5||0,c.q6||0,c.q7||0,c.q8||0])),this.gl.uniform4fv(this.qcLoc,new Float32Array([c.q9||0,c.q10||0,c.q11||0,c.q12||0])),this.gl.uniform4fv(this.qdLoc,new Float32Array([c.q13||0,c.q14||0,c.q15||0,c.q16||0])),this.gl.uniform4fv(this.qeLoc,new Float32Array([c.q17||0,c.q18||0,c.q19||0,c.q20||0])),this.gl.uniform4fv(this.qfLoc,new Float32Array([c.q21||0,c.q22||0,c.q23||0,c.q24||0])),this.gl.uniform4fv(this.qgLoc,new Float32Array([c.q25||0,c.q26||0,c.q27||0,c.q28||0])),this.gl.uniform4fv(this.qhLoc,new Float32Array([c.q29||0,c.q30||0,c.q31||0,c.q32||0])),this.gl.uniform4fv(this.slowRoamCosLoc,[.5+.5*Math.cos(s.time*.005),.5+.5*Math.cos(s.time*.008),.5+.5*Math.cos(s.time*.013),.5+.5*Math.cos(s.time*.022)]),this.gl.uniform4fv(this.roamCosLoc,[.5+.5*Math.cos(s.time*.3),.5+.5*Math.cos(s.time*1.3),.5+.5*Math.cos(s.time*5),.5+.5*Math.cos(s.time*20)]),this.gl.uniform4fv(this.slowRoamSinLoc,[.5+.5*Math.sin(s.time*.005),.5+.5*Math.sin(s.time*.008),.5+.5*Math.sin(s.time*.013),.5+.5*Math.sin(s.time*.022)]),this.gl.uniform4fv(this.roamSinLoc,[.5+.5*Math.sin(s.time*.3),.5+.5*Math.sin(s.time*1.3),.5+.5*Math.sin(s.time*5),.5+.5*Math.sin(s.time*20)]),this.bindBlurVals(a,o),e?this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA):this.gl.disable(this.gl.BLEND),this.gl.drawElements(this.gl.TRIANGLES,this.indices.length,this.gl.UNSIGNED_SHORT,0),e||this.gl.enable(this.gl.BLEND)}},an=class{constructor(e,t){this.gl=e,this.textureRatio=t.textureRatio,this.texsizeX=t.texsizeX,this.texsizeY=t.texsizeY,this.positions=new Float32Array([-1,-1,1,-1,-1,1,1,1]),this.vertexBuf=this.gl.createBuffer(),this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.useFXAA()?this.createFXAAShader():this.createShader()}useFXAA(){return this.textureRatio<=1}updateGlobals(e){this.textureRatio=e.textureRatio,this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.gl.deleteProgram(this.shaderProgram),this.useFXAA()?this.createFXAAShader():this.createShader()}createFXAAShader(){this.shaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
       const vec2 halfmad = vec2(0.5);
       in vec2 aPos;
       out vec2 v_rgbM;
       out vec2 v_rgbNW;
       out vec2 v_rgbNE;
       out vec2 v_rgbSW;
       out vec2 v_rgbSE;
       uniform vec4 texsize;
       void main(void) {
         gl_Position = vec4(aPos, 0.0, 1.0);

         v_rgbM = aPos * halfmad + halfmad;
         v_rgbNW = v_rgbM + (vec2(-1.0, -1.0) * texsize.zx);
         v_rgbNE = v_rgbM + (vec2(1.0, -1.0) * texsize.zx);
         v_rgbSW = v_rgbM + (vec2(-1.0, 1.0) * texsize.zx);
         v_rgbSE = v_rgbM + (vec2(1.0, 1.0) * texsize.zx);
       }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`#version 300 es
       precision ${this.floatPrecision} float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 v_rgbM;
       in vec2 v_rgbNW;
       in vec2 v_rgbNE;
       in vec2 v_rgbSW;
       in vec2 v_rgbSE;
       out vec4 fragColor;
       uniform vec4 texsize;
       uniform sampler2D uTexture;

       #ifndef FXAA_REDUCE_MIN
         #define FXAA_REDUCE_MIN   (1.0/ 128.0)
       #endif
       #ifndef FXAA_REDUCE_MUL
         #define FXAA_REDUCE_MUL   (1.0 / 8.0)
       #endif
       #ifndef FXAA_SPAN_MAX
         #define FXAA_SPAN_MAX     8.0
       #endif

       void main(void) {
         vec4 color;
         vec3 rgbNW = textureLod(uTexture, v_rgbNW, 0.0).xyz;
         vec3 rgbNE = textureLod(uTexture, v_rgbNE, 0.0).xyz;
         vec3 rgbSW = textureLod(uTexture, v_rgbSW, 0.0).xyz;
         vec3 rgbSE = textureLod(uTexture, v_rgbSE, 0.0).xyz;
         vec3 rgbM  = textureLod(uTexture, v_rgbM, 0.0).xyz;
         vec3 luma = vec3(0.299, 0.587, 0.114);
         float lumaNW = dot(rgbNW, luma);
         float lumaNE = dot(rgbNE, luma);
         float lumaSW = dot(rgbSW, luma);
         float lumaSE = dot(rgbSE, luma);
         float lumaM  = dot(rgbM,  luma);
         float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
         float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

         mediump vec2 dir;
         dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
         dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

         float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                               (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

         float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
         dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
                   max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                   dir * rcpDirMin)) * texsize.zw;

         vec3 rgbA = 0.5 * (
             textureLod(uTexture, v_rgbM + dir * (1.0 / 3.0 - 0.5), 0.0).xyz +
             textureLod(uTexture, v_rgbM + dir * (2.0 / 3.0 - 0.5), 0.0).xyz);
         vec3 rgbB = rgbA * 0.5 + 0.25 * (
             textureLod(uTexture, v_rgbM + dir * -0.5, 0.0).xyz +
             textureLod(uTexture, v_rgbM + dir * 0.5, 0.0).xyz);

         float lumaB = dot(rgbB, luma);
         if ((lumaB < lumaMin) || (lumaB > lumaMax))
           color = vec4(rgbA, 1.0);
         else
           color = vec4(rgbB, 1.0);

         fragColor = color;
       }`),this.gl.compileShader(t),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,t),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,`uTexture`),this.texsizeLoc=this.gl.getUniformLocation(this.shaderProgram,`texsize`)}createShader(){this.shaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
       const vec2 halfmad = vec2(0.5);
       in vec2 aPos;
       out vec2 uv;
       void main(void) {
         gl_Position = vec4(aPos, 0.0, 1.0);
         uv = aPos * halfmad + halfmad;
       }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`#version 300 es
       precision ${this.floatPrecision} float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;

       void main(void) {
         fragColor = vec4(texture(uTexture, uv).rgb, 1.0);
       }`),this.gl.compileShader(t),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,t),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,`uTexture`)}renderQuadTexture(e){this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.uniform1i(this.textureLoc,0),this.useFXAA()&&this.gl.uniform4fv(this.texsizeLoc,new Float32Array([this.texsizeX,this.texsizeY,1/this.texsizeX,1/this.texsizeY])),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}},on=class{constructor(e){this.gl=e,this.positions=new Float32Array([-1,-1,1,-1,-1,1,1,1]),this.vertexBuf=this.gl.createBuffer(),this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.createShader()}createShader(){this.shaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
       const vec2 halfmad = vec2(0.5);
       in vec2 aPos;
       out vec2 uv;
       void main(void) {
         gl_Position = vec4(aPos, 0.0, 1.0);
         uv = aPos * halfmad + halfmad;
       }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`#version 300 es
       precision ${this.floatPrecision} float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;

       void main(void) {
         fragColor = vec4(texture(uTexture, uv).rgb, 1.0);
       }`),this.gl.compileShader(t),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,t),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,`uTexture`)}renderQuadTexture(e){this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.uniform1i(this.textureLoc,0),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}},sn=class{constructor(e,t){this.gl=e,this.blurLevel=t;let n=[4,3.8,3.5,2.9,1.9,1.2,.7,.3],r=n[0]+n[1]+n[2]+n[3],i=n[4]+n[5]+n[6]+n[7],a=0+2*((n[2]+n[3])/r),o=2+2*((n[6]+n[7])/i);this.wds=new Float32Array([r,i,a,o]),this.wDiv=1/((r+i)*2),this.positions=new Float32Array([-1,-1,1,-1,-1,1,1,1]),this.vertexBuf=this.gl.createBuffer(),this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.createShader()}createShader(){this.shaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
      const vec2 halfmad = vec2(0.5);
      in vec2 aPos;
      out vec2 uv;
      void main(void) {
        gl_Position = vec4(aPos, 0.0, 1.0);
        uv = aPos * halfmad + halfmad;
      }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`#version 300 es
       precision ${this.floatPrecision} float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;
       uniform vec4 texsize;
       uniform float ed1;
       uniform float ed2;
       uniform float ed3;
       uniform vec4 wds;
       uniform float wdiv;

       void main(void) {
         float w1 = wds[0];
         float w2 = wds[1];
         float d1 = wds[2];
         float d2 = wds[3];

         vec2 uv2 = uv.xy;

         vec3 blur =
           ( texture(uTexture, uv2 + vec2(0.0, d1 * texsize.w) ).xyz
           + texture(uTexture, uv2 + vec2(0.0,-d1 * texsize.w) ).xyz) * w1 +
           ( texture(uTexture, uv2 + vec2(0.0, d2 * texsize.w) ).xyz
           + texture(uTexture, uv2 + vec2(0.0,-d2 * texsize.w) ).xyz) * w2;

         blur.xyz *= wdiv;

         float t = min(min(uv.x, uv.y), 1.0 - max(uv.x, uv.y));
         t = sqrt(t);
         t = ed1 + ed2 * clamp(t * ed3, 0.0, 1.0);
         blur.xyz *= t;

         fragColor = vec4(blur, 1.0);
       }`),this.gl.compileShader(t),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,t),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,`uTexture`),this.texsizeLocation=this.gl.getUniformLocation(this.shaderProgram,`texsize`),this.ed1Loc=this.gl.getUniformLocation(this.shaderProgram,`ed1`),this.ed2Loc=this.gl.getUniformLocation(this.shaderProgram,`ed2`),this.ed3Loc=this.gl.getUniformLocation(this.shaderProgram,`ed3`),this.wdsLocation=this.gl.getUniformLocation(this.shaderProgram,`wds`),this.wdivLoc=this.gl.getUniformLocation(this.shaderProgram,`wdiv`)}renderQuadTexture(e,t,n){this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.uniform1i(this.textureLoc,0);let r=this.blurLevel===0?t.b1ed:0;this.gl.uniform4fv(this.texsizeLocation,[n[0],n[1],1/n[0],1/n[1]]),this.gl.uniform1f(this.ed1Loc,1-r),this.gl.uniform1f(this.ed2Loc,r),this.gl.uniform1f(this.ed3Loc,5),this.gl.uniform4fv(this.wdsLocation,this.wds),this.gl.uniform1f(this.wdivLoc,this.wDiv),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}},cn=class{constructor(e,t){this.gl=e,this.blurLevel=t;let n=[4,3.8,3.5,2.9,1.9,1.2,.7,.3],r=n[0]+n[1],i=n[2]+n[3],a=n[4]+n[5],o=n[6]+n[7],s=0+2*n[1]/r,c=2+2*n[3]/i,l=4+2*n[5]/a,u=6+2*n[7]/o;this.ws=new Float32Array([r,i,a,o]),this.ds=new Float32Array([s,c,l,u]),this.wDiv=.5/(r+i+a+o),this.positions=new Float32Array([-1,-1,1,-1,-1,1,1,1]),this.vertexBuf=this.gl.createBuffer(),this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.createShader()}createShader(){this.shaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
      const vec2 halfmad = vec2(0.5);
      in vec2 aPos;
      out vec2 uv;
      void main(void) {
        gl_Position = vec4(aPos, 0.0, 1.0);
        uv = aPos * halfmad + halfmad;
      }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`#version 300 es
       precision ${this.floatPrecision} float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;
       uniform vec4 texsize;
       uniform float scale;
       uniform float bias;
       uniform vec4 ws;
       uniform vec4 ds;
       uniform float wdiv;

       void main(void) {
         float w1 = ws[0];
         float w2 = ws[1];
         float w3 = ws[2];
         float w4 = ws[3];
         float d1 = ds[0];
         float d2 = ds[1];
         float d3 = ds[2];
         float d4 = ds[3];

         vec2 uv2 = uv.xy;

         vec3 blur =
           ( texture(uTexture, uv2 + vec2( d1 * texsize.z,0.0) ).xyz
           + texture(uTexture, uv2 + vec2(-d1 * texsize.z,0.0) ).xyz) * w1 +
           ( texture(uTexture, uv2 + vec2( d2 * texsize.z,0.0) ).xyz
           + texture(uTexture, uv2 + vec2(-d2 * texsize.z,0.0) ).xyz) * w2 +
           ( texture(uTexture, uv2 + vec2( d3 * texsize.z,0.0) ).xyz
           + texture(uTexture, uv2 + vec2(-d3 * texsize.z,0.0) ).xyz) * w3 +
           ( texture(uTexture, uv2 + vec2( d4 * texsize.z,0.0) ).xyz
           + texture(uTexture, uv2 + vec2(-d4 * texsize.z,0.0) ).xyz) * w4;

         blur.xyz *= wdiv;
         blur.xyz = blur.xyz * scale + bias;

         fragColor = vec4(blur, 1.0);
       }`),this.gl.compileShader(t),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,t),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,`uTexture`),this.texsizeLocation=this.gl.getUniformLocation(this.shaderProgram,`texsize`),this.scaleLoc=this.gl.getUniformLocation(this.shaderProgram,`scale`),this.biasLoc=this.gl.getUniformLocation(this.shaderProgram,`bias`),this.wsLoc=this.gl.getUniformLocation(this.shaderProgram,`ws`),this.dsLocation=this.gl.getUniformLocation(this.shaderProgram,`ds`),this.wdivLoc=this.gl.getUniformLocation(this.shaderProgram,`wdiv`)}getScaleAndBias(e,t){let n=[1,1,1],r=[0,0,0],i,a;return n[0]=1/(t[0]-e[0]),r[0]=-e[0]*n[0],i=(e[1]-e[0])/(t[0]-e[0]),a=(t[1]-e[0])/(t[0]-e[0]),n[1]=1/(a-i),r[1]=-i*n[1],i=(e[2]-e[1])/(t[1]-e[1]),a=(t[2]-e[1])/(t[1]-e[1]),n[2]=1/(a-i),r[2]=-i*n[2],{scale:n[this.blurLevel],bias:r[this.blurLevel]}}renderQuadTexture(e,t,n,r,i){this.gl.useProgram(this.shaderProgram),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.positions,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.uniform1i(this.textureLoc,0);let{scale:a,bias:o}=this.getScaleAndBias(n,r);this.gl.uniform4fv(this.texsizeLocation,[i[0],i[1],1/i[0],1/i[1]]),this.gl.uniform1f(this.scaleLoc,a),this.gl.uniform1f(this.biasLoc,o),this.gl.uniform4fv(this.wsLoc,this.ws),this.gl.uniform4fv(this.dsLocation,this.ds),this.gl.uniform1f(this.wdivLoc,this.wDiv),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4)}},ln=class{constructor(e,t,n,r={}){this.blurLevel=e,this.blurRatios=t,this.gl=n,this.texsizeX=r.texsizeX,this.texsizeY=r.texsizeY,this.anisoExt=this.gl.getExtension(`EXT_texture_filter_anisotropic`)||this.gl.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||this.gl.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`),this.blurHorizontalFrameBuffer=this.gl.createFramebuffer(),this.blurVerticalFrameBuffer=this.gl.createFramebuffer(),this.blurHorizontalTexture=this.gl.createTexture(),this.blurVerticalTexture=this.gl.createTexture(),this.setupFrameBufferTextures(),this.blurHorizontal=new cn(n,this.blurLevel,r),this.blurVertical=new sn(n,this.blurLevel,r)}updateGlobals(e){this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.setupFrameBufferTextures()}getTextureSize(e){let t=Math.max(this.texsizeX*e,16);t=Math.floor((t+3)/16)*16;let n=Math.max(this.texsizeY*e,16);return n=Math.floor((n+3)/4)*4,[t,n]}setupFrameBufferTextures(){let e=this.blurLevel>0?this.blurRatios[this.blurLevel-1]:[1,1],t=this.blurRatios[this.blurLevel],n=this.getTextureSize(e[1]),r=this.getTextureSize(t[0]);this.bindFrameBufferTexture(this.blurHorizontalFrameBuffer,this.blurHorizontalTexture,r);let i=r,a=this.getTextureSize(t[1]);this.bindFrameBufferTexture(this.blurVerticalFrameBuffer,this.blurVerticalTexture,a),this.horizontalTexsizes=[n,r],this.verticalTexsizes=[i,a]}bindFrambufferAndSetViewport(e,t){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,e),this.gl.viewport(0,0,t[0],t[1])}bindFrameBufferTexture(e,t,n){if(this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,n[0],n[1],0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array(n[0]*n[1]*4)),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.anisoExt){let e=this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);this.gl.texParameterf(this.gl.TEXTURE_2D,this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,e)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,e),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,t,0)}renderBlurTexture(e,t,n,r){this.bindFrambufferAndSetViewport(this.blurHorizontalFrameBuffer,this.horizontalTexsizes[1]),this.blurHorizontal.renderQuadTexture(e,t,n,r,this.horizontalTexsizes[0]),this.gl.bindTexture(this.gl.TEXTURE_2D,this.blurHorizontalTexture),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.bindFrambufferAndSetViewport(this.blurVerticalFrameBuffer,this.verticalTexsizes[1]),this.blurVertical.renderQuadTexture(this.blurHorizontalTexture,t,this.verticalTexsizes[0]),this.gl.bindTexture(this.gl.TEXTURE_2D,this.blurVerticalTexture),this.gl.generateMipmap(this.gl.TEXTURE_2D)}},un=class e{constructor(t){this.gl=t,this.randomFn=Ut().random,this.anisoExt=this.gl.getExtension(`EXT_texture_filter_anisotropic`)||this.gl.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||this.gl.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`),this.noiseTexLQ=this.gl.createTexture(),this.noiseTexLQLite=this.gl.createTexture(),this.noiseTexMQ=this.gl.createTexture(),this.noiseTexHQ=this.gl.createTexture(),this.noiseTexVolLQ=this.gl.createTexture(),this.noiseTexVolHQ=this.gl.createTexture(),this.nTexArrLQ=e.createNoiseTex(256,1,this.randomFn),this.nTexArrLQLite=e.createNoiseTex(32,1,this.randomFn),this.nTexArrMQ=e.createNoiseTex(256,4,this.randomFn),this.nTexArrHQ=e.createNoiseTex(256,8,this.randomFn),this.nTexArrVolLQ=e.createNoiseVolTex(32,1,this.randomFn),this.nTexArrVolHQ=e.createNoiseVolTex(32,4,this.randomFn),this.bindTexture(this.noiseTexLQ,this.nTexArrLQ,256,256),this.bindTexture(this.noiseTexLQLite,this.nTexArrLQLite,32,32),this.bindTexture(this.noiseTexMQ,this.nTexArrMQ,256,256),this.bindTexture(this.noiseTexHQ,this.nTexArrHQ,256,256),this.bindTexture3D(this.noiseTexVolLQ,this.nTexArrVolLQ,32,32,32),this.bindTexture3D(this.noiseTexVolHQ,this.nTexArrVolHQ,32,32,32),this.noiseTexPointLQ=this.gl.createSampler(),t.samplerParameteri(this.noiseTexPointLQ,t.TEXTURE_MIN_FILTER,t.NEAREST_MIPMAP_NEAREST),t.samplerParameteri(this.noiseTexPointLQ,t.TEXTURE_MAG_FILTER,t.NEAREST),t.samplerParameteri(this.noiseTexPointLQ,t.TEXTURE_WRAP_S,t.REPEAT),t.samplerParameteri(this.noiseTexPointLQ,t.TEXTURE_WRAP_T,t.REPEAT)}bindTexture(e,t,n,r){if(this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,n,r,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.anisoExt){let e=this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);this.gl.texParameterf(this.gl.TEXTURE_2D,this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,e)}}bindTexture3D(e,t,n,r,i){if(this.gl.bindTexture(this.gl.TEXTURE_3D,e),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texImage3D(this.gl.TEXTURE_3D,0,this.gl.RGBA,n,r,i,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.gl.generateMipmap(this.gl.TEXTURE_3D),this.gl.texParameteri(this.gl.TEXTURE_3D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_3D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_3D,this.gl.TEXTURE_WRAP_R,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_3D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR),this.gl.texParameteri(this.gl.TEXTURE_3D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.anisoExt){let e=this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);this.gl.texParameterf(this.gl.TEXTURE_3D,this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,e)}}static fCubicInterpolate(e,t,n,r,i){let a=i*i,o=i*a,s=r-n-e+t,c=e-t-s,l=n-e,u=t;return s*o+c*a+l*i+u}static dwCubicInterpolate(t,n,r,i,a){let o=[];for(let s=0;s<4;s++){let c=e.fCubicInterpolate(t[s]/255,n[s]/255,r[s]/255,i[s]/255,a);c=Math.clamp(c,0,1),o[s]=c*255}return o}static createNoiseVolTex(t,n,r){let i=t*t*t,a=new Uint8Array(i*4),o=n>1?216:256,s=o*.5;for(let e=0;e<i;e++)a[e*4+0]=Math.floor(r()*o+s),a[e*4+1]=Math.floor(r()*o+s),a[e*4+2]=Math.floor(r()*o+s),a[e*4+3]=Math.floor(r()*o+s);let c=t*t,l=t;if(n>1){for(let r=0;r<t;r+=n)for(let i=0;i<t;i+=n)for(let o=0;o<t;o++)if(o%n!==0){let s=Math.floor(o/n)*n+t,u=r*c+i*l,d=[],f=[],p=[],m=[];for(let e=0;e<4;e++)d[e]=a[u*4+(s-n)%t*4+e],f[e]=a[u*4+s%t*4+e],p[e]=a[u*4+(s+n)%t*4+e],m[e]=a[u*4+(s+n*2)%t*4+e];let h=o%n/n,g=e.dwCubicInterpolate(d,f,p,m,h);for(let e=0;e<4;e++){let t=o*4+e;a[r*c*4+i*l*4+t]=g[e]}}for(let r=0;r<t;r+=n)for(let i=0;i<t;i++)for(let o=0;o<t;o++)if(o%n!==0){let s=Math.floor(o/n)*n+t,u=r*c,d=[],f=[],p=[],m=[];for(let e=0;e<4;e++){let r=i*4+u*4+e;d[e]=a[(s-n)%t*l*4+r],f[e]=a[s%t*l*4+r],p[e]=a[(s+n)%t*l*4+r],m[e]=a[(s+n*2)%t*l*4+r]}let h=o%n/n,g=e.dwCubicInterpolate(d,f,p,m,h);for(let e=0;e<4;e++){let t=i*4+u*4+e;a[o*l*4+t]=g[e]}}for(let r=0;r<t;r++)for(let i=0;i<t;i++)for(let o=0;o<t;o++)if(o%n!==0){let s=i*l,u=Math.floor(o/n)*n+t,d=[],f=[],p=[],m=[];for(let e=0;e<4;e++){let i=r*4+s*4+e;d[e]=a[(u-n)%t*c*4+i],f[e]=a[u%t*c*4+i],p[e]=a[(u+n)%t*c*4+i],m[e]=a[(u+n*2)%t*c*4+i]}let h=i%n/n,g=e.dwCubicInterpolate(d,f,p,m,h);for(let e=0;e<4;e++){let t=r*4+s*4+e;a[o*c*4+t]=g[e]}}}return a}static createNoiseTex(t,n,r){let i=t*t,a=new Uint8Array(i*4),o=n>1?216:256,s=o*.5;for(let e=0;e<i;e++)a[e*4+0]=Math.floor(r()*o+s),a[e*4+1]=Math.floor(r()*o+s),a[e*4+2]=Math.floor(r()*o+s),a[e*4+3]=Math.floor(r()*o+s);if(n>1){for(let r=0;r<t;r+=n)for(let i=0;i<t;i++)if(i%n!==0){let o=Math.floor(i/n)*n+t,s=r*t,c=[],l=[],u=[],d=[];for(let e=0;e<4;e++)c[e]=a[s*4+(o-n)%t*4+e],l[e]=a[s*4+o%t*4+e],u[e]=a[s*4+(o+n)%t*4+e],d[e]=a[s*4+(o+n*2)%t*4+e];let f=i%n/n,p=e.dwCubicInterpolate(c,l,u,d,f);for(let e=0;e<4;e++)a[r*t*4+i*4+e]=p[e]}for(let r=0;r<t;r++)for(let i=0;i<t;i++)if(i%n!==0){let o=Math.floor(i/n)*n+t,s=[],c=[],l=[],u=[];for(let e=0;e<4;e++)s[e]=a[(o-n)%t*t*4+r*4+e],c[e]=a[o%t*t*4+r*4+e],l[e]=a[(o+n)%t*t*4+r*4+e],u[e]=a[(o+n*2)%t*t*4+r*4+e];let d=i%n/n,f=e.dwCubicInterpolate(s,c,l,u,d);for(let e=0;e<4;e++)a[i*t*4+r*4+e]=f[e]}}return a}},dn=class{constructor(e){this.gl=e,this.anisoExt=this.gl.getExtension(`EXT_texture_filter_anisotropic`)||this.gl.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||this.gl.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`),this.samplers={},this.clouds2Image=new Image,this.clouds2Image.onload=()=>{this.samplers.clouds2=this.gl.createTexture(),this.bindTexture(this.samplers.clouds2,this.clouds2Image,128,128)},this.clouds2Image.src=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4RP+RXhpZgAASUkqAAgAAAAJAA8BAgAGAAAAegAAABABAgAVAAAAgAAAABIBAwABAAAAAQAAABoBBQABAAAAoAAAABsBBQABAAAAqAAAACgBAwABAAAAAgAAADIBAgAUAAAAsAAAABMCAwABAAAAAQAAAGmHBAABAAAAxAAAAGYFAABDYW5vbgBDYW5vbiBQb3dlclNob3QgUzExMAAAAAAAAAAAAAAAAEgAAAABAAAASAAAAAEAAAAyMDAyOjAxOjE5IDE3OjMzOjIwABsAmoIFAAEAAABWAwAAnYIFAAEAAABeAwAAAJAHAAQAAAAwMjEwA5ACABQAAAAOAgAABJACABQAAAAiAgAAAZEHAAQAAAABAgMAApEFAAEAAAA+AwAAAZIKAAEAAABGAwAAApIFAAEAAABOAwAABJIKAAEAAABmAwAABZIFAAEAAABuAwAABpIFAAEAAAB2AwAAB5IDAAEAAAAFAAAACZIDAAEAAAAAAAAACpIFAAEAAAB+AwAAfJIHAJoBAACGAwAAhpIHAAgBAAA2AgAAAKAHAAQAAAAwMTAwAaADAAEAAAABAAAAAqAEAAEAAACAAAAAA6AEAAEAAACAAAAABaAEAAEAAAAwBQAADqIFAAEAAAAgBQAAD6IFAAEAAAAoBQAAEKIDAAEAAAACAAAAF6IDAAEAAAACAAAAAKMHAAEAAAADAAAAAAAAADIwMDI6MDE6MTkgMTc6MzM6MjAAMjAwMjowMToxOSAxNzozMzoyMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAQAAACoBAAAgAAAAuAAAACAAAAABAAAAgAIAAEgAAAAKAAAA/////wMAAACK+AIAAAABAL8BAADoAwAArQAAACAAAAAMAAEAAwAmAAAAHAQAAAIAAwAEAAAAaAQAAAMAAwAEAAAAcAQAAAQAAwAaAAAAeAQAAAAAAwAGAAAArAQAAAAAAwAEAAAAuAQAAAYAAgAgAAAAwAQAAAcAAgAYAAAA4AQAAAgABAABAAAAkc4UAAkAAgAgAAAA+AQAABAABAABAAAAAAAJAQ0AAwAEAAAAGAUAAAAAAABMAAIAAAAFAAAAAAAAAAQAAAABAAAAAQAAAAAAAAAAAAAAAwABAAEwAAD/////WgGtACAAYgC4AP//AAAAAAAAAAAAAP//SABABkAGAgCtANMAngAAAAAAAAAAADQAAACPAEYBtQAqAfT/AgABAAEAAAAAAAAAAAAEMAAAAAAAAAAAvwEAALgAJwEAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAElNRzpQb3dlclNob3QgUzExMCBKUEVHAAAAAAAAAAAARmlybXdhcmUgVmVyc2lvbiAxLjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAMgAuQC5AABqGADOAAAAgE8SAJsAAAAEAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAEQAwABAAAAQAYAAAIQAwABAAAAsAQAAAAAAAAGAAMBAwABAAAABgAAABoBBQABAAAAtAUAABsBBQABAAAAvAUAACgBAwABAAAAAgAAAAECBAABAAAA9AUAAAICBAABAAAAuA0AAAAAAAC0AAAAAQAAALQAAAABAAAAaM5qp6ps7vXbS52etpVdo/tuYZ2wtrDFXnrx1HK+braKpineV1+3VFWVteo72Poc/9j/2wCEAAkGBggGBQkIBwgKCQkLDRYPDQwMDRwTFRAWIR0jIiEcIB8kKTQsJCcxJx4fLT0tMTY3Ojo6Iio/RD44QjM3OTYBCQkJDAoMFAwMFA8KCgoPGhoKChoaTxoaGhoaT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT//AABEIAHgAoAMBIQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOdCcU4R11HMSLHTxFTAXy6PLxQIUJTglIDo9KtbWzjScNvnK/gtao1FkycjaO1ebWvOWvyR307RjZfM5zXoraacTW3DtkyD1PrWathui39q66cmoK+60OacU5O2xA8ZQlT2qBkrdfmYsiZMUwpxVCImXNRMntTERlaaRg0CN5Y8iniOszUlWOniOgQhj5o2UwDZS7KBFmAuoCnIAq69wUjIHPHWuaok5HTBtIqrbzXCMyAEDqCarPvGV6Yqlbb+Xch337kBTOd1RNHxgCrc+xKgNWAPxyD2qCWMAY7g81UJ83yJlGxCy4qJlzWqMyMpTClAjoxCUbDCniP2rK5qOVKkEdMA8ummPmgA2Vd0m1S4vMTIXjUEtjtUzdotrdLQcFeSXQfcQqJ2y/GaZL5fkhE5Y9TXPFt2Zu7K6IUinVWVW+XvjvSNCsceScsa0k1067kRT69NisY8mnC2YoWA4qL2KtcglyjcVVdd78daqnK3zImr/IheFgTkdKiZK6ou6MJKxGyUwrTJOxmjaS2WYqwjLHbnp9KBaeeB5MbZxzXLGVlfotzpcdbdXsQiKniOtSBfLppjoTE0NMdPiYxElSRmiSurAnZiSMTzmmKSDmpUdCpS1NvT0TUoHEjpGQcYC8n3qM6MJdxgYuF46VyyfI2ui6nQlzJPq+hDPo0qcKNz/wB0U54Es7co/wAzkcgdAamU01ZbtjUWnrsjDn+dzxiqpjYHK1aZDHJGQmM9ahe2zk+lbU5WZlOOhWZKjKV1nOddYTPLpptjztbcB2NTBXibaSUOOma4IWt+h2y3/Uj8rmlEdbJmLQpTjpTNlNCYnl00x1RI0x00x4oARd6tmPIPtW1o+uf2fGd+GORlcdffNZVaaqRt1NKc+R36HQxWsWoqbmGQ/MMkg4rL1bSdi5UV5fM4ys9LHfZNXXU599Lkd+FNMbSzGPmHNb85lyFaS32HgUx8pGcqK2g72M5aGY8fPSomSvRRwndafZfYtRCzL8rHFaPiPTTHKlxHGEjKhTj1ryKU/wB4uzR6dSPuPujF2YIzTxHxXamtuxyNPfuIY+KYY6okDHg4pHQIMsQKLhYhV0dtq8mr6aQ8loZRy390DNZVKqgr92aQpczKcd8+nXefLHAwVI6028nt7mTzIY/KJ5IB4qI3UuZO6fxIuSTjy21WzLmjXs9rKFidgM/dzxXTJeRECC5ZN5XPWscVTTlePxM0oS0s9kUriaIEiIKAPzrFup/3uBzmopU3fUqc0isTEQWftVWZ0dPlWuqNNr0RhKafqzOlh6mq7x12RZytHqssMcwSfy0wwyDuxRq2oCew8gxjdx1HT3rx6Uby9GenUdkc/wCSpPzdaV4WVeFJru226nLv8iFVc/eXFKYsCqi7omSIjHzS3EKSRZBJbHNOWwRMp4WjO/O0Z4NWUubuGParnafSsXFS0ZonYRo/Pwzcmk8gL0FbQgkjOUncfFK9sSU4JpkkzO+7Jz9atRV7mbk7WHpczAcOT9aUqzgu3Ud6lxSd1oylJvRkMgDZJJzVSTK9KqKJbIGJqJlzWiViG7nfW1/ZK8XJUDqT0q9q08V2sRiL5HAG35SD3Bryaalzps9KduWyKt1pjWoXzG2uRnkcCs+8ee2YKJUbIzx0Iq/bXemiRPs7IY15Ey7m+TA5BrPuNUDIyCMDnhs81rz3SsZ8tmXbFDe2DTKVzHwyk8n6Vl3944Zo04A7jvT9pp5oOTX1Mp5GVsnmtG21aEQKkikFRj604SFKJOmpWrHAYr9RUjMGXKcg9xW0WmYyTREwNN281qZkqphQRwacCMYPHvUPUpCPGhXORmqU0fNEXqEkV2j9qjKVoQa+GAALE47VPDezRYUOdo7V5CkelY0pb+eayOJt4PG1uSKxpEkQkkmp0T9StX8hnm5GCM1GUBzVXsIj+deFYge1NMTueuapyJURr2jMvTmqclq4PK4ohMJRIhGwNadgLolUjDMvcVtz217GfLc2PsuSQQdw7Uw2pU/MCK6FU6eWhg4afmWLeKFkZJcg9mFRzac8MSyMRhumKnns7PZvQOS6utLblaRMLyR9KhkhVVBDZzV21TFeysVXWoiK1MjttV8O/YWyXVgegFZRsTu4FeHdp2e63PWSvqupZtrbadpHFPnst4xgVDlqUkUX03ax7VEbNd3ByapSbFYDYKw4PPpTv7LdT0wRVq703J0XkBtlU7Sy7qje1yMMtJpoaaZWbTCZOB+FdVo+n/ZrRXaEh/pwacptxEo2ZZfRBLmQNskY8g1lXmm3VsS4IZaaxDvZ9NifZK35mUZbp7odD6jGK3jcotogmgUrWsp3tZ2sTGO+nqZr3Flco6JEEdc7eetLDoElxEH81Vz0FbQrOEby9530MZUlJ+7ppqOOgRxDMrqcdumaqz6Xa55YJnphqaxE5PRadgdGKWr17nd+cl4VFzGHAq0NEspRuRNp9K5vYxm3e6b2ZvzuK027CroNsPvLz6iql7oICFkOQO1RPCuMbp3a3Q41ruzWj2MG604xZJrInQoSVHPrXPB3NZEYlm6bM0gup0+SQttPXmt42W25DuRTW7ht6qXX1qxZSSSttZcqPWrjJPfXuiWrbGgFiADHBxW9p1z5dv8AvW3J2B7VbUeXuQnK/kM+0SyTt5GSg/ic8VUv7xpodrDn26Gs5wj0+LqXGT67dDFWLEhfkGo5nklyrE4qlC9vwJcrFRbJVl3GtO1njhTqQR61u4StYyU1civ7sSLtAJ981kSLnPJrelHlRhVlzM7yLTdTtJuu9Qe3NdBbGUorMFJxz2NcFPnUrWO2XK4lsdKCARg13bmBSurCGU4aMtn0qjJ4Xt3YnP0GK4pYbmk+X3bGyq2WvvFKTw5IpIRAR61Fc+Gttvvfn1GOlYeynHVq1uprzxfzKcCW1mdroXU8YIqQR2KA7AxPUgDGKiz3TKutjPnjic74jtB9TzT4p58Bc7yOm6tItrfoQ0mWEubtZf367l7DtUqq1w24gKg6kDpW0FFrm7Gc207dynKqqzAoOehFVmhLdFJ/CumKtuYN9gGnzuPlibmoXs5VJBXkH1qlVjtdEezlvYimtJEXLow/CqErIDWkZp7WZEotbnrsTkjrmphz1rGDutdToloxaK0EMkU9VGSKRDIQd4A9MVm+ZS0+F7selvPoNDuHw3T2oJWUlWH50r3Vn1HtqjG1LSmVS6DdzxxWQ+nTSTcghjXBKPs3Z/I6IvmV/vK7aWYptsp2jua0LG3tllLQZkK8dO9C95227g9FfcmuFnnUrtyF9BUthHhfLkjO0n14zXToo2WhiruV2JqFtFGNyxoSPUVztzrdzBJhdoVewFZJ8zs3dLY0a5dVu9yCTxLKUPyDd2NZE+tXDyF84J74rSMEiJSbKFxqFxMpDyuQe2azpN3dj+dbRlbYzkr7nvCJkYxsP95eDUqxyA584t7EVnTi+j5fLoaSa66+ZOM45orqMgooAYwqNhis5DQ0yMBio2Zm7ZrNu+5VrDNizPsdFI9CKjNrDCuEiCZ6kcVlKEd7fMtSe34DY2jV8YKknvzTLqUQcs+PwqJuyuVHU5TWtVeaX5coq/dGaxpLxpUw4zjvRFKwSepAF85SUGcdRVeaJh/DiqvZ2JsZ86sDz0qBo2xu/hq0yLHvy9KeK2pkvcdRWogpM0AIaYwqJAhNq1FcPKoHlIHHesZNqPu6vsWtXrou5HuK5YLzjjNZ1/c3YiIUZX+8vauec36LqbRivV9DNivriYlWOdo6HmrxleWIBgDx3HSpaugvZmDqFuWYgwKSPQVlsjxIym3BUgjmoXa+xT7lSOzd3PkAq3YZpby8vVASeNendBzWukt+nUz22Jo7S2v4A3lFGxzg1Rm0l4m+UMVPqKlSa03Q2k9T/9n4qqwQ2C6FUcJKhVwpbQ1vCsihOUlK0km1lS0VoSE2qiF4TrpDJE0aZJK5EgBF7pQGeoyWHrHyLxlrwklpeaZbWWmyFkkIa43/2P/bAEMAAgEBAQEBAgEBAQICAgICBAMCAgICBQQEAwQGBQYGBgUGBgYHCQgGBwkHBgYICwgJCgoKCgoGCAsMCwoMCQoKCv/bAEMBAgICAgICBQMDBQoHBgcKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCv/AABEIAIAAgAMBIgACEQEDEQH/xAAeAAACAwEAAwEBAAAAAAAAAAAGBwQFCAMBAgkACv/EADcQAAEDAwMDAgUDAgYCAwAAAAECAwQFBhEAEiEHMUETUQgiMmFxFIGRFaEjQlKxwdEW8ReCov/EABsBAAICAwEAAAAAAAAAAAAAAAUGAwQBAgcA/8QAMREAAgEDAwMCBQMDBQAAAAAAAQIDAAQRBRIhMUFRE3EiYYGRwaHR4QYU8BUjMnKx/9oADAMBAAIRAxEAPwDNEamJCR8v9tT4dJ3Zwn+2rSHStzaVBvOrSDShnBTpvDYpbIBqsi0QKRn0+QO2uwpJQQCjRFEpR8D+2uj1LIXjb/bWwfmtNvFDqaWE/LsHfXZFNB/y6uVU75uUjj7a6NwMfMEfjWd3Fa0f/DB0mtK7KpIum8KgUxqQ+0pmE2EqMlzOQFA/5MgZ/J1q2L1glUxsPtIbbitNpW80EgbwSO+PGsWWjUqhRZy/0Tqkh1OFgH78aaKLzm0i28SnlLddYwk+wGdJH9QafJd3QLtkdh4802aNeRwWxCjBHU+aA/iosex//ktysdPnN8SpAOymM/M1IUo7/wD6k8jS8uTpxPthCJL3yuJSFKGOwPY50wavS7gnU3+vro7i4QXkyA3naoc86FrhnVGqpQl1SvTI5QVZzycHR6zkmiiSMvkLwSevtQe7WJ5HcLyeRS/q0BHqLc9NIKjyB50Pz6cEkkj+2j2qUlDRWfrJSQEgdjqqRbKKkVMJe2uBO5KSngn20SW9t1OC1DjaTsMhaBKhBCWt23A841QVGnBaiQ3n86O67TGWigR1bsg7hjkHPnVFNiJSgpIyc8DRBDxVRhjigmVAAP041CcaW2rcgYI9tE82n5PCedVkqAUkgJ1uQDUXfFaZplIUMsqb2kHke2rGNSylf0g8+2j2rWvRZtbjvxXY7EV14tuymdxzknCiD9hnge+oU+110+WtoLS4hKylDiBwoe/+2gkVysgB80akhZCQao4lMCk528jXRykKJ3bfxq8jUopABT31KXSRn6NS7sVFjihNVM+Y5T24zr1FPIVt26I3aUoEkA9+2uCqaUuDKdShs1oQM0bVvpPAtizaDUKLKVIVUYaZcxTrQSpl4jBQPOE/7k6rK1QUU213PUmJVLeWG4zTSgoff8Ht/Op1239WbjjNqqMgKDLKW0hCQkAJAHYceNC8aprVNbW+nKErG7nxnnGlyG3vJcvIckHP8f4KNyz20QCxjqP4rlFq98KoZs5ptxmKuQQ4kZBK/PPtjx21U3NbopREMhKlgfOQex9taAhdK3uofT7/AMo6eUh2PBElXqOyn0bFKT9XJOQRuHccg6BKn0RvByUUyqI+pxbZWnCchSQcZyOMZxzqs97E5IwFweR3z86nS0dFByWyOD2x8qULduuOOfIwVcZOBquqaEUV9t1EMBQz3HjTz6c9OpUibLl1aKGIsMelIekfKncoHAB8nj9tK/qfDpiqu9Hp3KWyQCR3++q7XStcel4FSiAiLf5pTVmEhcl1aOQok8e+h2bTVBZJGD99HAYnQZKxCYSXHRt3LQFAZ+x17XBbjT0VpLURKNqcFwJ5Ufvpms9VUuEfvQC609gpZaWMqAcnjzxqslQwBx+2jGr0ZyI6WHmsKx/OqaXTu4KfxjxpgBDDNBDuU1t2HUKReHSW0yqB6D9NEhh+Q0jIWvcFBC/bgkhX3I8al1mQ5ULdj0gUeKw2zIW6hbKDuJICeSSf9I0c/Bn0Pi3xcL1o1iSmP6chKz6qcjaPlPB78Ej99D9etp63K1OtySfUMSU4zuAwCUqIz++Nc70q8huB6SHLJz9yaeNQt3hbe3Rhj7AUJMUc8fJru5S0+n9HI99EcOkFxO5ScY9hr2k0hIbPy+PbTCX3UEA2mg1ym7gfl51Hk0rCdwbOilVLUkkFGvC6SVEkI/IOrAkAqBlNBbkJQQQnODxqK7TFIPKNGTtFZS4d+AAMnOvU2dPqEN6bAhuuMxwPWdbbJSjPbJ8aw9xFEMk4FeSOSQ4UZqNY/V26LLpj1qR5CjT5K8uhP1oJKclJJ4+ka2DZLVgdROlbVDtKII9wohsKeDxG8Mn/AD4BI2naPPdWsxdOennSm511K27kulcCqlgKpUpxQ9FSwPpV7A++ovTq+Lw6IdUGJcSWmQuG56DjbUrc082T9IUONvn/AI0rana2msB1tjtlX4vG79x2/wDaYLO4udM2mcZjbjzinj1f6PXNEtfDtIYjts8+nETj1FEY3qz3JwNZJvGw566u4n0FbiTu419Ird6o2r18oaWnIiYr8mKlT0dXdteSCArGCMAY/wCNKq8ehtl2tMcl1LY8+SpSGkjsOcE/9aRrbULm0maKZfiHamiW1huI1dDxWGHOmU9tkPyIpSM5STqGKHBTIEea2VJB5GtFXzCob812AkIbUjgADHGgWo9OY7Sf1jrjYDhJQpRxxpktbidjlxig08MSjC81nbqPSKe3Wj/Twop9IbwrsFew0HzaeE8lPfTav+22WqissELUSd2DxjQRVKQGx8qPyddMsJA1qgz2pDvEK3LH519dunnRiPZfXiDc8OoxUU1x8IdUy6NqwrIBx3wSM6B/jNsG2aZ1fdlW5LbWJ0Rtx5pAyW1425J7HIAOmjYxrN8yqTb9UoEanKXT0h+ey8lTrxGcKScZRn2PnzpWdXKVKYvqo0559+U7EfLSJMiOW3HAnspSTnx57Ec65F/TyYuid3IGDjx710nV2zAo28Z/X2pVU+2JMJrZIVk9xrg6xDkLWww8lS0n5kA8jRo7NtiAwpF0SVNEK+YIQdwGq9u16ImOzWqO8l1qWne24MHI/wCD9jpvhugGEakEDrzS/Lb7gXYYJ+VCS6c5HUHkJ+dJyCR2OudJpEya86zGirce27m/TTnGOSSPbV7dM2FRkw0uOMqEuQWfkeSVIUMd0jkdxqM4HqK8qR6oZ9MEOlRxgeQdXBcJIp2HmqZt3jcFhxShvufX6ZWQuS84SlZJaSOMZ9tMzpz8RVmUmy5do120UuNPJBSyklG5eACSR3yB2++ll1F6rW69WZKItHTIUUFDD7rpGxefqwO478atrNtyFeVoR6o84gPeotC1NEDJB4PbQie3W/X02PGc9aKRTf2R3gVUXJRH59xuVSgRzGZcXuQ2CcIB8DXWHClMOIdlLKlA5yfHPfRk1bbkOElp9e5aBtzjwO2qmpNMxspTjPuPGjVnZpGB5FCLq7eQkY4o+HXyRYtowaBY4ALMlt5ySpeVhSQNwPH0nAI9hka6TPiakXWt2Rcqn23HUkrDaApJXwMjz7/zpRyWSpzcPOplOghLaHZLSi2VYCgNYk0PT2G5kyx79+awurXoOA3HjtVjWqgqq1FdVUVqbWCGyDhQOPOhK6KnV3VoVJdWG0AhAHkaNJUQrpbcVLSAVnd6iOVHuMaFrnp0tpKv1BJUgYIOpLeKFTtA6cVFNNKRknrzQLV5sV1agWjz/mPfQjVYSFLUWxx4zorqsBwun5cA6qJEEkH7edGIY1iHw0NkdpDzWvLB+KW9rXr0OpN1x55tbXpTQtsbkoOAQkqBwQBweccadHTfrT0wrFz1K5ruuWfOcl00x4s2SylTsde0JCl+OEgpBHP2GsvVG0ajCfUw7CIKDjKRqw6eyKjb9cbdMcPNKc2vMujhSc9jri6Tw+myrhdwwSPFdSaNyyk84OaPut/WO1oTkuzG6PFmul8LYrDBO5SMHIVu5UVcfg9u+l1Gvup0+lLRb0v/AA8ENtvEkNk8naNEd4dNl1J1+tNx0oU4srS0Owz4GfGltMo1VgTDGfWpKEqzwO+orW8WIARtgit5oC+d65BoaqIqqpSprkle71crKlHg50fdVevFq31ZdPt+NbyoU+PT249RloUNstaCT6pAAwo55P2Gh1+lSnt7CmS5nJScarUWstThbciFWOT8vYaIJqWcFjyPzVVrME4A4oErdLE1tamV5JOQfY6pqZeN22Sp1mkVd5lLowtKF8HTjh2HBfaSEIBJByPbQ/cnRhLzS5cTJOSSlQ7a2ttYEUmCaxNp5kTIFD1rfEHekScluoTjKaUseo2/yQnzg+NNinTqPdba36FN9cJA9RJGFJJ5wRpNW/02nTa81SGYpLrrwQkbfJONao6f/C3UunPTxd5Sn1LefdQlUb0+R3IP8aY7bW0jnRC3/LigdxpfqRMwHSl2/RH23Ni2SD7EauaRa1RlUaRLjxS4iMAp7YeQCcZx5AP8Z0aVyg0RgNvSZxafWfodSBzjjj+PxrzRK43aFX/Rwq9CccqLKmlNMvhRJIKcKT7j799GG1ZJIvhI3ePahY0x1k+LO3zS+juvtOBpvCcqHJAONV931CVP+R2GhWVY3oRjb/Gn51R6ET0Uin1i0LUHomIgyW2RvWF4PJH1DPck+4xxxpS3ZR61Zlddi16gNtnaU+m4nKT9xrW3vYL0BoSN3jIzxWJbSazOJQdv1xSlrFLbSokg5OqWRBSXDuIH50dVKmVCrOLMOEpz8J7aoa9Z1w0Vaf6tRZLBcA9NLjJG7PI/9aPRyDAVjzQhkJOQOK+lfxU/DzTVXM2enFkf4D6C4+7FbKxu85OcD8AaTUH4erjaeLrNGcSsKwpBbP8AbWtOiV5zKnVG00SptyUrOFpS8FA/YjPGnW3QrdrITOcpLaXQQTubwQR7++uKLok12zehIBz0I4x8iD+mK6h/qKQKokQnjrnmsCu9MJ8ajpZqNLWktpwoKTpe3TZtDZlrUI+1e3JCm+M6+md1dN7VuuCqPPpTW8NkNrQkAg447ayz1t6Ff0FMh5qlrKjnZhPnGhGqaZe6RIDL8St0I/Pir9nfW98pAGCOx/FZFbpkB2oKQ5BbbU2rAUrhK/tqxj2pa8qQp+tPMw1hISyMEpd57HGcHnPtgak3h0/uKbP/AEkeI6CFH6UEYOqef0lvNcb1XZDoWk7kJUrnOtreSHgsRXnVyOBXpd67Jst8xKdHMtfqAKLY+VQ8lKh3/OuUe2oVxRjPpAzv5LDn1t/Y++ulF6e1y9YZtp9paKgw5hlwpJ9XOePznU/p70tvqgXO8K3EfZEMFBTggLXgkDH7dtEi9hM2w4WqoFzGu5cmudk9B4NWvmImcoRGluBTkoJ4SnI5/OtnMdO2rdZgVKt1mNJgtsJERQQPTkYCRtxyO2SSeTu1nqk3TETV4dKVFTGUtwpkGQsJSnHPCjxp41S9alWbWVY1syI7UVhLf6mXJeAbYHOTvP8AqHAAz286llsrV1TEmfwKhW5uFZspj8mqjq58PfTe6KC7Vo8KNGU2hS1ORlggr5OMDkcax3UulMFfUVuO5MUhppe5DxPbHOONa2u2NVKBSlMUCVNkMuR0plPvpAaWvn6M4OPzpL1C3pcOovOymwXSFbVBOdufI/71pY288UpEDllPT81m5nieMGVQDUTqj1OrNm2221bF3PrdRGLLxaePJ5899DvTLqJROq9VpznVGC++mG2WnGwCQ8rOAT5z7/jXpUbcW+46mpI3kqyk9+NelvvtWe4h2nx0ZQ4CpJT3HnTFp2n3CpvHXnnoaDXt/AW2k8ccdRTerNsdGbepiq7SbPZSQz6qmxFUSkHt4IHP99KK7OtdlxnltsUKS4VEpfadOAMdsfcHVldvVKtVOkriQ3VRy4r/ABdijhQHYY8aUldil1TinkBSl87jotpmj78tdkk/9iaGX+rCMhbYAD2FfTe1PgzqHT+7UXJatwF6M1IC22ivDm0HI5Hn99Puh0+RTssKqLzzeMpTJBKk/bJ1CtaWzMbJizUOBBIWE5BB/BAP76vmySnn++hul6faxH14iefnkfT5e+aLXl1O/wDtv2+VedVdx04TlMtoajFS1FCvXZ3ZSe+PY41aaj1GK7LjlEd703ByheOx0VuohNAVxmqcTbJAaD698P3TisQZDDVDbZfeOQ+ngpP/AFoJY+Du3xUkzKrLalsDOWcFOD+f402Y9MqzVLdaqNS9V8kltxJIIGOBqPGl1OBGcDzO9RPClL57HQKXR9JkZXaDZx24+4HFEEvrxAVWTPv+M1k7qf03c6UXG5Kt+2W3S0slmSpsgd+/PfA/31VT+rw5XV7Tgxqi9HLzsh5IWXMA4wk8Jz/61qfqf0ypfUSkqnMtgzWo69iSTySOBrOVT+Fy8H6k2xVqTIbS4fmf2ZShOlG+0xrOUqyZU9CBnj+KN214J1BBwR1FI+5axbN0SRL9L0pTqgXGkNYQhWPA0QWv0pvrqJRAqgz5amow/wAJv1fkGMnsfHJ0Vv8ASGj9La+5Vbzt+XLisglpLUc7XecABXj8nTHoTFTdsaIbcguUlh0BSWW1J3ZcAyFecD/nWbRTI/pxnbjz+1YuJPTTe4z7UtbWoF2XPOYtepy1L/TIUpwOOhKUJQMq559j/Oqu+qXW4tYcRS6bMQzKQENMrQcqTjgcDkeR9tN+2enl4Wncypj8OO+AMu5SpaCnIzyPOrvrrU6bS7f/AFKKm1FfWgpSoqSTvxnA9iNMM+orZlSoDADH17mg8Nm90DklST+nYVmdfQq/6q4hX9CDKXRu3PvISEjPcjOf7Z1X3T0BlW/SHKtU7jhD0nQhxDIUoJ9yTjxnwNBV/dYep9r3K8+xXpYCuEoWtQBTnjH2Ol31P+IPqddDCI8utO7UIx6bR2p/cDv++rKanqbspVlA9v3qBtPsVBDBif8APFMWtWPSqdTnahIuultpwfSbmv8ApKUARhQye2Of20lbs6o2bDkriqrsJWxW0rbVuSr99ANzXLXZ29dSlur+XlS3CdLyvRW1rWsOg55I76MWupyoT6jbvpihtxp8LD4Bj61/RJHoRq8ZmNWFvJWyrcxIjultxP7juNXdEoJouRFqT7rSvqTJXuOffOvaIT6YBJOBxnU9ogpwBjVbTrSDAkxyMc9/5q7NcSOSvbxXtr9r9r920ZqrXhYBSQdQJjQIJx+dTVup7ajSNqknPtqCcAx1lTg5qllPvxcltwj8agSnqpIQSEuqB7nB51dqYjlRLo75BP2xquu+ZckWnoNqw0StqgH2lOYUUeQPzoHM/pRM7E4HYDJ+1EEw7hRxnueB96rabFcqrkmPJa9UNoBLK+x+bng9+NU9woj0+Utb1vtObAMteiR6ae+5I8du+plWqFah0t5VKbEV1xW4uuIO5IA4Bz986z71mvbqpRbmTUaqX429sNhyO4r03BnIWOfIxn8aA3N9CsigDnyen3olFayFDk0665W4Eq1v69HlyC00raWmlBSkKzwSPtwceQdYw+L3rDWLhqggJQ41FiI2RcnBWc/MtQAABJ8eO2tAWXcl2/p3WX3S4pwpVuWySl3I/wD1pQ9erfrM2c+0i3I8sFBcQtMTkI7c7e3PvoZNcPHcCQjj371aiCPGUB5rLNfviqyKYiTU2VrbQdiXHBnIz21CqNq1WpwUzaPDMhtxsLCmkZwD747aOLwgXNHt522avZjQiLWHEEp+dsDcBt9uSM/jVFRLZ6vWBSZF2dNHZSIzzKm5jbRStSRzwUkHgZznHfVxLkyLxgH9DVdo1j6nIpK31QaoylfqMEEDCgBoHl0OU7HVUm2VpS3wpvGc8d9ak6WVGL1IdnW51Ht6NMmuO+ozMGGHMEYKSBhJAPIOO5OfGqC//h1doNVcnUOnThGUopKS0HAoc9iO/wDHjUqak0bGNxz+lQtbK3xrX//Z`,this.emptyImage=new Image,this.emptyImage.onload=()=>{this.samplers.empty=this.gl.createTexture(),this.bindTexture(this.samplers.empty,this.emptyImage,1,1)},this.emptyImage.src=`data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=`}bindTexture(e,t,n,r){if(this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,n,r,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.REPEAT),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.anisoExt){let e=this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);this.gl.texParameterf(this.gl.TEXTURE_2D,this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,e)}}loadExtraImages(e){Object.keys(e).forEach(t=>{let{data:n,width:r,height:i}=e[t];if(!this.samplers[t]){let e=new Image;e.onload=()=>{this.samplers[t]=this.gl.createTexture(),this.bindTexture(this.samplers[t],e,r,i)},e.src=n}})}getTexture(e){return this.samplers[e]||this.samplers.clouds2}},fn=class{constructor(e,t={}){this.gl=e,this.texsizeX=t.texsizeX,this.texsizeY=t.texsizeY,this.aspectx=t.aspectx,this.aspecty=t.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.buildPositions(),this.textTexture=this.gl.createTexture(),this.indexBuf=e.createBuffer(),this.positionVertexBuf=this.gl.createBuffer(),this.vertexBuf=this.gl.createBuffer(),this.canvas=document.createElement(`canvas`),this.canvas.width=this.texsizeX,this.canvas.height=this.texsizeY,this.context2D=this.canvas.getContext(`2d`,{willReadFrequently:!1}),this.floatPrecision=Jt.getFragmentFloatPrecision(this.gl),this.createShader()}generateTitleTexture(e){this.context2D.clearRect(0,0,this.texsizeX,this.texsizeY),this.fontSize=Math.floor(16*(this.texsizeX/256)),this.fontSize=Math.max(this.fontSize,6),this.context2D.font=`italic ${this.fontSize}px Times New Roman`;let t=e,n=this.context2D.measureText(t).width;if(n>this.texsizeX){let e=.91*(this.texsizeX/n);t=`${t.substring(0,Math.floor(t.length*e))}...`,n=this.context2D.measureText(t).width}this.context2D.fillStyle=`#FFFFFF`,this.context2D.fillText(t,(this.texsizeX-n)/2,this.texsizeY/2);let r=new Uint8Array(this.context2D.getImageData(0,0,this.texsizeX,this.texsizeY).data.buffer);this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textTexture),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.texsizeX,this.texsizeY,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,r),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.bindTexture(this.gl.TEXTURE_2D,null)}updateGlobals(e){this.texsizeX=e.texsizeX,this.texsizeY=e.texsizeY,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.canvas.width=this.texsizeX,this.canvas.height=this.texsizeY}buildPositions(){let e=[];for(let t=0;t<8;t++){let n=t*.2857142857142857-1;for(let t=0;t<16;t++){let r=t*.13333333333333333-1;e.push(r,-n,0)}}let t=[];for(let e=0;e<7;e++)for(let n=0;n<15;n++){let r=n+16*e,i=n+16*(e+1),a=n+1+16*(e+1),o=n+1+16*e;t.push(r,i,o),t.push(i,a,o)}this.vertices=new Float32Array(e),this.indices=new Uint16Array(t)}createShader(){this.shaderProgram=this.gl.createProgram();let e=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(e,`#version 300 es
       const vec2 halfmad = vec2(0.5);
       in vec2 aPos;
       in vec2 aUv;
       out vec2 uv_orig;
       out vec2 uv;
       void main(void) {
         gl_Position = vec4(aPos, 0.0, 1.0);
         uv_orig = aPos * halfmad + halfmad;
         uv = aUv;
       }`),this.gl.compileShader(e);let t=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(t,`#version 300 es
       precision ${this.floatPrecision} float;
       precision highp int;
       precision mediump sampler2D;

       in vec2 uv_orig;
       in vec2 uv;
       out vec4 fragColor;
       uniform sampler2D uTexture;
       uniform float textColor;

       void main(void) {
         fragColor = texture(uTexture, uv) * vec4(textColor);
       }`),this.gl.compileShader(t),this.gl.attachShader(this.shaderProgram,e),this.gl.attachShader(this.shaderProgram,t),this.gl.linkProgram(this.shaderProgram),this.positionLocation=this.gl.getAttribLocation(this.shaderProgram,`aPos`),this.uvLocation=this.gl.getAttribLocation(this.shaderProgram,`aUv`),this.textureLoc=this.gl.getUniformLocation(this.shaderProgram,`uTexture`),this.textColorLoc=this.gl.getUniformLocation(this.shaderProgram,`textColor`)}generateUvs(e,t,n){let r=[];for(let n=0;n<8;n++)for(let i=0;i<16;i++){let a=i/15,o=(n/7-.5)*.75+.5,s=a*2-1,c=o*2-1;e>=1&&(c+=1/this.texsizeY),r.push(s,t?c:-c)}let i=Math.max(0,1-e*1.5)**1.8*1.3;for(let e=0;e<8;e++)for(let t=0;t<16;t++){let a=e*16+t;r[a]+=i*.07*Math.sin(n.time*.31+r[a]*.39-r[a+1]*1.94),r[a]+=i*.044*Math.sin(n.time*.81-r[a]*1.91+r[a+1]*.27),r[a]+=i*.061*Math.sin(n.time*1.31+r[a]*.61+r[a+1]*.74),r[a+1]+=i*.061*Math.sin(n.time*.37+r[a]*1.83+r[a+1]*.69),r[a+1]+=i*.07*Math.sin(n.time*.67+r[a]*.42-r[a+1]*1.39),r[a+1]+=i*.087*Math.sin(n.time*1.07+r[a]*3.55+r[a+1]*.89)}let a=1.01/(e**.21+.01);for(let e=0;e<r.length/2;e++)r[e*2]*=a,r[e*2+1]*=a*this.invAspecty,r[e*2]=(r[e*2]+1)/2,r[e*2+1]=(r[e*2+1]+1)/2;return new Float32Array(r)}renderTitle(e,t,n){this.gl.useProgram(this.shaderProgram);let r=this.generateUvs(e,t,n);this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuf),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,this.indices,this.gl.STATIC_DRAW),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionVertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,this.vertices,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.positionLocation,3,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuf),this.gl.bufferData(this.gl.ARRAY_BUFFER,r,this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.uvLocation,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.uvLocation),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textTexture),this.gl.uniform1i(this.textureLoc,0),this.gl.uniform1f(this.textColorLoc,e**.3),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.drawElements(this.gl.TRIANGLES,this.indices.length,this.gl.UNSIGNED_SHORT,0)}},pn=class e{constructor(e){this.rng=Ut(),this.mesh_width=e.mesh_width,this.mesh_height=e.mesh_height,this.aspectx=e.aspectx,this.aspecty=e.aspecty,this.vertInfoA=new Float32Array((this.mesh_width+1)*(this.mesh_height+1)),this.vertInfoC=new Float32Array((this.mesh_width+1)*(this.mesh_height+1)),this.createBlendPattern()}static resizeMatrixValues(e,t,n,r,i){let a=new Float32Array((r+1)*(i+1)),o=0;for(let s=0;s<i+1;s++)for(let c=0;c<r+1;c++){let l=c/i,u=s/r;l*=t+1,u*=n+1,l=Math.clamp(l,0,t-1),u=Math.clamp(u,0,n-1);let d=Math.floor(l),f=Math.floor(u),p=l-d,m=u-f,h=e[f*(t+1)+d],g=e[f*(t+1)+(d+1)],v=e[(f+1)*(t+1)+d],y=e[(f+1)*(t+1)+(d+1)];a[o]=h*(1-p)*(1-m)+g*p*(1-m)+v*(1-p)*m+y*p*m,o+=1}return a}updateGlobals(t){let n=this.mesh_width,r=this.mesh_height;this.mesh_width=t.mesh_width,this.mesh_height=t.mesh_height,this.aspectx=t.aspectx,this.aspecty=t.aspecty,(this.mesh_width!==n||this.mesh_height!==r)&&(this.vertInfoA=e.resizeMatrixValues(this.vertInfoA,n,r,this.mesh_width,this.mesh_height),this.vertInfoC=e.resizeMatrixValues(this.vertInfoC,n,r,this.mesh_width,this.mesh_height))}genPlasma(e,t,n,r,i){let a=Math.floor((e+t)/2),o=Math.floor((n+r)/2),s=this.vertInfoC[n*(this.mesh_width+1)+e],c=this.vertInfoC[n*(this.mesh_width+1)+t],l=this.vertInfoC[r*(this.mesh_width+1)+e],u=this.vertInfoC[r*(this.mesh_width+1)+t];r-n>=2&&(e===0&&(this.vertInfoC[o*(this.mesh_width+1)+e]=.5*(s+l)+(this.rng.random()*2-1)*i*this.aspecty),this.vertInfoC[o*(this.mesh_width+1)+t]=.5*(c+u)+(this.rng.random()*2-1)*i*this.aspecty),t-e>=2&&(n===0&&(this.vertInfoC[n*(this.mesh_width+1)+a]=.5*(s+c)+(this.rng.random()*2-1)*i*this.aspectx),this.vertInfoC[r*(this.mesh_width+1)+a]=.5*(l+u)+(this.rng.random()*2-1)*i*this.aspectx),r-n>=2&&t-e>=2&&(s=this.vertInfoC[o*(this.mesh_width+1)+e],c=this.vertInfoC[o*(this.mesh_width+1)+t],l=this.vertInfoC[n*(this.mesh_width+1)+a],u=this.vertInfoC[r*(this.mesh_width+1)+a],this.vertInfoC[o*(this.mesh_width+1)+a]=.25*(l+u+s+c)+(this.rng.random()*2-1)*i,this.genPlasma(e,a,n,o,i*.5),this.genPlasma(a,t,n,o,i*.5),this.genPlasma(e,a,o,r,i*.5),this.genPlasma(a,t,o,r,i*.5))}createBlendPattern(){let e=1+Math.floor(this.rng.random()*3);if(e===0){let e=0;for(let t=0;t<=this.mesh_height;t++)for(let t=0;t<=this.mesh_width;t++)this.vertInfoA[e]=1,this.vertInfoC[e]=0,e+=1}else if(e===1){let e=this.rng.random()*6.28,t=Math.cos(e),n=Math.sin(e),r=.1+.2*this.rng.random(),i=1/r,a=0;for(let e=0;e<=this.mesh_height;e++){let o=e/this.mesh_height*this.aspecty;for(let e=0;e<=this.mesh_width;e++){let s=(e/this.mesh_width*this.aspectx-.5)*t+(o-.5)*n+.5;s=(s-.5)/Math.sqrt(2)+.5,this.vertInfoA[a]=i*(1+r),this.vertInfoC[a]=-i+i*s,a+=1}}}else if(e===2){let e=.12+.13*this.rng.random(),t=1/e;this.vertInfoC[0]=this.rng.random(),this.vertInfoC[this.mesh_width]=this.rng.random(),this.vertInfoC[this.mesh_height*(this.mesh_width+1)]=this.rng.random(),this.vertInfoC[this.mesh_height*(this.mesh_width+1)+this.mesh_width]=this.rng.random(),this.genPlasma(0,this.mesh_width,0,this.mesh_height,.25);let n=this.vertInfoC[0],r=this.vertInfoC[0],i=0;for(let e=0;e<=this.mesh_height;e++)for(let e=0;e<=this.mesh_width;e++)n>this.vertInfoC[i]&&(n=this.vertInfoC[i]),r<this.vertInfoC[i]&&(r=this.vertInfoC[i]),i+=1;let a=1/(r-n);i=0;for(let r=0;r<=this.mesh_height;r++)for(let r=0;r<=this.mesh_width;r++){let r=(this.vertInfoC[i]-n)*a;this.vertInfoA[i]=t*(1+e),this.vertInfoC[i]=-t+t*r,i+=1}}else if(e===3){let e=.02+.14*this.rng.random()+.34*this.rng.random(),t=1/e,n=Math.floor(this.rng.random()*2)*2-1,r=0;for(let i=0;i<=this.mesh_height;i++){let a=(i/this.mesh_height-.5)*this.aspecty;for(let i=0;i<=this.mesh_width;i++){let o=(i/this.mesh_width-.5)*this.aspectx,s=Math.sqrt(o*o+a*a)*1.41421;n===-1&&(s=1-s),this.vertInfoA[r]=t*(1+e),this.vertInfoC[r]=-t+t*s,r+=1}}}}},mn=class e{constructor(e,t,n){this.gl=e,this.audio=t,this.frameNum=0,this.fps=30,this.time=0,this.presetTime=0,this.lastTime=performance.now(),this.timeHist=[0],this.timeHistMax=120,this.blending=!1,this.blendStartTime=0,this.blendProgress=0,this.blendDuration=0,this.width=n.width||1200,this.height=n.height||900,this.mesh_width=n.meshWidth||48,this.mesh_height=n.meshHeight||36,this.pixelRatio=n.pixelRatio||window.devicePixelRatio||1,this.textureRatio=n.textureRatio||1,this.outputFXAA=n.outputFXAA||!1,this.texsizeX=this.width*this.pixelRatio*this.textureRatio,this.texsizeY=this.height*this.pixelRatio*this.textureRatio,this.aspectx=this.texsizeY>this.texsizeX?this.texsizeX/this.texsizeY:1,this.aspecty=this.texsizeX>this.texsizeY?this.texsizeY/this.texsizeX:1,this.invAspectx=1/this.aspectx,this.invAspecty=1/this.aspecty,this.qs=U.range(1,33).map(e=>`q${e}`),this.ts=U.range(1,9).map(e=>`t${e}`),this.regs=U.range(0,100).map(e=>e<10?`reg0${e}`:`reg${e}`),this.blurRatios=[[.5,.25],[.125,.125],[.0625,.0625]],this.audioLevels=new It(this.audio),this.prevFrameBuffer=this.gl.createFramebuffer(),this.targetFrameBuffer=this.gl.createFramebuffer(),this.prevTexture=this.gl.createTexture(),this.targetTexture=this.gl.createTexture(),this.compFrameBuffer=this.gl.createFramebuffer(),this.compTexture=this.gl.createTexture(),this.anisoExt=this.gl.getExtension(`EXT_texture_filter_anisotropic`)||this.gl.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||this.gl.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`),this.bindFrameBufferTexture(this.prevFrameBuffer,this.prevTexture),this.bindFrameBufferTexture(this.targetFrameBuffer,this.targetTexture),this.bindFrameBufferTexture(this.compFrameBuffer,this.compTexture);let r={pixelRatio:this.pixelRatio,textureRatio:this.textureRatio,texsizeX:this.texsizeX,texsizeY:this.texsizeY,mesh_width:this.mesh_width,mesh_height:this.mesh_height,aspectx:this.aspectx,aspecty:this.aspecty};this.noise=new un(e),this.image=new dn(e),this.warpShader=new nn(e,this.noise,this.image,r),this.compShader=new rn(e,this.noise,this.image,r),this.outputShader=new an(e,r),this.prevWarpShader=new nn(e,this.noise,this.image,r),this.prevCompShader=new rn(e,this.noise,this.image,r),this.numBlurPasses=0,this.blurShader1=new ln(0,this.blurRatios,e,r),this.blurShader2=new ln(1,this.blurRatios,e,r),this.blurShader3=new ln(2,this.blurRatios,e,r),this.blurTexture1=this.blurShader1.blurVerticalTexture,this.blurTexture2=this.blurShader2.blurVerticalTexture,this.blurTexture3=this.blurShader3.blurVerticalTexture,this.basicWaveform=new Xt(e,r),this.customWaveforms=U.range(4).map(t=>new Zt(t,e,r)),this.customShapes=U.range(4).map(t=>new Qt(t,e,r)),this.prevCustomWaveforms=U.range(4).map(t=>new Zt(t,e,r)),this.prevCustomShapes=U.range(4).map(t=>new Qt(t,e,r)),this.darkenCenter=new en(e,r),this.innerBorder=new $t(e,r),this.outerBorder=new $t(e,r),this.motionVectors=new tn(e,r),this.titleText=new fn(e,r),this.blendPattern=new pn(r),this.resampleShader=new on(e),this.supertext={startTime:-1},this.warpUVs=new Float32Array((this.mesh_width+1)*(this.mesh_height+1)*2),this.warpColor=new Float32Array((this.mesh_width+1)*(this.mesh_height+1)*4),this.gl.clearColor(0,0,0,1),this.blankPreset=Lt;let i={frame:0,time:0,fps:45,bass:1,bass_att:1,mid:1,mid_att:1,treb:1,treb_att:1};this.preset=Lt,this.prevPreset=this.preset,this.presetEquationRunner=new Wt(this.preset,i,r),this.prevPresetEquationRunner=new Wt(this.prevPreset,i,r),this.preset.useWASM||(this.regVars=this.presetEquationRunner.mdVSRegs)}static getHighestBlur(e){return/sampler_blur3/.test(e)?3:/sampler_blur2/.test(e)?2:+!!/sampler_blur1/.test(e)}loadPreset(t,n){this.blendPattern.createBlendPattern(),this.blending=!0,this.blendStartTime=this.time,this.blendDuration=n,this.blendProgress=0,this.prevPresetEquationRunner=this.presetEquationRunner,this.prevPreset=this.preset,this.preset=t,this.presetTime=this.time;let r={frame:this.frameNum,time:this.time,fps:this.fps,bass:this.audioLevels.bass,bass_att:this.audioLevels.bass_att,mid:this.audioLevels.mid,mid_att:this.audioLevels.mid_att,treb:this.audioLevels.treb,treb_att:this.audioLevels.treb_att},i={pixelRatio:this.pixelRatio,textureRatio:this.textureRatio,texsizeX:this.texsizeX,texsizeY:this.texsizeY,mesh_width:this.mesh_width,mesh_height:this.mesh_height,aspectx:this.aspectx,aspecty:this.aspecty};t.useWASM?(this.preset.globalPools.perFrame.old_wave_mode.value=this.prevPreset.baseVals.wave_mode,this.preset.baseVals.old_wave_mode=this.prevPreset.baseVals.wave_mode,this.presetEquationRunner=new Gt(this.preset,r,i),this.preset.pixel_eqs_initialize_array&&this.preset.pixel_eqs_initialize_array(this.mesh_width,this.mesh_height)):(this.preset.baseVals.old_wave_mode=this.prevPreset.baseVals.wave_mode,this.presetEquationRunner=new Wt(this.preset,r,i),this.regVars=this.presetEquationRunner.mdVSRegs);let a=this.prevWarpShader;this.prevWarpShader=this.warpShader,this.warpShader=a;let o=this.prevCompShader;this.prevCompShader=this.compShader,this.compShader=o;let s=this.preset.warp.trim(),c=this.preset.comp.trim();this.warpShader.updateShader(s),this.compShader.updateShader(c),s.length===0?this.numBlurPasses=0:this.numBlurPasses=e.getHighestBlur(s),c.length!==0&&(this.numBlurPasses=Math.max(this.numBlurPasses,e.getHighestBlur(c)))}loadExtraImages(e){this.image.loadExtraImages(e)}setRendererSize(e,t,n){let r=this.texsizeX,i=this.texsizeY;if(this.width=e,this.height=t,this.mesh_width=n.meshWidth||this.mesh_width,this.mesh_height=n.meshHeight||this.mesh_height,this.pixelRatio=n.pixelRatio||this.pixelRatio,this.textureRatio=n.textureRatio||this.textureRatio,this.texsizeX=e*this.pixelRatio*this.textureRatio,this.texsizeY=t*this.pixelRatio*this.textureRatio,this.aspectx=this.texsizeY>this.texsizeX?this.texsizeX/this.texsizeY:1,this.aspecty=this.texsizeX>this.texsizeY?this.texsizeY/this.texsizeX:1,this.texsizeX!==r||this.texsizeY!==i){let e=this.gl.createTexture();this.bindFrameBufferTexture(this.targetFrameBuffer,e),this.bindFrambufferAndSetViewport(this.targetFrameBuffer,this.texsizeX,this.texsizeY),this.resampleShader.renderQuadTexture(this.targetTexture),this.targetTexture=e,this.bindFrameBufferTexture(this.prevFrameBuffer,this.prevTexture),this.bindFrameBufferTexture(this.compFrameBuffer,this.compTexture)}this.updateGlobals(),this.frameNum>0&&this.renderToScreen()}setInternalMeshSize(e,t){this.mesh_width=e,this.mesh_height=t,this.updateGlobals()}setOutputAA(e){this.outputFXAA=e}updateGlobals(){let e={pixelRatio:this.pixelRatio,textureRatio:this.textureRatio,texsizeX:this.texsizeX,texsizeY:this.texsizeY,mesh_width:this.mesh_width,mesh_height:this.mesh_height,aspectx:this.aspectx,aspecty:this.aspecty};this.presetEquationRunner.updateGlobals(e),this.prevPresetEquationRunner.updateGlobals(e),this.warpShader.updateGlobals(e),this.prevWarpShader.updateGlobals(e),this.compShader.updateGlobals(e),this.prevCompShader.updateGlobals(e),this.outputShader.updateGlobals(e),this.blurShader1.updateGlobals(e),this.blurShader2.updateGlobals(e),this.blurShader3.updateGlobals(e),this.basicWaveform.updateGlobals(e),this.customWaveforms.forEach(t=>t.updateGlobals(e)),this.customShapes.forEach(t=>t.updateGlobals(e)),this.prevCustomWaveforms.forEach(t=>t.updateGlobals(e)),this.prevCustomShapes.forEach(t=>t.updateGlobals(e)),this.darkenCenter.updateGlobals(e),this.innerBorder.updateGlobals(e),this.outerBorder.updateGlobals(e),this.motionVectors.updateGlobals(e),this.titleText.updateGlobals(e),this.blendPattern.updateGlobals(e),this.warpUVs=new Float32Array((this.mesh_width+1)*(this.mesh_height+1)*2),this.warpColor=new Float32Array((this.mesh_width+1)*(this.mesh_height+1)*4),this.preset.pixel_eqs_initialize_array&&this.preset.pixel_eqs_initialize_array(this.mesh_width,this.mesh_height)}calcTimeAndFPS(e){let t;if(e)t=e;else{let e=performance.now();t=(e-this.lastTime)/1e3,(t>1||t<0||this.frame<2)&&(t=1/30),this.lastTime=e}this.time+=1/this.fps,this.blending&&(this.blendProgress=(this.time-this.blendStartTime)/this.blendDuration,this.blendProgress>1&&(this.blending=!1));let n=this.timeHist[this.timeHist.length-1]+t;this.timeHist.push(n),this.timeHist.length>this.timeHistMax&&this.timeHist.shift();let r=this.timeHist.length/(n-this.timeHist[0]);if(Math.abs(r-this.fps)>3&&this.frame>this.timeHistMax)this.fps=r;else{let e=.93;this.fps=e*this.fps+(1-e)*r}}runPixelEquations(e,t,n,r){let i=this.mesh_width,a=this.mesh_height,o=i+1,s=a+1,c=this.time*t.warpanimspeed,l=1/t.warpscale,u=11.68+4*Math.cos(c*1.413+10),d=8.77+3*Math.cos(c*1.113+7),f=10.54+3*Math.cos(c*1.233+3),p=11.49+4*Math.cos(c*.933+5),m=0/this.texsizeX,h=0/this.texsizeY,g=this.aspectx,v=this.aspecty,y=0,b=0;if(e.preset.useWASM){let i=e.preset.globalPools.perVertex;if(U.setWasm(i,n,e.globalKeys),U.setWasm(i,e.mdVSQAfterFrame,e.qs),i.zoom.value=t.zoom,i.zoomexp.value=t.zoomexp,i.rot.value=t.rot,i.warp.value=t.warp,i.cx.value=t.cx,i.cy.value=t.cy,i.dx.value=t.dx,i.dy.value=t.dy,i.sx.value=t.sx,i.sy.value=t.sy,e.preset.pixel_eqs_wasm(e.runVertEQs,this.mesh_width,this.mesh_height,this.time,t.warpanimspeed,t.warpscale,this.aspectx,this.aspecty),!r)this.warpUVs=e.preset.pixel_eqs_get_array(),this.warpColor.fill(1);else{let t=e.preset.pixel_eqs_get_array(),n=0,r=0;for(let e=0;e<s;e++)for(let e=0;e<o;e++){let e=t[n],i=t[n+1],a=this.blendPattern.vertInfoA[n/2]*this.blendProgress+this.blendPattern.vertInfoC[n/2];a=Math.clamp(a,0,1),this.warpUVs[n]=this.warpUVs[n]*a+e*(1-a),this.warpUVs[n+1]=this.warpUVs[n+1]*a+i*(1-a),this.warpColor[r+0]=1,this.warpColor[r+1]=1,this.warpColor[r+2]=1,this.warpColor[r+3]=a,n+=2,r+=4}}}else{let n=U.cloneVars(t),x=n.warp,S=n.zoom,C=n.zoomexp,w=n.cx,T=n.cy,E=n.sx,D=n.sy,O=n.dx,k=n.dy,A=n.rot;for(let j=0;j<s;j++)for(let s=0;s<o;s++){let o=s/i*2-1,M=j/a*2-1,ee=Math.sqrt(o*o*g*g+M*M*v*v);if(e.runVertEQs){let r;r=j===a/2&&s===i/2?0:U.atan2(M*v,o*g),n.x=o*.5*g+.5,n.y=M*-.5*v+.5,n.rad=ee,n.ang=r,n.zoom=t.zoom,n.zoomexp=t.zoomexp,n.rot=t.rot,n.warp=t.warp,n.cx=t.cx,n.cy=t.cy,n.dx=t.dx,n.dy=t.dy,n.sx=t.sx,n.sy=t.sy,n=e.runPixelEquations(n),x=n.warp,S=n.zoom,C=n.zoomexp,w=n.cx,T=n.cy,E=n.sx,D=n.sy,O=n.dx,k=n.dy,A=n.rot}let N=1/S**C**(ee*2-1),P=o*.5*g*N+.5,F=-M*.5*v*N+.5;P=(P-w)/E+w,F=(F-T)/D+T,x!==0&&(P+=x*.0035*Math.sin(c*.333+l*(o*u-M*p)),F+=x*.0035*Math.cos(c*.375-l*(o*f+M*d)),P+=x*.0035*Math.cos(c*.753-l*(o*d-M*f)),F+=x*.0035*Math.sin(c*.825+l*(o*u+M*p)));let I=P-w,te=F-T,ne=Math.cos(A),re=Math.sin(A);if(P=I*ne-te*re+w,F=I*re+te*ne+T,P-=O,F-=k,P=(P-.5)/g+.5,F=(F-.5)/v+.5,P+=m,F+=h,!r)this.warpUVs[y]=P,this.warpUVs[y+1]=F,this.warpColor[b+0]=1,this.warpColor[b+1]=1,this.warpColor[b+2]=1,this.warpColor[b+3]=1;else{let e=this.blendPattern.vertInfoA[y/2]*this.blendProgress+this.blendPattern.vertInfoC[y/2];e=Math.clamp(e,0,1),this.warpUVs[y]=this.warpUVs[y]*e+P*(1-e),this.warpUVs[y+1]=this.warpUVs[y+1]*e+F*(1-e),this.warpColor[b+0]=1,this.warpColor[b+1]=1,this.warpColor[b+2]=1,this.warpColor[b+3]=e}y+=2,b+=4}this.mdVSVertex=n}}static mixFrameEquations(e,t,n){let r=.5-.5*Math.cos(e*Math.PI),i=1-r,a=.5,o=U.cloneVars(t);return o.decay=r*t.decay+i*n.decay,o.wave_a=r*t.wave_a+i*n.wave_a,o.wave_r=r*t.wave_r+i*n.wave_r,o.wave_g=r*t.wave_g+i*n.wave_g,o.wave_b=r*t.wave_b+i*n.wave_b,o.wave_x=r*t.wave_x+i*n.wave_x,o.wave_y=r*t.wave_y+i*n.wave_y,o.wave_mystery=r*t.wave_mystery+i*n.wave_mystery,o.ob_size=r*t.ob_size+i*n.ob_size,o.ob_r=r*t.ob_r+i*n.ob_r,o.ob_g=r*t.ob_g+i*n.ob_g,o.ob_b=r*t.ob_b+i*n.ob_b,o.ob_a=r*t.ob_a+i*n.ob_a,o.ib_size=r*t.ib_size+i*n.ib_size,o.ib_r=r*t.ib_r+i*n.ib_r,o.ib_g=r*t.ib_g+i*n.ib_g,o.ib_b=r*t.ib_b+i*n.ib_b,o.ib_a=r*t.ib_a+i*n.ib_a,o.mv_x=r*t.mv_x+i*n.mv_x,o.mv_y=r*t.mv_y+i*n.mv_y,o.mv_dx=r*t.mv_dx+i*n.mv_dx,o.mv_dy=r*t.mv_dy+i*n.mv_dy,o.mv_l=r*t.mv_l+i*n.mv_l,o.mv_r=r*t.mv_r+i*n.mv_r,o.mv_g=r*t.mv_g+i*n.mv_g,o.mv_b=r*t.mv_b+i*n.mv_b,o.mv_a=r*t.mv_a+i*n.mv_a,o.echo_zoom=r*t.echo_zoom+i*n.echo_zoom,o.echo_alpha=r*t.echo_alpha+i*n.echo_alpha,o.echo_orient=r*t.echo_orient+i*n.echo_orient,o.wave_dots=r<a?n.wave_dots:t.wave_dots,o.wave_thick=r<a?n.wave_thick:t.wave_thick,o.additivewave=r<a?n.additivewave:t.additivewave,o.wave_brighten=r<a?n.wave_brighten:t.wave_brighten,o.darken_center=r<a?n.darken_center:t.darken_center,o.gammaadj=r<a?n.gammaadj:t.gammaadj,o.wrap=r<a?n.wrap:t.wrap,o.invert=r<a?n.invert:t.invert,o.brighten=r<a?n.brighten:t.brighten,o.darken=r<a?n.darken:t.darken,o.solarize=r<a?n.brighten:t.solarize,o.b1n=r*t.b1n+i*n.b1n,o.b2n=r*t.b2n+i*n.b2n,o.b3n=r*t.b3n+i*n.b3n,o.b1x=r*t.b1x+i*n.b1x,o.b2x=r*t.b2x+i*n.b2x,o.b3x=r*t.b3x+i*n.b3x,o.b1ed=r*t.b1ed+i*n.b1ed,o}static getBlurValues(e){let t=e.b1n,n=e.b2n,r=e.b3n,i=e.b1x,a=e.b2x,o=e.b3x,s=.1;if(i-t<s){let e=(t+i)*.5;t=e-s*.5,i=e-s*.5}if(a=Math.min(i,a),n=Math.max(t,n),a-n<s){let e=(n+a)*.5;n=e-s*.5,a=e-s*.5}if(o=Math.min(a,o),r=Math.max(n,r),o-r<s){let e=(r+o)*.5;r=e-s*.5,o=e-s*.5}return{blurMins:[t,n,r],blurMaxs:[i,a,o]}}bindFrambufferAndSetViewport(e,t,n){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,e),this.gl.viewport(0,0,t,n)}bindFrameBufferTexture(e,t){if(this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.texsizeX,this.texsizeY,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,new Uint8Array(this.texsizeX*this.texsizeY*4)),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.anisoExt){let e=this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT);this.gl.texParameterf(this.gl.TEXTURE_2D,this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,e)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,e),this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER,this.gl.COLOR_ATTACHMENT0,this.gl.TEXTURE_2D,t,0)}render({audioLevels:t,elapsedTime:n}={}){this.calcTimeAndFPS(n),this.frameNum+=1,t?this.audio.updateAudio(t.timeByteArray,t.timeByteArrayL,t.timeByteArrayR):this.audio.sampleAudio(),this.audioLevels.updateAudioLevels(this.fps,this.frameNum);let r={frame:this.frameNum,time:this.time,fps:this.fps,bass:this.audioLevels.bass,bass_att:this.audioLevels.bass_att,mid:this.audioLevels.mid,mid_att:this.audioLevels.mid_att,treb:this.audioLevels.treb,treb_att:this.audioLevels.treb_att,meshx:this.mesh_width,meshy:this.mesh_height,aspectx:this.invAspectx,aspecty:this.invAspecty,pixelsx:this.texsizeX,pixelsy:this.texsizeY},i=Object.assign({},r);this.prevPreset.useWASM||(i.gmegabuf=this.prevPresetEquationRunner.gmegabuf),this.preset.useWASM||(r.gmegabuf=this.presetEquationRunner.gmegabuf,Object.assign(r,this.regVars));let a=this.presetEquationRunner.runFrameEquations(r);this.runPixelEquations(this.presetEquationRunner,a,r,!1),this.preset.useWASM||(Object.assign(this.regVars,U.pick(this.mdVSVertex,this.regs)),Object.assign(r,this.regVars));let o;this.blending?(this.prevMDVSFrame=this.prevPresetEquationRunner.runFrameEquations(i),this.runPixelEquations(this.prevPresetEquationRunner,this.prevMDVSFrame,i,!0),o=e.mixFrameEquations(this.blendProgress,a,this.prevMDVSFrame)):o=a;let s=this.targetTexture;this.targetTexture=this.prevTexture,this.prevTexture=s;let c=this.targetFrameBuffer;this.targetFrameBuffer=this.prevFrameBuffer,this.prevFrameBuffer=c,this.gl.bindTexture(this.gl.TEXTURE_2D,this.prevTexture),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.bindFrambufferAndSetViewport(this.targetFrameBuffer,this.texsizeX,this.texsizeY),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.enable(this.gl.BLEND),this.gl.blendEquation(this.gl.FUNC_ADD),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);let{blurMins:l,blurMaxs:u}=e.getBlurValues(o);this.blending?(this.prevWarpShader.renderQuadTexture(!1,this.prevTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,l,u,this.prevMDVSFrame,this.prevPresetEquationRunner.mdVSQAfterFrame,this.warpUVs,this.warpColor),this.warpShader.renderQuadTexture(!0,this.prevTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,l,u,o,this.presetEquationRunner.mdVSQAfterFrame,this.warpUVs,this.warpColor)):this.warpShader.renderQuadTexture(!1,this.prevTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,l,u,a,this.presetEquationRunner.mdVSQAfterFrame,this.warpUVs,this.warpColor),this.numBlurPasses>0&&(this.blurShader1.renderBlurTexture(this.targetTexture,a,l,u),this.numBlurPasses>1&&(this.blurShader2.renderBlurTexture(this.blurTexture1,a,l,u),this.numBlurPasses>2&&this.blurShader3.renderBlurTexture(this.blurTexture2,a,l,u)),this.bindFrambufferAndSetViewport(this.targetFrameBuffer,this.texsizeX,this.texsizeY)),this.motionVectors.drawMotionVectors(o,this.warpUVs),this.preset.shapes&&this.preset.shapes.length>0&&this.customShapes.forEach((e,t)=>{e.drawCustomShape(this.blending?this.blendProgress:1,r,this.presetEquationRunner,this.preset.shapes[t],this.prevTexture)}),this.preset.waves&&this.preset.waves.length>0&&this.customWaveforms.forEach((e,t)=>{e.drawCustomWaveform(this.blending?this.blendProgress:1,this.audio.timeArrayL,this.audio.timeArrayR,this.audio.freqArrayL,this.audio.freqArrayR,r,this.presetEquationRunner,this.preset.waves[t])}),this.blending&&(this.prevPreset.shapes&&this.prevPreset.shapes.length>0&&this.prevCustomShapes.forEach((e,t)=>{e.drawCustomShape(1-this.blendProgress,i,this.prevPresetEquationRunner,this.prevPreset.shapes[t],this.prevTexture)}),this.prevPreset.waves&&this.prevPreset.waves.length>0&&this.prevCustomWaveforms.forEach((e,t)=>{e.drawCustomWaveform(1-this.blendProgress,this.audio.timeArrayL,this.audio.timeArrayR,this.audio.freqArrayL,this.audio.freqArrayR,i,this.prevPresetEquationRunner,this.prevPreset.waves[t])})),this.basicWaveform.drawBasicWaveform(this.blending,this.blendProgress,this.audio.timeArrayL,this.audio.timeArrayR,o),this.darkenCenter.drawDarkenCenter(o);let d=[o.ob_r,o.ob_g,o.ob_b,o.ob_a];this.outerBorder.drawBorder(d,o.ob_size,0);let f=[o.ib_r,o.ib_g,o.ib_b,o.ib_a];if(this.innerBorder.drawBorder(f,o.ib_size,o.ob_size),this.supertext.startTime>=0){let e=(this.time-this.supertext.startTime)/this.supertext.duration;e>=1&&this.titleText.renderTitle(e,!0,r)}this.globalVars=r,this.mdVSFrame=a,this.mdVSFrameMixed=o,this.renderToScreen()}renderToScreen(){this.outputFXAA?this.bindFrambufferAndSetViewport(this.compFrameBuffer,this.texsizeX,this.texsizeY):this.bindFrambufferAndSetViewport(null,this.width,this.height),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.enable(this.gl.BLEND),this.gl.blendEquation(this.gl.FUNC_ADD),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);let{blurMins:t,blurMaxs:n}=e.getBlurValues(this.mdVSFrameMixed);if(this.blending?(this.prevCompShader.renderQuadTexture(!1,this.targetTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,t,n,this.prevMDVSFrame,this.prevPresetEquationRunner.mdVSQAfterFrame,this.warpColor),this.compShader.renderQuadTexture(!0,this.targetTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,t,n,this.mdVSFrameMixed,this.presetEquationRunner.mdVSQAfterFrame,this.warpColor)):this.compShader.renderQuadTexture(!1,this.targetTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,t,n,this.mdVSFrame,this.presetEquationRunner.mdVSQAfterFrame,this.warpColor),this.supertext.startTime>=0){let e=(this.time-this.supertext.startTime)/this.supertext.duration;this.titleText.renderTitle(e,!1,this.globalVars),e>=1&&(this.supertext.startTime=-1)}this.outputFXAA&&(this.gl.bindTexture(this.gl.TEXTURE_2D,this.compTexture),this.gl.generateMipmap(this.gl.TEXTURE_2D),this.bindFrambufferAndSetViewport(null,this.width,this.height),this.outputShader.renderQuadTexture(this.compTexture))}launchSongTitleAnim(e){this.supertext={startTime:this.time,duration:1.7},this.titleText.generateTitleTexture(e)}toDataURL(){let t=new Uint8Array(this.texsizeX*this.texsizeY*4),n=this.gl.createFramebuffer(),r=this.gl.createTexture();this.bindFrameBufferTexture(n,r);let{blurMins:i,blurMaxs:a}=e.getBlurValues(this.mdVSFrameMixed);this.compShader.renderQuadTexture(!1,this.targetTexture,this.blurTexture1,this.blurTexture2,this.blurTexture3,i,a,this.mdVSFrame,this.presetEquationRunner.mdVSQAfterFrame,this.warpColor),this.gl.readPixels(0,0,this.texsizeX,this.texsizeY,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),Array.from({length:this.texsizeY},(e,n)=>t.slice(n*this.texsizeX*4,(n+1)*this.texsizeX*4)).forEach((e,n)=>t.set(e,(this.texsizeY-n-1)*this.texsizeX*4));let o=document.createElement(`canvas`);o.width=this.texsizeX,o.height=this.texsizeY;let s=o.getContext(`2d`,{willReadFrequently:!1}),c=s.createImageData(this.texsizeX,this.texsizeY);return c.data.set(t),s.putImageData(c,0,0),this.gl.deleteTexture(r),this.gl.deleteFramebuffer(n),o.toDataURL()}warpBufferToDataURL(){let e=new Uint8Array(this.texsizeX*this.texsizeY*4);this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.targetFrameBuffer),this.gl.readPixels(0,0,this.texsizeX,this.texsizeY,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e);let t=document.createElement(`canvas`);t.width=this.texsizeX,t.height=this.texsizeY;let n=t.getContext(`2d`,{willReadFrequently:!1}),r=n.createImageData(this.texsizeX,this.texsizeY);return r.data.set(e),n.putImageData(r,0,0),t.toDataURL()}},hn=`AGFzbQEAAAABPQpgAABgAXwBfGACfHwBfGACf38AYAR/f39/AGAJf39/f3x8fHx8AGADf399AGABfwF/YAJ/fwF/YAF+AX8CuBWMAQNlbnYFYWJvcnQABAhwaXhlbEVxcwtwZXJQaXhlbEVxcwAADHBpeGVsVmFyUG9vbAR3YXJwA3wBDHBpeGVsVmFyUG9vbAR6b29tA3wBDHBpeGVsVmFyUG9vbAd6b29tZXhwA3wBDHBpeGVsVmFyUG9vbAJjeAN8AQxwaXhlbFZhclBvb2wCY3kDfAEMcGl4ZWxWYXJQb29sAnN4A3wBDHBpeGVsVmFyUG9vbAJzeQN8AQxwaXhlbFZhclBvb2wCZHgDfAEMcGl4ZWxWYXJQb29sAmR5A3wBDHBpeGVsVmFyUG9vbANyb3QDfAEMcGl4ZWxWYXJQb29sA3JhZAN8AQxwaXhlbFZhclBvb2wDYW5nA3wBDHBpeGVsVmFyUG9vbAF4A3wBDHBpeGVsVmFyUG9vbAF5A3wBCHFWYXJQb29sAnExA3wBCHFWYXJQb29sAnEyA3wBCHFWYXJQb29sAnEzA3wBCHFWYXJQb29sAnE0A3wBCHFWYXJQb29sAnE1A3wBCHFWYXJQb29sAnE2A3wBCHFWYXJQb29sAnE3A3wBCHFWYXJQb29sAnE4A3wBCHFWYXJQb29sAnE5A3wBCHFWYXJQb29sA3ExMAN8AQhxVmFyUG9vbANxMTEDfAEIcVZhclBvb2wDcTEyA3wBCHFWYXJQb29sA3ExMwN8AQhxVmFyUG9vbANxMTQDfAEIcVZhclBvb2wDcTE1A3wBCHFWYXJQb29sA3ExNgN8AQhxVmFyUG9vbANxMTcDfAEIcVZhclBvb2wDcTE4A3wBCHFWYXJQb29sA3ExOQN8AQhxVmFyUG9vbANxMjADfAEIcVZhclBvb2wDcTIxA3wBCHFWYXJQb29sA3EyMgN8AQhxVmFyUG9vbANxMjMDfAEIcVZhclBvb2wDcTI0A3wBCHFWYXJQb29sA3EyNQN8AQhxVmFyUG9vbANxMjYDfAEIcVZhclBvb2wDcTI3A3wBCHFWYXJQb29sA3EyOAN8AQhxVmFyUG9vbANxMjkDfAEIcVZhclBvb2wDcTMwA3wBCHFWYXJQb29sA3EzMQN8AQhxVmFyUG9vbANxMzIDfAEIdFZhclBvb2wCdDEDfAEIdFZhclBvb2wCdDIDfAEIdFZhclBvb2wCdDMDfAEIdFZhclBvb2wCdDQDfAEIdFZhclBvb2wCdDUDfAEIdFZhclBvb2wCdDYDfAEIdFZhclBvb2wCdDcDfAEIdFZhclBvb2wCdDgDfAEKc2hhcGVQb29sMAN4XzADfAEKc2hhcGVQb29sMAN5XzADfAEKc2hhcGVQb29sMAVyYWRfMAN8AQpzaGFwZVBvb2wwBWFuZ18wA3wBCnNoYXBlUG9vbDADcl8wA3wBCnNoYXBlUG9vbDADZ18wA3wBCnNoYXBlUG9vbDADYl8wA3wBCnNoYXBlUG9vbDADYV8wA3wBCnNoYXBlUG9vbDAEcjJfMAN8AQpzaGFwZVBvb2wwBGcyXzADfAEKc2hhcGVQb29sMARiMl8wA3wBCnNoYXBlUG9vbDAEYTJfMAN8AQpzaGFwZVBvb2wwCmJvcmRlcl9yXzADfAEKc2hhcGVQb29sMApib3JkZXJfZ18wA3wBCnNoYXBlUG9vbDAKYm9yZGVyX2JfMAN8AQpzaGFwZVBvb2wwCmJvcmRlcl9hXzADfAEKc2hhcGVQb29sMA50aGlja291dGxpbmVfMAN8AQpzaGFwZVBvb2wwCnRleHR1cmVkXzADfAEKc2hhcGVQb29sMAp0ZXhfem9vbV8wA3wBCnNoYXBlUG9vbDAJdGV4X2FuZ18wA3wBCnNoYXBlUG9vbDAKYWRkaXRpdmVfMAN8AQpzaGFwZVBvb2wxA3hfMQN8AQpzaGFwZVBvb2wxA3lfMQN8AQpzaGFwZVBvb2wxBXJhZF8xA3wBCnNoYXBlUG9vbDEFYW5nXzEDfAEKc2hhcGVQb29sMQNyXzEDfAEKc2hhcGVQb29sMQNnXzEDfAEKc2hhcGVQb29sMQNiXzEDfAEKc2hhcGVQb29sMQNhXzEDfAEKc2hhcGVQb29sMQRyMl8xA3wBCnNoYXBlUG9vbDEEZzJfMQN8AQpzaGFwZVBvb2wxBGIyXzEDfAEKc2hhcGVQb29sMQRhMl8xA3wBCnNoYXBlUG9vbDEKYm9yZGVyX3JfMQN8AQpzaGFwZVBvb2wxCmJvcmRlcl9nXzEDfAEKc2hhcGVQb29sMQpib3JkZXJfYl8xA3wBCnNoYXBlUG9vbDEKYm9yZGVyX2FfMQN8AQpzaGFwZVBvb2wxDnRoaWNrb3V0bGluZV8xA3wBCnNoYXBlUG9vbDEKdGV4dHVyZWRfMQN8AQpzaGFwZVBvb2wxCnRleF96b29tXzEDfAEKc2hhcGVQb29sMQl0ZXhfYW5nXzEDfAEKc2hhcGVQb29sMQphZGRpdGl2ZV8xA3wBCnNoYXBlUG9vbDIDeF8yA3wBCnNoYXBlUG9vbDIDeV8yA3wBCnNoYXBlUG9vbDIFcmFkXzIDfAEKc2hhcGVQb29sMgVhbmdfMgN8AQpzaGFwZVBvb2wyA3JfMgN8AQpzaGFwZVBvb2wyA2dfMgN8AQpzaGFwZVBvb2wyA2JfMgN8AQpzaGFwZVBvb2wyA2FfMgN8AQpzaGFwZVBvb2wyBHIyXzIDfAEKc2hhcGVQb29sMgRnMl8yA3wBCnNoYXBlUG9vbDIEYjJfMgN8AQpzaGFwZVBvb2wyBGEyXzIDfAEKc2hhcGVQb29sMgpib3JkZXJfcl8yA3wBCnNoYXBlUG9vbDIKYm9yZGVyX2dfMgN8AQpzaGFwZVBvb2wyCmJvcmRlcl9iXzIDfAEKc2hhcGVQb29sMgpib3JkZXJfYV8yA3wBCnNoYXBlUG9vbDIOdGhpY2tvdXRsaW5lXzIDfAEKc2hhcGVQb29sMgp0ZXh0dXJlZF8yA3wBCnNoYXBlUG9vbDIKdGV4X3pvb21fMgN8AQpzaGFwZVBvb2wyCXRleF9hbmdfMgN8AQpzaGFwZVBvb2wyCmFkZGl0aXZlXzIDfAEKc2hhcGVQb29sMwN4XzMDfAEKc2hhcGVQb29sMwN5XzMDfAEKc2hhcGVQb29sMwVyYWRfMwN8AQpzaGFwZVBvb2wzBWFuZ18zA3wBCnNoYXBlUG9vbDMDcl8zA3wBCnNoYXBlUG9vbDMDZ18zA3wBCnNoYXBlUG9vbDMDYl8zA3wBCnNoYXBlUG9vbDMDYV8zA3wBCnNoYXBlUG9vbDMEcjJfMwN8AQpzaGFwZVBvb2wzBGcyXzMDfAEKc2hhcGVQb29sMwRiMl8zA3wBCnNoYXBlUG9vbDMEYTJfMwN8AQpzaGFwZVBvb2wzCmJvcmRlcl9yXzMDfAEKc2hhcGVQb29sMwpib3JkZXJfZ18zA3wBCnNoYXBlUG9vbDMKYm9yZGVyX2JfMwN8AQpzaGFwZVBvb2wzCmJvcmRlcl9hXzMDfAEKc2hhcGVQb29sMw50aGlja291dGxpbmVfMwN8AQpzaGFwZVBvb2wzCnRleHR1cmVkXzMDfAEKc2hhcGVQb29sMwp0ZXhfem9vbV8zA3wBCnNoYXBlUG9vbDMJdGV4X2FuZ18zA3wBCnNoYXBlUG9vbDMKYWRkaXRpdmVfMwN8AQMZGAgDBwkBAQICAQYFAAAAAAAAAAAAAAAAAAUDAQABBuwMigF8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt8AUQAAAAAAAAAAAt/AUEAC3wBRAAAAAAAAAAAC3wBRAAAAAAAAAAAC34BQgALB9kBDwZtZW1vcnkCABJjcmVhdGVGbG9hdDMyQXJyYXkABBFydW5QaXhlbEVxdWF0aW9ucwAMBnNhdmVRcwANCXJlc3RvcmVRcwAOBnNhdmVUcwAPCXJlc3RvcmVUcwAQC3NoYXBlMF9zYXZlABEOc2hhcGUwX3Jlc3RvcmUAEgtzaGFwZTFfc2F2ZQATDnNoYXBlMV9yZXN0b3JlABQLc2hhcGUyX3NhdmUAFQ5zaGFwZTJfcmVzdG9yZQAWC3NoYXBlM19zYXZlABcOc2hhcGUzX3Jlc3RvcmUAGAgBGQraQRi0AQEGfyAAQez///8DSwRAAAsgAEEQaiICQfz///8DSwRAAAsjkAIhBiOQAkEEaiIEIAJBE2pBcHFBBGsiB2oiAj8AIgVBEHRBD2pBcHEiA0sEQCAFIAIgA2tB//8DakGAgHxxQRB2IgMgAyAFSBtAAEEASARAIANAAEEASARAAAsLCyACJJACIAYgBzYCACAEQQRrIgJBADYCBCACQQA2AgggAiABNgIMIAIgADYCECAEQRBqC7sCAQF/AkAgAUUNACAAQQA6AAAgACABakEEayICQQA6AAMgAUECTQ0AIABBADoAASAAQQA6AAIgAkEAOgACIAJBADoAASABQQZNDQAgAEEAOgADIAJBADoAACABQQhNDQAgAEEAIABrQQNxIgJqIgBBADYCACAAIAEgAmtBfHEiAmpBHGsiAUEANgIYIAJBCE0NACAAQQA2AgQgAEEANgIIIAFBADYCECABQQA2AhQgAkEYTQ0AIABBADYCDCAAQQA2AhAgAEEANgIUIABBADYCGCABQQA2AgAgAUEANgIEIAFBADYCCCABQQA2AgwgACAAQQRxQRhqIgFqIQAgAiABayEBA0AgAUEgTwRAIABCADcDACAAQgA3AwggAEIANwMQIABCADcDGCABQSBrIQEgAEEgaiEADAELCwsLdwECfwJ/QQxBAxACIgFFBEBBDEECEAIhAQsgAQtBADYCACABQQA2AgQgAUEANgIIIABB/////wBLBEBBoAhB0AhBEkE5EAAACyAAQQJ0IgBBABACIgIgABADIAEoAgAaIAEgAjYCACABIAI2AgQgASAANgIIIAELuwQDAX8KfgF8IABC////////////AINCNIhClQh9IgVCBoenQQN0QYAJaiIBKQMAIQcgASkDCCEEIAEpAxAhAiAFQj+DIgVCAFIEQAJ+IAcgBYYgBELAACAFfSIDiIQhByAEIAWGIAIgA4iEIQQgAiAFhiABKQMYIAOIhAshAgsgAEL/////////B4NCgICAgICAgAiEIgVC/////w+DIgMgBEIgiCIIfiAEQv////8PgyIGIAN+IglCIIh8IQQgBiAFQiCIIgZ+IARC/////w+DfCEDIAYgCH4gBEIgiHwgA0IgiHwkkwIgBUIghyACQiCIfiIEIAlC/////w+DIANCIIZ8fCECIAIgBFStI5MCIAUgB358fCIIQgKGIAJCPoiEIgdCP4ciBUIBhyAHhSIDeSEEIAMgBIYgBSACQgKGhSIGQsAAIAR9iIQiAkL/////D4MhAyACQiCIIglCtISjiwJ+IANCorW/yAx+IANCtISjiwJ+IgpCIIh8IgtC/////w+DfCEDIAlCorW/yAx+IAtCIIh8IANCIIh8JJMCIApC/////w+DIANCIIZ8IgMgArpEhBtwUcyYOD+iIAYgBIa6RBgtRFT7ITk/oqCxIgJUrSOTAiIGQguIfLokkQIgAiAGQjWGIANCC4iEfLpEAAAAAAAA8DuiJJICI5ECQoCAgICAgIDYPCAEQjSGfSAAIAeFQoCAgICAgICAgH+DhL8iDKIkkQIjkgIgDKIkkgIgCEI+hyAFfacLlQYDAn8BfgR8IAC9IgNCIIinIgFBH3YhAiABQf////8HcSIBQfvDpP8DTQRAIAFBnsGa8gNJBEBEAAAAAAAA8D8PC0QAAAAAAADwPyAAIACiIgVEAAAAAAAA4D+iIgahIgREAAAAAAAA8D8gBKEgBqEgBSAFIAUgBUSQFcsZoAH6PqJEd1HBFmzBVr+gokRMVVVVVVWlP6CiIAUgBaIiBiAGoiAFIAVE1DiIvun6qL2iRMSxtL2e7iE+oKJErVKcgE9+kr6goqCiIABEAAAAAAAAAACioaCgDwsgAUGAgMD/B08EQCAAIAChDwsCfyADQiCIp0H/////B3EiAUH7w+SJBEkEQAJ8IAFBFHYiAiAAIABEg8jJbTBf5D+iniIFRAAAQFT7Ifk/oqEiACAFRDFjYhphtNA9oiIGoSIEvUIgiKdBFHZB/w9xa0EQSwRAAnwgBURzcAMuihmjO6IgACAAIAVEAABgGmG00D2iIgahIgChIAahoSEGIAIgACAGoSIEvUIgiKdBFHZB/w9xa0ExSwR8IAVEwUkgJZqDezmiIAAgACAFRAAAAC6KGaM7oiIGoSIAoSAGoaEhBiAAIAahBSAECwshBAsgBAskkQIgACAEoSAGoSSSAiAFqgwBC0EAIAMQBSIBayABIAIbCyECI5ECIQUjkgIhBiACQQFxBHwgBSAFoiIAIAWiIQQgBSAAIAZEAAAAAAAA4D+iIAQgACAARH3+sVfjHcc+okTVYcEZoAEqv6CiRKb4EBEREYE/oCAAIAAgAKKiIABEfNXPWjrZ5T2iROucK4rm5Vq+oKKgoqGiIAahIARESVVVVVVVxb+ioaEFRAAAAAAAAPA/IAUgBaIiAEQAAAAAAADgP6IiBKEiB0QAAAAAAADwPyAHoSAEoSAAIAAgACAARJAVyxmgAfo+okR3UcEWbMFWv6CiRExVVVVVVaU/oKIgACAAoiIEIASiIAAgAETUOIi+6fqovaJExLG0vZ7uIT6gokStUpyAT36SvqCioKIgBSAGoqGgoAsiAJogACACQQFqQQJxGwu8BAICfwN8IAAhAyAAvUIgiKdB/////wdxIgFBgIDAoARPBEAgACAAYgRAIAAPC0QYLURU+yH5PyADpg8LIAFBgIDw/gNJBEAgAUGAgIDyA0kEQCAADwtBfyECBSAAmSEAIAFBgIDM/wNJBHwgAUGAgJj/A0kEfCAAIACgRAAAAAAAAPA/oSAARAAAAAAAAABAoKMFQQEhAiAARAAAAAAAAPA/oSAARAAAAAAAAPA/oKMLBSABQYCAjoAESQR8QQIhAiAARAAAAAAAAPg/oSAARAAAAAAAAPg/okQAAAAAAADwP6CjBUEDIQJEAAAAAAAA8L8gAKMLCyEACyAAIACiIgUgBaIhBCAAIAUgBCAEIAQgBCAERBHaIuM6rZA/okTrDXYkS3upP6CiRFE90KBmDbE/oKJEbiBMxc1Ftz+gokT/gwCSJEnCP6CiRA1VVVVVVdU/oKIgBCAEIAQgBCAERC9saixEtKK/okSa/d5SLd6tv6CiRG2adK/ysLO/oKJEcRYj/sZxvL+gokTE65iZmZnJv6CioKIhBCACQQBIBEAgACAEoQ8LAkACQAJAAkACQAJAIAIOBAABAgMEC0RPu2EFZ6zdPyAEROJlLyJ/K3o8oSAAoaEhAAwEC0QYLURU+yHpPyAERAdcFDMmpoE8oSAAoaEhAAwDC0Sb9oHSC3PvPyAERL3L8HqIB3A8oSAAoaEhAAwCC0QYLURU+yH5PyAERAdcFDMmppE8oSAAoaEhAAwBCwALIAAgA6YLvgMCBX8BfkEBIAAgAGIgASABYhsEQCABIACgDwsgAL0iB0IgiKchBCAHpyEDIAG9IgenIgYgB0IgiKciBUGAgMD/A2tyRQRAIAAQBw8LIAVBHnZBAnEgBEEfdnIhAiAFQf////8HcSEFIARB/////wdxIgQgA3JFBEACQAJAAkACQCACRQ0AAkAgAkEBaw4DAQIDAAsMAwsgAA8LRBgtRFT7IQlADwtEGC1EVPshCcAPCwsCQCAFIAZyRQ0AIAVBgIDA/wdGBEBE0iEzf3zZAkBEGC1EVPsh6T8gAkECcRtEGC1EVPshCUBEAAAAAAAAAAAgAkECcRsgBEGAgMD/B0YbIgCaIAAgAkEBcRsPC0EBIARBgIDA/wdGIAQgBUGAgIAgaksbDQAgBSAEQYCAgCBqS0EAIAJBAnEbBHxEAAAAAAAAAAAFIAAgAaOZEAcLIQACQAJAAkACQCACIgMEQCADQQFrDgMBAgMECyAADwsgAJoPC0QYLURU+yEJQCAARAdcFDMmpqE8oaEPCyAARAdcFDMmpqE8oUQYLURU+yEJQKEPCwALRBgtRFT7Ifm/RBgtRFT7Ifk/IAJBAXEbC4ESAwl/AX4IfAJAAkACQAJAIAGZRAAAAAAAAABAZQRAIAFEAAAAAAAAAEBhDQEgAUQAAAAAAADgP2EEQCAAn5lEAAAAAAAA8H8gAEQAAAAAAADw/2IbDwsgAUQAAAAAAADwv2ENAiABRAAAAAAAAPA/YQRAIAAPCyABRAAAAAAAAAAAYQRARAAAAAAAAPA/DwsLIAC9IgunIQcgC0IgiKciBkH/////B3EhBCABvSILQiCIpyIDQf////8HcSIFIAunIghyRQRARAAAAAAAAPA/DwtBASAIQQAgBUGAgMD/B0YbQQEgBUGAgMD/B0tBASAHQQAgBEGAgMD/B0YbIARBgIDA/wdKGxsbBEAgACABoA8LIAZBAEgEfyAFQYCAgJoETwR/QQIFIAVBgIDA/wNPBH9BAiAIIAUgBUEUdkH/B2siAkEUSiIJGyIKQTRBFCAJGyACayICdiIJQQFxa0EAIAogCSACdEYbBUEACwsFQQALIQIgCEUEQCAFQYCAwP8HRgRAIAcgBEGAgMD/A2tyBEAgBEGAgMD/A04EQCABRAAAAAAAAAAAIANBAE4bDwVEAAAAAAAAAAAgAZogA0EAThsPCwAFRAAAAAAAAPh/DwsACyAFQYCAwP8DRgRAIANBAE4EQCAADwsMAwsgA0GAgICABEYNASADQYCAgP8DRgRAIAZBAE4EQCAAnw8LCwsgAJkhDCAHRQRAQQEgBEGAgMD/A0YgBEGAgMD/B0ZBASAEGxsEQEQAAAAAAADwPyAMoyAMIANBAEgbIQAgBkEASAR8IAIgBEGAgMD/A2tyBHwgAJogACACQQFGGwUgACAAoSIAIACjCwUgAAsPCwsgBkEASAR8IAJFBEAgACAAoSIAIACjDwtEAAAAAAAA8L9EAAAAAAAA8D8gAkEBRhsFRAAAAAAAAPA/CyEOIAVBgICAjwRLBHwgBUGAgMCfBEsEQCAEQf//v/8DTARARAAAAAAAAPB/RAAAAAAAAAAAIANBAEgbDwsgBEGAgMD/A04EQEQAAAAAAADwf0QAAAAAAAAAACADQQBKGw8LCyAEQf//v/8DSARAIA5EnHUAiDzkN36iRJx1AIg85Dd+oiAORFnz+MIfbqUBokRZ8/jCH26lAaIgA0EASBsPCyAEQYCAwP8DSgRAIA5EnHUAiDzkN36iRJx1AIg85Dd+oiAORFnz+MIfbqUBokRZ8/jCH26lAaIgA0EAShsPCyAMRAAAAAAAAPA/oSIARAAAAGBHFfc/oiIMIABERN9d+AuuVD6iIAAgAKJEAAAAAAAA4D8gAERVVVVVVVXVPyAARAAAAAAAANA/oqGioaJE/oIrZUcV9z+ioSINoL1CgICAgHCDvyEAIA0gACAMoaEFIARBgIDAAEgEfyAMRAAAAAAAAEBDoiIMvUIgiKchBEFLBUEACyAEQRR1Qf8Ha2ohAyAEQf//P3EiAkGAgMD/A3IhBCACQY6xDkwEf0EABSACQfrsLkgEf0EBBSADQQFqIQMgBEGAgEBqIQRBAAsLIQIgDL1C/////w+DIASsQiCGhL8iD0QAAAAAAAD4P0QAAAAAAADwPyACGyIQoSISRAAAAAAAAPA/IA8gEKCjIhOiIg29QoCAgIBwg78iDCAMoiERIAwgEUQAAAAAAAAIQKAgDSANoiIAIACiIAAgACAAIAAgAETvTkVKKH7KP6JEZdvJk0qGzT+gokQBQR2pYHTRP6CiRE0mj1FVVdU/oKJE/6tv27Zt2z+gokQDMzMzMzPjP6CiIBMgEiAMIARBAXVBgICAgAJyQYCAIGogAkESdGqsQiCGvyIAoqEgDCAPIAAgEKGhoqGiIg8gDCANoKKgIgygvUKAgICAcIO/IgCiIhAgDyAAoiAMIABEAAAAAAAACEChIBGhoSANoqAiDKC9QoCAgIBwg78iAEQAAADgCcfuP6IiDSAARPUBWxTgLz6+oiAMIAAgEKGhRP0DOtwJx+4/oqBEBtDPQ+v9TD5EAAAAAAAAAAAgAhugIgygRAAAAEADuOI/RAAAAAAAAAAAIAIbIg+gIAO3IhCgvUKAgICAcIO/IQAgDCAAIBChIA+hIA2hoQshDCABIAG9QoCAgIBwg78iDaEgAKIgASAMoqAiASANIACiIgCgIgy9IgunIQMgC0IgiKciAkGAgMCEBE4EQCADIAJBgIDAhARrciABRP6CK2VHFZc8oCAMIAChZHINAwUgAkH/////B3FBgJjDhARPQQAgAyACQYCYw4R8a3IgASAMIAChZXIbDQQLIAJB/////wdxIgRBFHZB/wdrIQVBACEDIAECfCAEQYCAgP8DSgRAAnwgAkGAgMAAIAVBAWp1aiIEQf////8HcUEUdkH/B2shBUEAIARB//8/cUGAgMAAckEUIAVrdSIDayADIAJBAEgbIQMgACAEQf//PyAFdUF/c3GsQiCGv6ELIQALIAALoL1CgICAgHCDvyIMRAAAAABDLuY/oiINIAEgDCAAoaFE7zn6/kIu5j+iIAxEOWyoDGFcIL6ioCIMoCIAIACiIQEgDkQAAAAAAADwPyAAIAAgASABIAEgASABRNCkvnJpN2Y+okTxa9LFQb27vqCiRCzeJa9qVhE/oKJEk72+FmzBZr+gokQ+VVVVVVXFP6CioSIBoiABRAAAAAAAAABAoaMgDCAAIA2hoSIBIAAgAaKgoSAAoaEiAL1CIIinIANBFHRqIgJBFHVBAEwEfCADIgJB/wdKBHwgAEQAAAAAAADgf6IhACACQf8HayICQf8HSgR8IAJB/wdrIgJB/wcgAkH/B0gbIQIgAEQAAAAAAADgf6IFIAALBSACQYJ4SAR8IABEAAAAAAAAYAOiIQAgAkHJB2oiAkGCeEgEfCACQckHaiICQYJ4IAJBgnhKGyECIABEAAAAAAAAYAOiBSAACwUgAAsLIAKsQv8HfEI0hr+iBSAAvUL/////D4MgAqxCIIaEvwuiDwsgACAAog8LRAAAAAAAAPA/IACjDwsgDkScdQCIPOQ3fqJEnHUAiDzkN36iDwsgDkRZ8/jCH26lAaJEWfP4wh9upQGiC9QFAwJ/AX4EfCAAvSIDQiCIpyIBQR92IQIgAUH/////B3EiAUH7w6T/A00EQCABQYCAwPIDSQRAIAAPCyAAIAAgAKIiBSAAoiAFIAUgBUR9/rFX4x3HPqJE1WHBGaABKr+gokSm+BARERGBP6AgBSAFIAWioiAFRHzVz1o62eU9okTrnCuK5uVavqCioKJESVVVVVVVxb+goqAPCyABQYCAwP8HTwRAIAAgAKEPCwJ/IANCIIinQf////8HcSIBQfvD5IkESQRAAnwgAUEUdiICIAAgAESDyMltMF/kP6KeIgVEAABAVPsh+T+ioSIAIAVEMWNiGmG00D2iIgahIgS9QiCIp0EUdkH/D3FrQRBLBEACfCAFRHNwAy6KGaM7oiAAIAAgBUQAAGAaYbTQPaIiBqEiAKEgBqGhIQYgAiAAIAahIgS9QiCIp0EUdkH/D3FrQTFLBHwgBUTBSSAlmoN7OaIgACAAIAVEAAAALooZozuiIgahIgChIAahoSEGIAAgBqEFIAQLCyEECyAECySRAiAAIAShIAahJJICIAWqDAELQQAgAxAFIgFrIAEgAhsLIQIjkQIhBSOSAiEGIAJBAXEEfEQAAAAAAADwPyAFIAWiIgBEAAAAAAAA4D+iIgShIgdEAAAAAAAA8D8gB6EgBKEgACAAIAAgAESQFcsZoAH6PqJEd1HBFmzBVr+gokRMVVVVVVWlP6CiIAAgAKIiBCAEoiAAIABE1DiIvun6qL2iRMSxtL2e7iE+oKJErVKcgE9+kr6goqCiIAUgBqKhoKAFIAUgBaIiACAFoiEEIAUgACAGRAAAAAAAAOA/oiAEIAAgAER9/rFX4x3HPqJE1WHBGaABKr+gokSm+BARERGBP6AgACAAIACioiAARHzVz1o62eU9okTrnCuK5uVavqCioKKhoiAGoSAERElVVVVVVcW/oqGhCyIAmiAAIAJBAnEbCxIAIAAoAgQgAUECdGogAjgCAAuTCAIFfwl8IAJBAWohDCADQQFqIQ1EAAAAAAAA8D8gBqMhECAEIAWiIgVEz/dT46Wb9j+iRAAAAAAAACRAoBAGRAAAAAAAABBAokRcj8L1KFwnQKAhFCAFRAIrhxbZzvE/okQAAAAAAAAcQKAQBkQAAAAAAAAIQKJECtejcD2KIUCgIRIgBUTufD81XrrzP6JEAAAAAAAACECgEAZEAAAAAAAACECiRBSuR+F6FCVAoCETIAVEQmDl0CLb7T+iRAAAAAAAABRAoBAGRAAAAAAAABBAokR7FK5H4fomQKAhFSMAJIoBIwEkiwEjAiSMASMDJI0BIwQkjgEjBSSPASMGJJABIwckkQEjCCSSASMJJJMBA0AgCiANSARAQQAhCQNAIAkgDEgEQCAJtyACt6MiBCAEoEQAAAAAAADwP6EiBiAGoiAHoiAHoiAKtyADt6MiBCAEoEQAAAAAAADwP6EiDyAPoiAIoiAIoqCfJAogAQRAIAm3IAK3RAAAAAAAAOA/omFBACAKtyADt0QAAAAAAADgP6JhGwRARAAAAAAAAAAAJAsFIA8gCKIgBiAHohAIIgREAAAAAAAAAABjBHwgBEQYLURU+yEZQKAFIAQLJAsLIAZEAAAAAAAA4D+iIAeiRAAAAAAAAOA/oCQMIA9EAAAAAAAA4L+iIAiiRAAAAAAAAOA/oCQNI4oBJAAjiwEkASOMASQCI40BJAMjjgEkBCOPASQFI5ABJAYjkQEkByOSASQII5MBJAkQAQsgBkQAAAAAAADgP6IgB6JEAAAAAAAA8D8jASMCIwoiBCAEoEQAAAAAAADwP6EQCRAJoyIOokQAAAAAAADgP6AjA6EjBaMjA6AhBCAPRAAAAAAAAOC/oiAIoiAOokQAAAAAAADgP6AjBKEjBqMjBKAhDiMARAAAAAAAAAAAYgRAAnwgBCMARHnpJjEIrGw/oiAFRB1aZDvfT9U/oiAQIAYgFKIiESAPIBWiIhahoqAQCqKgIQQgDiMARHnpJjEIrGw/oiAFRAAAAAAAANg/oiAQIAYgE6IgDyASoqCioRAGoqAhDiAEIwBEeekmMQisbD+iIAVEf2q8dJMY6D+iIBAgBiASoiAPIBOioaKhEAaioCEEIA4jAER56SYxCKxsP6IgBURmZmZmZmbqP6IgECARIBagoqAQCqKgCyEOCyAEIwOhIQQgDiMEoSEGIwkQBiEPIAQjCRAKIg6iIAYgD6KgIwSgIwihRAAAAAAAAOA/oSAIo0QAAAAAAADgP6AhESAAIAsgBCAPoiAGIA6ioSMDoCMHoUQAAAAAAADgP6EgB6NEAAAAAAAA4D+gthALIAAgC0EBaiARthALIAtBAmohCyAJQQFqIQkMAQsLIApBAWohCgwBCwsLogEAIw4klAEjDySVASMQJJYBIxEklwEjEiSYASMTJJkBIxQkmgEjFSSbASMWJJwBIxcknQEjGCSeASMZJJ8BIxokoAEjGyShASMcJKIBIx0kowEjHiSkASMfJKUBIyAkpgEjISSnASMiJKgBIyMkqQEjJCSqASMlJKsBIyYkrAEjJyStASMoJK4BIykkrwEjKiSwASMrJLEBIywksgEjLSSzAQuiAQAjlAEkDiOVASQPI5YBJBAjlwEkESOYASQSI5kBJBMjmgEkFCObASQVI5wBJBYjnQEkFyOeASQYI58BJBkjoAEkGiOhASQbI6IBJBwjowEkHSOkASQeI6UBJB8jpgEkICOnASQhI6gBJCIjqQEkIyOqASQkI6sBJCUjrAEkJiOtASQnI64BJCgjrwEkKSOwASQqI7EBJCsjsgEkLCOzASQtCyoAIy4ktAEjLyS1ASMwJLYBIzEktwEjMiS4ASMzJLkBIzQkugEjNSS7AQsqACO0ASQuI7UBJC8jtgEkMCO3ASQxI7gBJDIjuQEkMyO6ASQ0I7sBJDULawAjNiS8ASM3JL0BIzgkvgEjOSS/ASM6JMABIzskwQEjPCTCASM9JMMBIz4kxAEjPyTFASNAJMYBI0EkxwEjQiTIASNDJMkBI0QkygEjRSTLASNGJMwBI0ckzQEjSCTOASNJJM8BI0ok0AELawAjvAEkNiO9ASQ3I74BJDgjvwEkOSPAASQ6I8EBJDsjwgEkPCPDASQ9I8QBJD4jxQEkPyPGASRAI8cBJEEjyAEkQiPJASRDI8oBJEQjywEkRSPMASRGI80BJEcjzgEkSCPPASRJI9ABJEoLawAjSyTRASNMJNIBI00k0wEjTiTUASNPJNUBI1Ak1gEjUSTXASNSJNgBI1Mk2QEjVCTaASNVJNsBI1Yk3AEjVyTdASNYJN4BI1kk3wEjWiTgASNbJOEBI1wk4gEjXSTjASNeJOQBI18k5QELawAj0QEkSyPSASRMI9MBJE0j1AEkTiPVASRPI9YBJFAj1wEkUSPYASRSI9kBJFMj2gEkVCPbASRVI9wBJFYj3QEkVyPeASRYI98BJFkj4AEkWiPhASRbI+IBJFwj4wEkXSPkASReI+UBJF8LawAjYCTmASNhJOcBI2Ik6AEjYyTpASNkJOoBI2Uk6wEjZiTsASNnJO0BI2gk7gEjaSTvASNqJPABI2sk8QEjbCTyASNtJPMBI24k9AEjbyT1ASNwJPYBI3Ek9wEjciT4ASNzJPkBI3Qk+gELawAj5gEkYCPnASRhI+gBJGIj6QEkYyPqASRkI+sBJGUj7AEkZiPtASRnI+4BJGgj7wEkaSPwASRqI/EBJGsj8gEkbCPzASRtI/QBJG4j9QEkbyP2ASRwI/cBJHEj+AEkciP5ASRzI/oBJHQLdQAjdST7ASN2JPwBI3ck/QEjeCT+ASN5JP8BI3okgAIjeySBAiN8JIICI30kgwIjfiSEAiN/JIUCI4ABJIYCI4EBJIcCI4IBJIgCI4MBJIkCI4QBJIoCI4UBJIsCI4YBJIwCI4cBJI0CI4gBJI4CI4kBJI8CC3UAI/sBJHUj/AEkdiP9ASR3I/4BJHgj/wEkeSOAAiR6I4ECJHsjggIkfCODAiR9I4QCJH4jhQIkfyOGAiSAASOHAiSBASOIAiSCASOJAiSDASOKAiSEASOLAiSFASOMAiSGASONAiSHASOOAiSIASOPAiSJAQsIAEHMCiSQAgsLvAIDAEGMCAsvLAAAAAEAAAAAAAAAAQAAABwAAABJAG4AdgBhAGwAaQBkACAAbABlAG4AZwB0AGgAQbwICzk8AAAAAQAAAAAAAAABAAAAJgAAAH4AbABpAGIALwBhAHIAcgBhAHkAYgB1AGYAZgBlAHIALgB0AHMAQYAJC8ABboP5ogAAAADRVyf8KRVETpmVYtvA3TT1q2NR/kGQQzw6biS3YcW73uouSQbg0k1CHOsd/hyS0Qn1NYLoPqcpsSZwnOmERLsuOdaROUF+X7SLX4Sc9DlTg/+X+B87KPm9ixEv7w+YBd7PfjZtH20KWmY/Rk+3Ccsnx7ondS3qX573OQc9e/Hl67Ff+2vqklKKRjADVghdjR8gvM/wq2t7/GGR46kdNvSaX4WZZQgb5l6A2P+NQGigFFcVBgYxJ3NN`,gn=()=>hn,_n=class e{constructor(e,t,n){this.opts=n,this.rng=Ht(n),this.deterministicMode=n.deterministic||n.testMode,this.audio=new Ft(e);let r=n.width||1200,i=n.height||900;window.OffscreenCanvas?this.internalCanvas=new OffscreenCanvas(r,i):(this.internalCanvas=document.createElement(`canvas`),this.internalCanvas.width=r,this.internalCanvas.height=i),this.gl=this.internalCanvas.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1}),this.outputGl=t.getContext(`2d`,{willReadFrequently:!1}),this.baseValsDefaults={decay:.98,gammaadj:2,echo_zoom:2,echo_alpha:0,echo_orient:0,red_blue:0,brighten:0,darken:0,wrap:1,darken_center:0,solarize:0,invert:0,bmotionvectorson:1,fshader:0,b1n:0,b2n:0,b3n:0,b1x:1,b2x:1,b3x:1,b1ed:.25,wave_mode:0,additivewave:0,wave_dots:0,wave_thick:0,wave_a:.8,wave_scale:1,wave_smoothing:.75,wave_mystery:0,modwavealphabyvolume:0,modwavealphastart:.75,modwavealphaend:.95,wave_r:1,wave_g:1,wave_b:1,wave_x:.5,wave_y:.5,wave_brighten:1,mv_x:12,mv_y:9,mv_dx:0,mv_dy:0,mv_l:.9,mv_r:1,mv_g:1,mv_b:1,mv_a:1,warpanimspeed:1,warpscale:1,zoomexp:1,zoom:1,rot:0,cx:.5,cy:.5,dx:0,dy:0,warp:1,sx:1,sy:1,ob_size:.01,ob_r:0,ob_g:0,ob_b:0,ob_a:0,ib_size:.01,ib_r:.25,ib_g:.25,ib_b:.25,ib_a:0},this.shapeBaseValsDefaults={enabled:0,sides:4,additive:0,thickoutline:0,textured:0,num_inst:1,tex_zoom:1,tex_ang:0,x:.5,y:.5,rad:.1,ang:0,r:1,g:0,b:0,a:1,r2:0,g2:1,b2:0,a2:0,border_r:1,border_g:1,border_b:1,border_a:.1},this.waveBaseValsDefaults={enabled:0,samples:512,sep:0,scaling:1,smoothing:.5,r:1,g:1,b:1,a:1,spectrum:0,usedots:0,thick:0,additive:0},this.qs=U.range(1,33).map(e=>`q${e}`),this.ts=U.range(1,9).map(e=>`t${e}`),this.globalPerFrameVars=[`old_wave_mode`,`frame`,`time`,`fps`,`bass`,`bass_att`,`mid`,`mid_att`,`treb`,`treb_att`,`meshx`,`meshy`,`aspectx`,`aspecty`,`pixelsx`,`pixelsy`,`rand_start`,`rand_preset`],this.globalPerPixelVars=[`frame`,`time`,`fps`,`bass`,`bass_att`,`mid`,`mid_att`,`treb`,`treb_att`,`meshx`,`meshy`,`aspectx`,`aspecty`,`pixelsx`,`pixelsy`,`rand_start`,`rand_preset`,`x`,`y`,`rad`,`ang`],this.globalShapeVars=[`frame`,`time`,`fps`,`bass`,`bass_att`,`mid`,`mid_att`,`treb`,`treb_att`,`meshx`,`meshy`,`aspectx`,`aspecty`,`pixelsx`,`pixelsy`,`rand_start`,`rand_preset`,`instance`],this.shapeBaseVars=[`x`,`y`,`rad`,`ang`,`r`,`g`,`b`,`a`,`r2`,`g2`,`b2`,`a2`,`border_r`,`border_g`,`border_b`,`border_a`,`thickoutline`,`textured`,`tex_zoom`,`tex_ang`,`additive`],this.globalWaveVars=[`frame`,`time`,`fps`,`bass`,`bass_att`,`mid`,`mid_att`,`treb`,`treb_att`,`meshx`,`meshy`,`aspectx`,`aspecty`,`pixelsx`,`pixelsy`,`rand_start`,`rand_preset`,`x`,`y`,`sample`,`value1`,`value2`],this.renderer=new mn(this.gl,this.audio,n)}loseGLContext(){this.gl.getExtension(`WEBGL_lose_context`).loseContext(),this.outputGl=null}connectAudio(e){this.audioNode=e,this.audio.connectAudio(e)}disconnectAudio(e){this.audio.disconnectAudio(e)}static overrideDefaultVars(e,t){let n={};return Object.keys(e).forEach(r=>{Object.prototype.hasOwnProperty.call(t,r)?n[r]=t[r]:n[r]=e[r]}),n}createQVars(){let e={};return this.qs.forEach(t=>{e[t]=new WebAssembly.Global({value:`f64`,mutable:!0},0)}),e}createTVars(){let e={};return this.ts.forEach(t=>{e[t]=new WebAssembly.Global({value:`f64`,mutable:!0},0)}),e}createPerFramePool(e){let t={};return Object.keys(this.baseValsDefaults).forEach(n=>{t[n]=new WebAssembly.Global({value:`f64`,mutable:!0},e[n])}),this.globalPerFrameVars.forEach(e=>{t[e]=new WebAssembly.Global({value:`f64`,mutable:!0},0)}),t}createPerPixelPool(e){let t={};return Object.keys(this.baseValsDefaults).forEach(n=>{t[n]=new WebAssembly.Global({value:`f64`,mutable:!0},e[n])}),this.globalPerPixelVars.forEach(e=>{t[e]=new WebAssembly.Global({value:`f64`,mutable:!0},0)}),t}createCustomShapePerFramePool(e){let t={};return Object.keys(this.shapeBaseValsDefaults).forEach(n=>{t[n]=new WebAssembly.Global({value:`f64`,mutable:!0},e[n])}),this.globalShapeVars.forEach(e=>{t[e]=new WebAssembly.Global({value:`f64`,mutable:!0},0)}),t}createCustomWavePerFramePool(e){let t={};return Object.keys(this.waveBaseValsDefaults).forEach(n=>{t[n]=new WebAssembly.Global({value:`f64`,mutable:!0},e[n])}),this.globalWaveVars.forEach(e=>{t[e]=new WebAssembly.Global({value:`f64`,mutable:!0},0)}),t}static makeShapeResetPool(e,t,n){return t.reduce((t,r)=>({...t,[`${r}_${n}`]:e[r]}),{})}static base64ToArrayBuffer(e){for(var t=window.atob(e),n=t.length,r=new Uint8Array(n),i=0;i<n;i++)r[i]=t.charCodeAt(i);return r.buffer}async loadPreset(t,n=0){let r=JSON.parse(JSON.stringify(t));r.baseVals=e.overrideDefaultVars(this.baseValsDefaults,r.baseVals);for(let t=0;t<r.shapes.length;t++)r.shapes[t].baseVals=e.overrideDefaultVars(this.shapeBaseValsDefaults,r.shapes[t].baseVals);for(let t=0;t<r.waves.length;t++)r.waves[t].baseVals=e.overrideDefaultVars(this.waveBaseValsDefaults,r.waves[t].baseVals);let i=r.useJS&&!this.opts.onlyUseWASM;Object.prototype.hasOwnProperty.call(r,`init_eqs_eel`)&&!i?(r.useWASM=!0,await this.loadWASMPreset(r,n)):this.opts.onlyUseWASM?console.warn(`Tried to load a preset that doesn't support WASM with onlyUseWASM on`):Object.prototype.hasOwnProperty.call(r,`init_eqs_str`)?this.loadJSPreset(r,n):console.warn(`Tried to load a JS preset that doesn't have converted strings`)}async loadWASMPreset(t,n){let r=this.createQVars(),i=this.createTVars(),a={perFrame:{...r,...this.createPerFramePool(t.baseVals)},perVertex:{...r,...this.createPerPixelPool(t.baseVals)}},o={presetInit:{pool:`perFrame`,code:t.init_eqs_eel},perFrame:{pool:`perFrame`,code:t.frame_eqs_eel}};t.pixel_eqs_eel!==``&&(o.perPixel={pool:`perVertex`,code:t.pixel_eqs_eel});for(let e=0;e<t.shapes.length;e++)a[`shapePerFrame${e}`]={...r,...i,...this.createCustomShapePerFramePool(t.shapes[e].baseVals)},t.shapes[e].baseVals.enabled!==0&&(o[`shapes_${e}_init_eqs`]={pool:`shapePerFrame${e}`,code:t.shapes[e].init_eqs_eel},o[`shapes_${e}_frame_eqs`]={pool:`shapePerFrame${e}`,code:t.shapes[e].frame_eqs_eel});for(let e=0;e<t.waves.length;e++)t.waves[e].baseVals.enabled!==0&&(a[`wavePerFrame${e}`]={...r,...i,...this.createCustomWavePerFramePool(t.waves[e].baseVals)},o[`waves_${e}_init_eqs`]={pool:`wavePerFrame${e}`,code:t.waves[e].init_eqs_eel},o[`waves_${e}_frame_eqs`]={pool:`wavePerFrame${e}`,code:t.waves[e].frame_eqs_eel},t.waves[e].point_eqs_eel&&t.waves[e].point_eqs_eel!==``&&(o[`waves_${e}_point_eqs`]={pool:`wavePerFrame${e}`,code:t.waves[e].point_eqs_eel}));let s=await rt({pools:a,functions:o,eelVersion:t.version||2}),c=e=>e||(()=>{}),l=await Nt.instantiate(e.base64ToArrayBuffer(gn()),{pixelEqs:{perPixelEqs:c(s.exports.perPixel)},pixelVarPool:{warp:a.perVertex.warp,zoom:a.perVertex.zoom,zoomexp:a.perVertex.zoomexp,cx:a.perVertex.cx,cy:a.perVertex.cy,sx:a.perVertex.sx,sy:a.perVertex.sy,dx:a.perVertex.dx,dy:a.perVertex.dy,rot:a.perVertex.rot,x:a.perVertex.x,y:a.perVertex.y,ang:a.perVertex.ang,rad:a.perVertex.rad},qVarPool:r,tVarPool:i,shapePool0:e.makeShapeResetPool(a.shapePerFrame0,this.shapeBaseVars,0),shapePool1:e.makeShapeResetPool(a.shapePerFrame1,this.shapeBaseVars,1),shapePool2:e.makeShapeResetPool(a.shapePerFrame2,this.shapeBaseVars,2),shapePool3:e.makeShapeResetPool(a.shapePerFrame3,this.shapeBaseVars,3),console:{logi:e=>{console.log(`logi: `+e)},logf:e=>{console.log(`logf: `+e)}},env:{abort:()=>{}}});t.globalPools=a,t.init_eqs=c(s.exports.presetInit),t.frame_eqs=c(s.exports.perFrame),t.save_qs=l.exports.saveQs,t.restore_qs=l.exports.restoreQs,t.save_ts=l.exports.saveTs,t.restore_ts=l.exports.restoreTs,s.exports.perPixel&&(t.pixel_eqs=s.exports.perPixel),t.pixel_eqs_initialize_array=(e,n)=>{t.pixel_eqs_array=l.exports.createFloat32Array((e+1)*(n+1)*2)},t.pixel_eqs_get_array=()=>l.exports.__getFloat32ArrayView(t.pixel_eqs_array),t.pixel_eqs_wasm=(...e)=>l.exports.runPixelEquations(t.pixel_eqs_array,...e);for(let e=0;e<t.shapes.length;e++)t.shapes[e].baseVals.enabled!==0&&(t.shapes[e].init_eqs=c(s.exports[`shapes_${e}_init_eqs`]),t.shapes[e].frame_eqs=s.exports[`shapes_${e}_frame_eqs`],t.shapes[e].frame_eqs_save=()=>l.exports[`shape${e}_save`](),t.shapes[e].frame_eqs_restore=()=>l.exports[`shape${e}_restore`]());for(let e=0;e<t.waves.length;e++)if(t.waves[e].baseVals.enabled!==0){let n={init_eqs:c(s.exports[`waves_${e}_init_eqs`]),frame_eqs:c(s.exports[`waves_${e}_frame_eqs`])};t.waves[e].point_eqs_eel&&t.waves[e].point_eqs_eel!==``?n.point_eqs=s.exports[`waves_${e}_point_eqs`]:n.point_eqs=``,t.waves[e]=Object.assign({},t.waves[e],n)}this.renderer.loadPreset(t,n)}loadJSPreset(e,t){if(typeof e.init_eqs!=`function`){e.init_eqs=Function(`a`,`${e.init_eqs_str} return a;`),e.frame_eqs=Function(`a`,`${e.frame_eqs_str} return a;`),e.pixel_eqs_str&&e.pixel_eqs_str!==``?e.pixel_eqs=Function(`a`,`${e.pixel_eqs_str} return a;`):e.pixel_eqs=``;for(let t=0;t<e.shapes.length;t++)e.shapes[t].baseVals.enabled!==0&&(e.shapes[t]=Object.assign({},e.shapes[t],{init_eqs:Function(`a`,`${e.shapes[t].init_eqs_str} return a;`),frame_eqs:Function(`a`,`${e.shapes[t].frame_eqs_str} return a;`)}));for(let t=0;t<e.waves.length;t++)if(e.waves[t].baseVals.enabled!==0){let n={init_eqs:Function(`a`,`${e.waves[t].init_eqs_str} return a;`),frame_eqs:Function(`a`,`${e.waves[t].frame_eqs_str} return a;`)};e.waves[t].point_eqs_str&&e.waves[t].point_eqs_str!==``?n.point_eqs=Function(`a`,`${e.waves[t].point_eqs_str} return a;`):n.point_eqs=``,e.waves[t]=Object.assign({},e.waves[t],n)}}this.renderer.loadPreset(e,t)}loadExtraImages(e){this.renderer.loadExtraImages(e)}setRendererSize(e,t,n={}){this.internalCanvas.width=e,this.internalCanvas.height=t,this.renderer.setRendererSize(e,t,n)}setInternalMeshSize(e,t){this.renderer.setInternalMeshSize(e,t)}setOutputAA(e){this.renderer.setOutputAA(e)}setCanvas(e){this.outputGl=e.getContext(`2d`,{willReadFrequently:!1})}render(e){let t=this.renderer.render(e);return this.outputGl&&this.outputGl.drawImage(this.internalCanvas,0,0),t}launchSongTitleAnim(e){this.renderer.launchSongTitleAnim(e)}toDataURL(){return this.renderer.toDataURL()}warpBufferToDataURL(){return this.renderer.warpBufferToDataURL()}},vn=class{static createVisualizer(e,t,n){return new _n(e,t,n)}},yn=1e3,bn=1001,xn=1002,Sn=1003,Cn=1004,wn=1005,Tn=1006,En=1007,Dn=1008,On=1009,kn=1010,An=1011,jn=1012,Mn=1013,Nn=1014,Pn=1015,Fn=1016,In=1017,Ln=1018,Rn=1020,zn=35902,Bn=35899,Vn=1021,Hn=1022,Un=1023,Wn=1026,Gn=1027,Kn=1028,qn=1029,Jn=1030,Yn=1031,Xn=1033,Zn=33776,Qn=33777,$n=33778,er=33779,tr=35840,nr=35841,rr=35842,ir=35843,ar=36196,or=37492,sr=37496,cr=37488,lr=37489,ur=37490,dr=37491,fr=37808,pr=37809,mr=37810,hr=37811,gr=37812,_r=37813,vr=37814,yr=37815,br=37816,xr=37817,Sr=37818,Cr=37819,wr=37820,Tr=37821,Er=36492,Dr=36494,Or=36495,kr=36283,Ar=36284,jr=36285,Mr=36286,Nr=2300,Pr=2301,Fr=2302,Ir=2303,Lr=2400,Rr=2401,zr=2402,Br=3200,Vr=`srgb`,Hr=`srgb-linear`,Ur=`linear`,Wr=`srgb`,Gr=7680,Kr=35044,qr=2e3;function Jr(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Yr(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Xr(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Zr(){let e=Xr(`canvas`);return e.style.display=`block`,e}var Qr={};function $r(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ei(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function W(...e){e=ei(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function G(...e){e=ei(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ti(...e){let t=e.join(` `);t in Qr||(Qr[t]=!0,W(...e))}function ni(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ri={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ai=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),oi=Math.PI/180,si=180/Math.PI;function ci(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ai[e&255]+ai[e>>8&255]+ai[e>>16&255]+ai[e>>24&255]+`-`+ai[t&255]+ai[t>>8&255]+`-`+ai[t>>16&15|64]+ai[t>>24&255]+`-`+ai[n&63|128]+ai[n>>8&255]+`-`+ai[n>>16&255]+ai[n>>24&255]+ai[r&255]+ai[r>>8&255]+ai[r>>16&255]+ai[r>>24&255]).toLowerCase()}function K(e,t,n){return Math.max(t,Math.min(n,e))}function li(e,t){return(e%t+t)%t}function ui(e,t,n){return(1-n)*e+n*t}function di(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function fi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var q=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:W(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(K(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hi.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hi.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mi.copy(this).projectOnVector(e),this.sub(mi)}reflect(e){return this.sub(mi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(K(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mi=new J,hi=new pi,Y=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],v=r[1],y=r[4],b=r[7],x=r[2],S=r[5],C=r[8];return i[0]=a*m+o*v+s*x,i[3]=a*h+o*y+s*S,i[6]=a*g+o*b+s*C,i[1]=c*m+l*v+u*x,i[4]=c*h+l*y+u*S,i[7]=c*g+l*b+u*C,i[2]=d*m+f*v+p*x,i[5]=d*h+f*y+p*S,i[8]=d*g+f*b+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ti(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(gi.makeScale(e,t)),this}rotate(e){return ti(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(gi.makeRotation(-e)),this}translate(e,t){return ti(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(gi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gi=new Y,_i=new Y().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vi=new Y().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yi(){let e={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=bi(e.r),e.g=bi(e.g),e.b=bi(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=xi(e.r),e.g=xi(e.g),e.b=xi(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ur:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ti(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ti(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Hr]:{primaries:t,whitePoint:r,transfer:Ur,toXYZ:_i,fromXYZ:vi,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vr},outputColorSpaceConfig:{drawingBufferColorSpace:Vr}},[Vr]:{primaries:t,whitePoint:r,transfer:Wr,toXYZ:_i,fromXYZ:vi,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vr}}}),e}var X=yi();function bi(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function xi(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Si,Ci=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=Xr(`canvas`)),Si.width=e.width,Si.height=e.height;let t=Si.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Xr(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=bi(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(bi(t[e]/255)*255):t[e]=bi(t[e]);return{data:t,width:e.width,height:e.height}}else return W(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},wi=0,Ti=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wi++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ei(r[t].image)):e.push(Ei(r[t]))}else e=Ei(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ei(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ci.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(W(`Texture: Unable to serialize Texture.`),{})}var Di=0,Oi=new J,ki=class e extends ii{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=bn,i=bn,a=Tn,o=Dn,s=Un,c=On,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Di++}),this.uuid=ci(),this.name=``,this.source=new Ti(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Y,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oi).x}get height(){return this.source.getSize(Oi).y}get depth(){return this.source.getSize(Oi).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){W(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){W(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yn:e.x-=Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case xn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yn:e.y-=Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case xn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ki.DEFAULT_IMAGE=null,ki.DEFAULT_MAPPING=300,ki.DEFAULT_ANISOTROPY=1;var Ai=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,v=(g+1)/2,y=(l+d)/4,b=(u+m)/4,x=(p+h)/4;return e>s&&e>v?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=y/n,i=b/n):s>v?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=y/r,i=x/r):v<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(v),n=b/i,r=x/i),this.set(n,r,i,t),this}let v=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(v)<.001&&(v=1),this.x=(h-p)/v,this.y=(u-m)/v,this.z=(d-l)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=K(this.x,e.x,t.x),this.y=K(this.y,e.y,t.y),this.z=K(this.z,e.z,t.z),this.w=K(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=K(this.x,e,t),this.y=K(this.y,e,t),this.z=K(this.z,e,t),this.w=K(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(K(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ji=class extends ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ai(0,0,e,t),this.scissorTest=!1,this.viewport=new Ai(0,0,e,t),this.textures=[];let r=new ki({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ti(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mi=class extends ji{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ni=class extends ki{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Pi=class extends ki{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fi=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ii.setFromMatrixColumn(e,0).length(),i=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ri,e,zi)}lookAt(e,t,n){let r=this.elements;return Hi.subVectors(e,t),Hi.lengthSq()===0&&(Hi.z=1),Hi.normalize(),Bi.crossVectors(n,Hi),Bi.lengthSq()===0&&(Math.abs(n.z)===1?Hi.x+=1e-4:Hi.z+=1e-4,Hi.normalize(),Bi.crossVectors(n,Hi)),Bi.normalize(),Vi.crossVectors(Hi,Bi),r[0]=Bi.x,r[4]=Vi.x,r[8]=Hi.x,r[1]=Bi.y,r[5]=Vi.y,r[9]=Hi.y,r[2]=Bi.z,r[6]=Vi.z,r[10]=Hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],v=n[3],y=n[7],b=n[11],x=n[15],S=r[0],C=r[4],w=r[8],T=r[12],E=r[1],D=r[5],O=r[9],k=r[13],A=r[2],j=r[6],M=r[10],ee=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*S+o*E+s*A+c*N,i[4]=a*C+o*D+s*j+c*P,i[8]=a*w+o*O+s*M+c*F,i[12]=a*T+o*k+s*ee+c*I,i[1]=l*S+u*E+d*A+f*N,i[5]=l*C+u*D+d*j+f*P,i[9]=l*w+u*O+d*M+f*F,i[13]=l*T+u*k+d*ee+f*I,i[2]=p*S+m*E+h*A+g*N,i[6]=p*C+m*D+h*j+g*P,i[10]=p*w+m*O+h*M+g*F,i[14]=p*T+m*k+h*ee+g*I,i[3]=v*S+y*E+b*A+x*N,i[7]=v*C+y*D+b*j+x*P,i[11]=v*w+y*O+b*M+x*F,i[15]=v*T+y*k+b*ee+x*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],v=s*f-c*d,y=o*f-c*u,b=o*d-s*u,x=a*f-c*l,S=a*d-s*l,C=a*u-o*l;return t*(m*v-h*y+g*b)-n*(p*v-h*x+g*S)+r*(p*y-m*x+g*C)-i*(p*b-m*S+h*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],v=t*o-n*a,y=t*s-r*a,b=t*c-i*a,x=n*s-r*o,S=n*c-i*o,C=r*c-i*s,w=l*m-u*p,T=l*h-d*p,E=l*g-f*p,D=u*h-d*m,O=u*g-f*m,k=d*g-f*h,A=v*k-y*O+b*D+x*E-S*T+C*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/A;return e[0]=(o*k-s*O+c*D)*j,e[1]=(r*O-n*k-i*D)*j,e[2]=(m*C-h*S+g*x)*j,e[3]=(d*S-u*C-f*x)*j,e[4]=(s*E-a*k-c*T)*j,e[5]=(t*k-r*E+i*T)*j,e[6]=(h*b-p*C-g*y)*j,e[7]=(l*C-d*b+f*y)*j,e[8]=(a*O-o*E+c*w)*j,e[9]=(n*E-t*O-i*w)*j,e[10]=(p*S-m*b+g*v)*j,e[11]=(u*b-l*S-f*v)*j,e[12]=(o*T-a*D-s*w)*j,e[13]=(t*D-n*T+r*w)*j,e[14]=(m*y-p*x-h*v)*j,e[15]=(l*x-u*y+d*v)*j,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,v=s*c,y=s*l,b=s*u,x=n.x,S=n.y,C=n.z;return r[0]=(1-(m+g))*x,r[1]=(f+b)*x,r[2]=(p-y)*x,r[3]=0,r[4]=(f-b)*S,r[5]=(1-(d+g))*S,r[6]=(h+v)*S,r[7]=0,r[8]=(p+y)*C,r[9]=(h-v)*C,r[10]=(1-(d+m))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Ii.set(r[0],r[1],r[2]).length(),o=Ii.set(r[4],r[5],r[6]).length(),s=Ii.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Li.copy(this);let c=1/a,l=1/o,u=1/s;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=l,Li.elements[5]*=l,Li.elements[6]*=l,Li.elements[8]*=u,Li.elements[9]*=u,Li.elements[10]*=u,t.setFromRotationMatrix(Li),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=qr,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=qr,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ii=new J,Li=new Fi,Ri=new J(0,0,0),zi=new J(1,1,1),Bi=new J,Vi=new J,Hi=new J,Ui=new Fi,Wi=new pi,Gi=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(K(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-K(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(K(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-K(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(K(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-K(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:W(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ui.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ui,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wi.setFromEuler(this),this.setFromQuaternion(Wi,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gi.DEFAULT_ORDER=`XYZ`;var Ki=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},qi=0,Ji=new J,Yi=new pi,Xi=new Fi,Zi=new J,Qi=new J,$i=new J,ea=new pi,ta=new J(1,0,0),na=new J(0,1,0),ra=new J(0,0,1),ia={type:`added`},aa={type:`removed`},oa={type:`childadded`,child:null},sa={type:`childremoved`,child:null},ca=class e extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qi++}),this.uuid=ci(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new Gi,r=new pi,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fi},normalMatrix:{value:new Y}}),this.matrix=new Fi,this.matrixWorld=new Fi,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ki,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(ta,e)}rotateY(e){return this.rotateOnAxis(na,e)}rotateZ(e){return this.rotateOnAxis(ra,e)}translateOnAxis(e,t){return Ji.copy(e).applyQuaternion(this.quaternion),this.position.add(Ji.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ta,e)}translateY(e){return this.translateOnAxis(na,e)}translateZ(e){return this.translateOnAxis(ra,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zi.copy(e):Zi.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Qi,Zi,this.up):Xi.lookAt(Zi,Qi,this.up),this.quaternion.setFromRotationMatrix(Xi),r&&(Xi.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(Xi),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(G(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ia),oa.child=e,this.dispatchEvent(oa),oa.child=null):G(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aa),sa.child=e,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ia),oa.child=e,this.dispatchEvent(oa),oa.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,$i),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,ea,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};ca.DEFAULT_UP=new J(0,1,0),ca.DEFAULT_MATRIX_AUTO_UPDATE=!0,ca.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var la=class extends ca{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ua={type:`move`},da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new la,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new la,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new la,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ua)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new la;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pa={h:0,s:0,l:0},ma={h:0,s:0,l:0};function ha(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var ga=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,X.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=X.workingColorSpace){return this.r=e,this.g=t,this.b=n,X.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=X.workingColorSpace){if(e=li(e,1),t=K(t,0,1),n=K(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=ha(i,r,e+1/3),this.g=ha(i,r,e),this.b=ha(i,r,e-1/3)}return X.colorSpaceToWorking(this,r),this}setStyle(e,t=Vr){function n(t){t!==void 0&&parseFloat(t)<1&&W(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:W(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);W(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vr){let n=fa[e.toLowerCase()];return n===void 0?W(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vr){return X.workingToColorSpace(_a.copy(this),e),Math.round(K(_a.r*255,0,255))*65536+Math.round(K(_a.g*255,0,255))*256+Math.round(K(_a.b*255,0,255))}getHexString(e=Vr){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=X.workingColorSpace){X.workingToColorSpace(_a.copy(this),t);let n=_a.r,r=_a.g,i=_a.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=X.workingColorSpace){return X.workingToColorSpace(_a.copy(this),t),e.r=_a.r,e.g=_a.g,e.b=_a.b,e}getStyle(e=Vr){X.workingToColorSpace(_a.copy(this),e);let t=_a.r,n=_a.g,r=_a.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(pa),this.setHSL(pa.h+e,pa.s+t,pa.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pa),e.getHSL(ma);let n=ui(pa.h,ma.h,t),r=ui(pa.s,ma.s,t),i=ui(pa.l,ma.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_a=new ga;ga.NAMES=fa;var va=class extends ca{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ya=new J,ba=new J,xa=new J,Sa=new J,Ca=new J,wa=new J,Ta=new J,Ea=new J,Da=new J,Oa=new J,ka=new Ai,Aa=new Ai,ja=new Ai,Ma=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ya.subVectors(e,t),r.cross(ya);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ya.subVectors(r,t),ba.subVectors(n,t),xa.subVectors(e,t);let a=ya.dot(ya),o=ya.dot(ba),s=ya.dot(xa),c=ba.dot(ba),l=ba.dot(xa),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Sa)!==null&&Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Sa)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Sa.x),s.addScaledVector(a,Sa.y),s.addScaledVector(o,Sa.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ka.setScalar(0),Aa.setScalar(0),ja.setScalar(0),ka.fromBufferAttribute(e,t),Aa.fromBufferAttribute(e,n),ja.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ka,i.x),a.addScaledVector(Aa,i.y),a.addScaledVector(ja,i.z),a}static isFrontFacing(e,t,n,r){return ya.subVectors(n,t),ba.subVectors(e,t),ya.cross(ba).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ya.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),ya.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Ca.subVectors(r,n),wa.subVectors(i,n),Ea.subVectors(e,n);let s=Ca.dot(Ea),c=wa.dot(Ea);if(s<=0&&c<=0)return t.copy(n);Da.subVectors(e,r);let l=Ca.dot(Da),u=wa.dot(Da);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Ca,a);Oa.subVectors(e,i);let f=Ca.dot(Oa),p=wa.dot(Oa);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(wa,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Ta.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Ta,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Ca,a).addScaledVector(wa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Na=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fa.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fa.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fa.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Fa):Fa.fromBufferAttribute(r,t),Fa.applyMatrix4(e.matrixWorld),this.expandByPoint(Fa);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ia.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fa),Fa.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),Wa.subVectors(this.max,Ua),La.subVectors(e.a,Ua),Ra.subVectors(e.b,Ua),za.subVectors(e.c,Ua),Ba.subVectors(Ra,La),Va.subVectors(za,Ra),Ha.subVectors(La,za);let t=[0,-Ba.z,Ba.y,0,-Va.z,Va.y,0,-Ha.z,Ha.y,Ba.z,0,-Ba.x,Va.z,0,-Va.x,Ha.z,0,-Ha.x,-Ba.y,Ba.x,0,-Va.y,Va.x,0,-Ha.y,Ha.x,0];return!qa(t,La,Ra,za,Wa)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,La,Ra,za,Wa))?!1:(Ga.crossVectors(Ba,Va),t=[Ga.x,Ga.y,Ga.z],qa(t,La,Ra,za,Wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fa).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fa).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pa=[new J,new J,new J,new J,new J,new J,new J,new J],Fa=new J,Ia=new Na,La=new J,Ra=new J,za=new J,Ba=new J,Va=new J,Ha=new J,Ua=new J,Wa=new J,Ga=new J,Ka=new J;function qa(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Ka.fromArray(e,a);let o=i.x*Math.abs(Ka.x)+i.y*Math.abs(Ka.y)+i.z*Math.abs(Ka.z),s=t.dot(Ka),c=n.dot(Ka),l=r.dot(Ka);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ja=new J,Ya=new q,Xa=0,Za=class extends ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xa++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Kr,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXYZ(t,Ja.x,Ja.y,Ja.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix4(e),this.setXYZ(t,Ja.x,Ja.y,Ja.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyNormalMatrix(e),this.setXYZ(t,Ja.x,Ja.y,Ja.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.transformDirection(e),this.setXYZ(t,Ja.x,Ja.y,Ja.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),n=fi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),n=fi(n,this.array),r=fi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),n=fi(n,this.array),r=fi(r,this.array),i=fi(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},Qa=class extends Za{constructor(e,t,n){super(new Uint16Array(e),t,n)}},$a=class extends Za{constructor(e,t,n){super(new Uint32Array(e),t,n)}},eo=class extends Za{constructor(e,t,n){super(new Float32Array(e),t,n)}},to=new Na,no=new J,ro=new J,io=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?to.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);let t=no.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(no,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(ro)),this.expandByPoint(no.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ao=0,oo=new Fi,so=new ca,co=new J,lo=new Na,uo=new Na,fo=new J,po=class e extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ao++}),this.uuid=ci(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jr(e)?$a:Qa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Y().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oo.makeRotationFromQuaternion(e),this.applyMatrix4(oo),this}rotateX(e){return oo.makeRotationX(e),this.applyMatrix4(oo),this}rotateY(e){return oo.makeRotationY(e),this.applyMatrix4(oo),this}rotateZ(e){return oo.makeRotationZ(e),this.applyMatrix4(oo),this}translate(e,t,n){return oo.makeTranslation(e,t,n),this.applyMatrix4(oo),this}scale(e,t,n){return oo.makeScale(e,t,n),this.applyMatrix4(oo),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new eo(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&W(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){G(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];lo.setFromBufferAttribute(n),this.morphTargetsRelative?(fo.addVectors(this.boundingBox.min,lo.min),this.boundingBox.expandByPoint(fo),fo.addVectors(this.boundingBox.max,lo.max),this.boundingBox.expandByPoint(fo)):(this.boundingBox.expandByPoint(lo.min),this.boundingBox.expandByPoint(lo.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&G(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new io);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){G(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);return}if(e){let n=this.boundingSphere.center;if(lo.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];uo.setFromBufferAttribute(n),this.morphTargetsRelative?(fo.addVectors(lo.min,uo.min),lo.expandByPoint(fo),fo.addVectors(lo.max,uo.max),lo.expandByPoint(fo)):(lo.expandByPoint(uo.min),lo.expandByPoint(uo.max))}lo.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)fo.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(fo));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)fo.fromBufferAttribute(a,t),o&&(co.fromBufferAttribute(e,t),fo.add(co)),r=Math.max(r,n.distanceToSquared(fo))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&G(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){G(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Za(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new J,s[e]=new J;let c=new J,l=new J,u=new J,d=new q,f=new q,p=new q,m=new J,h=new J;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new J,b=new J,x=new J,S=new J;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)C(e.getX(t+0)),C(e.getX(t+1)),C(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Za(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fo.fromBufferAttribute(e,t),fo.normalize(),e.setXYZ(t,fo.x,fo.y,fo.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Za(a,r,i)}if(this.index===null)return W(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},mo=0,ho=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mo++}),this.uuid=ci(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ga(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){W(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){W(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ga().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new q().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},go=new J,_o=new J,vo=new J,yo=new J,bo=new J,xo=new J,So=new J,Co=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,go)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=go.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(go.copy(this.origin).addScaledVector(this.direction,t),go.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_o.copy(e).add(t).multiplyScalar(.5),vo.copy(t).sub(e).normalize(),yo.copy(this.origin).sub(_o);let i=e.distanceTo(t)*.5,a=-this.direction.dot(vo),o=yo.dot(this.direction),s=-yo.dot(vo),c=yo.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(_o).addScaledVector(vo,d),f}intersectSphere(e,t){go.subVectors(e.center,this.origin);let n=go.dot(this.direction),r=go.dot(go)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,go)!==null}intersectTriangle(e,t,n,r,i){bo.subVectors(t,e),xo.subVectors(n,e),So.crossVectors(bo,xo);let a=this.direction.dot(So),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yo.subVectors(this.origin,e);let s=o*this.direction.dot(xo.crossVectors(yo,xo));if(s<0)return null;let c=o*this.direction.dot(bo.cross(yo));if(c<0||s+c>a)return null;let l=-o*yo.dot(So);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wo=class extends ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new ga(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},To=new Fi,Eo=new Co,Do=new io,Oo=new J,ko=new J,Ao=new J,jo=new J,Mo=new J,No=new J,Po=new J,Fo=new J,Io=class extends ca{constructor(e=new po,t=new wo){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){No.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Mo.fromBufferAttribute(s,e),a?No.addScaledVector(Mo,r):No.addScaledVector(Mo.sub(t),r))}t.add(No)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(i),Eo.copy(e.ray).recast(e.near),!(Do.containsPoint(Eo.origin)===!1&&(Eo.intersectSphere(Do,Oo)===null||Eo.origin.distanceToSquared(Oo)>(e.far-e.near)**2))&&(To.copy(i).invert(),Eo.copy(e.ray).applyMatrix4(To),!(n.boundingBox!==null&&Eo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Eo)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ro(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ro(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ro(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ro(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function Lo(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Fo.copy(s),Fo.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Fo);return l<n.near||l>n.far?null:{distance:l,point:Fo.clone(),object:e}}function Ro(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ko),e.getVertexPosition(c,Ao),e.getVertexPosition(l,jo);let u=Lo(e,t,n,r,ko,Ao,jo,Po);if(u){let e=new J;Ma.getBarycoord(Po,ko,Ao,jo,e),i&&(u.uv=Ma.getInterpolatedAttribute(i,s,c,l,e,new q)),a&&(u.uv1=Ma.getInterpolatedAttribute(a,s,c,l,e,new q)),o&&(u.normal=Ma.getInterpolatedAttribute(o,s,c,l,e,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new J,materialIndex:0};Ma.getNormal(ko,Ao,jo,t.normal),u.face=t,u.barycoord=e}return u}var zo=class extends ki{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Sn,l=Sn,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bo=new J,Vo=new J,Ho=new Y,Uo=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Bo.subVectors(n,t).cross(Vo.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Bo),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ho.getNormalMatrix(e),r=this.coplanarPoint(Bo).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wo=new io,Go=new q(.5,.5),Ko=new J,qo=class{constructor(e=new Uo,t=new Uo,n=new Uo,r=new Uo,i=new Uo,a=new Uo){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qr,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],v=i[12],y=i[13],b=i[14],x=i[15];if(r[0].setComponents(c-a,f-l,g-p,x-v).normalize(),r[1].setComponents(c+a,f+l,g+p,x+v).normalize(),r[2].setComponents(c+o,f+u,g+m,x+y).normalize(),r[3].setComponents(c-o,f-u,g-m,x-y).normalize(),n)r[4].setComponents(s,d,h,b).normalize(),r[5].setComponents(c-s,f-d,g-h,x-b).normalize();else if(r[4].setComponents(c-s,f-d,g-h,x-b).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,x+b).normalize();else if(t===2001)r[5].setComponents(s,d,h,b).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wo)}intersectsSprite(e){return Wo.center.set(0,0,0),Wo.radius=.7071067811865476+Go.distanceTo(e.center),Wo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wo)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ko.x=r.normal.x>0?e.max.x:e.min.x,Ko.y=r.normal.y>0?e.max.y:e.min.y,Ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Jo=class extends ho{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new ga(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Yo=new J,Xo=new J,Zo=new Fi,Qo=new Co,$o=new io,es=new J,ts=new J,ns=class extends ca{constructor(e=new po,t=new Jo){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Yo.fromBufferAttribute(t,e-1),Xo.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Yo.distanceTo(Xo);e.setAttribute(`lineDistance`,new eo(n,1))}else W(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),$o.radius+=i,e.ray.intersectsSphere($o)===!1)return;Zo.copy(r).invert(),Qo.copy(e.ray).applyMatrix4(Zo);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=rs(this,e,Qo,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=rs(this,e,Qo,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=rs(this,e,Qo,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=rs(this,e,Qo,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function rs(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Yo.fromBufferAttribute(s,i),Xo.fromBufferAttribute(s,a),n.distanceSqToSegment(Yo,Xo,es,ts)>r)return;es.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(es);if(!(c<t.near||c>t.far))return{distance:c,point:ts.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var is=new J,as=new J,os=class extends ns{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)is.fromBufferAttribute(t,e),as.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+is.distanceTo(as);e.setAttribute(`lineDistance`,new eo(n,1))}else W(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ss=class extends ki{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cs=class extends ki{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ls=class extends ki{constructor(e,t,n=Nn,r,i,a,o=Sn,s=Sn,c,l=Wn,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ti(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},us=class extends ls{constructor(e,t=Nn,n=301,r,i,a=Sn,o=Sn,s,c=Wn){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ds=class extends ki{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fs=class e extends po{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new eo(c,3)),this.setAttribute(`normal`,new eo(l,3)),this.setAttribute(`uv`,new eo(u,2));function p(e,t,n,r,i,a,p,m,h,g,v){let y=a/h,b=p/g,x=a/2,S=p/2,C=m/2,w=h+1,T=g+1,E=0,D=0,O=new J;for(let a=0;a<T;a++){let o=a*b-S;for(let s=0;s<w;s++)O[e]=(s*y-x)*r,O[t]=o*i,O[n]=C,c.push(O.x,O.y,O.z),O[e]=0,O[t]=0,O[n]=m>0?1:-1,l.push(O.x,O.y,O.z),u.push(s/h),u.push(1-a/g),E+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+w*e,r=d+t+w*(e+1),i=d+(t+1)+w*(e+1),a=d+(t+1)+w*e;s.push(n,r,a),s.push(r,i,a),D+=6}o.addGroup(f,D,v),f+=D,d+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ps=new J,ms=new J,hs=new J,gs=new Ma,_s=class extends po{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=10**4,r=Math.cos(oi*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=gs;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),gs.getNormal(hs),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,!(l[0]===l[1]||l[1]===l[2]||l[2]===l[0]))for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=gs[c[e]],o=gs[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(hs.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:hs.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];ps.fromBufferAttribute(a,t),ms.fromBufferAttribute(a,n),d.push(ps.x,ps.y,ps.z),d.push(ms.x,ms.y,ms.z)}this.setAttribute(`position`,new eo(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},vs=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){W(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new q:new J);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new J,r=[],i=[],a=[],o=new J,s=new Fi;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new J)}i[0]=new J,a[0]=new J;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(K(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(K(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ys=class extends vs{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new q){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bs=class extends ys{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function xs(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ss=new J,Cs=new J,ws=new xs,Ts=new xs,Es=new xs,Ds=class extends vs{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new J){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Cs.subVectors(r[0],r[1]).add(r[0]),c=Cs);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ss.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ss),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ws.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ts.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Es.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ws.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ts.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Es.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ws.calc(s),Ts.calc(s),Es.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new J().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Os(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ks(e,t){let n=1-e;return n*n*t}function As(e,t){return 2*(1-e)*e*t}function js(e,t){return e*e*t}function Ms(e,t,n,r){return ks(e,t)+As(e,n)+js(e,r)}function Ns(e,t){let n=1-e;return n*n*n*t}function Ps(e,t){let n=1-e;return 3*n*n*e*t}function Fs(e,t){return 3*(1-e)*e*e*t}function Is(e,t){return e*e*e*t}function Ls(e,t,n,r,i){return Ns(e,t)+Ps(e,n)+Fs(e,r)+Is(e,i)}var Rs=class extends vs{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ls(e,r.x,i.x,a.x,o.x),Ls(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zs=class extends vs{constructor(e=new J,t=new J,n=new J,r=new J){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ls(e,r.x,i.x,a.x,o.x),Ls(e,r.y,i.y,a.y,o.y),Ls(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bs=class extends vs{constructor(e=new q,t=new q){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vs=class extends vs{constructor(e=new J,t=new J){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new J){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hs=class extends vs{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ms(e,r.x,i.x,a.x),Ms(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Us=class extends vs{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ms(e,r.x,i.x,a.x),Ms(e,r.y,i.y,a.y),Ms(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ws=class extends vs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new q){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Os(o,s.x,c.x,l.x,u.x),Os(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this}},Gs=Object.freeze({__proto__:null,ArcCurve:bs,CatmullRomCurve3:Ds,CubicBezierCurve:Rs,CubicBezierCurve3:zs,EllipseCurve:ys,LineCurve:Bs,LineCurve3:Vs,QuadraticBezierCurve:Hs,QuadraticBezierCurve3:Us,SplineCurve:Ws}),Ks=class extends vs{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Gs[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Gs[n.type]().fromJSON(n))}return this}},qs=class extends Ks{constructor(e){super(),this.type=`Path`,this.currentPoint=new q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Bs(this.currentPoint.clone(),new q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Hs(this.currentPoint.clone(),new q(e,t),new q(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Rs(this.currentPoint.clone(),new q(e,t),new q(n,r),new q(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ws([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ys(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Js=class extends qs{constructor(e){super(e),this.uuid=ci(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new qs().fromJSON(n))}return this}};function Ys(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Xs(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=rc(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Qs(a,o,n,s,c,l,0),o}function Xs(e,t,n,r,i){let a;if(i===Dc(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=wc(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=wc(i/r|0,e[i],e[i+1],a);return a&&gc(a,a.next)&&(Tc(a),a=a.next),a}function Zs(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(gc(n,n.next)||hc(n.prev,n,n.next)===0)){if(Tc(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Qs(e,t,n,r,i,a,o){if(!e)return;!o&&a&&cc(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ec(e,r,i,a):$s(e)){t.push(c.i,e.i,l.i),Tc(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=tc(Zs(e),t),Qs(e,t,n,r,i,a,2)):o===2&&nc(e,t,n,r,i,a):Qs(Zs(e),t,n,r,i,a,1);break}}}function $s(e){let t=e.prev,n=e,r=e.next;if(hc(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&pc(i,s,a,c,o,l,m.x,m.y)&&hc(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ec(e,t,n,r){let i=e.prev,a=e,o=e.next;if(hc(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),v=uc(p,m,t,n,r),y=uc(h,g,t,n,r),b=e.prevZ,x=e.nextZ;for(;b&&b.z>=v&&x&&x.z<=y;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&pc(s,u,c,d,l,f,b.x,b.y)&&hc(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=p&&x.x<=h&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&pc(s,u,c,d,l,f,x.x,x.y)&&hc(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&pc(s,u,c,d,l,f,b.x,b.y)&&hc(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=y;){if(x.x>=p&&x.x<=h&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&pc(s,u,c,d,l,f,x.x,x.y)&&hc(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tc(e,t){let n=e;do{let r=n.prev,i=n.next.next;!gc(r,i)&&_c(r,n,n.next,i)&&xc(r,i)&&xc(i,r)&&(t.push(r.i,n.i,i.i),Tc(n),Tc(n.next),n=e=i),n=n.next}while(n!==e);return Zs(n)}function nc(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&mc(o,e)){let s=Cc(o,e);o=Zs(o,o.next),s=Zs(s,s.next),Qs(o,t,n,r,i,a,0),Qs(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function rc(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Xs(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(dc(o))}i.sort(ic);for(let e=0;e<i.length;e++)n=ac(i[e],n);return n}function ic(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ac(e,t){let n=oc(e,t);if(!n)return t;let r=Cc(n,e);return Zs(r,r.next),Zs(n,n.next)}function oc(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(gc(e,n))return n;do{if(gc(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&fc(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);xc(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&sc(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function sc(e,t){return hc(e.prev,e,t.prev)<0&&hc(t.next,e,e.next)<0}function cc(e,t,n,r){let i=e;do i.z===0&&(i.z=uc(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,lc(i)}function lc(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function uc(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function dc(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function fc(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function pc(e,t,n,r,i,a,o,s){return!(e===o&&t===s)&&fc(e,t,n,r,i,a,o,s)}function mc(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!bc(e,t)&&(xc(e,t)&&xc(t,e)&&Sc(e,t)&&(hc(e.prev,e,t.prev)||hc(e,t.prev,t))||gc(e,t)&&hc(e.prev,e,e.next)>0&&hc(t.prev,t,t.next)>0)}function hc(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function gc(e,t){return e.x===t.x&&e.y===t.y}function _c(e,t,n,r){let i=yc(hc(e,t,n)),a=yc(hc(e,t,r)),o=yc(hc(n,r,e)),s=yc(hc(n,r,t));return!!(i!==a&&o!==s||i===0&&vc(e,n,t)||a===0&&vc(e,r,t)||o===0&&vc(n,e,r)||s===0&&vc(n,t,r))}function vc(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function yc(e){return e>0?1:e<0?-1:0}function bc(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&_c(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function xc(e,t){return hc(e.prev,e,e.next)<0?hc(e,t,e.next)>=0&&hc(e,e.prev,t)>=0:hc(e,t,e.prev)<0||hc(e,e.next,t)<0}function Sc(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Cc(e,t){let n=Ec(e.i,e.x,e.y),r=Ec(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function wc(e,t,n,r){let i=Ec(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Tc(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ec(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dc(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Oc=class{static triangulate(e,t,n=2){return Ys(e,t,n)}},kc=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ac(e),jc(n,e);let a=e.length;t.forEach(Ac);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,jc(n,t[e]);let o=Oc.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ac(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function jc(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Mc=class e extends po{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new eo(p,3)),this.setAttribute(`normal`,new eo(m,3)),this.setAttribute(`uv`,new eo(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Nc=class e extends po{constructor(e=new Js([new q(0,.5),new q(-.5,-.5),new q(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new eo(r,3)),this.setAttribute(`normal`,new eo(i,3)),this.setAttribute(`uv`,new eo(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;kc.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];kc.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=kc.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Pc(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Pc(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function Fc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Lc(i))i.isRenderTargetTexture?(W(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(Lc(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Ic(e){let t={};for(let n=0;n<e.length;n++){let r=Fc(e[n]);for(let e in r)t[e]=r[e]}return t}function Lc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Rc(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function zc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:X.workingColorSpace}var Bc={clone:Fc,merge:Ic},Vc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Uc=class extends ho{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vc,this.fragmentShader=Hc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fc(e.uniforms),this.uniformsGroups=Rc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new ga().setHex(r.value);break;case`v2`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ai().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Fi().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wc=class extends Uc{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Gc=class extends ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Br,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Kc=class extends ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qc(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var Jc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Yc=class extends Jc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lr,endingEnd:Lr}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rr:i=e,o=2*t-n;break;case zr:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Rr:a=e,s=2*n-t;break;case zr:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,v=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,y=(-1-f)*h+(1.5+f)*m+.5*p,b=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+v*a[c+e]+y*a[s+e]+b*a[u+e];return i}},Xc=class extends Jc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Zc=class extends Jc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Qc=class extends Jc{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],v=u[h+1],y=e*d+p*2,b=l[y],x=l[y+1],S=(n-t)/(r-t),C,w,T,E,D;for(let e=0;e<8;e++){C=S*S,w=C*S,T=1-S,E=T*T,D=E*T;let e=D*t+3*E*S*g+3*T*C*b+w*r-n;if(Math.abs(e)<1e-10)break;let i=3*E*(g-t)+6*T*S*(b-g)+3*C*(r-b);if(Math.abs(i)<1e-10)break;S-=e/i,S=Math.max(0,Math.min(1,S))}i[p]=D*o+3*E*S*v+3*T*C*x+w*m}return i}},$c=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=qc(t,this.TimeBufferType),this.values=qc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qc(e.times,Array),values:qc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Nr:t=this.InterpolantFactoryMethodDiscrete;break;case Pr:t=this.InterpolantFactoryMethodLinear;break;case Fr:t=this.InterpolantFactoryMethodSmooth;break;case Ir:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return W(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Pr;case this.InterpolantFactoryMethodSmooth:return Fr;case this.InterpolantFactoryMethodBezier:return Ir}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(G(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(G(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){G(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){G(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Yr(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){G(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fr,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};$c.prototype.ValueTypeName=``,$c.prototype.TimeBufferType=Float32Array,$c.prototype.ValueBufferType=Float32Array,$c.prototype.DefaultInterpolation=Pr;var el=class extends $c{constructor(e,t,n){super(e,t,n)}};el.prototype.ValueTypeName=`bool`,el.prototype.ValueBufferType=Array,el.prototype.DefaultInterpolation=Nr,el.prototype.InterpolantFactoryMethodLinear=void 0,el.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends $c{constructor(e,t,n,r){super(e,t,n,r)}};tl.prototype.ValueTypeName=`color`;var nl=class extends $c{constructor(e,t,n,r){super(e,t,n,r)}};nl.prototype.ValueTypeName=`number`;var rl=class extends Jc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)pi.slerpFlat(i,0,a,c-o,a,c,s);return i}},il=class extends $c{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new rl(this.times,this.values,this.getValueSize(),e)}};il.prototype.ValueTypeName=`quaternion`,il.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends $c{constructor(e,t,n){super(e,t,n)}};al.prototype.ValueTypeName=`string`,al.prototype.ValueBufferType=Array,al.prototype.DefaultInterpolation=Nr,al.prototype.InterpolantFactoryMethodLinear=void 0,al.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends $c{constructor(e,t,n,r){super(e,t,n,r)}};ol.prototype.ValueTypeName=`vector`;var sl=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},cl=class{constructor(e){this.manager=e===void 0?sl:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ll=new J,ul=new pi,dl=new J,fl=class extends ca{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Fi,this.projectionMatrix=new Fi,this.projectionMatrixInverse=new Fi,this.coordinateSystem=qr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ll,ul,dl),dl.x===1&&dl.y===1&&dl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,ul,dl.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ll,ul,dl),dl.x===1&&dl.y===1&&dl.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,ul,dl.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pl=new J,ml=new q,hl=new q,gl=class extends fl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=si*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(oi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return si*2*Math.atan(Math.tan(oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pl.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pl.x,pl.y).multiplyScalar(-e/pl.z),pl.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pl.x,pl.y).multiplyScalar(-e/pl.z)}getViewSize(e,t){return this.getViewBounds(e,ml,hl),t.subVectors(hl,ml)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(oi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_l=class extends fl{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vl=-90,yl=1,bl=class extends ca{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new gl(vl,yl,e,t);r.layers=this.layers,this.add(r);let i=new gl(vl,yl,e,t);i.layers=this.layers,this.add(i);let a=new gl(vl,yl,e,t);a.layers=this.layers,this.add(a);let o=new gl(vl,yl,e,t);o.layers=this.layers,this.add(o);let s=new gl(vl,yl,e,t);s.layers=this.layers,this.add(s);let c=new gl(vl,yl,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},xl=class extends gl{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Sl=`\\[\\]\\.:\\/`,Cl=RegExp(`[\\[\\]\\.:\\/]`,`g`),wl=`[^\\[\\]\\.:\\/]`,Tl=`[^`+Sl.replace(`\\.`,``)+`]`,El=`((?:WC+[\\/:])*)`.replace(`WC`,wl),Dl=`(WCOD+)?`.replace(`WCOD`,Tl),Ol=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,wl),kl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,wl),Al=RegExp(`^`+El+Dl+Ol+kl+`$`),jl=[`material`,`materials`,`bones`,`map`],Ml=class{constructor(e,t,n){let r=n||Nl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Cl,``)}static parseTrackName(e){let t=Al.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);jl.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){W(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){G(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){G(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){G(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){G(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){G(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;G(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nl.Composite=Ml,Nl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Nl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Nl.prototype.GetterByBindingType=[Nl.prototype._getValue_direct,Nl.prototype._getValue_array,Nl.prototype._getValue_arrayElement,Nl.prototype._getValue_toArray],Nl.prototype.SetterByBindingTypeAndVersioning=[[Nl.prototype._setValue_direct,Nl.prototype._setValue_direct_setNeedsUpdate,Nl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nl.prototype._setValue_array,Nl.prototype._setValue_array_setNeedsUpdate,Nl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nl.prototype._setValue_arrayElement,Nl.prototype._setValue_arrayElement_setNeedsUpdate,Nl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nl.prototype._setValue_fromArray,Nl.prototype._setValue_fromArray_setNeedsUpdate,Nl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};var Pl=class extends os{constructor(e=10,t=10,n=4473924,r=8947848){n=new ga(n),r=new ga(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new po;l.setAttribute(`position`,new eo(s,3)),l.setAttribute(`color`,new eo(c,3));let u=new Jo({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}dispose(){this.geometry.dispose(),this.material.dispose()}},Fl=class extends os{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new po;r.setAttribute(`position`,new eo(t,3)),r.setAttribute(`color`,new eo(n,3));let i=new Jo({vertexColors:!0,toneMapped:!1});super(r,i),this.type=`AxesHelper`}setColors(e,t,n){let r=new ga,i=this.geometry.attributes.color.array;return r.set(e),r.toArray(i,0),r.toArray(i,3),r.set(t),r.toArray(i,6),r.toArray(i,9),r.set(n),r.toArray(i,12),r.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function Il(e,t,n,r){let i=Ll(r);switch(n){case Vn:return e*t;case Kn:return e*t/i.components*i.byteLength;case qn:return e*t/i.components*i.byteLength;case Jn:return e*t*2/i.components*i.byteLength;case Yn:return e*t*2/i.components*i.byteLength;case Hn:return e*t*3/i.components*i.byteLength;case Un:return e*t*4/i.components*i.byteLength;case Xn:return e*t*4/i.components*i.byteLength;case Zn:case Qn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $n:case er:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nr:case ir:return Math.max(e,16)*Math.max(t,8)/4;case tr:case rr:return Math.max(e,8)*Math.max(t,8)/2;case ar:case or:case cr:case lr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case sr:case ur:case dr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pr:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case mr:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case hr:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case gr:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _r:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case vr:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case yr:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case br:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xr:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Sr:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Cr:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case wr:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Tr:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Er:case Dr:case Or:return Math.ceil(e/4)*Math.ceil(t/4)*16;case kr:case Ar:return Math.ceil(e/4)*Math.ceil(t/4)*8;case jr:case Mr:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ll(e){switch(e){case On:case kn:return{byteLength:1,components:1};case jn:case An:case Fn:return{byteLength:2,components:1};case In:case Ln:return{byteLength:2,components:4};case Nn:case Mn:case Pn:return{byteLength:4,components:1};case zn:case Bn:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?W(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Rl(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function zl(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new ga(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Y}},envmap:{envMap:{value:null},envMapRotation:{value:new Y},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Y}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Y}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Y},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Y},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Y},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Y}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Y}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Y}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ga(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new ga(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0},uvTransform:{value:new Y}},sprite:{diffuse:{value:new ga(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}}},Bl={basic:{uniforms:Ic([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Ic([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new ga(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Ic([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new ga(0)},specular:{value:new ga(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Ic([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new ga(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:Ic([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new ga(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:Ic([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:Ic([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Ic([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Ic([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Ic([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:Ic([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new Y},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Y}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:Ic([Q.common,Q.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:Ic([Q.lights,Q.fog,{color:{value:new ga(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};Bl.physical={uniforms:Ic([Bl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Y},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Y},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Y},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Y},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Y},sheen:{value:0},sheenColor:{value:new ga(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Y},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Y},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Y},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Y},attenuationDistance:{value:0},attenuationColor:{value:new ga(0)},specularColor:{value:new ga(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Y},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Y},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Y}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var Vl={r:0,b:0,g:0},Hl=new Fi,Ul=new Y;Ul.set(-1,0,0,0,1,0,0,0,1);function Wl(e,t,n,r,i,a){let o=new ga(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Io(new fs(1,1,1),new Uc({name:`BackgroundCubeMaterial`,uniforms:Fc(Bl.backgroundCube.uniforms),vertexShader:Bl.backgroundCube.vertexShader,fragmentShader:Bl.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hl.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ul),l.material.toneMapped=X.getTransfer(i.colorSpace)!==Wr,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Io(new Mc(2,2),new Uc({name:`BackgroundMaterial`,uniforms:Fc(Bl.background.uniforms),vertexShader:Bl.background.vertexShader,fragmentShader:Bl.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=X.getTransfer(i.colorSpace)!==Wr,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Vl,zc(e)),n.buffers.color.setClear(Vl.r,Vl.g,Vl.b,r,a)}function v(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:v}}function Gl(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,x(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){v(e,0)}function v(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function y(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function b(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function x(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)v(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)b(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)v(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)b(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}y()}function S(){E();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function C(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function w(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function T(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function E(){D(),o=!0,a!==i&&(a=i,l(a.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:E,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:w,initAttributes:h,enableAttribute:g,disableUnusedAttributes:y}}function Kl(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ql(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(W(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&W(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:C}}function Jl(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Uo,s=new Y,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Yl=4,Xl=[.125,.215,.35,.446,.526,.582],Zl=20,Ql=256,$l=new _l,eu=new ga,tu=null,nu=0,ru=0,iu=!1,au=new J,ou=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=au}=i;tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,ru),this._renderer.xr.enabled=iu,e.scissorTest=!1,lu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Fn,format:Un,colorSpace:Hr,depthBuffer:!1},r=cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=su(r)),this._blurMaterial=du(r,e,t),this._ggxMaterial=uu(r,e,t)}return r}_compileMaterial(e){let t=new Io(new po,e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,n,r,i){let a=new gl(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(eu),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Io(new fs,new wo({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(eu),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;lu(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;lu(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,$l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Yl?n-d+Yl:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,lu(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,$l),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,lu(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,$l)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&G(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Zl-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Zl;m>Zl&&W(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zl}`);let h=[],g=0;for(let e=0;e<Zl;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=f,u.mipInt.value=v-n;let y=this._sizeLods[r];lu(t,3*y*(r>v-Yl?r-v+Yl:0),4*(this._cubeSize-y),3*y,2*y),s.setRenderTarget(t),s.render(l,$l)}};function su(e){let t=[],n=[],r=[],i=e,a=e-Yl+1+Xl.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Yl?s=Xl[o-e+Yl-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new po;h.setAttribute(`position`,new Za(f,3)),h.setAttribute(`uv`,new Za(p,2)),h.setAttribute(`faceIndex`,new Za(m,1)),r.push(new Io(h,null)),i>Yl&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function cu(e,t,n){let r=new Mi(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function lu(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function uu(e,t,n){return new Uc({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ql,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function du(e,t,n){let r=new Float32Array(Zl),i=new J(0,1,0);return new Uc({name:`SphericalGaussianBlur`,defines:{n:Zl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function fu(){return new Uc({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function pu(){return new Uc({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var hu=class extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ss(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fs(5,5,5),i=new Uc({name:`CubemapFromEquirect`,uniforms:Fc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Io(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Tn),new bl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function gu(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new hu(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ou(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ou(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function _u(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ti(`WebGLRenderer: `+e+` extension not supported.`),t}}}function vu(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?$a:Qa)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function yu(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function bu(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:G(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function xu(e,t,n){let r=new WeakMap,i=new Ai;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Ni(h,p,m,u);g.type=Pn,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new q(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Su(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Cu={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function wu(e,t,n,r,i,a){let o=new Mi(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new ls(t,n):void 0}),s=new Mi(t,n,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),c=new po;c.setAttribute(`position`,new eo([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new eo([0,2,0,0,2,0],2));let l=new Wc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Io(c,l),d=new _l(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&v.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},X.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=Cu[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Tu=new ki,Eu=new ls(1,1),Du=new Ni,Ou=new Pi,ku=new ss,Au=[],ju=[],Mu=new Float32Array(16),Nu=new Float32Array(9),Pu=new Float32Array(4);function Fu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Au[i];if(a===void 0&&(a=new Float32Array(i),Au[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Iu(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Lu(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ru(e,t){let n=ju[t];n===void 0&&(n=new Int32Array(t),ju[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function zu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Bu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Iu(n,t))return;e.uniform2fv(this.addr,t),Lu(n,t)}}function Vu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Iu(n,t))return;e.uniform3fv(this.addr,t),Lu(n,t)}}function Hu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Iu(n,t))return;e.uniform4fv(this.addr,t),Lu(n,t)}}function Uu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Iu(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Lu(n,t)}else{if(Iu(n,r))return;Pu.set(r),e.uniformMatrix2fv(this.addr,!1,Pu),Lu(n,r)}}function Wu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Iu(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Lu(n,t)}else{if(Iu(n,r))return;Nu.set(r),e.uniformMatrix3fv(this.addr,!1,Nu),Lu(n,r)}}function Gu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Iu(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Lu(n,t)}else{if(Iu(n,r))return;Mu.set(r),e.uniformMatrix4fv(this.addr,!1,Mu),Lu(n,r)}}function Ku(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function qu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Iu(n,t))return;e.uniform2iv(this.addr,t),Lu(n,t)}}function Ju(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Iu(n,t))return;e.uniform3iv(this.addr,t),Lu(n,t)}}function Yu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Iu(n,t))return;e.uniform4iv(this.addr,t),Lu(n,t)}}function Xu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Zu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Iu(n,t))return;e.uniform2uiv(this.addr,t),Lu(n,t)}}function Qu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Iu(n,t))return;e.uniform3uiv(this.addr,t),Lu(n,t)}}function $u(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Iu(n,t))return;e.uniform4uiv(this.addr,t),Lu(n,t)}}function ed(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Eu.compareFunction=n.isReversedDepthBuffer()?518:515,a=Eu):a=Tu,n.setTexture2D(t||a,i)}function td(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ou,i)}function nd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ku,i)}function rd(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Du,i)}function id(e){switch(e){case 5126:return zu;case 35664:return Bu;case 35665:return Vu;case 35666:return Hu;case 35674:return Uu;case 35675:return Wu;case 35676:return Gu;case 5124:case 35670:return Ku;case 35667:case 35671:return qu;case 35668:case 35672:return Ju;case 35669:case 35673:return Yu;case 5125:return Xu;case 36294:return Zu;case 36295:return Qu;case 36296:return $u;case 35678:case 36198:case 36298:case 36306:case 35682:return ed;case 35679:case 36299:case 36307:return td;case 35680:case 36300:case 36308:case 36293:return nd;case 36289:case 36303:case 36311:case 36292:return rd}}function ad(e,t){e.uniform1fv(this.addr,t)}function od(e,t){let n=Fu(t,this.size,2);e.uniform2fv(this.addr,n)}function sd(e,t){let n=Fu(t,this.size,3);e.uniform3fv(this.addr,n)}function cd(e,t){let n=Fu(t,this.size,4);e.uniform4fv(this.addr,n)}function ld(e,t){let n=Fu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ud(e,t){let n=Fu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function dd(e,t){let n=Fu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function fd(e,t){e.uniform1iv(this.addr,t)}function pd(e,t){e.uniform2iv(this.addr,t)}function md(e,t){e.uniform3iv(this.addr,t)}function hd(e,t){e.uniform4iv(this.addr,t)}function gd(e,t){e.uniform1uiv(this.addr,t)}function _d(e,t){e.uniform2uiv(this.addr,t)}function vd(e,t){e.uniform3uiv(this.addr,t)}function yd(e,t){e.uniform4uiv(this.addr,t)}function bd(e,t,n){let r=this.cache,i=t.length,a=Ru(n,i);Iu(r,a)||(e.uniform1iv(this.addr,a),Lu(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Eu:Tu;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function xd(e,t,n){let r=this.cache,i=t.length,a=Ru(n,i);Iu(r,a)||(e.uniform1iv(this.addr,a),Lu(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ou,a[e])}function Sd(e,t,n){let r=this.cache,i=t.length,a=Ru(n,i);Iu(r,a)||(e.uniform1iv(this.addr,a),Lu(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ku,a[e])}function Cd(e,t,n){let r=this.cache,i=t.length,a=Ru(n,i);Iu(r,a)||(e.uniform1iv(this.addr,a),Lu(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Du,a[e])}function wd(e){switch(e){case 5126:return ad;case 35664:return od;case 35665:return sd;case 35666:return cd;case 35674:return ld;case 35675:return ud;case 35676:return dd;case 5124:case 35670:return fd;case 35667:case 35671:return pd;case 35668:case 35672:return md;case 35669:case 35673:return hd;case 5125:return gd;case 36294:return _d;case 36295:return vd;case 36296:return yd;case 35678:case 36198:case 36298:case 36306:case 35682:return bd;case 35679:case 36299:case 36307:return xd;case 35680:case 36300:case 36308:case 36293:return Sd;case 36289:case 36303:case 36311:case 36292:return Cd}}var Td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=id(t.type)}},Ed=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wd(t.type)}},Dd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Od=/(\w+)(\])?(\[|\.)?/g;function kd(e,t){e.seq.push(t),e.map[t.id]=t}function Ad(e,t,n){let r=e.name,i=r.length;for(Od.lastIndex=0;;){let a=Od.exec(r),o=Od.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){kd(n,l===void 0?new Td(s,e,t):new Ed(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Dd(s),kd(n,e)),n=e}}}var jd=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ad(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Md(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Nd=37297,Pd=0;function Fd(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Id=new Y;function Ld(e){X._getMatrix(Id,X.workingColorSpace,e);let t=`mat3( ${Id.elements.map(e=>e.toFixed(4))} )`;switch(X.getTransfer(e)){case Ur:return[t,`LinearTransferOETF`];case Wr:return[t,`sRGBTransferOETF`];default:return W(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Rd(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Fd(e.getShaderSource(t),r)}else return i}function zd(e,t){let n=Ld(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Bd={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Vd(e,t){let n=Bd[t];return n===void 0?(W(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Hd=new J;function Ud(){return X.getLuminanceCoefficients(Hd),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Hd.x.toFixed(4)}, ${Hd.y.toFixed(4)}, ${Hd.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Wd(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(qd).join(`
`)}function Gd(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Kd(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function qd(e){return e!==``}function Jd(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(e){return e.replace(Xd,$d)}var Qd=new Map;function $d(e,t){let n=Z[t];if(n===void 0){let e=Qd.get(t);if(e!==void 0)n=Z[e],W(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Zd(n)}var ef=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tf(e){return e.replace(ef,nf)}function nf(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function rf(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var af={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function of(e){return af[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var sf={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function cf(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:sf[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var lf={302:`ENVMAP_MODE_REFRACTION`};function uf(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:lf[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var df={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ff(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:df[e.combine]||`ENVMAP_BLENDING_NONE`}function pf(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function mf(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=of(n),l=cf(n),u=uf(n),d=ff(n),f=pf(n),p=Wd(n),m=Gd(a),h=i.createProgram(),g,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(qd).join(`
`),g.length>0&&(g+=`
`),v=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(qd).join(`
`),v.length>0&&(v+=`
`)):(g=[rf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(qd).join(`
`),v=[rf(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:Vd(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,zd(`linearToOutputTexel`,n.outputColorSpace),Ud(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(qd).join(`
`)),o=Zd(o),o=Jd(o,n),o=Yd(o,n),s=Zd(s),s=Jd(s,n),s=Yd(s,n),o=tf(o),s=tf(s),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,v=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+g+o,x=y+v+s,S=Md(i,i.VERTEX_SHADER,b),C=Md(i,i.FRAGMENT_SHADER,x);i.attachShader(h,S),i.attachShader(h,C),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(S)||``,a=i.getShaderInfoLog(C)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,S,C);else{let e=Rd(i,S,`vertex`),n=Rd(i,C,`fragment`);G(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):W(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new jd(i,h),E=Kd(i,h)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(h,Nd)),D},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Pd++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=C,this}var hf=0,gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _f(e),t.set(e,n)),n}},_f=class{constructor(e){this.id=hf++,this.code=e,this.usedTimes=0}};function vf(e){return e===1030||e===37490||e===36285}function yf(e,t,n,r,i,a){let o=new Ki,s=new gf,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let v=u.fog,y=h.geometry,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,x=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,S=t.get(i.envMap||b,x),C=S&&S.mapping===306?S.image.height:null,w=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&W(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=T===void 0?0:T.length,D=0;y.morphAttributes.position!==void 0&&(D=1),y.morphAttributes.normal!==void 0&&(D=2),y.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=Bl[w];O=e.vertexShader,k=e.fragmentShader}else{O=i.vertexShader,k=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),A=e.id,j=t.id}let M=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,te=!!S,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,L=!!i.displacementMap,R=!!i.emissiveMap,oe=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.dispersion>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=ce&&!!i.anisotropyMap,he=le&&!!i.clearcoatMap,ge=le&&!!i.clearcoatNormalMap,_e=le&&!!i.clearcoatRoughnessMap,ve=de&&!!i.iridescenceMap,ye=de&&!!i.iridescenceThicknessMap,z=fe&&!!i.sheenColorMap,be=fe&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,B=!!i.specularIntensityMap,Ce=pe&&!!i.transmissionMap,V=pe&&!!i.thicknessMap,H=!!i.gradientMap,we=!!i.alphaMap,Te=i.alphaTest>0,Ee=!!i.alphaHash,De=!!i.extensions,Oe=0;i.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Oe=e.toneMapping);let ke={shaderID:w,shaderType:i.type,shaderName:i.name,vertexShader:O,fragmentShader:k,defines:i.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:X.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:te,envMapMode:te&&S.mapping,envMapCubeUVHeight:C,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:L,emissiveMap:R,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&vf(i.normalMap.format),metalnessMap:oe,roughnessMap:se,anisotropy:ce,anisotropyMap:me,clearcoat:le,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,dispersion:ue,iridescence:de,iridescenceMap:ve,iridescenceThicknessMap:ye,sheen:fe,sheenColorMap:z,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:B,transmission:pe,transmissionMap:Ce,thicknessMap:V,gradientMap:H,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:Ee,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:L&&m(i.displacementMap.channel),emissiveMapUv:R&&m(i.emissiveMap.channel),metalnessMapUv:oe&&m(i.metalnessMap.channel),roughnessMapUv:se&&m(i.roughnessMap.channel),anisotropyMapUv:me&&m(i.anisotropyMap.channel),clearcoatMapUv:he&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:z&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(i.sheenRoughnessMap.channel),specularMapUv:xe&&m(i.specularMap.channel),specularColorMapUv:Se&&m(i.specularColorMap.channel),specularIntensityMapUv:B&&m(i.specularIntensityMap.channel),transmissionMapUv:Ce&&m(i.transmissionMap.channel),thicknessMapUv:V&&m(i.thicknessMap.channel),alphaMapUv:we&&m(i.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(ae||ce),vertexNormals:!!y.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!y.attributes.uv&&(F||we),fog:!!v,useFog:i.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||y.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&X.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:R&&i.emissiveMap.isVideoTexture===!0&&X.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:De&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(De&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function b(e){let t=p[e.type],n;if(t){let e=Bl[t];n=Bc.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=u.get(n);return r===void 0?(r=new mf(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function C(e){s.remove(e)}function w(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:w}}function bf(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function xf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Sf(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Cf(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||xf),r.length>1&&r.sort(t||Sf),i.length>1&&i.sort(t||Sf),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function wf(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Cf,e.set(t,[i])):n>=r.length?(i=new Cf,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Tf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new J,color:new ga};break;case`SpotLight`:n={position:new J,direction:new J,color:new ga,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new ga,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new ga,groundColor:new ga};break;case`RectAreaLight`:n={color:new ga,position:new J,halfWidth:new J,halfHeight:new J};break}return e[t.id]=n,n}}}function Ef(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Df=0;function Of(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function kf(e){let t=new Tf,n=Ef(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new Fi,o=new Fi;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,v=0,y=0;i.sort(Of);for(let e=0,b=i.length;e<b;e++){let b=i[e],x=b.color,S=b.intensity,C=b.distance,w=null;if(b.shadow&&b.shadow.map&&(w=b.shadow.map.texture.format===1030?b.shadow.map.texture:b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)a+=x.r*S,o+=x.g*S,s+=x.b*S;else if(b.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(b.sh.coefficients[e],S);y++}else if(b.isDirectionalLight){let e=t.get(b);if(e.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let e=b.shadow,t=n.get(b);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=w,r.directionalShadowMatrix[c]=b.shadow.matrix,p++}r.directional[c]=e,c++}else if(b.isSpotLight){let e=t.get(b);e.position.setFromMatrixPosition(b.matrixWorld),e.color.copy(x).multiplyScalar(S),e.distance=C,e.coneCos=Math.cos(b.angle),e.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),e.decay=b.decay,r.spot[u]=e;let i=b.shadow;if(b.map&&(r.spotLightMap[g]=b.map,g++,i.updateMatrices(b),b.castShadow&&v++),r.spotLightMatrix[u]=i.matrix,b.castShadow){let e=n.get(b);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=w,h++}u++}else if(b.isRectAreaLight){let e=t.get(b);e.color.copy(x).multiplyScalar(S),e.halfWidth.set(b.width*.5,0,0),e.halfHeight.set(0,b.height*.5,0),r.rectArea[d]=e,d++}else if(b.isPointLight){let e=t.get(b);if(e.color.copy(b.color).multiplyScalar(b.intensity),e.distance=b.distance,e.decay=b.decay,b.castShadow){let e=b.shadow,t=n.get(b);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=w,r.pointShadowMatrix[l]=b.shadow.matrix,m++}r.point[l]=e,l++}else if(b.isHemisphereLight){let e=t.get(b);e.skyColor.copy(b.color).multiplyScalar(S),e.groundColor.copy(b.groundColor).multiplyScalar(S),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let b=r.hash;(b.directionalLength!==c||b.pointLength!==l||b.spotLength!==u||b.rectAreaLength!==d||b.hemiLength!==f||b.numDirectionalShadows!==p||b.numPointShadows!==m||b.numSpotShadows!==h||b.numSpotMaps!==g||b.numLightProbes!==y)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-v,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=v,r.numLightProbes=y,b.directionalLength=c,b.pointLength=l,b.spotLength=u,b.rectAreaLength=d,b.hemiLength=f,b.numDirectionalShadows=p,b.numPointShadows=m,b.numSpotShadows=h,b.numSpotMaps=g,b.numLightProbes=y,r.version=Df++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Af(e){let t=new kf(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function jf(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Af(e),t.set(n,[a])):r>=i.length?(a=new Af(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Mf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Pf=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Ff=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],If=new Fi,Lf=new J,Rf=new J;function zf(e,t,n){let r=new qo,i=new q,a=new q,o=new Ai,s=new Gc,c=new Kc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Uc({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:Mf,fragmentShader:Nf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new po;m.setAttribute(`position`,new Za(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Io(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(W(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=v!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){W(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){W(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Mi(i.x,i.y,{format:Jn,type:Fn,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new ls(i.x,i.y,Pn),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Wn,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Sn,d.map.depthTexture.magFilter=Sn}else l.isPointLight?(d.map=new hu(i.x),d.map.depthTexture=new us(i.x,Nn)):(d.map=new Mi(i.x,i.y),d.map.depthTexture=new ls(i.x,i.y,Nn)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Wn,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Tn,d.map.depthTexture.magFilter=Tn):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Sn,d.map.depthTexture.magFilter=Sn);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Lf.setFromMatrixPosition(l.matrixWorld),e.position.copy(Lf),Rf.copy(e.position),Rf.add(Pf[t]),e.up.copy(Ff[t]),e.lookAt(Rf),e.updateMatrixWorld(),n.makeTranslation(-Lf.x,-Lf.y,-Lf.z),If.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(If,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),x(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&y(d,s),d.needsUpdate=!1}v=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function y(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Mi(i.x,i.y,{format:Jn,type:Fn})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Bf(e,t){function n(){let t=!1,n=new Ai,r=null,i=new Ai(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?oe(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ri[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?oe(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new ga(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Ai().fromArray(ne),ae=new Ai().fromArray(re);function L(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let R={};R[e.TEXTURE_2D]=L(e.TEXTURE_2D,e.TEXTURE_2D,1),R[e.TEXTURE_CUBE_MAP]=L(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[e.TEXTURE_2D_ARRAY]=L(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),R[e.TEXTURE_3D]=L(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),oe(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),oe(e.CULL_FACE),pe(0);function oe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(se(e.BLEND),g=!1);return}if(g===!1&&(oe(e.BLEND),g=!0),t!==5){if(t!==v||u!==D){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:G(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:G(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:G(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:G(`WebGLState: Invalid blending: `,t);break}b=null,x=null,C=null,w=null,T.set(0,0,0),E=0,v=t,D=u}return}a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(de[n],de[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),v=t,D=!1}function me(t,n){t.side===2?se(e.CULL_FACE):oe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function ge(t){t===0?se(e.CULL_FACE):(oe(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function _e(t){t!==A&&(N&&e.lineWidth(t),A=t)}function ve(t,n,r){t?(oe(e.POLYGON_OFFSET_FILL),(j!==n||M!==r)&&(j=n,M=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ye(t){t?oe(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function z(t){t===void 0&&(t=e.TEXTURE0+ee-1),I!==t&&(e.activeTexture(t),I=t)}function be(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+ee-1:I);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||R[t]),i.type=t,i.texture=n)}function xe(){let t=te[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function B(){try{e.compressedTexImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function V(){try{e.texSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function we(){try{e.compressedTexSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Te(){try{e.texStorage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ee(){try{e.texStorage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function De(){try{e.texImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Oe(){try{e.texImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ae(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function je(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Me(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new ga(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,M=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:oe,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:z,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:B,texImage2D:De,texImage3D:Oe,pixelStorei:Ae,getParameter:ke,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:Te,texStorage3D:Ee,texSubImage2D:Ce,texSubImage3D:V,compressedTexSubImage2D:H,compressedTexSubImage3D:we,scissor:je,viewport:Me,reset:Fe}}function Vf(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new q,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Xr(`canvas`)}function g(e,t,n){let r=1,i=Se(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),W(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&W(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function v(e){return e.generateMipmaps}function y(t){e.generateMipmap(t)}function b(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];W(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||W(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ur:X.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function S(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,W(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function C(e,t){return v(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),E(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),O(t)}function E(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&D(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function D(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function O(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let k=0;function A(){k=0}function j(){return k}function M(e){k=e}function ee(){let e=k;return e>=i.maxTextures&&W(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),k+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&be(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)W(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)W(`WebGLRenderer: Texture marked for update but image is incomplete`);else{se(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){se(a,t,i);return}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function I(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){se(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function te(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ce(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ne={[yn]:e.REPEAT,[bn]:e.CLAMP_TO_EDGE,[xn]:e.MIRRORED_REPEAT},re={[Sn]:e.NEAREST,[Cn]:e.NEAREST_MIPMAP_NEAREST,[wn]:e.NEAREST_MIPMAP_LINEAR,[Tn]:e.LINEAR,[En]:e.LINEAR_MIPMAP_NEAREST,[Dn]:e.LINEAR_MIPMAP_LINEAR},ie={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ae(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&W(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ne[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ne[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ne[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,re[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,re[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ie[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function L(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,w));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&D(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function R(e,t,n){return Math.floor(Math.floor(e/n)/t)}function oe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=R(n.start,r.width,4),c=R(t.start,r.width,4);n.start<=i+1&&a===c&&R(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function se(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=L(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=X.getPrimaries(X.workingColorSpace),r=o.colorSpace===``?null:X.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=xe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=x(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ae(c,o);let h,b=o.mipmaps,w=o.isVideoTexture!==!0,T=f.__version===void 0||l===!0,E=u.dataReady,D=C(o,t);if(o.isDepthTexture)m=S(o.format===Gn,o.type),T&&(w?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture)if(b.length>0){w&&T&&n.texStorage2D(e.TEXTURE_2D,D,m,b[0].width,b[0].height);for(let t=0,i=b.length;t<i;t++)h=b[t],w?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else w?(T&&n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height),E&&oe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){w&&T&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,b[0].width,b[0].height,t.depth);for(let i=0,a=b.length;i<a;i++)if(h=b[i],o.format!==1023)if(r!==null)if(w){if(E)if(o.layerUpdates.size>0){let t=Il(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0);else W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else w?E&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{w&&T&&n.texStorage2D(e.TEXTURE_2D,D,m,b[0].width,b[0].height);for(let t=0,i=b.length;t<i;t++)h=b[t],o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}else if(o.isDataArrayTexture)if(w){if(T&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,t.width,t.height,t.depth),E)if(o.layerUpdates.size>0){let i=Il(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isData3DTexture)w?(T&&n.texStorage3D(e.TEXTURE_3D,D,m,t.width,t.height,t.depth),E&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(T)if(w)n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<D;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(b.length>0){if(w&&T){let t=Se(b[0]);n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height)}for(let t=0,i=b.length;t<i;t++)h=b[t],w?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(w){if(T){let r=Se(t);n.texStorage2D(e.TEXTURE_2D,D,m,r.width,r.height)}E&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);v(o)&&y(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ce(t,o,s){if(o.image.length!==6)return;let c=L(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=X.getPrimaries(X.workingColorSpace),r=o.colorSpace===``?null:X.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=xe(o,m[e]);let h=m[0],b=a.convert(o.format,o.colorSpace),S=a.convert(o.type),w=x(o.internalFormat,b,S,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=C(o,h);ae(e.TEXTURE_CUBE_MAP,o);let k;if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,w,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,w,i.width,i.height,0,b,S,i.data):b===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,b,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,w,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=Se(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,w,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,b,S,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,w,m[t].width,m[t].height,0,b,S,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,b,S,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,w,i.width,i.height,0,b,S,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,b,S,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,w,b,S,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,b,S,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,w,b,S,i.image[t])}}}v(o)&&y(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function le(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=x(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ye(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=S(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;z(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=x(o.internalFormat,c,l,o.normalized,o.colorSpace);z(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ye(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ye(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function de(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,w)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ae(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=ye(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function fe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)de(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?de(i.__webglFramebuffer[0],t,0):de(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ue(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ue(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function pe(t,n,i){let a=r.get(t);n!==void 0&&le(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&fe(t)}function me(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,T);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&z(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=x(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ye(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ue(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ae(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)le(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(i)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ae(c,a),le(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),v(a)&&y(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ae(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)le(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else le(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);v(i)&&y(r),n.unbindTexture()}t.depthBuffer&&fe(t)}function he(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(v(a)){let t=b(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),y(t),n.unbindTexture()}}}let ge=[],_e=[];function ve(t){if(t.samples>0){if(z(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ge.length=0,_e.length=0,ge.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(ge.push(l),_e.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_e)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ge))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ye(e){return Math.min(i.maxSamples,e.samples)}function z(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function be(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function xe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(X.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&W(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):G(`WebGLTextures: Unsupported texture color space:`,n)),t}function Se(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=A,this.getTextureUnits=j,this.setTextureUnits=M,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=te,this.rebindTextures=pe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=z,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Hf(e,t){function n(n,r=``){let i,a=X.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Uf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ds(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Uc({vertexShader:Uf,fragmentShader:Wf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Io(new Mc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kf=class extends ii{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Gf,g={},v=t.getContextAttributes(),y=null,b=null,x=[],S=[],C=new q,w=null,T=new gl;T.viewport=new Ai;let E=new gl;E.viewport=new Ai;let D=[T,E],O=new xl,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new da,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new da,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new da,x[e]=t),t.getHandSpace()};function j(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,ee);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,ee),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;v.depth&&(o=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=v.stencil?Gn:Wn,a=v.stencil?Rn:Nn);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Mi(d.textureWidth,d.textureHeight,{format:Un,type:On,depthTexture:new ls(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Mi(f.framebufferWidth,f.framebufferHeight,{format:Un,type:On,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ee(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let N=new J,P=new J;function F(e,t,n){N.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(P),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function I(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;I(O,i);for(let e=0;e<a.length;e++)I(a[e],i);a.length===2?F(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),te(e,O,i)};function te(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=si*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let ne=null;function re(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=D[n];o===void 0&&(o=new gl,o.layers.enable(n),o.viewport=new Ai,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ds,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ne&&ne(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ie=new Rl;ie.setAnimationLoop(re),this.setAnimationLoop=function(e){ne=e},this.dispose=function(){}}},qf=new Fi,Jf=new Y;Jf.set(-1,0,0,0,1,0,0,0,1);function Yf(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,zc(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(qf.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Jf),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Xf(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,y));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return G(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=v(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=v(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function v(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?W(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):W(`WebGLRenderer: Unsupported uniform value type.`,e),t}function y(t){let n=t.target;n.removeEventListener(`dispose`,y);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function b(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:b}}var Zf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qf=null;function $f(){return Qf===null&&(Qf=new zo(Zf,16,16,Jn,Fn),Qf.name=`DFG_LUT`,Qf.minFilter=Tn,Qf.magFilter=Tn,Qf.wrapS=bn,Qf.wrapT=bn,Qf.generateMipmaps=!1,Qf.needsUpdate=!0),Qf}var ep=class{constructor(e={}){let{canvas:t=Zr(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=On}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Xn,Yn,qn]),g=new Set([On,Nn,jn,Rn,In,Ln]),v=new Uint32Array(4),y=new Int32Array(4),b=new J,x=null,S=null,C=[],w=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,D=!1,O=null,k=null,A=null,j=null;this._outputColorSpace=Vr;let M=0,ee=0,N=null,P=-1,F=null,I=new Ai,te=new Ai,ne=null,re=new ga(0),ie=0,ae=t.width,L=t.height,R=1,oe=null,se=null,ce=new Ai(0,0,ae,L),le=new Ai(0,0,ae,L),ue=!1,de=new qo,fe=!1,pe=!1,me=new Fi,he=new J,ge=new Ai,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function ye(){return N===null?R:1}let z=n;function be(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,Ue,!1),t.addEventListener(`webglcontextrestored`,We,!1),t.addEventListener(`webglcontextcreationerror`,Ge,!1),z===null){let t=`webgl2`;if(z=be(t,e),z===null)throw be(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw G(`WebGLRenderer: `+e.message),e}let xe,Se,B,Ce,V,H,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be;function Ve(){xe=new _u(z),xe.init(),Re=new Hf(z,xe),Se=new ql(z,xe,e,Re),B=new Bf(z,xe),Se.reversedDepthBuffer&&d&&B.buffers.depth.setReversed(!0),k=z.createFramebuffer(),A=z.createFramebuffer(),j=z.createFramebuffer(),Ce=new bu(z),V=new bf,H=new Vf(z,xe,B,V,Se,Re,Ce),we=new gu(E),Te=new zl(z),ze=new Gl(z,Te),Ee=new vu(z,Te,Ce,ze),De=new Su(z,Ee,Te,ze,Ce),Fe=new xu(z,Se,H),Me=new Jl(V),Oe=new yf(E,we,xe,Se,ze,Me),ke=new Yf(E,V),Ae=new wf,je=new jf(xe),Pe=new Wl(E,we,B,De,p,s),Ne=new zf(E,De,Se),Be=new Xf(z,Ce,Se,B),Ie=new Kl(z,xe,Ce),Le=new yu(z,xe,Ce),Ce.programs=Oe.programs,E.capabilities=Se,E.extensions=xe,E.properties=V,E.renderLists=Ae,E.shadowMap=Ne,E.state=B,E.info=Ce}Ve(),m!==1009&&(T=new wu(m,t.width,t.height,o,r,i));let He=new Kf(E,z);this.xr=He,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=xe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(e){e!==void 0&&(R=e,this.setSize(ae,L,!1))},this.getSize=function(e){return e.set(ae,L)},this.setSize=function(e,n,r=!0){if(He.isPresenting){W(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ae=e,L=n,t.width=Math.floor(e*R),t.height=Math.floor(n*R),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ae*R,L*R).floor()},this.setDrawingBufferSize=function(e,n,r){ae=e,L=n,R=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){G(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){W(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}T.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(I)},this.getViewport=function(e){return e.copy(ce)},this.setViewport=function(e,t,n,r){e.isVector4?ce.set(e.x,e.y,e.z,e.w):ce.set(e,t,n,r),B.viewport(I.copy(ce).multiplyScalar(R).round())},this.getScissor=function(e){return e.copy(le)},this.setScissor=function(e,t,n,r){e.isVector4?le.set(e.x,e.y,e.z,e.w):le.set(e,t,n,r),B.scissor(te.copy(le).multiplyScalar(R).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(e){B.setScissorTest(ue=e)},this.setOpaqueSort=function(e){oe=e},this.setTransparentSort=function(e){se=e},this.getClearColor=function(e){return e.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Pe.getClearColor(),r=Pe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(v[0]=i,v[1]=a,v[2]=o,v[3]=r,z.clearBufferuiv(z.COLOR,0,v)):(y[0]=i,y[1]=a,y[2]=o,y[3]=r,z.clearBufferiv(z.COLOR,0,y))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),O=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ue,!1),t.removeEventListener(`webglcontextrestored`,We,!1),t.removeEventListener(`webglcontextcreationerror`,Ge,!1),Pe.dispose(),Ae.dispose(),je.dispose(),V.dispose(),we.dispose(),De.dispose(),ze.dispose(),Be.dispose(),Oe.dispose(),He.dispose(),He.removeEventListener(`sessionstart`,Qe),He.removeEventListener(`sessionend`,$e),et.stop()};function Ue(e){e.preventDefault(),$r(`WebGLRenderer: Context Lost.`),D=!0}function We(){$r(`WebGLRenderer: Context Restored.`),D=!1;let e=Ce.autoReset,t=Ne.enabled,n=Ne.autoUpdate,r=Ne.needsUpdate,i=Ne.type;Ve(),Ce.autoReset=e,Ne.enabled=t,Ne.autoUpdate=n,Ne.needsUpdate=r,Ne.type=i}function Ge(e){G(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ke(e){let t=e.target;t.removeEventListener(`dispose`,Ke),qe(t)}function qe(e){Je(e),V.remove(e)}function Je(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){Oe.releaseProgram(e)}),e.isShaderMaterial&&Oe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=_e);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=ut(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ee.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ze.setup(i,r,s,n,c);let h,g=Ie;if(c!==null&&(h=Te.get(c),g=Le,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*ye()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*ye()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh)if(xe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Te.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ye(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ot(e,t,n),e.side=0,e.needsUpdate=!0,ot(e,t,n),e.side=2):ot(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),S=je.get(n),S.init(t),w.push(S),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(S.pushLight(e),e.castShadow&&S.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(S.pushLight(e),e.castShadow&&S.pushShadow(e))}),S.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ye(a,n,e),r.add(a)}else Ye(t,n,e),r.add(t)}),S=w.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){V.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}xe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Xe=null;function Ze(e){Xe&&Xe(e)}function Qe(){et.stop()}function $e(){et.start()}let et=new Rl;et.setAnimationLoop(Ze),typeof self<`u`&&et.setContext(self),this.setAnimationLoop=function(e){Xe=e,He.setAnimationLoop(e),e===null?et.stop():et.start()},He.addEventListener(`sessionstart`,Qe),He.addEventListener(`sessionend`,$e),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){G(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(D===!0)return;O!==null&&O.renderStart(e,t);let n=He.enabled===!0&&He.isPresenting===!0,r=T!==null&&(N===null||n)&&T.begin(E,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(t),t=He.getCamera()),e.isScene===!0&&e.onBeforeRender(E,e,t,N),S=je.get(e,w.length),S.init(t),S.state.textureUnits=H.getTextureUnits(),w.push(S),me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),de.setFromProjectionMatrix(me,qr,t.reversedDepth),pe=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,pe),x=Ae.get(e,C.length),x.init(),C.push(x),He.enabled===!0&&He.isPresenting===!0){let e=E.xr.getDepthSensingMesh();e!==null&&tt(e,t,-1/0,E.sortObjects)}tt(e,t,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(oe,se,t.reversedDepth),ve=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,ve&&Pe.addToRenderList(x,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),fe===!0&&Me.beginShadows();let i=S.state.shadowsArray;if(Ne.render(i,e,t),fe===!0&&Me.endShadows(),(r&&T.hasRenderPass())===!1){let n=x.opaque,r=x.transmissive;if(S.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];rt(n,r,e,a)}ve&&Pe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];nt(x,e,n,n.viewport)}}else r.length>0&&rt(n,r,e,t),ve&&Pe.render(e),nt(x,e,t)}N!==null&&ee===0&&(H.updateMultisampleRenderTarget(N),H.updateRenderTargetMipmap(N)),r&&T.end(E),e.isScene===!0&&e.onAfterRender(E,e,t),ze.resetDefaultState(),P=-1,F=null,w.pop(),w.length>0?(S=w[w.length-1],H.setTextureUnits(S.state.textureUnits),fe===!0&&Me.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,C.pop(),x=C.length>0?C[C.length-1]:null,O!==null&&O.renderEnd()};function tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)S.pushLightProbeGrid(e);else if(e.isLight)S.pushLight(e),e.castShadow&&S.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||de.intersectsSprite(e)){r&&ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(me);let t=De.update(e),i=e.material;i.visible&&x.push(e,t,i,n,ge.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||de.intersectsObject(e))){let t=De.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ge.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ge.copy(e.boundingSphere.center)),ge.applyMatrix4(e.matrixWorld).applyMatrix4(me)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&x.push(e,t,s,n,ge.z,o)}}else i.visible&&x.push(e,t,i,n,ge.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)tt(i[e],t,n,r)}function nt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;S.setupLightsView(n),fe===!0&&Me.setGlobalState(E.clippingPlanes,n),r&&B.viewport(I.copy(r)),i.length>0&&it(i,t,n),a.length>0&&it(a,t,n),o.length>0&&it(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function rt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[r.id]===void 0){let e=xe.has(`EXT_color_buffer_half_float`)||xe.has(`EXT_color_buffer_float`);S.state.transmissionRenderTarget[r.id]=new Mi(1,1,{generateMipmaps:!0,type:e?Fn:On,minFilter:Dn,samples:Math.max(4,Se.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:X.workingColorSpace})}let a=S.state.transmissionRenderTarget[r.id],o=r.viewport||I;a.setSize(o.z*E.transmissionResolutionScale,o.w*E.transmissionResolutionScale);let s=E.getRenderTarget(),c=E.getActiveCubeFace(),l=E.getActiveMipmapLevel();E.setRenderTarget(a),E.getClearColor(re),ie=E.getClearAlpha(),ie<1&&E.setClearColor(16777215,.5),E.clear(),ve&&Pe.render(n);let u=E.toneMapping;E.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),S.setupLightsView(r),fe===!0&&Me.setGlobalState(E.clippingPlanes,r),it(e,n,r),H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a),xe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,at(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(H.updateMultisampleRenderTarget(a),H.updateRenderTargetMipmap(a))}E.setRenderTarget(s,c,l),E.setClearColor(re,ie),d!==void 0&&(r.viewport=d),E.toneMapping=u}function it(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&at(o,t,n,s,l,c)}}function at(e,t,n,r,i,a){e.onBeforeRender(E,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(E,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,E.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,E.renderBufferDirect(n,t,r,i,e,a),i.side=2):E.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(E,t,n,r,i,a)}function ot(e,t,n){t.isScene!==!0&&(t=_e);let r=V.get(e),i=S.state.lights,a=S.state.shadowsArray,o=i.state.version,s=Oe.getParameters(e,i.state,a,t,n,S.state.lightProbeGridArray),c=Oe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=we.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ke),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ct(e,s),d}else s.uniforms=Oe.getUniforms(e),O!==null&&e.isNodeMaterial&&O.build(e,n,s),e.onBeforeCompile(s,E),d=Oe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Me.uniform),ct(e,s),r.needsLights=ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=S.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function st(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=jd.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ct(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function lt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];b.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(b))return n}return null}function ut(e,t,n,r,i){t.isScene!==!0&&(t=_e),H.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:X.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=we.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=E.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,v=g===void 0?0:g.length,y=V.get(r),b=S.state.lights;if(fe===!0&&(pe===!0||e!==F)){let t=e===F&&r.id===P;Me.setState(r,e,t)}let x=!1;r.version===y.__version?y.needsLights&&y.lightsStateVersion!==b.state.version?x=!0:y.outputColorSpace===s?i.isBatchedMesh&&y.batching===!1||!i.isBatchedMesh&&y.batching===!0||i.isBatchedMesh&&y.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&y.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&y.instancing===!1||!i.isInstancedMesh&&y.instancing===!0||i.isSkinnedMesh&&y.skinning===!1||!i.isSkinnedMesh&&y.skinning===!0||i.isInstancedMesh&&y.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&y.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&y.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&y.instancingMorph===!1&&i.morphTexture!==null?x=!0:y.envMap===l?r.fog===!0&&y.fog!==a||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==Me.numPlanes||y.numIntersection!==Me.numIntersection)?x=!0:y.vertexAlphas===u&&y.vertexTangents===d&&y.morphTargets===f&&y.morphNormals===p&&y.morphColors===m&&y.toneMapping===h&&y.morphTargetsCount===v?!!y.lightProbeGrid!=S.state.lightProbeGridArray.length>0&&(x=!0):x=!0:x=!0:x=!0:(x=!0,y.__version=r.version);let C=y.currentProgram;x===!0&&(C=ot(r,t,i),O&&r.isNodeMaterial&&O.onUpdateProgram(r,C,y));let w=!1,T=!1,D=!1,k=C.getUniforms(),A=y.uniforms;if(B.useProgram(C.program)&&(w=!0,T=!0,D=!0),r.id!==P&&(P=r.id,T=!0),y.needsLights){let e=lt(S.state.lightProbeGridArray,i);y.lightProbeGrid!==e&&(y.lightProbeGrid=e,T=!0)}if(w||F!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(z,`projectionMatrix`,e.projectionMatrix),k.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(z,he.setFromMatrixPosition(e.matrixWorld)),Se.logarithmicDepthBuffer&&k.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,T=!0,D=!0)}if(y.needsLights&&(b.state.directionalShadowMap.length>0&&k.setValue(z,`directionalShadowMap`,b.state.directionalShadowMap,H),b.state.spotShadowMap.length>0&&k.setValue(z,`spotShadowMap`,b.state.spotShadowMap,H),b.state.pointShadowMap.length>0&&k.setValue(z,`pointShadowMap`,b.state.pointShadowMap,H)),i.isSkinnedMesh){k.setOptional(z,i,`bindMatrix`),k.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(z,`boneTexture`,e.boneTexture,H))}i.isBatchedMesh&&(k.setOptional(z,i,`batchingTexture`),k.setValue(z,`batchingTexture`,i._matricesTexture,H),k.setOptional(z,i,`batchingIdTexture`),k.setValue(z,`batchingIdTexture`,i._indirectTexture,H),k.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(z,`batchingColorTexture`,i._colorsTexture,H));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&Fe.update(i,n,C),(T||y.receiveShadow!==i.receiveShadow)&&(y.receiveShadow=i.receiveShadow,k.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),A.dfgLUT!==void 0&&(A.dfgLUT.value=$f()),T){if(k.setValue(z,`toneMappingExposure`,E.toneMappingExposure),y.needsLights&&dt(A,D),a&&r.fog===!0&&ke.refreshFogUniforms(A,a),ke.refreshMaterialUniforms(A,r,R,L,S.state.transmissionRenderTarget[e.id]),y.needsLights&&y.lightProbeGrid){let e=y.lightProbeGrid;A.probesSH.value=e.texture,A.probesMin.value.copy(e.boundingBox.min),A.probesMax.value.copy(e.boundingBox.max),A.probesResolution.value.copy(e.resolution)}jd.upload(z,st(y),A,H)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(jd.upload(z,st(y),A,H),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(z,`center`,i.center),k.setValue(z,`modelViewMatrix`,i.modelViewMatrix),k.setValue(z,`normalMatrix`,i.normalMatrix),k.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Be.update(n,C),Be.bind(n,C)}}return C}function dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,M=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),I.copy(e.viewport),te.copy(e.scissor),ne=e.scissorTest,B.viewport(I),B.scissor(te),B.setScissorTest(ne),P=-1;return}else if(o.__webglFramebuffer===void 0)H.setupRenderTarget(e);else if(o.__hasExternalTextures)H.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);H.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&H.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,I.copy(e.viewport),te.copy(e.scissor),ne=e.scissorTest}else I.copy(ce).multiplyScalar(R).floor(),te.copy(le).multiplyScalar(R).floor(),ne=ue;if(n!==0&&(r=k),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(I),B.scissor(te),B.setScissorTest(ne),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}P=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!Se.textureFormatReadable(c)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Se.textureTypeReadable(l)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,Re.convert(c),Re.convert(l),a)}finally{let e=N===null?null:V.get(N).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s),!Se.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Se.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,Re.convert(l),Re.convert(u),0);let f=N===null?null:V.get(N).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,f);let p=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ni(z,p,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,d),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.deleteBuffer(d),z.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;H.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Re.convert(t.format),v=Re.convert(t.type),y;t.isData3DTexture?(H.setTexture3D(t,0),y=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(H.setTexture2DArray(t,0),y=z.TEXTURE_2D_ARRAY):(H.setTexture2D(t,0),y=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let b=B.getParameter(z.UNPACK_ROW_LENGTH),x=B.getParameter(z.UNPACK_IMAGE_HEIGHT),S=B.getParameter(z.UNPACK_SKIP_PIXELS),C=B.getParameter(z.UNPACK_SKIP_ROWS),w=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let T=e.isDataArrayTexture||e.isData3DTexture,E=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)T&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,o,s,f,p,o,s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,A),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,j);for(let e=0;e<c;e++)T?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),E?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?E?z.copyTexSubImage3D(y,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(y,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,o,s,f,p,o,s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else E?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(y,a,f,p,m,o,s,c,g,v,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(y,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(y,a,f,p,m,o,s,c,g,v,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,v,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,v,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,b),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,x),B.pixelStorei(z.UNPACK_SKIP_PIXELS,S),B.pixelStorei(z.UNPACK_SKIP_ROWS,C),B.pixelStorei(z.UNPACK_SKIP_IMAGES,w),a===0&&t.generateMipmaps&&z.generateMipmap(y),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&H.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?H.setTextureCube(e,0):e.isData3DTexture?H.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?H.setTexture2DArray(e,0):H.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){M=0,ee=0,N=null,B.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return qr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=X._getDrawingBufferColorSpace(e),t.unpackColorSpace=X._getUnpackColorSpace()}};$(function(){var e=null,t=!1,n=null,r=null,i=null,a=null,o={},s=[],c=[],l=0,u=!0,d=15e3,f=!0,p=document.getElementById(`canvas`);function m(t){S(),i&&i.disconnect(),i=n.createDelay(),i.delayTime.value=.26,t.connect(i),i.connect(n.destination),e.connectAudio(i),ie=i,re.forEach(e=>e.visualizer.connectAudio(i))}function h(){requestAnimationFrame(()=>h()),e.render()}function g(e){t||(t=!0,h()),r&&r.disconnect(),r=n.createBufferSource(),r.buffer=e,m(r),r.start(0)}function v(e,t=0){n.resume();var i=new FileReader;i.onload=i=>{n.decodeAudioData(i.target.result,n=>{g(n),setTimeout(()=>{e.length>t+1?v(e,t+1):(r.disconnect(),r=null,$(`#audioSelectWrapper`).css(`display`,`block`))},n.duration*1e3)})};var a=e[t];i.readAsArrayBuffer(a)}function y(n,r){S(),r.resume();var i=r.createGain();i.gain.value=te,n.connect(i),e.connectAudio(i),ie=i,re.forEach(e=>e.visualizer.connectAudio(i)),t||(t=!0,h())}var b=null,x=null;function S(){if(b){try{b.stop()}catch{}try{e.disconnectAudio(x)}catch{}re.forEach(e=>{try{e.visualizer.disconnectAudio(x)}catch{}}),b=null,x=null}}function C(){if(!b){n.resume();for(var r=8,i=n.sampleRate,a=n.createBuffer(1,i*r,i),o=a.getChannelData(0),s=0;s<o.length;s++){var c=s/i,l=.55+.45*Math.sin(2*Math.PI*2*c)*Math.sin(2*Math.PI*c/r);o[s]=(Math.random()*2-1)*l}b=n.createBufferSource(),b.buffer=a,b.loop=!0,x=n.createGain(),x.gain.value=1,b.connect(x),e.connectAudio(x),ie=x,re.forEach(e=>e.visualizer.connectAudio(x)),b.start(0),t||(t=!0,h())}}function w(t=5.7){c.push(l);var n=s.length;l=f?Math.floor(Math.random()*s.length):(l+1)%n,e.loadPreset(o[s[l]],t),M&&fe(t),$(`#presetSelect`).val(l)}function T(t=5.7){var n=s.length;l=c.length>0?c.pop():(l-1+n)%n,e.loadPreset(o[s[l]],t),$(`#presetSelect`).val(l)}function E(){a&&=(clearInterval(a),null),u&&(a=setInterval(()=>w(2.7),d))}var D=800,O=600;function k(){return document.fullscreenElement||document.webkitFullscreenElement||null}function A(){if(e){var t=window.devicePixelRatio||1;if(k()===p){var n=window.innerWidth,r=window.innerHeight,i=Math.min(t,2);p.width=Math.round(n*i),p.height=Math.round(r*i),e.setRendererSize(n,r,{pixelRatio:i})}else p.width=D,p.height=O,e.setRendererSize(D,O,{pixelRatio:t})}}document.addEventListener(`fullscreenchange`,A),document.addEventListener(`webkitfullscreenchange`,A),window.addEventListener(`resize`,()=>{k()===p&&A()}),$(`#fullscreenBut`).click(()=>{var e=p.requestFullscreen||p.webkitRequestFullscreen||p.mozRequestFullScreen;e&&e.call(p)}),$(document).keydown(e=>{e.which===32||e.which===39?w():e.which===8||e.which===37?T():e.which===72&&w(0)}),$(`#presetSelect`).change(t=>{c.push(l),l=parseInt($(`#presetSelect`).val()),e.loadPreset(o[s[l]],5.7)}),$(`#presetCycle`).change(()=>{u=$(`#presetCycle`).is(`:checked`),E()}),$(`#presetCycleLength`).change(e=>{d=parseInt($(`#presetCycleLength`).val()*1e3),E()}),$(`#presetRandom`).change(()=>{f=$(`#presetRandom`).is(`:checked`)}),$(`#localFileBut`).click(function(){$(`#audioSelectWrapper`).css(`display`,`none`);var e=$(`<input type="file" accept="audio/*" multiple />`);e[0].onchange=function(t){v(e[0].files)},e.click()});function j(){navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}).then(e=>{$(`#audioSelectWrapper`).css(`display`,`none`),y(n.createMediaStreamSource(e),n)}).catch(e=>{console.log(`Error getting audio stream from getUserMedia`,e),C()})}$(`#micSelect`).click(j),$(document).one(`click keydown`,()=>{n&&n.resume()});var M=null,ee=null,N=null,P=0,F=null,I=new Map;let te=4;var ne=0,re=[],ie=null,ae=0,L=!1,R=new Map,oe=0,se=new wo({colorWrite:!1}),ce=new Fi;function le(){return o[s[Math.floor(Math.random()*s.length)]]}function ue(){var e=parseInt($(`#poolCount`).val(),10);return Math.min(5,Math.max(1,isNaN(e)?3:e))}function de(){for(var e=ue();re.length<e;){var t=document.createElement(`canvas`);t.width=512,t.height=512;var r=vn.createVisualizer(n,t,{width:512,height:512,pixelRatio:1,textureRatio:1});ie&&r.connectAudio(ie),r.loadPreset(le(),0);var i=new cs(t);i.colorSpace=Vr,re.push({visualizer:r,canvas:t,texture:i,material:new wo({map:i,side:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-8})})}return re.slice(0,e)}function fe(e=1){de().forEach(t=>t.visualizer.loadPreset(le(),e))}function pe(e){var t=0;I.forEach(n=>{n.material=e[t++%e.length].material,n.mesh.material=n.material}),R.forEach(n=>{n.coverMaterial=e[t++%e.length].material}),ae=t}function me(e){var t=!1;for(var n of e.session.inputSources)if(n.handedness===`right`&&n.gamepad){var r=n.gamepad.buttons;t=!!(r[4]&&r[4].pressed||r[5]&&r[5].pressed)}t&&!L&&fe(),L=t}var he=0;function ge(e,t){e-he<500||(he=e,$(`#xrStatus`).text(t))}function _e(e){e.traverse(e=>{e.geometry&&e.geometry.dispose()})}function ve(e){e.add(new os(new _s(e.geometry),new Jo({color:65416})))}function ye(e){var t=1/0,n=-1/0,r=1/0,i=-1/0;e.forEach(e=>{t=Math.min(t,e.x),n=Math.max(n,e.x),r=Math.min(r,e.z),i=Math.max(i,e.z)});for(var a=new Nc(new Js(e.map(e=>new q(e.x,e.z)))),o=a.attributes.position,s=a.attributes.uv,c=0;c<o.count;c++)s.setXY(c,(o.getX(c)-t)/(n-t||1),(o.getY(c)-r)/(i-r||1));return a.rotateX(Math.PI/2),a}function z(e){var t=new po;t.setAttribute(`position`,new Za(e.vertices,3)),t.setIndex(new Za(e.indices,1)),t=t.toNonIndexed(),t.computeVertexNormals(),t.computeBoundingBox();var n=t.boundingBox,r=new J().subVectors(n.max,n.min);r.x=r.x||1,r.y=r.y||1,r.z=r.z||1;for(var i=t.attributes.position,a=t.attributes.normal,o=new Float32Array(i.count*2),s=0;s<i.count;s++){var c=Math.abs(a.getX(s)),l=Math.abs(a.getY(s)),u=Math.abs(a.getZ(s)),d,f;l>=c&&l>=u?(d=(i.getX(s)-n.min.x)/r.x,f=(i.getZ(s)-n.min.z)/r.z):c>=u?(d=(i.getZ(s)-n.min.z)/r.z,f=(i.getY(s)-n.min.y)/r.y):(d=(i.getX(s)-n.min.x)/r.x,f=(i.getY(s)-n.min.y)/r.y),o[s*2]=d,o[s*2+1]=f}return t.setAttribute(`uv`,new Za(o,2)),t}function be(e){var t=e.detectedMeshes,n=M.xr.getReferenceSpace(),r=$(`#roomMesh`).is(`:checked`),i=$(`#roomMeshMode`).val();i===`depth`&&(r=!1),oe=0,R.forEach((e,n)=>{(!t||!t.has(n))&&(ee.remove(e.mesh),_e(e.mesh),R.delete(n))}),t&&t.forEach(t=>{if(t.semanticLabel!==`global mesh`){oe++;var a=R.get(t);if(!a||a.lastChangedTime!==t.lastChangedTime){var o=a?a.coverMaterial:null;if(!o){var s=de();o=s[ae++%s.length].material}a&&(ee.remove(a.mesh),_e(a.mesh));var c=new Io(z(t),se);c.matrixAutoUpdate=!1,a={mesh:c,lastChangedTime:t.lastChangedTime,coverMaterial:o},R.set(t,a),ee.add(c)}if(!r){a.mesh.visible=!1;return}a.mesh.material=i===`cover`?a.coverMaterial:se,a.mesh.renderOrder=i===`cover`?0:-1;var l=e.getPose(t.meshSpace,n);l?(a.mesh.visible=!0,a.mesh.matrix.fromArray(l.transform.matrix)):a.mesh.visible=!1}})}function xe(e,t){var n=e.getViewerPose(t);if(F=new Io(new Mc(2,1.5),de()[0].material),ve(F),n){var r=n.transform,i=new J(r.position.x,r.position.y,r.position.z),a=new J(0,0,-1).applyQuaternion(new pi(r.orientation.x,r.orientation.y,r.orientation.z,r.orientation.w));a.y=0,a.lengthSq()<1e-6&&a.set(0,0,-1),a.normalize(),F.position.copy(i).addScaledVector(a,2),F.lookAt(i)}else F.position.set(0,1.5,-2);ee.add(F)}function Se(e,t){var n=M.xr.getReferenceSpace(),r=t.detectedPlanes;if(r&&r.size>0){F&&=(ee.remove(F),_e(F),null),I.forEach((e,t)=>{r.has(t)||(ee.remove(e.mesh),_e(e.mesh),I.delete(t))});var i=t.getViewerPose(n),a=i?i.transform.position:null,o=[],s=null;r.forEach(e=>{o.push(e.semanticLabel||`unlabeled`);var r=I.get(e);if(!r||r.lastChangedTime!==e.lastChangedTime){var i=r?r.material:null;if(!i){var c=de();i=c[ae++%c.length].material}r&&(ee.remove(r.mesh),_e(r.mesh));var l=new Io(ye(e.polygon),i);ve(l),l.matrixAutoUpdate=!1,r={mesh:l,lastChangedTime:e.lastChangedTime,material:i},I.set(e,r),ee.add(l)}var u=t.getPose(e.planeSpace,n);if(u){r.mesh.visible=!0;var d=u.transform.matrix;if(r.mesh.matrix.fromArray(d),a){var f=(a.x-d[12])*d[4]+(a.y-d[13])*d[5]+(a.z-d[14])*d[6]>=0?1:-1;r.mesh.matrix.multiply(ce.makeTranslation(0,f*.02,0))}e.semanticLabel===`floor`&&(s=u.transform.position.y)}else r.mesh.visible=!1}),ge(e,r.size+` planes [`+o.join(`, `)+`]`+(a?` | you @ `+a.x.toFixed(1)+`,`+a.y.toFixed(1)+`,`+a.z.toFixed(1):``)+(s===null?``:` | floor y=`+s.toFixed(2)+` (should be ~0)`)+` | `+oe+` furniture meshes`)}else!F&&I.size===0&&e-P>3e3?(xe(t,n),ge(e,`no planes reported by headset — spawned fallback plane`)):!F&&I.size===0&&ge(e,`waiting for plane data...`)}function B(e,t){if(t){P||=e;var n=de();n.length!==ne&&(ne=n.length,pe(n)),n.forEach(e=>{e.visualizer.render(),e.texture.needsUpdate=!0}),me(t),Se(e,t),be(t),M.render(ee,N)}}function Ce(){M&&=(M.setAnimationLoop(null),M.dispose(),null),I.forEach(e=>_e(e.mesh)),I.clear(),R.forEach(e=>_e(e.mesh)),R.clear(),oe=0,F&&=(_e(F),null),ee=null,P=0,ae=0,L=!1,he=0,$(`#xrStatus`).text(``),$(`body`).removeClass(`in-ar`),$(`#enterAR span`).text(`Enter AR`)}async function V(){n&&n.resume();var e={requiredFeatures:[`local-floor`],optionalFeatures:[`plane-detection`,`mesh-detection`,`dom-overlay`],domOverlay:{root:document.body}};$(`#roomMesh`).is(`:checked`)&&$(`#roomMeshMode`).val()===`depth`&&(e.optionalFeatures.push(`depth-sensing`),e.depthSensing={usagePreference:[`gpu-optimized`],dataFormatPreference:[`luminance-alpha`]});var t=await navigator.xr.requestSession(`immersive-ar`,e);M=new ep({antialias:!0,alpha:!0}),M.xr.enabled=!0,M.xr.setReferenceSpaceType(`local-floor`),ee=new va,N=new gl(70,1,.01,100),ee.add(new Pl(2,8,16776960,8947712)),ee.add(new Fl(.5)),de(),t.addEventListener(`end`,Ce),await M.xr.setSession(t),$(`body`).addClass(`in-ar`),$(`#enterAR span`).text(`Exit AR`),M.setAnimationLoop(B)}navigator.xr&&navigator.xr.isSessionSupported&&navigator.xr.isSessionSupported(`immersive-ar`).then(e=>{e&&$(`#enterAR`).show()}).catch(()=>{}),$(`#enterAR`).click(()=>{M?M.xr.getSession().end():V().catch(e=>{console.error(`Failed to start AR session`,e),$(`#enterAR span`).text(`AR failed: `+e.message),setTimeout(()=>$(`#enterAR span`).text(`Enter AR`),5e3)})});function H(){n=new AudioContext,o={},window.base&&window.base.default&&Object.assign(o,window.base.default),window.extra&&window.extra.default&&Object.assign(o,window.extra.default),o=_(o).toPairs().sortBy(([e,t])=>e.toLowerCase()).fromPairs().value(),s=_.keys(o),l=Math.floor(Math.random()*s.length);for(var t=document.getElementById(`presetSelect`),r=0;r<s.length;r++){var i=document.createElement(`option`);i.innerHTML=s[r].substring(0,60)+(s[r].length>60?`...`:``),i.value=r,t.appendChild(i)}e=vn.createVisualizer(n,p,{width:800,height:600,pixelRatio:window.devicePixelRatio||1,textureRatio:1}),w(0),a=setInterval(()=>w(2.7),d)}H(),j()});