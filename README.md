# playground-app-nextjs-auth0

個人の学習用リポジトリです  
Auth0 認証を試すために作成している実験用アプリケーションです

## Index

- [DEMO](#demo)
- [Features](#features)
- [Requirement](#requirement)
- [Installation](#installation)
- [Usage](#usage)
- [Note](#note)
- [Author](#author)
- [License](#license)

## DEMO

アプリのデプロイ場所は非公開です

## Features

Auth0 の Regular Web Application のクイックスタートより作成
https://auth0.com/docs/quickstart/webapp/nextjs/01-login

## Requirement

開発者の端末で動かすのに必要なライブラリなど

- Node.js v18.17.1(LTS)

## Installation

### 1\. リポジトリのクローン

下記コマンドを実行してリポジトリをクローンします。

```bash
git clone https://github.com/kawamuragen/playground-app-nextjs-auth0.git
```

### 2\. 依存パッケージのダウンロード

下記コマンドを実行して依存パッケージのダウンロードを開始します。初回は終了までに 5 分ほどかかります。エラーが出ないことを確認してください。

```bash
npm install
```

### 3\. 環境変数設定

環境変数設定のため、ルートディレクトリに`.env.local`ファイルを作成し、下記のような値を設定します。

```
// .env.local

# A long, secret value used to encrypt the session cookie
AUTH0_SECRET=LONG_RANDOM_VALUE'
# The base url of your application
AUTH0_BASE_URL='http://localhost:3000'
# The url of your Auth0 tenant domain
AUTH0_ISSUER_BASE_URL='https://YOUR_AUTH0_DOMAIN.auth0.com'
# Your Auth0 application's Client ID
AUTH0_CLIENT_ID='YOUR_AUTH0_CLIENT_ID'
# Your Auth0 application's Client Secret
AUTH0_CLIENT_SECRET='YOUR_AUTH0_CLIENT_SECRET'
```

- AUTH0_SECRET  
  下記コマンドを実行するなどして 32bytes の文字列を生成してください。

```bash
$ openssl rand -hex 32
```

- AUTH0_BASE_URL  
  Next.js のベース URL を入力してください。

- AUTH0_ISSUER_BASE_URL  
  Auth0 のテナントドメインを入力してください。

- AUTH0_CLIENT_ID  
  Auth0 のアプリケーション内「Settings > Basic Information > Client ID」の値を入力してください。

- AUTH0_CLIENT_SECRET  
  Auth0 のアプリケーション内「Settings > Basic Information > Client Secret」の値を入力してください。

### 4\. Auth0 ダッシュボードの設定

同じく Auth0 のアプリケーション内「Settings > Applications URIs」の下記項目を設定してください。

Allowed Callback URLs: `http://localhost:3000/api/auth/callback`  
Allowed Logout URLs: `http://localhost:3000/`

### 5\. 開発モードでサーバーを起動

下記コマンドを実行して開発モードでサーバーを起動します。エラーが発生しないで、下記メッセージが表示されることを確認してください。  
「`ready - started server on 0.0.0.0:3000, url: http://localhost:3000`」

```bash
npm run dev
```

### 6\. ブラウザからアプリにアクセス

適当なブラウザから、下記アドレスにアクセスします。

http://localhost:3000

※ブラウザのゲストモードやシークレットモードを利用すると、Cookie やキャッシュを保存しないため、PT 環境でアクセスするときに推奨です。

## Usage

ログインボタンをおしてログインを実行します。

## Note

- SSR のページを Auth0 認証でプロテクトするには？  
  https://auth0.com/docs/quickstart/webapp/nextjs/01-login#what-s-next-

## Author

作成情報を列挙する

- Gen, Kawamura
- Personal study repository
- E-mail: \*\*\*\*

## License

UNLICENSE
