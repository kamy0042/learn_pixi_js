import './style.css'
import * as PIXI from "pixi.js"

const createApp = () => {
    const app = new PIXI.Application( { backgroundColor: 0x003333 } );
    document.body.appendChild( app.view );
    const textStyle = new PIXI.TextStyle( { fill: 0xffffff } )
    const titleText = new PIXI.Text( "Hello World!", textStyle );

    titleText.position.set( 350, 300 );
    titleText.anchor.set(0.5);

    app.ticker.add( delta => {
        titleText.rotation += 0.005 * ( 1 + delta );
    } );
    app.stage.addChild( titleText );

    return app;
}

const app = createApp();
