// Compiled by ClojureScript 1.7.170 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
goog.require('goog.dom.query');
domina.css.root_element = (function domina$css$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.css.sel = (function domina$css$sel(var_args){
var args19057 = [];
var len__17863__auto___19063 = arguments.length;
var i__17864__auto___19064 = (0);
while(true){
if((i__17864__auto___19064 < len__17863__auto___19063)){
args19057.push((arguments[i__17864__auto___19064]));

var G__19065 = (i__17864__auto___19064 + (1));
i__17864__auto___19064 = G__19065;
continue;
} else {
}
break;
}

var G__19059 = args19057.length;
switch (G__19059) {
case 1:
return domina.css.sel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.css.sel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19057.length)].join('')));

}
});

domina.css.sel.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.css.sel.call(null,domina.css.root_element.call(null),expr);
});

domina.css.sel.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.css.t_domina$css19060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.DomContent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
domina.css.t_domina$css19060 = (function (base,expr,meta19061){
this.base = base;
this.expr = expr;
this.meta19061 = meta19061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.css.t_domina$css19060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19062,meta19061__$1){
var self__ = this;
var _19062__$1 = this;
return (new domina.css.t_domina$css19060(self__.base,self__.expr,meta19061__$1));
});

domina.css.t_domina$css19060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19062){
var self__ = this;
var _19062__$1 = this;
return self__.meta19061;
});

domina.css.t_domina$css19060.prototype.domina$DomContent$ = true;

domina.css.t_domina$css19060.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__19055_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__19055_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base));
});

domina.css.t_domina$css19060.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__19056_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__19056_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base))));
});

domina.css.t_domina$css19060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta19061","meta19061",-760862821,null)], null);
});

domina.css.t_domina$css19060.cljs$lang$type = true;

domina.css.t_domina$css19060.cljs$lang$ctorStr = "domina.css/t_domina$css19060";

domina.css.t_domina$css19060.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"domina.css/t_domina$css19060");
});

domina.css.__GT_t_domina$css19060 = (function domina$css$__GT_t_domina$css19060(base__$1,expr__$1,meta19061){
return (new domina.css.t_domina$css19060(base__$1,expr__$1,meta19061));
});

}

return (new domina.css.t_domina$css19060(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.css.sel.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=css.js.map?rel=1454633314711