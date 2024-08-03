# Lama Dev AI Chat Bot App Starter Setup

This template provides a minimal setup to get React 19 working in Vite with HMR and some ESLint rules.

## node 버전 20.70.0 사용

# jsx 스니팻 설정

## file->preferences->Configure User snippets

### 검색창에 jsx 검색후 jsx javascriptreact.json 파일에 붙여 넣는다

```

	{
		"fcc": {
		   "prefix": "fcc",
		   "body": [
		 "import './${TM_FILENAME_BASE/^(.)/${1:/downcase}/}.css'"
		 ""
		 "const ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}} = () => {",
		 "  return (",
		 "    <div className='${TM_FILENAME_BASE/^(.)/${1:/downcase}/}'>${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}</div>",
		 "  )",
		 "}",
		 "",
		 "export default ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}"
		   ],
		   "description": "Create an arrow component with css"
	   },
	   "fcs": {
		   "prefix": "fcs",
		   "body": [
			   "import './${TM_FILENAME_BASE/^(.)/${1:/downcase}/}.scss'"
			   ""
			   "function ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}(){",
			   "  return (",
			   "    <div className='${TM_FILENAME_BASE/^(.)/${1:/downcase}/}'>${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}</div>",
			   "  )",
			   "}",
			   "",
			   "export default ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}"
		   ],
		   "description": "Create a functional component with Sass"
	   },
	   "acs": {
	   "prefix": "acs",
	   "body": [
			   "import './${TM_FILENAME_BASE/^(.)/${1:/downcase}/}.scss'"
			   ""
			   "const ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}} = () => {",
			   "  return (",
			   "    <div className='${TM_FILENAME_BASE/^(.)/${1:/downcase}/}'>${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}</div>",
			   "  )",
			   "}",
			   "",
			   "export default ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}"
	   ],
	   "description": "Create an arrow component with Sass"
	   },
   "comp": {
		   "prefix": "comp",
		   "body": [
		 "const ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}} = () => {",
		 "  return (",
		 "    <div>${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}</div>",
		 "  )",
		 "}",
		 "",
		 "export default ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}"
		   ],
		   "description": "Create a component"
	   },
   "compt": {
		   "prefix": "compt",
		   "body": [
		 "const ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}} = () => {",
		 "  return (",
		 "    <div className=''>${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}</div>",
		 "  )",
		 "}",
		 "",
		 "export default ${1:${TM_FILENAME_BASE/(.)(.*)/${1:/capitalize}${2}/}}"
		   ],
		   "description": "Create a component with tailwind classname"
	   }


  }

```

## clerk 사이트 로그인 인증처리

```
https://clerk.com/
```
