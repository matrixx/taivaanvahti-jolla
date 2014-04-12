
function luoLomake(lomakeTeksti) {
    var lomakeItem = "import QtQuick 2.0; import Sailfish.Silica 1.0; Column { id: content; width: parent.width; ";

    var teksti = JSON.parse(lomakeTeksti);
    var fields = teksti.observation.field;
    for (var i in fields) {
        if (fields[i].field_type === "text") {
            var maxLength = -1;
            var mandatory = fields[i].field_mandatory;
            console.debug("mandatory: " + fields[i].field_mandatory);
            if (fields[i].hasOwnProperty('field_max_length')) {
                maxLength = fields[i].field_max_length
            }
            lomakeItem += luoTekstiKentta(fields[i].field_label, maxLength, mandatory)
        }
    }
    lomakeItem += "}";
    console.debug(lomakeItem)
    return lomakeItem;
}

function luoTekstiKentta(title, maxLength, mandatory)
{
    console.debug("creating label " + title);
    var teksti = "Label { text: \" " + title + "\" } ";
    teksti += "TextField { placeholderText: " + ((mandatory === "1") ? "\"pakollinen\"" : "\"vapaaehtoinen\"") + "; ";
    teksti += "validator: RegExpValidator { regExp: /.{";
    teksti += mandatory + "," + ((maxLength > 0) ? maxLength : "") + "}/ }";
    teksti += "width: parent.width } ";
    return teksti;
}
