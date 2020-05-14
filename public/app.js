var $t$0, $b$0, $d$0;
require('imba/src/imba/index');
/*
javascript features work just fine with imbacompiler
*/

console.log("console.log");

/*
trying to render tags returns error: require is not defined.
Hello world message should appear if all is working properly.
*/

class AppRootComponent extends imba.tags.get('component','ImbaElement') {
	init$(){
		super.init$();return this.setAttribute('data-pzuaz7-b','');
	}
	
	render(){
		var $t$0, $c$0, $b$0, $d$0;
		
		$t$0=this;
		$t$0.open$();
		$c$0 = ($b$0=$d$0=1,$t$0.$) || ($b$0=$d$0=0,$t$0.$={});
		$b$0 || $t$0.insert$("hello world");
		$t$0.close$($d$0);
		return $t$0;
	}
}; imba.tags.define('app-root',AppRootComponent,{});
imba.mount((($t$0=imba.createComponent('app-root',0,null,null,null,null,null)),
$b$0 || !$t$0.setup || $t$0.setup($d$0),
$t$0.end$($d$0),
$t$0));
