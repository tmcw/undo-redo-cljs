(ns undo-redo.core
  (:require [domina :as domina]
            [domina.events :as events]
            [domina.css :as css]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:dots []}))

(domina/destroy! (domina/by-id "wrapper"))

(domina/append!
  (domina.css/sel "body")
    "<div id='wrapper'><div id='dots'></div><button id='undo'>undo</button><button id='redo'>redo</button></div>")

(domina/set-styles! (domina/by-id "dots") {
  :width "600px" :height "200px" :background "#EFEFEF" :cursor "crosshair"})

(defn draw [dots]
  (js/console.log (count dots))
  (domina/destroy! (domina/by-class "dot"))
  (doall
    (map
      (fn [dot] (domina/append!
        (domina/by-id "dots")
        (str "<div id=" (:id dot) " "
             "style='left:" (:x dot) "px;"
             "top:" (:y dot) "px"
             "' class='dot'></div>")))
      dots)))

(events/listen!
  (domina/by-id "dots") :click
  (fn [evt]
    (swap!
      app-state
      update-in [:dots]
        (fn [old-dots]
          (conj old-dots {
            :x  (:offsetX evt)
            :y  (:offsetY evt)
            :id (.getTime (js/Date.))
          })))
    (draw (:dots @app-state))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
