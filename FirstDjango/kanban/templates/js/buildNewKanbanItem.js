
export function buildNewKanbanItem(title, desc){
    const innerHTML = `
    <nav class="kanban-item-nav">
        <div class="kanban-item-title">
            ${title}
        </div>
        <div class="kanban-item-nav-btns">
            <div class="kanban-item-button">
                <span class="material-icons-outlined" id='edit-button'>
                    edit
                </span>
            </div>
            <div class="kanban-item-button">
                <span class="material-icons-outlined" id="collapse-button">
                    unfold_less
                </span>
            </div>
        </div>
    </nav>

    <div class="kanban-item-contents">
        <div>
            <div class="kanban-item-desc">
                <div class="editable">
                    ${desc}
                </div>
            </div>
            <div class="kanban-item-todo-container">
                <ul>
                    <li class="kanban-item-todo"><input type="checkbox">First task</li>
                    <li class="kanban-item-todo"><input type="checkbox">Second task</li>
                    <li class="kanban-item-todo"><input type="checkbox">Third task</li>
                </ul>
            </div>
        </div>
        <div class="kanban-item-labels">
            <div class="default-label">
                Urgent
            </div>
            <div class="default-label">
                Bug
            </div>
        </div>
    </div>
    `

    return innerHTML
}