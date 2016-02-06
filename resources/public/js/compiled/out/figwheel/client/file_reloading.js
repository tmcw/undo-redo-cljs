// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16805__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16805__auto__){
return or__16805__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16805__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21915_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21915_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__21920 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21921 = null;
var count__21922 = (0);
var i__21923 = (0);
while(true){
if((i__21923 < count__21922)){
var n = cljs.core._nth.call(null,chunk__21921,i__21923);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21924 = seq__21920;
var G__21925 = chunk__21921;
var G__21926 = count__21922;
var G__21927 = (i__21923 + (1));
seq__21920 = G__21924;
chunk__21921 = G__21925;
count__21922 = G__21926;
i__21923 = G__21927;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21920);
if(temp__4425__auto__){
var seq__21920__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21920__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__21920__$1);
var G__21928 = cljs.core.chunk_rest.call(null,seq__21920__$1);
var G__21929 = c__17608__auto__;
var G__21930 = cljs.core.count.call(null,c__17608__auto__);
var G__21931 = (0);
seq__21920 = G__21928;
chunk__21921 = G__21929;
count__21922 = G__21930;
i__21923 = G__21931;
continue;
} else {
var n = cljs.core.first.call(null,seq__21920__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21932 = cljs.core.next.call(null,seq__21920__$1);
var G__21933 = null;
var G__21934 = (0);
var G__21935 = (0);
seq__21920 = G__21932;
chunk__21921 = G__21933;
count__21922 = G__21934;
i__21923 = G__21935;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__21974_21981 = cljs.core.seq.call(null,deps);
var chunk__21975_21982 = null;
var count__21976_21983 = (0);
var i__21977_21984 = (0);
while(true){
if((i__21977_21984 < count__21976_21983)){
var dep_21985 = cljs.core._nth.call(null,chunk__21975_21982,i__21977_21984);
topo_sort_helper_STAR_.call(null,dep_21985,(depth + (1)),state);

var G__21986 = seq__21974_21981;
var G__21987 = chunk__21975_21982;
var G__21988 = count__21976_21983;
var G__21989 = (i__21977_21984 + (1));
seq__21974_21981 = G__21986;
chunk__21975_21982 = G__21987;
count__21976_21983 = G__21988;
i__21977_21984 = G__21989;
continue;
} else {
var temp__4425__auto___21990 = cljs.core.seq.call(null,seq__21974_21981);
if(temp__4425__auto___21990){
var seq__21974_21991__$1 = temp__4425__auto___21990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21974_21991__$1)){
var c__17608__auto___21992 = cljs.core.chunk_first.call(null,seq__21974_21991__$1);
var G__21993 = cljs.core.chunk_rest.call(null,seq__21974_21991__$1);
var G__21994 = c__17608__auto___21992;
var G__21995 = cljs.core.count.call(null,c__17608__auto___21992);
var G__21996 = (0);
seq__21974_21981 = G__21993;
chunk__21975_21982 = G__21994;
count__21976_21983 = G__21995;
i__21977_21984 = G__21996;
continue;
} else {
var dep_21997 = cljs.core.first.call(null,seq__21974_21991__$1);
topo_sort_helper_STAR_.call(null,dep_21997,(depth + (1)),state);

var G__21998 = cljs.core.next.call(null,seq__21974_21991__$1);
var G__21999 = null;
var G__22000 = (0);
var G__22001 = (0);
seq__21974_21981 = G__21998;
chunk__21975_21982 = G__21999;
count__21976_21983 = G__22000;
i__21977_21984 = G__22001;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21978){
var vec__21980 = p__21978;
var x = cljs.core.nth.call(null,vec__21980,(0),null);
var xs = cljs.core.nthnext.call(null,vec__21980,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21980,x,xs,get_deps__$1){
return (function (p1__21936_SHARP_){
return clojure.set.difference.call(null,p1__21936_SHARP_,x);
});})(vec__21980,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22014 = cljs.core.seq.call(null,provides);
var chunk__22015 = null;
var count__22016 = (0);
var i__22017 = (0);
while(true){
if((i__22017 < count__22016)){
var prov = cljs.core._nth.call(null,chunk__22015,i__22017);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22018_22026 = cljs.core.seq.call(null,requires);
var chunk__22019_22027 = null;
var count__22020_22028 = (0);
var i__22021_22029 = (0);
while(true){
if((i__22021_22029 < count__22020_22028)){
var req_22030 = cljs.core._nth.call(null,chunk__22019_22027,i__22021_22029);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22030,prov);

var G__22031 = seq__22018_22026;
var G__22032 = chunk__22019_22027;
var G__22033 = count__22020_22028;
var G__22034 = (i__22021_22029 + (1));
seq__22018_22026 = G__22031;
chunk__22019_22027 = G__22032;
count__22020_22028 = G__22033;
i__22021_22029 = G__22034;
continue;
} else {
var temp__4425__auto___22035 = cljs.core.seq.call(null,seq__22018_22026);
if(temp__4425__auto___22035){
var seq__22018_22036__$1 = temp__4425__auto___22035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22018_22036__$1)){
var c__17608__auto___22037 = cljs.core.chunk_first.call(null,seq__22018_22036__$1);
var G__22038 = cljs.core.chunk_rest.call(null,seq__22018_22036__$1);
var G__22039 = c__17608__auto___22037;
var G__22040 = cljs.core.count.call(null,c__17608__auto___22037);
var G__22041 = (0);
seq__22018_22026 = G__22038;
chunk__22019_22027 = G__22039;
count__22020_22028 = G__22040;
i__22021_22029 = G__22041;
continue;
} else {
var req_22042 = cljs.core.first.call(null,seq__22018_22036__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22042,prov);

var G__22043 = cljs.core.next.call(null,seq__22018_22036__$1);
var G__22044 = null;
var G__22045 = (0);
var G__22046 = (0);
seq__22018_22026 = G__22043;
chunk__22019_22027 = G__22044;
count__22020_22028 = G__22045;
i__22021_22029 = G__22046;
continue;
}
} else {
}
}
break;
}

var G__22047 = seq__22014;
var G__22048 = chunk__22015;
var G__22049 = count__22016;
var G__22050 = (i__22017 + (1));
seq__22014 = G__22047;
chunk__22015 = G__22048;
count__22016 = G__22049;
i__22017 = G__22050;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22014);
if(temp__4425__auto__){
var seq__22014__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22014__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__22014__$1);
var G__22051 = cljs.core.chunk_rest.call(null,seq__22014__$1);
var G__22052 = c__17608__auto__;
var G__22053 = cljs.core.count.call(null,c__17608__auto__);
var G__22054 = (0);
seq__22014 = G__22051;
chunk__22015 = G__22052;
count__22016 = G__22053;
i__22017 = G__22054;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22014__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22022_22055 = cljs.core.seq.call(null,requires);
var chunk__22023_22056 = null;
var count__22024_22057 = (0);
var i__22025_22058 = (0);
while(true){
if((i__22025_22058 < count__22024_22057)){
var req_22059 = cljs.core._nth.call(null,chunk__22023_22056,i__22025_22058);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22059,prov);

var G__22060 = seq__22022_22055;
var G__22061 = chunk__22023_22056;
var G__22062 = count__22024_22057;
var G__22063 = (i__22025_22058 + (1));
seq__22022_22055 = G__22060;
chunk__22023_22056 = G__22061;
count__22024_22057 = G__22062;
i__22025_22058 = G__22063;
continue;
} else {
var temp__4425__auto___22064__$1 = cljs.core.seq.call(null,seq__22022_22055);
if(temp__4425__auto___22064__$1){
var seq__22022_22065__$1 = temp__4425__auto___22064__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22022_22065__$1)){
var c__17608__auto___22066 = cljs.core.chunk_first.call(null,seq__22022_22065__$1);
var G__22067 = cljs.core.chunk_rest.call(null,seq__22022_22065__$1);
var G__22068 = c__17608__auto___22066;
var G__22069 = cljs.core.count.call(null,c__17608__auto___22066);
var G__22070 = (0);
seq__22022_22055 = G__22067;
chunk__22023_22056 = G__22068;
count__22024_22057 = G__22069;
i__22025_22058 = G__22070;
continue;
} else {
var req_22071 = cljs.core.first.call(null,seq__22022_22065__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22071,prov);

var G__22072 = cljs.core.next.call(null,seq__22022_22065__$1);
var G__22073 = null;
var G__22074 = (0);
var G__22075 = (0);
seq__22022_22055 = G__22072;
chunk__22023_22056 = G__22073;
count__22024_22057 = G__22074;
i__22025_22058 = G__22075;
continue;
}
} else {
}
}
break;
}

