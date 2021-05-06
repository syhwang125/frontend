*** React + MobX    
   By Namoosori 

https://www.youtube.com/watch?v=O_YYFuVBGp4&list=PLOSNUO27qFbtYC5oRwJVsNavcPEI5uoiJ  

# React Component 

## 1.React란
1) MPA vs SPA
 MPA (multi-page Application, 웹 어플리케이션의 클라이언트 페이지) servlet jsp container
 SPA (single Page Application, 서버로부터 단일 페이지를 응답받고 클라이언트에서 화면을 구성하는 방식. 서버에 데이터json을 요청하고 응답받는 데이터를 이용해 화면 갱신) 


SPA 클라이언트 사이드 화면 렌더링. 서버로부터 json data 를 받음 
React 동작 방식 : UI (화면구성 + 데이터) 

2)React 는 SPA기반 웹사용자 UI구성을 위한 자바스크립트 라이브러리 
일반적인 사용자 UI 구성 : Html -구조, CSS- 표현, JS- 행위  
React사용자 UI 구성 : React component (HTML, CSS, JS) 형태로 제공 

## 2.프로젝트 개발환경 
Node.js 는 V8엔진 기반의 javascript 실행 환경 제공   (npm포함) 
$npm install -g yarn    // yarn 설치 

$yarn create react-app hello-react        // hello-react 프로젝트 생성
  hello-react
  
$ yarn start                          // hello-react 실행 
http://localhost:3000 


## 3. React Component 
    컴포넌트는 React UI 구성의 기본 단위
1) React Element : 브라우저 DOM 엘리먼트에 대한 정보를 담고 있는 객체 

React.createElement(type, props, children) 
ReactDOM.render() 

2) JSX 의 사용 
* JSX (JavaScript XML) : javascript 문법의 확장. 
   react.createElement()함수 대신 XML형식의 코드로 구현 가능 

// JSX
ReactDOM.render(<h5 className=‘heading’>Hello</h5>, document.getElementById(‘content’) 
// Javascript 
ReactDom.render( React.createElement(‘h1’, { className: ‘heading’}, ‘Hello World’ ) ) 

ㅇ바벨(babel) 자바스크립트코드 변환 컴파일러
     :  JSX 문법코드 -> transcompiler 과정을 거쳐서 -> javaScript 로 만들어지고 브라우저에서 실행됨 
        ES6 -> ES5로 transcompiler로  신규 문법을 변환해 줘야함. 
        javascript 버전 진화 : ES5,  ES6 (ECMAScript6, let, const, class 등 나옴) 
ㅇ 웹팩 : 자바스크립트 모듈 번틀러. 호환플러그인을 포함하는 경우 HTML, CSS 등 프론트엔드 자산들을 변환할 수 있다. 

ES6 (let, const, class 등 지원) ECMAScript 6 (2015년)  

JSX : 대소문자 구분 (Pascal case 로 작성, ex) <List/> <Button> 
       js코드 반영하기 위해서는 {중괄호} 내부로 구분 
HTML요소 : 소문자로 구분 <h2/>. 
   
## 4.React props 
  props 이해 
  protypes : 상위 컴포넌트로부터 전달받은 props 검증. 대신 typescript를 이용하면 컴파일시 에러 처리 가능 

1) React props 
   Parent 의 props 를 child 가 전달받음 

2) React state  : Mobx의 state 와 관련있음 
    컴포넌트에서 변경 가능한 데이터를 관리하기 위해 사용하는 객체는 state 

3) React Component 는 Class / Function 기반 컴포넌트로 구분됨
  컴포넌트는 화면을 구성하는 다양한 요소(기능,스타일,마크업 등)을 그룹화하는 방법임
  React.Component클래스 기반의 컴포넌트는 props객체를 갖음 
  - Class 기반의 컴포넌트는 무조건 state를 갖음 (state가 변경되면 ui가 변경, 렌더링됨) . setState() 에 의해 state 값 변경 . state 가 있는 hook 이라는 것도 있음
    render()함수가 반드시 있어야 하며, 하나의 엘리먼트를 리턴함 
  - Function 기반의 컴포넌트는 상태가 없는 stateless 임 
   
  
## 5. React Component - props 실습 
1) props exam 
 생성 (react-props-exam).  App - books - BookList -> BookListItem 
 
$yarn create react-app react-props-exam     //project create
$cd /Users/youngminlee/gitrepository/react-props-exam
   public/index.html 에서 확인    <div id="root"></div>. 
   src/index.js 에서 확인 
       ReactDOM.render(
            <React.StrictMode>
               <App />
            </React.StrictMode>,
       document.getElementById('root')
      );

구조문의 할당  var obj = {a:10, b=20} 를 {a,b} = obj; 라고 표현함 


$ yarn add @material-ui/core                            // material-ui lib install 
$ yarn
$ yarn start           -> http://localhost:3000/ 



