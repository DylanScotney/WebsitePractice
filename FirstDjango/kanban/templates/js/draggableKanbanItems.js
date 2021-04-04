// (function () {
//     envokeDraggableKanbanItems()
// })();

export function envokeDraggableKanbanItems() {

    const draggables = document.querySelectorAll('.kanban-item.draggable');
    const containers = document.querySelectorAll('.kanban-items-container');

    draggables.forEach( draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('kanban-item-dragging');
        })
    })

    draggables.forEach( draggable => {
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('kanban-item-dragging');
        })
    })

    containers.forEach(container => {
        container.addEventListener('dragover',  e => {
            e.preventDefault();
            const draggable = document.querySelector('.kanban-item-dragging');
            const nextItem = getBelowDragItem(container, e.clientY);
            if (nextItem == null){
                container.appendChild(draggable);
            }
            else{
                container.insertBefore(draggable, nextItem);
            }
        })
    })

    function getBelowDragItem(container, y){
        const draggableItems = [...container.querySelectorAll('.kanban-item.draggable:not(.kanban-item-dragging)')];

        return draggableItems.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child }
            }
            else {
                return closest
            }
        }, {offset: Number.NEGATIVE_INFINITY }).element
    }

};
