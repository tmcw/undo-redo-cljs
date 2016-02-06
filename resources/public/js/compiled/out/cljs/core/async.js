// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19017 = [];
var len__17863__auto___19023 = arguments.length;
var i__17864__auto___19024 = (0);
while(true){
if((i__17864__auto___19024 < len__17863__auto___19023)){
args19017.push((arguments[i__17864__auto___19024]));

var G__19025 = (i__17864__auto___19024 + (1));
i__17864__auto___19024 = G__19025;
continue;
} else {
}
break;
}

var G__19019 = args19017.length;
switch (G__19019) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19017.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19020 = (function (f,blockable,meta19021){
this.f = f;
this.blockable = blockable;
this.meta19021 = meta19021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19022,meta19021__$1){
var self__ = this;
var _19022__$1 = this;
return (new cljs.core.async.t_cljs$core$async19020(self__.f,self__.blockable,meta19021__$1));
});

cljs.core.async.t_cljs$core$async19020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19022){
var self__ = this;
var _19022__$1 = this;
return self__.meta19021;
});

cljs.core.async.t_cljs$core$async19020.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19020.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19021","meta19021",-130531168,null)], null);
});

cljs.core.async.t_cljs$core$async19020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19020";

cljs.core.async.t_cljs$core$async19020.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async19020");
});

cljs.core.async.__GT_t_cljs$core$async19020 = (function cljs$core$async$__GT_t_cljs$core$async19020(f__$1,blockable__$1,meta19021){
return (new cljs.core.async.t_cljs$core$async19020(f__$1,blockable__$1,meta19021));
});

}

return (new cljs.core.async.t_cljs$core$async19020(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19029 = [];
var len__17863__auto___19032 = arguments.length;
var i__17864__auto___19033 = (0);
while(true){
if((i__17864__auto___19033 < len__17863__auto___19032)){
args19029.push((arguments[i__17864__auto___19033]));

var G__19034 = (i__17864__auto___19033 + (1));
i__17864__auto___19033 = G__19034;
continue;
} else {
}
break;
}

var G__19031 = args19029.length;
switch (G__19031) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19029.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19036 = [];
var len__17863__auto___19039 = arguments.length;
var i__17864__auto___19040 = (0);
while(true){
if((i__17864__auto___19040 < len__17863__auto___19039)){
args19036.push((arguments[i__17864__auto___19040]));

var G__19041 = (i__17864__auto___19040 + (1));
i__17864__auto___19040 = G__19041;
continue;
} else {
}
break;
}

var G__19038 = args19036.length;
switch (G__19038) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19036.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19043 = [];
var len__17863__auto___19046 = arguments.length;
var i__17864__auto___19047 = (0);
while(true){
if((i__17864__auto___19047 < len__17863__auto___19046)){
args19043.push((arguments[i__17864__auto___19047]));

var G__19048 = (i__17864__auto___19047 + (1));
i__17864__auto___19047 = G__19048;
continue;
} else {
}
break;
}

var G__19045 = args19043.length;
switch (G__19045) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19043.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19050 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19050);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19050,ret){
return (function (){
return fn1.call(null,val_19050);
});})(val_19050,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19051 = [];
var len__17863__auto___19054 = arguments.length;
var i__17864__auto___19055 = (0);
while(true){
if((i__17864__auto___19055 < len__17863__auto___19054)){
args19051.push((arguments[i__17864__auto___19055]));

var G__19056 = (i__17864__auto___19055 + (1));
i__17864__auto___19055 = G__19056;
continue;
} else {
}
break;
}

var G__19053 = args19051.length;
switch (G__19053) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19051.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17708__auto___19058 = n;
var x_19059 = (0);
while(true){
if((x_19059 < n__17708__auto___19058)){
(a[x_19059] = (0));

var G__19060 = (x_19059 + (1));
x_19059 = G__19060;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19061 = (i + (1));
i = G__19061;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19065 = (function (alt_flag,flag,meta19066){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19066 = meta19066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19067,meta19066__$1){
var self__ = this;
var _19067__$1 = this;
return (new cljs.core.async.t_cljs$core$async19065(self__.alt_flag,self__.flag,meta19066__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19067){
var self__ = this;
var _19067__$1 = this;
return self__.meta19066;
});})(flag))
;

cljs.core.async.t_cljs$core$async19065.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19065.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19066","meta19066",1673473908,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19065";

cljs.core.async.t_cljs$core$async19065.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async19065");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19065 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19065(alt_flag__$1,flag__$1,meta19066){
return (new cljs.core.async.t_cljs$core$async19065(alt_flag__$1,flag__$1,meta19066));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19065(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19071 = (function (alt_handler,flag,cb,meta19072){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19072 = meta19072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19073,meta19072__$1){
var self__ = this;
var _19073__$1 = this;
return (new cljs.core.async.t_cljs$core$async19071(self__.alt_handler,self__.flag,self__.cb,meta19072__$1));
});

cljs.core.async.t_cljs$core$async19071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19073){
var self__ = this;
var _19073__$1 = this;
return self__.meta19072;
});

cljs.core.async.t_cljs$core$async19071.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19072","meta19072",2010548643,null)], null);
});

cljs.core.async.t_cljs$core$async19071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19071";

cljs.core.async.t_cljs$core$async19071.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async19071");
});

cljs.core.async.__GT_t_cljs$core$async19071 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19071(alt_handler__$1,flag__$1,cb__$1,meta19072){
return (new cljs.core.async.t_cljs$core$async19071(alt_handler__$1,flag__$1,cb__$1,meta19072));
});

}

