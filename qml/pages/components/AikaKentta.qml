import QtQuick 2.0
import Sailfish.Silica 1.0

LomakeItem {
    property var time: Qt.formatDateTime(new Date(), "hh:mm:ss")
    Component.onCompleted: {
        console.debug("Aikakentta: " + title + " | " + mandatory + " | " + fieldId);
    }
    value: Qt.formatTime(time, "hh:mm:ss");
    ValueButton {
        id: button
        width: parent.width
        label: title
        value: time

        onClicked: {
            var dialog = pageStack.push("Sailfish.Silica.TimePickerDialog", { time: new Date() })

            dialog.accepted.connect(function() {
                time = Qt.formatTime(dialog.time, "hh:mm:ss")
            })
        }
    }
}
