var $t$0, $b$0, $d$0;
require('imba/src/imba/index');
/*
console.log works with imbacompiler
*/

console.log("console.log");

/*
I'm currently running imbac command on npm start. That is the only way I have gotten compiler to work, but it returns error: require is not defined.
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
