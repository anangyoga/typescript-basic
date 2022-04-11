how to manage structure folder

1. create public folder where you store the whole public file such as index.thml, the .js file, and style.css
2. create src folder where we write the typescript in .ts extention
3. tsc --init to create tsconfig.json
4. open the tsconfig.json file, change the "rootDir": "./src" and the "outDir": "./public"
5. write something in .ts file and then run 'tsc -w' in your terminal to check if there's changes on .js file. there result should be the same as what we wrote in the .ts file
6. ANYTHING we create in ./src will end up in ./public, even when we create new file.ts, it will be compiled and stored in ./public automaticaly
7. "include": ["src"] add those script after the tsconfig.json module to make sure that only file inside ./src that will be compiled to ./public
