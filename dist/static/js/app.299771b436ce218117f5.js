webpackJsonp([1],{10:function(t,e,o){"use strict";var n=o(80),i=o.n(n);o.d(e,"a",function(){return a});var a={addNoteAction:function(t){for(var e=t.commit,o=arguments.length,n=Array(o>1?o-1:0),a=1;a<o;a++)n[a-1]=arguments[a];e.apply(void 0,["add_note"].concat(i()(n)))},editNoteAction:function(t,e){(0,t.commit)("edit_note",e.target.value)},deleteNoteAction:function(t){for(var e=t.commit,o=arguments.length,n=Array(o>1?o-1:0),a=1;a<o;a++)n[a-1]=arguments[a];e.apply(void 0,["delete_note"].concat(i()(n)))},toggleFavoriteAction:function(t){for(var e=t.commit,o=arguments.length,n=Array(o>1?o-1:0),a=1;a<o;a++)n[a-1]=arguments[a];e.apply(void 0,["toggle_favorite"].concat(i()(n)))},updateActiveNoteAction:function(t){for(var e=t.commit,o=arguments.length,n=Array(o>1?o-1:0),a=1;a<o;a++)n[a-1]=arguments[a];e.apply(void 0,["set_active_note"].concat(i()(n)))},showNoteAction:function(t){for(var e=t.commit,o=arguments.length,n=Array(o>1?o-1:0),a=1;a<o;a++)n[a-1]=arguments[a];e.apply(void 0,["show_note"].concat(i()(n)))}}},11:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n={activeNoteGetter:function(t){return t.activeNote},notesGetter:function(t){return t.notes},showGetter:function(t){return t.show},filterNotesGetter:function(t){return"favorite"==t.show?t.notes.filter(function(t){return t.favorite}):"all"==t.show?t.notes:void 0},noteTextGetter:function(t){return t.activeNote.text}}},34:function(t,e,o){o(45);var n=o(2)(o(81),o(40),null,null);t.exports=n.exports},35:function(t,e,o){"use strict";var n=o(22),i=o(3),a=o(11),r=o(10),s=o(86);n.a.use(i.b);var c={notes:[],activeNote:{},show:"all"},u=new i.b.Store({state:c,actions:r.a,mutations:s.a,getters:a.a});e.a=u},36:function(t,e,o){o(47);var n=o(2)(o(82),o(42),"data-v-ee88fb88",null);t.exports=n.exports},37:function(t,e,o){o(46);var n=o(2)(o(83),o(41),"data-v-e21b3440",null);t.exports=n.exports},38:function(t,e,o){o(44);var n=o(2)(o(84),o(39),"data-v-38be72bc",null);t.exports=n.exports},39:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"toolbar"}},[o("i",{staticClass:"glyphicon glyphicon-plus",on:{click:t.addNote}}),t._v(" "),o("i",{staticClass:"glyphicon glyphicon-star",class:{star:t.activeNote.favorite},on:{click:t.toggleFavorite}}),t._v(" "),o("i",{staticClass:"glyphicon glyphicon-remove",on:{click:function(e){t.deleteNote(t.notes)}}})])},staticRenderFns:[]}},40:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("toolbar"),t._v(" "),o("noteslist"),t._v(" "),o("editor")],1)},staticRenderFns:[]}},41:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"noteslist"}},[o("div",{attrs:{id:"list-header"}},[o("h2",{staticClass:"list-title"},[t._v("   NOTES | RECKFUL")]),t._v(" "),o("div",{staticClass:"btn-group btn-group-justified",attrs:{role:"group"}},[o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{staticClass:"btn btn-default",class:{active:"all"==t.show},attrs:{type:"button"},on:{click:function(e){t.showNote("all")}}},[t._v("All Notes")])]),t._v(" "),o("div",{staticClass:"btn-group",attrs:{role:"group"}},[o("button",{staticClass:"btn btn-default",class:{active:"favorite"==t.show},attrs:{type:"button"},on:{click:function(e){t.showNote("favorite")}}},[t._v("Favorites")])])])]),t._v(" "),o("div",{staticClass:"list-group"},t._l(t.filterNotes,function(e){return o("a",{staticClass:"list-group-item",class:{active:t.activeNote==e},attrs:{href:"#"},on:{click:function(o){t.updateActiveNote(e)}}},[o("h5",{staticClass:"list-group-item-heading"},[t._v("\n                "+t._s(e.text.trim().substring(0,30))+"\n            ")])])}))])},staticRenderFns:[]}},42:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"editor"}},[o("textarea",{staticClass:"form-control",domProps:{value:t.noteText},on:{input:t.editNote}})])},staticRenderFns:[]}},44:function(t,e){},45:function(t,e){},46:function(t,e){},47:function(t,e){},81:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(38),i=o.n(n),a=o(37),r=o.n(a),s=o(36),c=o.n(s);e.default={components:{toolbar:i.a,noteslist:r.a,editor:c.a}}},82:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(21),i=o.n(n),a=(o(11),o(10),o(3));e.default={computed:i()({},o.i(a.a)({noteText:"noteTextGetter"})),methods:{editNote:function(t){this.$store.dispatch("editNoteAction",t)}}}},83:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(21),i=o.n(n),a=(o(10),o(11),o(3));e.default={computed:i()({},o.i(a.a)({show:"showGetter",notes:"notesGetter",activeNote:"activeNoteGetter",filterNotes:"filterNotesGetter"})),methods:{updateActiveNote:function(t){this.$store.dispatch("updateActiveNoteAction",t)},showNote:function(t){this.$store.dispatch("showNoteAction",t)}}}},84:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(21),i=o.n(n),a=(o(10),o(11),o(3));e.default={computed:i()({},o.i(a.a)({activeNote:"activeNoteGetter",notes:"notesGetter"})),methods:{addNote:function(){this.$store.dispatch("addNoteAction")},toggleFavorite:function(){this.$store.dispatch("toggleFavoriteAction")},deleteNote:function(t){this.$store.dispatch("deleteNoteAction",t)}}}},85:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(22),i=o(34),a=o.n(i),r=o(35);n.a.config.productionTip=!1,new n.a({el:"#app",store:r.a,template:"<App/>",components:{App:a.a}})},86:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n={add_note:function(t){var e={id:+new Date,text:"New Note",favorite:!1};t.notes.push(e),t.activeNote=e},edit_note:function(t,e){t.activeNote.text=e},delete_note:function(t,e){for(var o=0;o<e.length;o++)if(t.notes[o].id==t.activeNote.id){t.notes.splice(o,1);break}t.activeNote=t.notes[0]||{}},toggle_favorite:function(t){t.activeNote.favorite=!t.activeNote.favorite},set_active_note:function(t,e){t.activeNote=e},show_note:function(t,e){return t.show=e,"all"==t.show?t.notes:"favorite"==t.show?t.notes.filter(function(t){t.favorite}):void 0}}}},[85]);
//# sourceMappingURL=app.299771b436ce218117f5.js.map