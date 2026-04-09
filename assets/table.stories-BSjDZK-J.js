import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-CsouTy85.js";import{t as n}from"./jsx-runtime-MmJhrRyC.js";import{n as r,t as i}from"./src-BZKMcYWZ.js";var a,o,s,c,l,u;e((()=>{t(),i(),a=n(),o={title:`USWDS/Table`,component:r,argTypes:{id:{required:!0},sortDir:{control:`select`}}},s=e=>(0,a.jsx)(r,{id:e.id,tabIndex:e.tabIndex,columns:[{id:`name`,name:`Name`},{id:`orderAdmitted`,name:`Order admitted to union`},{id:`dateOfVote`,name:`Date of ratification vote`},{id:`dateAdmitted`,name:`Date admitted to union`},{id:`percentVoters`,name:`Percent of voters in favor of ratification`},{id:`votesCast`,name:`Votes cast in favor of ratification`},{id:`estimatedPopulation`,name:`Estimated population at time of admission`,sortable:!1}],data:[{name:{value:`Hawaii`,sortValue:`Hawaii`},orderAdmitted:{value:`50th`,sortValue:`50`},dateOfVote:{value:`Apr. 24, 1956`,sortValue:`331844400`},dateAdmitted:{value:`Aug. 21, 1959`,sortValue:`327092400`},percentVoters:{value:`94.3%`,sortValue:`0.943`},votesCast:{value:`132,773`,sortValue:`132773`},estimatedPopulation:{value:`632,772`,sortValue:`632772`}},{name:{value:`Alaska`,sortValue:`Alaska`},orderAdmitted:{value:`49th`,sortValue:`49`},dateOfVote:{value:`Jun. 27, 1959`,sortValue:`431978400`},dateAdmitted:{value:`Jan. 3, 1959`,sortValue:`346960800`},percentVoters:{value:`68.1%`,sortValue:`0.681`},votesCast:{value:`17,477`,sortValue:`17477`},estimatedPopulation:{value:`226,167`,sortValue:`226167`}},{name:{value:`Arizona`,sortValue:`Arizona`},orderAdmitted:{value:`48th`,sortValue:`48`},dateOfVote:{value:`Feb. 9, 1911`,sortValue:`1858528800`},dateAdmitted:{value:`Feb. 14, 1912`,sortValue:`1826560800`},percentVoters:{value:`78.7%`,sortValue:`0.787`},votesCast:{value:`12,187`,sortValue:`12187`},estimatedPopulation:{value:`204,354`,sortValue:`204354`}}],caption:e.caption,borderless:e.borderless,striped:e.striped,scrollable:e.scrollable,sortable:e.sortable,sortDir:e.sortDir,sortIndex:e.sortIndex,onSort:e.onSort}),c={args:{id:`table-1`,tabIndex:0,caption:`Voter Data`,borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:`ascending`,sortIndex:0},render:e=>s(e)},l={args:{id:`table-1`,tabIndex:0,caption:`Voter Data`,borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:`ascending`,sortIndex:0,onSort:()=>{console.log(`Sorting...`)}},render:e=>s(e)},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Default`,`OnSort`]}))();export{c as Default,l as OnSort,u as __namedExportsOrder,o as default};