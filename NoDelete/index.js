(function(i){"use strict";const{React:s,ReactNative:l}=vendetta.metro.common,{plugin:{storage:t},storage:{useProxy:d},ui:{components:{Forms:m}}}=vendetta;"timestamps"in t||(t.timestamps=!1);const{FormRow:c,FormSection:h,FormSwitch:u}=m;function p(n){return d(t),s.createElement(l.ScrollView,{style:{flex:1}},[{label:"Show the time of deletion",default:!1,id:"timestamps"},{label:"The plugin does not keep the messages you've deleted"}].map(function(e){return s.createElement(c,{label:e.label,trailing:"id"in e?s.createElement(u,{value:t[e.id]??e.default,onValueChange:function(a){return t[e.id]=a}}):void 0})}))}const r={settings:p},{plugin:{storage:f},patcher:{before:g}}=vendetta;let o=[];return r.onLoad=function(){return r.onUnload=g("dispatch",vendetta.metro.common.FluxDispatcher,function(n){const[e]=n;if(e.type==="MESSAGE_DELETE"){if(o.includes(e.id))return delete o[o.indexOf(e.id)],n;o.push(e.id);let a="This message was deleted.";return f.timestamps&&(a+=` (${vendetta.metro.common.moment(new Date).toLocaleString()})`),n[0]={type:"MESSAGE_EDIT_FAILED_AUTOMOD",messageData:{type:1,message:{channelId:e.channelId,messageId:e.id}},errorResponseBody:{code:2e5,message:a}},n}})},i.default=r,Object.defineProperty(i,"__esModule",{value:!0}),i})({});
