from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer

# 1. Список всех товаров и создание
class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# 2. Детали одного товара (get, put, delete)
class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

# 3. Список всех категорий и создание
class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# 4. Детали одной категории
class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer # Исправил опечатку здесь

# 5. Тот самый КЛАСС, которого не хватало в ошибке!
# Он нужен для пути /categories/<id>/products/
class CategoryProductsAPIView(APIView):
    def get(self, request, pk):
        # Находим товары, привязанные к этой категории
        products = Product.objects.filter(category_id=pk)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)