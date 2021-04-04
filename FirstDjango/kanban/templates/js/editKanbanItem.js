
export function activateEditBtnByElem(elem){
    var btns = elem.querySelectorAll('.material-icons-outlined#edit-button');

    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            var kanbanItem = btn.parentElement; 
            while(!kanbanItem.classList.contains('kanban-item')){
                kanbanItem = kanbanItem.parentElement;
            }
            selfAndAllDescendants(kanbanItem, toggleEditable);
            btn.innerHTML.indexOf('edit') != -1 ? btn.innerHTML = 'done' : btn.innerHTML = 'edit';
        })
    });
}

/**
 * Summary: applies a given function to self and all the descendents of an element
 * @param {element} elem the element/node of interest
 * @param {function} func the function to apply
 */
function selfAndAllDescendants(elem, func){
    func(elem);
    allDescendants(elem, func);
}

/**
 * Summary: applies a given function to all the descendents of an element
 * @param {element} elem the element/node of interest
 * @param {function} func the function to apply
 */
function allDescendants (elem, func) {
    for (var i = 0; i < elem.childNodes.length; i++) {
        var child = elem.childNodes[i];
        allDescendants(child, func);
        try {
            func(child);
        }
        catch {
            // catch everything. Dangerous but yolo baby.
        }
    }
};

/**
 * Summary: safely toggles the contenteditable function
 * @param {element} elem the element/node of interest
 */
function toggleEditable(elem){
    if(elem.classList.contains("editable")) {
        elem.toggleAttribute("contenteditable");
    }
};

