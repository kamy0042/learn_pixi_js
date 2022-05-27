import './style.css'
import * as PIXI from "pixi.js"

const createApp = () => {
    const app = new PIXI.Application( { backgroundColor: 0x003333 } );
    document.body.appendChild( app.view );
    const textStyle = new PIXI.TextStyle( { fill: 0xffffff } )
    const titleText = new PIXI.Text( "Hello World!", textStyle );

    const onDragStart = (event) => {
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
    }

    const onDragEnd = () => {
        this.alpha = 1;
        this.dragging = false;
        // set the interaction data to null
        this.data = null;
    }

    const onDragMove = () => {
        if (this.dragging) {
            const newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }

    titleText.position.set( 350, 300 );
    titleText.anchor.set(0.5);
    titleText.interactive = true;
    titleText.buttonMode = true;

    app.ticker.add( delta => {
        titleText.rotation += 0.005 * ( 1 + delta );
    } );
    app.stage.addChild( titleText );

    return app;
}

const app = createApp();
