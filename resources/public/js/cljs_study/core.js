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
var row__delegate = function (label,body){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control-group column-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"all-20"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"for","for",-1323786319),label,new cljs.core.Keyword(null,"class","class",-2030961996),"align-right"], null),label], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control all-80"], null),body], null)], null);
};
var row = function (label,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,label,body);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__6226){
var label = cljs.core.first(arglist__6226);
var body = cljs.core.rest(arglist__6226);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
cljs_study.core.text_input = (function text_input(id,label){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs_study.core.get_value.call(null,id),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),label,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__6227_SHARP_){return cljs_study.core.set_value_BANG_.call(null,id,p1__6227_SHARP_.target.value);
})], null)], null)], null);
});
cljs_study.core.handle_selection_change_BANG_ = (function handle_selection_change_BANG_(id,event){var target = event.target;return cljs_study.core.set_value_BANG_.call(null,id,target.selectedIndex);
});
/**
* @param {...*} var_args
*/
cljs_study.core.selection_list = (function() { 
var selection_list__delegate = function (id,label,items){var states = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6238){var vec__6239 = p__6238;var k = cljs.core.nth.call(null,vec__6239,(0),null);var _ = cljs.core.nth.call(null,vec__6239,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reagent.core.atom.call(null,false)], null);
}),items));return ((function (states){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.row,label,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"hoge",new cljs.core.Keyword(null,"onChange","onChange",-312891301),cljs.core.partial.call(null,cljs_study.core.handle_selection_change_BANG_,id)], null),(function (){var iter__4268__auto__ = ((function (states){
return (function iter__6240(s__6241){return (new cljs.core.LazySeq(null,((function (states){
return (function (){var s__6241__$1 = s__6241;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6241__$1);if(temp__4126__auto__)
{var s__6241__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6241__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__6241__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__6243 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__6242 = (0);while(true){
if((i__6242 < size__4267__auto__))
{var vec__6246 = cljs.core._nth.call(null,c__4266__auto__,i__6242);var k = cljs.core.nth.call(null,vec__6246,(0),null);var v = cljs.core.nth.call(null,vec__6246,(1),null);cljs.core.chunk_append.call(null,b__6243,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k], null),v], null));
{
var G__6248 = (i__6242 + (1));
i__6242 = G__6248;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6243),iter__6240.call(null,cljs.core.chunk_rest.call(null,s__6241__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6243),null);
}
} else
{var vec__6247 = cljs.core.first.call(null,s__6241__$2);var k = cljs.core.nth.call(null,vec__6247,(0),null);var v = cljs.core.nth.call(null,vec__6247,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),k], null),v], null),iter__6240.call(null,cljs.core.rest.call(null,s__6241__$2)));
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
})()], null)], null);
});
;})(states))
};
var selection_list = function (id,label,var_args){
var items = null;if (arguments.length > 2) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return selection_list__delegate.call(this,id,label,items);};
selection_list.cljs$lang$maxFixedArity = 2;
selection_list.cljs$lang$applyTo = (function (arglist__6249){
var id = cljs.core.first(arglist__6249);
arglist__6249 = cljs.core.next(arglist__6249);
var label = cljs.core.first(arglist__6249);
var items = cljs.core.rest(arglist__6249);
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
var my_button__delegate = function (label,handler,opts){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ink-button red",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handler], null),label], null);
};
var my_button = function (label,handler,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return my_button__delegate.call(this,label,handler,opts);};
my_button.cljs$lang$maxFixedArity = 2;
my_button.cljs$lang$applyTo = (function (arglist__6250){
var label = cljs.core.first(arglist__6250);
arglist__6250 = cljs.core.next(arglist__6250);
var handler = cljs.core.first(arglist__6250);
var opts = cljs.core.rest(arglist__6250);
return my_button__delegate(label,handler,opts);
});
my_button.cljs$core$IFn$_invoke$arity$variadic = my_button__delegate;
return my_button;
})()
;
cljs_study.core.home = (function home(){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ink-form"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_study.core.state)))?cljs_study.core.basic_alert.call(null,"\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002"):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.text_input,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.text_input,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last name"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.selection_list,new cljs.core.Keyword(null,"favorite-drinks","favorite-drinks",-1752184854),"Favorite drinks",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coffee","coffee",23772871),"Coffee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beer","beer",1742036006),"Beer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"crab-juice","crab-juice",-1168836952),"Crab juice"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control-group column-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.my_button,"\u4FDD\u5B58",cljs_study.core.handle_button_click_BANG_], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.home], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map