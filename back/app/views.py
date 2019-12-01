from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Note
from django.contrib.auth import authenticate
from .serializers import *
from rest_framework import permissions


@api_view(['GET',  'DELETE', 'PUT'])
def note_id(request, id):
    try:
        note = Note.objects.get(id=id)
    except Note.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = NoteSerializer(note, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'DELETE':
        note.delete()
        return Response(status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        note = Note.objects.get(id=id)
        serializer = NoteSerializer(note, data=request.data, context= {'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    

@api_view(['GET', 'POST'])
def notes(request):

    if request.method == 'GET':
       notes = Note.objects.all()
       serializer = NoteSerializer(notes, context={'request': request} ,many=True)
       return Response(serializer.data)

    elif request.method == 'POST':
       serializer = NoteSerializer(data=request.data)
       if serializer.is_valid():
           serializer.save()
           return Response(serializer.data)
       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def user_id(request, username, password):
    user = authenticate(username=username, password=password)
    if not user:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user, context={'request': request})
        return Response(serializer.data)