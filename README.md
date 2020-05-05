# Meteor-Tutorial

## Overviw
TODOアプリケーションの実装  
[Todo App with React](https://www.meteor.com/tutorials/react/creating-an-app)

ただチュートリアルをコピペするだけでは面白くないので、React Hooks & Function Componentに書き換えて実装しています。  
そのため、処理はほとんど一緒ですがチュートリアルのコードとは内容が少し違います。  

## Install
```
$ git clone https://github.com/Restoration/Meteor-Tutorial.git
$ cd Meteor-Tutorial
$ yarn
$ yarn start
```


### MongoDB
コンソールからテストデータを入れたい場合など
```
$ meteor mongo
$ db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
```

## Author
[RyotArch](https://www.developer-ryota.com/)
