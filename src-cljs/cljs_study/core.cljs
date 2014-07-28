(ns cljs-study.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [POST]]))

(def state (atom {:doc {}
                  :saved? true
                  :alert-showing? false}))

(defn set-value!
  [id value]
  (swap! state assoc :saved? false)
  (swap! state assoc-in [:doc id] value))

(defn get-value
  [id]
  (get-in @state [:doc id]))

(defn row
  [label & body]
  [:div {:class "control-group column-group"}
   [:div {:class "all-20"}
    [:label {:for label :class "align-right"} label]]
   [:div {:class "control all-80"}
    body]])

(defn text-input
  [id label]
  [row label
   [:input {:type "text"
            :value (get-value id)
            :placeholder label
            :onChange #(set-value! id (-> % .-target .-value))}]])

(defn save-doc
  []
  (POST (str js/context "/save")
      {:params (:doc @state)
       :handler (fn [{:keys [status other] :as results}]
                  (.log js/console status)
                  (swap! state assoc
                         :saved? true
                         :alert-showing? true))}))

(defn handle-button-click!
  [event]
  (save-doc))

(defn basic-alert
  [label]
  (fn []
    (when (:alert-showing? @state)
      (js/setTimeout #(swap! state assoc :alert-showing? false) 1500)
      (swap! state assoc :alert-showing? true)
      [:div {:class "ink-alert basic info" :role "alert"}
       [:button {:class "ink-dismiss"} " "]
       [:p [:b "Info:"] label]])))

(defn my-button
  [label handler & opts] ;; TODO: opts handling
  [:button {:class "ink-button red"
            :disabled (:saved? @state)
            :onClick handler} label])

(defn home
  []
  [:form {:class "ink-form" :action "#"}
   [basic-alert "保存しました。"]
   [text-input :first-name "First name"]
   [text-input :last-name "Last name"]
   [:div {:class "control-group column-group"}
    [my-button "保存" handle-button-click!]]])

;;start the app
(reagent/render-component [home] (.getElementById js/document "app"))
