const EOF = Symbol("EOF")

function data(c) {
    if(c === "<") {
        return tagOpen;
    } else if (c == EOF ) {
        return ;
    } else {
        return data;
    }
}

function tagOpen(c) {
    if(c === "/")  {
        return endTagOpen;
    } else if(c.match(/^[a-zA-Z]$/)) {
        return tagName(c)
    } else {
        return ;
    }
}
function tagName(c) {
    if(c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName;
    } else if 
}

module.exports.parseHTML = function parseHTML(HTML) {

}