(function(e){"use strict";const{metro:n,logger:p,commands:s}=vendetta;n.findByProps("vibrate");const t={},i=[];t.onUnload=function(){return i.every(function(a){return a(),!0})},t.onLoad=function(){i[0]=s.registerCommand({execute:o,name:"vibrate",displayName:"vibrate",description:"b"+"r".repeat(50),displayDescription:"b"+"r".repeat(50),options:[{type:1,name:"preset",displayName:"preset",description:"Run a preset vibration",displayDescription:"Run a preset vibration",options:[{type:3,name:"preset",displayName:"preset",description:"Select a preset to vibrate",displayDescription:"Select a preset to vibrate",choices:[{name:"400ms, 10 times, 50ms delay",displayName:"400ms, 10 times, 50ms delay",value:"400;10;50"},{name:"9999ms, 6969 times, 0ms delay",displayName:"9999ms, 6969 times, 0ms delay",value:"9999;6969;0"}]}]},{type:1,name:"start",displayName:"start",description:"Start a vibration",displayDescription:"Start a vibration",options:[{type:4,name:"duration",displayName:"duration",description:"Duration of one vibration",displayDescription:"Duration of one vibration",min_value:1,max_value:9999},{type:4,name:"repeat",displayName:"repeat",description:"Number of times to repeat",displayDescription:"Number of times to repeat"},{type:4,name:"gap",displayName:"gap",description:"Wait between vibrates (only matters if you have more than 1 repeat)",displayDescription:"Wait between vibrates (only matters if you have more than 1 repeat)"},{type:3,name:"raw_preset",displayName:"raw_preset",description:"Put your custom preset here (duration;repeat;gap)",displayDescription:"Put your custom preset here (duration;repeat;gap)"}]}],inputType:1,type:1})};function o(a,m){return new Map(a.map(function(r){return[r.name,r]})),{content:"helo from exeCute"}}return e.default=t,Object.defineProperty(e,"__esModule",{value:!0}),e})({});
