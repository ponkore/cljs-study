(ns cljs-study.routes.home
  (:require [cljs-study.layout :as layout]
            [cljs-study.util :as util]
            [compojure.core :refer :all]
            [noir.response :refer [edn]]
            [clojure.pprint :refer [pprint]]))

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
  (POST "/save" {:keys [body-params]}
    (edn (save-document body-params))))