return (new cljs.core.async.t_cljs$core$async19071(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19074_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19074_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19075_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19075_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16805__auto__ = wport;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19076 = (i + (1));
i = G__19076;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16805__auto__ = ret;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16793__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16793__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19082 = arguments.length;
var i__17864__auto___19083 = (0);
while(true){
if((i__17864__auto___19083 < len__17863__auto___19082)){
args__17870__auto__.push((arguments[i__17864__auto___19083]));

var G__19084 = (i__17864__auto___19083 + (1));
i__17864__auto___19083 = G__19084;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19079){
var map__19080 = p__19079;
var map__19080__$1 = ((((!((map__19080 == null)))?((((map__19080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19080):map__19080);
var opts = map__19080__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19077){
var G__19078 = cljs.core.first.call(null,seq19077);
var seq19077__$1 = cljs.core.next.call(null,seq19077);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19078,seq19077__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19085 = [];
var len__17863__auto___19135 = arguments.length;
var i__17864__auto___19136 = (0);
while(true){
if((i__17864__auto___19136 < len__17863__auto___19135)){
args19085.push((arguments[i__17864__auto___19136]));

var G__19137 = (i__17864__auto___19136 + (1));
i__17864__auto___19136 = G__19137;
continue;
} else {
}
break;
}

var G__19087 = args19085.length;
switch (G__19087) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19085.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18972__auto___19139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___19139){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___19139){
return (function (state_19111){
var state_val_19112 = (state_19111[(1)]);
if((state_val_19112 === (7))){
var inst_19107 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
var statearr_19113_19140 = state_19111__$1;
(statearr_19113_19140[(2)] = inst_19107);

(statearr_19113_19140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (1))){
var state_19111__$1 = state_19111;
var statearr_19114_19141 = state_19111__$1;
(statearr_19114_19141[(2)] = null);

(statearr_19114_19141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (4))){
var inst_19090 = (state_19111[(7)]);
var inst_19090__$1 = (state_19111[(2)]);
var inst_19091 = (inst_19090__$1 == null);
var state_19111__$1 = (function (){var statearr_19115 = state_19111;
(statearr_19115[(7)] = inst_19090__$1);

return statearr_19115;
})();
if(cljs.core.truth_(inst_19091)){
var statearr_19116_19142 = state_19111__$1;
(statearr_19116_19142[(1)] = (5));

} else {
var statearr_19117_19143 = state_19111__$1;
(statearr_19117_19143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (13))){
var state_19111__$1 = state_19111;
var statearr_19118_19144 = state_19111__$1;
(statearr_19118_19144[(2)] = null);

(statearr_19118_19144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (6))){
var inst_19090 = (state_19111[(7)]);
var state_19111__$1 = state_19111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19111__$1,(11),to,inst_19090);
} else {
if((state_val_19112 === (3))){
var inst_19109 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19111__$1,inst_19109);
} else {
if((state_val_19112 === (12))){
var state_19111__$1 = state_19111;
var statearr_19119_19145 = state_19111__$1;
(statearr_19119_19145[(2)] = null);

(statearr_19119_19145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (2))){
var state_19111__$1 = state_19111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19111__$1,(4),from);
} else {
if((state_val_19112 === (11))){
var inst_19100 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
if(cljs.core.truth_(inst_19100)){
var statearr_19120_19146 = state_19111__$1;
(statearr_19120_19146[(1)] = (12));

} else {
var statearr_19121_19147 = state_19111__$1;
(statearr_19121_19147[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (9))){
var state_19111__$1 = state_19111;
var statearr_19122_19148 = state_19111__$1;
(statearr_19122_19148[(2)] = null);

(statearr_19122_19148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (5))){
var state_19111__$1 = state_19111;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19123_19149 = state_19111__$1;
(statearr_19123_19149[(1)] = (8));

} else {
var statearr_19124_19150 = state_19111__$1;
(statearr_19124_19150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (14))){
var inst_19105 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
var statearr_19125_19151 = state_19111__$1;
(statearr_19125_19151[(2)] = inst_19105);

(statearr_19125_19151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (10))){
var inst_19097 = (state_19111[(2)]);
var state_19111__$1 = state_19111;
var statearr_19126_19152 = state_19111__$1;
(statearr_19126_19152[(2)] = inst_19097);

(statearr_19126_19152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19112 === (8))){
var inst_19094 = cljs.core.async.close_BANG_.call(null,to);
var state_19111__$1 = state_19111;
var statearr_19127_19153 = state_19111__$1;
(statearr_19127_19153[(2)] = inst_19094);

(statearr_19127_19153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___19139))
;
return ((function (switch__18860__auto__,c__18972__auto___19139){
return (function() {
var cljs$core$async$state_machine__18861__auto__ = null;
var cljs$core$async$state_machine__18861__auto____0 = (function (){
var statearr_19131 = [null,null,null,null,null,null,null,null];
(statearr_19131[(0)] = cljs$core$async$state_machine__18861__auto__);

(statearr_19131[(1)] = (1));

return statearr_19131;
});
var cljs$core$async$state_machine__18861__auto____1 = (function (state_19111){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_19111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e19132){if((e19132 instanceof Object)){
var ex__18864__auto__ = e19132;
var statearr_19133_19154 = state_19111;
(statearr_19133_19154[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19155 = state_19111;
state_19111 = G__19155;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$state_machine__18861__auto__ = function(state_19111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18861__auto____1.call(this,state_19111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18861__auto____0;
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18861__auto____1;
return cljs$core$async$state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___19139))
})();
var state__18974__auto__ = (function (){var statearr_19134 = f__18973__auto__.call(null);
(statearr_19134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___19139);

return statearr_19134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___19139))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19339){
var vec__19340 = p__19339;
var v = cljs.core.nth.call(null,vec__19340,(0),null);
var p = cljs.core.nth.call(null,vec__19340,(1),null);
var job = vec__19340;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18972__auto___19522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___19522,res,vec__19340,v,p,job,jobs,results){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___19522,res,vec__19340,v,p,job,jobs,results){
return (function (state_19345){
var state_val_19346 = (state_19345[(1)]);
if((state_val_19346 === (1))){
var state_19345__$1 = state_19345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19345__$1,(2),res,v);
} else {
if((state_val_19346 === (2))){
var inst_19342 = (state_19345[(2)]);
var inst_19343 = cljs.core.async.close_BANG_.call(null,res);
var state_19345__$1 = (function (){var statearr_19347 = state_19345;
(statearr_19347[(7)] = inst_19342);

return statearr_19347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19345__$1,inst_19343);
} else {
return null;
}
}
});})(c__18972__auto___19522,res,vec__19340,v,p,job,jobs,results))
;
return ((function (switch__18860__auto__,c__18972__auto___19522,res,vec__19340,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0 = (function (){
var statearr_19351 = [null,null,null,null,null,null,null,null];
(statearr_19351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__);

(statearr_19351[(1)] = (1));

return statearr_19351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1 = (function (state_19345){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_19345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e19352){if((e19352 instanceof Object)){
var ex__18864__auto__ = e19352;
var statearr_19353_19523 = state_19345;
(statearr_19353_19523[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19524 = state_19345;
state_19345 = G__19524;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__ = function(state_19345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1.call(this,state_19345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___19522,res,vec__19340,v,p,job,jobs,results))
})();
var state__18974__auto__ = (function (){var statearr_19354 = f__18973__auto__.call(null);
(statearr_19354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___19522);

return statearr_19354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___19522,res,vec__19340,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19355){
var vec__19356 = p__19355;
var v = cljs.core.nth.call(null,vec__19356,(0),null);
var p = cljs.core.nth.call(null,vec__19356,(1),null);
var job = vec__19356;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17708__auto___19525 = n;
var __19526 = (0);
while(true){
if((__19526 < n__17708__auto___19525)){
var G__19357_19527 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19357_19527) {
case "compute":
var c__18972__auto___19529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19526,c__18972__auto___19529,G__19357_19527,n__17708__auto___19525,jobs,results,process,async){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (__19526,c__18972__auto___19529,G__19357_19527,n__17708__auto___19525,jobs,results,process,async){
return (function (state_19370){
var state_val_19371 = (state_19370[(1)]);
if((state_val_19371 === (1))){
var state_19370__$1 = state_19370;
var statearr_19372_19530 = state_19370__$1;
(statearr_19372_19530[(2)] = null);

(statearr_19372_19530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19371 === (2))){
var state_19370__$1 = state_19370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19370__$1,(4),jobs);
} else {
if((state_val_19371 === (3))){
var inst_19368 = (state_19370[(2)]);
var state_19370__$1 = state_19370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19370__$1,inst_19368);
} else {
if((state_val_19371 === (4))){
var inst_19360 = (state_19370[(2)]);
var inst_19361 = process.call(null,inst_19360);
var state_19370__$1 = state_19370;
if(cljs.core.truth_(inst_19361)){
var statearr_19373_19531 = state_19370__$1;
(statearr_19373_19531[(1)] = (5));

} else {
var statearr_19374_19532 = state_19370__$1;
(statearr_19374_19532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19371 === (5))){
var state_19370__$1 = state_19370;
var statearr_19375_19533 = state_19370__$1;
(statearr_19375_19533[(2)] = null);

(statearr_19375_19533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19371 === (6))){
var state_19370__$1 = state_19370;
var statearr_19376_19534 = state_19370__$1;
(statearr_19376_19534[(2)] = null);

(statearr_19376_19534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19371 === (7))){
var inst_19366 = (state_19370[(2)]);
var state_19370__$1 = state_19370;
var statearr_19377_19535 = state_19370__$1;
(statearr_19377_19535[(2)] = inst_19366);

(statearr_19377_19535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19526,c__18972__auto___19529,G__19357_19527,n__17708__auto___19525,jobs,results,process,async))
;
return ((function (__19526,switch__18860__auto__,c__18972__auto___19529,G__19357_19527,n__17708__auto___19525,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0 = (function (){
var statearr_19381 = [null,null,null,null,null,null,null];
(statearr_19381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__);

(statearr_19381[(1)] = (1));

return statearr_19381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1 = (function (state_19370){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_19370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e19382){if((e19382 instanceof Object)){
var ex__18864__auto__ = e19382;
var statearr_19383_19536 = state_19370;
(statearr_19383_19536[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19537 = state_19370;
state_19370 = G__19537;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__ = function(state_19370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1.call(this,state_19370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__;
})()
;})(__19526,switch__18860__auto__,c__18972__auto___19529,G__19357_19527,n__17708__auto___19525,jobs,results,process,async))
})();
var state__18974__auto__ = (function (){var statearr_19384 = f__18973__auto__.call(null);
(statearr_19384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___19529);

return statearr_19384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(__19526,c__18972__auto___19529,G__19357_19527,n__17708__auto___19525,jobs,results,process,async))
);


break;
case "async":
var c__18972__auto___19538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19526,c__18972__auto___19538,G__19357_19527,n__17708__auto___19525,jobs,results,process,async){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (__19526,c__18972__auto___19538,G__19357_19527,n__17708__auto___19525,jobs,results,process,async){
return (function (state_19397){
var state_val_19398 = (state_19397[(1)]);
if((state_val_19398 === (1))){
var state_19397__$1 = state_19397;
var statearr_19399_19539 = state_19397__$1;
(statearr_19399_19539[(2)] = null);

(statearr_19399_19539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19398 === (2))){
var state_19397__$1 = state_19397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19397__$1,(4),jobs);
} else {
if((state_val_19398 === (3))){
var inst_19395 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19397__$1,inst_19395);
} else {
if((state_val_19398 === (4))){
var inst_19387 = (state_19397[(2)]);
var inst_19388 = async.call(null,inst_19387);
var state_19397__$1 = state_19397;
if(cljs.core.truth_(inst_19388)){
var statearr_19400_19540 = state_19397__$1;
(statearr_19400_19540[(1)] = (5));

} else {
var statearr_19401_19541 = state_19397__$1;
(statearr_19401_19541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19398 === (5))){
var state_19397__$1 = state_19397;
var statearr_19402_19542 = state_19397__$1;
(statearr_19402_19542[(2)] = null);

(statearr_19402_19542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19398 === (6))){
var state_19397__$1 = state_19397;
var statearr_19403_19543 = state_19397__$1;
(statearr_19403_19543[(2)] = null);

(statearr_19403_19543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19398 === (7))){
var inst_19393 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
var statearr_19404_19544 = state_19397__$1;
(statearr_19404_19544[(2)] = inst_19393);

(statearr_19404_19544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19526,c__18972__auto___19538,G__19357_19527,n__17708__auto___19525,jobs,results,process,async))
;
return ((function (__19526,switch__18860__auto__,c__18972__auto___19538,G__19357_19527,n__17708__auto___19525,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0 = (function (){
var statearr_19408 = [null,null,null,null,null,null,null];
(statearr_19408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__);

(statearr_19408[(1)] = (1));

return statearr_19408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1 = (function (state_19397){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_19397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e19409){if((e19409 instanceof Object)){
var ex__18864__auto__ = e19409;
var statearr_19410_19545 = state_19397;
(statearr_19410_19545[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19546 = state_19397;
state_19397 = G__19546;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__ = function(state_19397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1.call(this,state_19397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__;
})()
;})(__19526,switch__18860__auto__,c__18972__auto___19538,G__19357_19527,n__17708__auto___19525,jobs,results,process,async))
})();
var state__18974__auto__ = (function (){var statearr_19411 = f__18973__auto__.call(null);
(statearr_19411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___19538);

return statearr_19411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(__19526,c__18972__auto___19538,G__19357_19527,n__17708__auto___19525,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19547 = (__19526 + (1));
__19526 = G__19547;
continue;
} else {
}
break;
}

var c__18972__auto___19548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___19548,jobs,results,process,async){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___19548,jobs,results,process,async){
return (function (state_19433){
var state_val_19434 = (state_19433[(1)]);
if((state_val_19434 === (1))){
var state_19433__$1 = state_19433;
var statearr_19435_19549 = state_19433__$1;
(statearr_19435_19549[(2)] = null);

(statearr_19435_19549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (2))){
var state_19433__$1 = state_19433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19433__$1,(4),from);
} else {
if((state_val_19434 === (3))){
var inst_19431 = (state_19433[(2)]);
var state_19433__$1 = state_19433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19433__$1,inst_19431);
} else {
if((state_val_19434 === (4))){
var inst_19414 = (state_19433[(7)]);
var inst_19414__$1 = (state_19433[(2)]);
var inst_19415 = (inst_19414__$1 == null);
var state_19433__$1 = (function (){var statearr_19436 = state_19433;
(statearr_19436[(7)] = inst_19414__$1);

return statearr_19436;
})();
if(cljs.core.truth_(inst_19415)){
var statearr_19437_19550 = state_19433__$1;
(statearr_19437_19550[(1)] = (5));

} else {
var statearr_19438_19551 = state_19433__$1;
(statearr_19438_19551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (5))){
var inst_19417 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19433__$1 = state_19433;
var statearr_19439_19552 = state_19433__$1;
(statearr_19439_19552[(2)] = inst_19417);

(statearr_19439_19552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (6))){
var inst_19419 = (state_19433[(8)]);
var inst_19414 = (state_19433[(7)]);
var inst_19419__$1 = cljs.core.async.chan.call(null,(1));
var inst_19420 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19421 = [inst_19414,inst_19419__$1];
var inst_19422 = (new cljs.core.PersistentVector(null,2,(5),inst_19420,inst_19421,null));
var state_19433__$1 = (function (){var statearr_19440 = state_19433;
(statearr_19440[(8)] = inst_19419__$1);

return statearr_19440;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19433__$1,(8),jobs,inst_19422);
} else {
if((state_val_19434 === (7))){
var inst_19429 = (state_19433[(2)]);
var state_19433__$1 = state_19433;
var statearr_19441_19553 = state_19433__$1;
(statearr_19441_19553[(2)] = inst_19429);

(statearr_19441_19553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19434 === (8))){
var inst_19419 = (state_19433[(8)]);
var inst_19424 = (state_19433[(2)]);
var state_19433__$1 = (function (){var statearr_19442 = state_19433;
(statearr_19442[(9)] = inst_19424);

return statearr_19442;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19433__$1,(9),results,inst_19419);
} else {
if((state_val_19434 === (9))){
var inst_19426 = (state_19433[(2)]);
var state_19433__$1 = (function (){var statearr_19443 = state_19433;
(statearr_19443[(10)] = inst_19426);

return statearr_19443;
})();
var statearr_19444_19554 = state_19433__$1;
(statearr_19444_19554[(2)] = null);

(statearr_19444_19554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___19548,jobs,results,process,async))
;
return ((function (switch__18860__auto__,c__18972__auto___19548,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0 = (function (){
var statearr_19448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__);

(statearr_19448[(1)] = (1));

return statearr_19448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1 = (function (state_19433){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_19433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e19449){if((e19449 instanceof Object)){
var ex__18864__auto__ = e19449;
var statearr_19450_19555 = state_19433;
(statearr_19450_19555[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19556 = state_19433;
state_19433 = G__19556;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__ = function(state_19433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1.call(this,state_19433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___19548,jobs,results,process,async))
})();
var state__18974__auto__ = (function (){var statearr_19451 = f__18973__auto__.call(null);
(statearr_19451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___19548);

return statearr_19451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___19548,jobs,results,process,async))
);


var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__,jobs,results,process,async){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__,jobs,results,process,async){
return (function (state_19489){
var state_val_19490 = (state_19489[(1)]);
if((state_val_19490 === (7))){
var inst_19485 = (state_19489[(2)]);
var state_19489__$1 = state_19489;
var statearr_19491_19557 = state_19489__$1;
(statearr_19491_19557[(2)] = inst_19485);

(statearr_19491_19557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (20))){
var state_19489__$1 = state_19489;
var statearr_19492_19558 = state_19489__$1;
(statearr_19492_19558[(2)] = null);

(statearr_19492_19558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (1))){
var state_19489__$1 = state_19489;
var statearr_19493_19559 = state_19489__$1;
(statearr_19493_19559[(2)] = null);

(statearr_19493_19559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (4))){
var inst_19454 = (state_19489[(7)]);
var inst_19454__$1 = (state_19489[(2)]);
var inst_19455 = (inst_19454__$1 == null);
var state_19489__$1 = (function (){var statearr_19494 = state_19489;
(statearr_19494[(7)] = inst_19454__$1);

return statearr_19494;
})();
if(cljs.core.truth_(inst_19455)){
var statearr_19495_19560 = state_19489__$1;
(statearr_19495_19560[(1)] = (5));

} else {
var statearr_19496_19561 = state_19489__$1;
(statearr_19496_19561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (15))){
var inst_19467 = (state_19489[(8)]);
var state_19489__$1 = state_19489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19489__$1,(18),to,inst_19467);
} else {
if((state_val_19490 === (21))){
var inst_19480 = (state_19489[(2)]);
var state_19489__$1 = state_19489;
var statearr_19497_19562 = state_19489__$1;
(statearr_19497_19562[(2)] = inst_19480);

(statearr_19497_19562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (13))){
var inst_19482 = (state_19489[(2)]);
var state_19489__$1 = (function (){var statearr_19498 = state_19489;
(statearr_19498[(9)] = inst_19482);

return statearr_19498;
})();
var statearr_19499_19563 = state_19489__$1;
(statearr_19499_19563[(2)] = null);

(statearr_19499_19563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (6))){
var inst_19454 = (state_19489[(7)]);
var state_19489__$1 = state_19489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19489__$1,(11),inst_19454);
} else {
if((state_val_19490 === (17))){
var inst_19475 = (state_19489[(2)]);
var state_19489__$1 = state_19489;
if(cljs.core.truth_(inst_19475)){
var statearr_19500_19564 = state_19489__$1;
(statearr_19500_19564[(1)] = (19));

} else {
var statearr_19501_19565 = state_19489__$1;
(statearr_19501_19565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (3))){
var inst_19487 = (state_19489[(2)]);
var state_19489__$1 = state_19489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19489__$1,inst_19487);
} else {
if((state_val_19490 === (12))){
var inst_19464 = (state_19489[(10)]);
var state_19489__$1 = state_19489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19489__$1,(14),inst_19464);
} else {
if((state_val_19490 === (2))){
var state_19489__$1 = state_19489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19489__$1,(4),results);
} else {
if((state_val_19490 === (19))){
var state_19489__$1 = state_19489;
var statearr_19502_19566 = state_19489__$1;
(statearr_19502_19566[(2)] = null);

(statearr_19502_19566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (11))){
var inst_19464 = (state_19489[(2)]);
var state_19489__$1 = (function (){var statearr_19503 = state_19489;
(statearr_19503[(10)] = inst_19464);

return statearr_19503;
})();
var statearr_19504_19567 = state_19489__$1;
(statearr_19504_19567[(2)] = null);

(statearr_19504_19567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (9))){
var state_19489__$1 = state_19489;
var statearr_19505_19568 = state_19489__$1;
(statearr_19505_19568[(2)] = null);

(statearr_19505_19568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (5))){
var state_19489__$1 = state_19489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19506_19569 = state_19489__$1;
(statearr_19506_19569[(1)] = (8));

} else {
var statearr_19507_19570 = state_19489__$1;
(statearr_19507_19570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (14))){
var inst_19467 = (state_19489[(8)]);
var inst_19469 = (state_19489[(11)]);
var inst_19467__$1 = (state_19489[(2)]);
var inst_19468 = (inst_19467__$1 == null);
var inst_19469__$1 = cljs.core.not.call(null,inst_19468);
var state_19489__$1 = (function (){var statearr_19508 = state_19489;
(statearr_19508[(8)] = inst_19467__$1);

(statearr_19508[(11)] = inst_19469__$1);

return statearr_19508;
})();
if(inst_19469__$1){
var statearr_19509_19571 = state_19489__$1;
(statearr_19509_19571[(1)] = (15));

} else {
var statearr_19510_19572 = state_19489__$1;
(statearr_19510_19572[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (16))){
var inst_19469 = (state_19489[(11)]);
var state_19489__$1 = state_19489;
var statearr_19511_19573 = state_19489__$1;
(statearr_19511_19573[(2)] = inst_19469);

(statearr_19511_19573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (10))){
var inst_19461 = (state_19489[(2)]);
var state_19489__$1 = state_19489;
var statearr_19512_19574 = state_19489__$1;
(statearr_19512_19574[(2)] = inst_19461);

(statearr_19512_19574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (18))){
var inst_19472 = (state_19489[(2)]);
var state_19489__$1 = state_19489;
var statearr_19513_19575 = state_19489__$1;
(statearr_19513_19575[(2)] = inst_19472);

(statearr_19513_19575[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19490 === (8))){
var inst_19458 = cljs.core.async.close_BANG_.call(null,to);
var state_19489__$1 = state_19489;
var statearr_19514_19576 = state_19489__$1;
(statearr_19514_19576[(2)] = inst_19458);

(statearr_19514_19576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto__,jobs,results,process,async))
;
return ((function (switch__18860__auto__,c__18972__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0 = (function (){
var statearr_19518 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__);

(statearr_19518[(1)] = (1));

return statearr_19518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1 = (function (state_19489){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_19489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e19519){if((e19519 instanceof Object)){
var ex__18864__auto__ = e19519;
var statearr_19520_19577 = state_19489;
(statearr_19520_19577[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19578 = state_19489;
state_19489 = G__19578;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__ = function(state_19489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1.call(this,state_19489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__,jobs,results,process,async))
})();
var state__18974__auto__ = (function (){var statearr_19521 = f__18973__auto__.call(null);
(statearr_19521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_19521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__,jobs,results,process,async))
);

return c__18972__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19579 = [];
var len__17863__auto___19582 = arguments.length;
var i__17864__auto___19583 = (0);
while(true){
if((i__17864__auto___19583 < len__17863__auto___19582)){
args19579.push((arguments[i__17864__auto___19583]));

var G__19584 = (i__17864__auto___19583 + (1));
i__17864__auto___19583 = G__19584;
continue;
} else {
}
break;
}

var G__19581 = args19579.length;
switch (G__19581) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19579.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19586 = [];
var len__17863__auto___19589 = arguments.length;
var i__17864__auto___19590 = (0);
while(true){
if((i__17864__auto___19590 < len__17863__auto___19589)){
args19586.push((arguments[i__17864__auto___19590]));

var G__19591 = (i__17864__auto___19590 + (1));
i__17864__auto___19590 = G__19591;
continue;
} else {
}
break;
}

var G__19588 = args19586.length;
switch (G__19588) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19586.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19593 = [];
var len__17863__auto___19646 = arguments.length;
var i__17864__auto___19647 = (0);
while(true){
if((i__17864__auto___19647 < len__17863__auto___19646)){
args19593.push((arguments[i__17864__auto___19647]));

var G__19648 = (i__17864__auto___19647 + (1));
i__17864__auto___19647 = G__19648;
continue;
} else {
}
break;
}

var G__19595 = args19593.length;
switch (G__19595) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19593.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18972__auto___19650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___19650,tc,fc){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___19650,tc,fc){
return (function (state_19621){
var state_val_19622 = (state_19621[(1)]);
if((state_val_19622 === (7))){
var inst_19617 = (state_19621[(2)]);
var state_19621__$1 = state_19621;
var statearr_19623_19651 = state_19621__$1;
(statearr_19623_19651[(2)] = inst_19617);

(statearr_19623_19651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (1))){
var state_19621__$1 = state_19621;
var statearr_19624_19652 = state_19621__$1;
(statearr_19624_19652[(2)] = null);

(statearr_19624_19652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (4))){
var inst_19598 = (state_19621[(7)]);
var inst_19598__$1 = (state_19621[(2)]);
var inst_19599 = (inst_19598__$1 == null);
var state_19621__$1 = (function (){var statearr_19625 = state_19621;
(statearr_19625[(7)] = inst_19598__$1);

return statearr_19625;
})();
if(cljs.core.truth_(inst_19599)){
var statearr_19626_19653 = state_19621__$1;
(statearr_19626_19653[(1)] = (5));

} else {
var statearr_19627_19654 = state_19621__$1;
(statearr_19627_19654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (13))){
var state_19621__$1 = state_19621;
var statearr_19628_19655 = state_19621__$1;
(statearr_19628_19655[(2)] = null);

(statearr_19628_19655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (6))){
var inst_19598 = (state_19621[(7)]);
var inst_19604 = p.call(null,inst_19598);
var state_19621__$1 = state_19621;
if(cljs.core.truth_(inst_19604)){
var statearr_19629_19656 = state_19621__$1;
(statearr_19629_19656[(1)] = (9));

} else {
var statearr_19630_19657 = state_19621__$1;
(statearr_19630_19657[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (3))){
var inst_19619 = (state_19621[(2)]);
var state_19621__$1 = state_19621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19621__$1,inst_19619);
} else {
if((state_val_19622 === (12))){
var state_19621__$1 = state_19621;
var statearr_19631_19658 = state_19621__$1;
(statearr_19631_19658[(2)] = null);

(statearr_19631_19658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (2))){
var state_19621__$1 = state_19621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19621__$1,(4),ch);
} else {
if((state_val_19622 === (11))){
var inst_19598 = (state_19621[(7)]);
var inst_19608 = (state_19621[(2)]);
var state_19621__$1 = state_19621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19621__$1,(8),inst_19608,inst_19598);
} else {
if((state_val_19622 === (9))){
var state_19621__$1 = state_19621;
var statearr_19632_19659 = state_19621__$1;
(statearr_19632_19659[(2)] = tc);

(statearr_19632_19659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (5))){
var inst_19601 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19602 = cljs.core.async.close_BANG_.call(null,fc);
var state_19621__$1 = (function (){var statearr_19633 = state_19621;
(statearr_19633[(8)] = inst_19601);

return statearr_19633;
})();
var statearr_19634_19660 = state_19621__$1;
(statearr_19634_19660[(2)] = inst_19602);

(statearr_19634_19660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (14))){
var inst_19615 = (state_19621[(2)]);
var state_19621__$1 = state_19621;
var statearr_19635_19661 = state_19621__$1;
(statearr_19635_19661[(2)] = inst_19615);

(statearr_19635_19661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (10))){
var state_19621__$1 = state_19621;
var statearr_19636_19662 = state_19621__$1;
(statearr_19636_19662[(2)] = fc);

(statearr_19636_19662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19622 === (8))){
var inst_19610 = (state_19621[(2)]);
var state_19621__$1 = state_19621;
if(cljs.core.truth_(inst_19610)){
var statearr_19637_19663 = state_19621__$1;
(statearr_19637_19663[(1)] = (12));

} else {
var statearr_19638_19664 = state_19621__$1;
(statearr_19638_19664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___19650,tc,fc))
;
return ((function (switch__18860__auto__,c__18972__auto___19650,tc,fc){
return (function() {
var cljs$core$async$state_machine__18861__auto__ = null;
var cljs$core$async$state_machine__18861__auto____0 = (function (){
var statearr_19642 = [null,null,null,null,null,null,null,null,null];
(statearr_19642[(0)] = cljs$core$async$state_machine__18861__auto__);

(statearr_19642[(1)] = (1));

return statearr_19642;
});
var cljs$core$async$state_machine__18861__auto____1 = (function (state_19621){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_19621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e19643){if((e19643 instanceof Object)){
var ex__18864__auto__ = e19643;
var statearr_19644_19665 = state_19621;
(statearr_19644_19665[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19666 = state_19621;
state_19621 = G__19666;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$state_machine__18861__auto__ = function(state_19621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18861__auto____1.call(this,state_19621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18861__auto____0;
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18861__auto____1;
return cljs$core$async$state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___19650,tc,fc))
})();
var state__18974__auto__ = (function (){var statearr_19645 = f__18973__auto__.call(null);
(statearr_19645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___19650);

return statearr_19645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___19650,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_19730){
var state_val_19731 = (state_19730[(1)]);
if((state_val_19731 === (7))){
var inst_19726 = (state_19730[(2)]);
var state_19730__$1 = state_19730;
var statearr_19732_19753 = state_19730__$1;
(statearr_19732_19753[(2)] = inst_19726);

(statearr_19732_19753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19731 === (1))){
var inst_19710 = init;
var state_19730__$1 = (function (){var statearr_19733 = state_19730;
(statearr_19733[(7)] = inst_19710);

return statearr_19733;
})();
var statearr_19734_19754 = state_19730__$1;
(statearr_19734_19754[(2)] = null);

(statearr_19734_19754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19731 === (4))){
var inst_19713 = (state_19730[(8)]);
var inst_19713__$1 = (state_19730[(2)]);
var inst_19714 = (inst_19713__$1 == null);
var state_19730__$1 = (function (){var statearr_19735 = state_19730;
(statearr_19735[(8)] = inst_19713__$1);

return statearr_19735;
})();
if(cljs.core.truth_(inst_19714)){
var statearr_19736_19755 = state_19730__$1;
(statearr_19736_19755[(1)] = (5));

} else {
var statearr_19737_19756 = state_19730__$1;
(statearr_19737_19756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19731 === (6))){
var inst_19713 = (state_19730[(8)]);
var inst_19717 = (state_19730[(9)]);
var inst_19710 = (state_19730[(7)]);
var inst_19717__$1 = f.call(null,inst_19710,inst_19713);
var inst_19718 = cljs.core.reduced_QMARK_.call(null,inst_19717__$1);
var state_19730__$1 = (function (){var statearr_19738 = state_19730;
(statearr_19738[(9)] = inst_19717__$1);

return statearr_19738;
})();
if(inst_19718){
var statearr_19739_19757 = state_19730__$1;
(statearr_19739_19757[(1)] = (8));

} else {
var statearr_19740_19758 = state_19730__$1;
(statearr_19740_19758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19731 === (3))){
var inst_19728 = (state_19730[(2)]);
var state_19730__$1 = state_19730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19730__$1,inst_19728);
} else {
if((state_val_19731 === (2))){
var state_19730__$1 = state_19730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19730__$1,(4),ch);
} else {
if((state_val_19731 === (9))){
var inst_19717 = (state_19730[(9)]);
var inst_19710 = inst_19717;
var state_19730__$1 = (function (){var statearr_19741 = state_19730;
(statearr_19741[(7)] = inst_19710);

return statearr_19741;
})();
var statearr_19742_19759 = state_19730__$1;
(statearr_19742_19759[(2)] = null);

(statearr_19742_19759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19731 === (5))){
var inst_19710 = (state_19730[(7)]);
var state_19730__$1 = state_19730;
var statearr_19743_19760 = state_19730__$1;
(statearr_19743_19760[(2)] = inst_19710);

(statearr_19743_19760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19731 === (10))){
var inst_19724 = (state_19730[(2)]);
var state_19730__$1 = state_19730;
var statearr_19744_19761 = state_19730__$1;
(statearr_19744_19761[(2)] = inst_19724);

(statearr_19744_19761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19731 === (8))){
var inst_19717 = (state_19730[(9)]);
var inst_19720 = cljs.core.deref.call(null,inst_19717);
var state_19730__$1 = state_19730;
var statearr_19745_19762 = state_19730__$1;
(statearr_19745_19762[(2)] = inst_19720);

(statearr_19745_19762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18861__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18861__auto____0 = (function (){
var statearr_19749 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19749[(0)] = cljs$core$async$reduce_$_state_machine__18861__auto__);

(statearr_19749[(1)] = (1));

return statearr_19749;
});
var cljs$core$async$reduce_$_state_machine__18861__auto____1 = (function (state_19730){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_19730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e19750){if((e19750 instanceof Object)){
var ex__18864__auto__ = e19750;
var statearr_19751_19763 = state_19730;
(statearr_19751_19763[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19764 = state_19730;
state_19730 = G__19764;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18861__auto__ = function(state_19730){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18861__auto____1.call(this,state_19730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18861__auto____0;
cljs$core$async$reduce_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18861__auto____1;
return cljs$core$async$reduce_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_19752 = f__18973__auto__.call(null);
(statearr_19752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_19752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19765 = [];
var len__17863__auto___19817 = arguments.length;
var i__17864__auto___19818 = (0);
while(true){
if((i__17864__auto___19818 < len__17863__auto___19817)){
args19765.push((arguments[i__17864__auto___19818]));

var G__19819 = (i__17864__auto___19818 + (1));
i__17864__auto___19818 = G__19819;
continue;
} else {
}
break;
}

var G__19767 = args19765.length;
switch (G__19767) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19765.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_19792){
var state_val_19793 = (state_19792[(1)]);
if((state_val_19793 === (7))){
var inst_19774 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
var statearr_19794_19821 = state_19792__$1;
(statearr_19794_19821[(2)] = inst_19774);

(statearr_19794_19821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (1))){
var inst_19768 = cljs.core.seq.call(null,coll);
var inst_19769 = inst_19768;
var state_19792__$1 = (function (){var statearr_19795 = state_19792;
(statearr_19795[(7)] = inst_19769);

return statearr_19795;
})();
var statearr_19796_19822 = state_19792__$1;
(statearr_19796_19822[(2)] = null);

(statearr_19796_19822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (4))){
var inst_19769 = (state_19792[(7)]);
var inst_19772 = cljs.core.first.call(null,inst_19769);
var state_19792__$1 = state_19792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19792__$1,(7),ch,inst_19772);
} else {
if((state_val_19793 === (13))){
var inst_19786 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
var statearr_19797_19823 = state_19792__$1;
(statearr_19797_19823[(2)] = inst_19786);

(statearr_19797_19823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (6))){
var inst_19777 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
if(cljs.core.truth_(inst_19777)){
var statearr_19798_19824 = state_19792__$1;
(statearr_19798_19824[(1)] = (8));

} else {
var statearr_19799_19825 = state_19792__$1;
(statearr_19799_19825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (3))){
var inst_19790 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19792__$1,inst_19790);
} else {
if((state_val_19793 === (12))){
var state_19792__$1 = state_19792;
var statearr_19800_19826 = state_19792__$1;
(statearr_19800_19826[(2)] = null);

(statearr_19800_19826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (2))){
var inst_19769 = (state_19792[(7)]);
var state_19792__$1 = state_19792;
if(cljs.core.truth_(inst_19769)){
var statearr_19801_19827 = state_19792__$1;
(statearr_19801_19827[(1)] = (4));

} else {
var statearr_19802_19828 = state_19792__$1;
(statearr_19802_19828[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (11))){
var inst_19783 = cljs.core.async.close_BANG_.call(null,ch);
var state_19792__$1 = state_19792;
var statearr_19803_19829 = state_19792__$1;
(statearr_19803_19829[(2)] = inst_19783);

(statearr_19803_19829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (9))){
var state_19792__$1 = state_19792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19804_19830 = state_19792__$1;
(statearr_19804_19830[(1)] = (11));

} else {
var statearr_19805_19831 = state_19792__$1;
(statearr_19805_19831[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (5))){
var inst_19769 = (state_19792[(7)]);
var state_19792__$1 = state_19792;
var statearr_19806_19832 = state_19792__$1;
(statearr_19806_19832[(2)] = inst_19769);

(statearr_19806_19832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (10))){
var inst_19788 = (state_19792[(2)]);
var state_19792__$1 = state_19792;
var statearr_19807_19833 = state_19792__$1;
(statearr_19807_19833[(2)] = inst_19788);

(statearr_19807_19833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19793 === (8))){
var inst_19769 = (state_19792[(7)]);
var inst_19779 = cljs.core.next.call(null,inst_19769);
var inst_19769__$1 = inst_19779;
var state_19792__$1 = (function (){var statearr_19808 = state_19792;
(statearr_19808[(7)] = inst_19769__$1);

return statearr_19808;
})();
var statearr_19809_19834 = state_19792__$1;
(statearr_19809_19834[(2)] = null);

(statearr_19809_19834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var cljs$core$async$state_machine__18861__auto__ = null;
var cljs$core$async$state_machine__18861__auto____0 = (function (){
var statearr_19813 = [null,null,null,null,null,null,null,null];
(statearr_19813[(0)] = cljs$core$async$state_machine__18861__auto__);

(statearr_19813[(1)] = (1));

return statearr_19813;
});
var cljs$core$async$state_machine__18861__auto____1 = (function (state_19792){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_19792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e19814){if((e19814 instanceof Object)){
var ex__18864__auto__ = e19814;
var statearr_19815_19835 = state_19792;
(statearr_19815_19835[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19836 = state_19792;
state_19792 = G__19836;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$state_machine__18861__auto__ = function(state_19792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18861__auto____1.call(this,state_19792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18861__auto____0;
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18861__auto____1;
return cljs$core$async$state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_19816 = f__18973__auto__.call(null);
(statearr_19816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_19816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_);
} else {
var m__17461__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20058 = (function (mult,ch,cs,meta20059){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20059 = meta20059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20060,meta20059__$1){
var self__ = this;
var _20060__$1 = this;
return (new cljs.core.async.t_cljs$core$async20058(self__.mult,self__.ch,self__.cs,meta20059__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20060){
var self__ = this;
var _20060__$1 = this;
return self__.meta20059;
});})(cs))
;

cljs.core.async.t_cljs$core$async20058.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20058.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20058.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20058.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20058.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20058.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20059","meta20059",2005899120,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20058";

cljs.core.async.t_cljs$core$async20058.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20058");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20058 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20058(mult__$1,ch__$1,cs__$1,meta20059){
return (new cljs.core.async.t_cljs$core$async20058(mult__$1,ch__$1,cs__$1,meta20059));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20058(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18972__auto___20279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___20279,cs,m,dchan,dctr,done){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___20279,cs,m,dchan,dctr,done){
return (function (state_20191){
var state_val_20192 = (state_20191[(1)]);
if((state_val_20192 === (7))){
var inst_20187 = (state_20191[(2)]);
var state_20191__$1 = state_20191;
var statearr_20193_20280 = state_20191__$1;
(statearr_20193_20280[(2)] = inst_20187);

(statearr_20193_20280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (20))){
var inst_20092 = (state_20191[(7)]);
var inst_20102 = cljs.core.first.call(null,inst_20092);
var inst_20103 = cljs.core.nth.call(null,inst_20102,(0),null);
var inst_20104 = cljs.core.nth.call(null,inst_20102,(1),null);
var state_20191__$1 = (function (){var statearr_20194 = state_20191;
(statearr_20194[(8)] = inst_20103);

return statearr_20194;
})();
if(cljs.core.truth_(inst_20104)){
var statearr_20195_20281 = state_20191__$1;
(statearr_20195_20281[(1)] = (22));

} else {
var statearr_20196_20282 = state_20191__$1;
(statearr_20196_20282[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (27))){
var inst_20134 = (state_20191[(9)]);
var inst_20063 = (state_20191[(10)]);
var inst_20132 = (state_20191[(11)]);
var inst_20139 = (state_20191[(12)]);
var inst_20139__$1 = cljs.core._nth.call(null,inst_20132,inst_20134);
var inst_20140 = cljs.core.async.put_BANG_.call(null,inst_20139__$1,inst_20063,done);
var state_20191__$1 = (function (){var statearr_20197 = state_20191;
(statearr_20197[(12)] = inst_20139__$1);

return statearr_20197;
})();
if(cljs.core.truth_(inst_20140)){
var statearr_20198_20283 = state_20191__$1;
(statearr_20198_20283[(1)] = (30));

} else {
var statearr_20199_20284 = state_20191__$1;
(statearr_20199_20284[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (1))){
var state_20191__$1 = state_20191;
var statearr_20200_20285 = state_20191__$1;
(statearr_20200_20285[(2)] = null);

(statearr_20200_20285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (24))){
var inst_20092 = (state_20191[(7)]);
var inst_20109 = (state_20191[(2)]);
var inst_20110 = cljs.core.next.call(null,inst_20092);
var inst_20072 = inst_20110;
var inst_20073 = null;
var inst_20074 = (0);
var inst_20075 = (0);
var state_20191__$1 = (function (){var statearr_20201 = state_20191;
(statearr_20201[(13)] = inst_20072);

(statearr_20201[(14)] = inst_20073);

(statearr_20201[(15)] = inst_20074);

(statearr_20201[(16)] = inst_20109);

(statearr_20201[(17)] = inst_20075);

return statearr_20201;
})();
var statearr_20202_20286 = state_20191__$1;
(statearr_20202_20286[(2)] = null);

(statearr_20202_20286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (39))){
var state_20191__$1 = state_20191;
var statearr_20206_20287 = state_20191__$1;
(statearr_20206_20287[(2)] = null);

(statearr_20206_20287[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (4))){
var inst_20063 = (state_20191[(10)]);
var inst_20063__$1 = (state_20191[(2)]);
var inst_20064 = (inst_20063__$1 == null);
var state_20191__$1 = (function (){var statearr_20207 = state_20191;
(statearr_20207[(10)] = inst_20063__$1);

return statearr_20207;
})();
if(cljs.core.truth_(inst_20064)){
var statearr_20208_20288 = state_20191__$1;
(statearr_20208_20288[(1)] = (5));

} else {
var statearr_20209_20289 = state_20191__$1;
(statearr_20209_20289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (15))){
var inst_20072 = (state_20191[(13)]);
var inst_20073 = (state_20191[(14)]);
var inst_20074 = (state_20191[(15)]);
var inst_20075 = (state_20191[(17)]);
var inst_20088 = (state_20191[(2)]);
var inst_20089 = (inst_20075 + (1));
var tmp20203 = inst_20072;
var tmp20204 = inst_20073;
var tmp20205 = inst_20074;
var inst_20072__$1 = tmp20203;
var inst_20073__$1 = tmp20204;
var inst_20074__$1 = tmp20205;
var inst_20075__$1 = inst_20089;
var state_20191__$1 = (function (){var statearr_20210 = state_20191;
(statearr_20210[(13)] = inst_20072__$1);

(statearr_20210[(14)] = inst_20073__$1);

(statearr_20210[(18)] = inst_20088);

(statearr_20210[(15)] = inst_20074__$1);

(statearr_20210[(17)] = inst_20075__$1);

return statearr_20210;
})();
var statearr_20211_20290 = state_20191__$1;
(statearr_20211_20290[(2)] = null);

(statearr_20211_20290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (21))){
var inst_20113 = (state_20191[(2)]);
var state_20191__$1 = state_20191;
var statearr_20215_20291 = state_20191__$1;
(statearr_20215_20291[(2)] = inst_20113);

(statearr_20215_20291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (31))){
var inst_20139 = (state_20191[(12)]);
var inst_20143 = done.call(null,null);
var inst_20144 = cljs.core.async.untap_STAR_.call(null,m,inst_20139);
var state_20191__$1 = (function (){var statearr_20216 = state_20191;
(statearr_20216[(19)] = inst_20143);

return statearr_20216;
})();
var statearr_20217_20292 = state_20191__$1;
(statearr_20217_20292[(2)] = inst_20144);

(statearr_20217_20292[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (32))){
var inst_20134 = (state_20191[(9)]);
var inst_20133 = (state_20191[(20)]);
var inst_20132 = (state_20191[(11)]);
var inst_20131 = (state_20191[(21)]);
var inst_20146 = (state_20191[(2)]);
var inst_20147 = (inst_20134 + (1));
var tmp20212 = inst_20133;
var tmp20213 = inst_20132;
var tmp20214 = inst_20131;
var inst_20131__$1 = tmp20214;
var inst_20132__$1 = tmp20213;
var inst_20133__$1 = tmp20212;
var inst_20134__$1 = inst_20147;
var state_20191__$1 = (function (){var statearr_20218 = state_20191;
(statearr_20218[(22)] = inst_20146);

(statearr_20218[(9)] = inst_20134__$1);

(statearr_20218[(20)] = inst_20133__$1);

(statearr_20218[(11)] = inst_20132__$1);

(statearr_20218[(21)] = inst_20131__$1);

return statearr_20218;
})();
var statearr_20219_20293 = state_20191__$1;
(statearr_20219_20293[(2)] = null);

(statearr_20219_20293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (40))){
var inst_20159 = (state_20191[(23)]);
var inst_20163 = done.call(null,null);
var inst_20164 = cljs.core.async.untap_STAR_.call(null,m,inst_20159);
var state_20191__$1 = (function (){var statearr_20220 = state_20191;
(statearr_20220[(24)] = inst_20163);

return statearr_20220;
})();
var statearr_20221_20294 = state_20191__$1;
(statearr_20221_20294[(2)] = inst_20164);

(statearr_20221_20294[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (33))){
var inst_20150 = (state_20191[(25)]);
var inst_20152 = cljs.core.chunked_seq_QMARK_.call(null,inst_20150);
var state_20191__$1 = state_20191;
if(inst_20152){
var statearr_20222_20295 = state_20191__$1;
(statearr_20222_20295[(1)] = (36));

} else {
var statearr_20223_20296 = state_20191__$1;
(statearr_20223_20296[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (13))){
var inst_20082 = (state_20191[(26)]);
var inst_20085 = cljs.core.async.close_BANG_.call(null,inst_20082);
var state_20191__$1 = state_20191;
var statearr_20224_20297 = state_20191__$1;
(statearr_20224_20297[(2)] = inst_20085);

(statearr_20224_20297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (22))){
var inst_20103 = (state_20191[(8)]);
var inst_20106 = cljs.core.async.close_BANG_.call(null,inst_20103);
var state_20191__$1 = state_20191;
var statearr_20225_20298 = state_20191__$1;
(statearr_20225_20298[(2)] = inst_20106);

(statearr_20225_20298[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (36))){
var inst_20150 = (state_20191[(25)]);
var inst_20154 = cljs.core.chunk_first.call(null,inst_20150);
var inst_20155 = cljs.core.chunk_rest.call(null,inst_20150);
var inst_20156 = cljs.core.count.call(null,inst_20154);
var inst_20131 = inst_20155;
var inst_20132 = inst_20154;
var inst_20133 = inst_20156;
var inst_20134 = (0);
var state_20191__$1 = (function (){var statearr_20226 = state_20191;
(statearr_20226[(9)] = inst_20134);

(statearr_20226[(20)] = inst_20133);

(statearr_20226[(11)] = inst_20132);

(statearr_20226[(21)] = inst_20131);

return statearr_20226;
})();
var statearr_20227_20299 = state_20191__$1;
(statearr_20227_20299[(2)] = null);

(statearr_20227_20299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (41))){
var inst_20150 = (state_20191[(25)]);
var inst_20166 = (state_20191[(2)]);
var inst_20167 = cljs.core.next.call(null,inst_20150);
var inst_20131 = inst_20167;
var inst_20132 = null;
var inst_20133 = (0);
var inst_20134 = (0);
var state_20191__$1 = (function (){var statearr_20228 = state_20191;
(statearr_20228[(9)] = inst_20134);

(statearr_20228[(20)] = inst_20133);

(statearr_20228[(11)] = inst_20132);

(statearr_20228[(21)] = inst_20131);

(statearr_20228[(27)] = inst_20166);

return statearr_20228;
})();
var statearr_20229_20300 = state_20191__$1;
(statearr_20229_20300[(2)] = null);

(statearr_20229_20300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (43))){
var state_20191__$1 = state_20191;
var statearr_20230_20301 = state_20191__$1;
(statearr_20230_20301[(2)] = null);

(statearr_20230_20301[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (29))){
var inst_20175 = (state_20191[(2)]);
var state_20191__$1 = state_20191;
var statearr_20231_20302 = state_20191__$1;
(statearr_20231_20302[(2)] = inst_20175);

(statearr_20231_20302[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (44))){
var inst_20184 = (state_20191[(2)]);
var state_20191__$1 = (function (){var statearr_20232 = state_20191;
(statearr_20232[(28)] = inst_20184);

return statearr_20232;
})();
var statearr_20233_20303 = state_20191__$1;
(statearr_20233_20303[(2)] = null);

(statearr_20233_20303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (6))){
var inst_20123 = (state_20191[(29)]);
var inst_20122 = cljs.core.deref.call(null,cs);
var inst_20123__$1 = cljs.core.keys.call(null,inst_20122);
var inst_20124 = cljs.core.count.call(null,inst_20123__$1);
var inst_20125 = cljs.core.reset_BANG_.call(null,dctr,inst_20124);
var inst_20130 = cljs.core.seq.call(null,inst_20123__$1);
var inst_20131 = inst_20130;
var inst_20132 = null;
var inst_20133 = (0);
var inst_20134 = (0);
var state_20191__$1 = (function (){var statearr_20234 = state_20191;
(statearr_20234[(9)] = inst_20134);

(statearr_20234[(20)] = inst_20133);

(statearr_20234[(11)] = inst_20132);

(statearr_20234[(30)] = inst_20125);

(statearr_20234[(21)] = inst_20131);

(statearr_20234[(29)] = inst_20123__$1);

return statearr_20234;
})();
var statearr_20235_20304 = state_20191__$1;
(statearr_20235_20304[(2)] = null);

(statearr_20235_20304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (28))){
var inst_20131 = (state_20191[(21)]);
var inst_20150 = (state_20191[(25)]);
var inst_20150__$1 = cljs.core.seq.call(null,inst_20131);
var state_20191__$1 = (function (){var statearr_20236 = state_20191;
(statearr_20236[(25)] = inst_20150__$1);

return statearr_20236;
})();
if(inst_20150__$1){
var statearr_20237_20305 = state_20191__$1;
(statearr_20237_20305[(1)] = (33));

} else {
var statearr_20238_20306 = state_20191__$1;
(statearr_20238_20306[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (25))){
var inst_20134 = (state_20191[(9)]);
var inst_20133 = (state_20191[(20)]);
var inst_20136 = (inst_20134 < inst_20133);
var inst_20137 = inst_20136;
var state_20191__$1 = state_20191;
if(cljs.core.truth_(inst_20137)){
var statearr_20239_20307 = state_20191__$1;
(statearr_20239_20307[(1)] = (27));

} else {
var statearr_20240_20308 = state_20191__$1;
(statearr_20240_20308[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (34))){
var state_20191__$1 = state_20191;
var statearr_20241_20309 = state_20191__$1;
(statearr_20241_20309[(2)] = null);

(statearr_20241_20309[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (17))){
var state_20191__$1 = state_20191;
var statearr_20242_20310 = state_20191__$1;
(statearr_20242_20310[(2)] = null);

(statearr_20242_20310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (3))){
var inst_20189 = (state_20191[(2)]);
var state_20191__$1 = state_20191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20191__$1,inst_20189);
} else {
if((state_val_20192 === (12))){
var inst_20118 = (state_20191[(2)]);
var state_20191__$1 = state_20191;
var statearr_20243_20311 = state_20191__$1;
(statearr_20243_20311[(2)] = inst_20118);

(statearr_20243_20311[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (2))){
var state_20191__$1 = state_20191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20191__$1,(4),ch);
} else {
if((state_val_20192 === (23))){
var state_20191__$1 = state_20191;
var statearr_20244_20312 = state_20191__$1;
(statearr_20244_20312[(2)] = null);

(statearr_20244_20312[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (35))){
var inst_20173 = (state_20191[(2)]);
var state_20191__$1 = state_20191;
var statearr_20245_20313 = state_20191__$1;
(statearr_20245_20313[(2)] = inst_20173);

(statearr_20245_20313[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (19))){
var inst_20092 = (state_20191[(7)]);
var inst_20096 = cljs.core.chunk_first.call(null,inst_20092);
var inst_20097 = cljs.core.chunk_rest.call(null,inst_20092);
var inst_20098 = cljs.core.count.call(null,inst_20096);
var inst_20072 = inst_20097;
var inst_20073 = inst_20096;
var inst_20074 = inst_20098;
var inst_20075 = (0);
var state_20191__$1 = (function (){var statearr_20246 = state_20191;
(statearr_20246[(13)] = inst_20072);

(statearr_20246[(14)] = inst_20073);

(statearr_20246[(15)] = inst_20074);

(statearr_20246[(17)] = inst_20075);

return statearr_20246;
})();
var statearr_20247_20314 = state_20191__$1;
(statearr_20247_20314[(2)] = null);

(statearr_20247_20314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (11))){
var inst_20092 = (state_20191[(7)]);
var inst_20072 = (state_20191[(13)]);
var inst_20092__$1 = cljs.core.seq.call(null,inst_20072);
var state_20191__$1 = (function (){var statearr_20248 = state_20191;
(statearr_20248[(7)] = inst_20092__$1);

return statearr_20248;
})();
if(inst_20092__$1){
var statearr_20249_20315 = state_20191__$1;
(statearr_20249_20315[(1)] = (16));

} else {
var statearr_20250_20316 = state_20191__$1;
(statearr_20250_20316[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (9))){
var inst_20120 = (state_20191[(2)]);
var state_20191__$1 = state_20191;
var statearr_20251_20317 = state_20191__$1;
(statearr_20251_20317[(2)] = inst_20120);

(statearr_20251_20317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (5))){
var inst_20070 = cljs.core.deref.call(null,cs);
var inst_20071 = cljs.core.seq.call(null,inst_20070);
var inst_20072 = inst_20071;
var inst_20073 = null;
var inst_20074 = (0);
var inst_20075 = (0);
var state_20191__$1 = (function (){var statearr_20252 = state_20191;
(statearr_20252[(13)] = inst_20072);

(statearr_20252[(14)] = inst_20073);

(statearr_20252[(15)] = inst_20074);

(statearr_20252[(17)] = inst_20075);

return statearr_20252;
})();
var statearr_20253_20318 = state_20191__$1;
(statearr_20253_20318[(2)] = null);

(statearr_20253_20318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (14))){
var state_20191__$1 = state_20191;
var statearr_20254_20319 = state_20191__$1;
(statearr_20254_20319[(2)] = null);

(statearr_20254_20319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (45))){
var inst_20181 = (state_20191[(2)]);
var state_20191__$1 = state_20191;
var statearr_20255_20320 = state_20191__$1;
(statearr_20255_20320[(2)] = inst_20181);

(statearr_20255_20320[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (26))){
var inst_20123 = (state_20191[(29)]);
var inst_20177 = (state_20191[(2)]);
var inst_20178 = cljs.core.seq.call(null,inst_20123);
var state_20191__$1 = (function (){var statearr_20256 = state_20191;
(statearr_20256[(31)] = inst_20177);

return statearr_20256;
})();
if(inst_20178){
var statearr_20257_20321 = state_20191__$1;
(statearr_20257_20321[(1)] = (42));

} else {
var statearr_20258_20322 = state_20191__$1;
(statearr_20258_20322[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (16))){
var inst_20092 = (state_20191[(7)]);
var inst_20094 = cljs.core.chunked_seq_QMARK_.call(null,inst_20092);
var state_20191__$1 = state_20191;
if(inst_20094){
var statearr_20259_20323 = state_20191__$1;
(statearr_20259_20323[(1)] = (19));

} else {
var statearr_20260_20324 = state_20191__$1;
(statearr_20260_20324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (38))){
var inst_20170 = (state_20191[(2)]);
var state_20191__$1 = state_20191;
var statearr_20261_20325 = state_20191__$1;
(statearr_20261_20325[(2)] = inst_20170);

(statearr_20261_20325[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (30))){
var state_20191__$1 = state_20191;
var statearr_20262_20326 = state_20191__$1;
(statearr_20262_20326[(2)] = null);

(statearr_20262_20326[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (10))){
var inst_20073 = (state_20191[(14)]);
var inst_20075 = (state_20191[(17)]);
var inst_20081 = cljs.core._nth.call(null,inst_20073,inst_20075);
var inst_20082 = cljs.core.nth.call(null,inst_20081,(0),null);
var inst_20083 = cljs.core.nth.call(null,inst_20081,(1),null);
var state_20191__$1 = (function (){var statearr_20263 = state_20191;
(statearr_20263[(26)] = inst_20082);

return statearr_20263;
})();
if(cljs.core.truth_(inst_20083)){
var statearr_20264_20327 = state_20191__$1;
(statearr_20264_20327[(1)] = (13));

} else {
var statearr_20265_20328 = state_20191__$1;
(statearr_20265_20328[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (18))){
var inst_20116 = (state_20191[(2)]);
var state_20191__$1 = state_20191;
var statearr_20266_20329 = state_20191__$1;
(statearr_20266_20329[(2)] = inst_20116);

(statearr_20266_20329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (42))){
var state_20191__$1 = state_20191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20191__$1,(45),dchan);
} else {
if((state_val_20192 === (37))){
var inst_20063 = (state_20191[(10)]);
var inst_20159 = (state_20191[(23)]);
var inst_20150 = (state_20191[(25)]);
var inst_20159__$1 = cljs.core.first.call(null,inst_20150);
var inst_20160 = cljs.core.async.put_BANG_.call(null,inst_20159__$1,inst_20063,done);
var state_20191__$1 = (function (){var statearr_20267 = state_20191;
(statearr_20267[(23)] = inst_20159__$1);

return statearr_20267;
})();
if(cljs.core.truth_(inst_20160)){
var statearr_20268_20330 = state_20191__$1;
(statearr_20268_20330[(1)] = (39));

} else {
var statearr_20269_20331 = state_20191__$1;
(statearr_20269_20331[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20192 === (8))){
var inst_20074 = (state_20191[(15)]);
var inst_20075 = (state_20191[(17)]);
var inst_20077 = (inst_20075 < inst_20074);
var inst_20078 = inst_20077;
var state_20191__$1 = state_20191;
if(cljs.core.truth_(inst_20078)){
var statearr_20270_20332 = state_20191__$1;
(statearr_20270_20332[(1)] = (10));

} else {
var statearr_20271_20333 = state_20191__$1;
(statearr_20271_20333[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___20279,cs,m,dchan,dctr,done))
;
return ((function (switch__18860__auto__,c__18972__auto___20279,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18861__auto__ = null;
var cljs$core$async$mult_$_state_machine__18861__auto____0 = (function (){
var statearr_20275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20275[(0)] = cljs$core$async$mult_$_state_machine__18861__auto__);

(statearr_20275[(1)] = (1));

return statearr_20275;
});
var cljs$core$async$mult_$_state_machine__18861__auto____1 = (function (state_20191){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_20191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e20276){if((e20276 instanceof Object)){
var ex__18864__auto__ = e20276;
var statearr_20277_20334 = state_20191;
(statearr_20277_20334[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20335 = state_20191;
state_20191 = G__20335;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18861__auto__ = function(state_20191){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18861__auto____1.call(this,state_20191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18861__auto____0;
cljs$core$async$mult_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18861__auto____1;
return cljs$core$async$mult_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___20279,cs,m,dchan,dctr,done))
})();
var state__18974__auto__ = (function (){var statearr_20278 = f__18973__auto__.call(null);
(statearr_20278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___20279);

return statearr_20278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___20279,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20336 = [];
var len__17863__auto___20339 = arguments.length;
var i__17864__auto___20340 = (0);
while(true){
if((i__17864__auto___20340 < len__17863__auto___20339)){
args20336.push((arguments[i__17864__auto___20340]));

var G__20341 = (i__17864__auto___20340 + (1));
i__17864__auto___20340 = G__20341;
continue;
} else {
}
break;
}

var G__20338 = args20336.length;
switch (G__20338) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20336.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,state_map);
} else {
var m__17461__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,mode);
} else {
var m__17461__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20353 = arguments.length;
var i__17864__auto___20354 = (0);
while(true){
if((i__17864__auto___20354 < len__17863__auto___20353)){
args__17870__auto__.push((arguments[i__17864__auto___20354]));

var G__20355 = (i__17864__auto___20354 + (1));
i__17864__auto___20354 = G__20355;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((3) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17871__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20347){
var map__20348 = p__20347;
var map__20348__$1 = ((((!((map__20348 == null)))?((((map__20348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20348):map__20348);
var opts = map__20348__$1;
var statearr_20350_20356 = state;
(statearr_20350_20356[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20348,map__20348__$1,opts){
return (function (val){
var statearr_20351_20357 = state;
(statearr_20351_20357[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20348,map__20348__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20352_20358 = state;
(statearr_20352_20358[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20343){
var G__20344 = cljs.core.first.call(null,seq20343);
var seq20343__$1 = cljs.core.next.call(null,seq20343);
var G__20345 = cljs.core.first.call(null,seq20343__$1);
var seq20343__$2 = cljs.core.next.call(null,seq20343__$1);
var G__20346 = cljs.core.first.call(null,seq20343__$2);
var seq20343__$3 = cljs.core.next.call(null,seq20343__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20344,G__20345,G__20346,seq20343__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20522 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20523){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20523 = meta20523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20524,meta20523__$1){
var self__ = this;
var _20524__$1 = this;
return (new cljs.core.async.t_cljs$core$async20522(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20523__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20524){
var self__ = this;
var _20524__$1 = this;
return self__.meta20523;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20522.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20522.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20522.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20522.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20522.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20522.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20522.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20522.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20522.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20523","meta20523",313046207,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20522";

cljs.core.async.t_cljs$core$async20522.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20522");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20522 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20522(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20523){
return (new cljs.core.async.t_cljs$core$async20522(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20523));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20522(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18972__auto___20685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___20685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___20685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20622){
var state_val_20623 = (state_20622[(1)]);
if((state_val_20623 === (7))){
var inst_20540 = (state_20622[(2)]);
var state_20622__$1 = state_20622;
var statearr_20624_20686 = state_20622__$1;
(statearr_20624_20686[(2)] = inst_20540);

(statearr_20624_20686[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (20))){
var inst_20552 = (state_20622[(7)]);
var state_20622__$1 = state_20622;
var statearr_20625_20687 = state_20622__$1;
(statearr_20625_20687[(2)] = inst_20552);

(statearr_20625_20687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (27))){
var state_20622__$1 = state_20622;
var statearr_20626_20688 = state_20622__$1;
(statearr_20626_20688[(2)] = null);

(statearr_20626_20688[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (1))){
var inst_20528 = (state_20622[(8)]);
var inst_20528__$1 = calc_state.call(null);
var inst_20530 = (inst_20528__$1 == null);
var inst_20531 = cljs.core.not.call(null,inst_20530);
var state_20622__$1 = (function (){var statearr_20627 = state_20622;
(statearr_20627[(8)] = inst_20528__$1);

return statearr_20627;
})();
if(inst_20531){
var statearr_20628_20689 = state_20622__$1;
(statearr_20628_20689[(1)] = (2));

} else {
var statearr_20629_20690 = state_20622__$1;
(statearr_20629_20690[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (24))){
var inst_20582 = (state_20622[(9)]);
var inst_20596 = (state_20622[(10)]);
var inst_20575 = (state_20622[(11)]);
var inst_20596__$1 = inst_20575.call(null,inst_20582);
var state_20622__$1 = (function (){var statearr_20630 = state_20622;
(statearr_20630[(10)] = inst_20596__$1);

return statearr_20630;
})();
if(cljs.core.truth_(inst_20596__$1)){
var statearr_20631_20691 = state_20622__$1;
(statearr_20631_20691[(1)] = (29));

} else {
var statearr_20632_20692 = state_20622__$1;
(statearr_20632_20692[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (4))){
var inst_20543 = (state_20622[(2)]);
var state_20622__$1 = state_20622;
if(cljs.core.truth_(inst_20543)){
var statearr_20633_20693 = state_20622__$1;
(statearr_20633_20693[(1)] = (8));

} else {
var statearr_20634_20694 = state_20622__$1;
(statearr_20634_20694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (15))){
var inst_20569 = (state_20622[(2)]);
var state_20622__$1 = state_20622;
if(cljs.core.truth_(inst_20569)){
var statearr_20635_20695 = state_20622__$1;
(statearr_20635_20695[(1)] = (19));

} else {
var statearr_20636_20696 = state_20622__$1;
(statearr_20636_20696[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (21))){
var inst_20574 = (state_20622[(12)]);
var inst_20574__$1 = (state_20622[(2)]);
var inst_20575 = cljs.core.get.call(null,inst_20574__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20576 = cljs.core.get.call(null,inst_20574__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20577 = cljs.core.get.call(null,inst_20574__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20622__$1 = (function (){var statearr_20637 = state_20622;
(statearr_20637[(12)] = inst_20574__$1);

(statearr_20637[(11)] = inst_20575);

(statearr_20637[(13)] = inst_20576);

return statearr_20637;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20622__$1,(22),inst_20577);
} else {
if((state_val_20623 === (31))){
var inst_20604 = (state_20622[(2)]);
var state_20622__$1 = state_20622;
if(cljs.core.truth_(inst_20604)){
var statearr_20638_20697 = state_20622__$1;
(statearr_20638_20697[(1)] = (32));

} else {
var statearr_20639_20698 = state_20622__$1;
(statearr_20639_20698[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (32))){
var inst_20581 = (state_20622[(14)]);
var state_20622__$1 = state_20622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20622__$1,(35),out,inst_20581);
} else {
if((state_val_20623 === (33))){
var inst_20574 = (state_20622[(12)]);
var inst_20552 = inst_20574;
var state_20622__$1 = (function (){var statearr_20640 = state_20622;
(statearr_20640[(7)] = inst_20552);

return statearr_20640;
})();
var statearr_20641_20699 = state_20622__$1;
(statearr_20641_20699[(2)] = null);

(statearr_20641_20699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (13))){
var inst_20552 = (state_20622[(7)]);
var inst_20559 = inst_20552.cljs$lang$protocol_mask$partition0$;
var inst_20560 = (inst_20559 & (64));
var inst_20561 = inst_20552.cljs$core$ISeq$;
var inst_20562 = (inst_20560) || (inst_20561);
var state_20622__$1 = state_20622;
if(cljs.core.truth_(inst_20562)){
var statearr_20642_20700 = state_20622__$1;
(statearr_20642_20700[(1)] = (16));

} else {
var statearr_20643_20701 = state_20622__$1;
(statearr_20643_20701[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (22))){
var inst_20582 = (state_20622[(9)]);
var inst_20581 = (state_20622[(14)]);
var inst_20580 = (state_20622[(2)]);
var inst_20581__$1 = cljs.core.nth.call(null,inst_20580,(0),null);
var inst_20582__$1 = cljs.core.nth.call(null,inst_20580,(1),null);
var inst_20583 = (inst_20581__$1 == null);
var inst_20584 = cljs.core._EQ_.call(null,inst_20582__$1,change);
var inst_20585 = (inst_20583) || (inst_20584);
var state_20622__$1 = (function (){var statearr_20644 = state_20622;
(statearr_20644[(9)] = inst_20582__$1);

(statearr_20644[(14)] = inst_20581__$1);

return statearr_20644;
})();
if(cljs.core.truth_(inst_20585)){
var statearr_20645_20702 = state_20622__$1;
(statearr_20645_20702[(1)] = (23));

} else {
var statearr_20646_20703 = state_20622__$1;
(statearr_20646_20703[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (36))){
var inst_20574 = (state_20622[(12)]);
var inst_20552 = inst_20574;
var state_20622__$1 = (function (){var statearr_20647 = state_20622;
(statearr_20647[(7)] = inst_20552);

return statearr_20647;
})();
var statearr_20648_20704 = state_20622__$1;
(statearr_20648_20704[(2)] = null);

(statearr_20648_20704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (29))){
var inst_20596 = (state_20622[(10)]);
var state_20622__$1 = state_20622;
var statearr_20649_20705 = state_20622__$1;
(statearr_20649_20705[(2)] = inst_20596);

(statearr_20649_20705[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (6))){
var state_20622__$1 = state_20622;
var statearr_20650_20706 = state_20622__$1;
(statearr_20650_20706[(2)] = false);

(statearr_20650_20706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (28))){
var inst_20592 = (state_20622[(2)]);
var inst_20593 = calc_state.call(null);
var inst_20552 = inst_20593;
var state_20622__$1 = (function (){var statearr_20651 = state_20622;
(statearr_20651[(15)] = inst_20592);

(statearr_20651[(7)] = inst_20552);

return statearr_20651;
})();
var statearr_20652_20707 = state_20622__$1;
(statearr_20652_20707[(2)] = null);

(statearr_20652_20707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (25))){
var inst_20618 = (state_20622[(2)]);
var state_20622__$1 = state_20622;
var statearr_20653_20708 = state_20622__$1;
(statearr_20653_20708[(2)] = inst_20618);

(statearr_20653_20708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (34))){
var inst_20616 = (state_20622[(2)]);
var state_20622__$1 = state_20622;
var statearr_20654_20709 = state_20622__$1;
(statearr_20654_20709[(2)] = inst_20616);

(statearr_20654_20709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (17))){
var state_20622__$1 = state_20622;
var statearr_20655_20710 = state_20622__$1;
(statearr_20655_20710[(2)] = false);

(statearr_20655_20710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (3))){
var state_20622__$1 = state_20622;
var statearr_20656_20711 = state_20622__$1;
(statearr_20656_20711[(2)] = false);

(statearr_20656_20711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (12))){
var inst_20620 = (state_20622[(2)]);
var state_20622__$1 = state_20622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20622__$1,inst_20620);
} else {
if((state_val_20623 === (2))){
var inst_20528 = (state_20622[(8)]);
var inst_20533 = inst_20528.cljs$lang$protocol_mask$partition0$;
var inst_20534 = (inst_20533 & (64));
var inst_20535 = inst_20528.cljs$core$ISeq$;
var inst_20536 = (inst_20534) || (inst_20535);
var state_20622__$1 = state_20622;
if(cljs.core.truth_(inst_20536)){
var statearr_20657_20712 = state_20622__$1;
(statearr_20657_20712[(1)] = (5));

} else {
var statearr_20658_20713 = state_20622__$1;
(statearr_20658_20713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (23))){
var inst_20581 = (state_20622[(14)]);
var inst_20587 = (inst_20581 == null);
var state_20622__$1 = state_20622;
if(cljs.core.truth_(inst_20587)){
var statearr_20659_20714 = state_20622__$1;
(statearr_20659_20714[(1)] = (26));

} else {
var statearr_20660_20715 = state_20622__$1;
(statearr_20660_20715[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (35))){
var inst_20607 = (state_20622[(2)]);
var state_20622__$1 = state_20622;
if(cljs.core.truth_(inst_20607)){
var statearr_20661_20716 = state_20622__$1;
(statearr_20661_20716[(1)] = (36));

} else {
var statearr_20662_20717 = state_20622__$1;
(statearr_20662_20717[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (19))){
var inst_20552 = (state_20622[(7)]);
var inst_20571 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20552);
var state_20622__$1 = state_20622;
var statearr_20663_20718 = state_20622__$1;
(statearr_20663_20718[(2)] = inst_20571);

(statearr_20663_20718[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (11))){
var inst_20552 = (state_20622[(7)]);
var inst_20556 = (inst_20552 == null);
var inst_20557 = cljs.core.not.call(null,inst_20556);
var state_20622__$1 = state_20622;
if(inst_20557){
var statearr_20664_20719 = state_20622__$1;
(statearr_20664_20719[(1)] = (13));

} else {
var statearr_20665_20720 = state_20622__$1;
(statearr_20665_20720[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (9))){
var inst_20528 = (state_20622[(8)]);
var state_20622__$1 = state_20622;
var statearr_20666_20721 = state_20622__$1;
(statearr_20666_20721[(2)] = inst_20528);

(statearr_20666_20721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (5))){
var state_20622__$1 = state_20622;
var statearr_20667_20722 = state_20622__$1;
(statearr_20667_20722[(2)] = true);

(statearr_20667_20722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (14))){
var state_20622__$1 = state_20622;
var statearr_20668_20723 = state_20622__$1;
(statearr_20668_20723[(2)] = false);

(statearr_20668_20723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (26))){
var inst_20582 = (state_20622[(9)]);
var inst_20589 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20582);
var state_20622__$1 = state_20622;
var statearr_20669_20724 = state_20622__$1;
(statearr_20669_20724[(2)] = inst_20589);

(statearr_20669_20724[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (16))){
var state_20622__$1 = state_20622;
var statearr_20670_20725 = state_20622__$1;
(statearr_20670_20725[(2)] = true);

(statearr_20670_20725[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (38))){
var inst_20612 = (state_20622[(2)]);
var state_20622__$1 = state_20622;
var statearr_20671_20726 = state_20622__$1;
(statearr_20671_20726[(2)] = inst_20612);

(statearr_20671_20726[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (30))){
var inst_20582 = (state_20622[(9)]);
var inst_20575 = (state_20622[(11)]);
var inst_20576 = (state_20622[(13)]);
var inst_20599 = cljs.core.empty_QMARK_.call(null,inst_20575);
var inst_20600 = inst_20576.call(null,inst_20582);
var inst_20601 = cljs.core.not.call(null,inst_20600);
var inst_20602 = (inst_20599) && (inst_20601);
var state_20622__$1 = state_20622;
var statearr_20672_20727 = state_20622__$1;
(statearr_20672_20727[(2)] = inst_20602);

(statearr_20672_20727[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (10))){
var inst_20528 = (state_20622[(8)]);
var inst_20548 = (state_20622[(2)]);
var inst_20549 = cljs.core.get.call(null,inst_20548,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20550 = cljs.core.get.call(null,inst_20548,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20551 = cljs.core.get.call(null,inst_20548,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20552 = inst_20528;
var state_20622__$1 = (function (){var statearr_20673 = state_20622;
(statearr_20673[(7)] = inst_20552);

(statearr_20673[(16)] = inst_20550);

(statearr_20673[(17)] = inst_20551);

(statearr_20673[(18)] = inst_20549);

return statearr_20673;
})();
var statearr_20674_20728 = state_20622__$1;
(statearr_20674_20728[(2)] = null);

(statearr_20674_20728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (18))){
var inst_20566 = (state_20622[(2)]);
var state_20622__$1 = state_20622;
var statearr_20675_20729 = state_20622__$1;
(statearr_20675_20729[(2)] = inst_20566);

(statearr_20675_20729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (37))){
var state_20622__$1 = state_20622;
var statearr_20676_20730 = state_20622__$1;
(statearr_20676_20730[(2)] = null);

(statearr_20676_20730[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20623 === (8))){
var inst_20528 = (state_20622[(8)]);
var inst_20545 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20528);
var state_20622__$1 = state_20622;
var statearr_20677_20731 = state_20622__$1;
(statearr_20677_20731[(2)] = inst_20545);

(statearr_20677_20731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___20685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18860__auto__,c__18972__auto___20685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18861__auto__ = null;
var cljs$core$async$mix_$_state_machine__18861__auto____0 = (function (){
var statearr_20681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20681[(0)] = cljs$core$async$mix_$_state_machine__18861__auto__);

(statearr_20681[(1)] = (1));

return statearr_20681;
});
var cljs$core$async$mix_$_state_machine__18861__auto____1 = (function (state_20622){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_20622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e20682){if((e20682 instanceof Object)){
var ex__18864__auto__ = e20682;
var statearr_20683_20732 = state_20622;
(statearr_20683_20732[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20733 = state_20622;
state_20622 = G__20733;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18861__auto__ = function(state_20622){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18861__auto____1.call(this,state_20622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18861__auto____0;
cljs$core$async$mix_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18861__auto____1;
return cljs$core$async$mix_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___20685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18974__auto__ = (function (){var statearr_20684 = f__18973__auto__.call(null);
(statearr_20684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___20685);

return statearr_20684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___20685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20734 = [];
var len__17863__auto___20737 = arguments.length;
var i__17864__auto___20738 = (0);
while(true){
if((i__17864__auto___20738 < len__17863__auto___20737)){
args20734.push((arguments[i__17864__auto___20738]));

var G__20739 = (i__17864__auto___20738 + (1));
i__17864__auto___20738 = G__20739;
continue;
} else {
}
break;
}

var G__20736 = args20734.length;
switch (G__20736) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20734.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20742 = [];
var len__17863__auto___20867 = arguments.length;
var i__17864__auto___20868 = (0);
while(true){
if((i__17864__auto___20868 < len__17863__auto___20867)){
args20742.push((arguments[i__17864__auto___20868]));

var G__20869 = (i__17864__auto___20868 + (1));
i__17864__auto___20868 = G__20869;
continue;
} else {
}
break;
}

var G__20744 = args20742.length;
switch (G__20744) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20742.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16805__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16805__auto__,mults){
return (function (p1__20741_SHARP_){
if(cljs.core.truth_(p1__20741_SHARP_.call(null,topic))){
return p1__20741_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20741_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20745 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20746){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20746 = meta20746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20747,meta20746__$1){
var self__ = this;
var _20747__$1 = this;
return (new cljs.core.async.t_cljs$core$async20745(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20746__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20747){
var self__ = this;
var _20747__$1 = this;
return self__.meta20746;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20745.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20745.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20745.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20745.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20745.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20746","meta20746",1468440888,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20745";

cljs.core.async.t_cljs$core$async20745.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20745");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20745 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20746){
return (new cljs.core.async.t_cljs$core$async20745(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20746));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20745(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18972__auto___20871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___20871,mults,ensure_mult,p){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___20871,mults,ensure_mult,p){
return (function (state_20819){
var state_val_20820 = (state_20819[(1)]);
if((state_val_20820 === (7))){
var inst_20815 = (state_20819[(2)]);
var state_20819__$1 = state_20819;
var statearr_20821_20872 = state_20819__$1;
(statearr_20821_20872[(2)] = inst_20815);

(statearr_20821_20872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (20))){
var state_20819__$1 = state_20819;
var statearr_20822_20873 = state_20819__$1;
(statearr_20822_20873[(2)] = null);

(statearr_20822_20873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (1))){
var state_20819__$1 = state_20819;
var statearr_20823_20874 = state_20819__$1;
(statearr_20823_20874[(2)] = null);

(statearr_20823_20874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (24))){
var inst_20798 = (state_20819[(7)]);
var inst_20807 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20798);
var state_20819__$1 = state_20819;
var statearr_20824_20875 = state_20819__$1;
(statearr_20824_20875[(2)] = inst_20807);

(statearr_20824_20875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (4))){
var inst_20750 = (state_20819[(8)]);
var inst_20750__$1 = (state_20819[(2)]);
var inst_20751 = (inst_20750__$1 == null);
var state_20819__$1 = (function (){var statearr_20825 = state_20819;
(statearr_20825[(8)] = inst_20750__$1);

return statearr_20825;
})();
if(cljs.core.truth_(inst_20751)){
var statearr_20826_20876 = state_20819__$1;
(statearr_20826_20876[(1)] = (5));

} else {
var statearr_20827_20877 = state_20819__$1;
(statearr_20827_20877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (15))){
var inst_20792 = (state_20819[(2)]);
var state_20819__$1 = state_20819;
var statearr_20828_20878 = state_20819__$1;
(statearr_20828_20878[(2)] = inst_20792);

(statearr_20828_20878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (21))){
var inst_20812 = (state_20819[(2)]);
var state_20819__$1 = (function (){var statearr_20829 = state_20819;
(statearr_20829[(9)] = inst_20812);

return statearr_20829;
})();
var statearr_20830_20879 = state_20819__$1;
(statearr_20830_20879[(2)] = null);

(statearr_20830_20879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (13))){
var inst_20774 = (state_20819[(10)]);
var inst_20776 = cljs.core.chunked_seq_QMARK_.call(null,inst_20774);
var state_20819__$1 = state_20819;
if(inst_20776){
var statearr_20831_20880 = state_20819__$1;
(statearr_20831_20880[(1)] = (16));

} else {
var statearr_20832_20881 = state_20819__$1;
(statearr_20832_20881[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (22))){
var inst_20804 = (state_20819[(2)]);
var state_20819__$1 = state_20819;
if(cljs.core.truth_(inst_20804)){
var statearr_20833_20882 = state_20819__$1;
(statearr_20833_20882[(1)] = (23));

} else {
var statearr_20834_20883 = state_20819__$1;
(statearr_20834_20883[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (6))){
var inst_20798 = (state_20819[(7)]);
var inst_20800 = (state_20819[(11)]);
var inst_20750 = (state_20819[(8)]);
var inst_20798__$1 = topic_fn.call(null,inst_20750);
var inst_20799 = cljs.core.deref.call(null,mults);
var inst_20800__$1 = cljs.core.get.call(null,inst_20799,inst_20798__$1);
var state_20819__$1 = (function (){var statearr_20835 = state_20819;
(statearr_20835[(7)] = inst_20798__$1);

(statearr_20835[(11)] = inst_20800__$1);

return statearr_20835;
})();
if(cljs.core.truth_(inst_20800__$1)){
var statearr_20836_20884 = state_20819__$1;
(statearr_20836_20884[(1)] = (19));

} else {
var statearr_20837_20885 = state_20819__$1;
(statearr_20837_20885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (25))){
var inst_20809 = (state_20819[(2)]);
var state_20819__$1 = state_20819;
var statearr_20838_20886 = state_20819__$1;
(statearr_20838_20886[(2)] = inst_20809);

(statearr_20838_20886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (17))){
var inst_20774 = (state_20819[(10)]);
var inst_20783 = cljs.core.first.call(null,inst_20774);
var inst_20784 = cljs.core.async.muxch_STAR_.call(null,inst_20783);
var inst_20785 = cljs.core.async.close_BANG_.call(null,inst_20784);
var inst_20786 = cljs.core.next.call(null,inst_20774);
var inst_20760 = inst_20786;
var inst_20761 = null;
var inst_20762 = (0);
var inst_20763 = (0);
var state_20819__$1 = (function (){var statearr_20839 = state_20819;
(statearr_20839[(12)] = inst_20762);

(statearr_20839[(13)] = inst_20785);

(statearr_20839[(14)] = inst_20763);

(statearr_20839[(15)] = inst_20761);

(statearr_20839[(16)] = inst_20760);

return statearr_20839;
})();
var statearr_20840_20887 = state_20819__$1;
(statearr_20840_20887[(2)] = null);

(statearr_20840_20887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (3))){
var inst_20817 = (state_20819[(2)]);
var state_20819__$1 = state_20819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20819__$1,inst_20817);
} else {
if((state_val_20820 === (12))){
var inst_20794 = (state_20819[(2)]);
var state_20819__$1 = state_20819;
var statearr_20841_20888 = state_20819__$1;
(statearr_20841_20888[(2)] = inst_20794);

(statearr_20841_20888[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (2))){
var state_20819__$1 = state_20819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20819__$1,(4),ch);
} else {
if((state_val_20820 === (23))){
var state_20819__$1 = state_20819;
var statearr_20842_20889 = state_20819__$1;
(statearr_20842_20889[(2)] = null);

(statearr_20842_20889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (19))){
var inst_20800 = (state_20819[(11)]);
var inst_20750 = (state_20819[(8)]);
var inst_20802 = cljs.core.async.muxch_STAR_.call(null,inst_20800);
var state_20819__$1 = state_20819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20819__$1,(22),inst_20802,inst_20750);
} else {
if((state_val_20820 === (11))){
var inst_20774 = (state_20819[(10)]);
var inst_20760 = (state_20819[(16)]);
var inst_20774__$1 = cljs.core.seq.call(null,inst_20760);
var state_20819__$1 = (function (){var statearr_20843 = state_20819;
(statearr_20843[(10)] = inst_20774__$1);

return statearr_20843;
})();
if(inst_20774__$1){
var statearr_20844_20890 = state_20819__$1;
(statearr_20844_20890[(1)] = (13));

} else {
var statearr_20845_20891 = state_20819__$1;
(statearr_20845_20891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (9))){
var inst_20796 = (state_20819[(2)]);
var state_20819__$1 = state_20819;
var statearr_20846_20892 = state_20819__$1;
(statearr_20846_20892[(2)] = inst_20796);

(statearr_20846_20892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (5))){
var inst_20757 = cljs.core.deref.call(null,mults);
var inst_20758 = cljs.core.vals.call(null,inst_20757);
var inst_20759 = cljs.core.seq.call(null,inst_20758);
var inst_20760 = inst_20759;
var inst_20761 = null;
var inst_20762 = (0);
var inst_20763 = (0);
var state_20819__$1 = (function (){var statearr_20847 = state_20819;
(statearr_20847[(12)] = inst_20762);

(statearr_20847[(14)] = inst_20763);

(statearr_20847[(15)] = inst_20761);

(statearr_20847[(16)] = inst_20760);

return statearr_20847;
})();
var statearr_20848_20893 = state_20819__$1;
(statearr_20848_20893[(2)] = null);

(statearr_20848_20893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (14))){
var state_20819__$1 = state_20819;
var statearr_20852_20894 = state_20819__$1;
(statearr_20852_20894[(2)] = null);

(statearr_20852_20894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (16))){
var inst_20774 = (state_20819[(10)]);
var inst_20778 = cljs.core.chunk_first.call(null,inst_20774);
var inst_20779 = cljs.core.chunk_rest.call(null,inst_20774);
var inst_20780 = cljs.core.count.call(null,inst_20778);
var inst_20760 = inst_20779;
var inst_20761 = inst_20778;
var inst_20762 = inst_20780;
var inst_20763 = (0);
var state_20819__$1 = (function (){var statearr_20853 = state_20819;
(statearr_20853[(12)] = inst_20762);

(statearr_20853[(14)] = inst_20763);

(statearr_20853[(15)] = inst_20761);

(statearr_20853[(16)] = inst_20760);

return statearr_20853;
})();
var statearr_20854_20895 = state_20819__$1;
(statearr_20854_20895[(2)] = null);

(statearr_20854_20895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (10))){
var inst_20762 = (state_20819[(12)]);
var inst_20763 = (state_20819[(14)]);
var inst_20761 = (state_20819[(15)]);
var inst_20760 = (state_20819[(16)]);
var inst_20768 = cljs.core._nth.call(null,inst_20761,inst_20763);
var inst_20769 = cljs.core.async.muxch_STAR_.call(null,inst_20768);
var inst_20770 = cljs.core.async.close_BANG_.call(null,inst_20769);
var inst_20771 = (inst_20763 + (1));
var tmp20849 = inst_20762;
var tmp20850 = inst_20761;
var tmp20851 = inst_20760;
var inst_20760__$1 = tmp20851;
var inst_20761__$1 = tmp20850;
var inst_20762__$1 = tmp20849;
var inst_20763__$1 = inst_20771;
var state_20819__$1 = (function (){var statearr_20855 = state_20819;
(statearr_20855[(12)] = inst_20762__$1);

(statearr_20855[(17)] = inst_20770);

(statearr_20855[(14)] = inst_20763__$1);

(statearr_20855[(15)] = inst_20761__$1);

(statearr_20855[(16)] = inst_20760__$1);

return statearr_20855;
})();
var statearr_20856_20896 = state_20819__$1;
(statearr_20856_20896[(2)] = null);

(statearr_20856_20896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (18))){
var inst_20789 = (state_20819[(2)]);
var state_20819__$1 = state_20819;
var statearr_20857_20897 = state_20819__$1;
(statearr_20857_20897[(2)] = inst_20789);

(statearr_20857_20897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20820 === (8))){
var inst_20762 = (state_20819[(12)]);
var inst_20763 = (state_20819[(14)]);
var inst_20765 = (inst_20763 < inst_20762);
var inst_20766 = inst_20765;
var state_20819__$1 = state_20819;
if(cljs.core.truth_(inst_20766)){
var statearr_20858_20898 = state_20819__$1;
(statearr_20858_20898[(1)] = (10));

} else {
var statearr_20859_20899 = state_20819__$1;
(statearr_20859_20899[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___20871,mults,ensure_mult,p))
;
return ((function (switch__18860__auto__,c__18972__auto___20871,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18861__auto__ = null;
var cljs$core$async$state_machine__18861__auto____0 = (function (){
var statearr_20863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20863[(0)] = cljs$core$async$state_machine__18861__auto__);

(statearr_20863[(1)] = (1));

return statearr_20863;
});
var cljs$core$async$state_machine__18861__auto____1 = (function (state_20819){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_20819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e20864){if((e20864 instanceof Object)){
var ex__18864__auto__ = e20864;
var statearr_20865_20900 = state_20819;
(statearr_20865_20900[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20901 = state_20819;
state_20819 = G__20901;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$state_machine__18861__auto__ = function(state_20819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18861__auto____1.call(this,state_20819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18861__auto____0;
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18861__auto____1;
return cljs$core$async$state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___20871,mults,ensure_mult,p))
})();
var state__18974__auto__ = (function (){var statearr_20866 = f__18973__auto__.call(null);
(statearr_20866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___20871);

return statearr_20866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___20871,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args20902 = [];
var len__17863__auto___20905 = arguments.length;
var i__17864__auto___20906 = (0);
while(true){
if((i__17864__auto___20906 < len__17863__auto___20905)){
args20902.push((arguments[i__17864__auto___20906]));

var G__20907 = (i__17864__auto___20906 + (1));
i__17864__auto___20906 = G__20907;
continue;
} else {
}
break;
}

var G__20904 = args20902.length;
switch (G__20904) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20902.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20909 = [];
var len__17863__auto___20912 = arguments.length;
var i__17864__auto___20913 = (0);
while(true){
if((i__17864__auto___20913 < len__17863__auto___20912)){
args20909.push((arguments[i__17864__auto___20913]));

var G__20914 = (i__17864__auto___20913 + (1));
i__17864__auto___20913 = G__20914;
continue;
} else {
}
break;
}

var G__20911 = args20909.length;
switch (G__20911) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20909.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args20916 = [];
var len__17863__auto___20987 = arguments.length;
var i__17864__auto___20988 = (0);
while(true){
if((i__17864__auto___20988 < len__17863__auto___20987)){
args20916.push((arguments[i__17864__auto___20988]));

var G__20989 = (i__17864__auto___20988 + (1));
i__17864__auto___20988 = G__20989;
continue;
} else {
}
break;
}

var G__20918 = args20916.length;
switch (G__20918) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20916.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18972__auto___20991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___20991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___20991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20957){
var state_val_20958 = (state_20957[(1)]);
if((state_val_20958 === (7))){
var state_20957__$1 = state_20957;
var statearr_20959_20992 = state_20957__$1;
(statearr_20959_20992[(2)] = null);

(statearr_20959_20992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20958 === (1))){
var state_20957__$1 = state_20957;
var statearr_20960_20993 = state_20957__$1;
(statearr_20960_20993[(2)] = null);

(statearr_20960_20993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20958 === (4))){
var inst_20921 = (state_20957[(7)]);
var inst_20923 = (inst_20921 < cnt);
var state_20957__$1 = state_20957;
if(cljs.core.truth_(inst_20923)){
var statearr_20961_20994 = state_20957__$1;
(statearr_20961_20994[(1)] = (6));

} else {
var statearr_20962_20995 = state_20957__$1;
(statearr_20962_20995[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20958 === (15))){
var inst_20953 = (state_20957[(2)]);
var state_20957__$1 = state_20957;
var statearr_20963_20996 = state_20957__$1;
(statearr_20963_20996[(2)] = inst_20953);

(statearr_20963_20996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20958 === (13))){
var inst_20946 = cljs.core.async.close_BANG_.call(null,out);
var state_20957__$1 = state_20957;
var statearr_20964_20997 = state_20957__$1;
(statearr_20964_20997[(2)] = inst_20946);

(statearr_20964_20997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20958 === (6))){
var state_20957__$1 = state_20957;
var statearr_20965_20998 = state_20957__$1;
(statearr_20965_20998[(2)] = null);

(statearr_20965_20998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20958 === (3))){
var inst_20955 = (state_20957[(2)]);
var state_20957__$1 = state_20957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20957__$1,inst_20955);
} else {
if((state_val_20958 === (12))){
var inst_20943 = (state_20957[(8)]);
var inst_20943__$1 = (state_20957[(2)]);
var inst_20944 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20943__$1);
var state_20957__$1 = (function (){var statearr_20966 = state_20957;
(statearr_20966[(8)] = inst_20943__$1);

return statearr_20966;
})();
if(cljs.core.truth_(inst_20944)){
var statearr_20967_20999 = state_20957__$1;
(statearr_20967_20999[(1)] = (13));

} else {
var statearr_20968_21000 = state_20957__$1;
(statearr_20968_21000[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20958 === (2))){
var inst_20920 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20921 = (0);
var state_20957__$1 = (function (){var statearr_20969 = state_20957;
(statearr_20969[(9)] = inst_20920);

(statearr_20969[(7)] = inst_20921);

return statearr_20969;
})();
var statearr_20970_21001 = state_20957__$1;
(statearr_20970_21001[(2)] = null);

(statearr_20970_21001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20958 === (11))){
var inst_20921 = (state_20957[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20957,(10),Object,null,(9));
var inst_20930 = chs__$1.call(null,inst_20921);
var inst_20931 = done.call(null,inst_20921);
var inst_20932 = cljs.core.async.take_BANG_.call(null,inst_20930,inst_20931);
var state_20957__$1 = state_20957;
var statearr_20971_21002 = state_20957__$1;
(statearr_20971_21002[(2)] = inst_20932);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20958 === (9))){
var inst_20921 = (state_20957[(7)]);
var inst_20934 = (state_20957[(2)]);
var inst_20935 = (inst_20921 + (1));
var inst_20921__$1 = inst_20935;
var state_20957__$1 = (function (){var statearr_20972 = state_20957;
(statearr_20972[(7)] = inst_20921__$1);

(statearr_20972[(10)] = inst_20934);

return statearr_20972;
})();
var statearr_20973_21003 = state_20957__$1;
(statearr_20973_21003[(2)] = null);

(statearr_20973_21003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20958 === (5))){
var inst_20941 = (state_20957[(2)]);
var state_20957__$1 = (function (){var statearr_20974 = state_20957;
(statearr_20974[(11)] = inst_20941);

return statearr_20974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20957__$1,(12),dchan);
} else {
if((state_val_20958 === (14))){
var inst_20943 = (state_20957[(8)]);
var inst_20948 = cljs.core.apply.call(null,f,inst_20943);
var state_20957__$1 = state_20957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20957__$1,(16),out,inst_20948);
} else {
if((state_val_20958 === (16))){
var inst_20950 = (state_20957[(2)]);
var state_20957__$1 = (function (){var statearr_20975 = state_20957;
(statearr_20975[(12)] = inst_20950);

return statearr_20975;
})();
var statearr_20976_21004 = state_20957__$1;
(statearr_20976_21004[(2)] = null);

(statearr_20976_21004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20958 === (10))){
var inst_20925 = (state_20957[(2)]);
var inst_20926 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20957__$1 = (function (){var statearr_20977 = state_20957;
(statearr_20977[(13)] = inst_20925);

return statearr_20977;
})();
var statearr_20978_21005 = state_20957__$1;
(statearr_20978_21005[(2)] = inst_20926);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20958 === (8))){
var inst_20939 = (state_20957[(2)]);
var state_20957__$1 = state_20957;
var statearr_20979_21006 = state_20957__$1;
(statearr_20979_21006[(2)] = inst_20939);

(statearr_20979_21006[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___20991,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18860__auto__,c__18972__auto___20991,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18861__auto__ = null;
var cljs$core$async$state_machine__18861__auto____0 = (function (){
var statearr_20983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20983[(0)] = cljs$core$async$state_machine__18861__auto__);

(statearr_20983[(1)] = (1));

return statearr_20983;
});
var cljs$core$async$state_machine__18861__auto____1 = (function (state_20957){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_20957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e20984){if((e20984 instanceof Object)){
var ex__18864__auto__ = e20984;
var statearr_20985_21007 = state_20957;
(statearr_20985_21007[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21008 = state_20957;
state_20957 = G__21008;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$state_machine__18861__auto__ = function(state_20957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18861__auto____1.call(this,state_20957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18861__auto____0;
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18861__auto____1;
return cljs$core$async$state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___20991,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18974__auto__ = (function (){var statearr_20986 = f__18973__auto__.call(null);
(statearr_20986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___20991);

return statearr_20986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___20991,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21010 = [];
var len__17863__auto___21066 = arguments.length;
var i__17864__auto___21067 = (0);
while(true){
if((i__17864__auto___21067 < len__17863__auto___21066)){
args21010.push((arguments[i__17864__auto___21067]));

var G__21068 = (i__17864__auto___21067 + (1));
i__17864__auto___21067 = G__21068;
continue;
} else {
}
break;
}

var G__21012 = args21010.length;
switch (G__21012) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21010.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18972__auto___21070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___21070,out){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___21070,out){
return (function (state_21042){
var state_val_21043 = (state_21042[(1)]);
if((state_val_21043 === (7))){
var inst_21021 = (state_21042[(7)]);
var inst_21022 = (state_21042[(8)]);
var inst_21021__$1 = (state_21042[(2)]);
var inst_21022__$1 = cljs.core.nth.call(null,inst_21021__$1,(0),null);
var inst_21023 = cljs.core.nth.call(null,inst_21021__$1,(1),null);
var inst_21024 = (inst_21022__$1 == null);
var state_21042__$1 = (function (){var statearr_21044 = state_21042;
(statearr_21044[(7)] = inst_21021__$1);

(statearr_21044[(9)] = inst_21023);

(statearr_21044[(8)] = inst_21022__$1);

return statearr_21044;
})();
if(cljs.core.truth_(inst_21024)){
var statearr_21045_21071 = state_21042__$1;
(statearr_21045_21071[(1)] = (8));

} else {
var statearr_21046_21072 = state_21042__$1;
(statearr_21046_21072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21043 === (1))){
var inst_21013 = cljs.core.vec.call(null,chs);
var inst_21014 = inst_21013;
var state_21042__$1 = (function (){var statearr_21047 = state_21042;
(statearr_21047[(10)] = inst_21014);

return statearr_21047;
})();
var statearr_21048_21073 = state_21042__$1;
(statearr_21048_21073[(2)] = null);

(statearr_21048_21073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21043 === (4))){
var inst_21014 = (state_21042[(10)]);
var state_21042__$1 = state_21042;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21042__$1,(7),inst_21014);
} else {
if((state_val_21043 === (6))){
var inst_21038 = (state_21042[(2)]);
var state_21042__$1 = state_21042;
var statearr_21049_21074 = state_21042__$1;
(statearr_21049_21074[(2)] = inst_21038);

(statearr_21049_21074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21043 === (3))){
var inst_21040 = (state_21042[(2)]);
var state_21042__$1 = state_21042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21042__$1,inst_21040);
} else {
if((state_val_21043 === (2))){
var inst_21014 = (state_21042[(10)]);
var inst_21016 = cljs.core.count.call(null,inst_21014);
var inst_21017 = (inst_21016 > (0));
var state_21042__$1 = state_21042;
if(cljs.core.truth_(inst_21017)){
var statearr_21051_21075 = state_21042__$1;
(statearr_21051_21075[(1)] = (4));

} else {
var statearr_21052_21076 = state_21042__$1;
(statearr_21052_21076[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21043 === (11))){
var inst_21014 = (state_21042[(10)]);
var inst_21031 = (state_21042[(2)]);
var tmp21050 = inst_21014;
var inst_21014__$1 = tmp21050;
var state_21042__$1 = (function (){var statearr_21053 = state_21042;
(statearr_21053[(11)] = inst_21031);

(statearr_21053[(10)] = inst_21014__$1);

return statearr_21053;
})();
var statearr_21054_21077 = state_21042__$1;
(statearr_21054_21077[(2)] = null);

(statearr_21054_21077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21043 === (9))){
var inst_21022 = (state_21042[(8)]);
var state_21042__$1 = state_21042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21042__$1,(11),out,inst_21022);
} else {
if((state_val_21043 === (5))){
var inst_21036 = cljs.core.async.close_BANG_.call(null,out);
var state_21042__$1 = state_21042;
var statearr_21055_21078 = state_21042__$1;
(statearr_21055_21078[(2)] = inst_21036);

(statearr_21055_21078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21043 === (10))){
var inst_21034 = (state_21042[(2)]);
var state_21042__$1 = state_21042;
var statearr_21056_21079 = state_21042__$1;
(statearr_21056_21079[(2)] = inst_21034);

(statearr_21056_21079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21043 === (8))){
var inst_21021 = (state_21042[(7)]);
var inst_21023 = (state_21042[(9)]);
var inst_21022 = (state_21042[(8)]);
var inst_21014 = (state_21042[(10)]);
var inst_21026 = (function (){var cs = inst_21014;
var vec__21019 = inst_21021;
var v = inst_21022;
var c = inst_21023;
return ((function (cs,vec__21019,v,c,inst_21021,inst_21023,inst_21022,inst_21014,state_val_21043,c__18972__auto___21070,out){
return (function (p1__21009_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21009_SHARP_);
});
;})(cs,vec__21019,v,c,inst_21021,inst_21023,inst_21022,inst_21014,state_val_21043,c__18972__auto___21070,out))
})();
var inst_21027 = cljs.core.filterv.call(null,inst_21026,inst_21014);
var inst_21014__$1 = inst_21027;
var state_21042__$1 = (function (){var statearr_21057 = state_21042;
(statearr_21057[(10)] = inst_21014__$1);

return statearr_21057;
})();
var statearr_21058_21080 = state_21042__$1;
(statearr_21058_21080[(2)] = null);

(statearr_21058_21080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___21070,out))
;
return ((function (switch__18860__auto__,c__18972__auto___21070,out){
return (function() {
var cljs$core$async$state_machine__18861__auto__ = null;
var cljs$core$async$state_machine__18861__auto____0 = (function (){
var statearr_21062 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21062[(0)] = cljs$core$async$state_machine__18861__auto__);

(statearr_21062[(1)] = (1));

return statearr_21062;
});
var cljs$core$async$state_machine__18861__auto____1 = (function (state_21042){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_21042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e21063){if((e21063 instanceof Object)){
var ex__18864__auto__ = e21063;
var statearr_21064_21081 = state_21042;
(statearr_21064_21081[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21082 = state_21042;
state_21042 = G__21082;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$state_machine__18861__auto__ = function(state_21042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18861__auto____1.call(this,state_21042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18861__auto____0;
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18861__auto____1;
return cljs$core$async$state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___21070,out))
})();
var state__18974__auto__ = (function (){var statearr_21065 = f__18973__auto__.call(null);
(statearr_21065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___21070);

return statearr_21065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___21070,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21083 = [];
var len__17863__auto___21132 = arguments.length;
var i__17864__auto___21133 = (0);
while(true){
if((i__17864__auto___21133 < len__17863__auto___21132)){
args21083.push((arguments[i__17864__auto___21133]));

var G__21134 = (i__17864__auto___21133 + (1));
i__17864__auto___21133 = G__21134;
continue;
} else {
}
break;
}

var G__21085 = args21083.length;
switch (G__21085) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21083.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18972__auto___21136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___21136,out){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___21136,out){
return (function (state_21109){
var state_val_21110 = (state_21109[(1)]);
if((state_val_21110 === (7))){
var inst_21091 = (state_21109[(7)]);
var inst_21091__$1 = (state_21109[(2)]);
var inst_21092 = (inst_21091__$1 == null);
var inst_21093 = cljs.core.not.call(null,inst_21092);
var state_21109__$1 = (function (){var statearr_21111 = state_21109;
(statearr_21111[(7)] = inst_21091__$1);

return statearr_21111;
})();
if(inst_21093){
var statearr_21112_21137 = state_21109__$1;
(statearr_21112_21137[(1)] = (8));

} else {
var statearr_21113_21138 = state_21109__$1;
(statearr_21113_21138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21110 === (1))){
var inst_21086 = (0);
var state_21109__$1 = (function (){var statearr_21114 = state_21109;
(statearr_21114[(8)] = inst_21086);

return statearr_21114;
})();
var statearr_21115_21139 = state_21109__$1;
(statearr_21115_21139[(2)] = null);

(statearr_21115_21139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21110 === (4))){
var state_21109__$1 = state_21109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21109__$1,(7),ch);
} else {
if((state_val_21110 === (6))){
var inst_21104 = (state_21109[(2)]);
var state_21109__$1 = state_21109;
var statearr_21116_21140 = state_21109__$1;
(statearr_21116_21140[(2)] = inst_21104);

(statearr_21116_21140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21110 === (3))){
var inst_21106 = (state_21109[(2)]);
var inst_21107 = cljs.core.async.close_BANG_.call(null,out);
var state_21109__$1 = (function (){var statearr_21117 = state_21109;
(statearr_21117[(9)] = inst_21106);

return statearr_21117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21109__$1,inst_21107);
} else {
if((state_val_21110 === (2))){
var inst_21086 = (state_21109[(8)]);
var inst_21088 = (inst_21086 < n);
var state_21109__$1 = state_21109;
if(cljs.core.truth_(inst_21088)){
var statearr_21118_21141 = state_21109__$1;
(statearr_21118_21141[(1)] = (4));

} else {
var statearr_21119_21142 = state_21109__$1;
(statearr_21119_21142[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21110 === (11))){
var inst_21086 = (state_21109[(8)]);
var inst_21096 = (state_21109[(2)]);
var inst_21097 = (inst_21086 + (1));
var inst_21086__$1 = inst_21097;
var state_21109__$1 = (function (){var statearr_21120 = state_21109;
(statearr_21120[(10)] = inst_21096);

(statearr_21120[(8)] = inst_21086__$1);

return statearr_21120;
})();
var statearr_21121_21143 = state_21109__$1;
(statearr_21121_21143[(2)] = null);

(statearr_21121_21143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21110 === (9))){
var state_21109__$1 = state_21109;
var statearr_21122_21144 = state_21109__$1;
(statearr_21122_21144[(2)] = null);

(statearr_21122_21144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21110 === (5))){
var state_21109__$1 = state_21109;
var statearr_21123_21145 = state_21109__$1;
(statearr_21123_21145[(2)] = null);

(statearr_21123_21145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21110 === (10))){
var inst_21101 = (state_21109[(2)]);
var state_21109__$1 = state_21109;
var statearr_21124_21146 = state_21109__$1;
(statearr_21124_21146[(2)] = inst_21101);

(statearr_21124_21146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21110 === (8))){
var inst_21091 = (state_21109[(7)]);
var state_21109__$1 = state_21109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21109__$1,(11),out,inst_21091);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___21136,out))
;
return ((function (switch__18860__auto__,c__18972__auto___21136,out){
return (function() {
var cljs$core$async$state_machine__18861__auto__ = null;
var cljs$core$async$state_machine__18861__auto____0 = (function (){
var statearr_21128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21128[(0)] = cljs$core$async$state_machine__18861__auto__);

(statearr_21128[(1)] = (1));

return statearr_21128;
});
var cljs$core$async$state_machine__18861__auto____1 = (function (state_21109){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_21109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e21129){if((e21129 instanceof Object)){
var ex__18864__auto__ = e21129;
var statearr_21130_21147 = state_21109;
(statearr_21130_21147[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21148 = state_21109;
state_21109 = G__21148;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$state_machine__18861__auto__ = function(state_21109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18861__auto____1.call(this,state_21109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18861__auto____0;
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18861__auto____1;
return cljs$core$async$state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___21136,out))
})();
var state__18974__auto__ = (function (){var statearr_21131 = f__18973__auto__.call(null);
(statearr_21131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___21136);

return statearr_21131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___21136,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21156 = (function (map_LT_,f,ch,meta21157){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21157 = meta21157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21158,meta21157__$1){
var self__ = this;
var _21158__$1 = this;
return (new cljs.core.async.t_cljs$core$async21156(self__.map_LT_,self__.f,self__.ch,meta21157__$1));
});

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21158){
var self__ = this;
var _21158__$1 = this;
return self__.meta21157;
});

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21159 = (function (map_LT_,f,ch,meta21157,_,fn1,meta21160){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21157 = meta21157;
this._ = _;
this.fn1 = fn1;
this.meta21160 = meta21160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21161,meta21160__$1){
var self__ = this;
var _21161__$1 = this;
return (new cljs.core.async.t_cljs$core$async21159(self__.map_LT_,self__.f,self__.ch,self__.meta21157,self__._,self__.fn1,meta21160__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21161){
var self__ = this;
var _21161__$1 = this;
return self__.meta21160;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21159.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21149_SHARP_){
return f1.call(null,(((p1__21149_SHARP_ == null))?null:self__.f.call(null,p1__21149_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21159.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21157","meta21157",1130584590,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21156","cljs.core.async/t_cljs$core$async21156",1425256050,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21160","meta21160",-2129868134,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21159";

cljs.core.async.t_cljs$core$async21159.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21159");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21159 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21159(map_LT___$1,f__$1,ch__$1,meta21157__$1,___$2,fn1__$1,meta21160){
return (new cljs.core.async.t_cljs$core$async21159(map_LT___$1,f__$1,ch__$1,meta21157__$1,___$2,fn1__$1,meta21160));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21159(self__.map_LT_,self__.f,self__.ch,self__.meta21157,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16793__auto__ = ret;
if(cljs.core.truth_(and__16793__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16793__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21157","meta21157",1130584590,null)], null);
});

cljs.core.async.t_cljs$core$async21156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21156";

cljs.core.async.t_cljs$core$async21156.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21156");
});

cljs.core.async.__GT_t_cljs$core$async21156 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21156(map_LT___$1,f__$1,ch__$1,meta21157){
return (new cljs.core.async.t_cljs$core$async21156(map_LT___$1,f__$1,ch__$1,meta21157));
});

}

return (new cljs.core.async.t_cljs$core$async21156(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21165 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21165 = (function (map_GT_,f,ch,meta21166){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21166 = meta21166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21167,meta21166__$1){
var self__ = this;
var _21167__$1 = this;
return (new cljs.core.async.t_cljs$core$async21165(self__.map_GT_,self__.f,self__.ch,meta21166__$1));
});

cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21167){
var self__ = this;
var _21167__$1 = this;
return self__.meta21166;
});

cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21165.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21166","meta21166",-1780039876,null)], null);
});

cljs.core.async.t_cljs$core$async21165.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21165";

cljs.core.async.t_cljs$core$async21165.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21165");
});

cljs.core.async.__GT_t_cljs$core$async21165 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21165(map_GT___$1,f__$1,ch__$1,meta21166){
return (new cljs.core.async.t_cljs$core$async21165(map_GT___$1,f__$1,ch__$1,meta21166));
});

}

return (new cljs.core.async.t_cljs$core$async21165(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21171 = (function (filter_GT_,p,ch,meta21172){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21172 = meta21172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21173,meta21172__$1){
var self__ = this;
var _21173__$1 = this;
return (new cljs.core.async.t_cljs$core$async21171(self__.filter_GT_,self__.p,self__.ch,meta21172__$1));
});

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21173){
var self__ = this;
var _21173__$1 = this;
return self__.meta21172;
});

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21172","meta21172",991290501,null)], null);
});

cljs.core.async.t_cljs$core$async21171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21171";

cljs.core.async.t_cljs$core$async21171.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21171");
});

cljs.core.async.__GT_t_cljs$core$async21171 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21171(filter_GT___$1,p__$1,ch__$1,meta21172){
return (new cljs.core.async.t_cljs$core$async21171(filter_GT___$1,p__$1,ch__$1,meta21172));
});

}

return (new cljs.core.async.t_cljs$core$async21171(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21174 = [];
var len__17863__auto___21218 = arguments.length;
var i__17864__auto___21219 = (0);
while(true){
if((i__17864__auto___21219 < len__17863__auto___21218)){
args21174.push((arguments[i__17864__auto___21219]));

var G__21220 = (i__17864__auto___21219 + (1));
i__17864__auto___21219 = G__21220;
continue;
} else {
}
break;
}

var G__21176 = args21174.length;
switch (G__21176) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21174.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18972__auto___21222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___21222,out){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___21222,out){
return (function (state_21197){
var state_val_21198 = (state_21197[(1)]);
if((state_val_21198 === (7))){
var inst_21193 = (state_21197[(2)]);
var state_21197__$1 = state_21197;
var statearr_21199_21223 = state_21197__$1;
(statearr_21199_21223[(2)] = inst_21193);

(statearr_21199_21223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21198 === (1))){
var state_21197__$1 = state_21197;
var statearr_21200_21224 = state_21197__$1;
(statearr_21200_21224[(2)] = null);

(statearr_21200_21224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21198 === (4))){
var inst_21179 = (state_21197[(7)]);
var inst_21179__$1 = (state_21197[(2)]);
var inst_21180 = (inst_21179__$1 == null);
var state_21197__$1 = (function (){var statearr_21201 = state_21197;
(statearr_21201[(7)] = inst_21179__$1);

return statearr_21201;
})();
if(cljs.core.truth_(inst_21180)){
var statearr_21202_21225 = state_21197__$1;
(statearr_21202_21225[(1)] = (5));

} else {
var statearr_21203_21226 = state_21197__$1;
(statearr_21203_21226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21198 === (6))){
var inst_21179 = (state_21197[(7)]);
var inst_21184 = p.call(null,inst_21179);
var state_21197__$1 = state_21197;
if(cljs.core.truth_(inst_21184)){
var statearr_21204_21227 = state_21197__$1;
(statearr_21204_21227[(1)] = (8));

} else {
var statearr_21205_21228 = state_21197__$1;
(statearr_21205_21228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21198 === (3))){
var inst_21195 = (state_21197[(2)]);
var state_21197__$1 = state_21197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21197__$1,inst_21195);
} else {
if((state_val_21198 === (2))){
var state_21197__$1 = state_21197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21197__$1,(4),ch);
} else {
if((state_val_21198 === (11))){
var inst_21187 = (state_21197[(2)]);
var state_21197__$1 = state_21197;
var statearr_21206_21229 = state_21197__$1;
(statearr_21206_21229[(2)] = inst_21187);

(statearr_21206_21229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21198 === (9))){
var state_21197__$1 = state_21197;
var statearr_21207_21230 = state_21197__$1;
(statearr_21207_21230[(2)] = null);

(statearr_21207_21230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21198 === (5))){
var inst_21182 = cljs.core.async.close_BANG_.call(null,out);
var state_21197__$1 = state_21197;
var statearr_21208_21231 = state_21197__$1;
(statearr_21208_21231[(2)] = inst_21182);

(statearr_21208_21231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21198 === (10))){
var inst_21190 = (state_21197[(2)]);
var state_21197__$1 = (function (){var statearr_21209 = state_21197;
(statearr_21209[(8)] = inst_21190);

return statearr_21209;
})();
var statearr_21210_21232 = state_21197__$1;
(statearr_21210_21232[(2)] = null);

(statearr_21210_21232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21198 === (8))){
var inst_21179 = (state_21197[(7)]);
var state_21197__$1 = state_21197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21197__$1,(11),out,inst_21179);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___21222,out))
;
return ((function (switch__18860__auto__,c__18972__auto___21222,out){
return (function() {
var cljs$core$async$state_machine__18861__auto__ = null;
var cljs$core$async$state_machine__18861__auto____0 = (function (){
var statearr_21214 = [null,null,null,null,null,null,null,null,null];
(statearr_21214[(0)] = cljs$core$async$state_machine__18861__auto__);

(statearr_21214[(1)] = (1));

return statearr_21214;
});
var cljs$core$async$state_machine__18861__auto____1 = (function (state_21197){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_21197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e21215){if((e21215 instanceof Object)){
var ex__18864__auto__ = e21215;
var statearr_21216_21233 = state_21197;
(statearr_21216_21233[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21234 = state_21197;
state_21197 = G__21234;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$state_machine__18861__auto__ = function(state_21197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18861__auto____1.call(this,state_21197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18861__auto____0;
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18861__auto____1;
return cljs$core$async$state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___21222,out))
})();
var state__18974__auto__ = (function (){var statearr_21217 = f__18973__auto__.call(null);
(statearr_21217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___21222);

return statearr_21217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___21222,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21235 = [];
var len__17863__auto___21238 = arguments.length;
var i__17864__auto___21239 = (0);
while(true){
if((i__17864__auto___21239 < len__17863__auto___21238)){
args21235.push((arguments[i__17864__auto___21239]));

var G__21240 = (i__17864__auto___21239 + (1));
i__17864__auto___21239 = G__21240;
continue;
} else {
}
break;
}

var G__21237 = args21235.length;
switch (G__21237) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21235.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_21407){
var state_val_21408 = (state_21407[(1)]);
if((state_val_21408 === (7))){
var inst_21403 = (state_21407[(2)]);
var state_21407__$1 = state_21407;
var statearr_21409_21450 = state_21407__$1;
(statearr_21409_21450[(2)] = inst_21403);

(statearr_21409_21450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (20))){
var inst_21373 = (state_21407[(7)]);
var inst_21384 = (state_21407[(2)]);
var inst_21385 = cljs.core.next.call(null,inst_21373);
var inst_21359 = inst_21385;
var inst_21360 = null;
var inst_21361 = (0);
var inst_21362 = (0);
var state_21407__$1 = (function (){var statearr_21410 = state_21407;
(statearr_21410[(8)] = inst_21359);

(statearr_21410[(9)] = inst_21360);

(statearr_21410[(10)] = inst_21361);

(statearr_21410[(11)] = inst_21384);

(statearr_21410[(12)] = inst_21362);

return statearr_21410;
})();
var statearr_21411_21451 = state_21407__$1;
(statearr_21411_21451[(2)] = null);

(statearr_21411_21451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (1))){
var state_21407__$1 = state_21407;
var statearr_21412_21452 = state_21407__$1;
(statearr_21412_21452[(2)] = null);

(statearr_21412_21452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (4))){
var inst_21348 = (state_21407[(13)]);
var inst_21348__$1 = (state_21407[(2)]);
var inst_21349 = (inst_21348__$1 == null);
var state_21407__$1 = (function (){var statearr_21413 = state_21407;
(statearr_21413[(13)] = inst_21348__$1);

return statearr_21413;
})();
if(cljs.core.truth_(inst_21349)){
var statearr_21414_21453 = state_21407__$1;
(statearr_21414_21453[(1)] = (5));

} else {
var statearr_21415_21454 = state_21407__$1;
(statearr_21415_21454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (15))){
var state_21407__$1 = state_21407;
var statearr_21419_21455 = state_21407__$1;
(statearr_21419_21455[(2)] = null);

(statearr_21419_21455[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (21))){
var state_21407__$1 = state_21407;
var statearr_21420_21456 = state_21407__$1;
(statearr_21420_21456[(2)] = null);

(statearr_21420_21456[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (13))){
var inst_21359 = (state_21407[(8)]);
var inst_21360 = (state_21407[(9)]);
var inst_21361 = (state_21407[(10)]);
var inst_21362 = (state_21407[(12)]);
var inst_21369 = (state_21407[(2)]);
var inst_21370 = (inst_21362 + (1));
var tmp21416 = inst_21359;
var tmp21417 = inst_21360;
var tmp21418 = inst_21361;
var inst_21359__$1 = tmp21416;
var inst_21360__$1 = tmp21417;
var inst_21361__$1 = tmp21418;
var inst_21362__$1 = inst_21370;
var state_21407__$1 = (function (){var statearr_21421 = state_21407;
(statearr_21421[(8)] = inst_21359__$1);

(statearr_21421[(14)] = inst_21369);

(statearr_21421[(9)] = inst_21360__$1);

(statearr_21421[(10)] = inst_21361__$1);

(statearr_21421[(12)] = inst_21362__$1);

return statearr_21421;
})();
var statearr_21422_21457 = state_21407__$1;
(statearr_21422_21457[(2)] = null);

(statearr_21422_21457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (22))){
var state_21407__$1 = state_21407;
var statearr_21423_21458 = state_21407__$1;
(statearr_21423_21458[(2)] = null);

(statearr_21423_21458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (6))){
var inst_21348 = (state_21407[(13)]);
var inst_21357 = f.call(null,inst_21348);
var inst_21358 = cljs.core.seq.call(null,inst_21357);
var inst_21359 = inst_21358;
var inst_21360 = null;
var inst_21361 = (0);
var inst_21362 = (0);
var state_21407__$1 = (function (){var statearr_21424 = state_21407;
(statearr_21424[(8)] = inst_21359);

(statearr_21424[(9)] = inst_21360);

(statearr_21424[(10)] = inst_21361);

(statearr_21424[(12)] = inst_21362);

return statearr_21424;
})();
var statearr_21425_21459 = state_21407__$1;
(statearr_21425_21459[(2)] = null);

(statearr_21425_21459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (17))){
var inst_21373 = (state_21407[(7)]);
var inst_21377 = cljs.core.chunk_first.call(null,inst_21373);
var inst_21378 = cljs.core.chunk_rest.call(null,inst_21373);
var inst_21379 = cljs.core.count.call(null,inst_21377);
var inst_21359 = inst_21378;
var inst_21360 = inst_21377;
var inst_21361 = inst_21379;
var inst_21362 = (0);
var state_21407__$1 = (function (){var statearr_21426 = state_21407;
(statearr_21426[(8)] = inst_21359);

(statearr_21426[(9)] = inst_21360);

(statearr_21426[(10)] = inst_21361);

(statearr_21426[(12)] = inst_21362);

return statearr_21426;
})();
var statearr_21427_21460 = state_21407__$1;
(statearr_21427_21460[(2)] = null);

(statearr_21427_21460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (3))){
var inst_21405 = (state_21407[(2)]);
var state_21407__$1 = state_21407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21407__$1,inst_21405);
} else {
if((state_val_21408 === (12))){
var inst_21393 = (state_21407[(2)]);
var state_21407__$1 = state_21407;
var statearr_21428_21461 = state_21407__$1;
(statearr_21428_21461[(2)] = inst_21393);

(statearr_21428_21461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (2))){
var state_21407__$1 = state_21407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21407__$1,(4),in$);
} else {
if((state_val_21408 === (23))){
var inst_21401 = (state_21407[(2)]);
var state_21407__$1 = state_21407;
var statearr_21429_21462 = state_21407__$1;
(statearr_21429_21462[(2)] = inst_21401);

(statearr_21429_21462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (19))){
var inst_21388 = (state_21407[(2)]);
var state_21407__$1 = state_21407;
var statearr_21430_21463 = state_21407__$1;
(statearr_21430_21463[(2)] = inst_21388);

(statearr_21430_21463[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (11))){
var inst_21359 = (state_21407[(8)]);
var inst_21373 = (state_21407[(7)]);
var inst_21373__$1 = cljs.core.seq.call(null,inst_21359);
var state_21407__$1 = (function (){var statearr_21431 = state_21407;
(statearr_21431[(7)] = inst_21373__$1);

return statearr_21431;
})();
if(inst_21373__$1){
var statearr_21432_21464 = state_21407__$1;
(statearr_21432_21464[(1)] = (14));

} else {
var statearr_21433_21465 = state_21407__$1;
(statearr_21433_21465[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (9))){
var inst_21395 = (state_21407[(2)]);
var inst_21396 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21407__$1 = (function (){var statearr_21434 = state_21407;
(statearr_21434[(15)] = inst_21395);

return statearr_21434;
})();
if(cljs.core.truth_(inst_21396)){
var statearr_21435_21466 = state_21407__$1;
(statearr_21435_21466[(1)] = (21));

} else {
var statearr_21436_21467 = state_21407__$1;
(statearr_21436_21467[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (5))){
var inst_21351 = cljs.core.async.close_BANG_.call(null,out);
var state_21407__$1 = state_21407;
var statearr_21437_21468 = state_21407__$1;
(statearr_21437_21468[(2)] = inst_21351);

(statearr_21437_21468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (14))){
var inst_21373 = (state_21407[(7)]);
var inst_21375 = cljs.core.chunked_seq_QMARK_.call(null,inst_21373);
var state_21407__$1 = state_21407;
if(inst_21375){
var statearr_21438_21469 = state_21407__$1;
(statearr_21438_21469[(1)] = (17));

} else {
var statearr_21439_21470 = state_21407__$1;
(statearr_21439_21470[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (16))){
var inst_21391 = (state_21407[(2)]);
var state_21407__$1 = state_21407;
var statearr_21440_21471 = state_21407__$1;
(statearr_21440_21471[(2)] = inst_21391);

(statearr_21440_21471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21408 === (10))){
var inst_21360 = (state_21407[(9)]);
var inst_21362 = (state_21407[(12)]);
var inst_21367 = cljs.core._nth.call(null,inst_21360,inst_21362);
var state_21407__$1 = state_21407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21407__$1,(13),out,inst_21367);
} else {
if((state_val_21408 === (18))){
var inst_21373 = (state_21407[(7)]);
var inst_21382 = cljs.core.first.call(null,inst_21373);
var state_21407__$1 = state_21407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21407__$1,(20),out,inst_21382);
} else {
if((state_val_21408 === (8))){
var inst_21361 = (state_21407[(10)]);
var inst_21362 = (state_21407[(12)]);
var inst_21364 = (inst_21362 < inst_21361);
var inst_21365 = inst_21364;
var state_21407__$1 = state_21407;
if(cljs.core.truth_(inst_21365)){
var statearr_21441_21472 = state_21407__$1;
(statearr_21441_21472[(1)] = (10));

} else {
var statearr_21442_21473 = state_21407__$1;
(statearr_21442_21473[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18861__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18861__auto____0 = (function (){
var statearr_21446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21446[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18861__auto__);

(statearr_21446[(1)] = (1));

return statearr_21446;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18861__auto____1 = (function (state_21407){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_21407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e21447){if((e21447 instanceof Object)){
var ex__18864__auto__ = e21447;
var statearr_21448_21474 = state_21407;
(statearr_21448_21474[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21475 = state_21407;
state_21407 = G__21475;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18861__auto__ = function(state_21407){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18861__auto____1.call(this,state_21407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18861__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18861__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_21449 = f__18973__auto__.call(null);
(statearr_21449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_21449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21476 = [];
var len__17863__auto___21479 = arguments.length;
var i__17864__auto___21480 = (0);
while(true){
if((i__17864__auto___21480 < len__17863__auto___21479)){
args21476.push((arguments[i__17864__auto___21480]));

var G__21481 = (i__17864__auto___21480 + (1));
i__17864__auto___21480 = G__21481;
continue;
} else {
}
break;
}

var G__21478 = args21476.length;
switch (G__21478) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21476.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21483 = [];
var len__17863__auto___21486 = arguments.length;
var i__17864__auto___21487 = (0);
while(true){
if((i__17864__auto___21487 < len__17863__auto___21486)){
args21483.push((arguments[i__17864__auto___21487]));

var G__21488 = (i__17864__auto___21487 + (1));
i__17864__auto___21487 = G__21488;
continue;
} else {
}
break;
}

var G__21485 = args21483.length;
switch (G__21485) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21483.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21490 = [];
var len__17863__auto___21541 = arguments.length;
var i__17864__auto___21542 = (0);
while(true){
if((i__17864__auto___21542 < len__17863__auto___21541)){
args21490.push((arguments[i__17864__auto___21542]));

var G__21543 = (i__17864__auto___21542 + (1));
i__17864__auto___21542 = G__21543;
continue;
} else {
}
break;
}

var G__21492 = args21490.length;
switch (G__21492) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21490.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18972__auto___21545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___21545,out){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___21545,out){
return (function (state_21516){
var state_val_21517 = (state_21516[(1)]);
if((state_val_21517 === (7))){
var inst_21511 = (state_21516[(2)]);
var state_21516__$1 = state_21516;
var statearr_21518_21546 = state_21516__$1;
(statearr_21518_21546[(2)] = inst_21511);

(statearr_21518_21546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (1))){
var inst_21493 = null;
var state_21516__$1 = (function (){var statearr_21519 = state_21516;
(statearr_21519[(7)] = inst_21493);

return statearr_21519;
})();
var statearr_21520_21547 = state_21516__$1;
(statearr_21520_21547[(2)] = null);

(statearr_21520_21547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (4))){
var inst_21496 = (state_21516[(8)]);
var inst_21496__$1 = (state_21516[(2)]);
var inst_21497 = (inst_21496__$1 == null);
var inst_21498 = cljs.core.not.call(null,inst_21497);
var state_21516__$1 = (function (){var statearr_21521 = state_21516;
(statearr_21521[(8)] = inst_21496__$1);

return statearr_21521;
})();
if(inst_21498){
var statearr_21522_21548 = state_21516__$1;
(statearr_21522_21548[(1)] = (5));

} else {
var statearr_21523_21549 = state_21516__$1;
(statearr_21523_21549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (6))){
var state_21516__$1 = state_21516;
var statearr_21524_21550 = state_21516__$1;
(statearr_21524_21550[(2)] = null);

(statearr_21524_21550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (3))){
var inst_21513 = (state_21516[(2)]);
var inst_21514 = cljs.core.async.close_BANG_.call(null,out);
var state_21516__$1 = (function (){var statearr_21525 = state_21516;
(statearr_21525[(9)] = inst_21513);

return statearr_21525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21516__$1,inst_21514);
} else {
if((state_val_21517 === (2))){
var state_21516__$1 = state_21516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21516__$1,(4),ch);
} else {
if((state_val_21517 === (11))){
var inst_21496 = (state_21516[(8)]);
var inst_21505 = (state_21516[(2)]);
var inst_21493 = inst_21496;
var state_21516__$1 = (function (){var statearr_21526 = state_21516;
(statearr_21526[(7)] = inst_21493);

(statearr_21526[(10)] = inst_21505);

return statearr_21526;
})();
var statearr_21527_21551 = state_21516__$1;
(statearr_21527_21551[(2)] = null);

(statearr_21527_21551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (9))){
var inst_21496 = (state_21516[(8)]);
var state_21516__$1 = state_21516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21516__$1,(11),out,inst_21496);
} else {
if((state_val_21517 === (5))){
var inst_21496 = (state_21516[(8)]);
var inst_21493 = (state_21516[(7)]);
var inst_21500 = cljs.core._EQ_.call(null,inst_21496,inst_21493);
var state_21516__$1 = state_21516;
if(inst_21500){
var statearr_21529_21552 = state_21516__$1;
(statearr_21529_21552[(1)] = (8));

} else {
var statearr_21530_21553 = state_21516__$1;
(statearr_21530_21553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (10))){
var inst_21508 = (state_21516[(2)]);
var state_21516__$1 = state_21516;
var statearr_21531_21554 = state_21516__$1;
(statearr_21531_21554[(2)] = inst_21508);

(statearr_21531_21554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21517 === (8))){
var inst_21493 = (state_21516[(7)]);
var tmp21528 = inst_21493;
var inst_21493__$1 = tmp21528;
var state_21516__$1 = (function (){var statearr_21532 = state_21516;
(statearr_21532[(7)] = inst_21493__$1);

return statearr_21532;
})();
var statearr_21533_21555 = state_21516__$1;
(statearr_21533_21555[(2)] = null);

(statearr_21533_21555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___21545,out))
;
return ((function (switch__18860__auto__,c__18972__auto___21545,out){
return (function() {
var cljs$core$async$state_machine__18861__auto__ = null;
var cljs$core$async$state_machine__18861__auto____0 = (function (){
var statearr_21537 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21537[(0)] = cljs$core$async$state_machine__18861__auto__);

(statearr_21537[(1)] = (1));

return statearr_21537;
});
var cljs$core$async$state_machine__18861__auto____1 = (function (state_21516){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_21516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e21538){if((e21538 instanceof Object)){
var ex__18864__auto__ = e21538;
var statearr_21539_21556 = state_21516;
(statearr_21539_21556[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21557 = state_21516;
state_21516 = G__21557;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$state_machine__18861__auto__ = function(state_21516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18861__auto____1.call(this,state_21516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18861__auto____0;
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18861__auto____1;
return cljs$core$async$state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___21545,out))
})();
var state__18974__auto__ = (function (){var statearr_21540 = f__18973__auto__.call(null);
(statearr_21540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___21545);

return statearr_21540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___21545,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21558 = [];
var len__17863__auto___21628 = arguments.length;
var i__17864__auto___21629 = (0);
while(true){
if((i__17864__auto___21629 < len__17863__auto___21628)){
args21558.push((arguments[i__17864__auto___21629]));

var G__21630 = (i__17864__auto___21629 + (1));
i__17864__auto___21629 = G__21630;
continue;
} else {
}
break;
}

var G__21560 = args21558.length;
switch (G__21560) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21558.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18972__auto___21632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___21632,out){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___21632,out){
return (function (state_21598){
var state_val_21599 = (state_21598[(1)]);
if((state_val_21599 === (7))){
var inst_21594 = (state_21598[(2)]);
var state_21598__$1 = state_21598;
var statearr_21600_21633 = state_21598__$1;
(statearr_21600_21633[(2)] = inst_21594);

(statearr_21600_21633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21599 === (1))){
var inst_21561 = (new Array(n));
var inst_21562 = inst_21561;
var inst_21563 = (0);
var state_21598__$1 = (function (){var statearr_21601 = state_21598;
(statearr_21601[(7)] = inst_21562);

(statearr_21601[(8)] = inst_21563);

return statearr_21601;
})();
var statearr_21602_21634 = state_21598__$1;
(statearr_21602_21634[(2)] = null);

(statearr_21602_21634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21599 === (4))){
var inst_21566 = (state_21598[(9)]);
var inst_21566__$1 = (state_21598[(2)]);
var inst_21567 = (inst_21566__$1 == null);
var inst_21568 = cljs.core.not.call(null,inst_21567);
var state_21598__$1 = (function (){var statearr_21603 = state_21598;
(statearr_21603[(9)] = inst_21566__$1);

return statearr_21603;
})();
if(inst_21568){
var statearr_21604_21635 = state_21598__$1;
(statearr_21604_21635[(1)] = (5));

} else {
var statearr_21605_21636 = state_21598__$1;
(statearr_21605_21636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21599 === (15))){
var inst_21588 = (state_21598[(2)]);
var state_21598__$1 = state_21598;
var statearr_21606_21637 = state_21598__$1;
(statearr_21606_21637[(2)] = inst_21588);

(statearr_21606_21637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21599 === (13))){
var state_21598__$1 = state_21598;
var statearr_21607_21638 = state_21598__$1;
(statearr_21607_21638[(2)] = null);

(statearr_21607_21638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21599 === (6))){
var inst_21563 = (state_21598[(8)]);
var inst_21584 = (inst_21563 > (0));
var state_21598__$1 = state_21598;
if(cljs.core.truth_(inst_21584)){
var statearr_21608_21639 = state_21598__$1;
(statearr_21608_21639[(1)] = (12));

} else {
var statearr_21609_21640 = state_21598__$1;
(statearr_21609_21640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21599 === (3))){
var inst_21596 = (state_21598[(2)]);
var state_21598__$1 = state_21598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21598__$1,inst_21596);
} else {
if((state_val_21599 === (12))){
var inst_21562 = (state_21598[(7)]);
var inst_21586 = cljs.core.vec.call(null,inst_21562);
var state_21598__$1 = state_21598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21598__$1,(15),out,inst_21586);
} else {
if((state_val_21599 === (2))){
var state_21598__$1 = state_21598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21598__$1,(4),ch);
} else {
if((state_val_21599 === (11))){
var inst_21578 = (state_21598[(2)]);
var inst_21579 = (new Array(n));
var inst_21562 = inst_21579;
var inst_21563 = (0);
var state_21598__$1 = (function (){var statearr_21610 = state_21598;
(statearr_21610[(7)] = inst_21562);

(statearr_21610[(10)] = inst_21578);

(statearr_21610[(8)] = inst_21563);

return statearr_21610;
})();
var statearr_21611_21641 = state_21598__$1;
(statearr_21611_21641[(2)] = null);

(statearr_21611_21641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21599 === (9))){
var inst_21562 = (state_21598[(7)]);
var inst_21576 = cljs.core.vec.call(null,inst_21562);
var state_21598__$1 = state_21598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21598__$1,(11),out,inst_21576);
} else {
if((state_val_21599 === (5))){
var inst_21562 = (state_21598[(7)]);
var inst_21571 = (state_21598[(11)]);
var inst_21566 = (state_21598[(9)]);
var inst_21563 = (state_21598[(8)]);
var inst_21570 = (inst_21562[inst_21563] = inst_21566);
var inst_21571__$1 = (inst_21563 + (1));
var inst_21572 = (inst_21571__$1 < n);
var state_21598__$1 = (function (){var statearr_21612 = state_21598;
(statearr_21612[(11)] = inst_21571__$1);

(statearr_21612[(12)] = inst_21570);

return statearr_21612;
})();
if(cljs.core.truth_(inst_21572)){
var statearr_21613_21642 = state_21598__$1;
(statearr_21613_21642[(1)] = (8));

} else {
var statearr_21614_21643 = state_21598__$1;
(statearr_21614_21643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21599 === (14))){
var inst_21591 = (state_21598[(2)]);
var inst_21592 = cljs.core.async.close_BANG_.call(null,out);
var state_21598__$1 = (function (){var statearr_21616 = state_21598;
(statearr_21616[(13)] = inst_21591);

return statearr_21616;
})();
var statearr_21617_21644 = state_21598__$1;
(statearr_21617_21644[(2)] = inst_21592);

(statearr_21617_21644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21599 === (10))){
var inst_21582 = (state_21598[(2)]);
var state_21598__$1 = state_21598;
var statearr_21618_21645 = state_21598__$1;
(statearr_21618_21645[(2)] = inst_21582);

(statearr_21618_21645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21599 === (8))){
var inst_21562 = (state_21598[(7)]);
var inst_21571 = (state_21598[(11)]);
var tmp21615 = inst_21562;
var inst_21562__$1 = tmp21615;
var inst_21563 = inst_21571;
var state_21598__$1 = (function (){var statearr_21619 = state_21598;
(statearr_21619[(7)] = inst_21562__$1);

(statearr_21619[(8)] = inst_21563);

return statearr_21619;
})();
var statearr_21620_21646 = state_21598__$1;
(statearr_21620_21646[(2)] = null);

(statearr_21620_21646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___21632,out))
;
return ((function (switch__18860__auto__,c__18972__auto___21632,out){
return (function() {
var cljs$core$async$state_machine__18861__auto__ = null;
var cljs$core$async$state_machine__18861__auto____0 = (function (){
var statearr_21624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21624[(0)] = cljs$core$async$state_machine__18861__auto__);

(statearr_21624[(1)] = (1));

return statearr_21624;
});
var cljs$core$async$state_machine__18861__auto____1 = (function (state_21598){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_21598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e21625){if((e21625 instanceof Object)){
var ex__18864__auto__ = e21625;
var statearr_21626_21647 = state_21598;
(statearr_21626_21647[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21648 = state_21598;
state_21598 = G__21648;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$state_machine__18861__auto__ = function(state_21598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18861__auto____1.call(this,state_21598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18861__auto____0;
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18861__auto____1;
return cljs$core$async$state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___21632,out))
})();
var state__18974__auto__ = (function (){var statearr_21627 = f__18973__auto__.call(null);
(statearr_21627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___21632);

return statearr_21627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___21632,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21649 = [];
var len__17863__auto___21723 = arguments.length;
var i__17864__auto___21724 = (0);
while(true){
if((i__17864__auto___21724 < len__17863__auto___21723)){
args21649.push((arguments[i__17864__auto___21724]));

var G__21725 = (i__17864__auto___21724 + (1));
i__17864__auto___21724 = G__21725;
continue;
} else {
}
break;
}

var G__21651 = args21649.length;
switch (G__21651) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21649.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18972__auto___21727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___21727,out){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___21727,out){
return (function (state_21693){
var state_val_21694 = (state_21693[(1)]);
if((state_val_21694 === (7))){
var inst_21689 = (state_21693[(2)]);
var state_21693__$1 = state_21693;
var statearr_21695_21728 = state_21693__$1;
(statearr_21695_21728[(2)] = inst_21689);

(statearr_21695_21728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21694 === (1))){
var inst_21652 = [];
var inst_21653 = inst_21652;
var inst_21654 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21693__$1 = (function (){var statearr_21696 = state_21693;
(statearr_21696[(7)] = inst_21654);

(statearr_21696[(8)] = inst_21653);

return statearr_21696;
})();
var statearr_21697_21729 = state_21693__$1;
(statearr_21697_21729[(2)] = null);

(statearr_21697_21729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21694 === (4))){
var inst_21657 = (state_21693[(9)]);
var inst_21657__$1 = (state_21693[(2)]);
var inst_21658 = (inst_21657__$1 == null);
var inst_21659 = cljs.core.not.call(null,inst_21658);
var state_21693__$1 = (function (){var statearr_21698 = state_21693;
(statearr_21698[(9)] = inst_21657__$1);

return statearr_21698;
})();
if(inst_21659){
var statearr_21699_21730 = state_21693__$1;
(statearr_21699_21730[(1)] = (5));

} else {
var statearr_21700_21731 = state_21693__$1;
(statearr_21700_21731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21694 === (15))){
var inst_21683 = (state_21693[(2)]);
var state_21693__$1 = state_21693;
var statearr_21701_21732 = state_21693__$1;
(statearr_21701_21732[(2)] = inst_21683);

(statearr_21701_21732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21694 === (13))){
var state_21693__$1 = state_21693;
var statearr_21702_21733 = state_21693__$1;
(statearr_21702_21733[(2)] = null);

(statearr_21702_21733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21694 === (6))){
var inst_21653 = (state_21693[(8)]);
var inst_21678 = inst_21653.length;
var inst_21679 = (inst_21678 > (0));
var state_21693__$1 = state_21693;
if(cljs.core.truth_(inst_21679)){
var statearr_21703_21734 = state_21693__$1;
(statearr_21703_21734[(1)] = (12));

} else {
var statearr_21704_21735 = state_21693__$1;
(statearr_21704_21735[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21694 === (3))){
var inst_21691 = (state_21693[(2)]);
var state_21693__$1 = state_21693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21693__$1,inst_21691);
} else {
if((state_val_21694 === (12))){
var inst_21653 = (state_21693[(8)]);
var inst_21681 = cljs.core.vec.call(null,inst_21653);
var state_21693__$1 = state_21693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21693__$1,(15),out,inst_21681);
} else {
if((state_val_21694 === (2))){
var state_21693__$1 = state_21693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21693__$1,(4),ch);
} else {
if((state_val_21694 === (11))){
var inst_21657 = (state_21693[(9)]);
var inst_21661 = (state_21693[(10)]);
var inst_21671 = (state_21693[(2)]);
var inst_21672 = [];
var inst_21673 = inst_21672.push(inst_21657);
var inst_21653 = inst_21672;
var inst_21654 = inst_21661;
var state_21693__$1 = (function (){var statearr_21705 = state_21693;
(statearr_21705[(7)] = inst_21654);

(statearr_21705[(11)] = inst_21671);

(statearr_21705[(12)] = inst_21673);

(statearr_21705[(8)] = inst_21653);

return statearr_21705;
})();
var statearr_21706_21736 = state_21693__$1;
(statearr_21706_21736[(2)] = null);

(statearr_21706_21736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21694 === (9))){
var inst_21653 = (state_21693[(8)]);
var inst_21669 = cljs.core.vec.call(null,inst_21653);
var state_21693__$1 = state_21693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21693__$1,(11),out,inst_21669);
} else {
if((state_val_21694 === (5))){
var inst_21657 = (state_21693[(9)]);
var inst_21654 = (state_21693[(7)]);
var inst_21661 = (state_21693[(10)]);
var inst_21661__$1 = f.call(null,inst_21657);
var inst_21662 = cljs.core._EQ_.call(null,inst_21661__$1,inst_21654);
var inst_21663 = cljs.core.keyword_identical_QMARK_.call(null,inst_21654,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21664 = (inst_21662) || (inst_21663);
var state_21693__$1 = (function (){var statearr_21707 = state_21693;
(statearr_21707[(10)] = inst_21661__$1);

return statearr_21707;
})();
if(cljs.core.truth_(inst_21664)){
var statearr_21708_21737 = state_21693__$1;
(statearr_21708_21737[(1)] = (8));

} else {
var statearr_21709_21738 = state_21693__$1;
(statearr_21709_21738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21694 === (14))){
var inst_21686 = (state_21693[(2)]);
var inst_21687 = cljs.core.async.close_BANG_.call(null,out);
var state_21693__$1 = (function (){var statearr_21711 = state_21693;
(statearr_21711[(13)] = inst_21686);

return statearr_21711;
})();
var statearr_21712_21739 = state_21693__$1;
(statearr_21712_21739[(2)] = inst_21687);

(statearr_21712_21739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21694 === (10))){
var inst_21676 = (state_21693[(2)]);
var state_21693__$1 = state_21693;
var statearr_21713_21740 = state_21693__$1;
(statearr_21713_21740[(2)] = inst_21676);

(statearr_21713_21740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21694 === (8))){
var inst_21657 = (state_21693[(9)]);
var inst_21661 = (state_21693[(10)]);
var inst_21653 = (state_21693[(8)]);
var inst_21666 = inst_21653.push(inst_21657);
var tmp21710 = inst_21653;
var inst_21653__$1 = tmp21710;
var inst_21654 = inst_21661;
var state_21693__$1 = (function (){var statearr_21714 = state_21693;
(statearr_21714[(7)] = inst_21654);

(statearr_21714[(14)] = inst_21666);

(statearr_21714[(8)] = inst_21653__$1);

return statearr_21714;
})();
var statearr_21715_21741 = state_21693__$1;
(statearr_21715_21741[(2)] = null);

(statearr_21715_21741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18972__auto___21727,out))
;
return ((function (switch__18860__auto__,c__18972__auto___21727,out){
return (function() {
var cljs$core$async$state_machine__18861__auto__ = null;
var cljs$core$async$state_machine__18861__auto____0 = (function (){
var statearr_21719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21719[(0)] = cljs$core$async$state_machine__18861__auto__);

(statearr_21719[(1)] = (1));

return statearr_21719;
});
var cljs$core$async$state_machine__18861__auto____1 = (function (state_21693){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_21693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e21720){if((e21720 instanceof Object)){
var ex__18864__auto__ = e21720;
var statearr_21721_21742 = state_21693;
(statearr_21721_21742[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21743 = state_21693;
state_21693 = G__21743;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
cljs$core$async$state_machine__18861__auto__ = function(state_21693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18861__auto____1.call(this,state_21693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18861__auto____0;
cljs$core$async$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18861__auto____1;
return cljs$core$async$state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___21727,out))
})();
var state__18974__auto__ = (function (){var statearr_21722 = f__18973__auto__.call(null);
(statearr_21722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___21727);

return statearr_21722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___21727,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1454610164599