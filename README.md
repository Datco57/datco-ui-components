# DATCO UI Component Library

회사 전용 UI 컴포넌트 라이브러리입니다. shadcn/ui를 기반으로 DATCO의 디자인 시스템을 적용했습니다.

## 설치

### Git URL 방식 (권장)

```bash
npm install github:your-company/datco-ui-component
```

또는 package.json에 추가:

```json
{
  "dependencies": {
    "@datco/ui-component": "github:your-company/datco-ui-component"
  }
}
```

### 특정 버전/브랜치 설치

```bash
# 특정 버전
npm install github:your-company/datco-ui-component#v0.1.0

# 특정 브랜치
npm install github:your-company/datco-ui-component#develop
```

## 사용법

### 기본 사용

```tsx
import { Button, Alert, Input } from '@datco/ui-component';
import '@datco/ui-component/styles.css';

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Alert>
        <AlertTitle>알림</AlertTitle>
        <AlertDescription>메시지 내용</AlertDescription>
      </Alert>
    </div>
  );
}
```

### Tailwind CSS 설정

프로젝트의 `tailwind.config.js`에 다음 내용을 추가하세요:

```js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@datco/ui-component/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 사용 가능한 컴포넌트

- **Button** - 버튼
- **Input** - 입력 필드
- **Select** - 선택 드롭다운
- **Dialog** - 다이얼로그/모달
- **Alert** - 알림
- **AlertDialog** - 확인 다이얼로그
- **Card** - 카드
- **Accordion** - 아코디언
- **Badge** - 배지
- **Calendar** - 캘린더
- **Checkbox** - 체크박스
- **Combobox** - 콤보박스
- **DatePicker** - 날짜 선택기
- **DropdownMenu** - 드롭다운 메뉴
- **Label** - 레이블
- **Popover** - 팝오버
- **RadioGroup** - 라디오 그룹
- **Separator** - 구분선
- **Tabs** - 탭
- **Textarea** - 텍스트 영역
- **ToggleGroup** - 토글 그룹
- **Tooltip** - 툴팁

## 요구사항

- React 18.0.0 이상
- Tailwind CSS 3.x

## 업데이트

최신 버전으로 업데이트:

```bash
npm update @datco/ui-component
```

## 개발

```bash
# 의존성 설치
npm install

# Storybook 실행
npm run storybook

# 빌드
npm run build

# Watch 모드로 빌드
npm run dev
```

## 라이선스

MIT
