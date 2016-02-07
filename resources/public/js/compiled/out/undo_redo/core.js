// Compiled by ClojureScript 1.7.170 {}
goog.provide('undo_redo.core');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina.events');
goog.require('domina.css');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof undo_redo.core.app_state !== 'undefined'){
} else {
undo_redo.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"historyIndex","historyIndex",2006945527),(0),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null));
}
domina.destroy_BANG_.call(null,domina.by_id.call(null,"wrapper"));
domina.append_BANG_.call(null,domina.css.sel.call(null,"body"),"<div id='wrapper'><div id='dots'></div><button id='undo'>undo</button><button id='redo'>redo</button></div>");
domina.set_styles_BANG_.call(null,domina.by_id.call(null,"dots"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"height","height",1025178622),"200px",new cljs.core.Keyword(null,"background","background",-863952629),"#EFEFEF",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"crosshair"], null));
undo_redo.core.delete_future = (function undo_redo$core$delete_future(){
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,undo_redo.core.app_state))),(new cljs.core.Keyword(null,"historyIndex","historyIndex",2006945527).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,undo_redo.core.app_state)) - (1)))){
return cljs.core.swap_BANG_.call(null,undo_redo.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (old_history){
return cljs.core.subvec.call(null,old_history,(0),(new cljs.core.Keyword(null,"historyIndex","historyIndex",2006945527).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,undo_redo.core.app_state)) + (1)));
}));
} else {
return null;
}
});
undo_redo.core.new_version = (function undo_redo$core$new_version(creator){
undo_redo.core.delete_future.call(null);

cljs.core.swap_BANG_.call(null,undo_redo.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"historyIndex","historyIndex",2006945527)], null),cljs.core.inc);

return cljs.core.swap_BANG_.call(null,undo_redo.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (old_history){
return cljs.core.conj.call(null,old_history,creator.call(null,cljs.core.peek.call(null,old_history)));
}));
});
undo_redo.core.current_dots = (function undo_redo$core$current_dots(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,undo_redo.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"historyIndex","historyIndex",2006945527).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,undo_redo.core.app_state))], null));
});
undo_redo.core.draw = (function undo_redo$core$draw(dots){
domina.destroy_BANG_.call(null,domina.by_class.call(null,"dot"));

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (dot){
domina.append_BANG_.call(null,domina.by_id.call(null,"dots"),[cljs.core.str("<div id="),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dot)),cljs.core.str(" "),cljs.core.str("style='left:"),cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(dot)),cljs.core.str("px;"),cljs.core.str("top:"),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(dot)),cljs.core.str("px"),cljs.core.str("' class='dot'></div>")].join(''));

return domina.events.listen_BANG_.call(null,domina.by_id.call(null,[cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dot))].join('')),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.partial.call(null,(function (id,evt){
domina.events.stop_propagation.call(null,evt);

undo_redo.core.new_version.call(null,(function (old_history){
return cljs.core.filterv.call(null,(function (dot__$1){
return cljs.core.not_EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dot__$1));
}),old_history);
}));

return undo_redo$core$draw.call(null,undo_redo.core.current_dots.call(null));
}),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dot)));
}),dots));
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"dots"),new cljs.core.Keyword(null,"click","click",1912301393),(function (evt){
undo_redo.core.new_version.call(null,(function (old_history){
return cljs.core.conj.call(null,old_history,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"offsetX","offsetX",-2005135414).cljs$core$IFn$_invoke$arity$1(evt),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"offsetY","offsetY",-230567873).cljs$core$IFn$_invoke$arity$1(evt),new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime()], null));
}));

return undo_redo.core.draw.call(null,undo_redo.core.current_dots.call(null));
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"redo"),new cljs.core.Keyword(null,"click","click",1912301393),(function (evt){
cljs.core.swap_BANG_.call(null,undo_redo.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"historyIndex","historyIndex",2006945527)], null),(function (old_index){
var x__17143__auto__ = (old_index + (1));
var y__17144__auto__ = (cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,undo_redo.core.app_state))) - (1));
return ((x__17143__auto__ < y__17144__auto__) ? x__17143__auto__ : y__17144__auto__);
}));

return undo_redo.core.draw.call(null,undo_redo.core.current_dots.call(null));
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"undo"),new cljs.core.Keyword(null,"click","click",1912301393),(function (evt){
cljs.core.swap_BANG_.call(null,undo_redo.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"historyIndex","historyIndex",2006945527)], null),(function (old_index){
var x__17136__auto__ = (old_index - (1));
var y__17137__auto__ = (0);
return ((x__17136__auto__ > y__17137__auto__) ? x__17136__auto__ : y__17137__auto__);
}));

return undo_redo.core.draw.call(null,undo_redo.core.current_dots.call(null));
}));

//# sourceMappingURL=core.js.map?rel=1454864331693