import{j as a}from"./jsx-runtime-Bxcv0yjW.js";import{c as m}from"./index-Bl6ORisp.js";const u=({id:e,name:t,label:r,checked:i,defaultChecked:c,isTile:d,onChange:n,onClick:o,...l})=>{const s=`${e}__usa-checkbox__input`,p=m("usa-checkbox__input",{"usa-checkbox__input--tile":d});return a.jsxs("div",{id:e,className:"usa-checkbox",children:[a.jsx("input",{className:p,id:s,type:"checkbox",name:t,checked:i,defaultChecked:c,onChange:n,onClick:o,...l}),a.jsx("label",{className:"usa-checkbox__label",htmlFor:s,children:r})]})},h=({id:e,name:t,data:r,areTiles:i,onChange:c,onClick:d})=>a.jsx(a.Fragment,{children:r.map((n,o)=>{const l=`${e}__checkbox${o}`;return a.jsx(u,{id:l,name:t,label:n.label,value:n.value,checked:n.checked,defaultChecked:n.defaultChecked,isTile:i,onChange:c,onClick:d},l)})});try{u.displayName="Checkbox",u.__docgenInfo={description:"Checkboxes allow users to select one or more options from a list.",displayName:"Checkbox",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name for the checkbox input field",name:"name",required:!1,type:{name:"string"}},isTile:{defaultValue:null,description:"Whether the component is rendered as a tile",name:"isTile",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Event handler will be triggered when the checkbox value changes",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onClick:{defaultValue:null,description:"Event handler will be triggered when the checkbox is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"The text inside of the checkbox",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"Default value of the checkbox",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},checked:{defaultValue:null,description:"Whether the checkbox is checked by default",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"Whether the checkbox is checked by default",name:"defaultChecked",required:!1,type:{name:"boolean"}}}}}catch{}try{checkbox.displayName="checkbox",checkbox.__docgenInfo={description:"Checkboxes allow users to select one or more options from a list.",displayName:"checkbox",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name for the checkbox input field",name:"name",required:!1,type:{name:"string"}},isTile:{defaultValue:null,description:"Whether the component is rendered as a tile",name:"isTile",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Event handler will be triggered when the checkbox value changes",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onClick:{defaultValue:null,description:"Event handler will be triggered when the checkbox is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"The text inside of the checkbox",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"Default value of the checkbox",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},checked:{defaultValue:null,description:"Whether the checkbox is checked by default",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"Whether the checkbox is checked by default",name:"defaultChecked",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="CheckboxGroup",h.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{id:{defaultValue:null,description:"The unique identifier for this component",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"The name for all checkbox input fields",name:"name",required:!0,type:{name:"string"}},data:{defaultValue:null,description:"Array of checkbox data for the input fields",name:"data",required:!0,type:{name:"CheckboxData[]"}},areTiles:{defaultValue:null,description:"Whether the components are rendered as a tile",name:"areTiles",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Event handler will be triggered when the checkbox value changes",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onClick:{defaultValue:null,description:"Event handler will be triggered when the checkbox is clicked",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}}}}}catch{}export{u as C};