//fonction qui applique le style de bordure KO sur un champ de saisie
//le style n'apparait que si le champ est invalide (via pattern ou required)
function setInvalidable(obj) {
    if (!$(obj).hasClass("invalidable"))
        $(obj).addClass("invalidable");
}

