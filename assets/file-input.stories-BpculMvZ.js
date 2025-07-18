import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./iframe-Dn1ZsrJK.js";import{F as p}from"./index-NrSadys6.js";import"./index-Cida3cFT.js";import{B as q}from"./button-BJzkurNR.js";import"./select-or-matches-DM7yTSmT.js";import"./config-ODXtjL5r.js";import"./sanitizer-BDKKlE4O.js";import"./form-group-DC2meTDh.js";import"./index-C9lBdWCt.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-pdO9TZPZ.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./events-CleOcHg4.js";import"./active-element-BuxAly_Z.js";const y=()=>({clear:u=>{const r=document.getElementById(u);if(r===null)return;const e=r.parentElement;if(e===null)return;e.querySelectorAll(".usa-file-input__preview").forEach(c=>c.remove()),e.querySelectorAll(".usa-file-input__preview-heading").forEach(c=>c.remove());const i=e.querySelector(".usa-sr-only");i&&(i.innerHTML="No file selected.");const m=e.querySelector(".usa-file-input__instructions");m&&m.removeAttribute("hidden"),r.setAttribute("aria-label",""),r.value=""}}),W={title:"USWDS/Forms/File Input",component:p,argTypes:{id:{required:!0},name:{required:!0},multiple:{type:"boolean"},required:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{id:"file-input-1",name:"file-input-1",multiple:!1,required:!1,label:"Select a file",helperText:"Input accepts a single file",disabled:!1},render:l=>t.jsx(p,{...l})},a={args:{id:"file-input-2",name:"file-input-2",multiple:!0,required:!1,label:"Select files",helperText:"Input accepts multiple files",disabled:!1},render:l=>t.jsx(p,{...l})},o={args:{id:"file-input-1",name:"file-input-1",multiple:!1,required:!1,label:"Select a file",helperText:"Input accepts a single file",disabled:!1},render:l=>{const{clear:u}=y(),[r,e]=f.useState(null);return f.useEffect(()=>{console.log(r)},[r]),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"padding-bottom-1",children:t.jsx(p,{onChange:d=>{const n=d.target,i=n==null?void 0:n.files;i&&e(i[0])},...l})}),t.jsx("div",{children:t.jsx(q,{id:"clear-btn",onClick:()=>{u(l.id),e(null)},children:"Clear"})})]})},parameters:{docs:{source:{type:"code"}}}};var g,b,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,v,F;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(v=a.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var I,h,E;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const z=["Standard","Multiple","CustomClear"];export{o as CustomClear,a as Multiple,s as Standard,z as __namedExportsOrder,W as default};
