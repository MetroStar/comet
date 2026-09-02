import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-BZJXY1be.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{t as a}from"./button-DAmO-cIx.js";import{i as o,n as s,r as c,t as l}from"./hooks-BkWQ68km.js";var u;function d(){return(d=t((()=>{u=()=>({clear:e=>{let t=document.getElementById(e);if(t===null)return;let n=t.parentElement;if(n===null)return;n.querySelectorAll(`.usa-file-input__preview`).forEach(e=>e.remove()),n.querySelectorAll(`.usa-file-input__preview-heading`).forEach(e=>e.remove());let r=n.querySelector(`.usa-sr-only`);r&&(r.innerHTML=`No file selected.`);let i=n.querySelector(`.usa-file-input__instructions`);i&&i.removeAttribute(`hidden`),t.setAttribute(`aria-label`,``),t.value=``}})})))()}var f=n({CustomClear:()=>v,Multiple:()=>_,Standard:()=>g,__namedExportsOrder:()=>y,default:()=>h}),p,m,h,g,_,v,y;function b(){return(b=t((()=>{p=e(r()),c(),l(),o(),m=i(),h={title:`USWDS/Forms/File Input`,component:s,argTypes:{id:{required:!0},name:{required:!0},multiple:{type:`boolean`},required:{control:`boolean`},disabled:{control:`boolean`}}},g={args:{id:`file-input-1`,name:`file-input-1`,multiple:!1,required:!1,label:`Select a file`,helperText:`Input accepts a single file`,disabled:!1},render:e=>(0,m.jsx)(s,{...e})},_={args:{id:`file-input-2`,name:`file-input-2`,multiple:!0,required:!1,label:`Select files`,helperText:`Input accepts multiple files`,disabled:!1},render:e=>(0,m.jsx)(s,{...e})},v={args:{id:`file-input-1`,name:`file-input-1`,multiple:!1,required:!1,label:`Select a file`,helperText:`Input accepts a single file`,disabled:!1},render:e=>{let{clear:t}=u(),[n,r]=(0,p.useState)(null);return(0,p.useEffect)(()=>{console.log(n)},[n]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`padding-bottom-1`,children:(0,m.jsx)(s,{onChange:e=>{let t=e.target?.files;t&&r(t[0])},...e})}),(0,m.jsx)(`div`,{children:(0,m.jsx)(a,{id:`clear-btn`,onClick:()=>{t(e.id),r(null)},children:`Clear`})})]})},parameters:{docs:{source:{type:`code`}}}},y=[`Standard`,`Multiple`,`CustomClear`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'file-input-1',
    name: 'file-input-1',
    multiple: false,
    required: false,
    label: 'Select a file',
    helperText: 'Input accepts a single file',
    disabled: false
  },
  render: (args: FileInputProps) => <FileInput {...args} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'file-input-2',
    name: 'file-input-2',
    multiple: true,
    required: false,
    label: 'Select files',
    helperText: 'Input accepts multiple files',
    disabled: false
  },
  render: (args: FileInputProps) => <FileInput {...args} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'file-input-1',
    name: 'file-input-1',
    multiple: false,
    required: false,
    label: 'Select a file',
    helperText: 'Input accepts a single file',
    disabled: false
  },
  render: (args: FileInputProps) => {
    const {
      clear
    } = useFileInput();
    const [file, setFile] = useState<File | null>(null);
    useEffect(() => {
      // eslint-disable-next-line no-console
      console.log(file);
    }, [file]);
    return <>
        <div className="padding-bottom-1">
          <FileInput onChange={event => {
          const target = event.target as HTMLInputElement;
          const files = target?.files;
          if (files) {
            setFile(files[0]);
          }
        }} {...args} />
        </div>
        <div>
          <Button id="clear-btn" onClick={() => {
          clear(args.id);
          setFile(null);
        }}>
            Clear
          </Button>
        </div>
      </>;
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}`,...v.parameters?.docs?.source}}}})))()}export{b as n,d as r,f as t};