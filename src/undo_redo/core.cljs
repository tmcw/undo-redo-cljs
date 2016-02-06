(ns undo-redo.core
  (:require [domina :as domina]
            [domina.events :as events]
            [domina.css :as css]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {
  :historyIndex 0
  :history [[]]
}))

(domina/destroy! (domina/by-id "wrapper"))

(domina/append!
  (domina.css/sel "body")
    "<div id='wrapper'><div id='dots'></div><button id='undo'>undo</button><button id='redo'>redo</button></div>")

(domina/set-styles! (domina/by-id "dots") {
  :width "600px" :height "200px" :background "#EFEFEF" :cursor "crosshair"})

(defn draw [dots]
  ;; (js/console.log (count dots))
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
    (if (not= (count (:history @app-state)) (dec (:historyIndex @app-state)))
      (swap!
        app-state update-in [:history] (fn [old-history]
          (subvec old-history 0 (inc (:historyIndex @app-state))))))
    (swap!
      app-state update-in [:historyIndex] inc)
    (swap!
      app-state
      update-in [:history]
        (fn [old-history]
          (conj old-history 
            (conj (peek old-history) {
              :x  (:offsetX evt)
              :y  (:offsetY evt)
              :id (.getTime (js/Date.))
            }))))
    (draw
      (get-in @app-state [:history (:historyIndex @app-state)]))))

(events/listen!
  (domina/by-id "redo") :click
    (fn [evt]
      (js/console.log (:historyIndex @app-state))
      (swap!
        app-state
          update-in [:historyIndex]
            (fn [old-index]
              (min (inc old-index) (dec (count (:history @app-state))))))
    (draw
      (get-in @app-state [:history (:historyIndex @app-state)]))))

(events/listen!
  (domina/by-id "undo") :click
    (fn [evt]
      (js/console.log (:historyIndex @app-state))
      (swap!
        app-state
          update-in [:historyIndex]
            (fn [old-index] (max (dec old-index) 0)))
    (draw
      (get-in @app-state [:history (:historyIndex @app-state)]))))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
