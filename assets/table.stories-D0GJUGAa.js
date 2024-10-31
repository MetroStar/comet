import{j as V}from"./jsx-runtime-DPda6Ybg.js";import{l as d}from"./table-CAQqAWqW.js";import"./banner-DWdYyvx9.js";import"./button-BF8YY7tL.js";import"./button-group-COrkmNtR.js";import"./checkbox-Cd8NtStn.js";import"./combo-box-CnHRUdIk.js";import"./date-picker-DNWDI5-a.js";import"./error-messages-BtGU3DT8.js";import"./index-JR39el7f.js";import"./form-group-xsfonisk.js";import"./helper-text-B_e6CW13.js";import"./icon-Bk4gxcE7.js";import"./label-BcV181Ee.js";import"./modal-CtnO0EwV.js";import"./process-list-Bt090oHO.js";import"./radio-button-BGLOFIKA.js";import"./range-slider-CBdcLky-.js";import"./search-DRPRFrGd.js";import"./select-BSDXGm39.js";import"./side-navigation-Bhmmua-H.js";import"./site-alert-CL7H2pqO.js";import"./step-indicator-DT3JbH7S.js";import"./summary-box-05qKTCUx.js";import"./tag-Bwb1sPu4.js";import"./text-area-Bj6JkRlB.js";import"./time-picker-Dc6PgCwx.js";import"./tooltip-CskZaSJ8.js";import"./index-DDEeHXjB.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DUolvyrz.js";import"./index-CCDHfnhN.js";import"./config-BXli1stc.js";import"./is-in-viewport-B5ZZJcwh.js";import"./events-C6LRLXdn.js";import"./select-or-matches-BLLALKpn.js";import"./sanitizer-BtXph-xc.js";import"./sprite-Cw9lcZJJ.js";import"./index-CM6m0CIK.js";import"./active-element-CTMAq7ve.js";const te={title:"USWDS/Table",component:d,argTypes:{id:{required:!0},sortDir:{control:"select"}}},u=e=>{const m=[{id:"name",name:"Name"},{id:"orderAdmitted",name:"Order admitted to union"},{id:"dateOfVote",name:"Date of ratification vote"},{id:"dateAdmitted",name:"Date admitted to union"},{id:"percentVoters",name:"Percent of voters in favor of ratification"},{id:"votesCast",name:"Votes cast in favor of ratification"},{id:"estimatedPopulation",name:"Estimated population at time of admission",sortable:!1}],p=[{name:{value:"Hawaii",sortValue:"Hawaii"},orderAdmitted:{value:"50th",sortValue:"50"},dateOfVote:{value:"Apr. 24, 1956",sortValue:"331844400"},dateAdmitted:{value:"Aug. 21, 1959",sortValue:"327092400"},percentVoters:{value:"94.3%",sortValue:"0.943"},votesCast:{value:"132,773",sortValue:"132773"},estimatedPopulation:{value:"632,772",sortValue:"632772"}},{name:{value:"Alaska",sortValue:"Alaska"},orderAdmitted:{value:"49th",sortValue:"49"},dateOfVote:{value:"Jun. 27, 1959",sortValue:"431978400"},dateAdmitted:{value:"Jan. 3, 1959",sortValue:"346960800"},percentVoters:{value:"68.1%",sortValue:"0.681"},votesCast:{value:"17,477",sortValue:"17477"},estimatedPopulation:{value:"226,167",sortValue:"226167"}},{name:{value:"Arizona",sortValue:"Arizona"},orderAdmitted:{value:"48th",sortValue:"48"},dateOfVote:{value:"Feb. 9, 1911",sortValue:"1858528800"},dateAdmitted:{value:"Feb. 14, 1912",sortValue:"1826560800"},percentVoters:{value:"78.7%",sortValue:"0.787"},votesCast:{value:"12,187",sortValue:"12187"},estimatedPopulation:{value:"204,354",sortValue:"204354"}}];return V.jsx(d,{id:e.id,tabIndex:e.tabIndex,columns:m,data:p,caption:e.caption,borderless:e.borderless,striped:e.striped,scrollable:e.scrollable,sortable:e.sortable,sortDir:e.sortDir,sortIndex:e.sortIndex,onSort:e.onSort})},t=u.bind({});t.args={id:"table-1",tabIndex:1,caption:"Voter Data",borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:"ascending",sortIndex:0};const a=u.bind({});a.args={id:"table-1",tabIndex:1,caption:"Voter Data",borderless:!1,striped:!1,scrollable:!1,sortable:!0,sortDir:"ascending",sortIndex:0,onSort:()=>{console.log("Sorting...")}};var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(args: TableProps) => {
  const columns: TableColumn[] = [{
    id: 'name',
    name: 'Name'
  }, {
    id: 'orderAdmitted',
    name: 'Order admitted to union'
  }, {
    id: 'dateOfVote',
    name: 'Date of ratification vote'
  }, {
    id: 'dateAdmitted',
    name: 'Date admitted to union'
  }, {
    id: 'percentVoters',
    name: 'Percent of voters in favor of ratification'
  }, {
    id: 'votesCast',
    name: 'Votes cast in favor of ratification'
  }, {
    id: 'estimatedPopulation',
    name: 'Estimated population at time of admission',
    sortable: false
  }];
  interface StateData {
    name: SortableDataCell | unknown;
    orderAdmitted: SortableDataCell | unknown;
    dateOfVote: SortableDataCell | unknown;
    dateAdmitted: SortableDataCell | unknown;
    percentVoters: SortableDataCell | unknown;
    votesCast: SortableDataCell | unknown;
    estimatedPopulation: SortableDataCell | unknown;
  }
  interface SortableDataCell {
    value: unknown;
    sortValue: unknown;
  }
  const data: StateData[] = [{
    name: {
      value: 'Hawaii',
      sortValue: 'Hawaii'
    },
    orderAdmitted: {
      value: '50th',
      sortValue: '50'
    },
    dateOfVote: {
      value: 'Apr. 24, 1956',
      sortValue: '331844400'
    },
    dateAdmitted: {
      value: 'Aug. 21, 1959',
      sortValue: '327092400'
    },
    percentVoters: {
      value: '94.3%',
      sortValue: '0.943'
    },
    votesCast: {
      value: '132,773',
      sortValue: '132773'
    },
    estimatedPopulation: {
      value: '632,772',
      sortValue: '632772'
    }
  }, {
    name: {
      value: 'Alaska',
      sortValue: 'Alaska'
    },
    orderAdmitted: {
      value: '49th',
      sortValue: '49'
    },
    dateOfVote: {
      value: 'Jun. 27, 1959',
      sortValue: '431978400'
    },
    dateAdmitted: {
      value: 'Jan. 3, 1959',
      sortValue: '346960800'
    },
    percentVoters: {
      value: '68.1%',
      sortValue: '0.681'
    },
    votesCast: {
      value: '17,477',
      sortValue: '17477'
    },
    estimatedPopulation: {
      value: '226,167',
      sortValue: '226167'
    }
  }, {
    name: {
      value: 'Arizona',
      sortValue: 'Arizona'
    },
    orderAdmitted: {
      value: '48th',
      sortValue: '48'
    },
    dateOfVote: {
      value: 'Feb. 9, 1911',
      sortValue: '1858528800'
    },
    dateAdmitted: {
      value: 'Feb. 14, 1912',
      sortValue: '1826560800'
    },
    percentVoters: {
      value: '78.7%',
      sortValue: '0.787'
    },
    votesCast: {
      value: '12,187',
      sortValue: '12187'
    },
    estimatedPopulation: {
      value: '204,354',
      sortValue: '204354'
    }
  }];
  return <Table id={args.id} tabIndex={args.tabIndex} columns={columns} data={data} caption={args.caption} borderless={args.borderless} striped={args.striped} scrollable={args.scrollable} sortable={args.sortable} sortDir={args.sortDir} sortIndex={args.sortIndex} onSort={args.onSort} />;
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var l,s,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`(args: TableProps) => {
  const columns: TableColumn[] = [{
    id: 'name',
    name: 'Name'
  }, {
    id: 'orderAdmitted',
    name: 'Order admitted to union'
  }, {
    id: 'dateOfVote',
    name: 'Date of ratification vote'
  }, {
    id: 'dateAdmitted',
    name: 'Date admitted to union'
  }, {
    id: 'percentVoters',
    name: 'Percent of voters in favor of ratification'
  }, {
    id: 'votesCast',
    name: 'Votes cast in favor of ratification'
  }, {
    id: 'estimatedPopulation',
    name: 'Estimated population at time of admission',
    sortable: false
  }];
  interface StateData {
    name: SortableDataCell | unknown;
    orderAdmitted: SortableDataCell | unknown;
    dateOfVote: SortableDataCell | unknown;
    dateAdmitted: SortableDataCell | unknown;
    percentVoters: SortableDataCell | unknown;
    votesCast: SortableDataCell | unknown;
    estimatedPopulation: SortableDataCell | unknown;
  }
  interface SortableDataCell {
    value: unknown;
    sortValue: unknown;
  }
  const data: StateData[] = [{
    name: {
      value: 'Hawaii',
      sortValue: 'Hawaii'
    },
    orderAdmitted: {
      value: '50th',
      sortValue: '50'
    },
    dateOfVote: {
      value: 'Apr. 24, 1956',
      sortValue: '331844400'
    },
    dateAdmitted: {
      value: 'Aug. 21, 1959',
      sortValue: '327092400'
    },
    percentVoters: {
      value: '94.3%',
      sortValue: '0.943'
    },
    votesCast: {
      value: '132,773',
      sortValue: '132773'
    },
    estimatedPopulation: {
      value: '632,772',
      sortValue: '632772'
    }
  }, {
    name: {
      value: 'Alaska',
      sortValue: 'Alaska'
    },
    orderAdmitted: {
      value: '49th',
      sortValue: '49'
    },
    dateOfVote: {
      value: 'Jun. 27, 1959',
      sortValue: '431978400'
    },
    dateAdmitted: {
      value: 'Jan. 3, 1959',
      sortValue: '346960800'
    },
    percentVoters: {
      value: '68.1%',
      sortValue: '0.681'
    },
    votesCast: {
      value: '17,477',
      sortValue: '17477'
    },
    estimatedPopulation: {
      value: '226,167',
      sortValue: '226167'
    }
  }, {
    name: {
      value: 'Arizona',
      sortValue: 'Arizona'
    },
    orderAdmitted: {
      value: '48th',
      sortValue: '48'
    },
    dateOfVote: {
      value: 'Feb. 9, 1911',
      sortValue: '1858528800'
    },
    dateAdmitted: {
      value: 'Feb. 14, 1912',
      sortValue: '1826560800'
    },
    percentVoters: {
      value: '78.7%',
      sortValue: '0.787'
    },
    votesCast: {
      value: '12,187',
      sortValue: '12187'
    },
    estimatedPopulation: {
      value: '204,354',
      sortValue: '204354'
    }
  }];
  return <Table id={args.id} tabIndex={args.tabIndex} columns={columns} data={data} caption={args.caption} borderless={args.borderless} striped={args.striped} scrollable={args.scrollable} sortable={args.sortable} sortDir={args.sortDir} sortIndex={args.sortIndex} onSort={args.onSort} />;
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const ae=["Default","OnSort"];export{t as Default,a as OnSort,ae as __namedExportsOrder,te as default};
