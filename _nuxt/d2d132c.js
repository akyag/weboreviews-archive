(window.webpackJsonp=window.webpackJsonp||[]).push([[29,14],{219:function(t,e,r){t.exports=r.p+"img/55d3fb1.svg"},220:function(t,e,r){t.exports=r.p+"img/50b5691.png"},221:function(t,e,r){t.exports=r.p+"img/4ef3385.png"},226:function(t,e,r){t.exports=r.p+"img/7398af1.svg"},227:function(t,e,r){t.exports=r.p+"img/9fcaf59.png"},228:function(t,e,r){t.exports=r.p+"img/ed602a5.png"},229:function(t,e,r){t.exports=r.p+"img/6ce321d.png"},230:function(t,e,r){t.exports=r.p+"img/fbb7f47.svg"},231:function(t,e,r){t.exports=r.p+"img/fcc4e6a.png"},232:function(t,e,r){t.exports=r.p+"img/2c68ce4.svg"},233:function(t,e,r){t.exports=r.p+"img/ed229b8.png"},234:function(t,e,r){t.exports=r.p+"img/f7bef79.svg"},235:function(t,e,r){t.exports=r.p+"img/33a0100.png"},236:function(t,e,r){t.exports=r.p+"img/c7993c2.svg"},237:function(t,e,r){t.exports=r.p+"img/ffe98f7.svg"},238:function(t,e,r){t.exports=r.p+"img/61863d4.svg"},239:function(t,e,r){t.exports=r.p+"img/7fbe6e9.svg"},240:function(t,e,r){t.exports=r.p+"img/99e8b3a.png"},241:function(t,e,r){t.exports=r.p+"img/489b95a.png"},242:function(t,e,r){t.exports=r.p+"img/65eb845.png"},243:function(t,e,r){t.exports=r.p+"img/fafbf87.svg"},244:function(t,e,r){t.exports=r.p+"img/be76090.svg"},245:function(t,e,r){t.exports=r.p+"img/10f3cc5.svg"},246:function(t,e,r){t.exports=r.p+"img/f0a4c2c.svg"},247:function(t,e,r){t.exports=r.p+"img/3d06d06.svg"},248:function(t,e,r){t.exports=r.p+"img/449313b.svg"},249:function(t,e,r){t.exports=r.p+"img/069e61e.svg"},250:function(t,e,r){t.exports=r.p+"img/dac44eb.svg"},251:function(t,e,r){t.exports=r.p+"img/6039299.svg"},252:function(t,e,r){var map={"./about-me.svg":244,"./airclub.png":253,"./archive.svg":245,"./built-with-nuxt-dark.svg":236,"./built-with-nuxt.svg":237,"./captivating-journeys-lg.png":233,"./captivating-journeys.png":227,"./contact.svg":246,"./ensys-lg.png":235,"./ensys.png":228,"./flogo-1.svg":226,"./flogo.svg":254,"./hero-1.svg":219,"./hero-2-dark.png":220,"./hero-2.png":221,"./home.svg":247,"./license.svg":248,"./logo-white.svg":249,"./logo.svg":255,"./mail.svg":243,"./mangesh-lg.png":240,"./mangesh.png":229,"./me.png":231,"./nextgen.svg":232,"./not-found.svg":230,"./nuxtjs-typo-dark.svg":238,"./nuxtjs-typo.svg":239,"./photo-retouch-lg.png":241,"./photo-retouch.png":242,"./posimind.png":256,"./responsive.svg":234,"./saptarshi.png":257,"./web-design.svg":250,"./work.svg":251};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=252},253:function(t,e,r){t.exports=r.p+"img/56a5186.png"},254:function(t,e,r){t.exports=r.p+"img/c7e55a9.svg"},255:function(t,e,r){t.exports=r.p+"img/7d7d47c.svg"},256:function(t,e,r){t.exports=r.p+"img/e5186f9.png"},257:function(t,e,r){t.exports=r.p+"img/1b428a9.png"},262:function(t,e,r){"use strict";r.r(e);var o={name:"ProjectCard",props:["project"]},n=r(39),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"p-4"},[o("div",{staticClass:"relative w-full"},[o("img",{staticClass:"object-cover w-full h-56 max-w-sm border border-gray-300 rounded-lg shadow-md  dark:border-dark-600 dark:filter dark:brightness-75 dark:contrast-125",attrs:{src:r(252)("./"+t.project.imageName),alt:t.project.imageAlt}})]),t._v(" "),o("div",{staticClass:"relative px-4 -mt-16 md:px-12"},[o("div",{staticClass:"px-6 py-3 rounded-lg shadow-lg  bg-gray-50 dark:border-dark-600 dark:bg-dark-700"},[o("div",{staticClass:"text-xl font-semibold font-display"},[t._v("\n        "+t._s(t.project.workTitle)+"\n        "),o("span",{class:t.project.workSubtitleClass},[t._v("\n          "+t._s(t.project.workSubtitle))])]),t._v(" "),"old1"===t.project.workId?o("div",[t._m(0),t._v(" "),o("div",{staticClass:"flex justify-end"},[o("NuxtLink",{staticClass:"inline-flex items-center px-3 py-1 mt-2 text-sm font-semibold text-white bg-green-700 shadow-md  hover:transition-all hover:duration-200 hover:ease-in-out dark:bg-green-400 dark:text-dark-700 dark:hover:bg-green-500 rounded-2xl hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-400 dark:focus:ring-green-200",attrs:{to:"/photo-retouch"}},[o("svg",{staticClass:"w-4 h-4 mr-1 text-white dark:text-dark-700",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-label":"icon"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})]),t._v(" "),o("span",[t._v("Details")])])],1)]):t._e(),t._v(" "),"old2"===t.project.workId?o("div",[t._m(1)]):t._e(),t._v(" "),"old3"===t.project.workId?o("div",[t._m(2)]):t._e(),t._v(" "),"old4"===t.project.workId?o("div",[t._m(3)]):t._e()])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"mt-2 ml-2 text-sm list-inside"},[r("li",[t._v("- Photo studio website.")]),t._v(" "),r("li",[t._v("- Non-responsive design.")]),t._v(" "),r("li",[t._v("- Image slideshow.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"mt-2 ml-2 text-sm list-inside"},[r("li",[t._v("- Responsive design.")]),t._v(" "),r("li",[t._v("- Image slider.")]),t._v(" "),r("li",[t._v("- Multiple color variations.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"mt-2 ml-2 text-sm list-inside"},[r("li",[t._v("- Local business website.")]),t._v(" "),r("li",[t._v("- Non-responsive design.")]),t._v(" "),r("li",[t._v("- Customized contact forms.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"mt-2 ml-2 text-sm list-inside"},[r("li",[t._v("- Responsive design.")]),t._v(" "),r("li",[t._v("- Image slider.")]),t._v(" "),r("li",[t._v("- Scrolling header.")]),t._v(" "),r("li",[t._v("- Embedded map.")])])}],!1,null,null,null);e.default=component.exports},281:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-initial p-6"},[e("img",{staticClass:"object-cover w-auto h-auto border-b-2 shadow-lg  dark:filter dark:brightness-75 dark:contrast-125",attrs:{src:r(227),alt:"Captivating Journeys"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"pl-6"},[r("li",[t._v("- Travel website.")]),t._v(" "),r("li",[t._v("- Responsive design.")]),t._v(" "),r("li",[t._v("- Responsive slideshow.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-initial p-6"},[e("img",{staticClass:"object-cover w-auto h-auto border-b-2 shadow-lg  dark:filter dark:brightness-75 dark:contrast-125",attrs:{src:r(228),alt:"Ensys Engineers"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"pl-6"},[r("li",[t._v("- Local business website.")]),t._v(" "),r("li",[t._v("- Responsive design.")]),t._v(" "),r("li",[t._v("- Image slider.")]),t._v(" "),r("li",[t._v("- Contact form with map.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-initial p-6"},[e("img",{staticClass:"object-cover w-auto h-auto border-b-2 shadow-lg  dark:filter dark:brightness-75 dark:contrast-125",attrs:{src:r(229),alt:"Mangesh Thombare"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"pl-6"},[r("li",[t._v("- Portfolio website.")]),t._v(" "),r("li",[t._v("- Responsive design.")]),t._v(" "),r("li",[t._v("- Embedded videos and documents.")]),t._v(" "),r("li",[t._v("- Modal for images.")])])}],n=r(36),l={head:{title:"Work",meta:[{hid:"description",name:"description",content:"This page lists some of the projects I have worked on."}]},components:{ProjectCard:r(262).default},mounted:function(){n.a.config({nullTargetWarn:!1}),this.animateOnScroll()},methods:{animateOnScroll:function(){this.$gsap.fromTo(".reveal",{autoAlpha:0,y:200},{duration:2,autoAlpha:1,y:0,scrollTrigger:{trigger:".reveal",once:!0}}),this.$gsap.fromTo(".reveal2",{autoAlpha:0,y:200},{duration:2,autoAlpha:1,y:0,scrollTrigger:{trigger:".reveal2",once:!0}})}},data:function(){return{oldProjects:[{workTitle:"Photo",workSubtitle:"Retouch",workSubtitleClass:"text-green-600 dark:text-green-300",workId:"old1",imageName:"photo-retouch.png",imageAlt:"Photo Retouch"},{workTitle:"Air",workSubtitle:"Club",workSubtitleClass:"text-purple-600 dark:text-purple-300",workId:"old2",imageName:"airclub.png",imageAlt:"Air Club"},{workTitle:"Posimind",workSubtitle:"",workSubtitleClass:"text-blue-600",workId:"old3",imageName:"posimind.png",imageAlt:"Posimind"},{workTitle:"Saptarshi",workSubtitle:"",workSubtitleClass:"text-indigo-600",workId:"old4",imageName:"saptarshi.png",imageAlt:"Saptarshi"}]}}},d=r(39),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"h-auto  bg-gradient-to-r from-teal-500 to-teal-600 dark:from-dark-700 dark:to-dark-800"},[o("div",{staticClass:"bg-local bg-center bg-cover pt-36 md:p-0",style:{backgroundImage:"url("+r(219)+")"}},[o("Nav"),t._v(" "),o("MobileNav"),t._v(" "),o("WorkHero"),t._v(" "),o("div",{staticClass:"z-30"},["dark"===t.$colorMode.preference?o("img",{staticClass:"w-full",attrs:{src:r(220),alt:"Hero Bottom"}}):o("img",{staticClass:"w-full",attrs:{src:r(221),alt:"Hero Bottom"}})])],1)]),t._v(" "),o("main",{staticClass:"container px-8 py-4 mx-auto lg:p-12",attrs:{id:"content-wrapper"}},[o("div",{staticClass:"container leading-relaxed"},[o("div",{staticClass:"space-y-12"},[o("h3",{staticClass:"mx-3 my-5 text-5xl font-bold text-center font-display"},[t._v("\n          Work\n        ")]),t._v(" "),o("div",{staticClass:"grid grid-cols-1 gap-12  justify-items-center md:grid-cols-2 xl:grid-cols-3 place-content-center"},[o("div",{staticClass:"grid max-w-sm grid-rows-2 overflow-hidden border border-gray-300 shadow-lg  rounded-xl bg-gray-50 dark:border-dark-600 dark:bg-dark-700 reveal hover:shadow-2xl"},[t._m(0),t._v(" "),o("div",{staticClass:"grid grid-cols-1 py-4 gap-y-4 place-content-center"},[o("div",{staticClass:"text-3xl font-semibold text-center font-display"},[t._v("\n                Captivating Journeys\n              ")]),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"grid pr-5 place-content-end"},[o("NuxtLink",{staticClass:"inline-flex items-center px-4 py-2 mt-2 text-sm font-semibold text-white shadow-md  hover:transition-all hover:duration-200 hover:ease-in-out bg-rose-700 dark:bg-rose-400 dark:text-dark-700 rounded-2xl hover:bg-rose-600 dark:hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-rose-400 dark:focus:ring-red-200",attrs:{to:"/captivating-journeys"}},[o("svg",{staticClass:"w-4 h-4 mr-1 text-white dark:text-dark-700",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-label":"icon"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})]),t._v(" "),o("span",[t._v("Details")])])],1)])]),t._v(" "),o("div",{staticClass:"grid max-w-sm grid-rows-2 overflow-hidden border border-gray-300 shadow-lg  rounded-xl bg-gray-50 dark:border-dark-600 dark:bg-dark-700 reveal hover:shadow-2xl"},[t._m(2),t._v(" "),o("div",{staticClass:"grid grid-cols-1 py-4 gap-y-4 place-content-center"},[o("div",{staticClass:"text-3xl font-semibold text-center font-display"},[t._v("\n                Ensys Engineers\n              ")]),t._v(" "),t._m(3),t._v(" "),o("div",{staticClass:"grid pr-5 place-content-end"},[o("NuxtLink",{staticClass:"inline-flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-100 bg-indigo-700 shadow-md  hover:transition-all hover:duration-200 hover:ease-in-out dark:bg-indigo-400 dark:text-dark-700 rounded-2xl hover:bg-indigo-600 dark:hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-indigo-400 dark:focus:ring-indigo-200",attrs:{to:"/ensys-engineers"}},[o("svg",{staticClass:"w-4 h-4 mr-1 text-white dark:text-dark-700",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-label":"icon"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})]),t._v(" "),o("span",[t._v("Details")])])],1)])]),t._v(" "),o("div",{staticClass:"grid max-w-sm grid-rows-2 overflow-hidden border border-gray-300 shadow-lg  rounded-xl bg-gray-50 dark:border-dark-600 dark:bg-dark-700 reveal hover:shadow-2xl"},[t._m(4),t._v(" "),o("div",{staticClass:"grid grid-cols-1 py-4 gap-y-4 place-content-center"},[o("div",{staticClass:"text-3xl font-semibold text-center font-display"},[t._v("\n                Mangesh Thombare\n              ")]),t._v(" "),t._m(5),t._v(" "),o("div",{staticClass:"grid pr-5 place-content-end"},[o("NuxtLink",{staticClass:"inline-flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-100 bg-blue-700 shadow-md  hover:transition-all hover:duration-200 hover:ease-in-out dark:bg-blue-400 dark:text-dark-700 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-400 dark:focus:ring-blue-200",attrs:{to:"/mangesh-thombare"}},[o("svg",{staticClass:"w-4 h-4 mr-1 text-white dark:text-dark-700",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-label":"icon"}},[o("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"}})]),t._v(" "),o("span",[t._v("Details")])])],1)])])]),t._v(" "),o("div",{staticClass:"m-12 text-4xl font-semibold border-b-4  font-display border-geraldine-600"},[t._v("\n          Old Projects\n        ")]),t._v(" "),o("div",{staticClass:"flex flex-row flex-wrap mx-4  sm:m-0 place-content-center reveal2"},t._l(t.oldProjects,(function(t){return o("div",{key:t.id},[o("project-card",{attrs:{project:t}})],1)})),0)])])])])}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:function(){return r.e(13).then(r.bind(null,291)).then((function(t){return t.default||t}))},MobileNav:function(){return r.e(11).then(r.bind(null,290)).then((function(t){return t.default||t}))},WorkHero:function(){return r.e(16).then(r.bind(null,292)).then((function(t){return t.default||t}))},ProjectCard:function(){return Promise.resolve().then(r.bind(null,262)).then((function(t){return t.default||t}))}})}}]);