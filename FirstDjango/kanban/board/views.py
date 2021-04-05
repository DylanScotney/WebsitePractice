from django.shortcuts import render
import django.template as t

from .models import kanbanColumn, kanbanItem, kanbanItemLabel, kanbanItemTask, label

# Create your views here.
    
def home_view(request, *args, **kwargs):
    columns = [col for col in kanbanColumn.objects.all() if not col.deleted]

    for col in columns:
        col.items = [render_item(item.id) for item in kanbanItem.objects.all() if item.columnID == col.id]
        
    context = {"columns" : columns}

    return render(request, "kanban_main.html", context)

def render_item(itemID):
    """
    Takes an itemID and renders the html as a string.
    """
    itemID = 1
    item = kanbanItem.objects.get(id=itemID)
    item.tasks = [task for task in kanbanItemTask.objects.all() if task.itemID == itemID]
    itemLabelIDs = [lab.id for lab in kanbanItemLabel.objects.all() if lab.itemID == itemID]
    item.labels = [lab for lab in label.objects.all() if lab.id in itemLabelIDs]

    context = {
        "item" : item
    }

    return t.loader.render_to_string('kanbanItem.html', context)

    
