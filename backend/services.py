from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class FsacPagination(PageNumberPagination):
    page_size = 20

    def get_paginated_response(self, data):
        return Response({
            'prev': self.page.has_previous(),
            'next': self.page.has_next(),
            'count': self.page.paginator.count,
            'results': data
        })
