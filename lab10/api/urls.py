from django.urls import path
from api.views import (
    ProductListAPIView, ProductDetailAPIView,
    CategoryListAPIView, CategoryDetailAPIView,
    CategoryProductsAPIView
)

urlpatterns = [
    # Товары
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    
    # Категории
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),
    
    # Товары конкретной категории (тот самый пункт 3)
    path('categories/<int:pk>/products/', CategoryProductsAPIView.as_view()),
]
