import {envokeDraggableKanbanItems} from './draggableKanbanItems.js'
import {newKanbanItemWindow} from './newKanbanItemWindow.js'
import {expandCollapseKanbanItems} from './expandCollapseKandbanItems.js'
import { activateEditBtnByElem } from './editKanbanItem.js';

( function main() {
    envokeDraggableKanbanItems();
    newKanbanItemWindow();
    expandCollapseKanbanItems();
    activateEditBtnByElem(document);
})();