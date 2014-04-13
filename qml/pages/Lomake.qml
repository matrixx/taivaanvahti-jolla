import QtQuick 2.0
import Sailfish.Silica 1.0
import "components"
import "../lomake.js" as LomakeScript

Page {
    id: lomakePage
    property alias category: header.title
    property string lomakeText: ""
    SilicaFlickable {
        id: flick
        anchors.fill: parent
        contentHeight: header.height + col.height + Theme.PaddingLarge

        Component.onCompleted: {
            LomakeScript.luoLomake(lomakeText);
        }

        ScrollDecorator { flickable: flick }

        PageHeader {
            id: header
        }

        Column {
            id: col
            spacing: Theme.paddingLarge
            anchors.top: header.bottom
            anchors.topMargin: 0
            anchors.left: parent.left
            anchors.leftMargin: Theme.paddingLarge
            anchors.right: parent.right
            anchors.rightMargin: Theme.paddingLarge
        }
    }
}
