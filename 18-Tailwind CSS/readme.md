css ka framework h tailwind

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

mkdir my-project
cd my-project
npm init -y
npm install parcel
mkdir src
touch src/index.html


Install Tailwind CSS

npm install tailwindcss @tailwindcss/postcss



.postcssrc
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}

Import Tailwind CSS
Create a ./src/index.css file and add an @import for Tailwind CSS.

index.css
@import "tailwindcss";

Start your build process
Run your build process with npx parcel src/index.html.

Terminal
npx parcel src/index.html

    <link rel="stylesheet" href="./index.css" type="text/css">

