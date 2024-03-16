/*
    1.설치 
    npm i -D @craco/craco

    2.craco.config.js
    아래 내역 파일에 쓰기 
    이파일로 인해 
    create-react-app EcmaScript자바스크립트 모듈을 이해한디.

    3.package.json 아래 내용으로 변경
    "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
        "eject": "craco eject"
    },


*/


module.exports = {
    webpack: {
      configure: {
        module: {
          rules: [
            {
              type: "javascript/auto",
              test: /\.mjs$/,
              include: /node_modules/,
            },
          ],
        },
      },
    },
  };