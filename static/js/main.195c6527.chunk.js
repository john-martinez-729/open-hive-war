(this["webpackJsonpopen-hive-war"]=this["webpackJsonpopen-hive-war"]||[]).push([[0],{44:function(e,t,a){},46:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),i=a(11),o=a.n(i),n=(a(44),a(2)),r=a(7),d=a(18),l=a(19),j=a(33),m=a(32),b=a(54),h=a(55),p=a(56),u=a(57),v=a(58),O=(a(45),{card1:a.p+"static/media/1.ea2580d1.jpg",card2:a.p+"static/media/2.2acad624.jpg",card3:a.p+"static/media/3.b6b07230.jpg",card4:a.p+"static/media/4.2408c565.jpg",card5:a.p+"static/media/5.a27cd4d9.jpg",card6:a.p+"static/media/6.431213b4.jpg",card7:a.p+"static/media/7.40bd6065.jpg",card8:a.p+"static/media/8.7603d529.jpg",card9:a.p+"static/media/9.2f874eff.jpg",card10:a.p+"static/media/10.b541c3b4.jpg",card11:a.p+"static/media/11.ec3720c5.jpg",card12:a.p+"static/media/12.1c488634.jpg"}),f={card1:a.p+"static/media/1.f83533e1.jpg",card2:a.p+"static/media/2.1e036853.jpg",card3:a.p+"static/media/3.3f863c05.jpg",card4:a.p+"static/media/4.431534c5.jpg",card5:a.p+"static/media/5.dd09d405.jpg",card6:a.p+"static/media/6.7441ff47.jpg",card7:a.p+"static/media/7.c30fe9fc.jpg",card8:a.p+"static/media/8.55309264.jpg",card9:a.p+"static/media/9.b61b0721.jpg",card10:a.p+"static/media/10.ff5cf0a2.jpg",card11:a.p+"static/media/11.0a77f1fa.jpg",card12:a.p+"static/media/12.dcf366e6.jpg"},x={card1:a.p+"static/media/1.747602ce.jpg",card2:a.p+"static/media/2.6dd74838.jpg",card3:a.p+"static/media/3.d5acb569.jpg",card4:a.p+"static/media/4.c7844a44.jpg",card5:a.p+"static/media/5.8e5360cf.jpg",card6:a.p+"static/media/6.1de1c795.jpg",card7:a.p+"static/media/7.8e498cea.jpg",card8:a.p+"static/media/8.7e2ebdfb.jpg",card9:a.p+"static/media/9.51862e3b.jpg",card10:a.p+"static/media/10.b48bffc4.jpg",card11:a.p+"static/media/11.1b96d268.jpg",card12:a.p+"static/media/12.fc67ab28.jpg"},g={card1:a.p+"static/media/1.26ae2351.jpg",card2:a.p+"static/media/2.56507dfb.jpg",card3:a.p+"static/media/3.9eac4a09.jpg",card4:a.p+"static/media/4.c0a87b48.jpg",card5:a.p+"static/media/5.e9be8259.jpg",card6:a.p+"static/media/6.c7b39c35.jpg",card7:a.p+"static/media/7.7deea902.jpg",card8:a.p+"static/media/8.8a06829f.jpg",card9:a.p+"static/media/9.89048173.jpg",card10:a.p+"static/media/10.60e88428.jpg",card11:a.p+"static/media/11.146b3f9e.jpg",card12:a.p+"static/media/12.672b415e.jpg"},N={card1:a.p+"static/media/1.ed66bc7d.jpg",card2:a.p+"static/media/2.b4d51a8b.jpg",card3:a.p+"static/media/3.193bbd47.jpg"},y=a(35),w=(a(46),a(1)),C=["Ambush","Backstab (Reinforcements)","Backstab","Beatdown (Reinforcements)","Beatdown","Dome Rush","Free for All","Home Turf","In your Face","Sniping Range","Stand-off (Reinforcements)","Stand-Off"],k=["Blaze of Glory","Finish them Off","Got it Covered","Kidnap Job","Loot their Corpses","Sabotage","Search the Area","Settle a Score","The Challenge","The Hit","The Package","Wipe them Out"],B=["A Lesson in Pain","Burn them Out","Critter Hunt","Escape the Dome","Flank 'em","Killbox","King of the Hive","Last Gang Standing","Rush 'em","Survival of the Meanest","Tunnel Clash","Turf War"],S=["Ammo Shortage","Falling Debris","Gas Leak","Hive Critters","Hive Plague","Horrors in the Dark","Lair of the Beast","Pitch Black","Poisoned Air","Radioactive Rain","Rotten Walls","Unstable Ground"],A=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(d.a)(this,a),(c=t.call(this,e)).loadFromUrl=function(){var e=window.location.search.split("?mission=")[1].split("-");c.setState({deployment:e[0],perils:e[1],objective:e[2],lootA:e[3],lootB:e[4]})},c.randNumb=function(){return Math.floor(12*Math.random())+1},c.generateMission=function(){c.setState({deployment:c.randNumb(),perils:c.randNumb(),objective:c.randNumb(),lootA:c.randNumb(),lootB:c.randNumb(),lootAHidden:!0,lootBHidden:!0},(function(){return window.history.pushState("","Open Hive War","/open-hive-war?mission=".concat(c.state.deployment,"-").concat(c.state.perils,"-").concat(c.state.objective,"-").concat(c.state.lootA,"-").concat(c.state.lootB))}))},c.selectCard=function(e,t){c.setState(Object(r.a)({},e,t),(function(){return c.setNewSearch(e,t)}))},c.setNewSearch=function(e,t){var a=window.location.search.split("?mission=")[1].split("-");"deployment"==e?a[0]=t:"perils"==e?a[1]=t:"objective"==e?a[2]=t:"lootA"==e?a[3]=t:"lootB"==e&&(a[4]=t),window.history.pushState("","Open Hive War","/open-hive-war?mission=".concat(a[0],"-").concat(a[1],"-").concat(a[2],"-").concat(a[3],"-").concat(a[4]))},c.randomCard=function(e){var t=c.randNumb();c.setState(Object(r.a)({},e,t),(function(){return c.setNewSearch(e,t)}))},c.reveal=function(e){"lootA"==e?c.setState({lootAHidden:!1,lootBHidden:!0}):c.setState({lootAHidden:!0,lootBHidden:!1})},c.hide=function(){c.setState({lootAHidden:!0,lootBHidden:!0})},c.toggleShowInstructions=function(){c.setState({showInstructions:!c.state.showInstructions})},c.showModal=function(e){c.setState({modal:Object(n.a)(Object(n.a)({},c.state.modal),{},{visible:!0,cardType:e})})},c.hideModal=function(){c.setState({modal:Object(n.a)(Object(n.a)({},c.state.modal),{},{visible:!1,cardType:""})})},c.copyToClipboard=function(){navigator.clipboard.writeText(window.location.href),c.setState({showAlert:!0},(function(){return setTimeout((function(){c.setState({showAlert:!1})}),3e3)}))},c.instructions=function(){var e=c.state.showInstructions;return Object(w.jsxs)(b.a,{className:"card-row",children:[Object(w.jsxs)("h3",{className:"instructions-h3",children:["Instructions"," ",Object(w.jsx)(h.a,{size:"sm",className:"show-btn",onClick:c.toggleShowInstructions,children:e?Object(w.jsx)(y.b,{}):Object(w.jsx)(y.a,{})})]}),Object(w.jsx)("div",{className:"card-col",id:e?"":"hidden",children:Object(w.jsx)("div",{className:"card-box",children:Object(w.jsx)(p.a,{className:"card",id:"instruction",src:N.card1})})}),Object(w.jsx)("div",{className:"card-col",id:e?"":"hidden",children:Object(w.jsx)("div",{className:"card-box",children:Object(w.jsx)(p.a,{className:"card",id:"instruction",src:N.card2})})}),Object(w.jsx)("div",{className:"card-col",id:e?"":"hidden",children:Object(w.jsx)("div",{className:"card-box",children:Object(w.jsx)(p.a,{className:"card",id:"instruction",src:N.card3})})})]})},c.objective=function(){if(c.state.objective){var e="card".concat(c.state.objective);return Object(w.jsxs)("div",{className:"card-col",children:[Object(w.jsx)("h3",{children:"Objective"}),Object(w.jsxs)("div",{className:"card-box",children:[Object(w.jsxs)("div",{className:"overlay",id:"objective",children:[Object(w.jsx)(h.a,{onClick:function(){return c.randomCard("objective")},className:"overlay-btn",size:"sm",children:"Random"}),Object(w.jsx)(h.a,{className:"overlay-btn",size:"sm",onClick:function(){return c.showModal("objective")},children:"Choose"})]}),Object(w.jsx)(p.a,{className:"card",id:"objective",src:x[e]})]})]})}},c.deployment=function(){if(c.state.deployment){var e="card".concat(c.state.deployment);return Object(w.jsxs)("div",{className:"card-col",children:[Object(w.jsx)("h3",{children:"Deployment"}),Object(w.jsxs)("div",{className:"card-box",children:[Object(w.jsxs)("div",{className:"overlay",id:"deployment",children:[Object(w.jsx)(h.a,{onClick:function(){return c.randomCard("deployment")},className:"overlay-btn",size:"sm",children:"Random"}),Object(w.jsx)(h.a,{className:"overlay-btn",size:"sm",onClick:function(){return c.showModal("deployment")},children:"Choose"})]}),Object(w.jsx)(p.a,{className:"card",id:"deployment",src:O[e]})]})]})}},c.perils=function(){if(c.state.perils){var e="card".concat(c.state.perils);return Object(w.jsxs)("div",{className:"card-col",children:[Object(w.jsx)("h3",{children:"Perils"}),Object(w.jsxs)("div",{className:"card-box",children:[Object(w.jsxs)("div",{className:"overlay",id:"perils",children:[Object(w.jsx)(h.a,{onClick:function(){return c.randomCard("perils")},className:"overlay-btn",size:"sm",children:"Random"}),Object(w.jsx)(h.a,{className:"overlay-btn",size:"sm",onClick:function(){return c.showModal("perils")},children:"Choose"})]}),Object(w.jsx)(p.a,{className:"card",id:"perils",src:f[e]})]})]})}},c.lootA=function(){if(c.state.lootA){var e="card".concat(c.state.lootA);return c.state.lootAHidden?Object(w.jsxs)("div",{className:"card-col",children:[Object(w.jsx)("h3",{children:"Player 1's Loot"}),Object(w.jsxs)("div",{className:"card-box",children:[Object(w.jsx)("div",{className:"hidden-card",id:"loot",children:Object(w.jsx)(h.a,{onClick:function(){return c.reveal("lootA")},className:"overlay-btn",size:"sm",children:"Reveal"})}),Object(w.jsx)("div",{className:"card",id:"loot"})]})]}):Object(w.jsxs)("div",{className:"card-col",children:[Object(w.jsx)("h3",{children:"Player 1's Loot"}),Object(w.jsxs)("div",{className:"card-box",children:[Object(w.jsxs)("div",{className:"overlay",id:"loot",children:[Object(w.jsx)(h.a,{onClick:function(){return c.randomCard("lootA")},className:"overlay-btn",size:"sm",children:"Random"}),Object(w.jsx)(h.a,{className:"overlay-btn",size:"sm",onClick:function(){return c.showModal("lootA")},children:"Choose"}),Object(w.jsx)(h.a,{onClick:c.hide,className:"overlay-btn",size:"sm",children:"Hide"})]}),Object(w.jsx)(p.a,{className:"card",id:"loot",src:g[e]})]})]})}},c.lootB=function(){if(c.state.lootB){var e="card".concat(c.state.lootB);return c.state.lootBHidden?Object(w.jsxs)("div",{className:"card-col",children:[Object(w.jsx)("h3",{children:"Player 2's Loot"}),Object(w.jsxs)("div",{className:"card-box",children:[Object(w.jsx)("div",{className:"hidden-card",id:"loot",children:Object(w.jsx)(h.a,{onClick:function(){return c.reveal("lootB")},className:"overlay-btn",size:"sm",children:"Reveal"})}),Object(w.jsx)("div",{className:"card",id:"loot"})]})]}):Object(w.jsxs)("div",{className:"card-col",children:[Object(w.jsx)("h3",{children:"Player 2's Loot"}),Object(w.jsxs)("div",{className:"card-box",children:[Object(w.jsxs)("div",{className:"overlay",id:"loot",children:[Object(w.jsx)(h.a,{onClick:function(){return c.randomCard("lootB")},className:"overlay-btn",size:"sm",children:"Random"}),Object(w.jsx)(h.a,{className:"overlay-btn",size:"sm",onClick:function(){return c.showModal("lootB")},children:"Choose"}),Object(w.jsx)(h.a,{onClick:c.hide,className:"overlay-btn",size:"sm",children:"Hide"})]}),Object(w.jsx)(p.a,{className:"card",id:"loot",src:g[e]})]})]})}},c.footer=function(){return Object(w.jsxs)("div",{className:"footer",children:["Created by"," ",Object(w.jsx)("a",{target:"_blank",href:"https://www.instagram.com/buttcheeksio/?hl=en",children:"John Martinez"}),", "," cards by TopsyKretts"]})},c.modal=function(){var e,t=c.state.modal,a=t.visible,s=t.cardType,i=[];return"lootA"==s?(e="Loot A",i=k):"lootB"==s?(e="Loot B",i=k):"deployment"==s?(e="Deployment",i=C):"objective"==s?(e="Objective",i=B):"perils"==s&&(e="Perils",i=S),Object(w.jsxs)(u.a,{show:a,onHide:c.hideModal,backdrop:"static",children:[Object(w.jsx)(u.a.Header,{closeButton:!0,children:Object(w.jsx)(u.a.Title,{children:e})}),Object(w.jsx)(u.a.Body,{children:i.map((function(e,t){return c.renderOptionSelect(e,t)}))}),Object(w.jsx)(u.a.Footer,{children:Object(w.jsx)(h.a,{variant:"secondary",onClick:c.hideModal,children:"Close"})})]})},c.renderOptionSelect=function(e,t){var a=c.state.modal.cardType,s=c.state[a]==t+1;return Object(w.jsx)("div",{onClick:function(){return c.selectCard(a,t+1)},className:"option-select",id:s?"selected":"",children:e},"selectOption - ".concat(e," - ").concat(t))},c.shareBtn=function(){return Object(w.jsx)(h.a,{className:"share-btn",onClick:c.copyToClipboard,children:Object(w.jsx)(y.c,{})})},c.alert=function(){return Object(w.jsx)(v.a,{className:"alert",dismissible:!0,transition:!0,show:c.state.showAlert,onClose:function(){return c.setState({showAlert:!1})},children:"Copied link to clipboard!"})},c.state={deployment:0,perils:0,objective:0,lootA:0,lootB:0,modal:{visible:!1,cardType:""},lootAHidden:!0,lootBHidden:!0,showAlert:!1,showInstructions:!0},c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.location.search&&window.location.search.includes("mission")&&this.loadFromUrl()}},{key:"render",value:function(){return Object(w.jsxs)("div",{className:"App",children:[this.alert(),this.shareBtn(),this.modal(),Object(w.jsx)("h1",{className:"title",children:"Open Hive War Mission Generator"}),Object(w.jsx)(b.a,{className:"gen-btn-row",children:Object(w.jsx)(h.a,{className:"gen-btn",onClick:this.generateMission,children:"Generate Mission"})}),this.instructions(),Object(w.jsxs)(b.a,{className:"card-row",children:[this.deployment(),this.objective(),this.perils()]}),Object(w.jsxs)(b.a,{className:"card-row",children:[this.lootA(),this.lootB()]}),this.footer()]})}}]),a}(s.a.Component),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),i(e),o(e)}))};o.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(A,{})}),document.getElementById("root")),H()}},[[51,1,2]]]);
//# sourceMappingURL=main.195c6527.chunk.js.map