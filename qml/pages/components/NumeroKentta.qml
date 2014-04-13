import QtQuick 2.0
import Sailfish.Silica 1.0

LomakeItem {
    Component.onCompleted: {
        console.debug("Numerokentta: " + title + " | " + mandatory + " | " + fieldId);
    }
    Column {
        width: parent.width
        Label {
            text: title
        }
        TextField {
            placeholderText: placeHolderText()
            width: parent.width
            inputMethodHints: Qt.ImhDigitsOnly
        }
    }

    function placeHolderText()
    {
        var text = "";
        if (mandatory) {
            text += "Pakollinen. ";
        } else {
            text += "Vapaaehtoinen. ";
        }
        return text;
    }
}
