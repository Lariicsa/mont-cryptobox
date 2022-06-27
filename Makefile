.PHONY: build_front

build_front:
	/bin/sh -c "cd frontend; npm install; npm run build;"
	/bin/sh -c ""