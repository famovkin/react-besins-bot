"use strict";(self.webpackChunkreact_besins_bot=self.webpackChunkreact_besins_bot||[]).push([[100],{563:function(e,t,n){n.d(t,{Z:function(){return r}});n(791);var a=n(184);var r=function(e){var t=e.children,n=e.valid,r=void 0===n||n,c=e.mod,i=e.handler,l=e.type,s=void 0===l?"submit":l;return(0,a.jsx)("button",{className:"button ".concat(!r&&"button_disabled"," ").concat(c),disabled:!r,onClick:i,type:s,children:t})}},900:function(e,t,n){n.d(t,{Z:function(){return r}});n(791);var a=n(184);var r=function(e){var t=e.question,n=e.variants,r=e.onChange,c=e.num,i=e.id;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{className:"question",children:t}),(0,a.jsx)("div",{className:"switch-field",children:n.map((function(e,t){return(0,a.jsxs)("div",{className:"switch-field__wrapper",children:[(0,a.jsx)("input",{className:"switch-field__input",type:"radio",id:c?"radio".concat(4*c+t):e.value,name:c?"question".concat(c):i,value:e.value,onChange:r,required:!0}),(0,a.jsx)("label",{className:"switch-field__label",htmlFor:c?"radio".concat(4*c+t):e.value,children:e.value})]},e+t)}))})]})}},267:function(e,t,n){n.d(t,{Z:function(){return r}});n(791);var a=n(184);var r=function(e){var t=e.children,n=e.mod;return(0,a.jsx)("div",{className:"title app__title ".concat(n),children:t})}},206:function(e,t,n){var a=n(942),r=n(413),c=n(885),i=n(791);t.Z=function(){var e=(0,i.useState)({}),t=(0,c.Z)(e,2),n=t[0],l=t[1],s=(0,i.useState)(!1),u=(0,c.Z)(s,2),o=u[0],d=u[1];return(0,i.useEffect)((function(){console.log(n)}),[n]),{handleChange:function(e){var t=e.target,c=t.name,i=t.value;l((0,r.Z)((0,r.Z)({},n),{},(0,a.Z)({},c,i))),d(e.target.closest("form").checkValidity())},values:n,isFormValid:o,setValues:l,setIsFormValid:d}}},100:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(885),r=n(791),c=n(267),i=n(563),l=n(900),s=n(206),u=n(585),o=n(184),d=null,f=null,v=null;var h=function(){var e=new Date;console.log(">>>",e);var t=(0,u._g)(e);console.log(">>>",t);var n=(0,s.Z)(),h=n.handleChange,x=n.values,m=n.isFormValid,_=Object.values(x).includes("0"),p=(0,r.useState)({}),j=(0,a.Z)(p,2),b=j[0],g=j[1],N=(0,r.useState)(!1),Z=(0,a.Z)(N,2),y=Z[0],w=Z[1],V=(0,r.useState)(!1),O=(0,a.Z)(V,2),D=O[0],S=O[1],k=(0,r.useState)(t),C=(0,a.Z)(k,2),M=C[0],P=C[1],F=(0,r.useState)(1),I=(0,a.Z)(F,2),q=I[0],E=I[1],T=(0,r.useRef)(null);return(0,o.jsxs)(o.Fragment,{children:[!D&&(0,o.jsxs)("form",{className:"calendar",noValidate:!0,onSubmit:function(t){t.preventDefault(),S(!0),d="\u041f\u043e \u043c\u0435\u043d\u0441\u0442\u0440\u0443\u0430\u0446\u0438\u0438"===x["type-date"]?280:266;var n=new Date(M),a=Math.ceil(Math.abs((n.getTime()-e.getTime())/864e5));"\u041f\u043e \u0434\u0430\u0442\u0435 \u0437\u0430\u0447\u0430\u0442\u0438\u044f"===x["type-date"]&&(a+=14),f=a/280;var r=0===Math.ceil(a/7)?1:Math.ceil(a/7),c=(0,u.E4)(M,d);g({week:r,birthday:(0,u.p6)(c),days:a}),setTimeout((function(){v=T.current?T.current.offsetWidth:0,E(v*f)}),200)},children:[(0,o.jsxs)("div",{className:"calendar__header",children:[(0,o.jsx)(c.Z,{children:"\u0420\u0430\u0441\u0447\u0451\u0442 \u0441\u0440\u043e\u043a\u0430 \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0434\u0430\u0442\u044b \u0440\u043e\u0434\u043e\u0432"}),(0,o.jsx)(l.Z,{question:"\u0422\u0438\u043f \u0434\u0430\u0442\u044b",variants:u.zM,onChange:h,id:"type-date"}),(0,o.jsx)("label",{className:"calendar__label",children:"\u0414\u0430\u0442\u0430"}),(0,o.jsx)("input",{className:"calendar__input-date",type:"date",name:"date",onChange:function(e){return P(e.target.value)},value:M||""})]}),(0,o.jsx)("div",{className:"calendar__footer",children:(0,o.jsx)(i.Z,{valid:m&&!_,children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})})]}),D&&!y&&(0,o.jsxs)("div",{className:"calendar",children:[(0,o.jsxs)("div",{className:"calendar__header",children:[(0,o.jsx)(c.Z,{mod:"title_center title_calendar",children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0440\u043e\u043a \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0434\u0430\u0442\u0443 \u0440\u043e\u0434\u043e\u0432"}),(0,o.jsxs)("div",{className:"date-bar",ref:T,children:[(0,o.jsxs)("p",{className:"date-bar__text",children:[100*f<1?1:Math.floor(100*f),"% (",b.days," \u0438\u0437 280 \u0434\u043d\u0435\u0439)"]}),(0,o.jsx)("div",{style:{width:q},className:"date-bar__progress"})]}),(0,o.jsxs)("p",{className:"calendar__date-txt",children:["\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u043c\u0430\u044f \u0434\u0430\u0442\u0430 \u0440\u043e\u0434\u043e\u0432:"," ",(0,o.jsx)("span",{className:"colored",children:b.birthday})]}),(0,o.jsxs)("p",{className:"calendar__date-txt",children:["\u0421\u0440\u043e\u043a \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438:"," ",(0,o.jsxs)("span",{className:"colored",children:[b.week," ",(0,u.D_)(b.week)]})]}),(0,o.jsxs)("p",{className:"calendar__date-txt calendar__date-txt_caps colored",children:[b.week,"-\u044f \u043d\u0435\u0434\u0435\u043b\u044f \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438"]})]}),(0,o.jsx)("div",{className:"calendar__footer",children:(0,o.jsx)(i.Z,{mod:"button_transparent",handler:function(){w(!0)},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})})]}),y&&(0,o.jsx)("div",{className:"calendar",children:(0,o.jsxs)("div",{className:"calendar__header",children:[(0,o.jsx)(c.Z,{mod:"title_center",children:"\u0418\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u044f"}),(0,o.jsxs)("p",{className:"calendar__info calendar__info_calendar",children:[(0,o.jsx)("span",{className:"colored",children:"\u041f\u0414\u0420"})," = \u041f\u0435\u0440\u0432\u044b\u0439 \u0434\u0435\u043d\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043c\u0435\u043d\u0441\u0442\u0440\u0443\u0430\u0446\u0438\u0438 + 280 \u0434\u043d\u0435\u0439"]}),(0,o.jsxs)("p",{className:"calendar__info calendar__info_calendar",children:[(0,o.jsx)("span",{className:"colored",children:"\u041f\u0414\u0420"})," = \u0414\u0430\u0442\u0430 \u0437\u0430\u0447\u0430\u0442\u0438\u044f + 266 \u0434\u043d\u0435\u0439"]}),(0,o.jsxs)("p",{className:"calendar__info calendar__info_calendar",children:[(0,o.jsx)("span",{className:"colored",children:"\u0421\u0440\u043e\u043a \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0441\u0442\u0438"})," = \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u0432 \u0434\u043d\u044f\u0445 \u043c\u0435\u0436\u0434\u0443 \u043f\u0435\u0440\u0432\u044b\u043c \u0434\u043d\u0435\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043c\u0435\u043d\u0441\u0442\u0440\u0443\u0430\u0446\u0438\u0438 \u0438 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0434\u0430\u0442\u043e\u0439"]})]})})]})}},585:function(e,t,n){n.d(t,{AQ:function(){return c},Ax:function(){return f},C0:function(){return a},D_:function(){return w},E4:function(){return N},Fs:function(){return v},KJ:function(){return m},KV:function(){return l},Ms:function(){return o},Ri:function(){return s},Ul:function(){return r},Ux:function(){return p},Ws:function(){return d},ZV:function(){return h},Ze:function(){return _},_g:function(){return y},aO:function(){return i},c3:function(){return x},p6:function(){return Z},qT:function(){return j},zM:function(){return b},zh:function(){return u}});var a={numberVerdict:["< 18,0","18,0 - 25,0","25,0 - 30,0","30,0 - 35,0","35,0 - 40,0","> 40,0"],textVerdict:["\u041d\u0438\u0436\u0435 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u0435\u0441\u0430","\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0435\u0441","\u0418\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u044b\u0439 \u0432\u0435\u0441","\u041e\u0436\u0438\u0440\u0435\u043d\u0438\u0435 I \u0441\u0442\u0435\u043f\u0435\u043d\u0438","\u041e\u0436\u0438\u0440\u0435\u043d\u0438\u0435 II \u0441\u0442\u0435\u043f\u0435\u043d\u0438","\u041e\u0436\u0438\u0440\u0435\u043d\u0438\u0435 III \u0441\u0442\u0435\u043f\u0435\u043d\u0438"],color:["#ffa3a3","#a1f1e3","#ffa3a3","#dd6e6f","#ce575a","#c23b3c"]},r=function(e){return e<18.5?0:e>=18&&e<25?1:e>=25&&e<30?2:e>=30&&e<35?3:e>=35&&e<40?4:e>=40?5:void 0},c={numberVerdict:["\u2264 2.86","> 2.86"],textVerdict:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439","\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u0438\u043d\u0441\u0443\u043b\u0438\u043d\u043e\u0440\u0435\u0437\u0438\u0441\u0442\u0435\u043d\u0442\u043d\u043e\u0441\u0442\u044c"],color:["#a1f1e3","#dd6e6f"]},i=function(e){return e<=2.86?0:e>2.86?1:void 0},l={sad:["< 120","120 - 129","130 - 139","140 - 159","160 - 179","\u2265 180","\u2265 140"],dad:["< 80","80 - 84","85 - 89","90 - 99","100 - 109","\u2265 110","< 90"],textVerdict:["\u041e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435","\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0435","\u0412\u044b\u0441\u043e\u043a\u043e\u0435 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0435","\u0410\u0413 1\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438","\u0410\u0413 2\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438","\u0410\u0413 3\u0439 \u0441\u0442\u0435\u043f\u0435\u043d\u0438","\u0418\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0433\u0438\u043f\u0435\u0440\u0442\u0435\u043d\u0437\u0438\u044f"],color:["#a1f1e3","#a1f1e3","#ffa3a3","#dd6e6f","#ce575a","#c23b3c","$852929"]},s=function(e,t){return e<120||t<80?0:e>=120&&e<=129||t>=80&&t<=84?1:e>=130&&e<=139||t>=85&&t<=89?2:e>=140&&e<=159||t>=90&&t<=99?3:e>=160&&e<=179||t>=100&&t<=109?4:e>=180||t>=110?5:e>=140||t<90?6:void 0},u=["1. \u0411\u044b\u0441\u0442\u0440\u043e\u0435 \u0438\u043b\u0438 \u0441\u0438\u043b\u044c\u043d\u043e\u0435 \u0441\u0435\u0440\u0434\u0446\u0435\u0431\u0438\u0435\u043d\u0438\u0435","2. \u0427\u0443\u0432\u0441\u0442\u0432\u043e \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u043d\u0435\u0440\u0432\u0432\u043e\u0437\u043d\u043e\u0441\u0442\u0438","3. \u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u0441\u043d\u0430","4. \u0412\u043e\u0437\u0431\u0443\u0434\u0438\u043c\u043e\u0441\u0442\u044c","5. \u041f\u0440\u0438\u0441\u0442\u0443\u043f\u044b \u0442\u0440\u0435\u0432\u043e\u0433\u0438, \u043f\u0430\u043d\u0438\u043a\u0438","6. \u0422\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u0432 \u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u044f","7. \u0427\u0443\u0432\u0441\u0442\u0432\u043e \u0443\u0441\u0442\u0430\u043b\u043e\u0441\u0442\u0438 \u0438\u043b\u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0430 \u044d\u043d\u0435\u0440\u0433\u0438\u0438","8. \u041f\u043e\u0442\u0435\u0440\u044f \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0430 \u043a\u043e \u043c\u043d\u043e\u0433\u0438\u043c \u0432\u0435\u0449\u0430\u043c","9. \u0427\u0443\u0432\u0441\u0442\u0432\u043e \u043d\u0435\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0430 \u0438\u043b\u0438 \u0434\u0435\u043f\u0440\u0435\u0441\u0441\u0438\u044f","10. \u041f\u043b\u0430\u043a\u0441\u0438\u0432\u043e\u0441\u0442\u044c","11. \u0420\u0430\u0437\u0434\u0440\u0430\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c","12. \u0427\u0443\u0432\u0441\u0442\u0432\u043e \u0433\u043e\u043b\u043e\u0432\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u043e\u0431\u043c\u043e\u0440\u043e\u043a","13. \u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 \u0432 \u0433\u043e\u043b\u043e\u0432\u0435, \u0442\u0435\u043b\u0435","14. \u0427\u0443\u0432\u0441\u0442\u0432\u043e \u043e\u043d\u0435\u043c\u0435\u043d\u0438\u044f \u0438 \u0434\u0440\u043e\u0436\u044c \u0432 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0447\u0430\u0441\u0442\u044f\u0445 \u0442\u0435\u043b\u0430","15. \u0413\u043e\u043b\u043e\u0432\u043d\u044b\u0435 \u0431\u043e\u043b\u0438","16. \u041c\u044b\u0448\u0435\u0447\u043d\u044b\u0435 \u0438 \u0441\u0443\u0441\u0442\u0430\u0432\u043d\u044b\u0435 \u0431\u043e\u043b\u0438","17. \u0421\u043b\u0430\u0431\u043e\u0441\u0442\u044c \u0432 \u0440\u0443\u043a\u0430\u0445 \u0438\u043b\u0438 \u043d\u043e\u0433\u0430\u0445","18. \u0417\u0430\u0442\u0440\u0443\u0434\u043d\u0435\u043d\u043d\u043e\u0435 \u0434\u044b\u0445\u0430\u043d\u0438\u0435","19. \u041f\u0440\u0438\u043b\u0438\u0432\u044b","20. \u041d\u043e\u0447\u043d\u0430\u044f \u043f\u043e\u0442\u043b\u0438\u0432\u043e\u0441\u0442\u044c","21. \u041f\u043e\u0442\u0435\u0440\u044f \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0430 \u043a \u0441\u0435\u043a\u0441\u0443"],o=[{value:"0"},{value:"1"},{value:"2"},{value:"3"}],d=[{value:"\u041c\u0443\u0436\u0447\u0438\u043d\u0430"},{value:"\u0416\u0435\u043d\u0449\u0438\u043d\u0430"}],f={numberVerdict:["1 - 11","12 - 19","20 \u0438 \u0432\u044b\u0448\u0435"],textVerdict:["\u0421\u043b\u0430\u0431\u0430\u044f","\u0421\u0440\u0435\u0434\u043d\u044f\u044f","\u0422\u044f\u0436\u0451\u043b\u0430\u044f"],color:["#a1f1e3","#ffa3a3","#ce575a"]},v=function(e){return e>=1&&e<=11?0:e>=12&&e<=19?1:e>20?2:void 0},h=function(e){return e%10===0?"\u043e\u0432":e%10===1?"":e%10>=2&&e%10<=4?"a":"\u043e\u0432"},x=function(e,t){switch(e){case"\u041c\u0443\u0436\u0447\u0438\u043d\u0430":return t>=14.85&&t<=95?0:1;case"\u0416\u0435\u043d\u0449\u0438\u043d\u0430":return 0}},m={"\u041c\u0443\u0436\u0447\u0438\u043d\u0430":{numberVerdict:["14,85% - 95% ","\u0414\u0440\u0443\u0433\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"],textVerdict:["\u0412 \u043f\u0440\u0435\u0434\u0435\u043b\u0430\u0445 \u043d\u043e\u0440\u043c\u044b","\u041e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u044f \u043e\u0442 \u043d\u043e\u0440\u043c\u044b, \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f 14,85 - 95%"],color:["#a1f1e3","#ce575a"]},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430":{numberVerdict:["0,8 - 9,3%","1,3 - 17%","0,8 - 11%","< 6,6%"],textVerdict:["\u0424\u043e\u043b\u0438\u043a\u0443\u043b\u044f\u0440\u043d\u0430\u044f \u0444\u0430\u0437\u0430","\u041e\u0432\u0443\u043b\u044f\u0446\u0438\u044f","\u041b\u044e\u0442\u0435\u0438\u043d\u043e\u0432\u0430\u044f \u0444\u0430\u0437\u0430","\u041c\u0435\u043d\u043e\u043f\u0430\u0443\u0437\u0430"],color:["#a1f1e3"]}},_={numberVerdict:["0 - 3 \u0431\u0430\u043b\u043b\u0430","\u0431\u043e\u043b\u044c\u0448\u0435 4 \u0431\u0430\u043b\u043b\u043e\u0432"],textVerdict:["\u041d\u0438\u0437\u043a\u0438\u0439 \u0440\u0438\u0441\u043a \u0412\u0422\u042d\u041e","\u0412\u044b\u0441\u043e\u043a\u0438\u0439 \u0440\u0438\u0441\u043a \u0412\u0422\u042d\u041e"],color:["#a1f1e3","#ce575a"]},p=function(e){return e>=4?1:0},j=[{id:1,text:"\u0424\u0430\u043a\u0442\u043e\u0440\u044b \u0440\u0438\u0441\u043a\u0430",value:3},{id:2,text:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0440\u0430\u043a (\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043b\u0438 \u043e\u0442\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0442\u0430\u0441\u0442\u0430\u0437\u044b \u0438/\u0438\u043b\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0449\u0438\u0435 \u0445\u0438\u043c\u0438\u043e- \u0438\u043b\u0438 \u0440\u0430\u0434\u0438\u043e\u0442\u0435\u0440\u043f\u0430\u043f\u0438\u044e \u0432 \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 6 \u043c\u0435\u0441)",value:3},{id:3,text:"\u0412\u0422\u042d \u0432 \u0430\u043d\u0430\u043c\u043d\u0435\u0437\u0435 (\u043a\u0440\u043e\u043c\u0435 \u0442\u0440\u043e\u043c\u0431\u043e\u0444\u043b\u0435\u0431\u0438\u0442\u043e\u0432 \u043f\u043e\u0434\u043a\u043e\u0436\u043d\u044b\u0445 \u0432\u0435\u043d)",value:3},{id:4,text:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u0432\u0438\u0436\u043d\u043e\u0441\u0442\u0438 (\u043d\u0435 \u043c\u0435\u043d\u0435\u0435 3 \u0434\u043d\u0435\u0439) ",value:3},{id:5,text:"\u0422\u0440\u043e\u043c\u0431\u043e\u0444\u0438\u043b\u0438\u044f (\u0434\u0435\u0444\u0438\u0446\u0438\u0442 \u0430\u043d\u0442\u0438\u0442\u0440\u043e\u043c\u0431\u0438\u043d\u0430, \u043f\u0440\u043e\u0442\u0435\u0438\u043d\u043e\u0432 C, S, \u043c\u0443\u0442\u0430\u0446\u0438\u044f \u0432 \u0433\u0435\u043d\u0435 \u0444\u0430\u043a\u0442\u043e\u0440\u0430 \u041b\u0435\u0439\u0434\u0435\u043d\u0430, \u043f\u0440\u043e\u0442\u0440\u043e\u043c\u0431\u0438\u043d\u0430 G2021A, \u0430\u043d\u0442\u0438\u0444\u043e\u0441\u0444\u043e\u043b\u0438\u0434\u043d\u044b\u0439 \u0441\u0438\u043d\u0434\u0440\u043e\u043c) ",value:3},{id:6,text:"\u041d\u0435\u0434\u0430\u0432\u043d\u044f\u044f \u0442\u0440\u0430\u0432\u043c\u0430 \u0438/\u0438\u043b\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f (\u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u043c\u0435\u0441\u044f\u0446)",value:2},{id:7,text:"\u041f\u043e\u0436\u0438\u043b\u043e\u0439 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 (>= 70 \u043b\u0435\u0442) ",value:1},{id:8,text:"\u0421\u0435\u0440\u0434\u0435\u0447\u043d\u0430\u044f \u0438\u043b\u0438 \u0434\u044b\u0445\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c ",value:1},{id:9,text:"\u041e\u0418\u041c \u0438\u043b\u0438 \u0438\u0448\u0435\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0438\u043d\u0441\u0443\u043b\u044c\u0442",value:1},{id:10,text:"\u041e\u0441\u0442\u0440\u0430\u044f \u0438\u043d\u0444\u0435\u043a\u0446\u0438\u044f \u0438/\u0438\u043b\u0438 \u0440\u0435\u0432\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043e\u0435 \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u043d\u0438\u0435 ",value:1},{id:11,text:"\u041e\u0436\u0438\u0440\u0435\u043d\u0438\u0435 (\u0418\u041c\u0422 >= 30 \u043a\u0433/\u043c\xb2)",value:1},{id:12,text:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u044e\u0449\u0430\u044f\u0441\u044f \u0442\u0435\u0440\u0430\u043f\u0438\u044f \u043f\u043e\u043b\u043e\u0432\u044b\u043c\u0438 \u0433\u043e\u0440\u043c\u043e\u043d\u0430\u043c\u0438",value:1}],b=[{value:"\u041f\u043e \u043c\u0435\u043d\u0441\u0442\u0440\u0443\u0430\u0446\u0438\u0438"},{value:"\u041f\u043e \u0434\u0430\u0442\u0435 \u0437\u0430\u0447\u0430\u0442\u0438\u044f"}],g=["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u0439","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"],N=function(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n},Z=function(e){return"".concat(e.toLocaleDateString().split("/")[1]," ").concat(g[e.getMonth()]," ").concat(e.toLocaleDateString().split("/")[2])},y=function(e){var t=e.toLocaleDateString().split("/");return"".concat(t[2],"-").concat(1===t[0].length?"0"+t[0]:t[0],"-").concat(1===t[1].length?"0"+t[1]:t[1])},w=function(e){return 1===e?"\u043d\u0435\u0434\u0435\u043b\u044f":e%10===2||e%10===3||e%10===4?"\u043d\u0435\u0434\u0435\u043b\u0438":"\u043d\u0435\u0434\u0435\u043b\u044c"}},942:function(e,t,n){function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return a}})},413:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=100.8847a761.chunk.js.map