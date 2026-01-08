import{a as e,c as R,j as a}from"./utils-14f1029f.js";import{r as p}from"./index-49dd5b96.js";import{c as te,u as se,P as V,a as M}from"./index-1cd42350.js";import{c as q,R as ie,I as oe}from"./index-5cd53c1a.js";import{P as le}from"./index-59af98bf.js";import{u as ce}from"./index-3b7ac29b.js";import{u as de}from"./index-c90fc0d3.js";import{C as b,a as f,b as v,c as C,d as T}from"./Card-7fb37a9a.js";import{I as _}from"./Input-a781cec9.js";import{L as S}from"./Label-c15685ef.js";import"./_commonjsHelpers-de833af9.js";import"./index-7a5cd00d.js";import"./index-65e79f52.js";import"./index-94eabfb1.js";import"./index-bf7d13df.js";import"./index-3a35a76c.js";var A="Tabs",[ue,Ve]=te(A,[q]),K=q(),[me,P]=ue(A),U=p.forwardRef((n,r)=>{const{__scopeTabs:t,value:s,onValueChange:d,defaultValue:m,orientation:i="horizontal",dir:g,activationMode:w="automatic",...x}=n,u=ce(g),[o,h]=se({prop:s,onChange:d,defaultProp:m??"",caller:A});return e(me,{scope:t,baseId:de(),value:o,onValueChange:h,orientation:i,dir:u,activationMode:w,children:e(V.div,{dir:u,"data-orientation":i,...x,ref:r})})});U.displayName=A;var W="TabsList",z=p.forwardRef((n,r)=>{const{__scopeTabs:t,loop:s=!0,...d}=n,m=P(W,t),i=K(t);return e(ie,{asChild:!0,...i,orientation:m.orientation,dir:m.dir,loop:s,children:e(V.div,{role:"tablist","aria-orientation":m.orientation,...d,ref:r})})});z.displayName=W;var J="TabsTrigger",Q=p.forwardRef((n,r)=>{const{__scopeTabs:t,value:s,disabled:d=!1,...m}=n,i=P(J,t),g=K(t),w=Z(i.baseId,s),x=ee(i.baseId,s),u=s===i.value;return e(oe,{asChild:!0,...g,focusable:!d,active:u,children:e(V.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":x,"data-state":u?"active":"inactive","data-disabled":d?"":void 0,disabled:d,id:w,...m,ref:r,onMouseDown:M(n.onMouseDown,o=>{!d&&o.button===0&&o.ctrlKey===!1?i.onValueChange(s):o.preventDefault()}),onKeyDown:M(n.onKeyDown,o=>{[" ","Enter"].includes(o.key)&&i.onValueChange(s)}),onFocus:M(n.onFocus,()=>{const o=i.activationMode!=="manual";!u&&!d&&o&&i.onValueChange(s)})})})});Q.displayName=J;var X="TabsContent",Y=p.forwardRef((n,r)=>{const{__scopeTabs:t,value:s,forceMount:d,children:m,...i}=n,g=P(X,t),w=Z(g.baseId,s),x=ee(g.baseId,s),u=s===g.value,o=p.useRef(u);return p.useEffect(()=>{const h=requestAnimationFrame(()=>o.current=!1);return()=>cancelAnimationFrame(h)},[]),e(le,{present:d||u,children:({present:h})=>e(V.div,{"data-state":u?"active":"inactive","data-orientation":g.orientation,role:"tabpanel","aria-labelledby":w,hidden:!h,id:x,tabIndex:0,...i,ref:r,style:{...n.style,animationDuration:o.current?"0s":void 0},children:h&&m})})});Y.displayName=X;function Z(n,r){return`${n}-trigger-${r}`}function ee(n,r){return`${n}-content-${r}`}var pe=U,ae=z,ne=Q,re=Y;const y=pe,N=p.forwardRef(({className:n,...r},t)=>e(ae,{ref:t,className:R("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",n),...r}));N.displayName=ae.displayName;const l=p.forwardRef(({className:n,...r},t)=>e(ne,{ref:t,className:R("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",n),...r}));l.displayName=ne.displayName;const c=p.forwardRef(({className:n,...r},t)=>e(re,{ref:t,className:R("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...r}));c.displayName=re.displayName;try{y.displayName="Tabs",y.__docgenInfo={description:"",displayName:"Tabs",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{N.displayName="TabsList",N.__docgenInfo={description:"",displayName:"TabsList",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="TabsTrigger",l.__docgenInfo={description:"",displayName:"TabsTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="TabsContent",c.__docgenInfo={description:"",displayName:"TabsContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Ae={title:"Components/Tabs",component:y,parameters:{layout:"centered"},tags:["autodocs"]},I={render:()=>a(y,{defaultValue:"account",className:"w-[400px]",children:[a(N,{className:"grid w-full grid-cols-2",children:[e(l,{value:"account",children:"Account"}),e(l,{value:"password",children:"Password"})]}),e(c,{value:"account",children:a(b,{children:[a(f,{children:[e(v,{children:"Account"}),e(C,{children:"Make changes to your account here. Click save when you're done."})]}),a(T,{className:"space-y-2",children:[a("div",{className:"space-y-1",children:[e(S,{htmlFor:"name",children:"Name"}),e(_,{id:"name",defaultValue:"Pedro Duarte"})]}),a("div",{className:"space-y-1",children:[e(S,{htmlFor:"username",children:"Username"}),e(_,{id:"username",defaultValue:"@peduarte"})]})]})]})}),e(c,{value:"password",children:a(b,{children:[a(f,{children:[e(v,{children:"Password"}),e(C,{children:"Change your password here. After saving, you'll be logged out."})]}),a(T,{className:"space-y-2",children:[a("div",{className:"space-y-1",children:[e(S,{htmlFor:"current",children:"Current password"}),e(_,{id:"current",type:"password"})]}),a("div",{className:"space-y-1",children:[e(S,{htmlFor:"new",children:"New password"}),e(_,{id:"new",type:"password"})]})]})]})})]})},D={render:()=>a(y,{defaultValue:"overview",className:"w-[500px]",children:[a(N,{className:"grid w-full grid-cols-3",children:[e(l,{value:"overview",children:"Overview"}),e(l,{value:"analytics",children:"Analytics"}),e(l,{value:"reports",children:"Reports"})]}),e(c,{value:"overview",className:"space-y-4",children:a("div",{className:"rounded-lg border p-4",children:[e("h3",{className:"font-semibold",children:"Overview Content"}),e("p",{className:"text-sm text-muted-foreground mt-2",children:"This is the overview tab content."})]})}),e(c,{value:"analytics",className:"space-y-4",children:a("div",{className:"rounded-lg border p-4",children:[e("h3",{className:"font-semibold",children:"Analytics Content"}),e("p",{className:"text-sm text-muted-foreground mt-2",children:"This is the analytics tab content."})]})}),e(c,{value:"reports",className:"space-y-4",children:a("div",{className:"rounded-lg border p-4",children:[e("h3",{className:"font-semibold",children:"Reports Content"}),e("p",{className:"text-sm text-muted-foreground mt-2",children:"This is the reports tab content."})]})})]})},L={render:()=>a(y,{defaultValue:"general",className:"flex w-[600px]",orientation:"vertical",children:[a(N,{className:"flex flex-col h-auto w-[140px] mr-4",children:[e(l,{value:"general",className:"w-full",children:"General"}),e(l,{value:"security",className:"w-full",children:"Security"}),e(l,{value:"notifications",className:"w-full",children:"Notifications"}),e(l,{value:"billing",className:"w-full",children:"Billing"})]}),a("div",{className:"flex-1",children:[e(c,{value:"general",children:a(b,{children:[a(f,{children:[e(v,{children:"General Settings"}),e(C,{children:"Manage your general preferences"})]}),e(T,{children:e("p",{className:"text-sm",children:"General settings content goes here."})})]})}),e(c,{value:"security",children:a(b,{children:[a(f,{children:[e(v,{children:"Security Settings"}),e(C,{children:"Manage your security preferences"})]}),e(T,{children:e("p",{className:"text-sm",children:"Security settings content goes here."})})]})}),e(c,{value:"notifications",children:a(b,{children:[a(f,{children:[e(v,{children:"Notification Settings"}),e(C,{children:"Manage your notification preferences"})]}),e(T,{children:e("p",{className:"text-sm",children:"Notification settings content goes here."})})]})}),e(c,{value:"billing",children:a(b,{children:[a(f,{children:[e(v,{children:"Billing Settings"}),e(C,{children:"Manage your billing information"})]}),e(T,{children:e("p",{className:"text-sm",children:"Billing settings content goes here."})})]})})]})]})};var F,H,G;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
}`,...(G=(H=I.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var E,k,B;D.parameters={...D.parameters,docs:{...(E=D.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Overview Content</h3>
          <p className="text-sm text-muted-foreground mt-2">
            This is the overview tab content.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Analytics Content</h3>
          <p className="text-sm text-muted-foreground mt-2">
            This is the analytics tab content.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports" className="space-y-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Reports Content</h3>
          <p className="text-sm text-muted-foreground mt-2">
            This is the reports tab content.
          </p>
        </div>
      </TabsContent>
    </Tabs>
}`,...(B=(k=D.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var $,O,j;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="general" className="flex w-[600px]" orientation="vertical">
      <TabsList className="flex flex-col h-auto w-[140px] mr-4">
        <TabsTrigger value="general" className="w-full">General</TabsTrigger>
        <TabsTrigger value="security" className="w-full">Security</TabsTrigger>
        <TabsTrigger value="notifications" className="w-full">Notifications</TabsTrigger>
        <TabsTrigger value="billing" className="w-full">Billing</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your general preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">General settings content goes here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your security preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Security settings content goes here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Notification settings content goes here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing Settings</CardTitle>
              <CardDescription>Manage your billing information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Billing settings content goes here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
}`,...(j=(O=L.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const Me=["Default","WithThreeTabs","Vertical"];export{I as Default,L as Vertical,D as WithThreeTabs,Me as __namedExportsOrder,Ae as default};
