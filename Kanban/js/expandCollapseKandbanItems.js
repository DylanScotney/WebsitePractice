export function expandCollapseKanbanItems(){
    var kanbanItems = document.querySelectorAll('.kanban-item');
    kanbanItems.forEach(item => {
        expandCollapseKanbanItem(item)
    })
}

export function expandCollapseKanbanItem(item){
    item.addEventListener('click', e => {
        if(e.target.id == 'collapse-button' && item.classList.contains('kanban-item-expanded')) {
            item.classList.remove('kanban-item-expanded');
            item.classList.add('kanban-item-collapsed');
        }
        else if(item.classList.contains('kanban-item-collapsed')) {
            item.classList.remove('kanban-item-collapsed');
            item.classList.add('kanban-item-expanded');
        }
    })
};
