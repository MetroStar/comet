import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-ct7Z8PCe.js";import{c as b}from"./index-B5MGvWjW.js";import{B as _}from"./button-DrgNhKm4.js";const i=({id:e,message:l="This is a toast notification",duration:s=3e3,type:r="info",placement:t="topRight",className:u="",onClose:f=()=>{},allowClose:y=!0})=>{const[h,g]=n.useState(!0),[v,T]=n.useState(!1),w=b("toast",`toast--${r}`,`toast--${t}`,u,`${v?"toast--isLeaving":""}`),c=()=>{T(!0),setTimeout(()=>{g(!1),f()},300)};return n.useEffect(()=>{if(s>0){const C=setTimeout(()=>{c()},s);return()=>clearTimeout(C)}},[s]),h?a.jsxs("div",{id:e,className:w,children:[a.jsx("p",{className:"toast__message",children:l}),y&&a.jsx("button",{onClick:c,className:"toast__close-button","aria-label":"Close notification",role:"button",children:"✕"})]}):a.jsx(a.Fragment,{})};try{i.displayName="Toast",i.__docgenInfo={description:"",displayName:"Toast",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!0,type:{name:"string"}},message:{defaultValue:{value:"This is a toast notification"},description:"The message to display in the toast",name:"message",required:!1,type:{name:"string"}},duration:{defaultValue:{value:"3000"},description:"Duration in milliseconds to show the toast. Set to 0 for no auto-dismiss",name:"duration",required:!1,type:{name:"number"}},type:{defaultValue:{value:"info"},description:"The type of toast which determines its color scheme",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"emergency"'}]}},placement:{defaultValue:{value:"topRight"},description:"The placement of toast which determines where it appears",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topRight"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"bottomLeft"'}]}},onClose:{defaultValue:{value:"() => {}"},description:"Callback function when toast is closed either manually or automatically",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"A custom class to apply to the component",name:"className",required:!1,type:{name:"string"}},allowClose:{defaultValue:{value:"true"},description:"Whether or not to display the close button",name:"allowClose",required:!1,type:{name:"boolean"}}}}}catch{}try{toast.displayName="toast",toast.__docgenInfo={description:"",displayName:"toast",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!0,type:{name:"string"}},message:{defaultValue:{value:"This is a toast notification"},description:"The message to display in the toast",name:"message",required:!1,type:{name:"string"}},duration:{defaultValue:{value:"3000"},description:"Duration in milliseconds to show the toast. Set to 0 for no auto-dismiss",name:"duration",required:!1,type:{name:"number"}},type:{defaultValue:{value:"info"},description:"The type of toast which determines its color scheme",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'},{value:'"emergency"'}]}},placement:{defaultValue:{value:"topRight"},description:"The placement of toast which determines where it appears",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topRight"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"bottomLeft"'}]}},onClose:{defaultValue:{value:"() => {}"},description:"Callback function when toast is closed either manually or automatically",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"A custom class to apply to the component",name:"className",required:!1,type:{name:"string"}},allowClose:{defaultValue:{value:"true"},description:"Whether or not to display the close button",name:"allowClose",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Extras/Toast",component:i,argTypes:{id:{control:"text"},message:{control:"text"},duration:{control:"number"},type:{control:"select",required:!0},placement:{control:"select",required:!0},onClose:{action:"close"},allowClose:{control:"boolean"},className:{control:!1}},parameters:{docs:{source:{type:"code"}}}},o={args:{id:"toast-info",message:"This is a toast notification",type:"info",placement:"topRight",duration:3e3,allowClose:!0},render:e=>{const[l,s]=n.useState([]),r=()=>{const t={key:e.id,id:`toast-${e.type}`,message:e.message?e.message:"Default toast notification for "+e.type,type:e.type,placement:e.placement,duration:e.duration?e.duration:3e3,allowClose:e.allowClose};s(u=>[...u,t])};return a.jsxs("div",{style:{padding:"16px"},children:[a.jsx(_,{id:"toast-button",onClick:()=>r(),children:"Send Toast"}),l.map(t=>a.jsx(i,{id:t.id,message:t.message,type:t.type,placement:t.placement,duration:t.duration,allowClose:t.allowClose},t.key))]})}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'toast-info',
    message: 'This is a toast notification',
    type: 'info',
    placement: 'topRight',
    duration: 3000,
    allowClose: true
  },
  render: (args: ToastProps) => {
    const [toasts, setToasts] = useState<any[]>([]);
    const addToast = () => {
      const newToast = {
        key: args.id,
        id: \`toast-\${args.type}\`,
        message: !args.message ? 'Default toast notification for ' + args.type : args.message,
        type: args.type,
        placement: args.placement,
        duration: !args.duration ? 3000 : args.duration,
        allowClose: args.allowClose
      };
      setToasts(prev => [...prev, newToast]);
    };
    return <div style={{
      padding: '16px'
    }}>
        <Button id="toast-button" onClick={() => addToast()}>
          Send Toast
        </Button>

        {toasts.map(toast => <Toast key={toast.key} id={toast.id} message={toast.message} type={toast.type} placement={toast.placement} duration={toast.duration} allowClose={toast.allowClose} />)}
      </div>;
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,k as default};
