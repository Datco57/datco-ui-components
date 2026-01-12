import{j as a,c as v,a as e}from"./utils-14f1029f.js";import{r as n}from"./index-49dd5b96.js";import{L as u}from"./Label-c15685ef.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";import"./index-bf7d13df.js";import"./index-65e79f52.js";import"./index-3a35a76c.js";const s=n.forwardRef(({options:o,value:d,onValueChange:l,placeholder:i="선택하세요...",emptyMessage:p="결과가 없습니다.",emptyText:C,disabled:c=!1,className:re},se)=>{var E;const[N,k]=n.useState(!1),[L,A]=n.useState(""),[m,oe]=n.useState(d||""),S=o.filter(r=>r.label.toLowerCase().includes(L.toLowerCase())),le=r=>{const V=r===m?"":r;oe(V),l==null||l(V),k(!1),A("")},ue=C||p;return a("div",{ref:se,className:v("relative",re),children:[a("button",{type:"button",onClick:()=>!c&&k(!N),disabled:c,className:"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",children:[e("span",{children:m?(E=o.find(r=>r.value===m))==null?void 0:E.label:i}),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:v("ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform",N&&"rotate-180"),children:e("polyline",{points:"6 9 12 15 18 9"})})]}),N&&a("div",{className:"absolute top-full z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",children:[e("div",{className:"p-2",children:e("input",{type:"text",value:L,onChange:r=>A(r.target.value),placeholder:"검색...",className:"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"})}),e("div",{className:"max-h-[300px] overflow-y-auto p-1",children:S.length===0?e("div",{className:"py-6 text-center text-sm",children:ue}):S.map(r=>a("div",{onClick:()=>le(r.value),className:v("relative flex cursor-pointer select-none items-center rounded-sm px-2 py-3 text-sm outline-none hover:bg-accent hover:text-accent-foreground",m===r.value&&"bg-accent text-accent-foreground"),children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:v("mr-2 h-4 w-4",m===r.value?"opacity-100":"opacity-0"),children:e("polyline",{points:"20 6 9 17 4 12"})}),r.label]},r.value))})]})]})});s.displayName="Combobox";try{s.displayName="Combobox",s.__docgenInfo={description:"",displayName:"Combobox",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ComboboxOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string) => void)"}},placeholder:{defaultValue:{value:"선택하세요..."},description:"",name:"placeholder",required:!1,type:{name:"string"}},emptyMessage:{defaultValue:{value:"결과가 없습니다."},description:"",name:"emptyMessage",required:!1,type:{name:"string"}},emptyText:{defaultValue:null,description:"",name:"emptyText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const be={title:"Components/Combobox",component:s,parameters:{layout:"centered"},tags:["autodocs"]},t=[{value:"next",label:"Next.js"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],b={render:()=>e("div",{className:"w-[300px]",children:e(s,{options:t,placeholder:"프레임워크 선택..."})})},h={render:()=>a("div",{className:"w-[300px] space-y-2",children:[e(u,{children:"프레임워크"}),e(s,{options:t,placeholder:"프레임워크 선택..."})]})},f={render:()=>{var l;const[o,d]=n.useState("");return a("div",{className:"w-[300px] space-y-4",children:[a("div",{className:"space-y-2",children:[e(u,{children:"프레임워크"}),e(s,{options:t,value:o,onValueChange:d,placeholder:"프레임워크 선택..."})]}),o&&a("div",{className:"text-sm text-muted-foreground",children:["선택된 값: ",e("strong",{children:(l=t.find(i=>i.value===o))==null?void 0:l.label})]})]})}},B=[{value:"kr",label:"대한민국"},{value:"us",label:"미국"},{value:"jp",label:"일본"},{value:"cn",label:"중국"},{value:"uk",label:"영국"},{value:"de",label:"독일"},{value:"fr",label:"프랑스"},{value:"ca",label:"캐나다"},{value:"au",label:"호주"}],x={render:()=>a("div",{className:"w-[300px] space-y-2",children:[e(u,{children:"국가"}),e(s,{options:B,placeholder:"국가 선택..."})]})},te=[{value:"ko",label:"한국어"},{value:"en",label:"English"},{value:"ja",label:"日本語"},{value:"zh",label:"中文"},{value:"es",label:"Español"},{value:"fr",label:"Français"},{value:"de",label:"Deutsch"},{value:"pt",label:"Português"},{value:"ru",label:"Русский"},{value:"ar",label:"العربية"}],D={render:()=>a("div",{className:"w-[300px] space-y-2",children:[e(u,{children:"언어"}),e(s,{options:te,placeholder:"언어 선택...",emptyMessage:"해당 언어를 찾을 수 없습니다."})]})},g={render:()=>a("div",{className:"w-[300px] space-y-2",children:[e(u,{children:"프레임워크 (비활성화)"}),e(s,{options:t,placeholder:"선택할 수 없습니다",disabled:!0})]})},y={render:()=>a("div",{className:"w-[300px] space-y-2",children:[e(u,{children:"프레임워크"}),e(s,{options:t,placeholder:"프레임워크 선택...",emptyText:"검색 결과가 없습니다. 다른 키워드를 입력해주세요."})]})},w={render:()=>{var p,C;const[o,d]=n.useState(""),[l,i]=n.useState("");return a("div",{className:"w-[350px] space-y-6",children:[e("h3",{className:"text-lg font-semibold",children:"개발자 설문"}),a("div",{className:"space-y-2",children:[e(u,{htmlFor:"framework",children:"선호하는 프레임워크"}),e(s,{options:t,value:o,onValueChange:d,placeholder:"선택하세요..."})]}),a("div",{className:"space-y-2",children:[e(u,{htmlFor:"country",children:"거주 국가"}),e(s,{options:B,value:l,onValueChange:i,placeholder:"선택하세요..."})]}),(o||l)&&a("div",{className:"rounded-md bg-muted p-4 space-y-1",children:[e("p",{className:"text-sm font-medium",children:"선택 내용:"}),o&&a("p",{className:"text-sm text-muted-foreground",children:["프레임워크: ",(p=t.find(c=>c.value===o))==null?void 0:p.label]}),l&&a("p",{className:"text-sm text-muted-foreground",children:["국가: ",(C=B.find(c=>c.value===l))==null?void 0:C.label]})]})]})}};var F,_,j;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <Combobox options={frameworks} placeholder="프레임워크 선택..." />
    </div>
}`,...(j=(_=b.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var q,T,M;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-2">
      <Label>프레임워크</Label>
      <Combobox options={frameworks} placeholder="프레임워크 선택..." />
    </div>
}`,...(M=(T=h.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var O,W,z;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="w-[300px] space-y-4">
        <div className="space-y-2">
          <Label>프레임워크</Label>
          <Combobox options={frameworks} value={value} onValueChange={setValue} placeholder="프레임워크 선택..." />
        </div>
        {value && <div className="text-sm text-muted-foreground">
            선택된 값: <strong>{frameworks.find(f => f.value === value)?.label}</strong>
          </div>}
      </div>;
  }
}`,...(z=(W=f.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var R,I,P;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-2">
      <Label>국가</Label>
      <Combobox options={countries} placeholder="국가 선택..." />
    </div>
}`,...(P=(I=x.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var G,H,J;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-2">
      <Label>언어</Label>
      <Combobox options={languages} placeholder="언어 선택..." emptyMessage="해당 언어를 찾을 수 없습니다." />
    </div>
}`,...(J=(H=D.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-2">
      <Label>프레임워크 (비활성화)</Label>
      <Combobox options={frameworks} placeholder="선택할 수 없습니다" disabled={true} />
    </div>
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-2">
      <Label>프레임워크</Label>
      <Combobox options={frameworks} placeholder="프레임워크 선택..." emptyText="검색 결과가 없습니다. 다른 키워드를 입력해주세요." />
    </div>
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [framework, setFramework] = useState('');
    const [country, setCountry] = useState('');
    return <div className="w-[350px] space-y-6">
        <h3 className="text-lg font-semibold">개발자 설문</h3>
        
        <div className="space-y-2">
          <Label htmlFor="framework">선호하는 프레임워크</Label>
          <Combobox options={frameworks} value={framework} onValueChange={setFramework} placeholder="선택하세요..." />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="country">거주 국가</Label>
          <Combobox options={countries} value={country} onValueChange={setCountry} placeholder="선택하세요..." />
        </div>
        
        {(framework || country) && <div className="rounded-md bg-muted p-4 space-y-1">
            <p className="text-sm font-medium">선택 내용:</p>
            {framework && <p className="text-sm text-muted-foreground">
                프레임워크: {frameworks.find(f => f.value === framework)?.label}
              </p>}
            {country && <p className="text-sm text-muted-foreground">
                국가: {countries.find(c => c.value === country)?.label}
              </p>}
          </div>}
      </div>;
  }
}`,...(ae=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const he=["Default","WithLabel","Controlled","Countries","LongList","Disabled","CustomEmptyText","FormExample"];export{f as Controlled,x as Countries,y as CustomEmptyText,b as Default,g as Disabled,w as FormExample,D as LongList,h as WithLabel,he as __namedExportsOrder,be as default};
