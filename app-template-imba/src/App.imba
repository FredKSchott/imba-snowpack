###
console.log works with imbacompiler
###
console.log "console.log"

###
I'm currently running imbac command on npm start. That is the only way I have gotten compiler to work, but it returns error: require is not defined.
Hello world message should appear if all is working properly.
###
tag app-root
	def render
		<self> "hello world!"
imba.mount <app-root>