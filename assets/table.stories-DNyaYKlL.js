import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{l as o}from"./table-DEpAyD-X.js";import"./banner-CIEAiagf.js";import"./button-CkmPZfQ7.js";import"./button-group-BLfN6Qzi.js";import"./checkbox-CiZ0LQAf.js";import"./combo-box-CPoxHoLO.js";import"./date-picker-1x-RJkWC.js";import"./error-messages-_lA7co94.js";import"./index-DV0osu16.js";import"./form-group-CLG5AUFS.js";import"./helper-text-BRA2CuHl.js";import"./icon-BaCh6IKn.js";import"./label-0qqEdO1f.js";import"./modal-CS74MdwY.js";import"./process-list-EgDY_ZW-.js";import"./radio-button-BojC1or9.js";import"./range-slider-Crd-k5Lz.js";import"./search-BosVVfA0.js";import"./select-BK3H334u.js";import"./side-navigation-BnGWXKbX.js";import"./site-alert-DqRkn5Co.js";import"./step-indicator-v3Vvymes.js";import"./summary-box-B2UM3Fmg.js";import"./tag-D2rL-ia4.js";import"./text-area-BkFw3Hdn.js";import"./time-picker-Btaj1Wdb.js";import"./tooltip-BnWcB7Kc.js";import"./index-BV__WvX7.js";import"./iframe-U5vUr3EP.js";import"./index-Bp6jiaQq.js";import"./config-ODXtjL5r.js";import"./select-or-matches-DM7yTSmT.js";import"./events-CleOcHg4.js";import"./sanitizer-BDKKlE4O.js";import"./index-BPUyFTct.js";import"./is-in-viewport-ChIQrv3L.js";import"./sprite-Cw9lcZJJ.js";import"./index-B7-aAo-x.js";import"./active-element-BuxAly_Z.js";const M={title:"USWDS/Table",component:o,argTypes:{id:{required:!0},sortDir:{control:"select"}}},a=e=>{const s=[{id:"name",name:"Name"},{id:"orderAdmitted",name:"Order admitted to union"},{id:"dateOfVote",name:"Date of ratification vote"},{id:"dateAdmitted",name:"Date admitted to union"},{id:"percentVoters",name:"Percent of voters in favor of ratification"},{id:"votesCast",name:"Votes cast in favor of ratification"},{id:"estimatedPopulation",name:"Estimated population at time of admission",sortable:!1}],i=[{name:{value:"Hawaii",sortValue:"Hawaii"},orderAdmitted:{value:"50th",sortValue:"50"},dateOfVote:{value:"Apr. 24, 1956",sortValue:"331844400"},dateAdmitted:{value:"Aug. 21, 1959",sortValue:"327092400"},percentVoters:{value:"94.3%",sortValue:"0.943"},votesCast:{value:"132,773",sortValue:"132773"},estimatedPopulation:{value:"632,772",sortValue:"632772"}},{name:{value:"Alaska",sortValue:"Alaska"},orderAdmitted:{value:"49th",sortValue:"49"},dateOfVote:{value:"Jun. 27, 1959",sortValue:"431978400"},dateAdmitted:{value:"Jan. 3, 1959",sortValue:"346960800"},percentVoters:{value:"68.1%",sortValue:"0.681"},votesCast:{value:"17,477",sortValue:"17477"},estimatedPopulation:{value:"226,167",sortValue:"226167"}},{name:{value:"Arizona",sortValue:"Arizona"},orderAdmitted:{value:"48th",sortValue:"48"},dateOfVote:{value:"Feb. 9, 1911",sortValue:"1858528800"},dateAdmitted:{value:"Feb. 14, 1912",sortValue:"1826560800"},percentVoters:{value:"78.7%",sortValue:"0.787"},votesCast:{value:"12,187",sortValue:"12187"},estimatedPopulation:{value:"204,354",sortValue:"204354"}}];return n.jsx(o,{id:e.id,tabIndex:e.tabIndex,columns:s,data:i,caption:e.caption,borderless:e.borderless,striped:e.striped,scrollable:e.scrollable,sortable:e.sortable,sortDir:e.sortDir,sortIndex:e.sortIndex,onSort:e.onSort})},t={args:{id:"table-1",tabIndex:0,caption:"Voter Data",borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:"ascending",sortIndex:0},render:e=>a(e)},r={args:{id:"table-1",tabIndex:0,caption:"Voter Data",borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:"ascending",sortIndex:0,onSort:()=>{console.log("Sorting...")}},render:e=>a(e)};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'table-1',
    tabIndex: 0,
    caption: 'Voter Data',
    borderless: false,
    striped: false,
    scrollable: false,
    sortable: true,
    sortDir: 'ascending',
    sortIndex: 0
  },
  render: (args: TableProps) => createTable(args)
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'table-1',
    tabIndex: 0,
    caption: 'Voter Data',
    borderless: false,
    striped: false,
    scrollable: false,
    sortable: true,
    sortDir: 'ascending',
    sortIndex: 0,
    onSort: () => {
      // eslint-disable-next-line no-console
      console.log('Sorting...');
    }
  },
  render: (args: TableProps) => createTable(args)
}`,...r.parameters?.docs?.source}}};const Q=["Default","OnSort"];export{t as Default,r as OnSort,Q as __namedExportsOrder,M as default};
