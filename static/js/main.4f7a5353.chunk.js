(this.webpackJsonptyping_simulator=this.webpackJsonptyping_simulator||[]).push([[0],{15:function(e,t,a){e.exports={indicators:"SuccsessModal_indicators__1tmt-",accuracy:"SuccsessModal_accuracy__2VJ8z",speed:"SuccsessModal_speed__1CAFY",indicators_span:"SuccsessModal_indicators_span__3qHiE",icon:"SuccsessModal_icon__1FQdJ",indicators_numbers:"SuccsessModal_indicators_numbers__3m740",small_text:"SuccsessModal_small_text__3VnWg"}},37:function(e,t,a){e.exports={default:"Letter_default__o0hUb",active:"Letter_active__3KTnn",mistake:"Letter_mistake__1m2FB",passed:"Letter_passed__2Bo_M"}},51:function(e,t,a){e.exports={main:"Main_main__3Xvh9"}},58:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(18),n=a.n(c),i=(a(58),a(8)),r=a(51),l=a.n(r),u=a(24),j=a.n(u),o=a(48),d=a(9),b=a.n(d),x=a(37),O=a.n(x),_=a(2),p=function(e){var t=e.value,a=e.style;return"mistake"===a?Object(_.jsx)("span",{className:O.a.mistake,children:t}):"active"===a?Object(_.jsx)("span",{className:O.a.active,children:t}):"passed"===a?Object(_.jsx)("span",{className:O.a.passed,children:t}):Object(_.jsx)("span",{className:O.a.default,children:t})},m=a(74),h=a(53),f=function(e){var t=e.language,a=e.setLanguage;return Object(_.jsxs)(m.a,{id:"dropdown-basic-button",variant:"secondary",title:t,children:[Object(_.jsx)(h.a.Item,{value:"Russian",onClick:function(e){a("Russian")},children:"Russian layout"}),Object(_.jsx)(h.a.Item,{value:"English",onClick:function(e){a("English")},children:"English layout"})]})},g=a(77),v=a(76),N=a(52),y=function(e){e.startTest;var t=e.language,a=e.setLanguage,s=e.restart;return Object(_.jsxs)(g.a,{bg:"dark",variant:"dark",expand:"lg",className:"p-2 pt-1 pb-1 b2 rounded",children:[Object(_.jsx)(g.a.Brand,{children:" \u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440 \u0441\u043b\u0435\u043f\u043e\u0439 \u043f\u0435\u0447\u0430\u0442\u0438"}),Object(_.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(_.jsxs)(g.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-md-between",children:[Object(_.jsx)(v.a,{className:"mr-auto",children:Object(_.jsx)(N.a,{variant:"success",onClick:function(){s()},children:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})}),Object(_.jsx)(f,{language:t,setLanguage:a})]})]})},T=a.p+"static/media/target.6312370e.svg",k=a.p+"static/media/speed.b63075ca.svg",S=a(75),L=a(15),w=a.n(L),E=function(e){var t=e.passedText,a=e.text,c=e.speed,n=e.accuracy,r=e.restart;Object(s.useEffect)((function(){a.length===t.length&&0!==a.length&&o(!0)}),[a,t]);var l=Object(s.useState)(!1),u=Object(i.a)(l,2),j=u[0],o=u[1],d=function(){o(!1)};return Object(_.jsx)("div",{className:"modal",children:Object(_.jsxs)(S.a,{show:j,centered:!0,onHide:function(){},children:[Object(_.jsxs)(S.a.Header,{children:[Object(_.jsx)(S.a.Title,{children:Object(_.jsx)("h4",{children:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435\u043c \u0442\u0435\u0441\u0442\u0430!"})}),Object(_.jsx)(N.a,{variant:"secondary",onClick:d,children:"X"})]}),Object(_.jsx)(S.a.Body,{children:Object(_.jsxs)("div",{className:w.a.indicators,children:[Object(_.jsx)("h4",{children:"\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"}),Object(_.jsxs)("div",{className:w.a.speed,children:[Object(_.jsxs)("span",{className:w.a.indicators_span,children:[Object(_.jsx)("img",{src:k,alt:"",className:w.a.icon}),"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c"]}),Object(_.jsxs)("span",{className:w.a.indicators_numbers,children:[isNaN(c)?(0).toFixed(2):c.toFixed(2),Object(_.jsx)("span",{className:w.a.small_text,children:"\u0437\u043d/\u043c\u0438\u043d."})]})]}),Object(_.jsxs)("div",{className:w.a.accuracy,children:[Object(_.jsxs)("span",{className:w.a.indicators_span,children:[Object(_.jsx)("img",{src:T,alt:"",className:w.a.icon}),"\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c"]}),Object(_.jsxs)("span",{className:w.a.indicators_numbers,children:[n.toFixed(2)," ",Object(_.jsx)("span",{className:w.a.small_text,children:"%"})]})]})]})}),Object(_.jsx)(S.a.Footer,{children:Object(_.jsx)(N.a,{variant:"success",onClick:function(){r(),d()},children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"})})]})})},F=function(e){var t=e.startTest,a=e.start,c=e.language,n=e.setLanguage,r=e.time,l=Object(s.useState)(!1),u=Object(i.a)(l,2),j=u[0],o=u[1];return Object(s.useEffect)((function(){o(0===r&&!a)}),[r,a]),Object(_.jsx)("div",{className:"modal",children:Object(_.jsxs)(S.a,{show:j,centered:!0,onHide:function(){},children:[Object(_.jsxs)(S.a.Header,{children:[Object(_.jsx)(S.a.Title,{children:Object(_.jsx)("h4",{children:"\u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440 \u0441\u043b\u0435\u043f\u043e\u0439 \u043f\u0435\u0447\u0430\u0442\u0438"})}),Object(_.jsx)(f,{language:c,setLanguage:n})]}),Object(_.jsx)(S.a.Body,{children:Object(_.jsx)("h5",{fontSize:"lg",children:"\u041d\u0430\u0436\u043c\u0438, \u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442, \u043a\u043e\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0448\u044c \u0433\u043e\u0442\u043e\u0432!"})}),Object(_.jsx)(S.a.Footer,{children:Object(_.jsx)(N.a,{variant:"success",onClick:t,children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442"})})]})})},M=function(e){var t=e.start,a=e.startTest,c=e.language,n=e.setLanguage,r=Object(s.useState)([]),l=Object(i.a)(r,2),u=l[0],d=l[1],x=Object(s.useState)(0),O=Object(i.a)(x,2),m=O[0],h=O[1],f=Object(s.useState)([]),g=Object(i.a)(f,2),v=g[0],N=g[1],S=Object(s.useState)([]),L=Object(i.a)(S,2),w=L[0],M=L[1],R=Object(s.useState)([]),C=Object(i.a)(R,2),B=C[0],I=C[1],H=Object(s.useState)(0),J=Object(i.a)(H,2),A=J[0],X=J[1],z=Object(s.useState)("active"),P=Object(i.a)(z,2),Q=P[0],V=P[1],q=Object(s.useState)(0),D=Object(i.a)(q,2),K=D[0],U=D[1],W=Object(s.useState)(0),Y=Object(i.a)(W,2),Z=Y[0],G=Y[1],$=Object(s.useState)(0),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],se=Object(s.useState)(100),ce=Object(i.a)(se,2),ne=ce[0],ie=ce[1],re=Object(s.useRef)(),le=function(){var e=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{(function(){var e=Object(o.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("Russian"===c?"https://fish-text.ru/get?&type=paragraph&number=3&type=json":"https://baconipsum.com/api/?callback=?type=meat-and-filler&paras=2"));case 2:return t=e.sent,a=t.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){if(ae(0),ie(100),h(0),X(0),V("active"),U(0),G(0),"Russian"!==c){var t=e.join();d(t.split(""))}else d(e.text.split(""));re.current.focus()}))}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){!1===t&&0===m&&le()}),[t,c]),Object(s.useEffect)((function(){u.length===v.length&&0!==u.length&&a()}),[u,v]),Object(s.useEffect)((function(){N(u.slice(0,A)),M(u.slice(A,A+1)),I(u.slice(A+1))}),[u,A]),Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:re.current.focus(),"Tab"===t.key&&(t.preventDefault(),re.current.focus()),t.key===w[0]&&(V("active"),U((function(e){return e+1})),X((function(e){return e+1}))),t.key!==w[0]&&0!==u.length&&"active"===Q&&(G((function(e){return e+1})),V("mistake"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return document.addEventListener("keypress",e),function(){document.removeEventListener("keypress",e)}}),[w,Q,m,Z]),Object(s.useEffect)((function(){if(t){var e=setInterval((function(){h((function(e){return e+1})),ae(Math.round(K/(m/60))),ie((u.length-Z)/(u.length/100))}),1e3);return function(){clearInterval(e)}}}),[t,m]),Object(_.jsxs)("div",{className:b.a.view,children:[Object(_.jsx)(y,{language:c,setLanguage:n,start:t,startTest:a,restart:le}),Object(_.jsxs)("div",{className:b.a.typing_block,children:[Object(_.jsxs)("div",{className:b.a.text_body,children:[Object(_.jsx)("input",{type:"text",ref:re,className:b.a.input}),Object(_.jsxs)("div",{className:b.a.text,children:[""!==v&&v.map((function(e,t){return Object(_.jsx)(p,{value:e,style:"passed"},t)})),""!==w&&w.map((function(e,t){return Object(_.jsx)(p,{value:e,style:Q},t)})),""!==B&&B.map((function(e,t){return Object(_.jsx)(p,{value:e,style:"default"},t)}))]})]}),Object(_.jsxs)("div",{className:b.a.indicators,children:[Object(_.jsxs)("div",{className:b.a.speed,children:[Object(_.jsxs)("span",{className:b.a.indicators_span,children:[Object(_.jsx)("img",{src:k,alt:"",className:b.a.icon}),"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c"]}),Object(_.jsxs)("span",{className:b.a.indicators_numbers,children:[isNaN(te)||te===1/0||te===-1/0?(0).toFixed(2):te.toFixed(2),Object(_.jsx)("span",{className:b.a.small_text,children:"\u0437\u043d/\u043c\u0438\u043d."})]})]}),Object(_.jsxs)("div",{className:b.a.accuracy,children:[Object(_.jsxs)("span",{className:b.a.indicators_span,children:[Object(_.jsx)("img",{src:T,alt:"",className:b.a.icon}),"\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c"]}),Object(_.jsxs)("span",{className:b.a.indicators_numbers,children:[ne.toFixed(2)," ",Object(_.jsx)("span",{className:b.a.small_text,children:"%"})]})]})]})]}),Object(_.jsx)(F,{startTest:a,start:t,language:c,setLanguage:n,time:m}),Object(_.jsx)(E,{startTest:a,passedText:v,text:u,speed:te,accuracy:ne,restart:le})]})},R=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)("Russian"),r=Object(i.a)(n,2),u=r[0],j=r[1];return Object(_.jsx)("div",{className:l.a.main,children:Object(_.jsx)(M,{start:a,startTest:function(){c(!a)},language:u,setLanguage:j})})};a(66);var C=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(R,{})})};a(67),a(68);n.a.render(Object(_.jsx)(C,{}),document.getElementById("root"))},9:function(e,t,a){e.exports={view:"Text_view__26ufc",text_body:"Text_text_body__2PjT-",text:"Text_text__1afx0",input:"Text_input__3u9ET",typing_block:"Text_typing_block__1fXbR",indicators:"Text_indicators__3R2Lt",accuracy:"Text_accuracy__mh8AA",speed:"Text_speed__2IFkQ",indicators_span:"Text_indicators_span__142oP",icon:"Text_icon__1cjs7",indicators_numbers:"Text_indicators_numbers__19JT2",small_text:"Text_small_text__2ZTet"}}},[[69,1,2]]]);
//# sourceMappingURL=main.4f7a5353.chunk.js.map