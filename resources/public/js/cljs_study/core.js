// Compiled by ClojureScript 0.0-2268
goog.provide('cljs_study.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.core');
cljs_study.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
cljs_study.core.set_value_BANG_ = (function set_value_BANG_(id,value){cljs.core.swap_BANG_.call(null,cljs_study.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);
return cljs.core.swap_BANG_.call(null,cljs_study.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null),value);
});
cljs_study.core.get_value = (function get_value(id){return cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs_study.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),id], null));
});
/**
* @param {...*} var_args
*/
cljs_study.core.row = (function() { 
var row__delegate = function (label,body){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),body], null)], null);
};
var row = function (label,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,label,body);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__6659){
var label = cljs.core.first(arglist__6659);
var body = cljs.core.rest(arglist__6659);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
cljs_study.core.text_input = (function text_input(id,label){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"value","value",305978217),cljs_study.core.get_value.call(null,id),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__6660_SHARP_){return cljs_study.core.set_value_BANG_.call(null,id,p1__6660_SHARP_.target.value);
})], null)], null)], null);
});
cljs_study.core.list_item = (function list_item(id,k,v,states){var handle_click_BANG_ = (function handle_click_BANG_(){cljs.core.swap_BANG_.call(null,cljs.core.get.call(null,states,k),cljs.core.not);
return cljs_study.core.set_value_BANG_.call(null,id,cljs.core.keys.call(null,cljs.core.filter.call(null,(function (p__6675){var vec__6676 = p__6675;var _ = cljs.core.nth.call(null,vec__6676,(0),null);var v__$1 = cljs.core.nth.call(null,vec__6676,(1),null);return cljs.core.deref.call(null,v__$1);
}),states)));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("list-group-item"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,cljs.core.get.call(null,states,k)))?" active":null))),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_click_BANG_], null),v], null);
});
/**
* @param {...*} var_args
*/
cljs_study.core.selection_list = (function() { 
var selection_list__delegate = function (id,label,items){var states = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6687){var vec__6688 = p__6687;var k = cljs.core.nth.call(null,vec__6688,(0),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reagent.core.atom.call(null,false)], null);
}),items));return ((function (states){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),(function (){var iter__4172__auto__ = ((function (states){
return (function iter__6689(s__6690){return (new cljs.core.LazySeq(null,((function (states){
return (function (){var s__6690__$1 = s__6690;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6690__$1);if(temp__4126__auto__)
{var s__6690__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6690__$2))
{var c__4170__auto__ = cljs.core.chunk_first.call(null,s__6690__$2);var size__4171__auto__ = cljs.core.count.call(null,c__4170__auto__);var b__6692 = cljs.core.chunk_buffer.call(null,size__4171__auto__);if((function (){var i__6691 = (0);while(true){
if((i__6691 < size__4171__auto__))
{var vec__6695 = cljs.core._nth.call(null,c__4170__auto__,i__6691);var k = cljs.core.nth.call(null,vec__6695,(0),null);var v = cljs.core.nth.call(null,vec__6695,(1),null);cljs.core.chunk_append.call(null,b__6692,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.list_item,id,k,v,states], null));
{
var G__6697 = (i__6691 + (1));
i__6691 = G__6697;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6692),iter__6689.call(null,cljs.core.chunk_rest.call(null,s__6690__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6692),null);
}
} else
{var vec__6696 = cljs.core.first.call(null,s__6690__$2);var k = cljs.core.nth.call(null,vec__6696,(0),null);var v = cljs.core.nth.call(null,vec__6696,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.list_item,id,k,v,states], null),iter__6689.call(null,cljs.core.rest.call(null,s__6690__$2)));
}
} else
{return null;
}
break;
}
});})(states))
,null,null));
});})(states))
;return iter__4172__auto__.call(null,items);
})()], null)], null);
});
;})(states))
};
var selection_list = function (id,label,var_args){
var items = null;if (arguments.length > 2) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return selection_list__delegate.call(this,id,label,items);};
selection_list.cljs$lang$maxFixedArity = 2;
selection_list.cljs$lang$applyTo = (function (arglist__6698){
var id = cljs.core.first(arglist__6698);
arglist__6698 = cljs.core.next(arglist__6698);
var label = cljs.core.first(arglist__6698);
var items = cljs.core.rest(arglist__6698);
return selection_list__delegate(id,label,items);
});
selection_list.cljs$core$IFn$_invoke$arity$variadic = selection_list__delegate;
return selection_list;
})()
;
cljs_study.core.save_doc = (function save_doc(){return ajax.core.POST.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+"/save"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_study.core.state)),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){return cljs.core.swap_BANG_.call(null,cljs_study.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true);
})], null));
});
cljs_study.core.err = (function err(){var temp__4124__auto__ = new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_study.core.state));if(cljs.core.truth_(temp__4124__auto__))
{var saved = temp__4124__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"HOGE"], null);
} else
{return null;
}
});
cljs_study.core.home = (function home(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Reagent Form"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.err], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.text_input,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.text_input,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last name"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.selection_list,new cljs.core.Keyword(null,"favorite-drinks","favorite-drinks",-1752184854),"Favorite drinks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coffee","coffee",23772871),"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beer","beer",1742036006),"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crab-juice","crab-juice",-1168836952),"Crab juice"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_study.core.state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Saved"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),cljs_study.core.save_doc], null),"Submit"], null))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.home], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map