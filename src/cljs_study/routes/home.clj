(ns cljs-study.routes.home
  (:require [cljs-study.layout :as layout]
            [cljs-study.util :as util]
            [compojure.core :refer :all]
            [noir.response :refer [edn json]]
            [clojure.pprint :refer [pprint]]))

(defn table-sample-page []
      (layout/render
        "table-sample.html" {:content (util/md->html "/md/docs.md")}))

(defn about-page []
      (layout/render
        "about.html" {:content (util/md->html "/md/docs.md")}))

(defn home-page []
      (layout/render
        "home.html" {:content (util/md->html "/md/docs.md")}))

(defn save-document [doc]
      (pprint doc)
      {:status "ok"})

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page))
  (GET "/table-data" [] (json (map (fn [i]
                                     (hash-map :id i :val (* 2 i))
                                     [i "hoge-" (* 2 i)]
                                     ) (range 100))))
  (GET "/table-sample" [] (table-sample-page))
  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params))))
