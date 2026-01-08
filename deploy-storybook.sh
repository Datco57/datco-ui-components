#!/bin/bash

set -e

# 1. Storybook 정적 파일 빌드
echo "📦 Storybook 정적 파일 빌드..."
npm run build-storybook

# 2. Docker 이미지 빌드
echo "🐳 Docker 이미지 빌드..."
docker build -t datco-storybook .

# 3. 기존 컨테이너 중지 및 삭제 (있을 경우)
if [ "$(docker ps -aq -f name=datco-storybook)" ]; then
  echo "🧹 기존 컨테이너 정리..."
  docker stop datco-storybook || true
  docker rm datco-storybook || true
fi

# 4. 새 컨테이너 실행 (6006 포트로)
echo "🚀 Storybook 컨테이너 실행 (포트 6006)..."
docker run -d -p 6006:80 --name datco-storybook datco-storybook

echo "✅ 배포 완료! http://서버주소:6006 에서 접속하세요."