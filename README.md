# Git

### 新しい作業を開始

[GitHub](https://github.com/tooooofu24/health-management-front)で作業内容の issue を作成

```
# 数字はissueのidに対応させる
git checkout main
git pull origin main
git checkout -b feature/12345
```

### 作業を反映

```
git add .
git commit -m "作業内容"
git push
```

プルリクエストを作成

# ローカル開発

### ローカルサーバー立ち上げ

```
npm run dev
```

# Prisma

### マイグレーション

```
npx prisma migrate dev
```

### データリセット

```
npx prisma migrate reset
```

### シード

```
npx prisma db seed
```

### ローカルで DB 確認

```
npx prisma studio
```