## 6. React Component - State 이해 및 실습 
* 1) State 이해 
   state 초기화는 constructor()에서 정의되며, super();        // super생성자를 호출해야 this를 사용할 수 있음
   setState()를 통해 state값을 변경할 수 있음 
   
    constructor() {
        super();        // super생성자를 호출해야 this를 사용할 수 있음
        this.state = {
            count : 5,      //state value initailize
        }
    }

    increment() {
        this.setState({
            count : this.state.count + 1,
        })
    }

    <Button variant='contained' color='primary' size='large' onClick={this.increment.bind(this)}> + </Button>
    <Box component='span' m={5}> { this.state.count } </Box>

    예제 simple-counter
     $yarn create react-app simple-counter
     $yarn add @material-ui/core

    
* 2) State 실습
$cd react-state-template     
$yarn 				// 설치 
$yarn start 

## 7. React Component Lifecycle 
1)Mounting 단계에서 주요 작업
  -constructor() 에서는 state객체 초기화, 특정 메소드 바인딩하는 작업을 진행함 
    바인딩 방법 : 생성자에서 this.onButtonClick.bind(this); 
              <SearchBar onSearchTitle = { this.onSearchTitle.bind(this) } />
             arrow function의 경우 bind 정의는 불필요   () => {}
             auto-bind라이브러리 활용 autobind(this);
  -componentDidMount() 컴포넌트가 마운트된 직후 호출되며 데이터 로딩 등의 작업   
  -getDerivedStateFromProps() : 상위컴포넌트로부터 받은 props와  이전props값을 비교. 동기화할때 사용
          
2)Updating 
  shouldComponentUpdate () : props 이전값과 달라서 렌더링이 필요하면 return true, 불필요하면 false (이전props=현재props)
  getSnapshotBeforeUpdate(): DOM에 변화가 일어나기 직전의 값을 가져와서 비교하기 위해 정의함 
  render() 
  componentDidUpdate() 
  
3)UnMounting: 
   ComponentWillUnmount()
   
json placeholder   
https://jsonplaceholder.typicode.com/    (post user)

$npm install --s axios       // server 와 http 프로토콜 통신 

$react-lifecycle-exam\
$yarn start 


## 8. Mobx 
* 1) Mobx- Flux 이해 
Mobx : React 컴포넌트 상태 관리 컨테이너 
FLux : 상태관리 컨테이너의 기반 

App Component , Menu Component, SearchbarComponent, List Component, ListItemComponent 각각에서 state 를 관리한다면, 제어가 어려움. 
Redux 가 상태관리가 있지만, Mobx 를 이용하며 Flux 아키텍처 

* 2)Mobx 구조 
Flux 아키텍처 : React를 이용한 UI구성에서 데이터의 흐름을 관리하는 어플리케이션 아키텍처임 
*Flux 구조 : Action -> Dispatcher -> Store  -> View (React component)-> [ Action ] -> Dispatcher 
Store (view 각각의 state는 store를 이용해 통합 관리, store데이터는 action을 이용해 제어함) 

Mobx, Mobx-react 라이브러리 필요  (pacakge.json에 rewired )
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
  
$react-counter-mobx> yarn 
$yarn start 

// vs tool > code > preference > settings > ‘exper’검색 > JS/TS 옵션을 체크함  (@decorator 인식을 위함) 

constructor (){                   
        makeObservable(this);       //mobx5 버전이후 mobx6에서는 반드시 정의해야, 데이터 변경시 반영됨. 
 }

* 3) 데코레이션 
@action : 관찰대상 데이터, 즉 observable state 의 값을 변경하는 메소드에 적용
@computed : 성능때문에 사용. get 메소드에 일반적으로 적용하거나 model 객체간 전환 시점에 적용함 
                        관찰가능한 데이터를 연산하는 get 메소드에서 사용함. 캐슁됨. 

@observer 는 store를 통해서 state를 관리하는 react.component에 적용
@inject 는 @observer컴포넌트의 store를 react component에 주입함    (props 에서 꺼내 씀) 
  Inject 주입을 받기 위해서는  <Provider todoStore={todoStore} > </App> </Provider>를 통해서 전체 store들이 제공되어야 함.   (index.js)

@autorun 는 @observable데이터를 변경될때마다 특정 작업을 지정할때 사용함 

TodoListComponent (@observer).  -> action call -> TodoListStore(@observable)  
특정 @observable state에 변경이 발생하면 해당 state를 @observer 하고 있는 컴포넌트가 렌더링 됨. 

* 4) React와 MobX를 통한 UI구성 패키지 
Container : rect component로 구성하며 store와 react component를 연결하는 역할 
View : 순수 rect component 로 구성하며 container에 포함됨
Repository  ( or api) : 서버와 통신을 담당하는 클래스로 구성
Store : 전역 state를 관리하는 store 클래스로 구성
Model : 서버의 model 과 view model 의 전환을 담당 


## 9. Reactor - Router 
