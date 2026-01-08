#!/bin/bash
set -e

CONTAINER_NAME="datco-storybook"
IMAGE_NAME="datco-storybook"
PORT=6006

# 1. 최신 소스 pull

echo "🔄 최신 소스 pull..."
git pull origin main

# 2. Docker 이미지 빌드
if [ -n "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
  echo "🛑 기존 컨테이너 중지 및 삭제..."
  docker stop $CONTAINER_NAME || true
  docker rm $CONTAINER_NAME || true
fi

echo "🐳 Docker 이미지 빌드 중..."
docker build -t $IMAGE_NAME .

# 3. Docker 컨테이너 실행

echo "🚀 Storybook 컨테이너 실행 (포트 $PORT)..."
docker run -d -p $PORT:80 --name $CONTAINER_NAME $IMAGE_NAME

echo "✅ Storybook이 http://서버주소:$PORT 에서 실행 중입니다!"
