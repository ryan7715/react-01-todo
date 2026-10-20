# REAMDE 파일
* notion을 사용하는 것처럼, 해당 단축어로 글을 작성하면 출력해주는 파일
* 이렇게 보여지는 방식은 markdown파일이라고 함

# REAMDE 파일을 작성하면 보여지는 곳
* Github의 레포지리 첫 화면
* 그렇기 때문에 READMDEmd파일은 이 프로젝트를 보는 사람에게 설명할 내용을 적성하는 파일

---

# LECTURE 01: ToDo List
간단한 할 일 목록(ToDO list)를 관리할 수 있는 웹 애플리케이션 실습 프로젝트 입니다.
웹 실습 강의 및 자바스크립트 기초 학습 용도로 제작되었습니다

# 주요 기능
* **할 일 추가**: 새로운 할 일을 입력하면 목록에 추가합니다
* **할 일 목록 조회**: 등록된 전체 할 일 목록을 확인합니다
* **완료 상태토글**: 클릭 시 할 일의 완료여부(체크/체크 해제)를 전환합니다
* **할 일 삭제**: 완료되었거나 필요없는 할 일을 목록에서 삭제합니다

# 기술 스택 (Tech Stack)
* **Frontend**: HTML, CSS3, JAVASCRIPT(ES6+)
*  **Package Manger / Build Too!** : pnpm /vite

# 🚀 시작하기 (Getting Started)

### 1. 프로젝트 클론 (Clone)

```bash
git clone https://github.com/drasla/lecture-01-todo-list.git
cd lecture-01-todo-list
```

### 2. 의존성 패키지 설치 (Install Dependencies)

```bash
npm install
# 또는 pnpm install / yarn install
```

### 3. 개발 서버 실행 (Run Development Server)

```bash
npm run dev
# 또는 pnpm dev / yarn dev
```

서버 실행 후 터미널에 표시되는 로컬 주소(예: `http://localhost:5173`)로 브라우저에서 접속합니다.

---

## 📁 프로젝트 구조 (Directory Structure)

```text
lecture-01-todo-list/
├── index.html          # 메인 HTML
├── src/                # 소스 코드 폴더
│   ├── main.js         # JavaScript 메인 스크립트
│   └── style.css       # 메인 스타일시트
├── package.json        # 의존성 및 스크립트 관리 파일
└── README.md           # 프로젝트 안내 문서
```

---

## 💡 학습 목표 (Learning Objectives)

1. DOM 선택자(Selector) 및 이벤트 리스너(Event Listener) 등록과 활용
2. 상태(State) 데이터 변경에 따른 화면 업데이트 흐름 이해
3. 배열 조작 메서드(`map`, `filter`, `forEach` 등) 활용법 익히기