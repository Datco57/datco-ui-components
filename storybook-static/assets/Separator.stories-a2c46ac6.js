import{a as e,c as b,j as i}from"./utils-14f1029f.js";import{r as v}from"./index-49dd5b96.js";import"./index-7a5cd00d.js";import{c as R}from"./index-bf7d13df.js";import"./_commonjsHelpers-de833af9.js";import"./index-65e79f52.js";var E=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],z=E.reduce((r,a)=>{const n=R(`Primitive.${a}`),s=v.forwardRef((o,c)=>{const{asChild:x,...p}=o,P=x?n:a;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),e(P,{...p,ref:c})});return s.displayName=`Primitive.${a}`,{...r,[a]:s}},{}),A="Separator",u="horizontal",j=["horizontal","vertical"],C=v.forwardRef((r,a)=>{const{decorative:n,orientation:s=u,...o}=r,c=T(s)?s:u,p=n?{role:"none"}:{"aria-orientation":c==="vertical"?c:void 0,role:"separator"};return e(z.div,{"data-orientation":c,...p,...o,ref:a})});C.displayName=A;function T(r){return j.includes(r)}var O=C;const t=v.forwardRef(({className:r,orientation:a="horizontal",decorative:n=!0,...s},o)=>e(O,{ref:o,decorative:n,orientation:a,className:b("shrink-0 bg-border",a==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",r),...s}));t.displayName=O.displayName;try{t.displayName="Separator",t.__docgenInfo={description:"",displayName:"Separator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const H={title:"Components/Separator",component:t,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>i("div",{className:"w-[400px] space-y-4",children:[i("div",{className:"space-y-1",children:[e("h4",{className:"text-sm font-medium leading-none",children:"Radix Primitives"}),e("p",{className:"text-sm text-muted-foreground",children:"An open-source UI component library."})]}),e(t,{}),i("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e("div",{children:"Blog"}),e(t,{orientation:"vertical"}),e("div",{children:"Docs"}),e(t,{orientation:"vertical"}),e("div",{children:"Source"})]})]})},m={render:()=>i("div",{className:"flex h-[200px] items-center justify-center space-x-4",children:[i("div",{className:"space-y-1",children:[e("h4",{className:"text-sm font-medium",children:"Section 1"}),e("p",{className:"text-sm text-muted-foreground",children:"Content for section 1"})]}),e(t,{orientation:"vertical"}),i("div",{className:"space-y-1",children:[e("h4",{className:"text-sm font-medium",children:"Section 2"}),e("p",{className:"text-sm text-muted-foreground",children:"Content for section 2"})]})]})},l={render:()=>i("div",{className:"w-[300px] space-y-1",children:[e("div",{className:"px-4 py-3 text-sm",children:"Item 1"}),e(t,{}),e("div",{className:"px-4 py-3 text-sm",children:"Item 2"}),e(t,{}),e("div",{className:"px-4 py-3 text-sm",children:"Item 3"}),e(t,{}),e("div",{className:"px-4 py-3 text-sm",children:"Item 4"})]})};var N,h,f;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="w-[400px] space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
}`,...(f=(h=d.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,S,g;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex h-[200px] items-center justify-center space-x-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Section 1</h4>
        <p className="text-sm text-muted-foreground">Content for section 1</p>
      </div>
      <Separator orientation="vertical" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Section 2</h4>
        <p className="text-sm text-muted-foreground">Content for section 2</p>
      </div>
    </div>
}`,...(g=(S=m.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var I,w,_;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="w-[300px] space-y-1">
      <div className="px-4 py-3 text-sm">Item 1</div>
      <Separator />
      <div className="px-4 py-3 text-sm">Item 2</div>
      <Separator />
      <div className="px-4 py-3 text-sm">Item 3</div>
      <Separator />
      <div className="px-4 py-3 text-sm">Item 4</div>
    </div>
}`,...(_=(w=l.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const k=["Horizontal","Vertical","InList"];export{d as Horizontal,l as InList,m as Vertical,k as __namedExportsOrder,H as default};
