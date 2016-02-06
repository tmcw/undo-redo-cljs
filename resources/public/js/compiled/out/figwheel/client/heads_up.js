// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17870__auto__ = [];
var len__17863__auto___23126 = arguments.length;
var i__17864__auto___23127 = (0);
while(true){
if((i__17864__auto___23127 < len__17863__auto___23126)){
args__17870__auto__.push((arguments[i__17864__auto___23127]));

var G__23128 = (i__17864__auto___23127 + (1));
i__17864__auto___23127 = G__23128;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((2) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17871__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23118_23129 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23119_23130 = null;
var count__23120_23131 = (0);
var i__23121_23132 = (0);
while(true){
if((i__23121_23132 < count__23120_23131)){
var k_23133 = cljs.core._nth.call(null,chunk__23119_23130,i__23121_23132);
e.setAttribute(cljs.core.name.call(null,k_23133),cljs.core.get.call(null,attrs,k_23133));

var G__23134 = seq__23118_23129;
var G__23135 = chunk__23119_23130;
var G__23136 = count__23120_23131;
var G__23137 = (i__23121_23132 + (1));
seq__23118_23129 = G__23134;
chunk__23119_23130 = G__23135;
count__23120_23131 = G__23136;
i__23121_23132 = G__23137;
continue;
} else {
var temp__4425__auto___23138 = cljs.core.seq.call(null,seq__23118_23129);
if(temp__4425__auto___23138){
var seq__23118_23139__$1 = temp__4425__auto___23138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23118_23139__$1)){
var c__17608__auto___23140 = cljs.core.chunk_first.call(null,seq__23118_23139__$1);
var G__23141 = cljs.core.chunk_rest.call(null,seq__23118_23139__$1);
var G__23142 = c__17608__auto___23140;
var G__23143 = cljs.core.count.call(null,c__17608__auto___23140);
var G__23144 = (0);
seq__23118_23129 = G__23141;
chunk__23119_23130 = G__23142;
count__23120_23131 = G__23143;
i__23121_23132 = G__23144;
continue;
} else {
var k_23145 = cljs.core.first.call(null,seq__23118_23139__$1);
e.setAttribute(cljs.core.name.call(null,k_23145),cljs.core.get.call(null,attrs,k_23145));

var G__23146 = cljs.core.next.call(null,seq__23118_23139__$1);
var G__23147 = null;
var G__23148 = (0);
var G__23149 = (0);
seq__23118_23129 = G__23146;
chunk__23119_23130 = G__23147;
count__23120_23131 = G__23148;
i__23121_23132 = G__23149;
continue;
}
} else {
}
}
break;
}

var seq__23122_23150 = cljs.core.seq.call(null,children);
var chunk__23123_23151 = null;
var count__23124_23152 = (0);
var i__23125_23153 = (0);
while(true){
if((i__23125_23153 < count__23124_23152)){
var ch_23154 = cljs.core._nth.call(null,chunk__23123_23151,i__23125_23153);
e.appendChild(ch_23154);

var G__23155 = seq__23122_23150;
var G__23156 = chunk__23123_23151;
var G__23157 = count__23124_23152;
var G__23158 = (i__23125_23153 + (1));
seq__23122_23150 = G__23155;
chunk__23123_23151 = G__23156;
count__23124_23152 = G__23157;
i__23125_23153 = G__23158;
continue;
} else {
var temp__4425__auto___23159 = cljs.core.seq.call(null,seq__23122_23150);
if(temp__4425__auto___23159){
var seq__23122_23160__$1 = temp__4425__auto___23159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23122_23160__$1)){
var c__17608__auto___23161 = cljs.core.chunk_first.call(null,seq__23122_23160__$1);
var G__23162 = cljs.core.chunk_rest.call(null,seq__23122_23160__$1);
var G__23163 = c__17608__auto___23161;
var G__23164 = cljs.core.count.call(null,c__17608__auto___23161);
var G__23165 = (0);
seq__23122_23150 = G__23162;
chunk__23123_23151 = G__23163;
count__23124_23152 = G__23164;
i__23125_23153 = G__23165;
continue;
} else {
var ch_23166 = cljs.core.first.call(null,seq__23122_23160__$1);
e.appendChild(ch_23166);

var G__23167 = cljs.core.next.call(null,seq__23122_23160__$1);
var G__23168 = null;
var G__23169 = (0);
var G__23170 = (0);
seq__23122_23150 = G__23167;
chunk__23123_23151 = G__23168;
count__23124_23152 = G__23169;
i__23125_23153 = G__23170;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23115){
var G__23116 = cljs.core.first.call(null,seq23115);
var seq23115__$1 = cljs.core.next.call(null,seq23115);
var G__23117 = cljs.core.first.call(null,seq23115__$1);
var seq23115__$2 = cljs.core.next.call(null,seq23115__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23116,G__23117,seq23115__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17718__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17719__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17720__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17721__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17722__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__,hierarchy__17722__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__,hierarchy__17722__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17722__auto__,method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_23171 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_23171.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23171.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_23171.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_23171);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__23172,st_map){
var map__23177 = p__23172;
var map__23177__$1 = ((((!((map__23177 == null)))?((((map__23177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23177):map__23177);
var container_el = cljs.core.get.call(null,map__23177__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23177,map__23177__$1,container_el){
return (function (p__23179){
var vec__23180 = p__23179;
var k = cljs.core.nth.call(null,vec__23180,(0),null);
var v = cljs.core.nth.call(null,vec__23180,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23177,map__23177__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__23181,dom_str){
var map__23184 = p__23181;
var map__23184__$1 = ((((!((map__23184 == null)))?((((map__23184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23184):map__23184);
var c = map__23184__$1;
var content_area_el = cljs.core.get.call(null,map__23184__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__23186){
var map__23189 = p__23186;
var map__23189__$1 = ((((!((map__23189 == null)))?((((map__23189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23189):map__23189);
var content_area_el = cljs.core.get.call(null,map__23189__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_23232){
var state_val_23233 = (state_23232[(1)]);
if((state_val_23233 === (1))){
var inst_23217 = (state_23232[(7)]);
var inst_23217__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23218 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23219 = ["10px","10px","100%","68px","1.0"];
var inst_23220 = cljs.core.PersistentHashMap.fromArrays(inst_23218,inst_23219);
var inst_23221 = cljs.core.merge.call(null,inst_23220,style);
var inst_23222 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23217__$1,inst_23221);
var inst_23223 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23217__$1,msg);
var inst_23224 = cljs.core.async.timeout.call(null,(300));
var state_23232__$1 = (function (){var statearr_23234 = state_23232;
(statearr_23234[(7)] = inst_23217__$1);

(statearr_23234[(8)] = inst_23223);

(statearr_23234[(9)] = inst_23222);

return statearr_23234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23232__$1,(2),inst_23224);
} else {
if((state_val_23233 === (2))){
var inst_23217 = (state_23232[(7)]);
var inst_23226 = (state_23232[(2)]);
var inst_23227 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23228 = ["auto"];
var inst_23229 = cljs.core.PersistentHashMap.fromArrays(inst_23227,inst_23228);
var inst_23230 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23217,inst_23229);
var state_23232__$1 = (function (){var statearr_23235 = state_23232;
(statearr_23235[(10)] = inst_23226);

return statearr_23235;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23232__$1,inst_23230);
} else {
return null;
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto____0 = (function (){
var statearr_23239 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23239[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto__);

(statearr_23239[(1)] = (1));

return statearr_23239;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto____1 = (function (state_23232){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_23232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e23240){if((e23240 instanceof Object)){
var ex__18864__auto__ = e23240;
var statearr_23241_23243 = state_23232;
(statearr_23241_23243[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23244 = state_23232;
state_23232 = G__23244;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto__ = function(state_23232){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto____1.call(this,state_23232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_23242 = f__18973__auto__.call(null);
(statearr_23242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_23242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__23246 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__23246,(0),null);
var ln = cljs.core.nth.call(null,vec__23246,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__23249 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__23249,(0),null);
var file_line = cljs.core.nth.call(null,vec__23249,(1),null);
var file_column = cljs.core.nth.call(null,vec__23249,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__23249,file_name,file_line,file_column){
return (function (p1__23247_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__23247_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__23249,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16805__auto__ = file_line;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var and__16793__auto__ = cause;
if(cljs.core.truth_(and__16793__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16793__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__23252 = figwheel.client.heads_up.ensure_container.call(null);
var map__23252__$1 = ((((!((map__23252 == null)))?((((map__23252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23252):map__23252);
var content_area_el = cljs.core.get.call(null,map__23252__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_23300){
var state_val_23301 = (state_23300[(1)]);
if((state_val_23301 === (1))){
var inst_23283 = (state_23300[(7)]);
var inst_23283__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23284 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23285 = ["0.0"];
var inst_23286 = cljs.core.PersistentHashMap.fromArrays(inst_23284,inst_23285);
var inst_23287 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23283__$1,inst_23286);
var inst_23288 = cljs.core.async.timeout.call(null,(300));
var state_23300__$1 = (function (){var statearr_23302 = state_23300;
(statearr_23302[(7)] = inst_23283__$1);

(statearr_23302[(8)] = inst_23287);

return statearr_23302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23300__$1,(2),inst_23288);
} else {
if((state_val_23301 === (2))){
var inst_23283 = (state_23300[(7)]);
var inst_23290 = (state_23300[(2)]);
var inst_23291 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23292 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23293 = cljs.core.PersistentHashMap.fromArrays(inst_23291,inst_23292);
var inst_23294 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23283,inst_23293);
var inst_23295 = cljs.core.async.timeout.call(null,(200));
var state_23300__$1 = (function (){var statearr_23303 = state_23300;
(statearr_23303[(9)] = inst_23294);

(statearr_23303[(10)] = inst_23290);

return statearr_23303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23300__$1,(3),inst_23295);
} else {
if((state_val_23301 === (3))){
var inst_23283 = (state_23300[(7)]);
var inst_23297 = (state_23300[(2)]);
var inst_23298 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23283,"");
var state_23300__$1 = (function (){var statearr_23304 = state_23300;
(statearr_23304[(11)] = inst_23297);

return statearr_23304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23300__$1,inst_23298);
} else {
return null;
}
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18861__auto____0 = (function (){
var statearr_23308 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23308[(0)] = figwheel$client$heads_up$clear_$_state_machine__18861__auto__);

(statearr_23308[(1)] = (1));

return statearr_23308;
});
var figwheel$client$heads_up$clear_$_state_machine__18861__auto____1 = (function (state_23300){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_23300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e23309){if((e23309 instanceof Object)){
var ex__18864__auto__ = e23309;
var statearr_23310_23312 = state_23300;
(statearr_23310_23312[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23313 = state_23300;
state_23300 = G__23313;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18861__auto__ = function(state_23300){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18861__auto____1.call(this,state_23300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18861__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18861__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_23311 = f__18973__auto__.call(null);
(statearr_23311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_23311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_23345){
var state_val_23346 = (state_23345[(1)]);
if((state_val_23346 === (1))){
var inst_23335 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23345__$1 = state_23345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23345__$1,(2),inst_23335);
} else {
if((state_val_23346 === (2))){
var inst_23337 = (state_23345[(2)]);
var inst_23338 = cljs.core.async.timeout.call(null,(400));
var state_23345__$1 = (function (){var statearr_23347 = state_23345;
(statearr_23347[(7)] = inst_23337);

return statearr_23347;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23345__$1,(3),inst_23338);
} else {
if((state_val_23346 === (3))){
var inst_23340 = (state_23345[(2)]);
var inst_23341 = figwheel.client.heads_up.clear.call(null);
var state_23345__$1 = (function (){var statearr_23348 = state_23345;
(statearr_23348[(8)] = inst_23340);

return statearr_23348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23345__$1,(4),inst_23341);
} else {
if((state_val_23346 === (4))){
var inst_23343 = (state_23345[(2)]);
var state_23345__$1 = state_23345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23345__$1,inst_23343);
} else {
return null;
}
}
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto____0 = (function (){
var statearr_23352 = [null,null,null,null,null,null,null,null,null];
(statearr_23352[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto__);

(statearr_23352[(1)] = (1));

return statearr_23352;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto____1 = (function (state_23345){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_23345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e23353){if((e23353 instanceof Object)){
var ex__18864__auto__ = e23353;
var statearr_23354_23356 = state_23345;
(statearr_23354_23356[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23357 = state_23345;
state_23345 = G__23357;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto__ = function(state_23345){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto____1.call(this,state_23345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_23355 = f__18973__auto__.call(null);
(statearr_23355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_23355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1454610166518