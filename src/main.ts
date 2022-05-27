import './style.css'
import * as PIXI from "pixi.js"

const createApp =  () => {
    const app = new PIXI.Application( { backgroundColor: 0x003333 } );
    document.body.appendChild( app.view );

    return app;
}

const createText = () => {
    const textStyle = new PIXI.TextStyle( { fill: 0xffffff } )
    const titleText = new PIXI.Text( "Hello World!", textStyle );
    titleText.position.set( 350, 300 );
    titleText.anchor.set(0.5);

    return titleText
}

const createDraggableLogo = async () => {
    const texture = await PIXI.Texture.fromURL('/src/assets/favicon.svg')
    const logo = new PIXI.Sprite(texture);

    function onDragStart(event) {
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
    }

    function onDragEnd() {
        this.alpha = 1;
        this.dragging = false;
        this.data = null;
    }

    function onDragMove() {
        if (this.dragging) {
            const newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }

    logo.position.set( 250, 200 );
    logo.anchor.set(0.5);
    logo.interactive = true;
    logo.buttonMode = true;
    logo
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);

    return logo;
}

const main = async () => {
    const app = createApp()
    const text = createText();
    const logo = await createDraggableLogo();

    app.ticker.add( delta => {
        text.rotation += 0.005 * ( 1 + delta );
    } );
    app.stage.addChild( text, logo );
}

main();