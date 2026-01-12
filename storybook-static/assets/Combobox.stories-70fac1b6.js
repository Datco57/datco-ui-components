import{j as r,c as v,a as e}from"./utils-14f1029f.js";import{r as u}from"./index-49dd5b96.js";import{L as l}from"./Label-c15685ef.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";import"./index-bf7d13df.js";import"./index-65e79f52.js";import"./index-3a35a76c.js";const c=u.forwardRef(({options:a,value:n,onValueChange:o,placeholder:d="선택하세요...",emptyMessage:i="결과가 없습니다.",emptyText:C,disabled:p=!1,className:re},se)=>{var E;const[N,k]=u.useState(!1),[L,S]=u.useState(""),[m,oe]=u.useState(n||""),A=a.filter(s=>s.label.toLowerCase().includes(L.toLowerCase())),te=s=>{const V=s===m?"":s;oe(V),o==null||o(V),k(!1),S("")},le=C||i;return r("div",{ref:se,className:v("relative",re),children:[r("button",{type:"button",onClick:()=>!p&&k(!N),disabled:p,className:"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",children:[e("span",{children:m?(E=a.find(s=>s.value===m))==null?void 0:E.label:d}),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:v("ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform",N&&"rotate-180"),children:e("polyline",{points:"6 9 12 15 18 9"})})]}),N&&r("div",{className:"absolute top-full z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",children:[e("div",{className:"p-2",children:e("input",{type:"text",value:L,onChange:s=>S(s.target.value),placeholder:"검색...",className:"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"})}),e("div",{className:"max-h-[300px] overflow-y-auto p-1",children:A.length===0?e("div",{className:"py-6 text-center text-sm",children:le}):A.map(s=>r("div",{onClick:()=>te(s.value),className:v("relative flex cursor-pointer select-none items-center rounded-sm px-2 py-3 text-sm outline-none hover:bg-accent hover:text-accent-foreground",m===s.value&&"bg-accent text-accent-foreground"),children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:v("mr-2 h-4 w-4",m===s.value?"opacity-100":"opacity-0"),children:e("polyline",{points:"20 6 9 17 4 12"})}),s.label]},s.value))})]})]})});c.displayName="Combobox";try{c.displayName="Combobox",c.__docgenInfo={description:"",displayName:"Combobox",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ComboboxOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"((value: string) => void)"}},placeholder:{defaultValue:{value:"선택하세요..."},description:"",name:"placeholder",required:!1,type:{name:"string"}},emptyMessage:{defaultValue:{value:"결과가 없습니다."},description:"",name:"emptyMessage",required:!1,type:{name:"string"}},emptyText:{defaultValue:null,description:"",name:"emptyText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const t=[{value:"next",label:"Next.js"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],he={title:"Components/Combobox",component:c,parameters:{layout:"centered"},tags:["autodocs"],decorators:[a=>e("div",{className:"w-[300px]",children:e(a,{})})]},h={args:{options:t,placeholder:"프레임워크 선택..."}},f={args:{options:t,placeholder:"프레임워크 선택..."},decorators:[a=>r("div",{className:"w-[300px] space-y-2",children:[e(l,{children:"프레임워크"}),e(a,{})]})]},b={args:{options:t,placeholder:"프레임워크 선택..."},render:a=>{var d;const[n,o]=u.useState("");return r("div",{className:"w-[300px] space-y-4",children:[r("div",{className:"space-y-2",children:[e(l,{children:"프레임워크"}),e(c,{...a,value:n,onValueChange:o})]}),n&&r("div",{className:"text-sm text-muted-foreground",children:["선택된 값: ",e("strong",{children:(d=t.find(i=>i.value===n))==null?void 0:d.label})]})]})}},B=[{value:"kr",label:"대한민국"},{value:"us",label:"미국"},{value:"jp",label:"일본"},{value:"cn",label:"중국"},{value:"uk",label:"영국"},{value:"de",label:"독일"},{value:"fr",label:"프랑스"},{value:"ca",label:"캐나다"},{value:"au",label:"호주"}],g={args:{options:B,placeholder:"국가 선택..."},decorators:[a=>r("div",{className:"w-[300px] space-y-2",children:[e(l,{children:"국가"}),e(a,{})]})]},ne=[{value:"ko",label:"한국어"},{value:"en",label:"English"},{value:"ja",label:"日本語"},{value:"zh",label:"中文"},{value:"es",label:"Español"},{value:"fr",label:"Français"},{value:"de",label:"Deutsch"},{value:"pt",label:"Português"},{value:"ru",label:"Русский"},{value:"ar",label:"العربية"}],D={args:{options:ne,placeholder:"언어 선택...",emptyMessage:"해당 언어를 찾을 수 없습니다."},decorators:[a=>r("div",{className:"w-[300px] space-y-2",children:[e(l,{children:"언어"}),e(a,{})]})]},y={args:{options:t,placeholder:"선택할 수 없습니다",disabled:!0},decorators:[a=>r("div",{className:"w-[300px] space-y-2",children:[e(l,{children:"프레임워크 (비활성화)"}),e(a,{})]})]},x={args:{options:t,placeholder:"프레임워크 선택...",emptyText:"검색 결과가 없습니다. 다른 키워드를 입력해주세요."},decorators:[a=>r("div",{className:"w-[300px] space-y-2",children:[e(l,{children:"프레임워크"}),e(a,{})]})]},w={args:{options:t,placeholder:"선택하세요..."},render:()=>{var i,C;const[a,n]=u.useState(""),[o,d]=u.useState("");return r("div",{className:"w-[350px] space-y-6",children:[e("h3",{className:"text-lg font-semibold",children:"개발자 설문"}),r("div",{className:"space-y-2",children:[e(l,{htmlFor:"framework",children:"선호하는 프레임워크"}),e(c,{options:t,value:a,onValueChange:n,placeholder:"선택하세요..."})]}),r("div",{className:"space-y-2",children:[e(l,{htmlFor:"country",children:"거주 국가"}),e(c,{options:B,value:o,onValueChange:d,placeholder:"선택하세요..."})]}),(a||o)&&r("div",{className:"rounded-md bg-muted p-4 space-y-1",children:[e("p",{className:"text-sm font-medium",children:"선택 내용:"}),a&&r("p",{className:"text-sm text-muted-foreground",children:["프레임워크: ",(i=t.find(p=>p.value===a))==null?void 0:i.label]}),o&&r("p",{className:"text-sm text-muted-foreground",children:["국가: ",(C=B.find(p=>p.value===o))==null?void 0:C.label]})]})]})}};var F,_,j;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    placeholder: '프레임워크 선택...'
  }
}`,...(j=(_=h.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var q,T,M;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    placeholder: '프레임워크 선택...'
  },
  decorators: [Story => <div className="w-[300px] space-y-2">
        <Label>프레임워크</Label>
        <Story />
      </div>]
}`,...(M=(T=f.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var O,W,z;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    placeholder: '프레임워크 선택...'
  },
  render: args => {
    const [value, setValue] = useState('');
    return <div className="w-[300px] space-y-4">
        <div className="space-y-2">
          <Label>프레임워크</Label>
          <Combobox {...args} value={value} onValueChange={setValue} />
        </div>
        {value && <div className="text-sm text-muted-foreground">
            선택된 값: <strong>{frameworks.find(f => f.value === value)?.label}</strong>
          </div>}
      </div>;
  }
}`,...(z=(W=b.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var R,I,P;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    options: countries,
    placeholder: '국가 선택...'
  },
  decorators: [Story => <div className="w-[300px] space-y-2">
        <Label>국가</Label>
        <Story />
      </div>]
}`,...(P=(I=g.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var G,H,J;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    options: languages,
    placeholder: '언어 선택...',
    emptyMessage: '해당 언어를 찾을 수 없습니다.'
  },
  decorators: [Story => <div className="w-[300px] space-y-2">
        <Label>언어</Label>
        <Story />
      </div>]
}`,...(J=(H=D.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    placeholder: '선택할 수 없습니다',
    disabled: true
  },
  decorators: [Story => <div className="w-[300px] space-y-2">
        <Label>프레임워크 (비활성화)</Label>
        <Story />
      </div>]
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    placeholder: '프레임워크 선택...',
    emptyText: '검색 결과가 없습니다. 다른 키워드를 입력해주세요.'
  },
  decorators: [Story => <div className="w-[300px] space-y-2">
        <Label>프레임워크</Label>
        <Story />
      </div>]
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    options: frameworks,
    placeholder: '선택하세요...'
  },
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
}`,...(ae=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const fe=["Default","WithLabel","Controlled","Countries","LongList","Disabled","CustomEmptyText","FormExample"];export{b as Controlled,g as Countries,x as CustomEmptyText,h as Default,y as Disabled,w as FormExample,D as LongList,f as WithLabel,fe as __namedExportsOrder,he as default};
