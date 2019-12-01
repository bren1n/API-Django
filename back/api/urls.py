from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('notes/', views.notes),
    path('notes/<int:id>', views.note_id),
    path('users/<str:username>/<str:password>', views.user_id),
]
