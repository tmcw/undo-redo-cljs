(ns undo-redo.core
  (:require [domina :as domina]
            [domina.events :as events]
            [domina.css :as css]))

(enable-console-print!)

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

(defn delete-future []
  (if (not= (count (:history @app-state)) (dec (:historyIndex @app-state)))
    (swap!
      app-state update-in [:history] (fn [old-history]
        (subvec old-history 0 (inc (:historyIndex @app-state)))))))

(defn new-version [creator]
  (delete-future)
  (swap!
    app-state update-in [:historyIndex] inc)
  (swap!
    app-state update-in [:history]
      (fn [old-history]
        (conj old-history (creator (peek old-history))))))

(defn current-dots []
  (get-in @app-state [:history (:historyIndex @app-state)]))

(defn draw [dots]
  (domina/destroy! (domina/by-class "dot"))
  (doall
    (map
      (fn [dot]
        (domina/append!
          (domina/by-id "dots")
          (str "<div id=" (:id dot) " "
            "style='left:" (:x dot) "px;"
            "top:" (:y dot) "px"
            "' class='dot'></div>"))
        (events/listen!
           (domina/by-id (str (:id dot))) :click
           (partial (fn [id evt]
               ;; prevent this event from falling through to the
               ;; element under the dot
               (events/stop-propagation evt)
               (new-version (fn [old-history]
                 (filterv
                   (fn [dot] (not= id (:id dot)))
                   old-history)))
               (draw (current-dots)))
             (:id dot))))
    dots)))

(events/listen!
  (domina/by-id "dots") :click
  (fn [evt]
    (new-version (fn [old-history]
      (conj old-history {
        :x  (:offsetX evt)
        :y  (:offsetY evt)
        :id (.getTime (js/Date.))
      })))
    (draw (current-dots))))

(events/listen!
  (domina/by-id "redo") :click
    (fn [evt]
      (swap! app-state update-in [:historyIndex]
        (fn [old-index]
          (min (inc old-index) (dec (count (:history @app-state))))))
    (draw (current-dots))))

(events/listen!
  (domina/by-id "undo") :click
    (fn [evt]
      (swap! app-state update-in [:historyIndex]
        (fn [old-index]
          (max (dec old-index) 0)))
    (draw (current-dots))))
