# 디자인 커스터마이징 가이드

회사 디자인 시스템을 적용하는 방법입니다.

## 1. 색상 커스터마이징

### 방법 1: CSS Variables 수정 (`src/styles/globals.css`)

가장 간단한 방법입니다. HSL 색상 값을 수정하세요.

```css
:root {
  /* Primary 색상 변경 (파란색 → 회사 브랜드 색상) */
  --primary: 221.2 83.2% 53.3%;  /* 기본값 */
  --primary: 260 100% 50%;        /* 보라색으로 변경 예시 */
  
  /* 다른 색상들도 동일하게 수정 */
  --secondary: 210 40% 96.1%;
  --destructive: 0 84.2% 60.2%;
  --muted: 210 40% 96.1%;
  --accent: 210 40% 96.1%;
}
```

### 방법 2: Tailwind Config 확장 (`tailwind.config.js`)

더 상세한 색상 팔레트 추가:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        // 회사 브랜드 색상 추가
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
        // 기존 primary를 brand로 매핑
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
      },
    },
  },
};
```

## 2. 타이포그래피 커스터마이징

### Tailwind Config에서 폰트 추가

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
    },
  },
};
```

## 3. 간격(Spacing) 커스터마이징

```js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
};
```

## 4. Border Radius 커스터마이징

### CSS Variables 방식

```css
:root {
  --radius: 0.5rem;  /* 기본값 */
  --radius: 0.25rem; /* 더 각진 스타일 */
  --radius: 1rem;    /* 더 둥근 스타일 */
}
```

## 5. 컴포넌트 variants 커스터마이징

각 컴포넌트의 `.tsx` 파일에서 `cva` 설정을 수정:

```typescript
// src/components/Button/Button.tsx
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        // 회사 전용 variant 추가
        company: 'bg-brand-500 text-white hover:bg-brand-600',
        outline: 'border border-input bg-background hover:bg-accent',
      },
      size: {
        default: 'h-10 px-4 py-2',
        // 새로운 크기 추가
        xs: 'h-7 px-2 text-xs',
      },
    },
  }
);
```

## 6. 다크 모드 색상 커스터마이징

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  /* 다크 모드에서 다른 색상 사용 */
}
```

## 7. 그림자(Shadow) 커스터마이징

```js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'company': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'company-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
};
```

## 실전 예시: 회사 브랜드 적용

### 1. `src/styles/globals.css` 수정

```css
:root {
  /* DATCO 브랜드 색상 */
  --primary: 210 100% 50%;         /* DATCO Blue */
  --primary-foreground: 0 0% 100%; /* White */
  
  --secondary: 150 30% 50%;        /* DATCO Green */
  --accent: 30 100% 50%;           /* DATCO Orange */
  
  --radius: 0.375rem;              /* 6px */
}
```

### 2. 컴포넌트에 회사 variant 추가

```typescript
// Button에 'datco' variant 추가
variant: {
  datco: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl',
}
```

### 3. 사용

```tsx
<Button variant="datco">DATCO 버튼</Button>
```
