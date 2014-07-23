(defproject
  cljs-study
  "0.1.0-SNAPSHOT"
  :repl-options
  {:init-ns cljs-study.repl}
  :dependencies
  [[ring-server "0.3.1"]
   [noir-exception "0.2.2"]
   [reagent "0.4.2"]
   [environ "0.5.0"]
   [clj-time "0.7.0"]
   [org.clojure/core.memoize "0.5.6"]
   [com.taoensso/timbre "3.2.1"]
   [org.clojure/clojurescript "0.0-2268"]
   [markdown-clj "0.9.47"]
   [org.clojure/clojure "1.6.0"]
   [com.taoensso/tower "2.0.2"]
   [cljs-ajax "0.2.6"]
   [secretary "1.2.0"]
   [lib-noir "0.8.4"]
   [selmer "0.6.9"]]
  :cljsbuild
  {:builds
   [{:source-paths ["src-cljs"],
     :compiler
     {:pretty-print true,
      :output-dir "resources/public/js/",
      :source-map true,
      :output-to "resources/public/js/app.js",
      :optimizations :none},
     :id "dev"}
    {:source-paths ["src-cljs"],
     :compiler
     {:pretty-print false,
      :closure-warnings {:non-standard-jsdoc :off},
      :output-to "resources/public/js/app.js",
      :output-wrapper false,
      :optimizations :advanced},
     :id "release"}]}
  :ring
  {:handler cljs-study.handler/app,
   :init cljs-study.handler/init,
   :destroy cljs-study.handler/destroy}
  :profiles
  {:uberjar {:aot :all},
   :production
   {:ring
    {:open-browser? false, :stacktraces? false, :auto-reload? false}},
   :dev
   {:dependencies
    [[ring-mock "0.1.5"]
     [ring/ring-devel "1.3.0"]
     [pjstadig/humane-test-output "0.6.0"]],
    :injections
    [(require 'pjstadig.humane-test-output)
     (pjstadig.humane-test-output/activate!)],
    :env {:dev true}}}
  :url
  "http://example.com/FIXME"
  ;; :jvm-opts
  ;; ["-server"]
  :plugins
  [[lein-ring "0.8.10"]
   [lein-environ "0.5.0"]
   [lein-cljsbuild "1.0.3"]]
  :description
  "FIXME: write description"
  :min-lein-version "2.0.0")
