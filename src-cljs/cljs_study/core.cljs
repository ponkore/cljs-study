(ns cljs-study.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [POST]]))

(def state (atom {:doc {} :saved? false}))

(defn set-value!
  [id value]
  (swap! state assoc :saved? false)
  (swap! state assoc-in [:doc id] value))

(defn get-value
  [id]
  (get-in @state [:doc id]))

(defn row
  [label & body]
  [:div {:class "control-group column-group gutters"}
   [:label {:for label :class "all-20 align-right"} label]
   [:div {:class "control all-80"}
    body]])

(defn text-input
  [id label]
  [row label
   [:input {:type "text"
            :value (get-value id)
            :placeholder label
            :onChange #(set-value! id (-> % .-target .-value))}]])

(defn list-item
  [id k v states]
  (letfn [(handle-click! []
            (swap! (get states k) not)
            (set-value! id (->> states (filter (fn [[_ v]] @v)) keys)))]
    [:li {:class (when @(get states k) "active") :onClick handle-click!}
     v]))

(defn selection-list
  [id label & items]
  (let [states (->> items
                    (map (fn [[k _]] [k (atom false)]))
                    (into {}))]
    (fn []
      [row label
       [:div {:class "ink-navigation"} ;; :ul.list-group
        [:ul {:class "dropdown"}
         (for [[k v] items]
           [list-item id k v states])]]])))

(defn save-doc
  []
  (POST (str js/context "/save")
      {:params (:doc @state)
       :handler (fn [_] (swap! state assoc :saved? true))}))

(defn handle-button-click!
  [event]
  ;; (set! (-> event .-target .-disabled) true)
  ;; ;; TODO: invoke async
  ;; (set! (-> event .-target .-disabled) false)
  (save-doc))

(defn basic-alert
  [label]
  [:div {:class "ink-alert basic" :role "alert"}
   [:button {:class "ink-dismiss"} ""]
   [:p [:b "Info:"] label]])

(defn my-button
  [label handler & opts] ;; TODO: opts handling
  [:button {:class "ink-button" :onClick handler} label])

;;
;; TODO: try checkbox
;;
(defn home
  []
  [:form {:class "ink-form" :action "#"}
   ;;[:div.page-header [:h1 "Reagent Form"]]
   (when (:saved? @state) (basic-alert "保存しました。"))
   [text-input :first-name "First name"]
   [text-input :last-name "Last name"]
   [selection-list :favorite-drinks "Favorite drinks"
    [:coffee "Coffee"]
    [:beer "Beer"]
    [:crab-juice "Crab juice"]]
   [my-button "保存" handle-button-click!]
   ])

;;start the app
(reagent/render-component [home] (.getElementById js/document "app"))
