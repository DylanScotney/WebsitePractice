import {envokeDraggableKanbanItems} from './draggableKanbanItems.js';
import {buildNewKanbanItem} from './buildNewKanbanItem.js';
import { expandCollapseKanbanItem } from './expandCollapseKandbanItems.js';
import {activateEditBtnByElem} from './editKanbanItem.js';

export function newKanbanItemWindow() {
    const addButtons = document.querySelectorAll('.kanban-add-item')

    addButtons.forEach(button => {
        button.addEventListener('click', e => {
            var kanbanCol = button.parentElement;
            var colContents = kanbanCol.querySelector('.kanban-column-contents');
            var colItemsContainer = colContents.querySelector('.kanban-items-container');

            var newItemWindow = document.createElement('div');
            newItemWindow.className = 'floating-window'
            newItemWindow.id = 'kanban-new-item-window';

            newItemWindow.innerHTML = `
                <nav class="floating-window-nav">            
                    <div class="floating-window-title">
                        New Item:
                    </div>
                    <div>
                        <span class="material-icons-outlined" id="tick-button">
                            done
                        </span>
                            
                        <span class="material-icons-outlined" id="close-button">
                            close
                        </span>
                    </div>
                </nav>
                <div class="kanban-new-item-window-contents">
                    <div class="kanban-new-item-title-input">
                        <label for="item-name" class="kanban-new-item-input-title-container">
                            Title:
                        </label>
                        <input type="text" name="item-name" id="kanban-new-item-input-title">
                    </div>
                    
                    <div class="kanban-new-item-description-input">
                        <label for="item-name" class="kanban-new-item-input-title-container">
                            Description:
                        </label>
                        <textarea name="item-desc" id="kanban-new-item-input-desc"></textarea>
                    </div>  
                </div>
            `;
            
            // Add elem only if one doesnt already exist
            if (document.body.querySelector('#kanban-new-item-window') == null){
                document.body.appendChild(newItemWindow);
                
                // make it draggable
                dragElement(newItemWindow);
                
                // close window
                var closeButton = newItemWindow.querySelector('.floating-window-nav #close-button');
                closeButton.addEventListener('click', e => {
                    newItemWindow.remove()
                })

                var tickButton = newItemWindow.querySelector('.floating-window-nav #tick-button')
                tickButton.addEventListener('click', e => {
                    var title = newItemWindow.querySelector('#kanban-new-item-input-title').value;
                    var desc = newItemWindow.querySelector('#kanban-new-item-input-desc').value;
                    
                    if(title) {
                        var newItem = document.createElement('div');
                        newItem.className = 'kanban-item kanban-item-collapsed draggable';
                        newItem.draggable = 'true';
                        newItem.innerHTML = buildNewKanbanItem(title, desc);
                        colItemsContainer.appendChild(newItem);
                        newItemWindow.remove();
                        envokeDraggableKanbanItems(); // make new item draggable
                        expandCollapseKanbanItem(newItem); // make new item expandable
                        activateEditBtnByElem(newItem); // make new item editable 
                    }
                    else {
                        throw 'Invalid title';
                    }
                })
            }
            else {
                // drop it if one already exists - I have no idea if not 
                // doing something like this causes a memory leak
                newItemWindow.remove();
            }
        })
    })

    // Make window draggable. Would be nice to somehow import this
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.querySelector(".floating-window-nav").onmousedown = dragMouseDown;
    
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();            
            pos3 = e.clientX; // get the mouse cursor position at startup:
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }
    
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();

            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;

            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    
        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    };

};