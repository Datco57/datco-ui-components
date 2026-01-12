import{a as e,c as V,j as r}from"./utils-14f1029f.js";import{c as w}from"./index-3a35a76c.js";import"./index-49dd5b96.js";import"./_commonjsHelpers-de833af9.js";const j=w("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function a({className:o,variant:A,...T}){return e("div",{className:V(j({variant:A}),o),...T})}try{a.displayName="Badge",a.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "outline" | "destructive" | "secondary" | null'}}}}}catch{}const F={title:"Components/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"],description:"배지의 스타일 변형"}}},n={args:{children:"Badge",variant:"default"}},t={args:{children:"Secondary",variant:"secondary"}},s={args:{children:"Destructive",variant:"destructive"}},i={args:{children:"Outline",variant:"outline"}},c={render:()=>r("div",{className:"flex flex-wrap gap-2",children:[e(a,{children:"Default"}),e(a,{variant:"secondary",children:"Secondary"}),e(a,{variant:"destructive",children:"Destructive"}),e(a,{variant:"outline",children:"Outline"})]})},d={render:()=>r("div",{className:"space-y-4",children:[r("div",{className:"flex items-center gap-2",children:[e("span",{className:"text-sm",children:"상태:"}),e(a,{children:"활성"}),e(a,{variant:"secondary",children:"대기"}),e(a,{variant:"destructive",children:"오류"})]}),r("div",{className:"flex items-center gap-2",children:[e("span",{className:"text-sm",children:"알림:"}),e(a,{children:"새로운 메시지 3개"})]}),r("div",{className:"flex items-center gap-2",children:[e("span",{className:"text-sm",children:"태그:"}),e(a,{variant:"outline",children:"React"}),e(a,{variant:"outline",children:"TypeScript"}),e(a,{variant:"outline",children:"Tailwind"})]})]})};var l,u,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'default'
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,g,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,B,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Destructive',
    variant: 'destructive'
  }
}`,...(y=(B=s.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var h,x,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Outline',
    variant: 'outline'
  }
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var N,D,S;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var b,_,O;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">상태:</span>
        <Badge>활성</Badge>
        <Badge variant="secondary">대기</Badge>
        <Badge variant="destructive">오류</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">알림:</span>
        <Badge>새로운 메시지 3개</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">태그:</span>
        <Badge variant="outline">React</Badge>
        <Badge variant="outline">TypeScript</Badge>
        <Badge variant="outline">Tailwind</Badge>
      </div>
    </div>
}`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const I=["Default","Secondary","Destructive","Outline","AllVariants","UseCases"];export{c as AllVariants,n as Default,s as Destructive,i as Outline,t as Secondary,d as UseCases,I as __namedExportsOrder,F as default};
