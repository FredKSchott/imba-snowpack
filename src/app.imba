###
javascript features work just fine with imbacompiler
###
console.log "console.log"

###
trying to render tags returns error: require is not defined.
Hello world message should appear if all is working properly.
###
tag app-root
	def render
		<self> "hello world"
imba.mount <app-root>