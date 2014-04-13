var item;
var component;

function luoLomake(lomakeTeksti) {
    var lomakeItem = "import QtQuick 2.0; import Sailfish.Silica 1.0; ";
    lomakeItem += "Column { id: content; width: parent.width; ";

    var teksti = JSON.parse(lomakeTeksti);
    var fields = teksti.observation.field;
    var mandatory;
    console.debug("Lomaketta luodaan..")
    for (var i in fields) {
        item = fields[i];
        if (item.field_type === "text") {
            console.debug("Text type of field")
            component = Qt.createComponent("pages/components/TekstiKentta.qml");
            if (odotaLatausta())
            {
                luoTekstiKentta()
            }
        } else if (fields[i].field_type === "numeric") {
            console.debug("Numeric type of field")
            component = Qt.createComponent("pages/components/NumeroKentta.qml");
            if (odotaLatausta())
            {
                luoNumeroKentta()
            }
        } else if (fields[i].field_type === "select") {
            console.debug("Select type of field")
            component = Qt.createComponent("pages/components/SelectKentta.qml");
            if (odotaLatausta())
            {
                luoSelectKentta()
            }
        }
        /*else if (fields[i].field_type === "time") {
            lomakeItem += luoAikaKentta(fields[i].field_label)
        }
        */
    }
    return;
}

function odotaLatausta()
{
    while (component.status !== Component.Ready)
    {
        if (component.status === Component.Error)
        {
            console.debug("Component got error: " + component.errorString())
            return false;
        }
        continue;
    }
    return true;
}

function luoTekstiKentta()
{
    var maxLength = -1;
    if (item.hasOwnProperty('field_max_length')) {
        maxLength = item.field_max_length
    }
    component.createObject(col, {"fieldId": item.field_id,
                               "mandatory": (item.field_mandatory !== "0"),
                               "title": item.field_label,
                               "maxLength": maxLength})
}

function luoNumeroKentta()
{
    component.createObject(col, {"fieldId": item.field_id,
                               "mandatory": (item.field_mandatory !== "0"),
                               "title": item.field_label})
}

function luoSelectKentta()
{
    component.createObject(col, {"fieldId": item.field_id,
                               "mandatory": (item.field_mandatory !== "0"),
                               "title": item.field_label,
                               "values": item.values.value})
}

function luoAikaKentta(title)
{
    console.debug("creating time picker field " + title)
    var teksti = "Label { text: \" " + title + "\" } ";
    teksti += "TimePicker { hour: 0; minute: 0 } ";
    return teksti;
}
