css ka framework h tailwind

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
