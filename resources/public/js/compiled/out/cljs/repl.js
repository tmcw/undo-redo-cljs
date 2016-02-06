// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22941_22955 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22942_22956 = null;
var count__22943_22957 = (0);
var i__22944_22958 = (0);
while(true){
if((i__22944_22958 < count__22943_22957)){
var f_22959 = cljs.core._nth.call(null,chunk__22942_22956,i__22944_22958);
cljs.core.println.call(null,"  ",f_22959);

var G__22960 = seq__22941_22955;
var G__22961 = chunk__22942_22956;
var G__22962 = count__22943_22957;
var G__22963 = (i__22944_22958 + (1));
seq__22941_22955 = G__22960;
chunk__22942_22956 = G__22961;
count__22943_22957 = G__22962;
i__22944_22958 = G__22963;
continue;
} else {
var temp__4425__auto___22964 = cljs.core.seq.call(null,seq__22941_22955);
if(temp__4425__auto___22964){
var seq__22941_22965__$1 = temp__4425__auto___22964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22941_22965__$1)){
var c__17608__auto___22966 = cljs.core.chunk_first.call(null,seq__22941_22965__$1);
var G__22967 = cljs.core.chunk_rest.call(null,seq__22941_22965__$1);
var G__22968 = c__17608__auto___22966;
var G__22969 = cljs.core.count.call(null,c__17608__auto___22966);
var G__22970 = (0);
seq__22941_22955 = G__22967;
chunk__22942_22956 = G__22968;
count__22943_22957 = G__22969;
i__22944_22958 = G__22970;
continue;
} else {
var f_22971 = cljs.core.first.call(null,seq__22941_22965__$1);
cljs.core.println.call(null,"  ",f_22971);

var G__22972 = cljs.core.next.call(null,seq__22941_22965__$1);
var G__22973 = null;
var G__22974 = (0);
var G__22975 = (0);
seq__22941_22955 = G__22972;
chunk__22942_22956 = G__22973;
count__22943_22957 = G__22974;
i__22944_22958 = G__22975;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22976 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16805__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22976);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22976)))?cljs.core.second.call(null,arglists_22976):arglists_22976));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__22945 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22946 = null;
var count__22947 = (0);
var i__22948 = (0);
while(true){
if((i__22948 < count__22947)){
var vec__22949 = cljs.core._nth.call(null,chunk__22946,i__22948);
var name = cljs.core.nth.call(null,vec__22949,(0),null);
var map__22950 = cljs.core.nth.call(null,vec__22949,(1),null);
var map__22950__$1 = ((((!((map__22950 == null)))?((((map__22950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22950):map__22950);
var doc = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22950__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22977 = seq__22945;
var G__22978 = chunk__22946;
var G__22979 = count__22947;
var G__22980 = (i__22948 + (1));
seq__22945 = G__22977;
chunk__22946 = G__22978;
count__22947 = G__22979;
i__22948 = G__22980;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22945);
if(temp__4425__auto__){
var seq__22945__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22945__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__22945__$1);
var G__22981 = cljs.core.chunk_rest.call(null,seq__22945__$1);
var G__22982 = c__17608__auto__;
var G__22983 = cljs.core.count.call(null,c__17608__auto__);
var G__22984 = (0);
seq__22945 = G__22981;
chunk__22946 = G__22982;
count__22947 = G__22983;
i__22948 = G__22984;
continue;
} else {
var vec__22952 = cljs.core.first.call(null,seq__22945__$1);
var name = cljs.core.nth.call(null,vec__22952,(0),null);
var map__22953 = cljs.core.nth.call(null,vec__22952,(1),null);
var map__22953__$1 = ((((!((map__22953 == null)))?((((map__22953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22953):map__22953);
var doc = cljs.core.get.call(null,map__22953__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22953__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22985 = cljs.core.next.call(null,seq__22945__$1);
var G__22986 = null;
var G__22987 = (0);
var G__22988 = (0);
seq__22945 = G__22985;
chunk__22946 = G__22986;
count__22947 = G__22987;
i__22948 = G__22988;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1454610166010