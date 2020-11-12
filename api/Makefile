info:
	@echo 'info:'
	@echo '     https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/'
init:
	npm init -y
	tsc --init

dir:
	mkdir dist
	mkdir -p src/controllers/todos
	mkdir -p src/models
	mkdir -p src/routes
	mkdir -p src/types
	touch src/app.ts
	touch src/controllers/todos/index.ts 
	touch src/models/todo.ts
	touch src/routes/index.ts
	touch src/types/todo.ts

lib:
	npm install typescript -D	
	npm install express cors mongoose
	npm install -D @types/node @types/express @types/mongoose @types/cors
	npm install -D concurrently nodemon


