// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('undo_redo.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__20648__delegate = function (x){
if(cljs.core.truth_(undo_redo.core.on_js_reload)){
return cljs.core.apply.call(null,undo_redo.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'undo-redo.core/on-js-reload' is missing");
}
};
var G__20648 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__20649__i = 0, G__20649__a = new Array(arguments.length -  0);
while (G__20649__i < G__20649__a.length) {G__20649__a[G__20649__i] = arguments[G__20649__i + 0]; ++G__20649__i;}
  x = new cljs.core.IndexedSeq(G__20649__a,0);
} 
return G__20648__delegate.call(this,x);};
G__20648.cljs$lang$maxFixedArity = 0;
G__20648.cljs$lang$applyTo = (function (arglist__20650){
var x = cljs.core.seq(arglist__20650);
return G__20648__delegate(x);
});
G__20648.cljs$core$IFn$_invoke$arity$variadic = G__20648__delegate;
return G__20648;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1454802858122