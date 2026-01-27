import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-Ct8SnmH1.js";import{c as T}from"./index-fWUUcN-5.js";import{B as w}from"./button-C4QfSxW0.js";import"./preload-helper-PPVm8Dsz.js";const i=({id:e,message:l="This is a toast notification",duration:s=3e3,type:r="info",placement:t="topRight",className:u="",onClose:d=()=>{},allowClose:m=!0})=>{const[p,f]=n.useState(!0),[y,h]=n.useState(!1),g=T("toast",`toast--${r}`,`toast--${t}`,u,`${y?"toast--isLeaving":""}`),c=()=>{h(!0),setTimeout(()=>{f(!1),d()},300)};return n.useEffect(()=>{if(s>0){const v=setTimeout(()=>{c()},s);return()=>clearTimeout(v)}},[s]),p?a.jsxs("div",{id:e,className:g,children:[a.jsx("p",{className:"toast__message",children:l}),m&&a.jsx("button",{onClick:c,className:"toast__close-button","aria-label":"Close notification",role:"button",children:"✕"})]}):a.jsx(a.Fragment,{})};try{i.displayName="Toast",i.__docgenInfo={description:"",displayName:"Toast",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!0,type:{name:"string"}},message:{defaultValue:{value:"This is a toast notification"},description:"The message to display in the toast",name:"message",required:!1,type:{name:"string"}},duration:{defaultValue:{value:"3000"},description:"Duration in milliseconds to show the toast. Set to 0 for no auto-dismiss",name:"duration",required:!1,type:{name:"number"}},type:{defaultValue:{value:"info"},description:"The type of toast which determines its color scheme",name:"type",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"warning"'},{value:'"success"'},{value:'"emergency"'}]}},placement:{defaultValue:{value:"topRight"},description:"The placement of toast which determines where it appears",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topRight"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"bottomLeft"'}]}},onClose:{defaultValue:{value:"() => {}"},description:"Callback function when toast is closed either manually or automatically",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"A custom class to apply to the component",name:"className",required:!1,type:{name:"string"}},allowClose:{defaultValue:{value:"true"},description:"Whether or not to display the close button",name:"allowClose",required:!1,type:{name:"boolean"}}}}}catch{}try{toast.displayName="toast",toast.__docgenInfo={description:"",displayName:"toast",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!0,type:{name:"string"}},message:{defaultValue:{value:"This is a toast notification"},description:"The message to display in the toast",name:"message",required:!1,type:{name:"string"}},duration:{defaultValue:{value:"3000"},description:"Duration in milliseconds to show the toast. Set to 0 for no auto-dismiss",name:"duration",required:!1,type:{name:"number"}},type:{defaultValue:{value:"info"},description:"The type of toast which determines its color scheme",name:"type",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"warning"'},{value:'"success"'},{value:'"emergency"'}]}},placement:{defaultValue:{value:"topRight"},description:"The placement of toast which determines where it appears",name:"placement",required:!1,type:{name:"enum",value:[{value:'"topRight"'},{value:'"bottomRight"'},{value:'"topLeft"'},{value:'"bottomLeft"'}]}},onClose:{defaultValue:{value:"() => {}"},description:"Callback function when toast is closed either manually or automatically",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"A custom class to apply to the component",name:"className",required:!1,type:{name:"string"}},allowClose:{defaultValue:{value:"true"},description:"Whether or not to display the close button",name:"allowClose",required:!1,type:{name:"boolean"}}}}}catch{}const x={title:"Extras/Toast",component:i,argTypes:{id:{control:"text"},message:{control:"text"},duration:{control:"number"},type:{control:"select",required:!0},placement:{control:"select",required:!0},onClose:{action:"close"},allowClose:{control:"boolean"},className:{control:!1}},parameters:{docs:{source:{type:"code"}}}},o={args:{id:"toast-info",message:"This is a toast notification",type:"info",placement:"topRight",duration:3e3,allowClose:!0},render:e=>{const[l,s]=n.useState([]),r=()=>{const t={key:e.id,id:`toast-${e.type}`,message:e.message?e.message:"Default toast notification for "+e.type,type:e.type,placement:e.placement,duration:e.duration?e.duration:3e3,allowClose:e.allowClose};s(u=>[...u,t])};return a.jsxs("div",{style:{padding:"16px"},children:[a.jsx(w,{id:"toast-button",onClick:()=>r(),children:"Send Toast"}),l.map(t=>a.jsx(i,{id:t.id,message:t.message,type:t.type,placement:t.placement,duration:t.duration,allowClose:t.allowClose},t.key))]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const N=["Default"];export{o as Default,N as __namedExportsOrder,x as default};
