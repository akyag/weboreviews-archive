(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{290:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXN1biI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNSIvPjxwYXRoIGQ9Ik0xMiAxdjJtMCAxOHYyTTQuMjIgNC4yMmwxLjQyIDEuNDJtMTIuNzIgMTIuNzIgMS40MiAxLjQyTTEgMTJoMm0xOCAwaDJNNC4yMiAxOS43OGwxLjQyLTEuNDJNMTguMzYgNS42NGwxLjQyLTEuNDIiLz48L3N2Zz4="},291:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1vb24iPjxwYXRoIGQ9Ik0yMSAxMi43OUE5IDkgMCAxIDEgMTEuMjEgMyA3IDcgMCAwIDAgMjEgMTIuNzl6Ii8+PC9zdmc+"},320:function(e,t,o){"use strict";o.r(t);var c=o(290),r=o.n(c),n=o(291),d=o.n(n),l={components:{IconLight:r.a,IconDark:d.a},data:function(){return{colors:["light","dark"]}},methods:{getClasses:function(e){return this.$colorMode.unknown?{}:{preferred:e===this.$colorMode.preference,selected:e===this.$colorMode.value}}}},I=o(21),component=Object(I.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container text-center"},[o("ul",{staticClass:"flex justify-center"},e._l(e.colors,(function(t){return o("li",{key:t,staticClass:"px-2 py-2 mx-2 transition duration-200 ease-in bg-gray-300 rounded cursor-pointer hover:bg-geraldine-500 dark:bg-dark-400 dark:text-white dark:hover:bg-geraldine-500 dark:hover:text-gray-700"},[o("icon-"+t,{tag:"component",class:e.getClasses(t),on:{click:function(o){e.$colorMode.preference=t}}})],1)})),0),e._v(" "),o("p",{staticClass:"mt-2 text-white"},[o("ColorScheme",{attrs:{placeholder:"...",tag:"span"}},[e._v("\n      Color mode: "),o("b",[e._v(e._s(e.$colorMode.preference))]),e._v(" "),"system"===e.$colorMode.preference?o("span",[e._v("("),o("i",[e._v(e._s(e.$colorMode.value))]),e._v(" mode detected)")]):e._e()])],1)])}),[],!1,null,"bd89352a",null);t.default=component.exports}}]);