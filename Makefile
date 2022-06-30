.PHONY: build_front copy_front run_server

build_front:
	/bin/sh -c "cd frontend; npm install; npm run build;"

copy_front:
	/bin/sh -c "cp -a ${PWD}/frontend/dist/. ${PWD}/backend/src/views/"

run_server:
	/bin/sh -c "cd backend; npm install; npm run dev;"
