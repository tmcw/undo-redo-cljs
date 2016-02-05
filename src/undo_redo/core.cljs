(ns undo-redo.core
  (:require [domina :as domina]
            [domina.events :as events]
            [domina.css :as css]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom { :dots [] }))

(domina/destroy! (domina/by-id "wrapper"))

(domina/append! (domina.css/sel "body")
  "<div id='wrapper'><div id='dots'></div><button id='undo'>undo</button><button id='redo'>redo</button></div>")

(domina/set-styles! (domina/by-id "dots") {
  :width "600px" :height "200px" :background "#EFEFEF" :cursor "crosshair" })

;; printing app state or getting app state to
;; work here at all has been very difficult:
;; it always looks nil, and some print
;; combinations complain about an ISeqable
;; issue
(defn draw []
  (print app-state))

;; (defn draw [] (domina/append!
;;   (domina/by-id "dots")
;;   (str (map
;;     (fn [n] (str "<div id='" n "' class='dot'></div>"))
;;     (map (fn [dot] (get :id dot)) app-state)))))

;; (defn draw [] (map js/console.log app-state))
;; (defn draw [] (map
;;   (fn [dot] (js/console.log dot) app-state)))

(events/listen!
  (domina/by-id "dots") :click
  (fn [evt]
    (swap! app-state {
      :dots [{
        :x (:offsetX evt)
        :y (:offsetY evt)
        :id (.getTime (js/Date.))
      }]
    })))

(events/listen!
  (domina/by-id "dots") :click draw)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
