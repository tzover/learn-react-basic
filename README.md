# Hello Next JS

> This Repository is the development base for Next.js with typescript

## Usage

- Make Container

```
docker-compose up -d
```

- In Container

```
docker-compose exec frontend bash
```

- Launch the development server

```
yarn dev
```

## Create environment

```
docker-compose exec frontend bash
cd ..
npx create-react-app app --template typescript
```
