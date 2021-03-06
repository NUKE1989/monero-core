.pragma library

function mapScope (inputScopeFrom, inputScopeTo, outputScopeFrom, outputScopeTo, value) {
    var x = (value - inputScopeFrom) / (inputScopeTo - inputScopeFrom);
    var result = outputScopeFrom + ((outputScopeTo - outputScopeFrom) * x);
    return result;
}


function tr(text) {
    return qsTr(text) + translationManager.emptyString
}


function lineBreaksToSpaces(text) {
    return text.trim().replace(/(\r\n|\n|\r)/gm, " ");
}
