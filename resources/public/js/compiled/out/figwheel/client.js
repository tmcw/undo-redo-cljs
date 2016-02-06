// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23360 = cljs.core._EQ_;
var expr__23361 = (function (){var or__16805__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23364){if((e23364 instanceof Error)){
var e = e23364;
return false;
} else {
throw e23364;

}
}})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23360.call(null,"true",expr__23361))){
return true;
} else {
if(cljs.core.truth_(pred__23360.call(null,"false",expr__23361))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23361)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23366){if((e23366 instanceof Error)){
var e = e23366;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23366;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17870__auto__ = [];
var len__17863__auto___23368 = arguments.length;
var i__17864__auto___23369 = (0);
while(true){
if((i__17864__auto___23369 < len__17863__auto___23368)){
args__17870__auto__.push((arguments[i__17864__auto___23369]));

var G__23370 = (i__17864__auto___23369 + (1));
i__17864__auto___23369 = G__23370;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23367){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23367));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23371){
var map__23374 = p__23371;
var map__23374__$1 = ((((!((map__23374 == null)))?((((map__23374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23374):map__23374);
var message = cljs.core.get.call(null,map__23374__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23374__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16805__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16793__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16793__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16793__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18972__auto___23536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___23536,ch){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___23536,ch){
return (function (state_23505){
var state_val_23506 = (state_23505[(1)]);
if((state_val_23506 === (7))){
var inst_23501 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
var statearr_23507_23537 = state_23505__$1;
(statearr_23507_23537[(2)] = inst_23501);

(statearr_23507_23537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (1))){
var state_23505__$1 = state_23505;
var statearr_23508_23538 = state_23505__$1;
(statearr_23508_23538[(2)] = null);

(statearr_23508_23538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (4))){
var inst_23458 = (state_23505[(7)]);
var inst_23458__$1 = (state_23505[(2)]);
var state_23505__$1 = (function (){var statearr_23509 = state_23505;
(statearr_23509[(7)] = inst_23458__$1);

return statearr_23509;
})();
if(cljs.core.truth_(inst_23458__$1)){
var statearr_23510_23539 = state_23505__$1;
(statearr_23510_23539[(1)] = (5));

} else {
var statearr_23511_23540 = state_23505__$1;
(statearr_23511_23540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (15))){
var inst_23465 = (state_23505[(8)]);
var inst_23480 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23465);
var inst_23481 = cljs.core.first.call(null,inst_23480);
var inst_23482 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23481);
var inst_23483 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23482)].join('');
var inst_23484 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23483);
var state_23505__$1 = state_23505;
var statearr_23512_23541 = state_23505__$1;
(statearr_23512_23541[(2)] = inst_23484);

(statearr_23512_23541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (13))){
var inst_23489 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
var statearr_23513_23542 = state_23505__$1;
(statearr_23513_23542[(2)] = inst_23489);

(statearr_23513_23542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (6))){
var state_23505__$1 = state_23505;
var statearr_23514_23543 = state_23505__$1;
(statearr_23514_23543[(2)] = null);

(statearr_23514_23543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (17))){
var inst_23487 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
var statearr_23515_23544 = state_23505__$1;
(statearr_23515_23544[(2)] = inst_23487);

(statearr_23515_23544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (3))){
var inst_23503 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23505__$1,inst_23503);
} else {
if((state_val_23506 === (12))){
var inst_23464 = (state_23505[(9)]);
var inst_23478 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23464,opts);
var state_23505__$1 = state_23505;
if(cljs.core.truth_(inst_23478)){
var statearr_23516_23545 = state_23505__$1;
(statearr_23516_23545[(1)] = (15));

} else {
var statearr_23517_23546 = state_23505__$1;
(statearr_23517_23546[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (2))){
var state_23505__$1 = state_23505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23505__$1,(4),ch);
} else {
if((state_val_23506 === (11))){
var inst_23465 = (state_23505[(8)]);
var inst_23470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23471 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23465);
var inst_23472 = cljs.core.async.timeout.call(null,(1000));
var inst_23473 = [inst_23471,inst_23472];
var inst_23474 = (new cljs.core.PersistentVector(null,2,(5),inst_23470,inst_23473,null));
var state_23505__$1 = state_23505;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23505__$1,(14),inst_23474);
} else {
if((state_val_23506 === (9))){
var inst_23465 = (state_23505[(8)]);
var inst_23491 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23492 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23465);
var inst_23493 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23492);
var inst_23494 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23493)].join('');
var inst_23495 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23494);
var state_23505__$1 = (function (){var statearr_23518 = state_23505;
(statearr_23518[(10)] = inst_23491);

return statearr_23518;
})();
var statearr_23519_23547 = state_23505__$1;
(statearr_23519_23547[(2)] = inst_23495);

(statearr_23519_23547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (5))){
var inst_23458 = (state_23505[(7)]);
var inst_23460 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23461 = (new cljs.core.PersistentArrayMap(null,2,inst_23460,null));
var inst_23462 = (new cljs.core.PersistentHashSet(null,inst_23461,null));
var inst_23463 = figwheel.client.focus_msgs.call(null,inst_23462,inst_23458);
var inst_23464 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23463);
var inst_23465 = cljs.core.first.call(null,inst_23463);
var inst_23466 = figwheel.client.autoload_QMARK_.call(null);
var state_23505__$1 = (function (){var statearr_23520 = state_23505;
(statearr_23520[(9)] = inst_23464);

(statearr_23520[(8)] = inst_23465);

return statearr_23520;
})();
if(cljs.core.truth_(inst_23466)){
var statearr_23521_23548 = state_23505__$1;
(statearr_23521_23548[(1)] = (8));

} else {
var statearr_23522_23549 = state_23505__$1;
(statearr_23522_23549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (14))){
var inst_23476 = (state_23505[(2)]);
var state_23505__$1 = state_23505;
var statearr_23523_23550 = state_23505__$1;
(statearr_23523_23550[(2)] = inst_23476);

(statearr_23523_23550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (16))){
var state_23505__$1 = state_23505;
var statearr_23524_23551 = state_23505__$1;
(statearr_23524_23551[(2)] = null);

(statearr_23524_23551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (10))){
var inst_23497 = (state_23505[(2)]);
var state_23505__$1 = (function (){var statearr_23525 = state_23505;
(statearr_23525[(11)] = inst_23497);

return statearr_23525;
})();
var statearr_23526_23552 = state_23505__$1;
(statearr_23526_23552[(2)] = null);

(statearr_23526_23552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23506 === (8))){
var inst_23464 = (state_23505[(9)]);
var inst_23468 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23464,opts);
var state_23505__$1 = state_23505;
if(cljs.core.truth_(inst_23468)){
var statearr_23527_23553 = state_23505__$1;
(statearr_23527_23553[(1)] = (11));

} else {
var statearr_23528_23554 = state_23505__$1;
(statearr_23528_23554[(1)] = (12));

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
});})(c__18972__auto___23536,ch))
;
return ((function (switch__18860__auto__,c__18972__auto___23536,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____0 = (function (){
var statearr_23532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23532[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__);

(statearr_23532[(1)] = (1));

return statearr_23532;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____1 = (function (state_23505){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_23505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e23533){if((e23533 instanceof Object)){
var ex__18864__auto__ = e23533;
var statearr_23534_23555 = state_23505;
(statearr_23534_23555[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23556 = state_23505;
state_23505 = G__23556;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__ = function(state_23505){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____1.call(this,state_23505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___23536,ch))
})();
var state__18974__auto__ = (function (){var statearr_23535 = f__18973__auto__.call(null);
(statearr_23535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___23536);

return statearr_23535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___23536,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23557_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23557_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23564 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23564){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23562 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23563 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23563;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23562;
}}catch (e23561){if((e23561 instanceof Error)){
var e = e23561;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23564], null));
} else {
var e = e23561;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23564))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23565){
var map__23572 = p__23565;
var map__23572__$1 = ((((!((map__23572 == null)))?((((map__23572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23572):map__23572);
var opts = map__23572__$1;
var build_id = cljs.core.get.call(null,map__23572__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23572,map__23572__$1,opts,build_id){
return (function (p__23574){
var vec__23575 = p__23574;
var map__23576 = cljs.core.nth.call(null,vec__23575,(0),null);
var map__23576__$1 = ((((!((map__23576 == null)))?((((map__23576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23576):map__23576);
var msg = map__23576__$1;
var msg_name = cljs.core.get.call(null,map__23576__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23575,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23575,map__23576,map__23576__$1,msg,msg_name,_,map__23572,map__23572__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23575,map__23576,map__23576__$1,msg,msg_name,_,map__23572,map__23572__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23572,map__23572__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23582){
var vec__23583 = p__23582;
var map__23584 = cljs.core.nth.call(null,vec__23583,(0),null);
var map__23584__$1 = ((((!((map__23584 == null)))?((((map__23584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23584):map__23584);
var msg = map__23584__$1;
var msg_name = cljs.core.get.call(null,map__23584__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23583,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23586){
var map__23596 = p__23586;
var map__23596__$1 = ((((!((map__23596 == null)))?((((map__23596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23596):map__23596);
var on_compile_warning = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23596,map__23596__$1,on_compile_warning,on_compile_fail){
return (function (p__23598){
var vec__23599 = p__23598;
var map__23600 = cljs.core.nth.call(null,vec__23599,(0),null);
var map__23600__$1 = ((((!((map__23600 == null)))?((((map__23600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23600):map__23600);
var msg = map__23600__$1;
var msg_name = cljs.core.get.call(null,map__23600__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23599,(1));
var pred__23602 = cljs.core._EQ_;
var expr__23603 = msg_name;
if(cljs.core.truth_(pred__23602.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23603))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23602.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23603))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23596,map__23596__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__,msg_hist,msg_names,msg){
return (function (state_23819){
var state_val_23820 = (state_23819[(1)]);
if((state_val_23820 === (7))){
var inst_23743 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
if(cljs.core.truth_(inst_23743)){
var statearr_23821_23867 = state_23819__$1;
(statearr_23821_23867[(1)] = (8));

} else {
var statearr_23822_23868 = state_23819__$1;
(statearr_23822_23868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (20))){
var inst_23813 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23823_23869 = state_23819__$1;
(statearr_23823_23869[(2)] = inst_23813);

(statearr_23823_23869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (27))){
var inst_23809 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23824_23870 = state_23819__$1;
(statearr_23824_23870[(2)] = inst_23809);

(statearr_23824_23870[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (1))){
var inst_23736 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23819__$1 = state_23819;
if(cljs.core.truth_(inst_23736)){
var statearr_23825_23871 = state_23819__$1;
(statearr_23825_23871[(1)] = (2));

} else {
var statearr_23826_23872 = state_23819__$1;
(statearr_23826_23872[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (24))){
var inst_23811 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23827_23873 = state_23819__$1;
(statearr_23827_23873[(2)] = inst_23811);

(statearr_23827_23873[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (4))){
var inst_23817 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23819__$1,inst_23817);
} else {
if((state_val_23820 === (15))){
var inst_23815 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23828_23874 = state_23819__$1;
(statearr_23828_23874[(2)] = inst_23815);

(statearr_23828_23874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (21))){
var inst_23774 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23829_23875 = state_23819__$1;
(statearr_23829_23875[(2)] = inst_23774);

(statearr_23829_23875[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (31))){
var inst_23798 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23819__$1 = state_23819;
if(cljs.core.truth_(inst_23798)){
var statearr_23830_23876 = state_23819__$1;
(statearr_23830_23876[(1)] = (34));

} else {
var statearr_23831_23877 = state_23819__$1;
(statearr_23831_23877[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (32))){
var inst_23807 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23832_23878 = state_23819__$1;
(statearr_23832_23878[(2)] = inst_23807);

(statearr_23832_23878[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (33))){
var inst_23796 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23833_23879 = state_23819__$1;
(statearr_23833_23879[(2)] = inst_23796);

(statearr_23833_23879[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (13))){
var inst_23757 = figwheel.client.heads_up.clear.call(null);
var state_23819__$1 = state_23819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23819__$1,(16),inst_23757);
} else {
if((state_val_23820 === (22))){
var inst_23778 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23779 = figwheel.client.heads_up.append_message.call(null,inst_23778);
var state_23819__$1 = state_23819;
var statearr_23834_23880 = state_23819__$1;
(statearr_23834_23880[(2)] = inst_23779);

(statearr_23834_23880[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (36))){
var inst_23805 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23835_23881 = state_23819__$1;
(statearr_23835_23881[(2)] = inst_23805);

(statearr_23835_23881[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (29))){
var inst_23789 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23836_23882 = state_23819__$1;
(statearr_23836_23882[(2)] = inst_23789);

(statearr_23836_23882[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (6))){
var inst_23738 = (state_23819[(7)]);
var state_23819__$1 = state_23819;
var statearr_23837_23883 = state_23819__$1;
(statearr_23837_23883[(2)] = inst_23738);

(statearr_23837_23883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (28))){
var inst_23785 = (state_23819[(2)]);
var inst_23786 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23787 = figwheel.client.heads_up.display_warning.call(null,inst_23786);
var state_23819__$1 = (function (){var statearr_23838 = state_23819;
(statearr_23838[(8)] = inst_23785);

return statearr_23838;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23819__$1,(29),inst_23787);
} else {
if((state_val_23820 === (25))){
var inst_23783 = figwheel.client.heads_up.clear.call(null);
var state_23819__$1 = state_23819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23819__$1,(28),inst_23783);
} else {
if((state_val_23820 === (34))){
var inst_23800 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23819__$1 = state_23819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23819__$1,(37),inst_23800);
} else {
if((state_val_23820 === (17))){
var inst_23765 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23839_23884 = state_23819__$1;
(statearr_23839_23884[(2)] = inst_23765);

(statearr_23839_23884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (3))){
var inst_23755 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23819__$1 = state_23819;
if(cljs.core.truth_(inst_23755)){
var statearr_23840_23885 = state_23819__$1;
(statearr_23840_23885[(1)] = (13));

} else {
var statearr_23841_23886 = state_23819__$1;
(statearr_23841_23886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (12))){
var inst_23751 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23842_23887 = state_23819__$1;
(statearr_23842_23887[(2)] = inst_23751);

(statearr_23842_23887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (2))){
var inst_23738 = (state_23819[(7)]);
var inst_23738__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23819__$1 = (function (){var statearr_23843 = state_23819;
(statearr_23843[(7)] = inst_23738__$1);

return statearr_23843;
})();
if(cljs.core.truth_(inst_23738__$1)){
var statearr_23844_23888 = state_23819__$1;
(statearr_23844_23888[(1)] = (5));

} else {
var statearr_23845_23889 = state_23819__$1;
(statearr_23845_23889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (23))){
var inst_23781 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23819__$1 = state_23819;
if(cljs.core.truth_(inst_23781)){
var statearr_23846_23890 = state_23819__$1;
(statearr_23846_23890[(1)] = (25));

} else {
var statearr_23847_23891 = state_23819__$1;
(statearr_23847_23891[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (35))){
var state_23819__$1 = state_23819;
var statearr_23848_23892 = state_23819__$1;
(statearr_23848_23892[(2)] = null);

(statearr_23848_23892[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (19))){
var inst_23776 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23819__$1 = state_23819;
if(cljs.core.truth_(inst_23776)){
var statearr_23849_23893 = state_23819__$1;
(statearr_23849_23893[(1)] = (22));

} else {
var statearr_23850_23894 = state_23819__$1;
(statearr_23850_23894[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (11))){
var inst_23747 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23851_23895 = state_23819__$1;
(statearr_23851_23895[(2)] = inst_23747);

(statearr_23851_23895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (9))){
var inst_23749 = figwheel.client.heads_up.clear.call(null);
var state_23819__$1 = state_23819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23819__$1,(12),inst_23749);
} else {
if((state_val_23820 === (5))){
var inst_23740 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23819__$1 = state_23819;
var statearr_23852_23896 = state_23819__$1;
(statearr_23852_23896[(2)] = inst_23740);

(statearr_23852_23896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (14))){
var inst_23767 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23819__$1 = state_23819;
if(cljs.core.truth_(inst_23767)){
var statearr_23853_23897 = state_23819__$1;
(statearr_23853_23897[(1)] = (18));

} else {
var statearr_23854_23898 = state_23819__$1;
(statearr_23854_23898[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (26))){
var inst_23791 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23819__$1 = state_23819;
if(cljs.core.truth_(inst_23791)){
var statearr_23855_23899 = state_23819__$1;
(statearr_23855_23899[(1)] = (30));

} else {
var statearr_23856_23900 = state_23819__$1;
(statearr_23856_23900[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (16))){
var inst_23759 = (state_23819[(2)]);
var inst_23760 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23761 = figwheel.client.format_messages.call(null,inst_23760);
var inst_23762 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23763 = figwheel.client.heads_up.display_error.call(null,inst_23761,inst_23762);
var state_23819__$1 = (function (){var statearr_23857 = state_23819;
(statearr_23857[(9)] = inst_23759);

return statearr_23857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23819__$1,(17),inst_23763);
} else {
if((state_val_23820 === (30))){
var inst_23793 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23794 = figwheel.client.heads_up.display_warning.call(null,inst_23793);
var state_23819__$1 = state_23819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23819__$1,(33),inst_23794);
} else {
if((state_val_23820 === (10))){
var inst_23753 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23858_23901 = state_23819__$1;
(statearr_23858_23901[(2)] = inst_23753);

(statearr_23858_23901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (18))){
var inst_23769 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23770 = figwheel.client.format_messages.call(null,inst_23769);
var inst_23771 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23772 = figwheel.client.heads_up.display_error.call(null,inst_23770,inst_23771);
var state_23819__$1 = state_23819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23819__$1,(21),inst_23772);
} else {
if((state_val_23820 === (37))){
var inst_23802 = (state_23819[(2)]);
var state_23819__$1 = state_23819;
var statearr_23859_23902 = state_23819__$1;
(statearr_23859_23902[(2)] = inst_23802);

(statearr_23859_23902[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23820 === (8))){
var inst_23745 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23819__$1 = state_23819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23819__$1,(11),inst_23745);
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
});})(c__18972__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18860__auto__,c__18972__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____0 = (function (){
var statearr_23863 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23863[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__);

(statearr_23863[(1)] = (1));

return statearr_23863;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____1 = (function (state_23819){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_23819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e23864){if((e23864 instanceof Object)){
var ex__18864__auto__ = e23864;
var statearr_23865_23903 = state_23819;
(statearr_23865_23903[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23904 = state_23819;
state_23819 = G__23904;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__ = function(state_23819){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____1.call(this,state_23819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__,msg_hist,msg_names,msg))
})();
var state__18974__auto__ = (function (){var statearr_23866 = f__18973__auto__.call(null);
(statearr_23866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_23866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__,msg_hist,msg_names,msg))
);

return c__18972__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18972__auto___23967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___23967,ch){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___23967,ch){
return (function (state_23950){
var state_val_23951 = (state_23950[(1)]);
if((state_val_23951 === (1))){
var state_23950__$1 = state_23950;
var statearr_23952_23968 = state_23950__$1;
(statearr_23952_23968[(2)] = null);

(statearr_23952_23968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (2))){
var state_23950__$1 = state_23950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23950__$1,(4),ch);
} else {
if((state_val_23951 === (3))){
var inst_23948 = (state_23950[(2)]);
var state_23950__$1 = state_23950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23950__$1,inst_23948);
} else {
if((state_val_23951 === (4))){
var inst_23938 = (state_23950[(7)]);
var inst_23938__$1 = (state_23950[(2)]);
var state_23950__$1 = (function (){var statearr_23953 = state_23950;
(statearr_23953[(7)] = inst_23938__$1);

return statearr_23953;
})();
if(cljs.core.truth_(inst_23938__$1)){
var statearr_23954_23969 = state_23950__$1;
(statearr_23954_23969[(1)] = (5));

} else {
var statearr_23955_23970 = state_23950__$1;
(statearr_23955_23970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (5))){
var inst_23938 = (state_23950[(7)]);
var inst_23940 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23938);
var state_23950__$1 = state_23950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23950__$1,(8),inst_23940);
} else {
if((state_val_23951 === (6))){
var state_23950__$1 = state_23950;
var statearr_23956_23971 = state_23950__$1;
(statearr_23956_23971[(2)] = null);

(statearr_23956_23971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (7))){
var inst_23946 = (state_23950[(2)]);
var state_23950__$1 = state_23950;
var statearr_23957_23972 = state_23950__$1;
(statearr_23957_23972[(2)] = inst_23946);

(statearr_23957_23972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (8))){
var inst_23942 = (state_23950[(2)]);
var state_23950__$1 = (function (){var statearr_23958 = state_23950;
(statearr_23958[(8)] = inst_23942);

return statearr_23958;
})();
var statearr_23959_23973 = state_23950__$1;
(statearr_23959_23973[(2)] = null);

(statearr_23959_23973[(1)] = (2));


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
});})(c__18972__auto___23967,ch))
;
return ((function (switch__18860__auto__,c__18972__auto___23967,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18861__auto____0 = (function (){
var statearr_23963 = [null,null,null,null,null,null,null,null,null];
(statearr_23963[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18861__auto__);

(statearr_23963[(1)] = (1));

return statearr_23963;
});
var figwheel$client$heads_up_plugin_$_state_machine__18861__auto____1 = (function (state_23950){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_23950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e23964){if((e23964 instanceof Object)){
var ex__18864__auto__ = e23964;
var statearr_23965_23974 = state_23950;
(statearr_23965_23974[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23975 = state_23950;
state_23950 = G__23975;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18861__auto__ = function(state_23950){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18861__auto____1.call(this,state_23950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18861__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18861__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___23967,ch))
})();
var state__18974__auto__ = (function (){var statearr_23966 = f__18973__auto__.call(null);
(statearr_23966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___23967);

return statearr_23966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___23967,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_23996){
var state_val_23997 = (state_23996[(1)]);
if((state_val_23997 === (1))){
var inst_23991 = cljs.core.async.timeout.call(null,(3000));
var state_23996__$1 = state_23996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23996__$1,(2),inst_23991);
} else {
if((state_val_23997 === (2))){
var inst_23993 = (state_23996[(2)]);
var inst_23994 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23996__$1 = (function (){var statearr_23998 = state_23996;
(statearr_23998[(7)] = inst_23993);

return statearr_23998;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23996__$1,inst_23994);
} else {
return null;
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____0 = (function (){
var statearr_24002 = [null,null,null,null,null,null,null,null];
(statearr_24002[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__);

(statearr_24002[(1)] = (1));

return statearr_24002;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____1 = (function (state_23996){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_23996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e24003){if((e24003 instanceof Object)){
var ex__18864__auto__ = e24003;
var statearr_24004_24006 = state_23996;
(statearr_24004_24006[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24007 = state_23996;
state_23996 = G__24007;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__ = function(state_23996){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____1.call(this,state_23996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_24005 = f__18973__auto__.call(null);
(statearr_24005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_24005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24008){
var map__24015 = p__24008;
var map__24015__$1 = ((((!((map__24015 == null)))?((((map__24015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24015):map__24015);
var ed = map__24015__$1;
var formatted_exception = cljs.core.get.call(null,map__24015__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24015__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24015__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24017_24021 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24018_24022 = null;
var count__24019_24023 = (0);
var i__24020_24024 = (0);
while(true){
if((i__24020_24024 < count__24019_24023)){
var msg_24025 = cljs.core._nth.call(null,chunk__24018_24022,i__24020_24024);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24025);

var G__24026 = seq__24017_24021;
var G__24027 = chunk__24018_24022;
var G__24028 = count__24019_24023;
var G__24029 = (i__24020_24024 + (1));
seq__24017_24021 = G__24026;
chunk__24018_24022 = G__24027;
count__24019_24023 = G__24028;
i__24020_24024 = G__24029;
continue;
} else {
var temp__4425__auto___24030 = cljs.core.seq.call(null,seq__24017_24021);
if(temp__4425__auto___24030){
var seq__24017_24031__$1 = temp__4425__auto___24030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24017_24031__$1)){
var c__17608__auto___24032 = cljs.core.chunk_first.call(null,seq__24017_24031__$1);
var G__24033 = cljs.core.chunk_rest.call(null,seq__24017_24031__$1);
var G__24034 = c__17608__auto___24032;
var G__24035 = cljs.core.count.call(null,c__17608__auto___24032);
var G__24036 = (0);
seq__24017_24021 = G__24033;
chunk__24018_24022 = G__24034;
count__24019_24023 = G__24035;
i__24020_24024 = G__24036;
continue;
} else {
var msg_24037 = cljs.core.first.call(null,seq__24017_24031__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24037);

var G__24038 = cljs.core.next.call(null,seq__24017_24031__$1);
var G__24039 = null;
var G__24040 = (0);
var G__24041 = (0);
seq__24017_24021 = G__24038;
chunk__24018_24022 = G__24039;
count__24019_24023 = G__24040;
i__24020_24024 = G__24041;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24042){
var map__24045 = p__24042;
var map__24045__$1 = ((((!((map__24045 == null)))?((((map__24045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24045):map__24045);
var w = map__24045__$1;
var message = cljs.core.get.call(null,map__24045__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16793__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16793__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24053 = cljs.core.seq.call(null,plugins);
var chunk__24054 = null;
var count__24055 = (0);
var i__24056 = (0);
while(true){
if((i__24056 < count__24055)){
var vec__24057 = cljs.core._nth.call(null,chunk__24054,i__24056);
var k = cljs.core.nth.call(null,vec__24057,(0),null);
var plugin = cljs.core.nth.call(null,vec__24057,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24059 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24053,chunk__24054,count__24055,i__24056,pl_24059,vec__24057,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24059.call(null,msg_hist);
});})(seq__24053,chunk__24054,count__24055,i__24056,pl_24059,vec__24057,k,plugin))
);
} else {
}

var G__24060 = seq__24053;
var G__24061 = chunk__24054;
var G__24062 = count__24055;
var G__24063 = (i__24056 + (1));
seq__24053 = G__24060;
chunk__24054 = G__24061;
count__24055 = G__24062;
i__24056 = G__24063;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24053);
if(temp__4425__auto__){
var seq__24053__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24053__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__24053__$1);
var G__24064 = cljs.core.chunk_rest.call(null,seq__24053__$1);
var G__24065 = c__17608__auto__;
var G__24066 = cljs.core.count.call(null,c__17608__auto__);
var G__24067 = (0);
seq__24053 = G__24064;
chunk__24054 = G__24065;
count__24055 = G__24066;
i__24056 = G__24067;
continue;
} else {
var vec__24058 = cljs.core.first.call(null,seq__24053__$1);
var k = cljs.core.nth.call(null,vec__24058,(0),null);
var plugin = cljs.core.nth.call(null,vec__24058,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24068 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24053,chunk__24054,count__24055,i__24056,pl_24068,vec__24058,k,plugin,seq__24053__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24068.call(null,msg_hist);
});})(seq__24053,chunk__24054,count__24055,i__24056,pl_24068,vec__24058,k,plugin,seq__24053__$1,temp__4425__auto__))
);
} else {
}

var G__24069 = cljs.core.next.call(null,seq__24053__$1);
var G__24070 = null;
var G__24071 = (0);
var G__24072 = (0);
seq__24053 = G__24069;
chunk__24054 = G__24070;
count__24055 = G__24071;
i__24056 = G__24072;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24073 = [];
var len__17863__auto___24076 = arguments.length;
var i__17864__auto___24077 = (0);
while(true){
if((i__17864__auto___24077 < len__17863__auto___24076)){
args24073.push((arguments[i__17864__auto___24077]));

var G__24078 = (i__17864__auto___24077 + (1));
i__17864__auto___24077 = G__24078;
continue;
} else {
}
break;
}

var G__24075 = args24073.length;
switch (G__24075) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24073.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24084 = arguments.length;
var i__17864__auto___24085 = (0);
while(true){
if((i__17864__auto___24085 < len__17863__auto___24084)){
args__17870__auto__.push((arguments[i__17864__auto___24085]));

var G__24086 = (i__17864__auto___24085 + (1));
i__17864__auto___24085 = G__24086;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24081){
var map__24082 = p__24081;
var map__24082__$1 = ((((!((map__24082 == null)))?((((map__24082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24082):map__24082);
var opts = map__24082__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24080){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24080));
});

//# sourceMappingURL=client.js.map?rel=1454610166853