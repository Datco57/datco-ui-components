import{a as e,c as m,j as a}from"./utils-14f1029f.js";import{r as A}from"./index-49dd5b96.js";import{c as j}from"./index-3a35a76c.js";import"./_commonjsHelpers-de833af9.js";const I=j("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),r=A.forwardRef(({className:t,variant:l,...u},b)=>e("div",{ref:b,role:"alert",className:m(I({variant:l}),t),...u}));r.displayName="Alert";const s=A.forwardRef(({className:t,...l},u)=>e("h5",{ref:u,className:m("mb-1 font-medium leading-none tracking-tight",t),...l}));s.displayName="AlertTitle";const n=A.forwardRef(({className:t,...l},u)=>e("div",{ref:u,className:m("text-sm [&_p]:leading-relaxed",t),...l}));n.displayName="AlertDescription";try{r.displayName="Alert",r.__docgenInfo={description:"",displayName:"Alert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "destructive" | null'}}}}}catch{}try{s.displayName="AlertTitle",s.__docgenInfo={description:"",displayName:"AlertTitle",props:{}}}catch{}try{n.displayName="AlertDescription",n.__docgenInfo={description:"",displayName:"AlertDescription",props:{}}}catch{}const O={title:"Components/Alert",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive"],description:"알림의 스타일 변형"}}},i={args:{variant:"default"},render:t=>a(r,{...t,className:"w-[400px]",children:[e(s,{children:"알림"}),e(n,{children:"이것은 기본 알림 메시지입니다."})]})},o={render:()=>a(r,{variant:"destructive",className:"w-[400px]",children:[e(s,{children:"오류"}),e(n,{children:"작업을 완료하는 중에 오류가 발생했습니다."})]})},c={render:()=>a(r,{className:"w-[400px]",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-4 w-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"})}),e(s,{children:"정보"}),e(n,{children:"새로운 업데이트가 있습니다. 지금 업데이트하시겠습니까?"})]})},d={render:()=>a(r,{variant:"destructive",className:"w-[400px]",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-4 w-4",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})}),e(s,{children:"경고"}),e(n,{children:"이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?"})]})},C={render:()=>e(r,{className:"w-[400px]",children:e(s,{children:"간단한 알림"})})},p={render:()=>a("div",{className:"space-y-4 w-[400px]",children:[a(r,{children:[e(s,{children:"성공"}),e(n,{children:"데이터가 성공적으로 저장되었습니다."})]}),a(r,{variant:"destructive",children:[e(s,{children:"오류"}),e(n,{children:"네트워크 연결에 문제가 발생했습니다."})]})]})};var v,B,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  render: args => <Alert {...args} className="w-[400px]">
      <AlertTitle>알림</AlertTitle>
      <AlertDescription>
        이것은 기본 알림 메시지입니다.
      </AlertDescription>
    </Alert>
}`,...(h=(B=i.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var g,D,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[400px]">
      <AlertTitle>오류</AlertTitle>
      <AlertDescription>
        작업을 완료하는 중에 오류가 발생했습니다.
      </AlertDescription>
    </Alert>
}`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var f,x,N;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
      <AlertTitle>정보</AlertTitle>
      <AlertDescription>
        새로운 업데이트가 있습니다. 지금 업데이트하시겠습니까?
      </AlertDescription>
    </Alert>
}`,...(N=(x=c.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var _,y,T;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[400px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
      <AlertTitle>경고</AlertTitle>
      <AlertDescription>
        이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?
      </AlertDescription>
    </Alert>
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var k,E,L;C.parameters={...C.parameters,docs:{...(k=C.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
      <AlertTitle>간단한 알림</AlertTitle>
    </Alert>
}`,...(L=(E=C.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,z,W;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-[400px]">
      <Alert>
        <AlertTitle>성공</AlertTitle>
        <AlertDescription>
          데이터가 성공적으로 저장되었습니다.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>오류</AlertTitle>
        <AlertDescription>
          네트워크 연결에 문제가 발생했습니다.
        </AlertDescription>
      </Alert>
    </div>
}`,...(W=(z=p.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};const R=["Default","Destructive","WithIcon","DestructiveWithIcon","OnlyTitle","MultipleAlerts"];export{i as Default,o as Destructive,d as DestructiveWithIcon,p as MultipleAlerts,C as OnlyTitle,c as WithIcon,R as __namedExportsOrder,O as default};
