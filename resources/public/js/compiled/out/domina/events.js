// Compiled by ClojureScript 1.7.170 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.object');
goog.require('goog.events');

/**
 * @interface
 */
domina.events.Event = function(){};

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$prevent_default$arity$1 == null)))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__17460__auto__ = (((evt == null))?null:evt);
var m__17461__auto__ = (domina.events.prevent_default[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,evt);
} else {
var m__17461__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$stop_propagation$arity$1 == null)))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__17460__auto__ = (((evt == null))?null:evt);
var m__17461__auto__ = (domina.events.stop_propagation[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,evt);
} else {
var m__17461__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$target$arity$1 == null)))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__17460__auto__ = (((evt == null))?null:evt);
var m__17461__auto__ = (domina.events.target[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,evt);
} else {
var m__17461__auto____$1 = (domina.events.target["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$current_target$arity$1 == null)))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__17460__auto__ = (((evt == null))?null:evt);
var m__17461__auto__ = (domina.events.current_target[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,evt);
} else {
var m__17461__auto____$1 = (domina.events.current_target["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$event_type$arity$1 == null)))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__17460__auto__ = (((evt == null))?null:evt);
var m__17461__auto__ = (domina.events.event_type[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,evt);
} else {
var m__17461__auto____$1 = (domina.events.event_type["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$raw_event$arity$1 == null)))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__17460__auto__ = (((evt == null))?null:evt);
var m__17461__auto__ = (domina.events.raw_event[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,evt);
} else {
var m__17461__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t_domina$events19289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events19289 = (function (create_listener_function,f,evt,meta19290){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta19290 = meta19290;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events19289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19291,meta19290__$1){
var self__ = this;
var _19291__$1 = this;
return (new domina.events.t_domina$events19289(self__.create_listener_function,self__.f,self__.evt,meta19290__$1));
});

domina.events.t_domina$events19289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19291){
var self__ = this;
var _19291__$1 = this;
return self__.meta19290;
});

domina.events.t_domina$events19289.prototype.domina$events$Event$ = true;

domina.events.t_domina$events19289.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events19289.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events19289.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events19289.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events19289.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events19289.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events19289.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4423__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4423__auto__)){
var val = temp__4423__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t_domina$events19289.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__16805__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events19289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta19290","meta19290",1142353392,null)], null);
});

domina.events.t_domina$events19289.cljs$lang$type = true;

domina.events.t_domina$events19289.cljs$lang$ctorStr = "domina.events/t_domina$events19289";

domina.events.t_domina$events19289.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"domina.events/t_domina$events19289");
});

domina.events.__GT_t_domina$events19289 = (function domina$events$create_listener_function_$___GT_t_domina$events19289(create_listener_function__$1,f__$1,evt__$1,meta19290){
return (new domina.events.t_domina$events19289(create_listener_function__$1,f__$1,evt__$1,meta19290));
});

}

return (new domina.events.t_domina$events19289(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__17577__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__19296(s__19297){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__19297__$1 = s__19297;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19297__$1);
if(temp__4425__auto__){
var s__19297__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19297__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__19297__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__19299 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__19298 = (0);
while(true){
if((i__19298 < size__17576__auto__)){
var node = cljs.core._nth.call(null,c__17575__auto__,i__19298);
cljs.core.chunk_append.call(null,b__19299,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__19300 = (i__19298 + (1));
i__19298 = G__19300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19299),domina$events$listen_internal_BANG__$_iter__19296.call(null,cljs.core.chunk_rest.call(null,s__19297__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19299),null);
}
} else {
var node = cljs.core.first.call(null,s__19297__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__19296.call(null,cljs.core.rest.call(null,s__19297__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__17577__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var args19301 = [];
var len__17863__auto___19304 = arguments.length;
var i__17864__auto___19305 = (0);
while(true){
if((i__17864__auto___19305 < len__17863__auto___19304)){
args19301.push((arguments[i__17864__auto___19305]));

var G__19306 = (i__17864__auto___19305 + (1));
i__17864__auto___19305 = G__19306;
continue;
} else {
}
break;
}

var G__19303 = args19301.length;
switch (G__19303) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19301.length)].join('')));

}
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});

domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(var_args){
var args19308 = [];
var len__17863__auto___19311 = arguments.length;
var i__17864__auto___19312 = (0);
while(true){
if((i__17864__auto___19312 < len__17863__auto___19311)){
args19308.push((arguments[i__17864__auto___19312]));

var G__19313 = (i__17864__auto___19312 + (1));
i__17864__auto___19312 = G__19313;
continue;
} else {
}
break;
}

var G__19310 = args19308.length;
switch (G__19310) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19308.length)].join('')));

}
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});

domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(var_args){
var args19315 = [];
var len__17863__auto___19318 = arguments.length;
var i__17864__auto___19319 = (0);
while(true){
if((i__17864__auto___19319 < len__17863__auto___19318)){
args19315.push((arguments[i__17864__auto___19319]));

var G__19320 = (i__17864__auto___19319 + (1));
i__17864__auto___19319 = G__19320;
continue;
} else {
}
break;
}

var G__19317 = args19315.length;
switch (G__19317) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19315.length)].join('')));

}
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});

domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(var_args){
var args19322 = [];
var len__17863__auto___19325 = arguments.length;
var i__17864__auto___19326 = (0);
while(true){
if((i__17864__auto___19326 < len__17863__auto___19325)){
args19322.push((arguments[i__17864__auto___19326]));

var G__19327 = (i__17864__auto___19326 + (1));
i__17864__auto___19326 = G__19327;
continue;
} else {
}
break;
}

var G__19324 = args19322.length;
switch (G__19324) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19322.length)].join('')));

}
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});

domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(var_args){
var args19329 = [];
var len__17863__auto___19340 = arguments.length;
var i__17864__auto___19341 = (0);
while(true){
if((i__17864__auto___19341 < len__17863__auto___19340)){
args19329.push((arguments[i__17864__auto___19341]));

var G__19342 = (i__17864__auto___19341 + (1));
i__17864__auto___19341 = G__19342;
continue;
} else {
}
break;
}

var G__19331 = args19329.length;
switch (G__19331) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19329.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__19332 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19333 = null;
var count__19334 = (0);
var i__19335 = (0);
while(true){
if((i__19335 < count__19334)){
var node = cljs.core._nth.call(null,chunk__19333,i__19335);
goog.events.removeAll(node);

var G__19344 = seq__19332;
var G__19345 = chunk__19333;
var G__19346 = count__19334;
var G__19347 = (i__19335 + (1));
seq__19332 = G__19344;
chunk__19333 = G__19345;
count__19334 = G__19346;
i__19335 = G__19347;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19332);
if(temp__4425__auto__){
var seq__19332__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19332__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__19332__$1);
var G__19348 = cljs.core.chunk_rest.call(null,seq__19332__$1);
var G__19349 = c__17608__auto__;
var G__19350 = cljs.core.count.call(null,c__17608__auto__);
var G__19351 = (0);
seq__19332 = G__19348;
chunk__19333 = G__19349;
count__19334 = G__19350;
i__19335 = G__19351;
continue;
} else {
var node = cljs.core.first.call(null,seq__19332__$1);
goog.events.removeAll(node);

var G__19352 = cljs.core.next.call(null,seq__19332__$1);
var G__19353 = null;
var G__19354 = (0);
var G__19355 = (0);
seq__19332 = G__19352;
chunk__19333 = G__19353;
count__19334 = G__19354;
i__19335 = G__19355;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__19336 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19337 = null;
var count__19338 = (0);
var i__19339 = (0);
while(true){
if((i__19339 < count__19338)){
var node = cljs.core._nth.call(null,chunk__19337,i__19339);
goog.events.removeAll(node,type__$1);

var G__19356 = seq__19336;
var G__19357 = chunk__19337;
var G__19358 = count__19338;
var G__19359 = (i__19339 + (1));
seq__19336 = G__19356;
chunk__19337 = G__19357;
count__19338 = G__19358;
i__19339 = G__19359;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19336);
if(temp__4425__auto__){
var seq__19336__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19336__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__19336__$1);
var G__19360 = cljs.core.chunk_rest.call(null,seq__19336__$1);
var G__19361 = c__17608__auto__;
var G__19362 = cljs.core.count.call(null,c__17608__auto__);
var G__19363 = (0);
seq__19336 = G__19360;
chunk__19337 = G__19361;
count__19338 = G__19362;
i__19339 = G__19363;
continue;
} else {
var node = cljs.core.first.call(null,seq__19336__$1);
goog.events.removeAll(node,type__$1);

var G__19364 = cljs.core.next.call(null,seq__19336__$1);
var G__19365 = null;
var G__19366 = (0);
var G__19367 = (0);
seq__19336 = G__19364;
chunk__19337 = G__19365;
count__19338 = G__19366;
i__19339 = G__19367;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(var_args){
var args19368 = [];
var len__17863__auto___19371 = arguments.length;
var i__17864__auto___19372 = (0);
while(true){
if((i__17864__auto___19372 < len__17863__auto___19371)){
args19368.push((arguments[i__17864__auto___19372]));

var G__19373 = (i__17864__auto___19372 + (1));
i__17864__auto___19372 = G__19373;
continue;
} else {
}
break;
}

var G__19370 = args19368.length;
switch (G__19370) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19368.length)].join('')));

}
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__4423__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4423__auto__)){
var parent = temp__4423__auto__;
var G__19375 = parent;
var G__19376 = cljs.core.cons.call(null,parent,so_far);
n = G__19375;
so_far = G__19376;
continue;
} else {
return so_far;
}
break;
}
});

domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2;
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
evt.target = domina.single_node.call(null,source);

var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__19385_19393 = cljs.core.seq.call(null,ancestors);
var chunk__19386_19394 = null;
var count__19387_19395 = (0);
var i__19388_19396 = (0);
while(true){
if((i__19388_19396 < count__19387_19395)){
var n_19397 = cljs.core._nth.call(null,chunk__19386_19394,i__19388_19396);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_19397;

goog.events.fireListeners(n_19397,evt.type,true,evt);
}

var G__19398 = seq__19385_19393;
var G__19399 = chunk__19386_19394;
var G__19400 = count__19387_19395;
var G__19401 = (i__19388_19396 + (1));
seq__19385_19393 = G__19398;
chunk__19386_19394 = G__19399;
count__19387_19395 = G__19400;
i__19388_19396 = G__19401;
continue;
} else {
var temp__4425__auto___19402 = cljs.core.seq.call(null,seq__19385_19393);
if(temp__4425__auto___19402){
var seq__19385_19403__$1 = temp__4425__auto___19402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19385_19403__$1)){
var c__17608__auto___19404 = cljs.core.chunk_first.call(null,seq__19385_19403__$1);
var G__19405 = cljs.core.chunk_rest.call(null,seq__19385_19403__$1);
var G__19406 = c__17608__auto___19404;
var G__19407 = cljs.core.count.call(null,c__17608__auto___19404);
var G__19408 = (0);
seq__19385_19393 = G__19405;
chunk__19386_19394 = G__19406;
count__19387_19395 = G__19407;
i__19388_19396 = G__19408;
continue;
} else {
var n_19409 = cljs.core.first.call(null,seq__19385_19403__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_19409;

goog.events.fireListeners(n_19409,evt.type,true,evt);
}

var G__19410 = cljs.core.next.call(null,seq__19385_19403__$1);
var G__19411 = null;
var G__19412 = (0);
var G__19413 = (0);
seq__19385_19393 = G__19410;
chunk__19386_19394 = G__19411;
count__19387_19395 = G__19412;
i__19388_19396 = G__19413;
continue;
}
} else {
}
}
break;
}

