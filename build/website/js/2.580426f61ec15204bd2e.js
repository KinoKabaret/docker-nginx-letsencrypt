webpackJsonp([2],{34:function(e,t,a){"use strict";function s(e){a(65)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(44),n=a(67),r=a(4),o=s,l=r(i.a,n.a,!1,o,"data-v-1dab0a63",null);t.default=l.exports},44:function(e,t,a){"use strict";var s=a(1);t.a={components:{QDataTable:s.e,QBtn:s.c},name:"personae",methods:{launch:function(e){Object(s.x)(e)},tableDetail:function(e){alert(e.row.status)}},data:function(){return{columns:[{label:"Name",field:"name",width:"80px",filter:!0,sort:!0,type:"string"},{label:"Description",field:"description",width:"250px",filter:!0,sort:!1,type:"string"},{label:"Beta",field:"delivery",width:"70px",filter:!0,sort:!0,type:"date"},{label:"Status",field:"status",width:"60px",filter:!0,sort:!0,type:"string"}],config:{rowHeight:"30px",title:"<strong>Personæ Project List</strong>",noHeader:!1,refresh:!1,columnPicker:!1,leftStickyColumns:2,pagination:{rowsPerPage:5,options:[5,10,15,30,50,500]},messages:{noData:"<i>warning</i> No data available to show.",noDataAfterFiltering:"<i>warning</i> No results. Please refine your search terms."},labels:{columns:"Columns",allCols:"All Columns",rows:"Rows",selected:{singular:"Item selected.",plural:"Items selected."},clear:"Clear",search:"Search",all:"All"}},data:[{name:"KinoAPP",description:"Multi-platform native client app-skeleton for hosting Personas",delivery:"2018-05-01",status:"Active"},{name:"KinoARCHIVE",description:"archive.org and DCMI-compliant research-quality archive",delivery:"2018-07-01",status:"Research"},{name:"KinoCHAT",description:"Configurable encrypted serverless chats and channels",delivery:"2018-09-01",status:"Research"},{name:"KinoDESK",description:"Groupware, stats and tools for Kabaret Organizers",delivery:"2018-05-01",status:"Research"},{name:"KinoMAKER",description:"Realtime collaboration tools for filmmakers",delivery:"2018-09-01",status:"Waiting"},{name:"KinoMAP",description:"Modern mapping with Photos, Tracks and Asset Tracking",delivery:"2018-06-01",status:"Waiting"},{name:"KinoSCREEN",description:"VLC based screening service with remote control",delivery:"2018-05-01",status:"Active"},{name:"KinoSHOP",description:"A place to trade goods and services",delivery:"2018-11-01",status:"Waiting"},{name:"KinoTOOLBOX",description:"Extra tools like transcoding, packaging, subtitling etc.",delivery:"2018-12-24",status:"Research"},{name:"KinoVAULT",description:"Global P2P filesystem for sharing and saving",delivery:"2018-04-01",status:"Active"},{name:"KinoVIEWER",description:"Media browsing, playlisting, casting and binging",delivery:"2018-05-01",status:"Research"},{name:"KinoWEB",description:"Microsite production interface for kabarets, kinoites and cells",delivery:"2018-10-01",status:"Waiting"}]}}}},65:function(e,t,a){var s=a(66);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(26)("b77aae96",s,!0,{})},66:function(e,t,a){t=e.exports=a(25)(!1),t.push([e.i,".padded[data-v-1dab0a63]{padding:3px;border-radius:3px;box-shadow:1px 1px 2px rgba(0,0,0,.2);opacity:.7}.padded2[data-v-1dab0a63]{padding:10px}",""])},67:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout-padding"},[a("p",{attrs:{dir:"auto"},domProps:{innerHTML:e._s(e.$t("pages.personae.p1"))}}),e._v(" "),a("p",{attrs:{dir:"auto"},domProps:{innerHTML:e._s(e.$t("pages.personae.p2"))}}),e._v(" "),a("h5",{}),e._v(" "),a("q-btn",{staticClass:"label text-white bg-primary padded2 pull-right",attrs:{push:""},on:{click:function(t){e.launch("https://goo.gl/forms/YrJXYI6gLzuAZgDd2")}}},[e._v("Register for the Beta")]),e._v(" "),a("q-data-table",{attrs:{data:e.data,config:e.config,columns:e.columns},on:{rowclick:e.tableDetail},scopedSlots:e._u([{key:"col-name",fn:function(t){return[a("strong",{staticClass:"bold"},[e._v(e._s(t.data))])]}},{key:"col-status",fn:function(t){return["Active"===t.data?a("span",{staticClass:"label text-white padded bg-green-9"},[e._v(e._s(t.data))]):"Waiting"===t.data?a("span",{staticClass:"label text-white bg-red-9 padded"},[e._v(e._s(t.data))]):"Research"===t.data?a("span",{staticClass:"label text-black bg-yellow-9 padded"},[e._v(e._s(t.data))]):a("span",{staticClass:"label padded"},[e._v(e._s(t.data))])]}},{key:"col-description",fn:function(t){return[a("div",{staticClass:"light-paragraph"},[e._v(e._s(t.data))])]}}])}),e._v(" "),a("small",[e._v("\n    Last Update: February 8th, 2018\n  ")])],1)},i=[],n={render:s,staticRenderFns:i};t.a=n}});