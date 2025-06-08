# IoT-Dashboard

## Environment
node.js 20.x

### Install dependencies
```
$ npm install
```
### setting in env file (.env파일 수정)
```
NEXT_PUBLIC_APP_SERVER_URL={ server url } // 연결할 서버의 URL을 포트번호까지 입력한다.
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY={ google map api key } // 이 부분은 수정하지 않는다.
```
### install package
```
npm install react-leaflet@^4 leaflet --legacy-peer-deps

npm install --save-dev @types/leaflet
```
### Build project
```
$ npm run build
```
### Start project
```
$ npm run start
```
### Start project as developer version
```
$ npm run dev
```


