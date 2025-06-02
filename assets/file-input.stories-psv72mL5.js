import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./iframe-DGHArgJO.js";import{F as c}from"./index-DecsTZxz.js";import"./index-BCLu61py.js";import{B as q}from"./button-CmQiXBCL.js";import"./select-or-matches-DM7yTSmT.js";import"./config-ODXtjL5r.js";import"./sanitizer-BDKKlE4O.js";import"./form-group-B8SfswI0.js";import"./index-CiJQEFXw.js";import"./label-0qqEdO1f.js";import"./helper-text-BRA2CuHl.js";import"./error-messages-pdO9TZPZ.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./events-CleOcHg4.js";import"./active-element-BuxAly_Z.js";const y=()=>({clear:p=>{const t=document.getElementById(p);if(t===null)return;const e=t.parentElement;if(e===null)return;e.querySelectorAll(".usa-file-input__preview").forEach(u=>u.remove()),e.querySelectorAll(".usa-file-input__preview-heading").forEach(u=>u.remove());const i=e.querySelector(".usa-sr-only");i&&(i.innerHTML="No file selected.");const d=e.querySelector(".usa-file-input__instructions");d&&d.removeAttribute("hidden"),t.setAttribute("aria-label",""),t.value=""}}),G={title:"USWDS/Forms/File Input",component:c,argTypes:{id:{required:!0},name:{required:!0},multiple:{type:"boolean"},required:{control:"boolean"},disabled:{control:"boolean"}}},C=l=>r.jsx(c,{...l}),s=C.bind({});s.args={id:"file-input-1",name:"file-input-1",multiple:!1,required:!1,label:"Select a file",helperText:"Input accepts a single file",disabled:!1};const a=C.bind({});a.args={id:"file-input-2",name:"file-input-2",multiple:!0,required:!1,label:"Select files",helperText:"Input accepts multiple files",disabled:!1};const j=l=>{const{clear:p}=y(),[t,e]=f.useState(null);return f.useEffect(()=>{console.log(t)},[t]),r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"padding-bottom-1",children:r.jsx(c,{onChange:m=>{const o=m.target,i=o==null?void 0:o.files;i&&e(i[0])},...l})}),r.jsx("div",{children:r.jsx(q,{id:"clear-btn",onClick:()=>{p(l.id),e(null)},children:"Clear"})})]})},n=j.bind({});n.args={id:"file-input-1",name:"file-input-1",multiple:!1,required:!1,label:"Select a file",helperText:"Input accepts a single file",disabled:!1};n.parameters={docs:{source:{type:"code"}}};var g,b,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"(args: FileInputProps) => <FileInput {...args} />",...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var F,S,x;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:"(args: FileInputProps) => <FileInput {...args} />",...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var E,I,h;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`(args: FileInputProps) => {
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
}`,...(h=(I=n.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};const J=["Standard","Multiple","CustomClear"];export{n as CustomClear,a as Multiple,s as Standard,J as __namedExportsOrder,G as default};
