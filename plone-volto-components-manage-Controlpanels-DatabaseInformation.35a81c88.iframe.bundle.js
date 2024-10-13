"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[136],{"./src/components/manage/Controlpanels/DatabaseInformation.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.12_@types+react@18.2.27_react-dom@18.2.0_react@18.2.0__react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../../node_modules/.pnpm/react-router@5.2.0_react@18.2.0/node_modules/react-router/esm/react-router.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.2.0/node_modules/react-router-dom/esm/react-router-dom.js"),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Message/Message.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Table/Table.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Divider/Divider.js"),react_intl__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/useIntl.js"),react_intl__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/message.js"),_plone_volto_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/actions/index.js"),_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/helpers/index.js"),_plone_volto_hooks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/hooks/index.js"),_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/index.js"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/icons/back.svg"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_7__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const messages=(0,react_intl__WEBPACK_IMPORTED_MODULE_8__.defineMessages)({back:{id:"Back",defaultMessage:"Back"},databaseInformation:{id:"Database Information",defaultMessage:"Database Information"}}),DatabaseInformation=()=>{const intl=(0,react_intl__WEBPACK_IMPORTED_MODULE_9__.c)(),dispatch=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(),{pathname:pathname}=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.IT)(),isClient=(0,_plone_volto_hooks__WEBPACK_IMPORTED_MODULE_5__.W)(),databaseInformation=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state=>state.controlpanels.databaseinformation));return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{dispatch((0,_plone_volto_actions__WEBPACK_IMPORTED_MODULE_3__.a4)())}),[dispatch]),databaseInformation?__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__.c,{id:"database-page",className:"controlpanel-database"},__jsx(_plone_volto_helpers__WEBPACK_IMPORTED_MODULE_4__.So,{title:intl.formatMessage(messages.databaseInformation)}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.c.Group,{raised:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.c,{className:"primary"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Database Information",defaultMessage:"Database Information"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Header,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Database main",defaultMessage:"Database main"}))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c,{celled:!0,padded:!0,columns:"2"},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Body,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Database Location",defaultMessage:"Database Location"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,databaseInformation.db_name)),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Database Size",defaultMessage:"Database Size"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,databaseInformation.database_size)),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Total number of objects in the database",defaultMessage:"Total number of objects in the database"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,databaseInformation.db_size)),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Total number of objects in memory from all caches",defaultMessage:"Total number of objects in memory from all caches"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,databaseInformation.cache_size)),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Target number of objects in memory per cache",defaultMessage:"Target number of objects in memory per cache"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,databaseInformation.cache_length)),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Target memory size per cache in bytes",defaultMessage:"Target memory size per cache in bytes"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,databaseInformation.cache_length_bytes))))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,null),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Header,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Total number of objects in each cache",defaultMessage:"Total number of objects in each cache"}))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c,{celled:!0,padded:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Header,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Cache Name",defaultMessage:"Cache Name"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Number of active objects",defaultMessage:"Number of active objects"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_13__.c,{id:"Total active and non-active objects",defaultMessage:"Total active and non-active objects"})))),databaseInformation.cache_detail_length.map((item=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,item.connection),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,item.ngsize),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.c.Cell,null,item.size))))))),isClient&&(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__.YT3,{pathname:pathname,hideDefaultViewButtons:!0,inner:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.cH,{to:"/controlpanel",className:"item"},__jsx(_plone_volto_components__WEBPACK_IMPORTED_MODULE_6__.GWx,{name:_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_7___default(),"aria-label":intl.formatMessage(messages.back),className:"contents circled",size:"30px",title:intl.formatMessage(messages.back)})))}),document.getElementById("toolbar"))):null};__webpack_exports__.default=DatabaseInformation,DatabaseInformation.__docgenInfo={description:"",methods:[],displayName:"DatabaseInformation"}},"../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Divider/Divider.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/extends.js"),clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js"),__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js")),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),_lib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),_lib__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");function Divider(props){var children=props.children,className=props.className,clearing=props.clearing,content=props.content,fitted=props.fitted,hidden=props.hidden,horizontal=props.horizontal,inverted=props.inverted,section=props.section,vertical=props.vertical,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)("ui",(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(clearing,"clearing"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(fitted,"fitted"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(hidden,"hidden"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(horizontal,"horizontal"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(inverted,"inverted"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(section,"section"),(0,_lib__WEBPACK_IMPORTED_MODULE_3__.gj)(vertical,"vertical"),"divider",className),rest=(0,_lib__WEBPACK_IMPORTED_MODULE_4__.c)(Divider,props),ElementType=(0,_lib__WEBPACK_IMPORTED_MODULE_5__.c)(Divider,props);return react__WEBPACK_IMPORTED_MODULE_1__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__.c)({},rest,{className:classes}),_lib__WEBPACK_IMPORTED_MODULE_7__.Ar(children)?content:children)}Divider.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],Divider.propTypes={},__webpack_exports__.c=Divider}}]);