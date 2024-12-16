import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{r as f,R as q}from"./index-DDT2H6na.js";import{c as x}from"./index-DFtWylL1.js";import{L as v}from"./label-Cm37mQmh.js";import{H as V}from"./helper-text-CvsfwBJV.js";import{E as b}from"./error-messages-9EHEOSno.js";const c=({id:r=void 0,required:g,label:u,helperText:d,errors:l,validationStatus:h,className:y,fieldControl:t,children:n})=>{const p=x("usa-form-group",{"usa-form-group--error":!!(l&&l.length>0)||h==="error"},y);if(!n&&!t)return e.jsx(e.Fragment,{});if(n)return e.jsx("div",{id:r,className:p,children:n});let m=f.isValidElement(t)?t.props.id:void 0;const a=f.isValidElement(t)?t:void 0;let i=a;const o=i==null?void 0:i.props.className;if(o==="usa-combo-box"||o==="usa-time-picker"||o==="usa-date-picker"){const s=a==null?void 0:a.props.children;m=s==null?void 0:s.props.id}else a&&(i=q.cloneElement(a,{"aria-describedby":`${r}-helper-text`}));return e.jsxs("div",{id:r,className:p,children:[u?e.jsx(v,{htmlFor:m,required:g,children:u}):e.jsx(e.Fragment,{}),d?e.jsx(V,{id:`${r}-helper-text`,children:d}):e.jsx(e.Fragment,{}),l?e.jsx(b,{id:`${r}-errors`,errors:l}):e.jsx(e.Fragment,{}),i]})};try{c.displayName="FormGroup",c.__docgenInfo={description:"A wrapper for form elements used to provide validation formatting.",displayName:"FormGroup",props:{id:{defaultValue:{value:"undefined"},description:"The unique identifier for this component",name:"id",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"A boolean indicating whether or not the field is required",name:"required",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label text to display with the input",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text to display with the input",name:"helperText",required:!1,type:{name:"string"}},errors:{defaultValue:null,description:"An array of string error messages",name:"errors",required:!1,type:{name:"string | string[]"}},validationStatus:{defaultValue:null,description:"State based styling to apply to the form group",name:"validationStatus",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},className:{defaultValue:null,description:"Additional class name for the form group",name:"className",required:!1,type:{name:"string"}},fieldControl:{defaultValue:null,description:"The contents of the form group",name:"fieldControl",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The contents of the form group",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}try{formgroup.displayName="formgroup",formgroup.__docgenInfo={description:"A wrapper for form elements used to provide validation formatting.",displayName:"formgroup",props:{id:{defaultValue:{value:"undefined"},description:"The unique identifier for this component",name:"id",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"A boolean indicating whether or not the field is required",name:"required",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label text to display with the input",name:"label",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Helper text to display with the input",name:"helperText",required:!1,type:{name:"string"}},errors:{defaultValue:null,description:"An array of string error messages",name:"errors",required:!1,type:{name:"string | string[]"}},validationStatus:{defaultValue:null,description:"State based styling to apply to the form group",name:"validationStatus",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},className:{defaultValue:null,description:"Additional class name for the form group",name:"className",required:!1,type:{name:"string"}},fieldControl:{defaultValue:null,description:"The contents of the form group",name:"fieldControl",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"The contents of the form group",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{c as F};