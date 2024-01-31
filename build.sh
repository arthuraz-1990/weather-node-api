#!/bin/sh

echo "Autenticando na AWS..."
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 848504988164.dkr.ecr.us-east-1.amazonaws.com
echo "Construindo imagem..."
docker compose build
echo "Marcando para enviar..."
docker tag arthuraz1990/weather-node-api:1.0 848504988164.dkr.ecr.us-east-1.amazonaws.com/weather-node-api:latest
echo "Enviando imagem para repositório..."
docker push 848504988164.dkr.ecr.us-east-1.amazonaws.com/weather-node-api:latest