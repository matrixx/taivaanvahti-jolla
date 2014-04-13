import QtQuick 2.0
import Sailfish.Silica 1.0
import QtPositioning 5.0

LomakeItem {
    property real lat: 0.0
    property real lon: 0.0
    value: coord.text
    Component.onCompleted: {
        console.debug("Koordinaatitkentta: " + title + " | " + mandatory + " | " + fieldId);
    }
    Label {
        id: coord
        width: parent.width
        text: title + ": " + lat + ", " + lon
    }
    PositionSource {
        id: positionSource
        updateInterval: 1000
        onPositionChanged: {
            lat = position.coordinate.latitude
            lon = position.coordinate.longitude
        }
    }
}
