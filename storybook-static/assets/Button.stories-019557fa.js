import{j as Q,a as r}from"./utils-14f1029f.js";import{B as e}from"./Button-7abc04a3.js";import"./index-49dd5b96.js";import"./_commonjsHelpers-de833af9.js";import"./index-bf7d13df.js";import"./index-65e79f52.js";import"./index-3a35a76c.js";const ee={title:"Components/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"],description:"버튼의 스타일 변형"},size:{control:"select",options:["default","sm","lg","icon"],description:"버튼의 크기"},disabled:{control:"boolean",description:"버튼 비활성화 상태"}}},a={args:{children:"Button",variant:"default"}},t={args:{children:"Delete",variant:"destructive"}},n={args:{children:"Outline",variant:"outline"}},s={args:{children:"Secondary",variant:"secondary"}},o={args:{children:"Ghost",variant:"ghost"}},i={args:{children:"Link",variant:"link"}},c={args:{children:"Small Button",size:"sm"}},l={args:{children:"Large Button",size:"lg"}},d={args:{children:"Disabled",disabled:!0}},u={render:()=>Q("div",{className:"flex flex-wrap gap-4",children:[r(e,{variant:"default",children:"Default"}),r(e,{variant:"destructive",children:"Destructive"}),r(e,{variant:"outline",children:"Outline"}),r(e,{variant:"secondary",children:"Secondary"}),r(e,{variant:"ghost",children:"Ghost"}),r(e,{variant:"link",children:"Link"})]})},m={render:()=>Q("div",{className:"flex items-center gap-4",children:[r(e,{size:"sm",children:"Small"}),r(e,{size:"default",children:"Default"}),r(e,{size:"lg",children:"Large"})]})};var p,g,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'default'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,B,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'destructive'
  }
}`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var f,D,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Outline',
    variant: 'outline'
  }
}`,...(y=(D=n.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var z,L,k;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...(k=(L=s.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var x,b,O;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Ghost',
    variant: 'ghost'
  }
}`,...(O=(b=o.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var G,A,N;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Link',
    variant: 'link'
  }
}`,...(N=(A=i.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var j,w,V;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'sm'
  }
}`,...(V=(w=c.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var _,C,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var T,q,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var H,I,J;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...(J=(I=u.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,M,P;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const re=["Default","Destructive","Outline","Secondary","Ghost","Link","Small","Large","Disabled","AllVariants","AllSizes"];export{m as AllSizes,u as AllVariants,a as Default,t as Destructive,d as Disabled,o as Ghost,l as Large,i as Link,n as Outline,s as Secondary,c as Small,re as __namedExportsOrder,ee as default};
