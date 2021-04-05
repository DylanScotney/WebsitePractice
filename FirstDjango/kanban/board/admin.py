from django.contrib import admin

from .models import kanbanColumn, kanbanItem, kanbanItemTask, kanbanItemLabel, label

# Register your models here.
admin.site.register(kanbanColumn)
admin.site.register(kanbanItem)
admin.site.register(kanbanItemTask)
admin.site.register(kanbanItemLabel)
admin.site.register(label)