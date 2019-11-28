from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Note
from django.contrib.auth.models import User
from .serializers import *
from rest_framework import permissions


@api_view(['GET',  'DELETE'])
def note_id(request, id):
   try:
       note = Note.objects.get(id=id)
   except Note.DoesNotExist:
       return Response(status=status.HTTP_404_NOT_FOUND)

   if request.method == 'GET':
       serializer = NoteSerializer(note, context={'request':request})
       return Response(serializer.data)

   
   elif request.method == 'DELETE':
       note.delete()
       return Response(status=status.HTTP_200_OK)
    

@api_view(['GET', 'POST', 'PUT'])
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
    
    elif request.method == 'PUT':
        note = Note.objects.get(id=request.data["id"])
        serializer = NoteSerializer(note, data=request.data, context= {'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)