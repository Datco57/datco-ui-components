import{j as a,c as v,a as e}from"./utils-14f1029f.js";import{r as t}from"./index-49dd5b96.js";import{L as n}from"./Label-c15685ef.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";import"./index-bf7d13df.js";import"./index-65e79f52.js";import"./index-3a35a76c.js";const l=t.forwardRef(({options:o,value:c,onValueChange:s,placeholder:d="선택하세요...",emptyMessage:p="결과가 없습니다.",className:C},i)=>{var S;const[y,N]=t.useState(!1),[k,B]=t.useState(""),[m,T]=t.useState(c||""),L=o.filter(r=>r.label.toLowerCase().includes(k.toLowerCase())),U=r=>{const A=r===m?"":r;T(A),s==null||s(A),N(!1),B("")};return a("div",{ref:i,className:v("relative",C),children:[a("button",{type:"button",onClick:()=>N(!y),className:"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",children:[e("span",{children:m?(S=o.find(r=>r.value===m))==null?void 0:S.label:d}),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:v("ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform",y&&"rotate-180"),children:e("polyline",{points:"6 9 12 15 18 9"})})]}),y&&a("div",{className:"absolute top-full z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",children:[e("div",{className:"p-2",children:e("input",{type:"text",value:k,onChange:r=>B(r.target.value),placeholder:"검색...",className:"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"})}),e("div",{className:"max-h-[300px] overflow-y-auto p-1",children:L.length===0?e("div",{className:"py-6 text-center text-sm",children:p}):L.map(r=>a("div",{onClick:()=>U(r.value),className:v("relative flex cursor-pointer select-none items-center rounded-sm px-2 py-3 text-sm outline-none hover:bg-accent hover:text-accent-foreground",m===r.value&&"bg-accent text-accent-foreground"),children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:v("mr-2 h-4 w-4",m===r.value?"opacity-100":"opacity-0"),children:e("polyline",{points:"20 6 9 17 4 12"})}),r.label]},r.value))})]})]})});l.displayName="Combobox";try{l.displayName="Combobox",l.__docgenInfo={description:"",displayName:"Combobox",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ComboboxOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string) => void)"}},placeholder:{defaultValue:{value:"선택하세요..."},description:"",name:"placeholder",required:!1,type:{name:"string"}},emptyMessage:{defaultValue:{value:"결과가 없습니다."},description:"",name:"emptyMessage",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const le={title:"Components/Combobox",component:l,parameters:{layout:"centered"},tags:["autodocs"]},u=[{value:"next",label:"Next.js"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],b={render:()=>e("div",{className:"w-[300px]",children:e(l,{options:u,placeholder:"프레임워크 선택..."})})},h={render:()=>a("div",{className:"w-[300px] space-y-2",children:[e(n,{children:"프레임워크"}),e(l,{options:u,placeholder:"프레임워크 선택..."})]})},f={render:()=>{var s;const[o,c]=t.useState("");return a("div",{className:"w-[300px] space-y-4",children:[a("div",{className:"space-y-2",children:[e(n,{children:"프레임워크"}),e(l,{options:u,value:o,onValueChange:c,placeholder:"프레임워크 선택..."})]}),o&&a("div",{className:"text-sm text-muted-foreground",children:["선택된 값: ",e("strong",{children:(s=u.find(d=>d.value===o))==null?void 0:s.label})]})]})}},w=[{value:"kr",label:"대한민국"},{value:"us",label:"미국"},{value:"jp",label:"일본"},{value:"cn",label:"중국"},{value:"uk",label:"영국"},{value:"de",label:"독일"},{value:"fr",label:"프랑스"},{value:"ca",label:"캐나다"},{value:"au",label:"호주"}],g={render:()=>a("div",{className:"w-[300px] space-y-2",children:[e(n,{children:"국가"}),e(l,{options:w,placeholder:"국가 선택..."})]})},X=[{value:"ko",label:"한국어"},{value:"en",label:"English"},{value:"ja",label:"日本語"},{value:"zh",label:"中文"},{value:"es",label:"Español"},{value:"fr",label:"Français"},{value:"de",label:"Deutsch"},{value:"pt",label:"Português"},{value:"ru",label:"Русский"},{value:"ar",label:"العربية"}],x={render:()=>a("div",{className:"w-[300px] space-y-2",children:[e(n,{children:"언어"}),e(l,{options:X,placeholder:"언어 선택...",emptyMessage:"해당 언어를 찾을 수 없습니다."})]})},D={render:()=>{var p,C;const[o,c]=t.useState(""),[s,d]=t.useState("");return a("div",{className:"w-[350px] space-y-6",children:[e("h3",{className:"text-lg font-semibold",children:"개발자 설문"}),a("div",{className:"space-y-2",children:[e(n,{htmlFor:"framework",children:"선호하는 프레임워크"}),e(l,{options:u,value:o,onValueChange:c,placeholder:"선택하세요..."})]}),a("div",{className:"space-y-2",children:[e(n,{htmlFor:"country",children:"거주 국가"}),e(l,{options:w,value:s,onValueChange:d,placeholder:"선택하세요..."})]}),(o||s)&&a("div",{className:"rounded-md bg-muted p-4 space-y-1",children:[e("p",{className:"text-sm font-medium",children:"선택 내용:"}),o&&a("p",{className:"text-sm text-muted-foreground",children:["프레임워크: ",(p=u.find(i=>i.value===o))==null?void 0:p.label]}),s&&a("p",{className:"text-sm text-muted-foreground",children:["국가: ",(C=w.find(i=>i.value===s))==null?void 0:C.label]})]})]})}};var V,F,_;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <Combobox options={frameworks} placeholder="프레임워크 선택..." />
    </div>
}`,...(_=(F=b.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var j,E,q;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-2">
      <Label>프레임워크</Label>
      <Combobox options={frameworks} placeholder="프레임워크 선택..." />
    </div>
}`,...(q=(E=h.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var M,O,W;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=(O=f.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var z,R,I;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-2">
      <Label>국가</Label>
      <Combobox options={countries} placeholder="국가 선택..." />
    </div>
}`,...(I=(R=g.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var P,G,H;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-2">
      <Label>언어</Label>
      <Combobox options={languages} placeholder="언어 선택..." emptyMessage="해당 언어를 찾을 수 없습니다." />
    </div>
}`,...(H=(G=x.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=D.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const te=["Default","WithLabel","Controlled","Countries","LongList","FormExample"];export{f as Controlled,g as Countries,b as Default,D as FormExample,x as LongList,h as WithLabel,te as __namedExportsOrder,le as default};
