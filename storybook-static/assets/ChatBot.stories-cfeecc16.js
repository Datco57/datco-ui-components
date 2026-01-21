import{a as e,c as p,j as i}from"./utils-14f1029f.js";import{r as o}from"./index-49dd5b96.js";import{B as ne}from"./Button-ca7e4a9c.js";import{I as ae}from"./Input-a781cec9.js";import"./_commonjsHelpers-de833af9.js";import"./index-bf7d13df.js";import"./index-65e79f52.js";import"./index-3a35a76c.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),re=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase()),O=s=>{const t=re(s);return t.charAt(0).toUpperCase()+t.slice(1)},J=(...s)=>s.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim(),ie=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var oe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=o.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:C="",children:u,iconNode:c,...l},d)=>o.createElement("svg",{ref:d,...oe,width:t,height:t,stroke:s,strokeWidth:a?Number(n)*24/Number(t):n,className:J("lucide",C),...!u&&!ie(l)&&{"aria-hidden":"true"},...l},[...c.map(([h,D])=>o.createElement(h,D)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(s,t)=>{const n=o.forwardRef(({className:a,...C},u)=>o.createElement(le,{ref:u,iconNode:t,className:J(`lucide-${ue(O(s))}`,`lucide-${s}`,a),...C}));return n.displayName=O(s),n};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],me=M("message-circle",Ce);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],de=M("send",ce);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ge=M("x",pe),x=o.forwardRef(({className:s,size:t="md",...n},a)=>e("div",{ref:a,className:p("rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0",{sm:"w-8 h-8",md:"w-12 h-12",lg:"w-16 h-16"}[t],s),...n,children:e("span",{className:"text-white font-bold text-sm",children:"V"})}));x.displayName="ChatBotAvatar";try{x.displayName="ChatBotAvatar",x.__docgenInfo={description:"",displayName:"ChatBotAvatar",props:{size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'},{value:'"md"'}]}}}}}catch{}const E=o.forwardRef(({message:s,isUser:t=!1,timestamp:n},a)=>i("div",{ref:a,className:p("flex gap-3 mb-4",t?"flex-row-reverse":"flex-row"),children:[!t&&e(x,{size:"sm"}),i("div",{className:p("flex flex-col",t?"items-end":"items-start"),children:[e("div",{className:p("rounded-lg px-4 py-2 max-w-[280px]",t?"bg-blue-600 text-white":"bg-gray-100 text-gray-900"),children:e("p",{className:"text-sm whitespace-pre-wrap break-words",children:s})}),n&&e("span",{className:"text-xs text-gray-500 mt-1 px-1",children:n})]})]}));E.displayName="ChatBotMessage";try{E.displayName="ChatBotMessage",E.__docgenInfo={description:"",displayName:"ChatBotMessage",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},isUser:{defaultValue:{value:"false"},description:"",name:"isUser",required:!1,type:{name:"boolean"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!1,type:{name:"string"}}}}}catch{}const m=o.forwardRef(({open:s=!1,onOpenChange:t,title:n="DAT-V Assistant",welcomeMessage:a=`안녕하세요 DAT-V 어시스턴트입니다.
무엇을 도와드릴까요?`,quickActions:C=["오늘 우리 회사 매출 현황 좀 알려줘요."],onSendMessage:u,messages:c,className:l},d)=>{const[h,D]=o.useState([]),[B,_]=o.useState(""),T=o.useRef(null),S=c||h,Y=()=>{var r;(r=T.current)==null||r.scrollIntoView({behavior:"smooth"})};o.useEffect(()=>{Y()},[S]);const k=()=>{if(!B.trim())return;const r={id:Date.now().toString(),text:B,isUser:!0,timestamp:new Date().toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"})};c?u==null||u(B):D(f=>[...f,r]),_("")},ee=r=>{const f={id:Date.now().toString(),text:r,isUser:!0,timestamp:new Date().toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"})};c?u==null||u(r):D(se=>[...se,f])},te=r=>{r.key==="Enter"&&!r.shiftKey&&(r.preventDefault(),k())};return s?i("div",{ref:d,className:p("absolute bottom-6 right-6 w-[400px] h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50",l),children:[i("div",{className:"flex items-center justify-between p-4 border-b",children:[e("h2",{className:"text-lg font-semibold",children:n}),e("button",{onClick:()=>t==null?void 0:t(!1),className:"text-gray-500 hover:text-gray-700 transition-colors",children:e(ge,{className:"w-5 h-5"})})]}),i("div",{className:"flex-1 overflow-y-auto p-4",children:[i("div",{className:"flex gap-3 mb-6",children:[e(x,{}),e("div",{className:"flex-1 bg-gray-100 rounded-lg p-3",children:e("p",{className:"text-sm text-gray-900 whitespace-pre-wrap",children:a})})]}),S.length===0&&C.length>0&&e("div",{className:"space-y-2 mb-4",children:C.map((r,f)=>e("button",{onClick:()=>ee(r),className:"w-full bg-gray-900 text-white text-sm px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-left",children:r},f))}),S.map(r=>e(E,{message:r.text,isUser:r.isUser,timestamp:r.timestamp},r.id)),e("div",{ref:T})]}),e("div",{className:"p-4 border-t",children:i("div",{className:"flex gap-2",children:[e(ae,{value:B,onChange:r=>_(r.target.value),onKeyPress:te,placeholder:"메세지를 입력하세요.",className:"flex-1"}),e(ne,{onClick:k,size:"icon",className:"flex-shrink-0",disabled:!B.trim(),children:e(de,{className:"w-4 h-4"})})]})})]}):null});m.displayName="ChatBot";try{m.displayName="ChatBot",m.__docgenInfo={description:"",displayName:"ChatBot",props:{open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},title:{defaultValue:{value:"DAT-V Assistant"},description:"",name:"title",required:!1,type:{name:"string"}},welcomeMessage:{defaultValue:{value:`안녕하세요 DAT-V 어시스턴트입니다.
무엇을 도와드릴까요?`},description:"",name:"welcomeMessage",required:!1,type:{name:"string"}},quickActions:{defaultValue:{value:"['오늘 우리 회사 매출 현황 좀 알려줘요.']"},description:"",name:"quickActions",required:!1,type:{name:"string[]"}},onSendMessage:{defaultValue:null,description:"",name:"onSendMessage",required:!1,type:{name:"((message: string) => void)"}},messages:{defaultValue:null,description:"",name:"messages",required:!1,type:{name:"Message[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const g=o.forwardRef(({className:s,position:t="bottom-right",...n},a)=>i("button",{ref:a,className:p("fixed z-50 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex flex-col items-center justify-center gap-0.5",{"bottom-right":"bottom-6 right-6","bottom-left":"bottom-6 left-6"}[t],s),...n,children:[e(me,{className:"w-5 h-5"}),e("span",{className:"text-[10px] font-bold leading-none",children:"DAT-V"})]}));g.displayName="ChatBotTrigger";try{g.displayName="ChatBotTrigger",g.__docgenInfo={description:"",displayName:"ChatBotTrigger",props:{position:{defaultValue:{value:"bottom-right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom-right"'},{value:'"bottom-left"'}]}}}}}catch{}const Ne={title:"Components/ChatBot",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{title:{control:"text",description:"챗봇 헤더 타이틀"},welcomeMessage:{control:"text",description:"환영 메시지"},quickActions:{control:"object",description:"퀵 액션 버튼 목록"}}},b={parameters:{docs:{story:{inline:!1,iframeHeight:700}}},render:()=>{const[s,t]=o.useState(!0);return i("div",{className:"min-h-[700px] bg-gray-50 p-8 relative",children:[i("div",{className:"max-w-4xl mx-auto",children:[e("h1",{className:"text-2xl font-bold mb-4",children:"DAT-V 챗봇 데모"}),e("p",{className:"text-gray-600 mb-8",children:"우측 하단의 챗봇을 확인하세요. 메시지를 입력하거나 퀵 액션 버튼을 클릭할 수 있습니다."})]}),e(m,{open:s,onOpenChange:t})]})}},v={parameters:{docs:{story:{inline:!1,iframeHeight:700}}},render:()=>{const[s,t]=o.useState(!1);return i("div",{className:"min-h-[700px] bg-gray-50 p-8 relative",children:[i("div",{className:"max-w-4xl mx-auto",children:[e("h1",{className:"text-2xl font-bold mb-4",children:"플로팅 버튼으로 챗봇 열기"}),e("p",{className:"text-gray-600 mb-8",children:"우측 하단의 플로팅 버튼을 클릭하여 챗봇을 열 수 있습니다."})]}),e(g,{onClick:()=>t(!0)}),e(m,{open:s,onOpenChange:t})]})}},y={parameters:{docs:{story:{inline:!1,iframeHeight:700}}},render:()=>{const[s,t]=o.useState(!0),[n,a]=o.useState([{id:"1",text:"오늘 우리 회사 매출 현황 좀 알려줘요.",isUser:!0,timestamp:"14:30"},{id:"2",text:`오늘 매출 현황을 확인해드리겠습니다.

