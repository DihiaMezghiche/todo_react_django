from django.urls import path
from .views import TodoListCreate, TodoRetrieveUpdateDestroy

urlpatterns = [
    path ('api/todos', TodoListCreate.as_view(), name="todo-list-create"),
    path('api/todos/<int:pk>/', TodoRetrieveUpdateDestroy.as_view(), name="todo-detail"),
]