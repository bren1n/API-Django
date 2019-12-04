from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('notes/<int:user_id>', views.notes_user),
    path('notes', views.notes),
    path('notes/<int:user_id>/<int:id>', views.note_id),
    path('users/<str:username>/<str:password>', views.user_id),
]