현재까지 총 매출: 1,234,567원
전일 대비: +12.5%
목표 달성률: 87.3%`,isUser:!1,timestamp:"14:30"},{id:"3",text:"감사합니다!",isUser:!0,timestamp:"14:31"}]);return i("div",{className:"min-h-[700px] bg-gray-50 p-8 relative",children:[i("div",{className:"max-w-4xl mx-auto",children:[e("h1",{className:"text-2xl font-bold mb-4",children:"대화 중인 챗봇"}),e("p",{className:"text-gray-600 mb-8",children:"메시지를 입력하면 자동으로 응답이 생성됩니다."})]}),e(m,{open:s,onOpenChange:t,messages:n,onSendMessage:u=>{const c={id:Date.now().toString(),text:u,isUser:!0,timestamp:new Date().toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"})};a(l=>[...l,c]),setTimeout(()=>{const l={id:(Date.now()+1).toString(),text:"답변을 생성하고 있습니다...",isUser:!1,timestamp:new Date().toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"})};a(d=>[...d,l])},1e3)}})]})}},N={parameters:{docs:{story:{inline:!1,iframeHeight:700}}},render:()=>{const[s,t]=o.useState(!0);return i("div",{className:"min-h-[700px] bg-gray-50 p-8 relative",children:[i("div",{className:"max-w-4xl mx-auto",children:[e("h1",{className:"text-2xl font-bold mb-4",children:"커스텀 환영 메시지"}),e("p",{className:"text-gray-600 mb-8",children:"환영 메시지와 퀵 액션을 커스터마이징할 수 있습니다."})]}),e(m,{open:s,onOpenChange:t,title:"고객 지원 챗봇",welcomeMessage:"안녕하세요! 고객 지원팀입니다.\\n무엇을 도와드릴까요?",quickActions:["주문 상태를 확인하고 싶어요","반품/교환 문의","배송 문의"]})]})}},w={parameters:{docs:{story:{inline:!1,iframeHeight:700}}},render:()=>{const[s,t]=o.useState(!1);return i("div",{className:"min-h-[700px] bg-gray-50 p-8 relative",children:[i("div",{className:"max-w-4xl mx-auto",children:[e("h1",{className:"text-2xl font-bold mb-4",children:"왼쪽 하단 위치"}),e("p",{className:"text-gray-600 mb-8",children:"챗봇을 왼쪽 하단에 배치할 수 있습니다."})]}),e(g,{position:"bottom-left",onClick:()=>t(!0)}),e(m,{open:s,onOpenChange:t,className:"left-6 right-auto"})]})}},A={parameters:{docs:{story:{inline:!1,iframeHeight:700}}},render:()=>{const[s,t]=o.useState(!1),[n,a]=o.useState([]);return i("div",{className:"min-h-[700px] bg-gradient-to-br from-blue-50 to-purple-50 p-8 relative",children:[i("div",{className:"max-w-4xl mx-auto",children:[e("h1",{className:"text-3xl font-bold mb-4 text-gray-900",children:"DAT-V AI Assistant"}),e("p",{className:"text-gray-600 mb-4",children:"인터랙티브 챗봇 데모입니다. 다음을 시도해보세요:"}),i("ul",{className:"list-disc list-inside text-gray-600 space-y-2 mb-8",children:[e("li",{children:'"안녕하세요" 라고 인사해보세요'}),e("li",{children:'"매출" 관련 질문을 해보세요'}),e("li",{children:"퀵 액션 버튼을 클릭해보세요"})]})]}),e(g,{onClick:()=>t(!0)}),e(m,{open:s,onOpenChange:t,messages:n,onSendMessage:u=>{const c={id:Date.now().toString(),text:u,isUser:!0,timestamp:new Date().toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"})};a(l=>[...l,c]),setTimeout(()=>{let l="죄송합니다. 이해하지 못했습니다.";u.includes("매출")?l=`매출 현황을 확인해드리겠습니다.

