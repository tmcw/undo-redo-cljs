// Compiled by ClojureScript 1.7.170 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_20729 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_20730 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_20731 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20731,opt_wrapper_20729,table_section_wrapper_20730,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20729,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20730,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20730,cell_wrapper_20731,table_section_wrapper_20730,table_section_wrapper_20730]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__16793__auto__ = div.firstChild;
if(cljs.core.truth_(and__16793__auto__)){
return div.firstChild.childNodes;
} else {
return and__16793__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__20736 = cljs.core.seq.call(null,tbody);
var chunk__20737 = null;
var count__20738 = (0);
var i__20739 = (0);
while(true){
if((i__20739 < count__20738)){
var child = cljs.core._nth.call(null,chunk__20737,i__20739);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__20740 = seq__20736;
var G__20741 = chunk__20737;
var G__20742 = count__20738;
var G__20743 = (i__20739 + (1));
seq__20736 = G__20740;
chunk__20737 = G__20741;
count__20738 = G__20742;
i__20739 = G__20743;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20736);
if(temp__4425__auto__){
var seq__20736__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20736__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__20736__$1);
var G__20744 = cljs.core.chunk_rest.call(null,seq__20736__$1);
var G__20745 = c__17608__auto__;
var G__20746 = cljs.core.count.call(null,c__17608__auto__);
var G__20747 = (0);
seq__20736 = G__20744;
chunk__20737 = G__20745;
count__20738 = G__20746;
i__20739 = G__20747;
continue;
} else {
var child = cljs.core.first.call(null,seq__20736__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__20748 = cljs.core.next.call(null,seq__20736__$1);
var G__20749 = null;
var G__20750 = (0);
var G__20751 = (0);
seq__20736 = G__20748;
chunk__20737 = G__20749;
count__20738 = G__20750;
i__20739 = G__20751;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__20753 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__20753,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__20753,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__20753,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__20754 = wrapper.lastChild;
var G__20755 = (level - (1));
wrapper = G__20754;
level = G__20755;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__16793__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__16793__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__16793__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});
domina.nodes;
domina.single_node;

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((!((content == null))) && (!((content.domina$DomContent$nodes$arity$1 == null)))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__17460__auto__ = (((content == null))?null:content);
var m__17461__auto__ = (domina.nodes[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,content);
} else {
var m__17461__auto____$1 = (domina.nodes["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__17460__auto__ = (((nodeseq == null))?null:nodeseq);
var m__17461__auto__ = (domina.single_node[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,nodeseq);
} else {
var m__17461__auto____$1 = (domina.single_node["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20757 = arguments.length;
var i__17864__auto___20758 = (0);
while(true){
if((i__17864__auto___20758 < len__17863__auto___20757)){
args__17870__auto__.push((arguments[i__17864__auto___20758]));

var G__20759 = (i__17864__auto___20758 + (1));
i__17864__auto___20758 = G__20759;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__16793__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__16793__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__16793__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq20756){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20756));
});
domina.log = (function domina$log(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20761 = arguments.length;
var i__17864__auto___20762 = (0);
while(true){
if((i__17864__auto___20762 < len__17863__auto___20761)){
args__17870__auto__.push((arguments[i__17864__auto___20762]));

var G__20763 = (i__17864__auto___20762 + (1));
i__17864__auto___20762 = G__20763;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq20760){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20760));
});
/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
domina.normalize_seq;
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20765 = arguments.length;
var i__17864__auto___20766 = (0);
while(true){
if((i__17864__auto___20766 < len__17863__auto___20765)){
args__17870__auto__.push((arguments[i__17864__auto___20766]));

var G__20767 = (i__17864__auto___20766 + (1));
i__17864__auto___20766 = G__20767;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq20764){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20764));
});
/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__20768_SHARP_){
return p1__20768_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
domina.apply_with_cloning;
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__20769_SHARP_,p2__20770_SHARP_){
return goog.dom.insertChildAt(p1__20769_SHARP_,p2__20770_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__20772_SHARP_,p2__20771_SHARP_){
return goog.dom.insertSiblingBefore(p2__20771_SHARP_,p1__20772_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__20774_SHARP_,p2__20773_SHARP_){
return goog.dom.insertSiblingAfter(p2__20773_SHARP_,p1__20774_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__20776_SHARP_,p2__20775_SHARP_){
return goog.dom.replaceNode(p2__20775_SHARP_,p1__20776_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20784 = arguments.length;
var i__17864__auto___20785 = (0);
while(true){
if((i__17864__auto___20785 < len__17863__auto___20784)){
args__17870__auto__.push((arguments[i__17864__auto___20785]));

var G__20786 = (i__17864__auto___20785 + (1));
i__17864__auto___20785 = G__20786;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((2) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((2)),(0))):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17871__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__20780_20787 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20781_20788 = null;
var count__20782_20789 = (0);
var i__20783_20790 = (0);
while(true){
if((i__20783_20790 < count__20782_20789)){
var n_20791 = cljs.core._nth.call(null,chunk__20781_20788,i__20783_20790);
goog.style.setStyle(n_20791,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20792 = seq__20780_20787;
var G__20793 = chunk__20781_20788;
var G__20794 = count__20782_20789;
var G__20795 = (i__20783_20790 + (1));
seq__20780_20787 = G__20792;
chunk__20781_20788 = G__20793;
count__20782_20789 = G__20794;
i__20783_20790 = G__20795;
continue;
} else {
var temp__4425__auto___20796 = cljs.core.seq.call(null,seq__20780_20787);
if(temp__4425__auto___20796){
var seq__20780_20797__$1 = temp__4425__auto___20796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20780_20797__$1)){
var c__17608__auto___20798 = cljs.core.chunk_first.call(null,seq__20780_20797__$1);
var G__20799 = cljs.core.chunk_rest.call(null,seq__20780_20797__$1);
var G__20800 = c__17608__auto___20798;
var G__20801 = cljs.core.count.call(null,c__17608__auto___20798);
var G__20802 = (0);
seq__20780_20787 = G__20799;
chunk__20781_20788 = G__20800;
count__20782_20789 = G__20801;
i__20783_20790 = G__20802;
continue;
} else {
var n_20803 = cljs.core.first.call(null,seq__20780_20797__$1);
goog.style.setStyle(n_20803,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20804 = cljs.core.next.call(null,seq__20780_20797__$1);
var G__20805 = null;
var G__20806 = (0);
var G__20807 = (0);
seq__20780_20787 = G__20804;
chunk__20781_20788 = G__20805;
count__20782_20789 = G__20806;
i__20783_20790 = G__20807;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq20777){
var G__20778 = cljs.core.first.call(null,seq20777);
var seq20777__$1 = cljs.core.next.call(null,seq20777);
var G__20779 = cljs.core.first.call(null,seq20777__$1);
var seq20777__$2 = cljs.core.next.call(null,seq20777__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20778,G__20779,seq20777__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20815 = arguments.length;
var i__17864__auto___20816 = (0);
while(true){
if((i__17864__auto___20816 < len__17863__auto___20815)){
args__17870__auto__.push((arguments[i__17864__auto___20816]));

var G__20817 = (i__17864__auto___20816 + (1));
i__17864__auto___20816 = G__20817;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((2) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((2)),(0))):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17871__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__20811_20818 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20812_20819 = null;
var count__20813_20820 = (0);
var i__20814_20821 = (0);
while(true){
if((i__20814_20821 < count__20813_20820)){
var n_20822 = cljs.core._nth.call(null,chunk__20812_20819,i__20814_20821);
n_20822.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20823 = seq__20811_20818;
var G__20824 = chunk__20812_20819;
var G__20825 = count__20813_20820;
var G__20826 = (i__20814_20821 + (1));
seq__20811_20818 = G__20823;
chunk__20812_20819 = G__20824;
count__20813_20820 = G__20825;
i__20814_20821 = G__20826;
continue;
} else {
var temp__4425__auto___20827 = cljs.core.seq.call(null,seq__20811_20818);
if(temp__4425__auto___20827){
var seq__20811_20828__$1 = temp__4425__auto___20827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20811_20828__$1)){
var c__17608__auto___20829 = cljs.core.chunk_first.call(null,seq__20811_20828__$1);
var G__20830 = cljs.core.chunk_rest.call(null,seq__20811_20828__$1);
var G__20831 = c__17608__auto___20829;
var G__20832 = cljs.core.count.call(null,c__17608__auto___20829);
var G__20833 = (0);
seq__20811_20818 = G__20830;
chunk__20812_20819 = G__20831;
count__20813_20820 = G__20832;
i__20814_20821 = G__20833;
continue;
} else {
var n_20834 = cljs.core.first.call(null,seq__20811_20828__$1);
n_20834.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__20835 = cljs.core.next.call(null,seq__20811_20828__$1);
var G__20836 = null;
var G__20837 = (0);
var G__20838 = (0);
seq__20811_20818 = G__20835;
chunk__20812_20819 = G__20836;
count__20813_20820 = G__20837;
i__20814_20821 = G__20838;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq20808){
var G__20809 = cljs.core.first.call(null,seq20808);
var seq20808__$1 = cljs.core.next.call(null,seq20808);
var G__20810 = cljs.core.first.call(null,seq20808__$1);
var seq20808__$2 = cljs.core.next.call(null,seq20808__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20809,G__20810,seq20808__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__20843_20847 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20844_20848 = null;
var count__20845_20849 = (0);
var i__20846_20850 = (0);
while(true){
if((i__20846_20850 < count__20845_20849)){
var n_20851 = cljs.core._nth.call(null,chunk__20844_20848,i__20846_20850);
n_20851.removeAttribute(cljs.core.name.call(null,name));

var G__20852 = seq__20843_20847;
var G__20853 = chunk__20844_20848;
var G__20854 = count__20845_20849;
var G__20855 = (i__20846_20850 + (1));
seq__20843_20847 = G__20852;
chunk__20844_20848 = G__20853;
count__20845_20849 = G__20854;
i__20846_20850 = G__20855;
continue;
} else {
var temp__4425__auto___20856 = cljs.core.seq.call(null,seq__20843_20847);
if(temp__4425__auto___20856){
var seq__20843_20857__$1 = temp__4425__auto___20856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20843_20857__$1)){
var c__17608__auto___20858 = cljs.core.chunk_first.call(null,seq__20843_20857__$1);
var G__20859 = cljs.core.chunk_rest.call(null,seq__20843_20857__$1);
var G__20860 = c__17608__auto___20858;
var G__20861 = cljs.core.count.call(null,c__17608__auto___20858);
var G__20862 = (0);
seq__20843_20847 = G__20859;
chunk__20844_20848 = G__20860;
count__20845_20849 = G__20861;
i__20846_20850 = G__20862;
continue;
} else {
var n_20863 = cljs.core.first.call(null,seq__20843_20857__$1);
n_20863.removeAttribute(cljs.core.name.call(null,name));

var G__20864 = cljs.core.next.call(null,seq__20843_20857__$1);
var G__20865 = null;
var G__20866 = (0);
var G__20867 = (0);
seq__20843_20847 = G__20864;
chunk__20844_20848 = G__20865;
count__20845_20849 = G__20866;
i__20846_20850 = G__20867;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__20869 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__20869,(0),null);
var v = cljs.core.nth.call(null,vec__20869,(1),null);
if(cljs.core.truth_((function (){var and__16793__auto__ = k;
if(cljs.core.truth_(and__16793__auto__)){
return v;
} else {
return and__16793__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__20870_SHARP_){
var attr = attrs__$1.item(p1__20870_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__20877_20883 = cljs.core.seq.call(null,styles);
var chunk__20878_20884 = null;
var count__20879_20885 = (0);
var i__20880_20886 = (0);
while(true){
if((i__20880_20886 < count__20879_20885)){
var vec__20881_20887 = cljs.core._nth.call(null,chunk__20878_20884,i__20880_20886);
var name_20888 = cljs.core.nth.call(null,vec__20881_20887,(0),null);
var value_20889 = cljs.core.nth.call(null,vec__20881_20887,(1),null);
domina.set_style_BANG_.call(null,content,name_20888,value_20889);

var G__20890 = seq__20877_20883;
var G__20891 = chunk__20878_20884;
var G__20892 = count__20879_20885;
var G__20893 = (i__20880_20886 + (1));
seq__20877_20883 = G__20890;
chunk__20878_20884 = G__20891;
count__20879_20885 = G__20892;
i__20880_20886 = G__20893;
continue;
} else {
var temp__4425__auto___20894 = cljs.core.seq.call(null,seq__20877_20883);
if(temp__4425__auto___20894){
var seq__20877_20895__$1 = temp__4425__auto___20894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20877_20895__$1)){
var c__17608__auto___20896 = cljs.core.chunk_first.call(null,seq__20877_20895__$1);
var G__20897 = cljs.core.chunk_rest.call(null,seq__20877_20895__$1);
var G__20898 = c__17608__auto___20896;
var G__20899 = cljs.core.count.call(null,c__17608__auto___20896);
var G__20900 = (0);
seq__20877_20883 = G__20897;
chunk__20878_20884 = G__20898;
count__20879_20885 = G__20899;
i__20880_20886 = G__20900;
continue;
} else {
var vec__20882_20901 = cljs.core.first.call(null,seq__20877_20895__$1);
var name_20902 = cljs.core.nth.call(null,vec__20882_20901,(0),null);
var value_20903 = cljs.core.nth.call(null,vec__20882_20901,(1),null);
domina.set_style_BANG_.call(null,content,name_20902,value_20903);

var G__20904 = cljs.core.next.call(null,seq__20877_20895__$1);
var G__20905 = null;
var G__20906 = (0);
var G__20907 = (0);
seq__20877_20883 = G__20904;
chunk__20878_20884 = G__20905;
count__20879_20885 = G__20906;
i__20880_20886 = G__20907;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__20914_20920 = cljs.core.seq.call(null,attrs);
var chunk__20915_20921 = null;
var count__20916_20922 = (0);
var i__20917_20923 = (0);
while(true){
if((i__20917_20923 < count__20916_20922)){
var vec__20918_20924 = cljs.core._nth.call(null,chunk__20915_20921,i__20917_20923);
var name_20925 = cljs.core.nth.call(null,vec__20918_20924,(0),null);
var value_20926 = cljs.core.nth.call(null,vec__20918_20924,(1),null);
domina.set_attr_BANG_.call(null,content,name_20925,value_20926);

var G__20927 = seq__20914_20920;
var G__20928 = chunk__20915_20921;
var G__20929 = count__20916_20922;
var G__20930 = (i__20917_20923 + (1));
seq__20914_20920 = G__20927;
chunk__20915_20921 = G__20928;
count__20916_20922 = G__20929;
i__20917_20923 = G__20930;
continue;
} else {
var temp__4425__auto___20931 = cljs.core.seq.call(null,seq__20914_20920);
if(temp__4425__auto___20931){
var seq__20914_20932__$1 = temp__4425__auto___20931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20914_20932__$1)){
var c__17608__auto___20933 = cljs.core.chunk_first.call(null,seq__20914_20932__$1);
var G__20934 = cljs.core.chunk_rest.call(null,seq__20914_20932__$1);
var G__20935 = c__17608__auto___20933;
var G__20936 = cljs.core.count.call(null,c__17608__auto___20933);
var G__20937 = (0);
seq__20914_20920 = G__20934;
chunk__20915_20921 = G__20935;
count__20916_20922 = G__20936;
i__20917_20923 = G__20937;
continue;
} else {
var vec__20919_20938 = cljs.core.first.call(null,seq__20914_20932__$1);
var name_20939 = cljs.core.nth.call(null,vec__20919_20938,(0),null);
var value_20940 = cljs.core.nth.call(null,vec__20919_20938,(1),null);
domina.set_attr_BANG_.call(null,content,name_20939,value_20940);

var G__20941 = cljs.core.next.call(null,seq__20914_20932__$1);
var G__20942 = null;
var G__20943 = (0);
var G__20944 = (0);
seq__20914_20920 = G__20941;
chunk__20915_20921 = G__20942;
count__20916_20922 = G__20943;
i__20917_20923 = G__20944;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__20949_20953 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20950_20954 = null;
var count__20951_20955 = (0);
var i__20952_20956 = (0);
while(true){
if((i__20952_20956 < count__20951_20955)){
var node_20957 = cljs.core._nth.call(null,chunk__20950_20954,i__20952_20956);
goog.dom.classes.add(node_20957,class$);

var G__20958 = seq__20949_20953;
var G__20959 = chunk__20950_20954;
var G__20960 = count__20951_20955;
var G__20961 = (i__20952_20956 + (1));
seq__20949_20953 = G__20958;
chunk__20950_20954 = G__20959;
count__20951_20955 = G__20960;
i__20952_20956 = G__20961;
continue;
} else {
var temp__4425__auto___20962 = cljs.core.seq.call(null,seq__20949_20953);
if(temp__4425__auto___20962){
var seq__20949_20963__$1 = temp__4425__auto___20962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20949_20963__$1)){
var c__17608__auto___20964 = cljs.core.chunk_first.call(null,seq__20949_20963__$1);
var G__20965 = cljs.core.chunk_rest.call(null,seq__20949_20963__$1);
var G__20966 = c__17608__auto___20964;
var G__20967 = cljs.core.count.call(null,c__17608__auto___20964);
var G__20968 = (0);
seq__20949_20953 = G__20965;
chunk__20950_20954 = G__20966;
count__20951_20955 = G__20967;
i__20952_20956 = G__20968;
continue;
} else {
var node_20969 = cljs.core.first.call(null,seq__20949_20963__$1);
goog.dom.classes.add(node_20969,class$);

var G__20970 = cljs.core.next.call(null,seq__20949_20963__$1);
var G__20971 = null;
var G__20972 = (0);
var G__20973 = (0);
seq__20949_20953 = G__20970;
chunk__20950_20954 = G__20971;
count__20951_20955 = G__20972;
i__20952_20956 = G__20973;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__20978_20982 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__20979_20983 = null;
var count__20980_20984 = (0);
var i__20981_20985 = (0);
while(true){
if((i__20981_20985 < count__20980_20984)){
var node_20986 = cljs.core._nth.call(null,chunk__20979_20983,i__20981_20985);
goog.dom.classes.remove(node_20986,class$);

var G__20987 = seq__20978_20982;
var G__20988 = chunk__20979_20983;
var G__20989 = count__20980_20984;
var G__20990 = (i__20981_20985 + (1));
seq__20978_20982 = G__20987;
chunk__20979_20983 = G__20988;
count__20980_20984 = G__20989;
i__20981_20985 = G__20990;
continue;
} else {
var temp__4425__auto___20991 = cljs.core.seq.call(null,seq__20978_20982);
if(temp__4425__auto___20991){
var seq__20978_20992__$1 = temp__4425__auto___20991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20978_20992__$1)){
var c__17608__auto___20993 = cljs.core.chunk_first.call(null,seq__20978_20992__$1);
var G__20994 = cljs.core.chunk_rest.call(null,seq__20978_20992__$1);
var G__20995 = c__17608__auto___20993;
var G__20996 = cljs.core.count.call(null,c__17608__auto___20993);
var G__20997 = (0);
seq__20978_20982 = G__20994;
chunk__20979_20983 = G__20995;
count__20980_20984 = G__20996;
i__20981_20985 = G__20997;
continue;
} else {
var node_20998 = cljs.core.first.call(null,seq__20978_20992__$1);
goog.dom.classes.remove(node_20998,class$);

var G__20999 = cljs.core.next.call(null,seq__20978_20992__$1);
var G__21000 = null;
var G__21001 = (0);
var G__21002 = (0);
seq__20978_20982 = G__20999;
chunk__20979_20983 = G__21000;
count__20980_20984 = G__21001;
i__20981_20985 = G__21002;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__21007_21011 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21008_21012 = null;
var count__21009_21013 = (0);
var i__21010_21014 = (0);
while(true){
if((i__21010_21014 < count__21009_21013)){
var node_21015 = cljs.core._nth.call(null,chunk__21008_21012,i__21010_21014);
goog.dom.classes.toggle(node_21015,class$);

var G__21016 = seq__21007_21011;
var G__21017 = chunk__21008_21012;
var G__21018 = count__21009_21013;
var G__21019 = (i__21010_21014 + (1));
seq__21007_21011 = G__21016;
chunk__21008_21012 = G__21017;
count__21009_21013 = G__21018;
i__21010_21014 = G__21019;
continue;
} else {
var temp__4425__auto___21020 = cljs.core.seq.call(null,seq__21007_21011);
if(temp__4425__auto___21020){
var seq__21007_21021__$1 = temp__4425__auto___21020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21007_21021__$1)){
var c__17608__auto___21022 = cljs.core.chunk_first.call(null,seq__21007_21021__$1);
var G__21023 = cljs.core.chunk_rest.call(null,seq__21007_21021__$1);
var G__21024 = c__17608__auto___21022;
var G__21025 = cljs.core.count.call(null,c__17608__auto___21022);
var G__21026 = (0);
seq__21007_21011 = G__21023;
chunk__21008_21012 = G__21024;
count__21009_21013 = G__21025;
i__21010_21014 = G__21026;
continue;
} else {
var node_21027 = cljs.core.first.call(null,seq__21007_21021__$1);
goog.dom.classes.toggle(node_21027,class$);

var G__21028 = cljs.core.next.call(null,seq__21007_21021__$1);
var G__21029 = null;
var G__21030 = (0);
var G__21031 = (0);
seq__21007_21011 = G__21028;
chunk__21008_21012 = G__21029;
count__21009_21013 = G__21030;
i__21010_21014 = G__21031;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_21040__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__21036_21041 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21037_21042 = null;
var count__21038_21043 = (0);
var i__21039_21044 = (0);
while(true){
if((i__21039_21044 < count__21038_21043)){
var node_21045 = cljs.core._nth.call(null,chunk__21037_21042,i__21039_21044);
goog.dom.classes.set(node_21045,classes_21040__$1);

var G__21046 = seq__21036_21041;
var G__21047 = chunk__21037_21042;
var G__21048 = count__21038_21043;
var G__21049 = (i__21039_21044 + (1));
seq__21036_21041 = G__21046;
chunk__21037_21042 = G__21047;
count__21038_21043 = G__21048;
i__21039_21044 = G__21049;
continue;
} else {
var temp__4425__auto___21050 = cljs.core.seq.call(null,seq__21036_21041);
if(temp__4425__auto___21050){
var seq__21036_21051__$1 = temp__4425__auto___21050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21036_21051__$1)){
var c__17608__auto___21052 = cljs.core.chunk_first.call(null,seq__21036_21051__$1);
var G__21053 = cljs.core.chunk_rest.call(null,seq__21036_21051__$1);
var G__21054 = c__17608__auto___21052;
var G__21055 = cljs.core.count.call(null,c__17608__auto___21052);
var G__21056 = (0);
seq__21036_21041 = G__21053;
chunk__21037_21042 = G__21054;
count__21038_21043 = G__21055;
i__21039_21044 = G__21056;
continue;
} else {
var node_21057 = cljs.core.first.call(null,seq__21036_21051__$1);
goog.dom.classes.set(node_21057,classes_21040__$1);

var G__21058 = cljs.core.next.call(null,seq__21036_21051__$1);
var G__21059 = null;
var G__21060 = (0);
var G__21061 = (0);
seq__21036_21041 = G__21058;
chunk__21037_21042 = G__21059;
count__21038_21043 = G__21060;
i__21039_21044 = G__21061;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__21066_21070 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21067_21071 = null;
var count__21068_21072 = (0);
var i__21069_21073 = (0);
while(true){
if((i__21069_21073 < count__21068_21072)){
var node_21074 = cljs.core._nth.call(null,chunk__21067_21071,i__21069_21073);
goog.dom.setTextContent(node_21074,value);

var G__21075 = seq__21066_21070;
var G__21076 = chunk__21067_21071;
var G__21077 = count__21068_21072;
var G__21078 = (i__21069_21073 + (1));
seq__21066_21070 = G__21075;
chunk__21067_21071 = G__21076;
count__21068_21072 = G__21077;
i__21069_21073 = G__21078;
continue;
} else {
var temp__4425__auto___21079 = cljs.core.seq.call(null,seq__21066_21070);
if(temp__4425__auto___21079){
var seq__21066_21080__$1 = temp__4425__auto___21079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21066_21080__$1)){
var c__17608__auto___21081 = cljs.core.chunk_first.call(null,seq__21066_21080__$1);
var G__21082 = cljs.core.chunk_rest.call(null,seq__21066_21080__$1);
var G__21083 = c__17608__auto___21081;
var G__21084 = cljs.core.count.call(null,c__17608__auto___21081);
var G__21085 = (0);
seq__21066_21070 = G__21082;
chunk__21067_21071 = G__21083;
count__21068_21072 = G__21084;
i__21069_21073 = G__21085;
continue;
} else {
var node_21086 = cljs.core.first.call(null,seq__21066_21080__$1);
goog.dom.setTextContent(node_21086,value);

var G__21087 = cljs.core.next.call(null,seq__21066_21080__$1);
var G__21088 = null;
var G__21089 = (0);
var G__21090 = (0);
seq__21066_21070 = G__21087;
chunk__21067_21071 = G__21088;
count__21068_21072 = G__21089;
i__21069_21073 = G__21090;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__21095_21099 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21096_21100 = null;
var count__21097_21101 = (0);
var i__21098_21102 = (0);
while(true){
if((i__21098_21102 < count__21097_21101)){
var node_21103 = cljs.core._nth.call(null,chunk__21096_21100,i__21098_21102);
goog.dom.forms.setValue(node_21103,value);

var G__21104 = seq__21095_21099;
var G__21105 = chunk__21096_21100;
var G__21106 = count__21097_21101;
var G__21107 = (i__21098_21102 + (1));
seq__21095_21099 = G__21104;
chunk__21096_21100 = G__21105;
count__21097_21101 = G__21106;
i__21098_21102 = G__21107;
continue;
} else {
var temp__4425__auto___21108 = cljs.core.seq.call(null,seq__21095_21099);
if(temp__4425__auto___21108){
var seq__21095_21109__$1 = temp__4425__auto___21108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21095_21109__$1)){
var c__17608__auto___21110 = cljs.core.chunk_first.call(null,seq__21095_21109__$1);
var G__21111 = cljs.core.chunk_rest.call(null,seq__21095_21109__$1);
var G__21112 = c__17608__auto___21110;
var G__21113 = cljs.core.count.call(null,c__17608__auto___21110);
var G__21114 = (0);
seq__21095_21099 = G__21111;
chunk__21096_21100 = G__21112;
count__21097_21101 = G__21113;
i__21098_21102 = G__21114;
continue;
} else {
var node_21115 = cljs.core.first.call(null,seq__21095_21109__$1);
goog.dom.forms.setValue(node_21115,value);

var G__21116 = cljs.core.next.call(null,seq__21095_21109__$1);
var G__21117 = null;
var G__21118 = (0);
var G__21119 = (0);
seq__21095_21099 = G__21116;
chunk__21096_21100 = G__21117;
count__21097_21101 = G__21118;
i__21098_21102 = G__21119;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__16793__auto__ = allows_inner_html_QMARK_;
if(and__16793__auto__){
var and__16793__auto____$1 = (function (){var or__16805__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__16793__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__16793__auto____$1;
}
} else {
return and__16793__auto__;
}
})())){
var value_21130 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__21126_21131 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__21127_21132 = null;
var count__21128_21133 = (0);
var i__21129_21134 = (0);
while(true){
if((i__21129_21134 < count__21128_21133)){
var node_21135 = cljs.core._nth.call(null,chunk__21127_21132,i__21129_21134);
node_21135.innerHTML = value_21130;

var G__21136 = seq__21126_21131;
var G__21137 = chunk__21127_21132;
var G__21138 = count__21128_21133;
var G__21139 = (i__21129_21134 + (1));
seq__21126_21131 = G__21136;
chunk__21127_21132 = G__21137;
count__21128_21133 = G__21138;
i__21129_21134 = G__21139;
continue;
} else {
var temp__4425__auto___21140 = cljs.core.seq.call(null,seq__21126_21131);
if(temp__4425__auto___21140){
var seq__21126_21141__$1 = temp__4425__auto___21140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21126_21141__$1)){
var c__17608__auto___21142 = cljs.core.chunk_first.call(null,seq__21126_21141__$1);
var G__21143 = cljs.core.chunk_rest.call(null,seq__21126_21141__$1);
var G__21144 = c__17608__auto___21142;
var G__21145 = cljs.core.count.call(null,c__17608__auto___21142);
var G__21146 = (0);
seq__21126_21131 = G__21143;
chunk__21127_21132 = G__21144;
count__21128_21133 = G__21145;
i__21129_21134 = G__21146;
continue;
} else {
var node_21147 = cljs.core.first.call(null,seq__21126_21141__$1);
node_21147.innerHTML = value_21130;

var G__21148 = cljs.core.next.call(null,seq__21126_21141__$1);
var G__21149 = null;
var G__21150 = (0);
var G__21151 = (0);
seq__21126_21131 = G__21148;
chunk__21127_21132 = G__21149;
count__21128_21133 = G__21150;
i__21129_21134 = G__21151;
continue;
}
} else {
}
}
break;
}
}catch (e21125){if((e21125 instanceof Error)){
var e_21152 = e21125;
domina.replace_children_BANG_.call(null,content,value_21130);
} else {
throw e21125;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var args21153 = [];
var len__17863__auto___21156 = arguments.length;
var i__17864__auto___21157 = (0);
while(true){
if((i__17864__auto___21157 < len__17863__auto___21156)){
args21153.push((arguments[i__17864__auto___21157]));

var G__21158 = (i__17864__auto___21157 + (1));
i__17864__auto___21157 = G__21158;
continue;
} else {
}
break;
}

var G__21155 = args21153.length;
switch (G__21155) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21153.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__16793__auto__ = bubble;
if(cljs.core.truth_(and__16793__auto__)){
return (value == null);
} else {
return and__16793__auto__;
}
})())){
var temp__4425__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;
/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__16805__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__21166_21170 = cljs.core.seq.call(null,children);
var chunk__21167_21171 = null;
var count__21168_21172 = (0);
var i__21169_21173 = (0);
while(true){
if((i__21169_21173 < count__21168_21172)){
var child_21174 = cljs.core._nth.call(null,chunk__21167_21171,i__21169_21173);
frag.appendChild(child_21174);

var G__21175 = seq__21166_21170;
var G__21176 = chunk__21167_21171;
var G__21177 = count__21168_21172;
var G__21178 = (i__21169_21173 + (1));
seq__21166_21170 = G__21175;
chunk__21167_21171 = G__21176;
count__21168_21172 = G__21177;
i__21169_21173 = G__21178;
continue;
} else {
var temp__4425__auto___21179 = cljs.core.seq.call(null,seq__21166_21170);
if(temp__4425__auto___21179){
var seq__21166_21180__$1 = temp__4425__auto___21179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21166_21180__$1)){
var c__17608__auto___21181 = cljs.core.chunk_first.call(null,seq__21166_21180__$1);
var G__21182 = cljs.core.chunk_rest.call(null,seq__21166_21180__$1);
var G__21183 = c__17608__auto___21181;
var G__21184 = cljs.core.count.call(null,c__17608__auto___21181);
var G__21185 = (0);
seq__21166_21170 = G__21182;
chunk__21167_21171 = G__21183;
count__21168_21172 = G__21184;
i__21169_21173 = G__21185;
continue;
} else {
var child_21186 = cljs.core.first.call(null,seq__21166_21180__$1);
frag.appendChild(child_21186);

var G__21187 = cljs.core.next.call(null,seq__21166_21180__$1);
var G__21188 = null;
var G__21189 = (0);
var G__21190 = (0);
seq__21166_21170 = G__21187;
chunk__21167_21171 = G__21188;
count__21168_21172 = G__21189;
i__21169_21173 = G__21190;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__21160_SHARP_,p2__21161_SHARP_){
return f.call(null,p1__21160_SHARP_,p2__21161_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args21191 = [];
var len__17863__auto___21194 = arguments.length;
var i__17864__auto___21195 = (0);
while(true){
if((i__17864__auto___21195 < len__17863__auto___21194)){
args21191.push((arguments[i__17864__auto___21195]));

var G__21196 = (i__17864__auto___21195 + (1));
i__17864__auto___21195 = G__21196;
continue;
} else {
}
break;
}

var G__21193 = args21191.length;
switch (G__21193) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21191.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;
domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var args21198 = [];
var len__17863__auto___21201 = arguments.length;
var i__17864__auto___21202 = (0);
while(true){
if((i__17864__auto___21202 < len__17863__auto___21201)){
args21198.push((arguments[i__17864__auto___21202]));

var G__21203 = (i__17864__auto___21202 + (1));
i__17864__auto___21202 = G__21203;
continue;
} else {
}
break;
}

var G__21200 = args21198.length;
switch (G__21200) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21198.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;
/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__16793__auto__ = obj;
if(cljs.core.truth_(and__16793__auto__)){
var and__16793__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__16793__auto____$1){
return obj.length;
} else {
return and__16793__auto____$1;
}
} else {
return and__16793__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || (list_thing.cljs$core$ISeqable$))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=domina.js.map?rel=1454610506264