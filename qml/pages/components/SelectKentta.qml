import QtQuick 2.0
import Sailfish.Silica 1.0

LomakeItem {
    property var values: ({})
    Component.onCompleted: {
        console.debug("Selectkentta: " + title + " | " + mandatory + " | " + fieldId);
    }
    ComboBox {
        id: box
        width: parent.width
        label: title
        menu: ContextMenu {
            id: menu
            Repeater {
                model: values
                MenuItem { text: modelData.value_name }
            }
        }
    }
}
