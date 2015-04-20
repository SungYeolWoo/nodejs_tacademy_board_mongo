Tacademy Node.js 게시판 구현
================

***Data Stores***

	mongoDB

***Languages & Frameworks***

	ejs : view
	node - express
	javascript

***Protocol Definition***

	writeform  : get /board/write
	write : post /board/write
	write_300  : post /board/write300
	
	list : get /board/list, /board/list/:page
	
	read : get /board/read/:page/:num

	modifyform : get /board/update
	modify : post /board/update/:page/:num

	delete form : get /board/delete
	delete : post /board/delete

	show the post : get /board/read/:page/:postnum
____