var seq__19389_19414 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__19390_19415 = null;
var count__19391_19416 = (0);
var i__19392_19417 = (0);
while(true){
if((i__19392_19417 < count__19391_19416)){
var n_19418 = cljs.core._nth.call(null,chunk__19390_19415,i__19392_19417);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_19418;

goog.events.fireListeners(n_19418,evt.type,false,evt);
}

var G__19419 = seq__19389_19414;
var G__19420 = chunk__19390_19415;
var G__19421 = count__19391_19416;
var G__19422 = (i__19392_19417 + (1));
seq__19389_19414 = G__19419;
chunk__19390_19415 = G__19420;
count__19391_19416 = G__19421;
i__19392_19417 = G__19422;
continue;
} else {
var temp__4425__auto___19423 = cljs.core.seq.call(null,seq__19389_19414);
if(temp__4425__auto___19423){
var seq__19389_19424__$1 = temp__4425__auto___19423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19389_19424__$1)){
var c__17608__auto___19425 = cljs.core.chunk_first.call(null,seq__19389_19424__$1);
var G__19426 = cljs.core.chunk_rest.call(null,seq__19389_19424__$1);
var G__19427 = c__17608__auto___19425;
var G__19428 = cljs.core.count.call(null,c__17608__auto___19425);
var G__19429 = (0);
seq__19389_19414 = G__19426;
chunk__19390_19415 = G__19427;
count__19391_19416 = G__19428;
i__19392_19417 = G__19429;
continue;
} else {
var n_19430 = cljs.core.first.call(null,seq__19389_19424__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_19430;

goog.events.fireListeners(n_19430,evt.type,false,evt);
}

var G__19431 = cljs.core.next.call(null,seq__19389_19424__$1);
var G__19432 = null;
var G__19433 = (0);
var G__19434 = (0);
seq__19389_19414 = G__19431;
chunk__19390_19415 = G__19432;
count__19391_19416 = G__19433;
i__19392_19417 = G__19434;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__16793__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__16793__auto__)){
return o.dispatchEvent;
} else {
return and__16793__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var args19435 = [];
var len__17863__auto___19444 = arguments.length;
var i__17864__auto___19445 = (0);
while(true){
if((i__17864__auto___19445 < len__17863__auto___19444)){
args19435.push((arguments[i__17864__auto___19445]));

var G__19446 = (i__17864__auto___19445 + (1));
i__17864__auto___19445 = G__19446;
continue;
} else {
}
break;
}

var G__19437 = args19435.length;
switch (G__19437) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19435.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__19438_19448 = cljs.core.seq.call(null,evt_map);
var chunk__19439_19449 = null;
var count__19440_19450 = (0);
var i__19441_19451 = (0);
while(true){
if((i__19441_19451 < count__19440_19450)){
var vec__19442_19452 = cljs.core._nth.call(null,chunk__19439_19449,i__19441_19451);
var k_19453 = cljs.core.nth.call(null,vec__19442_19452,(0),null);
var v_19454 = cljs.core.nth.call(null,vec__19442_19452,(1),null);
(evt[k_19453] = v_19454);

var G__19455 = seq__19438_19448;
var G__19456 = chunk__19439_19449;
var G__19457 = count__19440_19450;
var G__19458 = (i__19441_19451 + (1));
seq__19438_19448 = G__19455;
chunk__19439_19449 = G__19456;
count__19440_19450 = G__19457;
i__19441_19451 = G__19458;
continue;
} else {
var temp__4425__auto___19459 = cljs.core.seq.call(null,seq__19438_19448);
if(temp__4425__auto___19459){
var seq__19438_19460__$1 = temp__4425__auto___19459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19438_19460__$1)){
var c__17608__auto___19461 = cljs.core.chunk_first.call(null,seq__19438_19460__$1);
var G__19462 = cljs.core.chunk_rest.call(null,seq__19438_19460__$1);
var G__19463 = c__17608__auto___19461;
var G__19464 = cljs.core.count.call(null,c__17608__auto___19461);
var G__19465 = (0);
seq__19438_19448 = G__19462;
chunk__19439_19449 = G__19463;
count__19440_19450 = G__19464;
i__19441_19451 = G__19465;
continue;
} else {
var vec__19443_19466 = cljs.core.first.call(null,seq__19438_19460__$1);
var k_19467 = cljs.core.nth.call(null,vec__19443_19466,(0),null);
var v_19468 = cljs.core.nth.call(null,vec__19443_19466,(1),null);
(evt[k_19467] = v_19468);

var G__19469 = cljs.core.next.call(null,seq__19438_19460__$1);
var G__19470 = null;
var G__19471 = (0);
var G__19472 = (0);
seq__19438_19448 = G__19469;
chunk__19439_19449 = G__19470;
count__19440_19450 = G__19471;
i__19441_19451 = G__19472;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});

domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__19473_SHARP_){
return goog.events.getListeners(p1__19473_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map?rel=1454634556464