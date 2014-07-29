// Compiled by ClojureScript 0.0-2268
goog.provide('cljs_study.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.core');
cljs_study.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true,new cljs.core.Keyword(null,"alert-showing?","alert-showing?",-922784401),false], null));
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
row.cljs$lang$applyTo = (function (arglist__5200){
var label = cljs.core.first(arglist__5200);
var body = cljs.core.rest(arglist__5200);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
cljs_study.core.text_input = (function text_input(id,label){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs_study.core.get_value.call(null,id),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),label,new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__5201_SHARP_){return cljs_study.core.set_value_BANG_.call(null,id,p1__5201_SHARP_.target.value);
})], null)], null)], null);
});
cljs_study.core.save_doc = (function save_doc(){return ajax.core.POST.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context)+"/save"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_study.core.state)),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p__5204){var map__5205 = p__5204;var map__5205__$1 = ((cljs.core.seq_QMARK_.call(null,map__5205))?cljs.core.apply.call(null,cljs.core.hash_map,map__5205):map__5205);var results = map__5205__$1;var other = cljs.core.get.call(null,map__5205__$1,new cljs.core.Keyword(null,"other","other",995793544));var status = cljs.core.get.call(null,map__5205__$1,new cljs.core.Keyword(null,"status","status",-1997798413));console.log(status);
return cljs.core.swap_BANG_.call(null,cljs_study.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true,new cljs.core.Keyword(null,"alert-showing?","alert-showing?",-922784401),true);
})], null));
});
cljs_study.core.handle_button_click_BANG_ = (function handle_button_click_BANG_(event){return cljs_study.core.save_doc.call(null);
});
cljs_study.core.basic_alert = (function basic_alert(label){return (function (){if(cljs.core.truth_(new cljs.core.Keyword(null,"alert-showing?","alert-showing?",-922784401).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_study.core.state))))
{setTimeout((function (){return cljs.core.swap_BANG_.call(null,cljs_study.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"alert-showing?","alert-showing?",-922784401),false);
}),(1500));
cljs.core.swap_BANG_.call(null,cljs_study.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"alert-showing?","alert-showing?",-922784401),true);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ink-alert basic info",new cljs.core.Keyword(null,"role","role",-736691072),"alert"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ink-dismiss"], null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Info:"], null),label], null)], null);
} else
{return null;
}
});
});
/**
* @param {...*} var_args
*/
cljs_study.core.my_button = (function() { 
var my_button__delegate = function (label,handler,opts){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"ink-button red",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_study.core.state)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handler], null),label], null);
};
var my_button = function (label,handler,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return my_button__delegate.call(this,label,handler,opts);};
my_button.cljs$lang$maxFixedArity = 2;
my_button.cljs$lang$applyTo = (function (arglist__5206){
var label = cljs.core.first(arglist__5206);
arglist__5206 = cljs.core.next(arglist__5206);
var handler = cljs.core.first(arglist__5206);
var opts = cljs.core.rest(arglist__5206);
return my_button__delegate(label,handler,opts);
});
my_button.cljs$core$IFn$_invoke$arity$variadic = my_button__delegate;
return my_button;
})()
;
cljs_study.core.home = (function home(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ink-form",new cljs.core.Keyword(null,"action","action",-811238024),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.basic_alert,"\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.text_input,new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"First name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.text_input,new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Last name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"control-group column-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.my_button,"\u4FDD\u5B58",cljs_study.core.handle_button_click_BANG_], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_study.core.home], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map