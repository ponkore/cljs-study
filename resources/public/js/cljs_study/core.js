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
var row__delegate = function (label,body){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control-group column-group gutters"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),label,new cljs.core.Keyword(null,"class","class",-2030961996),"all-20 align-right"], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control all-80"], null),body], null)], null);
};
var row = function (label,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,label,body);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__5562){
var label = cljs.core.first(arglist__5562);
var body = cljs.core.rest(arglist__5562);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
cljs_study.core.text_input = (function text_input(id,label){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs_study.core.get_value.call(null,id),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),label,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__5563_SHARP_){return cljs_study.core.set_value_BANG_.call(null,id,p1__5563_SHARP_.target.value);
})], null)], null)], null);
});
cljs_study.core.list_item = (function list_item(id,k,v,states){var handle_click_BANG_ = (function handle_click_BANG_(){cljs.core.swap_BANG_.call(null,cljs.core.get.call(null,states,k),cljs.core.not);
return cljs_study.core.set_value_BANG_.call(null,id,cljs.core.keys.call(null,cljs.core.filter.call(null,(function (p__5578){var vec__5579 = p__5578;var _ = cljs.core.nth.call(null,vec__5579,(0),null);var v__$1 = cljs.core.nth.call(null,vec__5579,(1),null);return cljs.core.deref.call(null,v__$1);
}),states)));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,cljs.core.get.call(null,states,k)))?"active":null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_click_BANG_], null),v], null);
});
/**
* @param {...*} var_args
*/
cljs_study.core.selection_list = (function() { 
var selection_list__delegate = function (id,label,items){var states = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5590){var vec__5591 = p__5590;var k = cljs.core.nth.call(null,vec__5591,(0),null);var _ = cljs.core.nth.call(null,vec__5591,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reagent.core.atom.call(null,false)], null);
}),items));return ((function (states){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.row,label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ink-navigation"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown"], null),(function (){var iter__4268__auto__ = ((function (states){
return (function iter__5592(s__5593){return (new cljs.core.LazySeq(null,((function (states){
return (function (){var s__5593__$1 = s__5593;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5593__$1);if(temp__4126__auto__)
{var s__5593__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5593__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__5593__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__5595 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__5594 = (0);while(true){
if((i__5594 < size__4267__auto__))
{var vec__5598 = cljs.core._nth.call(null,c__4266__auto__,i__5594);var k = cljs.core.nth.call(null,vec__5598,(0),null);var v = cljs.core.nth.call(null,vec__5598,(1),null);cljs.core.chunk_append.call(null,b__5595,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.list_item,id,k,v,states], null));
{
var G__5600 = (i__5594 + (1));
i__5594 = G__5600;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5595),iter__5592.call(null,cljs.core.chunk_rest.call(null,s__5593__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5595),null);
}
} else
{var vec__5599 = cljs.core.first.call(null,s__5593__$2);var k = cljs.core.nth.call(null,vec__5599,(0),null);var v = cljs.core.nth.call(null,vec__5599,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.list_item,id,k,v,states], null),iter__5592.call(null,cljs.core.rest.call(null,s__5593__$2)));
}
} else
{return null;
}
break;
}
});})(states))
,null,null));
});})(states))
;return iter__4268__auto__.call(null,items);
})()], null)], null)], null);
});
;})(states))
};
var selection_list = function (id,label,var_args){
var items = null;if (arguments.length > 2) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return selection_list__delegate.call(this,id,label,items);};
selection_list.cljs$lang$maxFixedArity = 2;
selection_list.cljs$lang$applyTo = (function (arglist__5601){
var id = cljs.core.first(arglist__5601);
arglist__5601 = cljs.core.next(arglist__5601);
var label = cljs.core.first(arglist__5601);
var items = cljs.core.rest(arglist__5601);
return selection_list__delegate(id,label,items);
});
selection_list.cljs$core$IFn$_invoke$arity$variadic = selection_list__delegate;
return selection_list;
})()
;
cljs_study.core.save_doc = (function save_doc(){return ajax.core.POST.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+"/save"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_study.core.state)),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){return cljs.core.swap_BANG_.call(null,cljs_study.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true);
})], null));
});
cljs_study.core.handle_button_click_BANG_ = (function handle_button_click_BANG_(event){return cljs_study.core.save_doc.call(null);
});
cljs_study.core.basic_alert = (function basic_alert(label){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ink-alert basic",new cljs.core.Keyword(null,"role","role",-736691072),"alert"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ink-dismiss"], null),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Info:"], null),label], null)], null);
});
/**
* @param {...*} var_args
*/
cljs_study.core.my_button = (function() { 
var my_button__delegate = function (label,handler,opts){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ink-button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handler], null),label], null);
};
var my_button = function (label,handler,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return my_button__delegate.call(this,label,handler,opts);};
my_button.cljs$lang$maxFixedArity = 2;
my_button.cljs$lang$applyTo = (function (arglist__5602){
var label = cljs.core.first(arglist__5602);
arglist__5602 = cljs.core.next(arglist__5602);
var handler = cljs.core.first(arglist__5602);
var opts = cljs.core.rest(arglist__5602);
return my_button__delegate(label,handler,opts);
});
my_button.cljs$core$IFn$_invoke$arity$variadic = my_button__delegate;
return my_button;
})()
;
cljs_study.core.home = (function home(){return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ink-form",new cljs.core.Keyword(null,"action","action",-811238024),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Reagent Form"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_study.core.state)))?cljs_study.core.basic_alert.call(null,"\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002"):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.text_input,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.text_input,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last name"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.selection_list,new cljs.core.Keyword(null,"favorite-drinks","favorite-drinks",-1752184854),"Favorite drinks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coffee","coffee",23772871),"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beer","beer",1742036006),"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crab-juice","crab-juice",-1168836952),"Crab juice"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.my_button,"\u4FDD\u5B58",cljs_study.core.handle_button_click_BANG_], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.home], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map