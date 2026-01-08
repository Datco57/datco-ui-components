import{a as e,c as C,j as a}from"./utils-14f1029f.js";import{r as H}from"./index-49dd5b96.js";import{L as s}from"./Label-c15685ef.js";import{B as W}from"./Button-ca7e4a9c.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";import"./index-bf7d13df.js";import"./index-65e79f52.js";import"./index-3a35a76c.js";const r=H.forwardRef(({className:m,...Y},M)=>e("textarea",{className:C("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",m),ref:M,...Y}));r.displayName="Textarea";try{r.displayName="Textarea",r.__docgenInfo={description:"",displayName:"Textarea",props:{}}}catch{}const J={title:"Components/Textarea",component:r,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{placeholder:"Type your message here."}},o={render:()=>a("div",{className:"grid w-full gap-1.5",children:[e(s,{htmlFor:"message",children:"Your message"}),e(r,{placeholder:"Type your message here.",id:"message"})]})},l={render:()=>a("div",{className:"grid w-full gap-1.5",children:[e(s,{htmlFor:"message-2",children:"Your message"}),e(r,{placeholder:"Type your message here.",id:"message-2",defaultValue:"This is a pre-filled message."}),e("p",{className:"text-sm text-muted-foreground",children:"Your message will be copied to the support team."})]})},i={args:{placeholder:"Type your message here.",disabled:!0}},d={render:()=>a("div",{className:"grid w-full gap-2",children:[e(r,{placeholder:"Type your message here."}),e(W,{children:"Send message"})]})},n={render:()=>a("div",{className:"grid w-full gap-4",children:[a("div",{children:[e(s,{children:"Small (min-h-[60px])"}),e(r,{placeholder:"Short textarea",className:"min-h-[60px]"})]}),a("div",{children:[e(s,{children:"Medium (default min-h-[80px])"}),e(r,{placeholder:"Medium textarea"})]}),a("div",{children:[e(s,{children:"Large (min-h-[120px])"}),e(r,{placeholder:"Tall textarea",className:"min-h-[120px]"})]})]})},c={render:()=>a("div",{className:"w-[400px] space-y-4",children:[a("div",{className:"space-y-2",children:[e(s,{htmlFor:"subject",children:"Subject"}),e("input",{id:"subject",className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",placeholder:"Enter subject"})]}),a("div",{className:"space-y-2",children:[e(s,{htmlFor:"description",children:"Description"}),e(r,{id:"description",placeholder:"Enter a detailed description",className:"min-h-[120px]"}),e("p",{className:"text-sm text-muted-foreground",children:"Provide as much detail as possible."})]}),e(W,{className:"w-full",children:"Submit"})]})};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.'
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,v,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your message</Label>
      <Textarea placeholder="Type your message here." id="message-2" defaultValue="This is a pre-filled message." />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var N,T,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your message here.',
    disabled: true
  }
}`,...(w=(T=i.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var L,S,j;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
}`,...(j=(S=d.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var F,_,B;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="grid w-full gap-4">
      <div>
        <Label>Small (min-h-[60px])</Label>
        <Textarea placeholder="Short textarea" className="min-h-[60px]" />
      </div>
      <div>
        <Label>Medium (default min-h-[80px])</Label>
        <Textarea placeholder="Medium textarea" />
      </div>
      <div>
        <Label>Large (min-h-[120px])</Label>
        <Textarea placeholder="Tall textarea" className="min-h-[120px]" />
      </div>
    </div>
}`,...(B=(_=n.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var E,k,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <input id="subject" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Enter subject" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Enter a detailed description" className="min-h-[120px]" />
        <p className="text-sm text-muted-foreground">
          Provide as much detail as possible.
        </p>
      </div>
      <Button className="w-full">Submit</Button>
    </div>
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const K=["Default","WithLabel","WithText","Disabled","WithButton","CustomHeight","FormExample"];export{n as CustomHeight,t as Default,i as Disabled,c as FormExample,d as WithButton,o as WithLabel,l as WithText,K as __namedExportsOrder,J as default};
