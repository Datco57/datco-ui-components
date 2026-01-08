import{a as e,c as J,j as g}from"./utils-14f1029f.js";import{r as b,a as d}from"./index-49dd5b96.js";import{u as B,P as k,a as ue,c as ie}from"./index-1cd42350.js";import{c as K,R as se,I as ge}from"./index-5cd53c1a.js";import{u as pe}from"./index-3b7ac29b.js";import{c as de}from"./index-3a35a76c.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";import"./index-65e79f52.js";import"./index-c90fc0d3.js";import"./index-94eabfb1.js";var Q="Toggle",X=b.forwardRef((o,l)=>{const{pressed:t,defaultPressed:n,onPressedChange:u,...s}=o,[i,a]=B({prop:t,onChange:u,defaultProp:n??!1,caller:Q});return e(k.button,{type:"button","aria-pressed":i,"data-state":i?"on":"off","data-disabled":o.disabled?"":void 0,...s,ref:l,onClick:ue(o.onClick,()=>{o.disabled||a(!i)})})});X.displayName=Q;var c="ToggleGroup",[Y,Pe]=ie(c,[K]),Z=K(),_=d.forwardRef((o,l)=>{const{type:t,...n}=o;if(t==="single")return e(ce,{...n,ref:l});if(t==="multiple")return e(me,{...n,ref:l});throw new Error(`Missing prop \`type\` expected on \`${c}\``)});_.displayName=c;var[ee,oe]=Y(c),ce=d.forwardRef((o,l)=>{const{value:t,defaultValue:n,onValueChange:u=()=>{},...s}=o,[i,a]=B({prop:t,defaultProp:n??"",onChange:u,caller:c});return e(ee,{scope:o.__scopeToggleGroup,type:"single",value:d.useMemo(()=>i?[i]:[],[i]),onItemActivate:a,onItemDeactivate:d.useCallback(()=>a(""),[a]),children:e(re,{...s,ref:l})})}),me=d.forwardRef((o,l)=>{const{value:t,defaultValue:n,onValueChange:u=()=>{},...s}=o,[i,a]=B({prop:t,defaultProp:n??[],onChange:u,caller:c}),m=d.useCallback(v=>a((h=[])=>[...h,v]),[a]),I=d.useCallback(v=>a((h=[])=>h.filter(ae=>ae!==v)),[a]);return e(ee,{scope:o.__scopeToggleGroup,type:"multiple",value:i,onItemActivate:m,onItemDeactivate:I,children:e(re,{...s,ref:l})})});_.displayName=c;var[ve,he]=Y(c),re=d.forwardRef((o,l)=>{const{__scopeToggleGroup:t,disabled:n=!1,rovingFocus:u=!0,orientation:s,dir:i,loop:a=!0,...m}=o,I=Z(t),v=pe(i),h={role:"group",dir:v,...m};return e(ve,{scope:t,rovingFocus:u,disabled:n,children:u?e(se,{asChild:!0,...I,orientation:s,dir:v,loop:a,children:e(k.div,{...h,ref:l})}):e(k.div,{...h,ref:l})})}),C="ToggleGroupItem",le=d.forwardRef((o,l)=>{const t=oe(C,o.__scopeToggleGroup),n=he(C,o.__scopeToggleGroup),u=Z(o.__scopeToggleGroup),s=t.value.includes(o.value),i=n.disabled||o.disabled,a={...o,pressed:s,disabled:i},m=d.useRef(null);return n.rovingFocus?e(ge,{asChild:!0,...u,focusable:!i,active:s,ref:m,children:e(P,{...a,ref:l})}):e(P,{...a,ref:l})});le.displayName=C;var P=d.forwardRef((o,l)=>{const{__scopeToggleGroup:t,value:n,...u}=o,s=oe(C,t),i={role:"radio","aria-checked":o.pressed,"aria-pressed":void 0},a=s.type==="single"?i:void 0;return e(X,{...a,...u,ref:l,onPressedChange:m=>{m?s.onItemActivate(n):s.onItemDeactivate(n)}})}),te=_,ne=le;const Ge=de("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),p=b.forwardRef(({className:o,...l},t)=>e(te,{ref:t,className:J("inline-flex rounded-md shadow-sm",o),...l}));p.displayName=te.displayName;const r=b.forwardRef(({className:o,variant:l,size:t,...n},u)=>e(ne,{ref:u,className:J(Ge({variant:l,size:t}),o),...n}));r.displayName=ne.displayName;try{p.displayName="ToggleGroup",p.__docgenInfo={description:"",displayName:"ToggleGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="ToggleGroupItem",r.__docgenInfo={description:"",displayName:"ToggleGroupItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | null'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "outline" | null'}}}}}catch{}const Le={title:"Components/ToggleGroup (ButtonGroup)",component:p,parameters:{layout:"centered"},tags:["autodocs"]},G={render:()=>g(p,{type:"single",defaultValue:"center",children:[e(r,{value:"left","aria-label":"왼쪽 정렬",children:g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"17",x2:"3",y1:"6",y2:"6"}),e("line",{x1:"21",x2:"3",y1:"12",y2:"12"}),e("line",{x1:"17",x2:"3",y1:"18",y2:"18"})]})}),e(r,{value:"center","aria-label":"가운데 정렬",children:g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"17",x2:"7",y1:"6",y2:"6"}),e("line",{x1:"21",x2:"3",y1:"12",y2:"12"}),e("line",{x1:"17",x2:"7",y1:"18",y2:"18"})]})}),e(r,{value:"right","aria-label":"오른쪽 정렬",children:g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"21",x2:"7",y1:"6",y2:"6"}),e("line",{x1:"21",x2:"3",y1:"12",y2:"12"}),e("line",{x1:"21",x2:"7",y1:"18",y2:"18"})]})})]})},f={render:()=>g(p,{type:"multiple",defaultValue:["bold"],children:[e(r,{value:"bold","aria-label":"굵게",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e("path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"})})}),e(r,{value:"italic","aria-label":"기울임",children:g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"19",x2:"10",y1:"4",y2:"4"}),e("line",{x1:"14",x2:"5",y1:"20",y2:"20"}),e("line",{x1:"15",x2:"9",y1:"4",y2:"20"})]})}),e(r,{value:"underline","aria-label":"밑줄",children:g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}),e("line",{x1:"4",x2:"20",y1:"20",y2:"20"})]})})]})},x={render:()=>g(p,{type:"single",variant:"outline",children:[e(r,{value:"1",children:"1일"}),e(r,{value:"7",children:"7일"}),e(r,{value:"30",children:"30일"}),e(r,{value:"90",children:"90일"})]})},T={render:()=>g(p,{type:"single",defaultValue:"grid",children:[e(r,{value:"list",children:"목록"}),e(r,{value:"grid",children:"그리드"}),e(r,{value:"card",children:"카드"})]})},y={render:()=>g("div",{className:"flex flex-col gap-4",children:[g(p,{type:"single",size:"sm",children:[e(r,{value:"1",children:"Small"}),e(r,{value:"2",children:"Button"}),e(r,{value:"3",children:"Group"})]}),g(p,{type:"single",size:"default",children:[e(r,{value:"1",children:"Default"}),e(r,{value:"2",children:"Button"}),e(r,{value:"3",children:"Group"})]}),g(p,{type:"single",size:"lg",children:[e(r,{value:"1",children:"Large"}),e(r,{value:"2",children:"Button"}),e(r,{value:"3",children:"Group"})]})]})},w={render:()=>g(p,{type:"single",disabled:!0,children:[e(r,{value:"1",children:"옵션 1"}),e(r,{value:"2",children:"옵션 2"}),e(r,{value:"3",children:"옵션 3"})]})};var L,V,S;G.parameters={...G.parameters,docs:{...(L=G.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="왼쪽 정렬">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="17" x2="3" y1="6" y2="6" />
          <line x1="21" x2="3" y1="12" y2="12" />
          <line x1="17" x2="3" y1="18" y2="18" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="가운데 정렬">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="17" x2="7" y1="6" y2="6" />
          <line x1="21" x2="3" y1="12" y2="12" />
          <line x1="17" x2="7" y1="18" y2="18" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="오른쪽 정렬">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="21" x2="7" y1="6" y2="6" />
          <line x1="21" x2="3" y1="12" y2="12" />
          <line x1="21" x2="7" y1="18" y2="18" />
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(S=(V=G.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var N,A,j;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="multiple" defaultValue={['bold']}>
      <ToggleGroupItem value="bold" aria-label="굵게">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="기울임">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" x2="10" y1="4" y2="4" />
          <line x1="14" x2="5" y1="20" y2="20" />
          <line x1="15" x2="9" y1="4" y2="20" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="밑줄">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4v6a6 6 0 0 0 12 0V4" />
          <line x1="4" x2="20" y1="20" y2="20" />
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
}`,...(j=(A=f.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var D,M,R;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="1">1일</ToggleGroupItem>
      <ToggleGroupItem value="7">7일</ToggleGroupItem>
      <ToggleGroupItem value="30">30일</ToggleGroupItem>
      <ToggleGroupItem value="90">90일</ToggleGroupItem>
    </ToggleGroup>
}`,...(R=(M=x.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var z,W,E;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" defaultValue="grid">
      <ToggleGroupItem value="list">목록</ToggleGroupItem>
      <ToggleGroupItem value="grid">그리드</ToggleGroupItem>
      <ToggleGroupItem value="card">카드</ToggleGroupItem>
    </ToggleGroup>
}`,...(E=(W=T.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var F,O,q;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <ToggleGroup type="single" size="sm">
        <ToggleGroupItem value="1">Small</ToggleGroupItem>
        <ToggleGroupItem value="2">Button</ToggleGroupItem>
        <ToggleGroupItem value="3">Group</ToggleGroupItem>
      </ToggleGroup>
      
      <ToggleGroup type="single" size="default">
        <ToggleGroupItem value="1">Default</ToggleGroupItem>
        <ToggleGroupItem value="2">Button</ToggleGroupItem>
        <ToggleGroupItem value="3">Group</ToggleGroupItem>
      </ToggleGroup>
      
      <ToggleGroup type="single" size="lg">
        <ToggleGroupItem value="1">Large</ToggleGroupItem>
        <ToggleGroupItem value="2">Button</ToggleGroupItem>
        <ToggleGroupItem value="3">Group</ToggleGroupItem>
      </ToggleGroup>
    </div>
}`,...(q=(O=y.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var H,$,U;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <ToggleGroup type="single" disabled>
      <ToggleGroupItem value="1">옵션 1</ToggleGroupItem>
      <ToggleGroupItem value="2">옵션 2</ToggleGroupItem>
      <ToggleGroupItem value="3">옵션 3</ToggleGroupItem>
    </ToggleGroup>
}`,...(U=($=w.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};const Ve=["Single","Multiple","Outline","TextButtons","Sizes","Disabled"];export{w as Disabled,f as Multiple,x as Outline,G as Single,y as Sizes,T as TextButtons,Ve as __namedExportsOrder,Le as default};
