import './style.css'
import * as PIXI from "pixi.js"

const app = new PIXI.Application( { backgroundColor: 0x003333 } );
document.body.appendChild( app.view );
const textStyle = new PIXI.TextStyle( { fill: 0xffffff } )
const titleText = new PIXI.Text( "Hello World!", textStyle );
app.stage.addChild( titleText );