var G__22076 = cljs.core.next.call(null,seq__22014__$1);
var G__22077 = null;
var G__22078 = (0);
var G__22079 = (0);
seq__22014 = G__22076;
chunk__22015 = G__22077;
count__22016 = G__22078;
i__22017 = G__22079;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22084_22088 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22085_22089 = null;
var count__22086_22090 = (0);
var i__22087_22091 = (0);
while(true){
if((i__22087_22091 < count__22086_22090)){
var ns_22092 = cljs.core._nth.call(null,chunk__22085_22089,i__22087_22091);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22092);

var G__22093 = seq__22084_22088;
var G__22094 = chunk__22085_22089;
var G__22095 = count__22086_22090;
var G__22096 = (i__22087_22091 + (1));
seq__22084_22088 = G__22093;
chunk__22085_22089 = G__22094;
count__22086_22090 = G__22095;
i__22087_22091 = G__22096;
continue;
} else {
var temp__4425__auto___22097 = cljs.core.seq.call(null,seq__22084_22088);
if(temp__4425__auto___22097){
var seq__22084_22098__$1 = temp__4425__auto___22097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22084_22098__$1)){
var c__17608__auto___22099 = cljs.core.chunk_first.call(null,seq__22084_22098__$1);
var G__22100 = cljs.core.chunk_rest.call(null,seq__22084_22098__$1);
var G__22101 = c__17608__auto___22099;
var G__22102 = cljs.core.count.call(null,c__17608__auto___22099);
var G__22103 = (0);
seq__22084_22088 = G__22100;
chunk__22085_22089 = G__22101;
count__22086_22090 = G__22102;
i__22087_22091 = G__22103;
continue;
} else {
var ns_22104 = cljs.core.first.call(null,seq__22084_22098__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22104);

var G__22105 = cljs.core.next.call(null,seq__22084_22098__$1);
var G__22106 = null;
var G__22107 = (0);
var G__22108 = (0);
seq__22084_22088 = G__22105;
chunk__22085_22089 = G__22106;
count__22086_22090 = G__22107;
i__22087_22091 = G__22108;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16805__auto__ = goog.require__;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22109__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22109 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22110__i = 0, G__22110__a = new Array(arguments.length -  0);
while (G__22110__i < G__22110__a.length) {G__22110__a[G__22110__i] = arguments[G__22110__i + 0]; ++G__22110__i;}
  args = new cljs.core.IndexedSeq(G__22110__a,0);
} 
return G__22109__delegate.call(this,args);};
G__22109.cljs$lang$maxFixedArity = 0;
G__22109.cljs$lang$applyTo = (function (arglist__22111){
var args = cljs.core.seq(arglist__22111);
return G__22109__delegate(args);
});
G__22109.cljs$core$IFn$_invoke$arity$variadic = G__22109__delegate;
return G__22109;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22113 = cljs.core._EQ_;
var expr__22114 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22113.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22114))){
var path_parts = ((function (pred__22113,expr__22114){
return (function (p1__22112_SHARP_){
return clojure.string.split.call(null,p1__22112_SHARP_,/[\/\\]/);
});})(pred__22113,expr__22114))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22113,expr__22114){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22116){if((e22116 instanceof Error)){
var e = e22116;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22116;

}
}})());
});
;})(path_parts,sep,root,pred__22113,expr__22114))
} else {
if(cljs.core.truth_(pred__22113.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22114))){
return ((function (pred__22113,expr__22114){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22113,expr__22114){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22113,expr__22114))
);

return deferred.addErrback(((function (deferred,pred__22113,expr__22114){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22113,expr__22114))
);
});
;})(pred__22113,expr__22114))
} else {
return ((function (pred__22113,expr__22114){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22113,expr__22114))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22117,callback){
var map__22120 = p__22117;
var map__22120__$1 = ((((!((map__22120 == null)))?((((map__22120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22120):map__22120);
var file_msg = map__22120__$1;
var request_url = cljs.core.get.call(null,map__22120__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22120,map__22120__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22120,map__22120__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_22144){
var state_val_22145 = (state_22144[(1)]);
if((state_val_22145 === (7))){
var inst_22140 = (state_22144[(2)]);
var state_22144__$1 = state_22144;
var statearr_22146_22166 = state_22144__$1;
(statearr_22146_22166[(2)] = inst_22140);

(statearr_22146_22166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22145 === (1))){
var state_22144__$1 = state_22144;
var statearr_22147_22167 = state_22144__$1;
(statearr_22147_22167[(2)] = null);

(statearr_22147_22167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22145 === (4))){
var inst_22124 = (state_22144[(7)]);
var inst_22124__$1 = (state_22144[(2)]);
var state_22144__$1 = (function (){var statearr_22148 = state_22144;
(statearr_22148[(7)] = inst_22124__$1);

return statearr_22148;
})();
if(cljs.core.truth_(inst_22124__$1)){
var statearr_22149_22168 = state_22144__$1;
(statearr_22149_22168[(1)] = (5));

} else {
var statearr_22150_22169 = state_22144__$1;
(statearr_22150_22169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22145 === (6))){
var state_22144__$1 = state_22144;
var statearr_22151_22170 = state_22144__$1;
(statearr_22151_22170[(2)] = null);

(statearr_22151_22170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22145 === (3))){
var inst_22142 = (state_22144[(2)]);
var state_22144__$1 = state_22144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22144__$1,inst_22142);
} else {
if((state_val_22145 === (2))){
var state_22144__$1 = state_22144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22144__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22145 === (11))){
var inst_22136 = (state_22144[(2)]);
var state_22144__$1 = (function (){var statearr_22152 = state_22144;
(statearr_22152[(8)] = inst_22136);

return statearr_22152;
})();
var statearr_22153_22171 = state_22144__$1;
(statearr_22153_22171[(2)] = null);

(statearr_22153_22171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22145 === (9))){
var inst_22128 = (state_22144[(9)]);
var inst_22130 = (state_22144[(10)]);
var inst_22132 = inst_22130.call(null,inst_22128);
var state_22144__$1 = state_22144;
var statearr_22154_22172 = state_22144__$1;
(statearr_22154_22172[(2)] = inst_22132);

(statearr_22154_22172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22145 === (5))){
var inst_22124 = (state_22144[(7)]);
var inst_22126 = figwheel.client.file_reloading.blocking_load.call(null,inst_22124);
var state_22144__$1 = state_22144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22144__$1,(8),inst_22126);
} else {
if((state_val_22145 === (10))){
var inst_22128 = (state_22144[(9)]);
var inst_22134 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22128);
var state_22144__$1 = state_22144;
var statearr_22155_22173 = state_22144__$1;
(statearr_22155_22173[(2)] = inst_22134);

(statearr_22155_22173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22145 === (8))){
var inst_22124 = (state_22144[(7)]);
var inst_22130 = (state_22144[(10)]);
var inst_22128 = (state_22144[(2)]);
var inst_22129 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22130__$1 = cljs.core.get.call(null,inst_22129,inst_22124);
var state_22144__$1 = (function (){var statearr_22156 = state_22144;
(statearr_22156[(9)] = inst_22128);

(statearr_22156[(10)] = inst_22130__$1);

return statearr_22156;
})();
if(cljs.core.truth_(inst_22130__$1)){
var statearr_22157_22174 = state_22144__$1;
(statearr_22157_22174[(1)] = (9));

} else {
var statearr_22158_22175 = state_22144__$1;
(statearr_22158_22175[(1)] = (10));

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
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18861__auto__ = null;
var figwheel$client$file_reloading$state_machine__18861__auto____0 = (function (){
var statearr_22162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22162[(0)] = figwheel$client$file_reloading$state_machine__18861__auto__);

(statearr_22162[(1)] = (1));

return statearr_22162;
});
var figwheel$client$file_reloading$state_machine__18861__auto____1 = (function (state_22144){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_22144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e22163){if((e22163 instanceof Object)){
var ex__18864__auto__ = e22163;
var statearr_22164_22176 = state_22144;
(statearr_22164_22176[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22177 = state_22144;
state_22144 = G__22177;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18861__auto__ = function(state_22144){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18861__auto____1.call(this,state_22144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18861__auto____0;
figwheel$client$file_reloading$state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18861__auto____1;
return figwheel$client$file_reloading$state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_22165 = f__18973__auto__.call(null);
(statearr_22165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_22165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22178,callback){
var map__22181 = p__22178;
var map__22181__$1 = ((((!((map__22181 == null)))?((((map__22181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22181):map__22181);
var file_msg = map__22181__$1;
var namespace = cljs.core.get.call(null,map__22181__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22181,map__22181__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22181,map__22181__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22183){
var map__22186 = p__22183;
var map__22186__$1 = ((((!((map__22186 == null)))?((((map__22186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22186):map__22186);
var file_msg = map__22186__$1;
var namespace = cljs.core.get.call(null,map__22186__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16793__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16793__auto__){
var or__16805__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var or__16805__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto____$1)){
return or__16805__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16793__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22188,callback){
var map__22191 = p__22188;
var map__22191__$1 = ((((!((map__22191 == null)))?((((map__22191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22191):map__22191);
var file_msg = map__22191__$1;
var request_url = cljs.core.get.call(null,map__22191__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22191__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18972__auto___22279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___22279,out){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___22279,out){
return (function (state_22261){
var state_val_22262 = (state_22261[(1)]);
if((state_val_22262 === (1))){
var inst_22239 = cljs.core.nth.call(null,files,(0),null);
var inst_22240 = cljs.core.nthnext.call(null,files,(1));
var inst_22241 = files;
var state_22261__$1 = (function (){var statearr_22263 = state_22261;
(statearr_22263[(7)] = inst_22239);

(statearr_22263[(8)] = inst_22240);

(statearr_22263[(9)] = inst_22241);

return statearr_22263;
})();
var statearr_22264_22280 = state_22261__$1;
(statearr_22264_22280[(2)] = null);

(statearr_22264_22280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22262 === (2))){
var inst_22244 = (state_22261[(10)]);
var inst_22241 = (state_22261[(9)]);
var inst_22244__$1 = cljs.core.nth.call(null,inst_22241,(0),null);
var inst_22245 = cljs.core.nthnext.call(null,inst_22241,(1));
var inst_22246 = (inst_22244__$1 == null);
var inst_22247 = cljs.core.not.call(null,inst_22246);
var state_22261__$1 = (function (){var statearr_22265 = state_22261;
(statearr_22265[(11)] = inst_22245);

(statearr_22265[(10)] = inst_22244__$1);

return statearr_22265;
})();
if(inst_22247){
var statearr_22266_22281 = state_22261__$1;
(statearr_22266_22281[(1)] = (4));

} else {
var statearr_22267_22282 = state_22261__$1;
(statearr_22267_22282[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22262 === (3))){
var inst_22259 = (state_22261[(2)]);
var state_22261__$1 = state_22261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22261__$1,inst_22259);
} else {
if((state_val_22262 === (4))){
var inst_22244 = (state_22261[(10)]);
var inst_22249 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22244);
var state_22261__$1 = state_22261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22261__$1,(7),inst_22249);
} else {
if((state_val_22262 === (5))){
var inst_22255 = cljs.core.async.close_BANG_.call(null,out);
var state_22261__$1 = state_22261;
var statearr_22268_22283 = state_22261__$1;
(statearr_22268_22283[(2)] = inst_22255);

(statearr_22268_22283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22262 === (6))){
var inst_22257 = (state_22261[(2)]);
var state_22261__$1 = state_22261;
var statearr_22269_22284 = state_22261__$1;
(statearr_22269_22284[(2)] = inst_22257);

(statearr_22269_22284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22262 === (7))){
var inst_22245 = (state_22261[(11)]);
var inst_22251 = (state_22261[(2)]);
var inst_22252 = cljs.core.async.put_BANG_.call(null,out,inst_22251);
var inst_22241 = inst_22245;
var state_22261__$1 = (function (){var statearr_22270 = state_22261;
(statearr_22270[(12)] = inst_22252);

(statearr_22270[(9)] = inst_22241);

return statearr_22270;
})();
var statearr_22271_22285 = state_22261__$1;
(statearr_22271_22285[(2)] = null);

(statearr_22271_22285[(1)] = (2));


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
});})(c__18972__auto___22279,out))
;
return ((function (switch__18860__auto__,c__18972__auto___22279,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18861__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18861__auto____0 = (function (){
var statearr_22275 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22275[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18861__auto__);

(statearr_22275[(1)] = (1));

return statearr_22275;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18861__auto____1 = (function (state_22261){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_22261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e22276){if((e22276 instanceof Object)){
var ex__18864__auto__ = e22276;
var statearr_22277_22286 = state_22261;
(statearr_22277_22286[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22287 = state_22261;
state_22261 = G__22287;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18861__auto__ = function(state_22261){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18861__auto____1.call(this,state_22261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18861__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18861__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___22279,out))
})();
var state__18974__auto__ = (function (){var statearr_22278 = f__18973__auto__.call(null);
(statearr_22278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___22279);

return statearr_22278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___22279,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22288,opts){
var map__22292 = p__22288;
var map__22292__$1 = ((((!((map__22292 == null)))?((((map__22292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22292):map__22292);
var eval_body__$1 = cljs.core.get.call(null,map__22292__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22292__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16793__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16793__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16793__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22294){var e = e22294;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22295_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22295_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22300){
var vec__22301 = p__22300;
var k = cljs.core.nth.call(null,vec__22301,(0),null);
var v = cljs.core.nth.call(null,vec__22301,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22302){
var vec__22303 = p__22302;
var k = cljs.core.nth.call(null,vec__22303,(0),null);
var v = cljs.core.nth.call(null,vec__22303,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22307,p__22308){
var map__22555 = p__22307;
var map__22555__$1 = ((((!((map__22555 == null)))?((((map__22555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22555):map__22555);
var opts = map__22555__$1;
var before_jsload = cljs.core.get.call(null,map__22555__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22555__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22555__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22556 = p__22308;
var map__22556__$1 = ((((!((map__22556 == null)))?((((map__22556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22556):map__22556);
var msg = map__22556__$1;
var files = cljs.core.get.call(null,map__22556__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22556__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22556__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22709){
var state_val_22710 = (state_22709[(1)]);
if((state_val_22710 === (7))){
var inst_22571 = (state_22709[(7)]);
var inst_22572 = (state_22709[(8)]);
var inst_22570 = (state_22709[(9)]);
var inst_22573 = (state_22709[(10)]);
var inst_22578 = cljs.core._nth.call(null,inst_22571,inst_22573);
var inst_22579 = figwheel.client.file_reloading.eval_body.call(null,inst_22578,opts);
var inst_22580 = (inst_22573 + (1));
var tmp22711 = inst_22571;
var tmp22712 = inst_22572;
var tmp22713 = inst_22570;
var inst_22570__$1 = tmp22713;
var inst_22571__$1 = tmp22711;
var inst_22572__$1 = tmp22712;
var inst_22573__$1 = inst_22580;
var state_22709__$1 = (function (){var statearr_22714 = state_22709;
(statearr_22714[(11)] = inst_22579);

(statearr_22714[(7)] = inst_22571__$1);

(statearr_22714[(8)] = inst_22572__$1);

(statearr_22714[(9)] = inst_22570__$1);

(statearr_22714[(10)] = inst_22573__$1);

return statearr_22714;
})();
var statearr_22715_22801 = state_22709__$1;
(statearr_22715_22801[(2)] = null);

(statearr_22715_22801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (20))){
var inst_22613 = (state_22709[(12)]);
var inst_22621 = figwheel.client.file_reloading.sort_files.call(null,inst_22613);
var state_22709__$1 = state_22709;
var statearr_22716_22802 = state_22709__$1;
(statearr_22716_22802[(2)] = inst_22621);

(statearr_22716_22802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (27))){
var state_22709__$1 = state_22709;
var statearr_22717_22803 = state_22709__$1;
(statearr_22717_22803[(2)] = null);

(statearr_22717_22803[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (1))){
var inst_22562 = (state_22709[(13)]);
var inst_22559 = before_jsload.call(null,files);
var inst_22560 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22561 = (function (){return ((function (inst_22562,inst_22559,inst_22560,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22304_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22304_SHARP_);
});
;})(inst_22562,inst_22559,inst_22560,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22562__$1 = cljs.core.filter.call(null,inst_22561,files);
var inst_22563 = cljs.core.not_empty.call(null,inst_22562__$1);
var state_22709__$1 = (function (){var statearr_22718 = state_22709;
(statearr_22718[(14)] = inst_22559);

(statearr_22718[(13)] = inst_22562__$1);

(statearr_22718[(15)] = inst_22560);

return statearr_22718;
})();
if(cljs.core.truth_(inst_22563)){
var statearr_22719_22804 = state_22709__$1;
(statearr_22719_22804[(1)] = (2));

} else {
var statearr_22720_22805 = state_22709__$1;
(statearr_22720_22805[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (24))){
var state_22709__$1 = state_22709;
var statearr_22721_22806 = state_22709__$1;
(statearr_22721_22806[(2)] = null);

(statearr_22721_22806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (39))){
var inst_22663 = (state_22709[(16)]);
var state_22709__$1 = state_22709;
var statearr_22722_22807 = state_22709__$1;
(statearr_22722_22807[(2)] = inst_22663);

(statearr_22722_22807[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (46))){
var inst_22704 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
var statearr_22723_22808 = state_22709__$1;
(statearr_22723_22808[(2)] = inst_22704);

(statearr_22723_22808[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (4))){
var inst_22607 = (state_22709[(2)]);
var inst_22608 = cljs.core.List.EMPTY;
var inst_22609 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22608);
var inst_22610 = (function (){return ((function (inst_22607,inst_22608,inst_22609,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22305_SHARP_){
var and__16793__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22305_SHARP_);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22305_SHARP_));
} else {
return and__16793__auto__;
}
});
;})(inst_22607,inst_22608,inst_22609,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22611 = cljs.core.filter.call(null,inst_22610,files);
var inst_22612 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22613 = cljs.core.concat.call(null,inst_22611,inst_22612);
var state_22709__$1 = (function (){var statearr_22724 = state_22709;
(statearr_22724[(17)] = inst_22609);

(statearr_22724[(12)] = inst_22613);

(statearr_22724[(18)] = inst_22607);

return statearr_22724;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22725_22809 = state_22709__$1;
(statearr_22725_22809[(1)] = (16));

} else {
var statearr_22726_22810 = state_22709__$1;
(statearr_22726_22810[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (15))){
var inst_22597 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
var statearr_22727_22811 = state_22709__$1;
(statearr_22727_22811[(2)] = inst_22597);

(statearr_22727_22811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (21))){
var inst_22623 = (state_22709[(19)]);
var inst_22623__$1 = (state_22709[(2)]);
var inst_22624 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22623__$1);
var state_22709__$1 = (function (){var statearr_22728 = state_22709;
(statearr_22728[(19)] = inst_22623__$1);

return statearr_22728;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22709__$1,(22),inst_22624);
} else {
if((state_val_22710 === (31))){
var inst_22707 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22709__$1,inst_22707);
} else {
if((state_val_22710 === (32))){
var inst_22663 = (state_22709[(16)]);
var inst_22668 = inst_22663.cljs$lang$protocol_mask$partition0$;
var inst_22669 = (inst_22668 & (64));
var inst_22670 = inst_22663.cljs$core$ISeq$;
var inst_22671 = (inst_22669) || (inst_22670);
var state_22709__$1 = state_22709;
if(cljs.core.truth_(inst_22671)){
var statearr_22729_22812 = state_22709__$1;
(statearr_22729_22812[(1)] = (35));

} else {
var statearr_22730_22813 = state_22709__$1;
(statearr_22730_22813[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (40))){
var inst_22684 = (state_22709[(20)]);
var inst_22683 = (state_22709[(2)]);
var inst_22684__$1 = cljs.core.get.call(null,inst_22683,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22685 = cljs.core.get.call(null,inst_22683,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22686 = cljs.core.not_empty.call(null,inst_22684__$1);
var state_22709__$1 = (function (){var statearr_22731 = state_22709;
(statearr_22731[(21)] = inst_22685);

(statearr_22731[(20)] = inst_22684__$1);

return statearr_22731;
})();
if(cljs.core.truth_(inst_22686)){
var statearr_22732_22814 = state_22709__$1;
(statearr_22732_22814[(1)] = (41));

} else {
var statearr_22733_22815 = state_22709__$1;
(statearr_22733_22815[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (33))){
var state_22709__$1 = state_22709;
var statearr_22734_22816 = state_22709__$1;
(statearr_22734_22816[(2)] = false);

(statearr_22734_22816[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (13))){
var inst_22583 = (state_22709[(22)]);
var inst_22587 = cljs.core.chunk_first.call(null,inst_22583);
var inst_22588 = cljs.core.chunk_rest.call(null,inst_22583);
var inst_22589 = cljs.core.count.call(null,inst_22587);
var inst_22570 = inst_22588;
var inst_22571 = inst_22587;
var inst_22572 = inst_22589;
var inst_22573 = (0);
var state_22709__$1 = (function (){var statearr_22735 = state_22709;
(statearr_22735[(7)] = inst_22571);

(statearr_22735[(8)] = inst_22572);

(statearr_22735[(9)] = inst_22570);

(statearr_22735[(10)] = inst_22573);

return statearr_22735;
})();
var statearr_22736_22817 = state_22709__$1;
(statearr_22736_22817[(2)] = null);

(statearr_22736_22817[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (22))){
var inst_22626 = (state_22709[(23)]);
var inst_22623 = (state_22709[(19)]);
var inst_22627 = (state_22709[(24)]);
var inst_22631 = (state_22709[(25)]);
var inst_22626__$1 = (state_22709[(2)]);
var inst_22627__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22626__$1);
var inst_22628 = (function (){var all_files = inst_22623;
var res_SINGLEQUOTE_ = inst_22626__$1;
var res = inst_22627__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22626,inst_22623,inst_22627,inst_22631,inst_22626__$1,inst_22627__$1,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22306_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22306_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22626,inst_22623,inst_22627,inst_22631,inst_22626__$1,inst_22627__$1,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22629 = cljs.core.filter.call(null,inst_22628,inst_22626__$1);
var inst_22630 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22631__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22630);
var inst_22632 = cljs.core.not_empty.call(null,inst_22631__$1);
var state_22709__$1 = (function (){var statearr_22737 = state_22709;
(statearr_22737[(26)] = inst_22629);

(statearr_22737[(23)] = inst_22626__$1);

(statearr_22737[(24)] = inst_22627__$1);

(statearr_22737[(25)] = inst_22631__$1);

return statearr_22737;
})();
if(cljs.core.truth_(inst_22632)){
var statearr_22738_22818 = state_22709__$1;
(statearr_22738_22818[(1)] = (23));

} else {
var statearr_22739_22819 = state_22709__$1;
(statearr_22739_22819[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (36))){
var state_22709__$1 = state_22709;
var statearr_22740_22820 = state_22709__$1;
(statearr_22740_22820[(2)] = false);

(statearr_22740_22820[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (41))){
var inst_22684 = (state_22709[(20)]);
var inst_22688 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22689 = cljs.core.map.call(null,inst_22688,inst_22684);
var inst_22690 = cljs.core.pr_str.call(null,inst_22689);
var inst_22691 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22690)].join('');
var inst_22692 = figwheel.client.utils.log.call(null,inst_22691);
var state_22709__$1 = state_22709;
var statearr_22741_22821 = state_22709__$1;
(statearr_22741_22821[(2)] = inst_22692);

(statearr_22741_22821[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (43))){
var inst_22685 = (state_22709[(21)]);
var inst_22695 = (state_22709[(2)]);
var inst_22696 = cljs.core.not_empty.call(null,inst_22685);
var state_22709__$1 = (function (){var statearr_22742 = state_22709;
(statearr_22742[(27)] = inst_22695);

return statearr_22742;
})();
if(cljs.core.truth_(inst_22696)){
var statearr_22743_22822 = state_22709__$1;
(statearr_22743_22822[(1)] = (44));

} else {
var statearr_22744_22823 = state_22709__$1;
(statearr_22744_22823[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (29))){
var inst_22629 = (state_22709[(26)]);
var inst_22626 = (state_22709[(23)]);
var inst_22623 = (state_22709[(19)]);
var inst_22627 = (state_22709[(24)]);
var inst_22631 = (state_22709[(25)]);
var inst_22663 = (state_22709[(16)]);
var inst_22659 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22662 = (function (){var all_files = inst_22623;
var res_SINGLEQUOTE_ = inst_22626;
var res = inst_22627;
var files_not_loaded = inst_22629;
var dependencies_that_loaded = inst_22631;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22626,inst_22623,inst_22627,inst_22631,inst_22663,inst_22659,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22661){
var map__22745 = p__22661;
var map__22745__$1 = ((((!((map__22745 == null)))?((((map__22745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22745):map__22745);
var namespace = cljs.core.get.call(null,map__22745__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22626,inst_22623,inst_22627,inst_22631,inst_22663,inst_22659,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22663__$1 = cljs.core.group_by.call(null,inst_22662,inst_22629);
var inst_22665 = (inst_22663__$1 == null);
var inst_22666 = cljs.core.not.call(null,inst_22665);
var state_22709__$1 = (function (){var statearr_22747 = state_22709;
(statearr_22747[(28)] = inst_22659);

(statearr_22747[(16)] = inst_22663__$1);

return statearr_22747;
})();
if(inst_22666){
var statearr_22748_22824 = state_22709__$1;
(statearr_22748_22824[(1)] = (32));

} else {
var statearr_22749_22825 = state_22709__$1;
(statearr_22749_22825[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (44))){
var inst_22685 = (state_22709[(21)]);
var inst_22698 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22685);
var inst_22699 = cljs.core.pr_str.call(null,inst_22698);
var inst_22700 = [cljs.core.str("not required: "),cljs.core.str(inst_22699)].join('');
var inst_22701 = figwheel.client.utils.log.call(null,inst_22700);
var state_22709__$1 = state_22709;
var statearr_22750_22826 = state_22709__$1;
(statearr_22750_22826[(2)] = inst_22701);

(statearr_22750_22826[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (6))){
var inst_22604 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
var statearr_22751_22827 = state_22709__$1;
(statearr_22751_22827[(2)] = inst_22604);

(statearr_22751_22827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (28))){
var inst_22629 = (state_22709[(26)]);
var inst_22656 = (state_22709[(2)]);
var inst_22657 = cljs.core.not_empty.call(null,inst_22629);
var state_22709__$1 = (function (){var statearr_22752 = state_22709;
(statearr_22752[(29)] = inst_22656);

return statearr_22752;
})();
if(cljs.core.truth_(inst_22657)){
var statearr_22753_22828 = state_22709__$1;
(statearr_22753_22828[(1)] = (29));

} else {
var statearr_22754_22829 = state_22709__$1;
(statearr_22754_22829[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (25))){
var inst_22627 = (state_22709[(24)]);
var inst_22643 = (state_22709[(2)]);
var inst_22644 = cljs.core.not_empty.call(null,inst_22627);
var state_22709__$1 = (function (){var statearr_22755 = state_22709;
(statearr_22755[(30)] = inst_22643);

return statearr_22755;
})();
if(cljs.core.truth_(inst_22644)){
var statearr_22756_22830 = state_22709__$1;
(statearr_22756_22830[(1)] = (26));

} else {
var statearr_22757_22831 = state_22709__$1;
(statearr_22757_22831[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (34))){
var inst_22678 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
if(cljs.core.truth_(inst_22678)){
var statearr_22758_22832 = state_22709__$1;
(statearr_22758_22832[(1)] = (38));

} else {
var statearr_22759_22833 = state_22709__$1;
(statearr_22759_22833[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (17))){
var state_22709__$1 = state_22709;
var statearr_22760_22834 = state_22709__$1;
(statearr_22760_22834[(2)] = recompile_dependents);

(statearr_22760_22834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (3))){
var state_22709__$1 = state_22709;
var statearr_22761_22835 = state_22709__$1;
(statearr_22761_22835[(2)] = null);

(statearr_22761_22835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (12))){
var inst_22600 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
var statearr_22762_22836 = state_22709__$1;
(statearr_22762_22836[(2)] = inst_22600);

(statearr_22762_22836[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (2))){
var inst_22562 = (state_22709[(13)]);
var inst_22569 = cljs.core.seq.call(null,inst_22562);
var inst_22570 = inst_22569;
var inst_22571 = null;
var inst_22572 = (0);
var inst_22573 = (0);
var state_22709__$1 = (function (){var statearr_22763 = state_22709;
(statearr_22763[(7)] = inst_22571);

(statearr_22763[(8)] = inst_22572);

(statearr_22763[(9)] = inst_22570);

(statearr_22763[(10)] = inst_22573);

return statearr_22763;
})();
var statearr_22764_22837 = state_22709__$1;
(statearr_22764_22837[(2)] = null);

(statearr_22764_22837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (23))){
var inst_22629 = (state_22709[(26)]);
var inst_22626 = (state_22709[(23)]);
var inst_22623 = (state_22709[(19)]);
var inst_22627 = (state_22709[(24)]);
var inst_22631 = (state_22709[(25)]);
var inst_22634 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22636 = (function (){var all_files = inst_22623;
var res_SINGLEQUOTE_ = inst_22626;
var res = inst_22627;
var files_not_loaded = inst_22629;
var dependencies_that_loaded = inst_22631;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22626,inst_22623,inst_22627,inst_22631,inst_22634,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22635){
var map__22765 = p__22635;
var map__22765__$1 = ((((!((map__22765 == null)))?((((map__22765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22765):map__22765);
var request_url = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22626,inst_22623,inst_22627,inst_22631,inst_22634,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22637 = cljs.core.reverse.call(null,inst_22631);
var inst_22638 = cljs.core.map.call(null,inst_22636,inst_22637);
var inst_22639 = cljs.core.pr_str.call(null,inst_22638);
var inst_22640 = figwheel.client.utils.log.call(null,inst_22639);
var state_22709__$1 = (function (){var statearr_22767 = state_22709;
(statearr_22767[(31)] = inst_22634);

return statearr_22767;
})();
var statearr_22768_22838 = state_22709__$1;
(statearr_22768_22838[(2)] = inst_22640);

(statearr_22768_22838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (35))){
var state_22709__$1 = state_22709;
var statearr_22769_22839 = state_22709__$1;
(statearr_22769_22839[(2)] = true);

(statearr_22769_22839[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (19))){
var inst_22613 = (state_22709[(12)]);
var inst_22619 = figwheel.client.file_reloading.expand_files.call(null,inst_22613);
var state_22709__$1 = state_22709;
var statearr_22770_22840 = state_22709__$1;
(statearr_22770_22840[(2)] = inst_22619);

(statearr_22770_22840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (11))){
var state_22709__$1 = state_22709;
var statearr_22771_22841 = state_22709__$1;
(statearr_22771_22841[(2)] = null);

(statearr_22771_22841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (9))){
var inst_22602 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
var statearr_22772_22842 = state_22709__$1;
(statearr_22772_22842[(2)] = inst_22602);

(statearr_22772_22842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (5))){
var inst_22572 = (state_22709[(8)]);
var inst_22573 = (state_22709[(10)]);
var inst_22575 = (inst_22573 < inst_22572);
var inst_22576 = inst_22575;
var state_22709__$1 = state_22709;
if(cljs.core.truth_(inst_22576)){
var statearr_22773_22843 = state_22709__$1;
(statearr_22773_22843[(1)] = (7));

} else {
var statearr_22774_22844 = state_22709__$1;
(statearr_22774_22844[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (14))){
var inst_22583 = (state_22709[(22)]);
var inst_22592 = cljs.core.first.call(null,inst_22583);
var inst_22593 = figwheel.client.file_reloading.eval_body.call(null,inst_22592,opts);
var inst_22594 = cljs.core.next.call(null,inst_22583);
var inst_22570 = inst_22594;
var inst_22571 = null;
var inst_22572 = (0);
var inst_22573 = (0);
var state_22709__$1 = (function (){var statearr_22775 = state_22709;
(statearr_22775[(7)] = inst_22571);

(statearr_22775[(32)] = inst_22593);

(statearr_22775[(8)] = inst_22572);

(statearr_22775[(9)] = inst_22570);

(statearr_22775[(10)] = inst_22573);

return statearr_22775;
})();
var statearr_22776_22845 = state_22709__$1;
(statearr_22776_22845[(2)] = null);

(statearr_22776_22845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (45))){
var state_22709__$1 = state_22709;
var statearr_22777_22846 = state_22709__$1;
(statearr_22777_22846[(2)] = null);

(statearr_22777_22846[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (26))){
var inst_22629 = (state_22709[(26)]);
var inst_22626 = (state_22709[(23)]);
var inst_22623 = (state_22709[(19)]);
var inst_22627 = (state_22709[(24)]);
var inst_22631 = (state_22709[(25)]);
var inst_22646 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22648 = (function (){var all_files = inst_22623;
var res_SINGLEQUOTE_ = inst_22626;
var res = inst_22627;
var files_not_loaded = inst_22629;
var dependencies_that_loaded = inst_22631;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22626,inst_22623,inst_22627,inst_22631,inst_22646,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22647){
var map__22778 = p__22647;
var map__22778__$1 = ((((!((map__22778 == null)))?((((map__22778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22778):map__22778);
var namespace = cljs.core.get.call(null,map__22778__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22778__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22626,inst_22623,inst_22627,inst_22631,inst_22646,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22649 = cljs.core.map.call(null,inst_22648,inst_22627);
var inst_22650 = cljs.core.pr_str.call(null,inst_22649);
var inst_22651 = figwheel.client.utils.log.call(null,inst_22650);
var inst_22652 = (function (){var all_files = inst_22623;
var res_SINGLEQUOTE_ = inst_22626;
var res = inst_22627;
var files_not_loaded = inst_22629;
var dependencies_that_loaded = inst_22631;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22626,inst_22623,inst_22627,inst_22631,inst_22646,inst_22648,inst_22649,inst_22650,inst_22651,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22629,inst_22626,inst_22623,inst_22627,inst_22631,inst_22646,inst_22648,inst_22649,inst_22650,inst_22651,state_val_22710,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22653 = setTimeout(inst_22652,(10));
var state_22709__$1 = (function (){var statearr_22780 = state_22709;
(statearr_22780[(33)] = inst_22646);

(statearr_22780[(34)] = inst_22651);

return statearr_22780;
})();
var statearr_22781_22847 = state_22709__$1;
(statearr_22781_22847[(2)] = inst_22653);

(statearr_22781_22847[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (16))){
var state_22709__$1 = state_22709;
var statearr_22782_22848 = state_22709__$1;
(statearr_22782_22848[(2)] = reload_dependents);

(statearr_22782_22848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (38))){
var inst_22663 = (state_22709[(16)]);
var inst_22680 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22663);
var state_22709__$1 = state_22709;
var statearr_22783_22849 = state_22709__$1;
(statearr_22783_22849[(2)] = inst_22680);

(statearr_22783_22849[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (30))){
var state_22709__$1 = state_22709;
var statearr_22784_22850 = state_22709__$1;
(statearr_22784_22850[(2)] = null);

(statearr_22784_22850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (10))){
var inst_22583 = (state_22709[(22)]);
var inst_22585 = cljs.core.chunked_seq_QMARK_.call(null,inst_22583);
var state_22709__$1 = state_22709;
if(inst_22585){
var statearr_22785_22851 = state_22709__$1;
(statearr_22785_22851[(1)] = (13));

} else {
var statearr_22786_22852 = state_22709__$1;
(statearr_22786_22852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (18))){
var inst_22617 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
if(cljs.core.truth_(inst_22617)){
var statearr_22787_22853 = state_22709__$1;
(statearr_22787_22853[(1)] = (19));

} else {
var statearr_22788_22854 = state_22709__$1;
(statearr_22788_22854[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (42))){
var state_22709__$1 = state_22709;
var statearr_22789_22855 = state_22709__$1;
(statearr_22789_22855[(2)] = null);

(statearr_22789_22855[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (37))){
var inst_22675 = (state_22709[(2)]);
var state_22709__$1 = state_22709;
var statearr_22790_22856 = state_22709__$1;
(statearr_22790_22856[(2)] = inst_22675);

(statearr_22790_22856[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22710 === (8))){
var inst_22583 = (state_22709[(22)]);
var inst_22570 = (state_22709[(9)]);
var inst_22583__$1 = cljs.core.seq.call(null,inst_22570);
var state_22709__$1 = (function (){var statearr_22791 = state_22709;
(statearr_22791[(22)] = inst_22583__$1);

return statearr_22791;
})();
if(inst_22583__$1){
var statearr_22792_22857 = state_22709__$1;
(statearr_22792_22857[(1)] = (10));

} else {
var statearr_22793_22858 = state_22709__$1;
(statearr_22793_22858[(1)] = (11));

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
}
});})(c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18860__auto__,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18861__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18861__auto____0 = (function (){
var statearr_22797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22797[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18861__auto__);

(statearr_22797[(1)] = (1));

return statearr_22797;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18861__auto____1 = (function (state_22709){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_22709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e22798){if((e22798 instanceof Object)){
var ex__18864__auto__ = e22798;
var statearr_22799_22859 = state_22709;
(statearr_22799_22859[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22860 = state_22709;
state_22709 = G__22860;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18861__auto__ = function(state_22709){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18861__auto____1.call(this,state_22709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18861__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18861__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18974__auto__ = (function (){var statearr_22800 = f__18973__auto__.call(null);
(statearr_22800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_22800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__,map__22555,map__22555__$1,opts,before_jsload,on_jsload,reload_dependents,map__22556,map__22556__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18972__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22863,link){
var map__22866 = p__22863;
var map__22866__$1 = ((((!((map__22866 == null)))?((((map__22866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22866):map__22866);
var file = cljs.core.get.call(null,map__22866__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__22866,map__22866__$1,file){
return (function (p1__22861_SHARP_,p2__22862_SHARP_){
if(cljs.core._EQ_.call(null,p1__22861_SHARP_,p2__22862_SHARP_)){
return p1__22861_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__22866,map__22866__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22872){
var map__22873 = p__22872;
var map__22873__$1 = ((((!((map__22873 == null)))?((((map__22873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22873):map__22873);
var match_length = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22873__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22868_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22868_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args22875 = [];
var len__17863__auto___22878 = arguments.length;
var i__17864__auto___22879 = (0);
while(true){
if((i__17864__auto___22879 < len__17863__auto___22878)){
args22875.push((arguments[i__17864__auto___22879]));

var G__22880 = (i__17864__auto___22879 + (1));
i__17864__auto___22879 = G__22880;
continue;
} else {
}
break;
}

var G__22877 = args22875.length;
switch (G__22877) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22875.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22882_SHARP_,p2__22883_SHARP_){
return cljs.core.assoc.call(null,p1__22882_SHARP_,cljs.core.get.call(null,p2__22883_SHARP_,key),p2__22883_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22884){
var map__22887 = p__22884;
var map__22887__$1 = ((((!((map__22887 == null)))?((((map__22887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22887):map__22887);
var f_data = map__22887__$1;
var file = cljs.core.get.call(null,map__22887__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22889,files_msg){
var map__22896 = p__22889;
var map__22896__$1 = ((((!((map__22896 == null)))?((((map__22896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22896):map__22896);
var opts = map__22896__$1;
var on_cssload = cljs.core.get.call(null,map__22896__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22898_22902 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22899_22903 = null;
var count__22900_22904 = (0);
var i__22901_22905 = (0);
while(true){
if((i__22901_22905 < count__22900_22904)){
var f_22906 = cljs.core._nth.call(null,chunk__22899_22903,i__22901_22905);
figwheel.client.file_reloading.reload_css_file.call(null,f_22906);

var G__22907 = seq__22898_22902;
var G__22908 = chunk__22899_22903;
var G__22909 = count__22900_22904;
var G__22910 = (i__22901_22905 + (1));
seq__22898_22902 = G__22907;
chunk__22899_22903 = G__22908;
count__22900_22904 = G__22909;
i__22901_22905 = G__22910;
continue;
} else {
var temp__4425__auto___22911 = cljs.core.seq.call(null,seq__22898_22902);
if(temp__4425__auto___22911){
var seq__22898_22912__$1 = temp__4425__auto___22911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22898_22912__$1)){
var c__17608__auto___22913 = cljs.core.chunk_first.call(null,seq__22898_22912__$1);
var G__22914 = cljs.core.chunk_rest.call(null,seq__22898_22912__$1);
var G__22915 = c__17608__auto___22913;
var G__22916 = cljs.core.count.call(null,c__17608__auto___22913);
var G__22917 = (0);
seq__22898_22902 = G__22914;
chunk__22899_22903 = G__22915;
count__22900_22904 = G__22916;
i__22901_22905 = G__22917;
continue;
} else {
var f_22918 = cljs.core.first.call(null,seq__22898_22912__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22918);

var G__22919 = cljs.core.next.call(null,seq__22898_22912__$1);
var G__22920 = null;
var G__22921 = (0);
var G__22922 = (0);
seq__22898_22902 = G__22919;
chunk__22899_22903 = G__22920;
count__22900_22904 = G__22921;
i__22901_22905 = G__22922;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__22896,map__22896__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__22896,map__22896__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1454610165910