오늘 매출: 1,234,567원
전일 대비: +12.5%`:u.includes("안녕")||u.includes("hello")?l="안녕하세요! 무엇을 도와드릴까요?":u.includes("감사")&&(l="천만에요! 더 도와드릴 것이 있으신가요?");const d={id:(Date.now()+1).toString(),text:l,isUser:!1,timestamp:new Date().toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit"})};a(h=>[...h,d])},800)}})]})}};var V,R,U;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="min-h-[700px] bg-gray-50 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">DAT-V 챗봇 데모</h1>
          <p className="text-gray-600 mb-8">
            우측 하단의 챗봇을 확인하세요. 메시지를 입력하거나 퀵 액션 버튼을 클릭할 수 있습니다.
          </p>
        </div>
        <ChatBot open={open} onOpenChange={setOpen} />
      </div>;
  }
}`,...(U=(R=b.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var q,L,I;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="min-h-[700px] bg-gray-50 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">플로팅 버튼으로 챗봇 열기</h1>
          <p className="text-gray-600 mb-8">
            우측 하단의 플로팅 버튼을 클릭하여 챗봇을 열 수 있습니다.
          </p>
        </div>
        <ChatBotTrigger onClick={() => setOpen(true)} />
        <ChatBot open={open} onOpenChange={setOpen} />
      </div>;
  }
}`,...(I=(L=v.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var K,H,F;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    const [messages, setMessages] = useState<Message[]>([{
      id: '1',
      text: '오늘 우리 회사 매출 현황 좀 알려줘요.',
      isUser: true,
      timestamp: '14:30'
    }, {
      id: '2',
      text: '오늘 매출 현황을 확인해드리겠습니다.\\n\\n현재까지 총 매출: 1,234,567원\\n전일 대비: +12.5%\\n목표 달성률: 87.3%',
      isUser: false,
      timestamp: '14:30'
    }, {
      id: '3',
      text: '감사합니다!',
      isUser: true,
      timestamp: '14:31'
    }]);
    const handleSendMessage = (message: string) => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        isUser: true,
        timestamp: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      setMessages(prev => [...prev, newMessage]);
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: '답변을 생성하고 있습니다...',
          isUser: false,
          timestamp: new Date().toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    };
    return <div className="min-h-[700px] bg-gray-50 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">대화 중인 챗봇</h1>
          <p className="text-gray-600 mb-8">
            메시지를 입력하면 자동으로 응답이 생성됩니다.
          </p>
        </div>
        <ChatBot open={open} onOpenChange={setOpen} messages={messages} onSendMessage={handleSendMessage} />
      </div>;
  }
}`,...(F=(H=y.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var j,z,W;N.parameters={...N.parameters,docs:{...(j=N.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="min-h-[700px] bg-gray-50 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">커스텀 환영 메시지</h1>
          <p className="text-gray-600 mb-8">
            환영 메시지와 퀵 액션을 커스터마이징할 수 있습니다.
          </p>
        </div>
        <ChatBot open={open} onOpenChange={setOpen} title="고객 지원 챗봇" welcomeMessage="안녕하세요! 고객 지원팀입니다.\\n무엇을 도와드릴까요?" quickActions={['주문 상태를 확인하고 싶어요', '반품/교환 문의', '배송 문의']} />
      </div>;
  }
}`,...(W=(z=N.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var P,$,Z;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="min-h-[700px] bg-gray-50 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">왼쪽 하단 위치</h1>
          <p className="text-gray-600 mb-8">
            챗봇을 왼쪽 하단에 배치할 수 있습니다.
          </p>
        </div>
        <ChatBotTrigger position="bottom-left" onClick={() => setOpen(true)} />
        <ChatBot open={open} onOpenChange={setOpen} className="left-6 right-auto" />
      </div>;
  }
}`,...(Z=($=w.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};var Q,X,G;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const handleSendMessage = (message: string) => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: message,
        isUser: true,
        timestamp: new Date().toLocaleTimeString('ko-KR', {
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      setMessages(prev => [...prev, userMessage]);
      setTimeout(() => {
        let responseText = '죄송합니다. 이해하지 못했습니다.';
        if (message.includes('매출')) {
          responseText = '매출 현황을 확인해드리겠습니다.\\n\\n오늘 매출: 1,234,567원\\n전일 대비: +12.5%';
        } else if (message.includes('안녕') || message.includes('hello')) {
          responseText = '안녕하세요! 무엇을 도와드릴까요?';
        } else if (message.includes('감사')) {
          responseText = '천만에요! 더 도와드릴 것이 있으신가요?';
        }
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          isUser: false,
          timestamp: new Date().toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
          })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 800);
    };
    return <div className="min-h-[700px] bg-gradient-to-br from-blue-50 to-purple-50 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            DAT-V AI Assistant
          </h1>
          <p className="text-gray-600 mb-4">
            인터랙티브 챗봇 데모입니다. 다음을 시도해보세요:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
            <li>"안녕하세요" 라고 인사해보세요</li>
            <li>"매출" 관련 질문을 해보세요</li>
            <li>퀵 액션 버튼을 클릭해보세요</li>
          </ul>
        </div>
        <ChatBotTrigger onClick={() => setOpen(true)} />
        <ChatBot open={open} onOpenChange={setOpen} messages={messages} onSendMessage={handleSendMessage} />
      </div>;
  }
}`,...(G=(X=A.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};const we=["Default","WithTriggerButton","WithMessages","CustomWelcomeMessage","LeftPosition","InteractiveDemo"];export{N as CustomWelcomeMessage,b as Default,A as InteractiveDemo,w as LeftPosition,y as WithMessages,v as WithTriggerButton,we as __namedExportsOrder,Ne as default};
