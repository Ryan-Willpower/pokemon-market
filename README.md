# Front-end Take-home Assignment

## Introduction

This is "Front-end Take-home Assignment" which a theme is "Pokemon Market". Using using API endpoints given at [https://pokemontcg.io/](https://pokemontcg.io/).

I use Next.js with TypeScript, and Tailwind which I like to use in every project.

The most dificult part is setup Storybook because it is my first time using it.

And the most challenge part is unit test, I rarely write tests at frontend part.

Thank you for give me a fun and entertaining challenge, this project makes me growth a lot.

## Design

[Link to design](https://www.figma.com/file/OvbAJ7yvTzB3Yk8oIwSycd/Pokemon-Card-Market?node-id=7%3A37564)

## Stack

### Development

- Next.js with TypeScript
- Storybook

### Styling

- TailwindCSS
- scss

### Testing

- Jest
- React Test Renderer

## How to run this project

- install dependencies

```sh
yarn install or npm install
```

- set `pokemon tcg` API key in your `.env.local` file (if you can't find your `.env.local` file, just create one)

```env
# Take a look at `.env.example`
NEXT_PUBLIC_POKEMONTCG_API_KEY=your_key_here
```

- run project

```sh
yarn dev or npm run dev
```

- run test

```sh
yarn jest or npm run jest
```

- run Storybook

```sh
yarn storybook or npm run storybook
```
